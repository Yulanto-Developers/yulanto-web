"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const featuresData: FeatureItem[] = [
  {
    id: 1,
    title: "Experienced Graphic Designers",
    description:
      "Our creative team understands branding, layouts, typography, colors, imagery, and visual communication to produce professional marketing designs.",
    icon: "fa-solid fa-paintbrush",
  },
  {
    id: 2,
    title: "Customized Designs",
    description:
      "Every business is different. We create designs based on your brand identity, target audience, industry, content, and marketing objectives.",
    icon: "fa-solid fa-sliders",
  },
  {
    id: 3,
    title: "Clean and Professional Layouts",
    description:
      "We organize information strategically so customers can quickly understand your products, services, features, and key business benefits.",
    icon: "fa-solid fa-layer-group",
  },
  {
    id: 4,
    title: "Brand Consistency",
    description:
      "We maintain your brand elements across brochures, flyers, presentations, and other marketing materials to create a consistent visual identity.",
    icon: "fa-solid fa-swatchbook",
  },
  {
    id: 5,
    title: "High-Quality Visuals",
    description:
      "We use suitable images, typography, icons, illustrations, and graphic elements to enhance the overall quality and presentation of your marketing materials.",
    icon: "fa-solid fa-wand-magic-sparkles",
  },
  {
    id: 6,
    title: "Timely Delivery",
    description:
      "We follow a structured design process to ensure projects are completed efficiently while incorporating your feedback and revisions.",
    icon: "fa-solid fa-clock",
  },
];

export default function Why() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
  }, []);

  return (
    <section
      className="px-about-6-area pt-50 pb-80 pb-lg-110"
     
    >
      <div className="container container-1550">
        {/* Header Title Section */}
        {/* Top Title Row */}
                <div className="row align-items-center" data-aos="fade-up">
                    <div className="col-xl-3">
                        <span className="tp-section-subtitle text-black blink-ball">
                          Why Choose Us for Graphic Design in Chennai?
                        </span>
                    </div>

                    <div className="col-xl-9">
                        <div className="px-project-title-box">
                            <h4 className="px-about-title mb-20">
                                <span className="text-blue-about">Design That Combines Creativity </span>with Business Strategy
                            </h4>
                            <p className="text-figtree text-black mt-2">
                                Choosing the right design partner is important when your marketing materials represent your brand. Our approach focuses on creating designs that are visually appealing, easy to understand, and aligned with your business goals.
                            </p>
                        </div>
                    </div>
                </div>

        {/* 6 Feature Cards Grid */}
        <div className="row gx-4 gy-4">
          {featuresData.map((feature, index) => {
            const isDark = index % 2 !== 0;

            return (
              <div
                key={feature.id}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  style={{
                    ...baseCardStyle,
                    backgroundColor: isDark ? "#053456" : "#ffffff",
                    borderColor: isDark ? "#053456" : "#e2e8f0",
                    boxShadow: isDark
                      ? "0px 10px 25px rgba(5, 52, 86, 0.15)"
                      : "0px 10px 25px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  {/* Top-Right Cut Line Accent */}
                  <span
                    style={{
                      position: "absolute",
                      right: -2,
                      top: 34,
                      width: 50,
                      height: 2,
                      backgroundColor: isDark ? "rgba(255, 255, 255, 0.3)" : "#cbd5e1",
                      transform: "rotate(45deg)",
                      transformOrigin: "top right",
                    }}
                  />

                  {/* Icon Box */}
                  <div
                    style={{
                      ...iconBoxStyle,
                      backgroundColor: isDark ? "#ffffff" : "#f1f5f9",
                    }}
                  >
                    <i
                      className={`${feature.icon} text-blue-about`}
                      style={{ fontSize: "24px" }}
                    />
                  </div>

                  {/* Title */}
                  <h5
                    className="px-about-title mb-10"
                    style={{
                      fontSize: "20px",
                      color: isDark ? "#ffffff" : "#0f172a",
                    }}
                  >
                    {feature.title}
                  </h5>

                  {/* Description */}
                  <p
                    className="text-figtree mt-2"
                    style={{
                      margin: 0,
                      fontSize: "15px !important",
                      lineHeight: "1.6",
                      color: isDark ? "rgba(255, 255, 255, 0.85)" : "#475569",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Custom Cut-Corner Card Styles
const baseCardStyle: React.CSSProperties = {
  position: "relative",
  padding: "36px 32px",
  borderWidth: "1px",
  borderStyle: "solid",
  boxSizing: "border-box",

  // Top-Right Cut Corner Shape matching your reference image
  clipPath: "polygon(0 0, calc(100% - 35px) 0, 100% 35px, 100% 100%, 0 100%)",

  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  height: "100%",
  minHeight: "280px",
};

const iconBoxStyle: React.CSSProperties = {
  width: "56px",
  height: "56px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px",
};