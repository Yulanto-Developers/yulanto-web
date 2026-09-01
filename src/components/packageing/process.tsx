"use client";

import React from "react";

interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  iconClass: string;
}

const stepsData: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Understand Your Product",
    description: "We learn about your product, brand, target customers, competitors, and packaging requirements.",
    iconClass: "fa-solid fa-magnifying-glass",
  },
  {
    stepNumber: "02",
    title: "Creative Concept Development",
    description: "Our team develops design concepts that match your product positioning and brand personality.",
    iconClass: "fa-solid fa-lightbulb",
  },
  {
    stepNumber: "03",
    title: "Design & Visual Development",
    description: "We refine colours, typography, graphics, product information, and layout to create a complete packaging design.",
    iconClass: "fa-solid fa-palette",
  },
  {
    stepNumber: "04",
    title: "Review & Revisions",
    description: "Your feedback is incorporated to ensure the final design meets your expectations.",
    iconClass: "fa-solid fa-pen-to-square",
  },
  {
    stepNumber: "05",
    title: "Final Artwork",
    description: "The approved design is prepared in the required specifications and delivered as print-ready artwork.",
    iconClass: "fa-solid fa-box-archive",
  },
];

export function PackagingProcessSection() {
  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110" style={{ backgroundColor: "#ffffff" }}>
      <div className="container container-1550">
        
        {/* Section Title Header */}
        <div className="mb-50 text-center" data-aos="fade-up" data-aos-duration="1000">
          <h4
            className="px-about-title mb-20"
          >
            <span className="text-blue-about">
              Our Packaging{" "}
            </span>
            Design Process
          </h4>
        </div>

        {/* Serpentine Timeline Path */}
        <div 
          className="mx-auto position-relative"
          style={{ 
            maxWidth: "900px", 
            fontFamily: "Figtree, Figtree Fallback",
            padding: "20px 0" 
          }}
        >
          {stepsData.map((step, index) => {
            const isEven = index % 2 === 0;
            const isLast = index === stepsData.length - 1;

            return (
              <div 
                key={index} 
                className="position-relative mb-5"
                style={{ minHeight: "160px" }}
                data-aos={isEven ? "fade-right" : "fade-left"}
                data-aos-duration="1000"
                data-aos-delay={`${index * 150}`}
              >
                {/* Winding Connecting Line Loop (Alternating Left/Right) */}
                {!isLast && (
                  <div
                    style={{
                      position: "absolute",
                      top: "40px",
                      [isEven ? "right" : "left"]: "5%",
                      width: "45%",
                      height: "170px",
                      border: "4px dashed #53ae7d",
                      borderLeft: isEven ? "none" : "4px dashed #53ae7d",
                      borderRight: isEven ? "4px dashed #53ae7d" : "none",
                      borderTop: "none",
                      borderBottomRightRadius: isEven ? "80px" : "0",
                      borderBottomLeftRadius: isEven ? "0" : "80px",
                      zIndex: 1,
                      pointerEvents: "none",
                    }}
                  />
                )}

                {/* Step Content Container */}
                <div 
                  className={`d-flex align-items-center gap-4 ${
                    isEven ? "flex-row" : "flex-row-reverse"
                  }`}
                  style={{ position: "relative", zIndex: 2 }}
                >
                  
                  {/* Text Details Box */}
                  <div 
                    className="flex-grow-1 p-4 rounded-4 shadow-sm"
                    style={{
                      backgroundColor: "#ffffff",
                      border: "2px solid #053456",
                      maxWidth: "75%",
                    }}
                  >
                    {/* Header Pill */}
                    <div 
                      className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-2"
                      style={{ backgroundColor: "#053456", color: "#ffffff" }}
                    >
                      <span className="fw-bold" style={{ color: "#53ae7d", fontSize: "14px" }}>
                        {step.stepNumber}
                      </span>
                      <span 
                        className="fw-bold text-uppercase" 
                        style={{ fontSize: "12px", letterSpacing: "1px" }}
                      >
                        {step.title}
                      </span>
                    </div>

                    {/* Step Description */}
                    <p 
                      className="text-figtree text-black mt-2 mb-0"
                      style={{ 
                        fontFamily: "Figtree, Figtree Fallback", 
                        fontSize: "15px", 
                        lineHeight: "1.6",
                        color: "#053456" 
                      }}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Icon Circle */}
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 shadow-sm"
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#53ae7d",
                      color: "#ffffff",
                      border: "4px solid #053456",
                      fontSize: "28px",
                    }}
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay={`${index * 150 + 200}`}
                  >
                    <i className={step.iconClass}></i>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default PackagingProcessSection;