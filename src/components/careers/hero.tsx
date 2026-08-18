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
          <div className="col-12 col-lg-10 text-start">
            {/* Title */}
            <h4 className="px-about-title mb-3">
              <span className="text-blue-about">Careers</span>
             
            </h4>

            {/* Description */}
            <div className="tp-contact-us-text tp_fade_anim">
              <p className="m-0 mb-2">
                Our aim is to create potential career pathways and foster opportunities for growth.

              </p>
              <p className="m-0 mb-2">
                We provide avenues for career
                advancement through the accumulation of experience, the acquisition of new skills,
                the assumption of leadership responsibilities, and the continuous update on industry
                trends and technologies.
              </p>
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