"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface FAQItem {
  question: string;
  answer: string;
  meta: string;
}

const faqs: FAQItem[] = [
  {
    question: "1.What is the ideal time to consider a website redesign?",
    answer:
      "It's essential to regularly evaluate your website's performance, user experience, and alignment with your business goals and brand identity. If any of these factors indicate that your website is not meeting expectations, it may be time to consider a redesign.",
    meta: "Overview",
  },
  {
    question: "2. How does it cost to redesign a website?",
    answer:
      "The necessity of a full revamp versus partial changes depends on the scope of work at hand.",
    meta: "Optimization",
  },
  {
    question: "3. What is the duration required for website redesigning?",
    answer:
      "The duration for website redesign can vary from two to four weeks, depending on the specific requirements.",
    meta: "Keywords",
  },
  {
    question: "4. Can the revamped website lead to an increase in my sales?",
    answer:
      "Indeed, the redesign of a website enhances user engagement and traffic, resulting in increased leads and conversions.",
    meta: "Timeline",
  },
  {
    question: "5. Do you also offer content revamping services in addition to website redesign?",
    answer:
      "Indeed, in addition to website redesign services, we also offer content revamping.",
    meta: "Analytics",
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

export default function ReFaq() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [glowPos, setGlowPos] = useState<{ x: number; y: number; index: number | null }>({
    x: 0,
    y: 0,
    index: null,
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });

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
        <h4 
          className="px-about-title mb-20 text-center"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <span className="text-blue-about">Frequently Asked Questions </span> About SEO
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
                data-aos="fade-up"
                data-aos-delay={150 + index * 100}
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