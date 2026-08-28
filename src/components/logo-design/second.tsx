"use client";

import React, { useState } from "react";
import "aos/dist/aos.css";

interface HeroProps {
  imageSrc?: string | null;
}

const FALLBACK_IMAGE =
  "assets/img/social/bootom-1.jpg";

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
                THE LOGO MAKERS
              </span>

              <div>
                <h4 className="px-about-title mb-20" style={headingStyle}>
                  <span className="text-blue-about" style={blueTextStyle}>
                    A Powerful And Recognizable Logo {" "}
                  </span>
                  Is crucial for  effective branding.

                </h4>

                <p className="text-figtree text-black mt-2" style={paragraphStyle}>
                  A logo may appear as a compact design linked to a name, yet its
                  influence in establishing brand recognition is substantial. On numerous
                  occasions, a captivating and well-thought-out logo design has played a pivotal
                  role in the triumph of businesses. We possess exceptional expertise in crafting
                  extraordinary and groundbreaking logos.
                </p>
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