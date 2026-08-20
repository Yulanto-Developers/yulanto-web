"use client";

import React, { useEffect, useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  meta: string;
}

const faqs: FAQItem[] = [
  {
    question: "1. What is Off-Page SEO?",
    answer:
      "Off-Page SEO refers to optimization activities performed outside your website to improve its authority, credibility, visibility, and search engine ranking potential. It includes link building, citations, brand mentions, content promotion, digital PR, and other external SEO activities.",
    meta: "Overview",
  },
  {
    question: "2. Why is Off-Page SEO important for my website?",
    answer:
      "Off-Page SEO helps search engines evaluate your website's authority and reputation. Quality backlinks, relevant brand mentions, and strong external signals can support better organic visibility and help your website compete for valuable search terms.",
    meta: "Importance",
  },
  {
    question: "3. What Off-Page SEO services do you provide in Chennai?",
    answer:
      "Our Chennai SEO services include strategic link building, local citations, directory optimization, guest posting, competitor backlink analysis, brand mentions, content promotion, and other ethical off-page SEO strategies.",
    meta: "Services",
  },
  {
    question: "4. How does link building help SEO?",
    answer:
      "Quality backlinks can act as external signals of trust and relevance. Links from authoritative and relevant websites can strengthen your website's authority and support its ability to rank for competitive keywords.",
    meta: "Link Building",
  },
  {
    question: "5. How long does Off-Page SEO take to show results?",
    answer:
      "SEO results vary depending on your website's current authority, competition, industry, target keywords, backlink profile, content quality, and overall SEO strategy. Off-page SEO is generally a long-term process, so consistent optimization is important for sustainable results.",
    meta: "Timeline",
  },
  {
    question: "6. Can Off-Page SEO improve local rankings in Chennai?",
    answer:
      "Yes. Local SEO activities such as business citations, local directories, location-relevant mentions, and consistent business information can help strengthen your local online presence. Our local SEO services in Chennai are designed for businesses targeting customers in Chennai and surrounding areas.",
    meta: "Local SEO",
  },
  {
    question: "7. Do you provide customized SEO services?",
    answer:
      "Yes. Our SEO services company in Chennai develops customized SEO strategies based on your website, industry, competitors, target audience, location, and business goals. We do not follow the same strategy for every website.",
    meta: "Strategy",
  },
  {
    question: "8. How do you build backlinks?",
    answer:
      "We focus on acquiring relevant and quality backlinks through appropriate content promotion, industry-related websites, business listings, guest content opportunities, digital outreach, and other ethical SEO methods. The focus is on quality and relevance rather than generating large numbers of low-quality links.",
    meta: "Backlinks",
  },
  {
    question: "9. Can Off-Page SEO increase website traffic?",
    answer:
      "Yes. Off-page SEO can contribute to increased organic visibility and referral traffic. When your website earns quality links and gains visibility across relevant online platforms, more potential customers may discover your business.",
    meta: "Traffic",
  },
  {
    question: "10. How can I choose the best SEO company in Chennai?",
    answer:
      "When choosing an SEO company, consider its experience, SEO approach, reporting process, understanding of your industry, technical expertise, content strategy, link-building practices, and ability to provide a customized SEO plan. Avoid agencies that guarantee instant rankings or rely on questionable link-building practices.",
    meta: "Guide",
  },
  {
    question: "11. Do you offer SEO consultation in Chennai?",
    answer:
      "Yes. Our SEO consultant in Chennai can evaluate your website, identify SEO opportunities, analyze competitors, review your existing backlink profile, and recommend a suitable SEO strategy based on your business objectives.",
    meta: "Consultation",
  },
  {
    question: "12. What makes your SEO service different?",
    answer:
      "Our approach combines technical SEO, on-page optimization, content strategy, local SEO, and off-page SEO to create a complete search engine optimization strategy. Instead of focusing only on rankings, we aim to improve visibility, qualified traffic, brand authority, and long-term business growth.",
    meta: "Features",
  },
];

const keyframeStyles = `
  @keyframes faq-beam-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @keyframes faq-pulse {
    0% { transform: scale(0.7); opacity: 0.55; }
    60% { opacity: 0.1; }
    100% { transform: scale(1.25); opacity: 0; }
  }
  @keyframes faq-meter {
    0%, 20% { transform: scaleX(0); transform-origin: left; }
    45%, 60% { transform: scaleX(1); transform-origin: left; }
    80%, 100% { transform: scaleX(0); transform-origin: right; }
  }
  @keyframes faq-tick {
    0%, 30% { transform: translateX(-6px); opacity: 0.4; }
    50% { transform: translateX(2px); opacity: 1; }
    100% { transform: translateX(20px); opacity: 0; }
  }
`;

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [glowPos, setGlowPos] = useState<{ x: number; y: number; index: number | null }>({
    x: 0,
    y: 0,
    index: null,
  });

  useEffect(() => {
    if (typeof document === "undefined") return;
    const styleId = "inline-faq-keyframes-brand";
    if (document.getElementById(styleId)) return;

    const styleTag = document.createElement("style");
    styleTag.id = styleId;
    styleTag.innerHTML = keyframeStyles;
    document.head.appendChild(styleTag);

    return () => {
      styleTag.remove();
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLLIElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlowPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      index,
    });
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#f5f5f5",
        color: "#053456",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Background Aurora */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 60% 80% at 20% 0%, rgba(83, 174, 125, 0.18), transparent 70%), radial-gradient(ellipse 50% 60% at 80% 100%, rgba(5, 52, 86, 0.08), transparent 70%)",
        }}
      />

      {/* Main Content Area */}
      <section
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "64rem",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          padding: "6rem 1.5rem",
        }}
      >
        <h4 className="px-about-title mb-20 text-center">
          <span className="text-blue-about">Frequently Asked Questions </span> About Off-Page SEO
        </h4>

        {/* FAQ List */}
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;
            const isHovered = hoveredIndex === index;
            const isGlowActive = glowPos.index === index;

            return (
              <li
                key={item.question}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setGlowPos((prev) => ({ ...prev, index: null }));
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "1.5rem",
                  border: isOpen ? "1px solid #53ae7d" : "1px solid rgba(5, 52, 86, 0.12)",
                  backgroundColor: "#ffffff",
                  boxShadow: isOpen
                    ? "0 20px 40px -15px rgba(83, 174, 125, 0.2)"
                    : "0 10px 30px -10px rgba(5, 52, 86, 0.05)",
                  transform: isHovered ? "translateY(-2px)" : "translateY(0px)",
                  transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {/* Glow Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    opacity: isHovered || isOpen ? 1 : 0,
                    transition: "opacity 500ms ease",
                    background: isGlowActive
                      ? `radial-gradient(280px circle at ${glowPos.x}px ${glowPos.y}px, rgba(83, 174, 125, 0.12), transparent 70%)`
                      : "none",
                  }}
                />

                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? -1 : index)}
                  style={{
                    position: "relative",
                    width: "100%",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1.5rem",
                    padding: "1.75rem 2rem",
                    textAlign: "left",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "#053456",
                    font: "inherit",
                  }}
                >
                  {/* Icon */}
                  <span
                    style={{
                      position: "relative",
                      width: "2.75rem",
                      height: "2.75rem",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "9999px",
                      border: isOpen ? "1px solid #53ae7d" : "1px solid rgba(5, 52, 86, 0.2)",
                      backgroundColor: isOpen ? "#53ae7d" : "rgba(83, 174, 125, 0.08)",
                      color: isOpen ? "#ffffff" : "#053456",
                      transform: isHovered ? "scale(1.05)" : "scale(1)",
                      transition: "all 300ms ease",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        width: "1.25rem",
                        height: "1.25rem",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    >
                      <path d="M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>

                  {/* Body */}
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "0.75rem",
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 600,
                          lineHeight: 1.3,
                          margin: 0,
                          color: "#053456",
                        }}
                      >
                        {item.question}
                      </h2>
                      {item.meta && (
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            padding: "0.25rem 0.75rem",
                            borderRadius: "9999px",
                            border: "1px solid rgba(83, 174, 125, 0.3)",
                            backgroundColor: "rgba(83, 174, 125, 0.1)",
                            fontSize: "0.625rem",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.35em",
                            color: "#53ae7d",
                          }}
                        >
                          {item.meta}
                        </span>
                      )}
                    </div>

                    {/* Expandable Text Panel */}
                    <div
                      style={{
                        overflow: "hidden",
                        fontSize: "0.9375rem",
                        lineHeight: 1.6,
                        color: "rgba(5, 52, 86, 0.8)",
                        maxHeight: isOpen ? "16rem" : "0px",
                        opacity: isOpen ? 1 : 0,
                        transition: "max-height 400ms cubic-bezier(0.16, 1, 0.3, 1), opacity 300ms ease",
                      }}
                    >
                      <p style={{ margin: 0, paddingRight: "0.5rem" }}>{item.answer}</p>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}