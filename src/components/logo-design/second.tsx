"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle2 } from "lucide-react";

interface HeroProps {
  imageSrc?: string | null;
}

const FALLBACK_IMAGE = "assets/img/logodesign/image-1.jpg";

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

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      // Prevents minor offset glitches triggering vertical scrollbars
      offset: 50, 
    });
  }, []);

  return (
    <section 
      className="px-about-6-area pt-40 pb-40 pb-lg-110" 
      style={{ backgroundColor: "#ffffff", overflow: "hidden", width: "100%" }}
    >
      <div className="container container-1550" style={{ overflow: "hidden" }}>
        <div className="row align-items-center mb-4" data-aos="fade-up">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
              Professional Logo Design in Chennai
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">Logos Designed to Make </span> Your Brand Recognizable
              </h4>
            </div>
          </div>
        </div>

        <div style={heroWrapperStyle}>
          <div style={gridStyle}>
            {/* Text Side with AOS Animation (Changed to fade-up to prevent side overflow) */}
            <div style={textColumnStyle} data-aos="fade-up" data-aos-delay="150">
              <div>
                <p className="text-figtree text-black mt-2" style={paragraphStyle}>
                  Your logo is often the first visual element customers notice about your business. A thoughtfully designed logo can communicate your brand values, create recognition, and build a consistent identity across your marketing materials.
                  Our logo design in Chennai focuses on creating unique concepts rather than relying on generic templates. We study your business, industry, competitors, target audience, and brand objectives before developing design concepts.
                </p>
                <h5 className="mt-20">Our logo design approach includes:</h5>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  {featuresList.map((item, index) => (
                    <li 
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        fontSize: "20px"
                      }}
                      data-aos="fade-up"
                      data-aos-delay={index * 80}
                    >
                      <CheckCircle2
                        style={{
                          height: "20px",
                          width: "20px",
                          flexShrink: 0,
                          color: "#53ae7d",
                        }}
                      />
                      <span className="text-figtree text-black mt-2">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Image Side with AOS Animation (Changed to fade-up to prevent side overflow) */}
            <div style={imageWrapperStyle} data-aos="fade-up" data-aos-delay="300">
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
  maxWidth: "100%",
  overflow: "hidden",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "32px",
  alignItems: "center",
  width: "100%",
};

const textColumnStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  maxWidth: "100%",
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