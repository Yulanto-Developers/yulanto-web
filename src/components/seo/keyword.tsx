"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Updated content array with SVG icon markup for each item
const cardContents = [
  {
    title: "Keyword Research",
    description:
      "Identifying relevant and high-performing keywords that match your target audience and search intent, helping your website attract qualified organic traffic.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    title: "High-Quality Content",
    description:
      "Creating valuable, original, and engaging content that answers user queries, builds trust, and improves your website’s visibility in search results.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" x2="8" y1="13" y2="13" />
        <line x1="16" x2="8" y1="17" y2="17" />
        <line x1="10" x2="8" y1="9" y2="9" />
      </svg>
    ),
  },
  {
    title: "Title Tags & Meta Descriptions",
    description:
      "Optimizing title tags and meta descriptions to accurately describe your pages and encourage users to click through from search engine results.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="4 7 4 4 20 4 20 7" />
        <line x1="9" x2="15" y1="20" y2="20" />
        <line x1="12" x2="12" y1="4" y2="20" />
      </svg>
    ),
  },
  {
    title: "SEO-Friendly URLs",
    description:
      "Creating clean, descriptive URLs that are easy for users and search engines to understand, improving website structure and search visibility.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    title: "Heading Optimization",
    description:
      "Using well-structured and relevant headings to organize content, improve readability, and help search engines understand the main topics of each page.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 12h12" />
        <path d="M6 4v16" />
        <path d="M18 4v16" />
      </svg>
    ),
  },
  {
    title: "Schema Markup",
    description:
      "Adding structured data to help search engines better understand your content and improve the appearance of your website in search results.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

const CornerPlusIcons = ({ isHovered }: { isHovered: boolean }) => (
  <>
    <PlusIcon
      isHovered={isHovered}
      style={{ position: "absolute", top: "-12px", left: "-12px" }}
    />
    <PlusIcon
      isHovered={isHovered}
      style={{ position: "absolute", top: "-12px", right: "-12px" }}
    />
    <PlusIcon
      isHovered={isHovered}
      style={{ position: "absolute", bottom: "-12px", left: "-12px" }}
    />
    <PlusIcon
      isHovered={isHovered}
      style={{ position: "absolute", bottom: "-12px", right: "-12px" }}
    />
  </>
);

const PlusIcon = ({
  style,
  isHovered,
}: {
  style?: React.CSSProperties;
  isHovered: boolean;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    strokeWidth="1"
    stroke="currentColor"
    style={{
      color: isHovered ? "#53ae7d" : "#053456",
      width: "24px",
      height: "24px",
      transition: "transform 0.4s ease, color 0.3s ease",
      transform: isHovered ? "rotate(90deg) scale(1.15)" : "rotate(0deg)",
      ...style,
    }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);

const PlusCard: React.FC<{
  style?: React.CSSProperties;
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}> = ({ style, title, description, icon, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-duration="600"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        border: isHovered ? "1px dashed #53ae7d" : "1px dashed #a1a1aa",
        borderRadius: "12px",
        padding: "28px 24px 24px 24px",
        backgroundColor: isHovered ? "#f5f5f5" : "#ffffff",
        minHeight: "220px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition:
          "background-color 0.3s ease, border-color 0.3s ease, transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease",
        transform: isHovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 10px 20px -5px rgba(5, 52, 86, 0.12)"
          : "0 0 0 0 rgba(0,0,0,0)",
        cursor: "pointer",
        boxSizing: "border-box",
        ...style,
      }}
    >
      <CornerPlusIcons isHovered={isHovered} />

      <div style={{ position: "relative", zIndex: 10 }}>
        {/* TOP ICON HEADER */}
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "10px",
            backgroundColor: isHovered ? "#53ae7d" : "#f5f5f5",
            color: isHovered ? "#ffffff" : "#053456",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "16px",
            transition:
              "background-color 0.3s ease, color 0.3s ease, transform 0.3s ease",
            transform: isHovered ? "scale(1.08)" : "scale(1)",
          }}
        >
          {icon}
        </div>

        {/* CARD CONTENT */}
        <h3
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: isHovered ? "#53ae7d" : "#053456",
            margin: "0 0 8px 0",
            lineHeight: 1.3,
            transition: "color 0.3s ease",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            color: "#4b5563",
            fontSize: "14px !important",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default function RuixenBentoCards() {
  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #e5e7eb",
        padding: "0",
        fontFamily: "sans-serif",
        overflow: "hidden",
      }}
    > 
       
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
       
          padding: "48px 16px",
          boxSizing: "border-box",
        }}
      >
        <div className="row  align-items-center" >
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
               Drive Ethically

            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
            
                <h4 className="px-about-title mb-20">
              <span className="text-blue-about"> We Do A Straightforward Professional</span>   On-Page SEO Plan That Rely On Organic Results That Are Genuine.
            </h4>
            
            </div>
          </div>
        </div>
        {/* Responsive Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {cardContents.map((card, index) => (
            <PlusCard
              key={index}
              index={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>

        {/* Section Footer Heading */}
        <div
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="200"
          style={{
            maxWidth: "672px",
            marginLeft: "auto",
            textAlign: "right",
            padding: "0 16px",
            marginTop: "48px",
          }}
        >


        </div>
      </div>
    </section>
  );
}