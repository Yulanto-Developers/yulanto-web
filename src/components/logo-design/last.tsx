"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useQuoteModal } from "../home/home/myComponents/Content/QuoteContext";

// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

interface LogoBannerProps {
  imageSrc?: string;
  onCtaClick?: () => void;
}

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";

export default function LogoDesignBanner({
  imageSrc = DEFAULT_IMAGE,
  onCtaClick,
}: LogoBannerProps) {
  // Hook properly called inside the component body
  const { openModal } = useQuoteModal();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      className="px-about-6-area pt-50 pb-80 pb-lg-110"
      style={sectionStyle}
    >
      <div className="container container-1550">
        <div style={gridContainerStyle}>
          {/* Left Side: Animated Image with Badges (6 Columns / 50%) */}
          <div data-aos="fade-right" data-aos-delay="100" style={{ height: "100%" }}>
            <motion.div
              style={imageWrapperStyle}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={imageSrc}
                alt="Logo Design & Brand Identity"
                style={imageStyle}
              />
              <div style={imageOverlayStyle} />
            </motion.div>
          </div>

          {/* Right Side: Animated Content (6 Columns / 50%) */}
          <div data-aos="fade-left" data-aos-delay="200" style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={textContentStyle}>
              {/* Title Header */}
              <div className="px-project-title-box">
                <h4 className="px-about-title mb-20">
                  <span className="text-blue-about">
                    Looking for the Best{" "}
                  </span>
                  Logo Designers in Chennai?
                </h4>
              </div>

              {/* Highlights Sub-heading */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={highlightBoxStyle}
              >
                <p style={highlightTextStyle}>
                  Your logo is the foundation of your visual identity. Make it
                  distinctive, professional, and memorable.
                </p>
              </motion.div>

              {/* Main Body Paragraph */}
              <p className="text-figtree text-black mt-2">
                If you are searching for logo design in Chennai, a logo creator
                in Chennai, or a reliable logo design company in Chennai,{" "}
                <strong style={{ color: "#053456", fontWeight: 700 }}>
                  Yulanto Web Creations
                </strong>{" "}
                can help you create a brand identity that represents your
                business with confidence.
              </p>

              {/* Call-to-Action Text */}
              <p className="text-figtree text-black mt-2">
                Let's create a logo that makes your brand memorable.
              </p>

              <button
                onClick={() => {
                  if (onCtaClick) onCtaClick();
                  openModal();
                }}
                className="btn align-items-center gap-2 py-3 px-4 rounded-3 fw-bold text-decoration-none mt-2"
                style={{
                  display: 'inline-flex', // Changed from d-inline-flex to wrap content tightly
                  width: 'fit-content',   // Ensures it only takes up the space it needs
                  backgroundColor: '#053456',
                  color: '#ffffff',
                  fontSize: '15px',
                  transition: 'all 0.3s ease',
                  border: '1px solid #053456',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#042844';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#053456';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span style={{ fontFamily: "Figtree, Figtree Fallback" }}>Create Your Brand Logo</span>
                <FontAwesomeIcon icon={faPaperPlane} style={{ fontSize: '14px' }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Inline Styles (Pure CSS Objects)

const sectionStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  position: "relative",
  overflow: "hidden",
};

const gridContainerStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "48px",
  alignItems: "stretch",
};

const imageWrapperStyle: React.CSSProperties = {
  position: "relative",
  width: "100%",
  height: "100%",
  minHeight: "360px",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0 20px 40px rgba(5, 52, 86, 0.12)",
  backgroundColor: "#f8fafc",
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

const imageOverlayStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background:
    "linear-gradient(180deg, rgba(5, 52, 86, 0.05) 0%, rgba(5, 52, 86, 0.25) 100%)",
  pointerEvents: "none",
};

const textContentStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

const highlightBoxStyle: React.CSSProperties = {
  borderLeft: "4px solid #53ae7d",
  paddingLeft: "16px",
  marginTop: "4px",
  marginBottom: "4px",
};

const highlightTextStyle: React.CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: 600,
  color: "#053456",
  lineHeight: "1.5",
  margin: 0,
  fontFamily: "Figtree, Figtree Fallback",
};