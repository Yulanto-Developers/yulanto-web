"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export const Header: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      className="px-about-6-area pt-50 pb-80 pb-lg-110"
      style={{ overflow: "hidden" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container container-1550">
        <div className="row align-items-center">
          {/* Main Title Section */}
          <div className="col-xl-12 mb-30">
            <motion.div
              className="px-project-title-box"
              variants={containerVariants}
            >
              <motion.h4
                className="px-about-title mb-20"
               
              > 
                <span className="text-blue-about" >
                  Looking for a WordPress
                </span> Website Development Company?
              </motion.h4>
            </motion.div>
          </div>

          {/* Left Column: Key Information Box */}
          <div className="col-lg-7 col-xl-7 mb-30 mb-lg-0">
            <motion.div
              variants={itemVariants}
              style={{
                backgroundColor: "#f8fafc",
                padding: "36px",
                borderRadius: "20px",
                borderLeft: "6px solid #53ae7d",
                boxShadow: "0 10px 30px rgba(5, 52, 86, 0.04)",
              }}
            >
              <p
                className="text-figtree text-black mt-2"
                style={{
                  fontSize: "15px !important",
                  color: "#053456",
                  lineHeight: "1.8",
                  margin: "0 0 16px 0",
                }}
              >
                Choosing the right WordPress website developer can make a
                significant difference to your website's design, performance,
                usability, and future scalability.
              </p>

              <p
                className="text-figtree text-black mt-2"
                style={{
                  fontSize: "15px !important",
                  color: "#053456",
                  lineHeight: "1.8",
                  margin: 0,
                }}
              >
                At Yulanto Web Creations, we combine WordPress web design,
                development, UI/UX, SEO-friendly development, and ongoing support
                to deliver websites that are built around your business
                requirements.
              </p>
            </motion.div>
          </div>

          {/* Right Column: CTA Banner & Button */}
          <div className="col-lg-5 col-xl-5">
            <motion.div
              variants={itemVariants}
              style={{
                backgroundColor: "#053456",
                padding: "36px",
                borderRadius: "20px",
                color: "#ffffff",
                boxShadow: "0 12px 30px rgba(5, 52, 86, 0.15)",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <p
                className="text-figtree text-white mt-2"
                style={{
                  fontSize: "15px !important",
                 
                }}
              >
                If you are searching for a WordPress development company in
                Chennai, a WordPress website design agency, or a reliable
                WordPress website developer near you, talk to our team about your
                project requirements.
              </p>

              <p
                className="text-figtree text-black mt-2"
                style={{
                  fontSize: "15px !important",
                  color: "#53ae7d !important",
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                Let's build a professional WordPress website that helps your
                business grow online.
              </p>

              {/* Let's Talk Button */}
              <div style={{ marginTop: "10px" }}>
                <a
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "14px 32px",
                    backgroundColor: "#53ae7d",
                    color: "#ffffff",
                    fontSize: "15px",
                    fontWeight: 700,
                    borderRadius: "50px",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#43966a";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#53ae7d";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Let's Talk
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Header;