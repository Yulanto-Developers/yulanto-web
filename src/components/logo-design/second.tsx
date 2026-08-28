"use client";

import React, { useState } from "react";
import "aos/dist/aos.css";
import { CheckCircle2 } from "lucide-react";

interface HeroProps {
  imageSrc?: string | null;
}

const FALLBACK_IMAGE =
  "assets/img/social/bootom-1.jpg";
 const featuresList = [
  "Understanding your business and brand personality",
  "Researching your target audience and industry",
  "Developing creative logo concepts",
  "Selecting suitable typography and color combinations",
  "Creating distinctive symbols and visual elements",
  "Refining the design based on your feedback",
  "Delivering high-quality files for print and digital use",
];

export default function Hero({ imageSrc }: HeroProps) {
  const initialSrc = imageSrc && imageSrc.trim() !== "" ? imageSrc : FALLBACK_IMAGE;
  const [currentSrc, setCurrentSrc] = useState<string>(initialSrc);

  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110" style={{
      backgroundColor: "#ffffff",

    }}>
      <div className="container container-1550">
        <div style={heroWrapperStyle}>
          <div style={gridStyle}>
            {/* Text Side */}
            <div style={textColumnStyle}>
              <span className="tp-section-subtitle text-black blink-ball">
             Professional Logo Design in Chennai
              </span>

              <div>
                <h4 className="px-about-title mb-20" >
                  <span className="text-blue-about">
                    Logos Designed to Make {" "}
                  </span>
                  Your Brand Recognizable

                </h4>

                <p className="text-figtree text-black mt-2" style={paragraphStyle}>
                Your logo is often the first visual element customers notice about your business. A thoughtfully designed logo can communicate your brand values, create recognition, and build a consistent identity across your marketing materials.
                 Our logo design in Chennai focuses on creating unique concepts rather than relying on generic templates. We study your business, industry, competitors, target audience, and brand objectives before developing design concepts.
                </p>
                <h5>Our logo design approach includes:</h5>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {featuresList.map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    color: "#1a1a1a",
                    fontSize: "1rem",
                    fontFamily: "text-figtree",
                  }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <CheckCircle2
                    style={{
                      height: "20px",
                      width: "20px",
                      flexShrink: 0,
                      color: "#53ae7d",
                    }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
              </div>
            </div>

            {/* Image Side */}
            <div style={imageWrapperStyle}>
              <img
                src={currentSrc}
                alt="Social Media Marketing"
                style={imageStyle}
                onError={() => {
                  if (currentSrc !== FALLBACK_IMAGE) {
                    setCurrentSrc(FALLBACK_IMAGE);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Pure CSS Styles
const heroWrapperStyle: React.CSSProperties = {
  width: "100%",
  padding: "40px 0",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "32px",
  alignItems: "center",
};

const textColumnStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

const badgeStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "4px 12px",
  borderRadius: "9999px",
  border: "1px solid #cbd5e1",
  fontSize: "0.75rem",
  fontWeight: "600",
  color: "#0f172a",
  backgroundColor: "#ffffff",
};

const headingStyle: React.CSSProperties = {
  fontSize: "2.5rem",
  fontWeight: "700",
  lineHeight: "1.2",
  letterSpacing: "-0.02em",
  margin: "0 0 20px 0",
  color: "#0f172a",
};

const blueTextStyle: React.CSSProperties = {
  color: "#2563eb",
};

const paragraphStyle: React.CSSProperties = {
  fontSize: "1.125rem",
  lineHeight: "1.6",
  color: "#000000",
  margin: "8px 0 0 0",
  fontFamily: "Figtree, sans-serif",
};

const imageWrapperStyle: React.CSSProperties = {
  width: "100%",
  aspectRatio: "1 / 1",
  borderRadius: "12px",
  overflow: "hidden",
  backgroundColor: "#f1f5f9",
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};