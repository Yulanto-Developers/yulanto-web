"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

// ==========================================
// 1. COMPONENT DEFINITION
// ==========================================

export interface GraphicDesignSectionProps extends HTMLMotionProps<"section"> {
  // Section 1 Props (Text Left, Image Right)
  sec1Subtitle?: React.ReactNode;
  sec1Title?: React.ReactNode;
  sec1Title2?: React.ReactNode;
  sec1Description?: string;
  sec1SubDescription?: string;
  image1?: string;

  // Section 2 Props (Image Left, Text Right)
  sec2Title?: React.ReactNode;
  sec2Title2?: React.ReactNode;
  sec2Subtitle?: React.ReactNode;
  sec2Description?: string;
  sec2SubDescription?: string;
  ctaNote?: string;
  image2?: string;
}

export const GraphicDesignSection = React.forwardRef<HTMLElement, GraphicDesignSectionProps>(
  (
    {
      className,
      // Default Section 1 Content
      sec1Subtitle = "Brochure Design for Startups, SMEs and Corporates",
      sec1Title = "Professional Marketing Materials ",
      sec1Title2 = "for Every Stage of Business",
      sec1Description = "Whether you are launching a new company, introducing a product, expanding your services, or strengthening your corporate identity, professionally designed marketing materials can help you communicate your business more effectively.",
      sec1SubDescription = "Our brochure designers in Chennai create designs suitable for both digital distribution and professional printing. We focus on presenting your information in a structured and visually engaging format that supports your sales and marketing efforts.",
      image1 = "assets/img/company-profile/Professional-Marketing.jpg",

      // Default Section 2 Content
      sec2Title = "Choose a Creative Graphic ",
      sec2Subtitle = "Make Every Design an Opportunity to Build Your Brand",
      sec2Title2 = "Design Company in Chennai",
      sec2Description = "Your brochure, flyer, presentation, or marketing creative is often one of the first visual interactions customers have with your business. A professional design can help create credibility, communicate your value, and make your brand more memorable.",
      sec2SubDescription = "If you are looking for the best graphic design company in Chennai for professional and customized marketing designs, Yulanto Web Creations can help transform your ideas into effective visual communication.",
      ctaNote = "Need a professional brochure or graphic design for your business? Get in touch with our creative team today.",
      image2 = "assets/img/company-profile/Choose-a-Creative-Graphic.jpg",
      ...props
    },
    ref
  ) => {
    // Animation Variants
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut" as const,
        },
      },
    };

    return (
      <motion.section
        ref={ref}
        className={`px-about-6-area pt-50 pb-80 pb-lg-110 ${className || ""}`}
        style={{ overflow: "hidden" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        {...props}
      >
        <div className="container container-1550">
          {/* SECTION 1: Text Left / Image Right */}
          <div className="row align-items-center mb-50" data-aos="fade-up">
            {/* Left Side: Content */}
            <div className="col-xl-7 col-lg-6">
              <motion.div className="px-project-title-box">
                {sec1Subtitle && (
                  <motion.span className="tp-section-subtitle text-black blink-ball">
                    {sec1Subtitle}
                  </motion.span>
                )}

                {(sec1Title || sec1Title2) && (
                  <motion.h4 className="px-about-title mb-20">
                    {sec1Title && <span className="text-blue-about">{sec1Title}</span>}
                    {sec1Title2 && <span>{sec1Title2}</span>}
                  </motion.h4>
                )}

                {sec1Description && (
                  <motion.p className="text-figtree text-black mt-2 mb-15">
                    {sec1Description}
                  </motion.p>
                )}

                {sec1SubDescription && (
                  <motion.p className="text-figtree text-black mt-2">
                    {sec1SubDescription}
                  </motion.p>
                )}
              </motion.div>
            </div>

            {/* Right Side: Image */}
            <div className="col-xl-5 col-lg-6 mt-4 mt-lg-0">
              <motion.div
                style={{
                  width: "100%",
                  minHeight: "380px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  backgroundImage: `url(${image1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                }}
                initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
                whileInView={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)" }}
                transition={{ duration: 1.2, ease: "circOut" }}
                viewport={{ once: true }}
              />
            </div>
          </div>

          {/* SECTION 2: Image Left / Text Right */}
          <div className="row align-items-center pt-40" data-aos="fade-up">
            {/* Left Side: Image */}
            <div className="col-xl-5 col-lg-6 order-2 order-lg-1 mt-4 mt-lg-0">
              <motion.div
                style={{
                  width: "100%",
                  minHeight: "420px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  backgroundImage: `url(${image2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                }}
                initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
                whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                transition={{ duration: 1.2, ease: "circOut" }}
                viewport={{ once: true }}
              />
            </div>

            {/* Right Side: Content */}
            <div className="col-xl-7 col-lg-6 order-1 order-lg-2">
              {sec2Subtitle && (
                <motion.span
                  className="tp-section-subtitle text-black blink-ball"
                  variants={itemVariants}
                >
                  {sec2Subtitle}
                </motion.span>
              )}
              <motion.div className="px-project-title-box" variants={containerVariants}>
                {(sec2Title || sec2Title2) && (
                  <motion.h4 className="px-about-title mb-10" variants={itemVariants}>
                    <span className="text-blue-about">{sec2Title}</span>
                    {sec2Title2 && <span> {sec2Title2}</span>}
                  </motion.h4>
                )}

                {sec2Description && (
                  <motion.p className="text-figtree text-black mt-2 mb-15" variants={itemVariants}>
                    {sec2Description}
                  </motion.p>
                )}

                {sec2SubDescription && (
                  <motion.p className="text-figtree text-black mt-2 mb-20" variants={itemVariants}>
                    {sec2SubDescription}
                  </motion.p>
                )}

                {ctaNote && (
                  <motion.p
                    className="text-figtree text-black fw-bold mt-3"
                    style={{ fontWeight: 600, color: "#053456" }}
                    variants={itemVariants}
                  >
                    {ctaNote}
                  </motion.p>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    );
  }
);

GraphicDesignSection.displayName = "GraphicDesignSection";

export default function GraphicDesignPage() {
  return (
    <main className="w-full">
      <GraphicDesignSection />
    </main>
  );
}