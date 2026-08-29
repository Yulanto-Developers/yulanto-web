"use client";

import React from "react";
import { motion } from "framer-motion";

// Props Interfaces
export interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export interface ActionProps {
  text: string;
  onClick: () => void;
  className?: string;
}

export interface HeroSectionProps {
  title?: React.ReactNode;
  subtitle?: string;
  actions?: ActionProps[];
  stats?: StatProps[];
  images?: string[];
  className?: string;
}

// Framer Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

const textFadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fanSlots = [
  { rotate: -6, x: 30, ty: 16, zIndex: 1, margin: "0 -20px 0 0" },
  { rotate: 0, x: 0, ty: -8, zIndex: 2, margin: "0" },
  { rotate: 6, x: -30, ty: 16, zIndex: 1, margin: "0 0 0 -20px" },
];

const fanCardVariants = {
  hidden: (slot: (typeof fanSlots)[number]) => ({
    x: slot.x,
    rotate: slot.rotate,
    y: slot.ty + 40,
    opacity: 0,
  }),
  visible: (slot: (typeof fanSlots)[number]) => ({
    x: 0,
    rotate: slot.rotate,
    y: slot.ty,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

// Default fallback images from Unsplash
const defaultImages = [
  "assets/img/social/top-1.jpg",
  "assets/img/social/top-2.jpg",
  "assets/img/social/top-3.jpg",
];

export default function HeroSection({
  images = defaultImages,
}: HeroSectionProps) {
  // Defensive fallbacks to prevent `.map` on undefined
  const safeImages = Array.isArray(images) && images.length >= 3 ? images : defaultImages;

  return (
    <section
      style={{
        width: "100%",
        padding: "4rem 1.5rem",
        overflow: "hidden",
      }}
    >
      {/* Container wrapper for max-width constraint */}
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        {/* ROW 1: Title Section */}
        <motion.div
          className="row align-items-center mb-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="col-xl-3" variants={textFadeUpVariants}>
            <span className="tp-section-subtitle text-black blink-ball">
              Social Media Marketing Agency in Chennai
            </span>
          </motion.div>
          <motion.div className="col-xl-9" variants={textFadeUpVariants}>
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">Result-Driven Social Media </span>
                Marketing Strategies for Business Growth
              </h4>
              <p className="text-figtree text-black mt-2">
                As a leading social media marketing agency in Chennai, we help businesses build a strong online presence, connect with their target audience, increase brand awareness, generate quality leads, and drive meaningful website traffic.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ROW 2: Image Section (Fanned Gallery) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem 0",
          }}
        >
          {safeImages.slice(0, 3).map((src, i) => {
            const slot = fanSlots[i] || fanSlots[1];
            return (
              <motion.div
                key={src + i}
                custom={slot}
                variants={fanCardVariants}
                whileHover={{
                  scale: 1.08,
                  rotate: 0,
                  zIndex: 10,
                  y: slot.ty - 15,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                style={{
                  position: "relative",
                  flexShrink: 0,
                  overflow: "hidden",
                  borderRadius: "0.75rem",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                  outline: "1px solid rgba(0, 0, 0, 0.1)",
                  width: i === 1 ? "280px" : "240px",
                  aspectRatio: "4 / 5",
                  zIndex: slot.zIndex,
                  margin: slot.margin,
                  backgroundColor: "#ffffff",
                  cursor: "pointer",
                }}
              >
                <img
                  src={src}
                  alt={`Hero image ${i + 1}`}
                  decoding="async"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* ROW 3: Text Content Below */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <motion.p className="text-figtree text-black mt-2" variants={textFadeUpVariants}>
            Our social media marketing in Chennai strategies are customized to match your business goals, industry, audience, and marketing budget. Our team combines creative content, audience targeting, paid advertising, social media optimization, analytics, and continuous campaign monitoring to create measurable digital marketing results.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}