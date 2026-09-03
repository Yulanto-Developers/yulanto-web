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
// 2. UPDATED WORDPRESS FAQ DATA
// ==========================================

export const defaultFaqData: FaqSectionData = {
  mainTitleBlue: "Frequently Asked ",
  mainTitleBlack: "Questions",
  mainDescription:
    "Everything you need to know about WordPress development, customization, and capabilities.",
  rows: [
    {
      id: "row1",
      speed: "50s",
      direction: "left",
      faqItems: [
        {
          id: "q1",
          question: "Is WordPress suitable for business websites?",
          answer:
            "Yes. WordPress is suitable for startups, small businesses, corporate organizations, institutions, and many other types of businesses. It provides flexibility to create and manage different types of websites.",
        },
        {
          id: "q2",
          question: "Can you design a completely custom WordPress website?",
          answer:
            "Yes. WordPress websites can be customized according to your brand identity, content structure, design requirements, and business functionality.",
        },
        {
          id: "q3",
          question: "Can WordPress be used for eCommerce?",
          answer:
            "Yes. WordPress can be extended with eCommerce solutions such as WooCommerce to create online stores with product management, shopping carts, payment integration, order management, and other features.",
        },
        {
          id: "q4",
          question: "Is WordPress SEO-friendly?",
          answer:
            "WordPress provides a strong foundation for SEO, but achieving good search visibility requires proper technical SEO, quality content, website performance, mobile optimization, and ongoing SEO efforts.",
        },
      ],
    },
    {
      id: "row2",
      speed: "55s",
      direction: "right",
      faqItems: [
        {
          id: "q5",
          question: "Can an existing WordPress website be redesigned?",
          answer:
            "Yes. We can redesign an existing WordPress website to provide a modern appearance, improved navigation, responsive layouts, better user experience, and updated functionality.",
        },
        {
          id: "q6",
          question: "Can I manage the website myself after development?",
          answer:
            "Yes. One of the key advantages of WordPress is its easy-to-use content management system. You can manage pages, blog posts, images, products, and other content through the WordPress dashboard.",
        },
        {
          id: "q7",
          question: "Do you provide WordPress maintenance and support?",
          answer:
            "Yes. WordPress websites may require regular updates, backups, security checks, performance monitoring, and technical support. Maintenance services can be provided based on your requirements.",
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
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
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
          fontSize: "15px",
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

          {/* Horizontal Scroller Rows */}
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