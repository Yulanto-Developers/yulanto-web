"use client";

import React, { useState, useEffect, useRef } from "react";

export interface BeautyCardContainerProps {
  images?: string[];
  className?: string;
}

export const BeautyCardContainer: React.FC<BeautyCardContainerProps> = ({
  images = [
    "https://loremflickr.com/320/240/paris?random=1",
    "https://loremflickr.com/320/240/brazil,rio?random=2",
    "https://loremflickr.com/320/240/museum?random=3",
    "https://loremflickr.com/320/240/nature?random=4",
  ],
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Auto-trigger fan-out animation when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Calculate dynamic positions for auto-scroll fan-out
  const getCardStyles = (index: number) => {
    const isThisCardHovered = hoveredCardIndex === index;
    const totalImages = images.length;
    const reverseIndex = totalImages - 1 - index;
    const hoverOffset = (index + 1) * 200;

    return {
      position: "absolute" as const,
      left: isVisible ? `${hoverOffset}px` : "10px",
      top: isVisible ? "20px" : "10px",
      width: "220px",
      height: isVisible ? "250px" : "180px",
      backgroundImage: `url(${images[index]})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      borderRadius: "16px",
      transform: isThisCardHovered ? "scale(1.08) translateY(-10px)" : "scale(1)",
      boxShadow: isVisible
        ? "0 12px 24px rgba(0, 0, 0, 0.2)"
        : "0 4px 8px rgba(0, 0, 0, 0.08)",
      zIndex: isThisCardHovered ? 20 : index + 1,
      transition: isThisCardHovered
        ? "transform 0.2s ease, z-index 0s"
        : `left 0.8s cubic-bezier(0.25, 1, 0.5, 1) ${reverseIndex * 0.15}s, top 0.8s ease, height 0.8s ease, transform 0.3s ease`,
    };
  };

  return (
    <section
      ref={sectionRef}
      className={`px-about-6-area pt-50 pb-80 pb-lg-110 ${className}`}
      style={{
        backgroundColor: "#ffffff",
        overflow: "hidden", // Completely disables horizontal and vertical scrollbars
      }}
    >
      <div className="container container-1550">
        <div className="row align-items-center" data-aos="fade-up">
          <div className="col-xl-3" data-aos="fade-right" data-aos-delay="100">
            <span className="tp-section-subtitle text-black blink-ball">
              Packaging Design That Connects With Customers
            </span>
          </div>

          <div className="col-xl-9" data-aos="fade-left" data-aos-delay="200">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">Packaging Design That</span>  Connects With Customers
              </h4>
              <p className="text-figtree text-black mt-2">
                A successful package needs to communicate the right message at a glance. We carefully consider typography, colours, imagery, product information, brand guidelines, and layout to create a consistent visual experience.

                Our packaging designers in Chennai develop designs that are not only attractive but also aligned with your marketing goals and product positioning.
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-100 py-4 d-flex justify-content-start align-items-center"
          style={{ overflow: "hidden" }}
        >
          {/* Main Envelope Container */}
          <div
            className="position-relative d-flex align-items-center"
            style={{
              width: "100%",
              maxWidth: isVisible ? `${(images.length + 1) * 210 + 60}px` : "320px",
              height: "320px",
              margin: "0 left",
              transition: "max-width 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            {/* Base Packaging Backing */}
            <div
              style={{
                position: "absolute",
                top: "40px",
                left: "10px",
                width: "260px",
                height: "240px",
                backgroundColor: "#e0b888",
                boxShadow: "inset 60px 0 20px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0,0,0,0.1)",
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",
                zIndex: 0,
              }}
            />

            {/* Render Cards */}
            {images.map((_, index) => (
              <div
                key={index}
                className="beauty-card"
                onMouseEnter={() => setHoveredCardIndex(index)}
                onMouseLeave={() => setHoveredCardIndex(null)}
                style={getCardStyles(index)}
              />
            ))}

            {/* Front Cover Sleeve */}
            <div
              style={{
                position: "absolute",
                top: "40px",
                left: isVisible ? "-10px" : "10px",
                width: "260px",
                height: "240px",
                backgroundColor: "#d6a771",
                borderRadius: "16px",
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",
                transition: "left 0.6s ease, box-shadow 0.6s ease",
                boxShadow: "6px 0 15px rgba(0, 0, 0, 0.2)",
                zIndex: images.length + 5,
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "12px",
                  height: "100%",
                  backgroundColor: "#c59660",
                  borderTopRightRadius: "20px",
                  borderBottomRightRadius: "20px",
                }}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BeautyCardContainer;