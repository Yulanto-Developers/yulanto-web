"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import "./hero.css";

interface HeroProps {
  images: string[];
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ images, className = "" }) => {
  // Duplicate images array once to create a seamless 50% loop offset
  const duplicatedImages = [...images, ...images];

  return (
    <section className={`animated-marquee-hero overflow-hidden ${className}`}>
      {/* Content Container */}
      <div className="container position-relative z-2">
        <div className="row justify-content-start">

          <div className="row  align-items-center">
            <div className="col-xl-3">
              <span className="tp-section-subtitle text-black blink-ball">
                Join Our Journey


              </span>
            </div>

            <div className="col-xl-9">
              <div className="px-project-title-box">

                <h4 className="px-about-title mb-20">
                  <span className="text-blue-about">Shape Your Future
                  </span> With Us
                </h4>
                <p className="text-figtree text-black mt-2 font-paragraph-cls">
                  Our aim is to create potential career pathways and foster opportunities for growth.

                  We provide avenues for career advancement through the accumulation of experience, the acquisition of new skills, the assumption of leadership responsibilities, and the continuous update on industry trends and technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Image Marquee */}
      <div className="marquee-wrapper position-absolute bottom-0 start-0 w-100 overflow-hidden">
        <motion.div
          className="d-flex gap-3 marquee-track"
          animate={{
            x: ["0%", "-50%"], // Animates exactly 50% for an invisible, seamless restart
          }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="marquee-card position-relative flex-shrink-0"
              style={{
                transform: `rotate(${index % 2 === 0 ? -2 : 5}deg)`,
              }}
            >
              <img
                src={src}
                alt={`Showcase image ${index + 1}`}
                className="w-100 h-100 object-fit-cover rounded-4 shadow-sm"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;