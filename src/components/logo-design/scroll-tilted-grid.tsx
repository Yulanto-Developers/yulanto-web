"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
  cubicBezier,
} from "framer-motion";

export const DEFAULT_GRID_IMAGES: readonly string[] = [
  "assets/img/logodesign/logos/Design-portfolio-1.jpg",
  "https://images.unsplash.com/photo-1550585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
];

const easeIntoFocus = cubicBezier(0.22, 1, 0.36, 1);
const easeOutOfFocus = cubicBezier(0, 0, 0.58, 1);
const focusEase: [typeof easeIntoFocus, typeof easeOutOfFocus] = [
  easeIntoFocus,
  easeOutOfFocus,
];

type Side = "L" | "M" | "R";

type TileConfig = {
  perspective: number;
  maxTilt: number;
  maxBlur: number;
  rounded: string;
};

const mobileStyles = `
  .scroll-tilted-grid-wrapper {
    max-width: 100% !important;
    overflow-x: hidden !important;
    overflow-y: hidden !important;
  }
  @media (max-width: 768px) {
    .scroll-tilted-grid-container {
      grid-template-columns: 1fr !important;
      gap: 16px !important;
    }
    .scroll-tilted-figure,
    .scroll-tilted-figure > div {
      width: 100% !important;
      max-width: 100% !important;
      height: 250px !important;
      perspective: none !important;
      transform: none !important;
    }
  }
`;

function Tile({
  src,
  side,
  config,
}: {
  src: string;
  side: Side;
  config: TileConfig;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress: p } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const reduce = useReducedMotion();
  const sign = side === "L" ? -1 : side === "R" ? 1 : 0;
  const { perspective, maxTilt, maxBlur, rounded } = config;

  const blur = useTransform(p, [0, 0.5, 1], [maxBlur, 0, maxBlur], { ease: focusEase });
  const bright = useTransform(p, [0, 0.5, 1], [0.2, 1, 0.2], { ease: focusEase });
  const contrast = useTransform(p, [0, 0.5, 1], [2, 1, 2], { ease: focusEase });

  const ty = useTransform(p, [0, 0.5, 1], ["30%", "0%", "-30%"], { ease: focusEase });
  const tz = useTransform(p, [0, 0.5, 1], [100, 0, 100], { ease: focusEase });
  const rx = useTransform(p, [0, 0.5, 1], [maxTilt, 0, -maxTilt], { ease: focusEase });

  // Reduced horizontal shift range to completely prevent overflowing the viewport edge
  const tx = useTransform(p, [0, 0.5, 1], [`${sign * 4}%`, "0%", `${sign * 4}%`], { ease: focusEase });
  const rot = useTransform(p, [0, 0.5, 1], [-sign * 1.5, 0, sign * 1.5], { ease: focusEase });
  const sk = useTransform(p, [0, 0.5, 1], [sign * 2, 0, -sign * 2], { ease: focusEase });

  const innerSY = useTransform(p, [0, 0.5, 1], [1.2, 1, 1.2], { ease: focusEase });

  const filter = useMotionTemplate`blur(${blur}px) brightness(${bright}) contrast(${contrast})`;

  if (reduce) {
    return (
      <figure ref={ref} className="scroll-tilted-figure" style={{ position: "relative", zIndex: 10, margin: 0, width: "100%", height: "250px" }}>
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", borderRadius: rounded, backgroundColor: "#ffffff" }}>
          <div style={{ position: "absolute", inset: 0, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url("${src}")` }} />
        </div>
      </figure>
    );
  }

  return (
    <motion.figure
      ref={ref}
      className="scroll-tilted-figure"
      style={{
        position: "relative",
        zIndex: 10,
        margin: "0 auto",
        width: "100%",
        maxWidth: "550px",
        height: "390px",
        perspective: `${perspective}px`,
        willChange: "transform",
      }}
    >
      <motion.div
        style={{
          position: "relative",
          width: "100%",
          height: "390px",
          overflow: "hidden",
          willChange: "filter, transform",
          borderRadius: rounded,
          backgroundColor: "#ffffff",
          filter,
          x: tx,
          y: ty,
          z: tz,
          rotate: rot,
          rotateX: rx,
          skewX: sk,
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url("${src}")`,
            scaleY: innerSY,
            backfaceVisibility: "hidden",
            willChange: "transform",
          }}
        />
      </motion.div>
    </motion.figure>
  );
}

export type ScrollTiltedGridProps = {
  images?: readonly string[];
  loop?: boolean;
  initialCycles?: number;
  gap?: string;
  perspective?: number;
  maxTilt?: number;
  maxBlur?: number;
  rounded?: string;
  columns?: number;
  style?: React.CSSProperties;
};

export function ScrollTiltedGrid({
  images = DEFAULT_GRID_IMAGES,
  loop = false,
  initialCycles = 1,
  gap = "24px",
  perspective = 900,
  maxTilt = 35,
  maxBlur = 4,
  rounded = "12px",
  columns = 2,
  style,
}: ScrollTiltedGridProps = {}) {
  const [cycles, setCycles] = useState(loop ? initialCycles : 1);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loop) return;
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setCycles((c) => c + 1);
        }
      },
      { rootMargin: "800px 0px 800px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [loop]);

  const items = useMemo(
    () =>
      loop
        ? Array.from({ length: cycles }, () => images).flat()
        : [...images],
    [loop, cycles, images]
  );

  const config = useMemo<TileConfig>(
    () => ({ perspective, maxTilt, maxBlur, rounded }),
    [perspective, maxTilt, maxBlur, rounded]
  );

  const getSide = (index: number): Side => {
    const pos = index % columns;
    if (pos === 0 || pos === 1) return "L";
    if (pos === columns - 1 || pos === columns - 2) return "R";
    return "M";
  };

  const gridContainerStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gap,
    width: "100%",
    maxWidth: "100%",
    justifyItems: "center",
    alignItems: "center",
    boxSizing: "border-box",
  };

  return (
    <div 
      className="scroll-tilted-grid-wrapper" 
      style={{ 
        position: "relative", 
        width: "100%", 
        maxWidth: "100%", 
        overflowX: "hidden", 
        overflowY: "visible",
        boxSizing: "border-box",
        ...style 
      }}
    >
      <style>{mobileStyles}</style>
      <div style={gridContainerStyle} className="scroll-tilted-grid-container">
        {items.map((src, i) => (
          <Tile
            key={`${i}-${src}`}
            src={src}
            side={getSide(i)}
            config={config}
          />
        ))}
      </div>
      {loop ? (
        <div ref={sentinelRef} aria-hidden style={{ height: "1px", width: "100%" }} />
      ) : null}
    </div>
  );
}