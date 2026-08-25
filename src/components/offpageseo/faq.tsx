"use client";

import React, { useState } from "react";

export type FAQItem = {
  question: string;
  answer: string;
};

export interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  faqsLeft?: FAQItem[];
  faqsRight?: FAQItem[];
}

const DEFAULT_FAQS_LEFT: FAQItem[] = [
  {
    question: "1. What is Off-Page SEO?",
    answer:
      "Off-Page SEO refers to optimization activities performed outside your website to improve its authority, credibility, visibility, and search engine ranking potential. It includes link building, citations, brand mentions, content promotion, digital PR, and other external SEO activities.",
  },
  {
    question: "2. Why is Off-Page SEO important for my website?",
    answer:
      "Off-Page SEO helps search engines evaluate your website's authority and reputation. Quality backlinks, relevant brand mentions, and strong external signals can support better organic visibility and help your website compete for valuable search terms.",
  },
  {
    question: "3. What Off-Page SEO services do you provide in Chennai?",
    answer:
      "Our Chennai SEO services include strategic link building, local citations, directory optimization, guest posting, competitor backlink analysis, brand mentions, content promotion, and other ethical off-page SEO strategies.",
  },
  {
    question: "4. How does link building help SEO?",
    answer:
      "Quality backlinks can act as external signals of trust and relevance. Links from authoritative and relevant websites can strengthen your website's authority and support its ability to rank for competitive keywords.",
  },
  {
    question: "5. How long does Off-Page SEO take to show results?",
    answer:
      "SEO results vary depending on your website's current authority, competition, industry, target keywords, backlink profile, content quality, and overall SEO strategy. Off-page SEO is generally a long-term process, so consistent optimization is important for sustainable results.",
  },
  {
    question: "6. Can Off-Page SEO improve local rankings in Chennai?",
    answer:
      "Yes. Local SEO activities such as business citations, local directories, location-relevant mentions, and consistent business information can help strengthen your local online presence. Our local SEO services in Chennai are designed for businesses targeting customers in Chennai and surrounding areas.",
  },
];

const DEFAULT_FAQS_RIGHT: FAQItem[] = [
  {
    question: "7. Do you provide customized SEO services?",
    answer:
      "Yes. Our SEO services company in Chennai develops customized SEO strategies based on your website, industry, competitors, target audience, location, and business goals. We do not follow the same strategy for every website.",
  },
  {
    question: "8. How do you build backlinks?",
    answer:
      "We focus on acquiring relevant and quality backlinks through appropriate content promotion, industry-related websites, business listings, guest content opportunities, digital outreach, and other ethical SEO methods. The focus is on quality and relevance rather than generating large numbers of low-quality links.",
  },
  {
    question: "9. Can Off-Page SEO increase website traffic?",
    answer:
      "Yes. Off-page SEO can contribute to increased organic visibility and referral traffic. When your website earns quality links and gains visibility across relevant online platforms, more potential customers may discover your business.",
  },
  {
    question: "10. How can I choose the best SEO company in Chennai?",
    answer:
      "When choosing an SEO company, consider its experience, SEO approach, reporting process, understanding of your industry, technical expertise, content strategy, link-building practices, and ability to provide a customized SEO plan. Avoid agencies that guarantee instant rankings or rely on questionable link-building practices.",
  },
  {
    question: "11. Do you offer SEO consultation in Chennai?",
    answer:
      "Yes. Our SEO consultant in Chennai can evaluate your website, identify SEO opportunities, analyze competitors, review your existing backlink profile, and recommend a suitable SEO strategy based on your business objectives.",
  },
  {
    question: "12. What makes your SEO service different?",
    answer:
      "Our approach combines technical SEO, on-page optimization, content strategy, local SEO, and off-page SEO to create a complete search engine optimization strategy. Instead of focusing only on rankings, we aim to improve visibility, qualified traffic, brand authority, and long-term business growth.",
  },
];

export default function FAQSection({
  faqsLeft = DEFAULT_FAQS_LEFT,
  faqsRight = DEFAULT_FAQS_RIGHT,
}: FAQSectionProps) {
  // Track open item key, e.g., "left-0" or "right-2"
  const [openItemKey, setOpenItemKey] = useState<string | null>(null);

  const toggleAccordion = (key: string) => {
    setOpenItemKey((prev) => (prev === key ? null : key));
  };

  const renderColumn = (
    columnItems: FAQItem[], 
    columnPrefix: string, 
    animationType: string, 
    animationDelay: number
  ) => (
    <div
      data-aos={animationType}
      data-aos-duration="1000"
      data-aos-delay={animationDelay}
      data-aos-once="true"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {columnItems.map((faq, index) => {
        const itemKey = `${columnPrefix}-${index}`;
        const isOpen = openItemKey === itemKey;

        return (
          <div
            key={itemKey}
            data-aos="fade-up"
            data-aos-delay={100 + index * 50}
            data-aos-once="true"
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "0.75rem",
              overflow: "hidden",
              backgroundColor: "#f9fafb",
              transition: "border-color 0.2s ease",
            }}
          >
            <button
              onClick={() => toggleAccordion(itemKey)}
              style={{
                width: "100%",
                display: "flex",
                justify: "space-between",
                alignItems: "center",
                padding: "1rem 1.25rem",
                fontSize: "1rem",
                fontWeight: 600,
                color: "#053456",
                backgroundColor: "#fff",
                border: "none",
                textAlign: "left",
                cursor: "pointer",
                gap: "1rem",
              }}
            >
              <span>{faq.question}</span>
              <span
                style={{
                  fontSize: "1.25rem",
                  lineHeight: 1,
                  color: "#053456",
                  fontWeight: 600,
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              >
                +
              </span>
            </button>

            {isOpen && (
              <div
                style={{
                  padding: "0 1.25rem 1rem 1.25rem",
                  fontSize: "0.875rem",
                  fontFamily: "Figtree",
                  color: "#4b5563",
                  lineHeight: 1.6,
                  background: "#ffff",
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        overflow: "hidden",
      }}
    >
      {/* Header with Fade-Down Animation */}
      <h4 
        className="px-about-title mb-20 text-center"
        data-aos="fade-down"
        data-aos-duration="900"
        data-aos-once="true"
      >
        <span className="text-blue-about">Frequently Asked Questions </span> Off Page SEO
      </h4>

      {/* FAQs Columns with Side-by-Side Animations */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          textAlign: "left",
          marginTop: "2.5rem",
        }}
      >
        {renderColumn(faqsLeft, "left", "fade-right", 200)}
        {renderColumn(faqsRight, "right", "fade-left", 300)}
      </div>
    </section>
  );
}