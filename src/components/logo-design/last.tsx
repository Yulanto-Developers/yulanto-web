"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faArrowRight,
  faShieldHalved,
  faAward,
} from "@fortawesome/free-solid-svg-icons";

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Inline Styles (Pure CSS Objects - No Tailwind CSS Used)

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

const floatingBadgeTopStyle: React.CSSProperties = {
  position: "absolute",
  top: "24px",
  left: "24px",
  backgroundColor: "#ffffff",
  padding: "12px 18px",
  borderRadius: "14px",
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.12)",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  zIndex: 10,
  border: "1px solid rgba(83, 174, 125, 0.2)",
};

const floatingBadgeBottomStyle: React.CSSProperties = {
  position: "absolute",
  bottom: "24px",
  right: "24px",
  backgroundColor: "#ffffff",
  padding: "12px 18px",
  borderRadius: "14px",
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.12)",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  zIndex: 10,
  border: "1px solid rgba(83, 174, 125, 0.2)",
};

const badgeIconBoxStyle: React.CSSProperties = {
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  backgroundColor: "#f0fdf4",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const badgeTitleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: "0.875rem",
  fontWeight: 700,
  color: "#053456",
  lineHeight: 1.2,
};

const badgeSubtextStyle: React.CSSProperties = {
  margin: "2px 0 0 0",
  fontSize: "0.75rem",
  color: "#64748b",
  lineHeight: 1.2,
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

const paragraphStyle: React.CSSProperties = {
  fontSize: "1.0625rem",
  lineHeight: "1.7",
  color: "#334155",
  margin: "0",
  fontFamily: "Figtree, sans-serif",
};

const ctaWrapperStyle: React.CSSProperties = {
  marginTop: "12px",
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "16px",
  padding: "20px 24px",
};

const ctaInnerStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
};

const ctaTextStyle: React.CSSProperties = {
  fontSize: "1rem",
  fontWeight: 600,
  color: "#053456",
  margin: 0,
  fontFamily: "Figtree, sans-serif",
};

const ctaButtonStyle: React.CSSProperties = {
  backgroundColor: "#53ae7d",
  color: "#ffffff",
  border: "none",
  borderRadius: "10px",
  padding: "12px 22px",
  fontSize: "0.9375rem",
  fontWeight: 600,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 12px rgba(83, 174, 125, 0.3)",
};