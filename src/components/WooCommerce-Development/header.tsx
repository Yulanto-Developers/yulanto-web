"use client";

import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";

// High-quality graphic design stock images
const graphicDesignImages = [
  "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542744094-3a31b272c490?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop",
];

const Auto3DCarousel = memo(() => {
  const cards = useMemo(() => graphicDesignImages, []);
  
  // Increased cylinder width and radius for a larger circular 3D carousel ring
  const cylinderWidth = 2200;
  const faceCount = cards.length;
  const faceWidth = cylinderWidth / faceCount;
  const radius = cylinderWidth / (2 * Math.PI);

  const rotation = useMotionValue(0);
  const transform = useTransform(
    rotation,
    (value) => `rotate3d(0, 1, 0, ${value}deg)`
  );

  // Smooth continuous auto-rotation loop
  useAnimationFrame((_, delta) => {
    const currentRotation = rotation.get();
    // Adjust speed by tweaking multiplier (0.015)
    rotation.set((currentRotation + delta * 0.015) % 360);
  });

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        perspective: "1200px",
        transformStyle: "preserve-3d",
        willChange: "transform",
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{
          position: "relative",
          display: "flex",
          height: "100%",
          transformOrigin: "center",
          justifyContent: "center",
          transform,
          rotateY: rotation,
          width: cylinderWidth,
          transformStyle: "preserve-3d",
          pointerEvents: "none", // Image click removed completely
        }}
      >
        {cards.map((imgUrl, i) => (
          <div
            key={`carousel-card-${i}`}
            style={{
              position: "absolute",
              display: "flex",
              height: "100%",
              transformOrigin: "center",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "18px",
              padding: "10px",
              width: `${faceWidth}px`,
              transform: `rotateY(${
                i * (360 / faceCount)
              }deg) translateZ(${radius}px)`,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <img
              src={imgUrl}
              alt={`Graphic Design Portfolio ${i + 1}`}
              style={{
                width: "100%",
                borderRadius: "16px",
                objectFit: "cover",
                aspectRatio: "1 / 1",
                boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(226, 232, 240, 0.8)",
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
});

Auto3DCarousel.displayName = "Auto3DCarousel";

export default function Header() {
  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110">
      <div className="container container-1550">
        <div className="row align-items-center" data-aos="fade-up">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
                WooCommerce Development Services in Chennai
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">
                Build a Powerful Online Store with {" "}
                </span>
                Professional WooCommerce Development
              </h4>
              <p className="text-figtree text-black mt-2">
               Looking for reliable WooCommerce development services in Chennai? We help businesses, startups, retailers, manufacturers, and growing brands build professional, secure, and user-friendly ecommerce websites with WordPress and WooCommerce.

As an experienced WooCommerce development company in Chennai, we create ecommerce websites that are designed around your business goals, products, customers, and growth plans.
              </p>
            </div>
          </div>
        </div>

        {/* 3D Auto-scrolling Carousel Container */}
        <div
          style={{
            marginTop: "20px",
            height: "400px",
            width: "100%",
          
            padding: "16px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Auto3DCarousel />
        </div>
        <p className="text-figtree text-black mt-2">From a simple one page ecommerce website to a fully customized online store, our team provides flexible solutions that are easy to manage and scalable for future requirements.

Our WooCommerce website development service covers planning, UI/UX design, development, customization, payment gateway integration, shipping configuration, product management, SEO-friendly setup, testing, deployment, and ongoing support.</p>
      </div>
    </section>
  );
}