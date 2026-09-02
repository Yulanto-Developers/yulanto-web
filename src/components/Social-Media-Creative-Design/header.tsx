"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

interface ImageCard {
  image: string;
  alt?: string;
}

interface SocialMediaHeroProps {
  subtitle?: string;
  titleBlue?: string;
  titleBlack?: string;
  descriptionTop?: string;
  descriptionBottom?: string;
  images?: ImageCard[];
  className?: string;
}

const defaultImages: ImageCard[] = [
  { image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&auto=format&fit=crop&q=80", alt: "Top Left Post" },
  { image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500&auto=format&fit=crop&q=80", alt: "Bottom Left Post" },
  { image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop&q=80", alt: "Phone Mockup Center" },
  { image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80", alt: "Top Right Post" },
  { image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&auto=format&fit=crop&q=80", alt: "Bottom Right Post" },
];

export function PulseFitHero({
//   subtitle = "Social Media Creative Design in Chennai",
  titleBlue = "Engaging Social Media ",
  titleBlack = "Creatives for Every Platform",
  descriptionTop = "Your brand needs more than just attractive graphics. Every creative should have a purpose — whether it is to promote a product, announce an offer, educate your audience, generate enquiries, or strengthen brand awareness.",
//   descriptionBottom = "As a creative packaging design company in Chennai, we combine visual appeal, brand identity, product information, and marketing strategy to create packaging that catches attention and communicates your product value clearly.",
  images = defaultImages,
  className = "",
}: SocialMediaHeroProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className={`px-about-6-area pt-50 pb-80 pb-lg-110 overflow-hidden ${className}`}>
      <div className="container container-1550">
        <div className="row align-items-center" data-aos="fade-up">
          {/* Subtitle Row */}
          <div className="col-12 mb-3" data-aos="fade-right" data-aos-delay="100">
            {/* <span className="tp-section-subtitle text-black blink-ball">
              {subtitle}
            </span> */}
          </div>

          {/* Left Side: Content Block */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0" data-aos="fade-right" data-aos-delay="200">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">{titleBlue} </span>
                {titleBlack}
              </h4>
              <p className="text-figtree text-black mt-2">
                {descriptionTop}
              </p>
              {/* <p className="text-figtree text-black mt-3">
                {descriptionBottom}
              </p> */}
            </div>
          </div>

          {/* Right Side: Floating Layout matching reference image */}
          <div className="col-lg-6 col-md-12" data-aos="fade-left" data-aos-delay="300">
            <div 
              className="position-relative d-flex justify-content-center align-items-center" 
              style={{ minHeight: "460px" }}
            >
              {/* Card 1: Top Left */}
              <motion.div
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="position-absolute rounded-3 shadow-lg overflow-hidden"
                style={{
                  width: "36%",
                  top: "2%",
                  left: "2%",
                  transform: "rotate(-6deg)",
                  zIndex: 1,
                }}
              >
                <img
                  src={images[0]?.image}
                  alt={images[0]?.alt || "Creative post 1"}
                  className="img-fluid w-100 d-block"
                />
              </motion.div>

              {/* Card 2: Bottom Left */}
              <motion.div
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="position-absolute rounded-3 shadow-lg overflow-hidden"
                style={{
                  width: "36%",
                  bottom: "2%",
                  left: "0%",
                  transform: "rotate(3deg)",
                  zIndex: 2,
                }}
              >
                <img
                  src={images[1]?.image}
                  alt={images[1]?.alt || "Creative post 2"}
                  className="img-fluid w-100 d-block"
                />
              </motion.div>

              {/* Card 3: Center Phone Mockup (Main Highlight) */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="position-relative shadow-2xl rounded-4 overflow-hidden"
                style={{
                  width: "44%",
                  zIndex: 5,
                  transform: "rotate(-2deg)",
                }}
              >
                <img
                  src={images[2]?.image}
                  alt={images[2]?.alt || "Mobile screen mockup"}
                  className="img-fluid w-100 d-block"
                />
              </motion.div>

              {/* Card 4: Top Right */}
              <motion.div
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="position-absolute rounded-3 shadow-lg overflow-hidden"
                style={{
                  width: "36%",
                  top: "6%",
                  right: "2%",
                  transform: "rotate(4deg)",
                  zIndex: 1,
                }}
              >
                <img
                  src={images[3]?.image}
                  alt={images[3]?.alt || "Creative post 3"}
                  className="img-fluid w-100 d-block"
                />
              </motion.div>

              {/* Card 5: Bottom Right */}
              <motion.div
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="position-absolute rounded-3 shadow-lg overflow-hidden"
                style={{
                  width: "36%",
                  bottom: "6%",
                  right: "4%",
                  transform: "rotate(-4deg)",
                  zIndex: 3,
                }}
              >
                <img
                  src={images[4]?.image}
                  alt={images[4]?.alt || "Creative post 4"}
                  className="img-fluid w-100 d-block"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PulseFitHero;