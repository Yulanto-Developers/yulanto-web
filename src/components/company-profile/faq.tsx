"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

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
  extends Omit<React.ComponentPropsWithoutRef<typeof motion.section>, "ref"> {
  data?: FaqSectionData;
}

// ==========================================
// 2. DEFAULT FAQ DATA (ONLY 2 ROWS)
// ==========================================

export const defaultFaqData: FaqSectionData = {
 
  mainTitleBlue: "Frequently Asked ",
  mainTitleBlack: "Questions",
  rows: [
    {
      id: "row1",
      speed: "55s",
      direction: "left",
      faqItems: [
        {
          id: "q1",
          question: "What graphic design services do you provide in Chennai?",
          answer:
            "We provide a range of graphic design services, including brochure design, flyer design, company profile design, catalogue design, presentation design, poster design, social media creatives, advertisement designs, business cards, and other marketing materials.",
        },
        {
          id: "q2",
          question: "Why should I hire a professional graphic design company?",
          answer:
            "A professional graphic design company can help you create visually consistent and strategically designed marketing materials that communicate your business message clearly and create a stronger brand impression.",
        },
        {
          id: "q3",
          question: "Do you provide brochure design services for startups?",
          answer:
            "Yes. We create customized brochure designs for startups, SMEs, corporates, and businesses across different industries. The design can be developed according to your brand identity, content, budget, and marketing requirements.",
        },
        {
          id: "q4",
          question: "What types of brochures can you design?",
          answer:
            "We design bi-fold, tri-fold, gate-fold, single-fold, Z-fold, and other customized brochure formats based on your content and communication requirements.",
        },
        {
          id: "q5",
          question: "How much does brochure design cost?",
          answer:
            "Brochure design pricing depends on factors such as the number of pages or panels, design complexity, content requirements, number of concepts, revisions, and final deliverables. We can provide a customized quotation based on your requirements.",
        },
      ],
    },
    {
      id: "row2",
      speed: "65s",
      direction: "right",
      faqItems: [
        {
          id: "q6",
          question: "What information do you need to start a brochure design?",
          answer:
            "We generally require your company information, logo, brand guidelines, product or service details, images, contact information, target audience, and any specific design preferences you may have.",
        },
        {
          id: "q7",
          question: "Can you design brochures for different industries?",
          answer:
            "Yes. We create customized designs for businesses across industries, including real estate, construction, manufacturing, education, healthcare, technology, professional services, retail, and more.",
        },
        {
          id: "q8",
          question: "Can I request changes to the design?",
          answer:
            "Yes. We consider client feedback as part of the design process and make revisions based on the agreed project scope to ensure the final design meets your expectations.",
        },
        {
          id: "q9",
          question: "Do you provide brochure printing services?",
          answer:
            "We focus on brochure design and provide the final artwork files. Once the design is approved, you can use the print-ready files with your preferred printing partner.",
        },
        {
          id: "q10",
          question: "What file formats will I receive?",
          answer:
            "Depending on your requirement, we can provide suitable final files such as PDF and other commonly required digital or print-ready formats.",
        },
        {
          id: "q11",
          question: "How do I get started with your graphic design services?",
          answer:
            "Simply share your design requirements, business details, content, and any reference materials with us. Our team will understand your requirements and suggest a suitable design approach for your project.",
        },
      ],
    },
  ],
};

// ==========================================
// 3. SUB-COMPONENTS
// ==========================================

export const FaqCard: React.FC<FaqItem> = ({ question, answer }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "12px",
        padding: "24px",
        backgroundColor: "#ffffff",
        borderRadius: "16px",
      
        border: "1px solid #eaeaea",
        width: "380px",
        flexShrink: 0,
        cursor: "pointer",
      }}
    >
      <h3
        className="text-black"
        style={{
          fontSize: "18px",
          fontWeight: 700,
          lineHeight: "1.4",
          margin: 0,
        }}
      >
        {question}
      </h3>
      <p
        className="text-figtree"
        style={{
          fontSize: "15px !important",
          color: "#555555",
          lineHeight: "1.6",
          margin: 0,
        }}
      >
        {answer}
      </p>
    </div>
  );
};

export const HorizontalScroller: React.FC<{
  children: React.ReactNode;
  speed?: string;
  direction?: "left" | "right";
}> = ({ children, speed = "40s", direction = "left" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const animationName =
    direction === "right" ? "scrollHorizontalReverse" : "scrollHorizontal";

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: `${animationName} ${speed} linear infinite`,
          animationPlayState: isHovered ? "paused" : "running",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            gap: "24px",
            paddingLeft: "12px",
            paddingRight: "12px",
            flexShrink: 0,
          }}
        >
          {children}
        </div>
        {/* Duplicate for seamless infinite loop */}
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            gap: "24px",
            paddingLeft: "12px",
            paddingRight: "12px",
            flexShrink: 0,
          }}
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 4. MAIN FAQ SECTION COMPONENT
// ==========================================

export const FaqSection = React.forwardRef<HTMLDivElement, FaqSectionProps>(
  ({ className, data = defaultFaqData, ...props }, ref) => {
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
          ease: "easeOut",
        },
      },
    };

    return (
      <motion.section
        ref={ref}
        className={`px-about-6-area pt-50 pb-80 pb-lg-110 ${className || ""}`}
        style={{ overflow: "hidden", backgroundColor: "#fff" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        {...props}
      >
        {/* CSS Keyframes for Infinite Horizontal Scroller */}
        <style>{`
          @keyframes scrollHorizontal {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scrollHorizontalReverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}</style>

        <div className="container container-1550">
          {/* Header Section */}
          <div className="row align-items-center mb-50" data-aos="fade-up">
          

            <div className="col-xl-12">
              <motion.div
                className="px-project-title-box"
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
                <motion.p
                  className="text-figtree text-black mt-2"
                  variants={itemVariants}
                >
                  {data.mainDescription}
                </motion.p>
              </motion.div>
            </div>
          </div>

          {/* Horizontal Scroller Rows (2 Rows) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              marginTop: "30px",
              width: "100%",
            }}
          >
            {data.rows.map((row) => (
              <HorizontalScroller
                key={row.id}
                speed={row.speed}
                direction={row.direction}
              >
                {row.faqItems.map((item) => (
                  <FaqCard
                    key={item.id}
                    id={item.id}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </HorizontalScroller>
            ))}
          </div>
        </div>
      </motion.section>
    );
  }
);

FaqSection.displayName = "FaqSection";

// ==========================================
// 5. PAGE IMPLEMENTATION DEMO
// ==========================================

export default function FaqPage() {
  return (
    <main style={{ width: "100%" }}>
      <FaqSection />
    </main>
  );
}