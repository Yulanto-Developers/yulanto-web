"use client";

import React, { useState } from "react";
import { motion, Variants, HTMLMotionProps } from "framer-motion";

// ==========================================
// 1. TYPES & INTERFACES
// ==========================================

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqRow {
  id: string;
  speed?: string;
  direction?: "left" | "right";
  faqItems: FaqItem[];
}

export interface FaqSectionData {
  mainTitleBlue?: React.ReactNode;
  mainTitleBlack?: React.ReactNode;
  mainDescription?: React.ReactNode;
  rows: FaqRow[];
}

export interface FaqSectionProps
  extends Omit<HTMLMotionProps<"section">, "ref"> {
  data?: FaqSectionData;
}

// ==========================================
// 2. DEFAULT FALLBACK FAQ DATA
// ==========================================

export const defaultFaqData: FaqSectionData = {
  mainTitleBlue: "Frequently Asked ",
  mainTitleBlack: "Questions",
  mainDescription:
    "Everything you need to know about our services and process.",
  rows: [
    {
      id: "row1",
      faqItems: [
        {
          id: "q1",
          question: "What graphic design services do you provide?",
          answer:
            "We provide brochure design, company profile design, catalogue design, presentation design, poster design, and other marketing materials.",
        },
        {
          id: "q2",
          question: "Why should I hire a professional design agency?",
          answer:
            "A professional agency ensures brand consistency, strategic layout hierarchy, and polished visual appeal that elevates your brand presence.",
        },
      ],
    },
    {
      id: "row2",
      faqItems: [
        {
          id: "q3",
          question: "Can I request revisions during the design process?",
          answer:
            "Yes. We incorporate client feedback into the design iteration cycles to deliver results aligned with your expectations.",
        },
        {
          id: "q4",
          question: "What file formats do you deliver?",
          answer:
            "We provide print-ready PDFs, high-resolution vector files, and web-optimized graphic formats.",
        },
      ],
    },
  ],
};

// ==========================================
// 3. SUB-COMPONENTS (Accordion Card)
// ==========================================

export const FaqAccordionItem: React.FC<{ item: FaqItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        border: "1px solid #eaeaea",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.02)",
        transition: "border-color 0.3s ease",
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "16px",
        }}
      >
        <h3
          className="text-blue-about"
          style={{
            fontSize: "18px",
            fontWeight: 700,
            fontFamily: "Figtree, Figtree Fallback",
            lineHeight: "1.4",
            margin: 0,
          }}
        >
          {item.question}
        </h3>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            backgroundColor: isOpen ? "#053456" : "#f4f7fa",
            color: isOpen ? "#ffffff" : "#053456",
            flexShrink: 0,
            transition: "all 0.3s ease",
          }}
        >
          <i
            className={`fa-solid fa-chevron-down`}
            style={{
              fontSize: "12px",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          ></i>
        </span>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div
            style={{
              padding: "0 24px 24px 24px",
            }}
          >
            <p
              className="text-figtree"
              style={{
                fontSize: "15px",
                color: "#555555",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              {item.answer}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// ==========================================
// 4. REUSABLE MAIN FAQ SECTION
// ==========================================

export const FaqSection = React.forwardRef<HTMLElement, FaqSectionProps>(
  ({ className, data = defaultFaqData, ...props }, ref) => {
    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    const itemVariants: Variants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    };

    // Flatten rows or split items evenly into two columns
    // If rows are provided, we can pull all items or group row 0 into left and row 1 into right.
    const allItems = data.rows.flatMap((row) => row.faqItems);
    const midPoint = Math.ceil(allItems.length / 2);
    const leftColumnItems = allItems.slice(0, midPoint);
    const rightColumnItems = allItems.slice(midPoint);

    return (
      <motion.section
        ref={ref}
        className={`px-about-6-area pt-40 pb-40 pb-lg-110 ${className || ""}`}
        style={{ overflow: "hidden", backgroundColor: "#fff" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        {...props}
      >
        <div className="container container-1550">
          {/* Header Section */}
          <div className="row align-items-center mb-50">
            <div className="col-xl-12">
              <motion.div
                className="px-project-title-box text-center"
                variants={containerVariants}
              >
                <motion.h4
                  className="px-about-title mb-20 text-center"
                  variants={itemVariants}
                >
                  {data.mainTitleBlue && (
                    <span className="text-blue-about">
                      {data.mainTitleBlue}
                    </span>
                  )}
                  {data.mainTitleBlack && (
                    <span style={{ color: "#000000" }}>
                      {data.mainTitleBlack}
                    </span>
                  )}
                </motion.h4>
                {data.mainDescription && (
                  <motion.p
                    className="text-figtree text-black mt-2"
                    variants={itemVariants}
                  >
                    {data.mainDescription}
                  </motion.p>
                )}
              </motion.div>
            </div>
          </div>

          {/* Two-Column FAQ Grid Layout */}
          <div className="row g-4">
            {/* Left Column */}
            <div className="col-lg-6">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {leftColumnItems.map((item) => (
                  <FaqAccordionItem key={item.id} item={item} />
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {rightColumnItems.map((item) => (
                  <FaqAccordionItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    );
  }
);

FaqSection.displayName = "FaqSection";

export default FaqSection;