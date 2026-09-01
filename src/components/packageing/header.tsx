"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

interface ProgramCard {
  image: string;

  onClick?: () => void;
}

interface PulseFitHeroProps {
  titleBlue?: string;
  titleBlack?: string;
  description?: string;
  programs?: ProgramCard[];
  className?: string;
}

const defaultPrograms: ProgramCard[] = [
  {
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500&auto=format&fit=crop&q=80",
  
  },
  {
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80",
   
  },
  {
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&auto=format&fit=crop&q=80",
   
  },
  {
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&auto=format&fit=crop&q=80",
   
   
  },
];

export function PulseFitHero({
  programs = defaultPrograms,
  className = "",
}: PulseFitHeroProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110 overflow-hidden">
      <div className="container container-1550">
        
        <div className="row align-items-center" data-aos="fade-up">
          <div className="col-xl-3" data-aos="fade-right" data-aos-delay="100">
            <span className="tp-section-subtitle text-black blink-ball">
              Packaging Design Company in Chennai
            </span>
          </div>

          <div className="col-xl-9" data-aos="fade-left" data-aos-delay="200">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">Packaging Designs That Make</span> Your Brand Stand Out 
              </h4>
              <p className="text-figtree text-black mt-2">
                Your packaging is often the first physical interaction customers have with your brand. At Yulanto Web Creations, we create attractive, practical, and brand-focused packaging designs that help products stand out on shelves and digital marketplaces.

              </p>
            </div>
          </div>
        </div>

        {/* Animated Carousel Section */}
        {programs.length > 0 && (
          <div
            className="w-100 overflow-hidden position-relative py-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {/* Edge Fading Overlays */}
            <div
              className="position-absolute top-0 bottom-0 start-0 z-2 pointer-events-none"
              style={{
                width: "120px",
              }}
            />
            <div
              className="position-absolute top-0 bottom-0 end-0 z-2 pointer-events-none"
              style={{
                width: "120px",
              }}
            />

            {/* Seamless Infinite Loop Container */}
            <motion.div
              className="d-flex align-items-center gap-4"
              animate={{
                x: [0, -((programs.length * 380) / 2)],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: Math.max(programs.length * 4, 15),
                  ease: "linear",
                },
              }}
              style={{ paddingLeft: "24px" }}
            >
              {[...programs, ...programs].map((program, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03, y: -8 }}
                  transition={{ duration: 0.3 }}
                  onClick={program.onClick}
                  className="flex-shrink-0 cursor-pointer position-relative overflow-hidden rounded-4 shadow-sm"
                  style={{
                    width: "320px",
                    height: "360px",
                  }}
                >
                  <img
                    src={program.image}
                  
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  {/* Dark Image Overlay */}
                  <div
                    className="position-absolute inset-0"
                    style={{
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.8) 100%)",
                    }}
                  />

               
                </motion.div>
              ))}
            </motion.div>
          
          </div>
        )}
          <p  className="text-figtree text-black mt-2">                As a creative packaging design company in Chennai, we combine visual appeal, brand identity, product information, and marketing strategy to create packaging that catches attention and communicates your product value clearly.
 </p>

      </div>
    </section>
  );
}
