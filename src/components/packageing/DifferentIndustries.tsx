"use client";

import React, { useState, useEffect } from "react";

interface IndustryNode {
  title: string;
  iconClass: string;
}

const centerImages = [
  "assets/img/package/circle-1.jpg",
  "assets/img/package/circle-2.jpg",
  "assets/img/package/circle-3.jpg",
];

const industriesData: IndustryNode[] = [
  { title: "Food & Beverage", iconClass: "fa-solid fa-utensils" },
  { title: "Cosmetics & Beauty", iconClass: "fa-solid fa-sparkles" },
  { title: "Healthcare & Pharma", iconClass: "fa-solid fa-briefcase-medical" },
  { title: "FMCG Products", iconClass: "fa-solid fa-basket-shopping" },
  { title: "Retail Products", iconClass: "fa-solid fa-store" },
  { title: "Electronics & Acc.", iconClass: "fa-solid fa-plug" },
  { title: "Industrial Products", iconClass: "fa-solid fa-industry" },
  { title: "Consumer Products", iconClass: "fa-solid fa-bag-shopping" },
  { title: "Organic & Natural", iconClass: "fa-solid fa-leaf" },
  { title: "E-commerce Products", iconClass: "fa-solid fa-truck-fast" },
];

export function RotatingIndustriesSection() {
  const totalItems = industriesData.length;
  const radius = 210; // Slightly expanded orbit radius
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Auto-slide through center images every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % centerImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      className="px-about-6-area pt-50 pb-80 pb-lg-110" 
      style={{ overflow: "hidden" }}
    >
      {/* Dynamic Keyframe Animations & Hover Effects */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes reverse-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 15px rgba(83, 174, 125, 0.4);
          }
          50% {
            box-shadow: 0 0 30px rgba(83, 174, 125, 0.8);
          }
        }
        .rotating-wheel {
          animation: spin 40s linear infinite;
        }
        .counter-rotate {
          animation: reverse-spin 40s linear infinite;
        }
        .rotating-wheel-container:hover .rotating-wheel,
        .rotating-wheel-container:hover .counter-rotate {
          animation-play-state: paused;
        }
        .center-circle-glow {
          animation: pulse-glow 4s infinite ease-in-out;
        }
        .node-pill {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .node-pill:hover {
          transform: scale(1.15);
          z-index: 50;
        }
      `}</style>

      <div className="container container-1550">
        
        <h4 className="px-about-title mb-20 text-center">
          <span className="text-blue-about">Packaging Design </span>
          for Different Industries
        </h4>
              
        {/* Main 2-Column Row */}
        <div className="row align-items-center g-5">
          
          {/* LEFT COLUMN: Product Image / Showcase */}
          <div className="col-12 col-lg-5" data-aos="fade-right" data-aos-duration="1000">
            <div 
              className="rounded-4 overflow-hidden shadow-lg border border-2 position-relative"
              style={{ height: "380px" }}
            >
              <img 
                src="assets/img/package/Packaging-Design-for-Different-Industries.jpg" 
                alt="Packaging Design Industries" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div 
                className="position-absolute bottom-0 start-0 end-0 p-4"
                style={{ 
                  background: "linear-gradient(to top, rgba(5, 52, 86, 0.9), transparent)",
                  color: "#ffffff",
                  fontFamily: "Figtree, Figtree Fallback"
                }}
              >
                <span className="fw-bold text-uppercase d-block mb-1" style={{ color: "#fff", fontSize: "12px", letterSpacing: "1px" }}>
                  Tailored Solutions
                </span>
                <h5 className="m-0 text-white" style={{ fontSize: "18px" }}>
                  Crafting Box & Label Designs That Sell
                </h5>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Redesigned Rotating Circular Wheel Layout */}
          <div 
            className="col-12 col-lg-7 d-flex justify-content-center align-items-center"
            data-aos="fade-left" 
            data-aos-duration="1000"
          >
            <div 
              className="position-relative d-flex align-items-center justify-content-center rotating-wheel-container"
              style={{ 
                width: "550px", 
                height: "550px",
                fontFamily: "Figtree, Figtree Fallback"
              }}
            >
              {/* Central Auto-Sliding Image Circle with Glowing Glass Frame */}
              <div
                className="position-absolute rounded-circle overflow-hidden shadow-lg center-circle-glow"
                style={{
                  width: "160px",
                  height: "160px",
                  backgroundColor: "#053456",
                  border: "4px solid #53ae7d",
                  outline: "6px solid rgba(83, 174, 125, 0.2)",
                  zIndex: 10
                }}
              >
                {centerImages.map((imgUrl, index) => (
                  <img
                    key={index}
                    src={imgUrl}
                    alt={`Center Slide ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      opacity: currentImgIndex === index ? 1 : 0,
                      transition: "opacity 0.8s ease-in-out",
                    }}
                  />
                ))}
              </div>

              {/* ROTATING WHEEL */}
              <div 
                className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center rotating-wheel"
                style={{ zIndex: 5 }}
              >
                {/* Neon Glowing Orbit Ring */}
                <div
                  className="position-absolute rounded-circle"
                  style={{
                    width: `${radius * 2}px`,
                    height: `${radius * 2}px`,
                    border: "2px dashed #53ae7d",
                    boxShadow: "0 0 20px rgba(83, 174, 125, 0.15), inset 0 0 20px rgba(83, 174, 125, 0.15)",
                    pointerEvents: "none"
                  }}
                />

                {/* Orbiting Nodes */}
                {industriesData.map((item, index) => {
                  const angle = (index * (360 / totalItems) - 90) * (Math.PI / 180);
                  const x = Math.round(radius * Math.cos(angle));
                  const y = Math.round(radius * Math.sin(angle));

                  return (
                    <div
                      key={index}
                      className="position-absolute d-flex flex-column align-items-center text-center"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                        width: "120px",
                      }}
                    >
                      {/* Counter-Rotating Badge Pill */}
                      <div className="counter-rotate d-flex flex-column align-items-center text-center node-pill">
                        <div
                          className="d-flex align-items-center gap-2 shadow-lg"
                          style={{
                            backgroundColor: "#fff",
                            color: "#053456",
                            padding: "6px 14px 6px 8px",
                            borderRadius: "30px",
                            border: "1.5px solid #53ae7d",
                            boxShadow: "0 4px 12px rgba(5, 52, 86, 0.3)",
                            cursor: "pointer",
                            whiteSpace: "nowrap"
                          }}
                        >
                          {/* Inner Glowing Icon Circle */}
                          <div
                            className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                            style={{
                              width: "32px",
                              height: "32px",
                              backgroundColor: "#53ae7d",
                              color: "#ffffff",
                              fontSize: "14px",
                            }}
                          >
                            <i className={item.iconClass}></i>
                          </div>

                          {/* Node Title */}
                          <span
                            className="fw-bold"
                            style={{
                              fontSize: "12px",
                              letterSpacing: "0.3px",
                            }}
                          >
                            {item.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default RotatingIndustriesSection;