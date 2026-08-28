"use client";

import React, { useState } from "react";
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
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80",
  },
];

export default function CardSpread({
  cards = defaultCards,
  spreadAngle = 40,
  spreadOffset = 55,
}: CardSpreadProps) {
  const [isHovered, setIsHovered] = useState(false);
  const totalCards = cards.length;

  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110">
        
      <div className="container container-1550">
           {/* Title Section */}
                <div className="row align-items-center mb-5">
                    <div className="col-xl-3">
                        <span className="tp-section-subtitle text-black blink-ball">
                            Off-Page SEO in Chennai
                        </span>
                    </div>
                    <div className="col-xl-9">
                        <div className="px-project-title-box">
                            <h4 className="px-about-title mb-20">
                                <span className="text-blue-about">Business Logo </span>
                                 Design in Chennai
                            </h4>
                          <p className="text-figtree text-black mt-2">
                              We Create Interesting Logos
                              That Create Value Your Business Objectives. Logo Designs That Identify With Your
                              Brand
                          </p>
                        </div>
                    </div>
                </div>
          
        <div style={wrapperStyle}>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={containerStyle}
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
              const fanRotateY = factor * -12; // 3D perspective rotation around Y axis
              const fanRotateX = 15; // 3D tilt back around X axis
              const fanX = factor * spreadOffset;
              const fanY = -Math.abs(factor) * 15;
              const fanZ = (totalCards - Math.abs(factor)) * 20; // Bring center cards forward in 3D space

              const translateX = isHovered ? fanX : rowX;
              const translateY = isHovered ? fanY : 0;
              const translateZ = isHovered ? fanZ : 0;
              const rotateX = isHovered ? fanRotateX : 0;
              const rotateY = isHovered ? fanRotateY : 0;
              const rotateZ = isHovered ? fanRotateZ : 0;

              return (
                <div
                  key={card.id}
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
      </div>
    </section>
  );
}

// Pure CSS Inline Styles (No Tailwind CSS)
const wrapperStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: "50px 0",
};

const containerStyle: React.CSSProperties = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "340px",
  width: "100%",
  cursor: "pointer",
  perspective: "1200px", // Enables true 3D space depth
};

const cardStyle: React.CSSProperties = {
  position: "absolute",
  width: "200px",
  height: "300px",
  borderRadius: "16px",
  overflow: "hidden",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  transition: "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease",
  transformOrigin: "bottom center",
  transformStyle: "preserve-3d",
  userSelect: "none",
  boxSizing: "border-box",
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  pointerEvents: "none",
};