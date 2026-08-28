"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface HeroSectionProps {
  sectionSubtitle?: string;
  title: React.ReactNode;
  subtitle: string;
  bulletPoints: string[];
  images: string[];
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const HeroSection = ({
  sectionSubtitle,
  title,
  subtitle,
  bulletPoints,
  images,
  className = "",
}: HeroSectionProps) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      className={`px-about-6-area pt-50 pb-80 pb-lg-110 ${className}`}
      style={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#fff",
      }}
    >
      <div className="container container-1550">
        <div className="row align-items-center">
          {/* Left Column: 4-Image Grid */}
          <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
            <motion.div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "16px",
                width: "100%",
                maxWidth: "520px",
                margin: "0 auto",
              }}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {images.slice(0, 4).map((imgUrl, index) => (
                <motion.div
                  key={index}
                  style={{
                    borderRadius: "16px",
                    backgroundColor: "#f3f4f6",
                    padding: "8px",
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    aspectRatio: "1 / 1",
                    overflow: "hidden",
                  }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={imgUrl}
                    alt={`Logo concept ${index + 1}`}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "12px",
                      objectFit: "cover",
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Title Section + Text Content */}
          <div className="col-lg-6" data-aos="fade-left">
            <motion.div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "left",
              }}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Title Section */}
              <div
                className="row align-items-center mb-3 style-override"
                style={{ width: "100%" }}
              >
                {sectionSubtitle && (
                  <div className="col-12 mb-2">
                    <span className="tp-section-subtitle text-black blink-ball">
                      {sectionSubtitle}
                    </span>
                  </div>
                )}
                <div className="col-12">
                  <div className="px-project-title-box">
                    <motion.h4
                      className="px-about-title mb-20"
                      variants={itemVariants}
                    >
                      {title}
                    </motion.h4>
                    <motion.p
                      className="text-figtree text-black mt-2"
                      style={{ fontSize: "1.125rem", lineHeight: "1.7" }}
                      variants={itemVariants}
                    >
                      {subtitle}
                    </motion.p>
                  </div>
                </div>
              </div>
                <h5 className="mt-20">Our services include:</h5>
              {/* Bullet Points Grid (2 Columns) */}
              <motion.ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  marginTop: "16px",
                  marginBottom: "24px",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "12px 16px",
                  width: "100%",
                }}
                variants={itemVariants}
              >
                {bulletPoints.map((point, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "#1a1a1a",
                      fontSize: "0.9375rem",
                      fontFamily: "text-figtree",
                    }}
                    data-aos="fade-up"
                    data-aos-delay={(index % 2) * 50}
                  >
                    <CheckCircle2
                      style={{
                        height: "18px",
                        width: "18px",
                        flexShrink: 0,
                        color: "#53ae7d",
                      }}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </motion.ul>

              {/* Stats Section */}
              <motion.div
                style={{
                  marginTop: "16px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "32px",
                  alignItems: "center",
                }}
                variants={itemVariants}
              >
               
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;