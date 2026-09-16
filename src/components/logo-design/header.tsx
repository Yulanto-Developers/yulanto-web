"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface CardItem {
  id: number | string;
  image: string;
}

interface CardSpreadProps {
  cards?: CardItem[];
  spreadAngle?: number;
  spreadOffset?: number;
}

const defaultCards: CardItem[] = [
  {
    id: 1,
    image: "assets/img/logodesign/top-1.jpg",
  },
  {
    id: 2,
    image: "assets/img/logodesign/top-2.jpg",
  },
  {
    id: 3,
    image: "assets/img/logodesign/top-3.jpg",
  },
  {
    id: 4,
    image: "assets/img/logodesign/top-4.jpg",
  },
];

const mobileStyles = `
  @media (max-width: 768px) {
    .card-spread-container {
      height: auto !important;
      display: grid !important;
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 16px !important;
      padding: 20px 0 !important;
    }
    .card-item-node {
      position: relative !important;
      transform: none !important;
      width: 100% !important;
      height: 240px !important;
      left: auto !important;
      top: auto !important;
    }
  }
`;

export default function CardSpread({
  cards = defaultCards,
  spreadAngle = 40,
  spreadOffset = 55,
}: CardSpreadProps) {
  const [isHovered, setIsHovered] = useState(false);
  const totalCards = cards.length;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="px-about-6-area pt-40 pb-40 pb-lg-110" style={{ overflowX: "hidden", overflowY: "hidden" }}>
      <style>{mobileStyles}</style>

      <div className="container container-1550">
        {/* Title Section with AOS Animation */}
        <div className="row align-items-center mb-5" data-aos="fade-up">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
              Logo Design Company in Chennai
            </span>
          </div>
          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">Creative Logo Designs That </span>
                Build a Strong Brand Identity
              </h4>
              <p className="text-figtree text-black mt-2">
                A great logo is more than just a graphic—it is the visual identity of your business. At Yulanto Web Creations, we create distinctive, professional, and memorable logos that help businesses establish a strong presence across digital and offline platforms.

As a logo design company in Chennai, we combine creativity, strategic thinking, typography, colors, and visual elements to create logos that reflect your brand personality and business goals.
              </p>
            </div>
          </div>
        </div>
         
        {/* Card Spread with AOS Animation */}
        <div style={wrapperStyle} data-aos="fade-up" data-aos-delay="200">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={containerStyle}
            className="card-spread-container"
          >
            {cards.map((card, index) => {
              const centerIndex = (totalCards - 1) / 2;
              const factor = index - centerIndex;

              // Row placement for normal (non-hover) state
              const cardWidth = 200;
              const cardGap = 24;
              const totalRowWidth = totalCards * cardWidth + (totalCards - 1) * cardGap;
              const rowX = index * (cardWidth + cardGap) - totalRowWidth / 2 + cardWidth / 2;

              // 3D parameters for fan effect on hover
              const fanRotateZ = factor * (spreadAngle / totalCards);
              const fanRotateY = factor * -12; 
              const fanRotateX = 15; 
              const fanX = factor * spreadOffset;
              const fanY = -Math.abs(factor) * 15;
              const fanZ = (totalCards - Math.abs(factor)) * 20; 

              const translateX = isHovered ? fanX : rowX;
              const translateY = isHovered ? fanY : 0;
              const translateZ = isHovered ? fanZ : 0;
              const rotateX = isHovered ? fanRotateX : 0;
              const rotateY = isHovered ? fanRotateY : 0;
              const rotateZ = isHovered ? fanRotateZ : 0;

              return (
                <div
                  key={card.id}
                  className="card-item-node"
                  style={{
                    ...cardStyle,
                    transform: `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
                    zIndex: isHovered ? Math.round(100 - Math.abs(factor) * 10) : 1,
                    boxShadow: isHovered
                      ? "0 25px 40px -10px rgba(0, 0, 0, 0.45)"
                      : "0 10px 20px -5px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <img
                    src={card.image}
                    alt={`Card ${card.id}`}
                    style={imageStyle}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Text with AOS Animation */}
        <p className="text-figtree text-black mt-2" data-aos="fade-up" data-aos-delay="350">
          Whether you are launching a new business, refreshing an existing brand, or looking for a completely new identity, our creative team can develop a logo that makes your brand stand out. If you are looking for logo designers in Chennai who understand branding and modern design trends, we can help transform your ideas into a professional visual identity.
        </p>
      </div>
    </section>
  );
}

// Pure CSS Inline Styles
const wrapperStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: "20px 0",
};

const containerStyle: React.CSSProperties = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "340px",
  width: "100%",
  cursor: "pointer",
  perspective: "1200px",
};

const cardStyle: React.CSSProperties = {
  position: "absolute",
  width: "200px",
  height: "300px",
  borderRadius: "16px",
  overflow: "hidden",
 
  transition: "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease",
  transformOrigin: "bottom center",
  transformStyle: "preserve-3d",
  userSelect: "none",
  boxSizing: "border-box",
  background: "#ffffff",
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  pointerEvents: "none",
};