import {
  Renderer,
  Program,
  Mesh,
  Vec2,
  Texture,
  Flowmap,
  Plane,
} from "ogl";

export function initFlowImageDistortion(
  selector: string = ".tp-image-distortion"
): (() => void) | void {

  const el = document.querySelector(selector) as HTMLElement | null;

  if (!el) return;

  // prevent duplicate canvas
  if (el.querySelector("canvas")) return;

  const root = el;

  const imageSrc = el.getAttribute("data-background") ?? "";

  // ===== Vertex =====
  const vertex = `
    attribute vec2 uv;
    attribute vec2 position;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = vec4(position, 0.0, .45);
    }
  `;

  // ===== Fragment =====
  const fragment = `
    precision highp float;

    uniform sampler2D tImage;
    uniform sampler2D tFlow;

    varying vec2 vUv;

    void main() {

      vec3 flow = texture2D(tFlow, vUv).rgb;

      vec2 uv = vUv;

      uv += (flow.rg * flow.b * 50.0);

      vec3 tex = texture2D(tImage, uv).rgb;

      gl_FragColor.rgb = tex;
      gl_FragColor.a = 1.0;
    }
  `;

  // ===== Renderer =====
  const renderer = new Renderer({
    dpr: Math.min(window.devicePixelRatio, 2),
    alpha: true,
  });

  const gl = renderer.gl;

  el.appendChild(gl.canvas);

  // ===== Canvas Style =====
  gl.canvas.style.position = "absolute";
  gl.canvas.style.top = "0";
  gl.canvas.style.left = "0";
  gl.canvas.style.width = "100%";
  gl.canvas.style.height = "100%";
  gl.canvas.style.pointerEvents = "none";

  // ===== Mouse =====
  const mouse = new Vec2(0.5, 0.5);
  const lastMouse = new Vec2(0.5, 0.5);
  const velocity = new Vec2();

  let aspect = 1;

  // ===== Resize =====
  function resize(): void {

    const rect = root.getBoundingClientRect();

    aspect = rect.width / rect.height;

    renderer.setSize(rect.width, rect.height);

    gl.canvas.width = rect.width;
    gl.canvas.height = rect.height;
  }

  window.addEventListener("resize", resize);

  resize();

  // ===== Flowmap =====
  const flowmap = new Flowmap(gl, {
    falloff: 0.3,
    dissipation: 0.95,
    size: 1024,
  });

  // ===== Geometry =====
  const geometry = new Plane(gl);

  // ===== Texture =====
  const texture = new Texture(gl);

  const img = new Image();

  img.crossOrigin = "anonymous";

  img.onload = (): void => {

    texture.image = img;

    texture.minFilter = gl.LINEAR;
    texture.magFilter = gl.LINEAR;

    texture.wrapS = gl.CLAMP_TO_EDGE;
    texture.wrapT = gl.CLAMP_TO_EDGE;
  };

  img.src = imageSrc;

  // ===== Program =====
  const program = new Program(gl, {
    vertex,
    fragment,
    uniforms: {
      tImage: { value: texture },
      tFlow: flowmap.uniform,
    },
  });

  // ===== Mesh =====
  const mesh = new Mesh(gl, {
    geometry,
    program,
  });

  // ===== Mouse Move =====
  function onMove(e: MouseEvent | TouchEvent): void {

    const rect = root.getBoundingClientRect();

    const clientX =
      "touches" in e ? e.touches[0].clientX : e.clientX;

    const clientY =
      "touches" in e ? e.touches[0].clientY : e.clientY;

    mouse.set(
      (clientX - rect.left) / rect.width,
      1 - (clientY - rect.top) / rect.height
    );
  }

  function touchMoveHandler(e: TouchEvent): void {
    if (e.touches.length > 0) {
      onMove(e);
    }
  }

  el.addEventListener("mousemove", onMove);

  el.addEventListener("touchmove", touchMoveHandler);

  // ===== Animation =====
  const spring = 0.04;
  const friction = 0.8;

  let animationFrameId = 0;

  function update(): void {

    const springVel = new Vec2();

    springVel
      .copy(mouse)
      .sub(lastMouse)
      .multiply(spring);

    velocity
      .add(springVel)
      .multiply(friction);

    lastMouse.add(velocity);

    flowmap.mouse.copy(lastMouse);

    flowmap.velocity.copy(velocity);

    flowmap.aspect = aspect;

    flowmap.update();

    renderer.render({
      scene: mesh,
    });

    animationFrameId = requestAnimationFrame(update);
  }

  update();

  // ===== Cleanup =====
  return (): void => {

    cancelAnimationFrame(animationFrameId);

    window.removeEventListener("resize", resize);

    el.removeEventListener("mousemove", onMove);

    el.removeEventListener(
      "touchmove",
      touchMoveHandler
    );

    gl.canvas.remove();
  };
}