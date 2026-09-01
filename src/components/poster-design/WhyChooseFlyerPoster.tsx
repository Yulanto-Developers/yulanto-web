"use client";

import React, { useState, useEffect } from "react";

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

const featuresList: FeatureItem[] = [
  {
    id: 0,
    title: "Creative & Original Concepts",
    description:
      "We develop designs that are visually appealing while keeping your business objectives in focus.",
    icon: "fa-solid fa-lightbulb",
    image: "/assets/img/flyer/creative-concepts.jpg",
  },
  {
    id: 1,
    title: "Brand-Focused Designs",
    description:
      "Your logo, brand colors, typography, images, and messaging are incorporated consistently across every design.",
    icon: "fa-solid fa-palette",
    image: "/assets/img/flyer/brand-focused.jpg",
  },
  {
    id: 2,
    title: "Clear & Effective Communication",
    description:
      "We organize content strategically so your audience can understand your message quickly.",
    icon: "fa-solid fa-bullhorn",
    image: "/assets/img/flyer/effective-comm.jpg",
  },
  {
    id: 3,
    title: "Professional Quality",
    description:
      "Our designs are created with attention to layout, typography, imagery, spacing, and visual hierarchy.",
    icon: "fa-solid fa-award",
    image: "/assets/img/flyer/pro-quality.jpg",
  },
  {
    id: 4,
    title: "Print & Digital Ready",
    description:
      "Get designs optimized for printing, websites, social media, WhatsApp, email campaigns, and other digital platforms.",
    icon: "fa-solid fa-layer-group",
    image: "/assets/img/flyer/print-digital.jpg",
  },
];

export default function WhyChooseFlyerPoster() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Auto-rotate active item every 3 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % featuresList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const activeFeature = featuresList[activeIndex];

  return (
    <section className="px-about-6-area pt-80 pb-80">
      <div className="container container-1550">
        {/* Top Title Row */}
        <div className="row align-items-center mb-5" data-aos="fade-up">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
              Graphic Design Company in Chennai
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">Designs Created for </span>
                Print & Digital Marketing
              </h4>
              <p className="text-figtree text-black mt-2">
                We design creative assets suitable for both offline and online marketing.
                Whether you need a high-resolution flyer for printing or a social media
                poster for your digital campaign, our designs are prepared according to
                the required size, format, and platform specifications.
              </p>
            </div>
          </div>
        </div>

        {/* Section Heading before Layout */}
        <div className="row mb-4" data-aos="fade-up">
          <div className="col-12">
            <h4 className="px-about-title mb-20 text-center">
              <span className="text-blue-about">Why Choose Our Flyer & </span>
              Poster Design Services?
            </h4>
          </div>
        </div>

        {/* Interactive Circular Layout Section */}
        <div className="row align-items-center g-5">
          {/* Left Side: Circular Interactive Graphic with Dynamic Center Content Card */}
          <div className="col-12 col-lg-7" data-aos="fade-right">
            <div
              className="position-relative d-flex align-items-center justify-content-center mx-auto"
              style={{
                width: "100%",
                maxWidth: "520px",
                height: "520px",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Thin Outer Circle Track */}
              <div
                className="position-absolute rounded-circle"
                style={{
                  width: "82%",
                  height: "82%",
                  border: "1px dashed rgba(5, 52, 86, 0.2)",
                  zIndex: 0,
                }}
              />

              {/* Center Dynamic Content Card */}
              <div
                className="position-relative p-4 rounded-4 text-center shadow-sm"
                style={{
                  width: "60%",
                  backgroundColor: "#fff",
                  zIndex: 2,
                  minHeight: "180px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                }}
              >
                <h5
                  className="fw-bold mb-2"
                  style={{
                    color: "#053456",
                    fontFamily: "Figtree, Figtree Fallback",
                    fontSize: "1.1rem",
                  }}
                >
                  {activeFeature.title}
                </h5>
                <p
                  className="text-figtree mb-0 text-muted"
                  style={{ fontSize: "15px !important", lineHeight: "1.5" }}
                >
                  {activeFeature.description}
                </p>
              </div>

              {/* 5 Orbiting Circular Nodes */}
              {featuresList.map((item, index) => {
                const total = featuresList.length;
                const angle = (index * (360 / total) - 90) * (Math.PI / 180);
                const radius = 210;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                const isActive = activeIndex === index;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    aria-label={item.title}
                    className="position-absolute rounded-circle d-flex align-items-center justify-content-center border-0 shadow-sm p-0"
                    style={{
                      width: isActive ? "72px" : "60px",
                      height: isActive ? "72px" : "60px",
                      transform: `translate(${x}px, ${y}px)`,
                      backgroundColor: isActive ? "#053456" : "#ffffff",
                      backgroundImage: isActive
                        ? "linear-gradient(135deg, #53ae7d 0%, #53ae7d 100%)"
                        : "none",
                      color: isActive ? "#ffffff" : "#053456",
                      fontSize: isActive ? "1.4rem" : "1.1rem",
                      transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      cursor: "pointer",
                      zIndex: 3,
                    }}
                  >
                    <i className={item.icon}></i>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side Column: Dynamically Updating Image Display */}
          <div className="col-12 col-lg-5" data-aos="fade-left">
            <div
              className="position-relative overflow-hidden rounded-4 shadow-sm border border-light"
              style={{
                width: "100%",
                height: "360px",
                backgroundColor: "#e5e7eb",
              }}
            >
              <img
                key={activeFeature.id}
                src={activeFeature.image}
                alt={activeFeature.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "opacity 0.4s ease-in-out",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}