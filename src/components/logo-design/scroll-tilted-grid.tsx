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

/**
 * 16 unique default high-quality asset URLs.
 */
export const DEFAULT_GRID_IMAGES: readonly string[] = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
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

  const ty = useTransform(p, [0, 0.5, 1], ["40%", "0%", "-40%"], { ease: focusEase });
  const tz = useTransform(p, [0, 0.5, 1], [150, 0, 150], { ease: focusEase });
  const rx = useTransform(p, [0, 0.5, 1], [maxTilt, 0, -maxTilt], { ease: focusEase });

  const tx = useTransform(p, [0, 0.5, 1], [`${sign * 15}%`, "0%", `${sign * 15}%`], { ease: focusEase });
  const rot = useTransform(p, [0, 0.5, 1], [-sign * 3, 0, sign * 3], { ease: focusEase });
  const sk = useTransform(p, [0, 0.5, 1], [sign * 8, 0, -sign * 8], { ease: focusEase });

  const innerSY = useTransform(p, [0, 0.5, 1], [1.3, 1, 1.3], { ease: focusEase });

  const filter = useMotionTemplate`blur(${blur}px) brightness(${bright}) contrast(${contrast})`;

  if (reduce) {
    return (
      <figure ref={ref} style={{ position: "relative", zIndex: 10, margin: 0, width: "270px", height: "270px" }}>
        <div
          style={{
            position: "relative",
            width: "550px",
            height: "300px",
            overflow: "hidden",
            borderRadius: rounded,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `url("${src}")`,
            }}
          />
        </div>
      </figure>
    );
  }

  return (
    <motion.figure
      ref={ref}
      style={{
        position: "relative",
        zIndex: 10,
        margin: "0 auto",
        width: "550px",
        height: "300px",
        perspective: `${perspective}px`,
        willChange: "transform",
      }}
    >
      <motion.div
        style={{
          position: "relative",
          width: "550px",
          height: "300px",
          overflow: "hidden",
          willChange: "filter, transform",
          borderRadius: rounded,
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
  columns = 4,
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
    justifyItems: "center",
    alignItems: "center",
    boxSizing: "border-box",
    overflow: "hidden",
  };

  return (
    <div style={{ position: "relative", width: "100%", ...style }}>
      <div style={gridContainerStyle}>
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