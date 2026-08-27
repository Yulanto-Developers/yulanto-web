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
    question: "1. Why is social media marketing important for businesses?",
    answer:
      "Social media marketing helps businesses reach their target audience, increase brand awareness, drive website traffic, generate leads, promote products and services, and improve customer engagement. It also provides valuable insights into customer preferences and behavior.",
  },

  {
    question: "2. Which social media platforms should my business use?",
    answer:
      "The right platforms depend on your target audience, industry, products, services, and marketing objectives. Popular platforms include Facebook, Instagram, LinkedIn, YouTube, Pinterest, and X. A professional social media marketing company in Chennai can help identify the most suitable platforms for your business.",
  },

  {
    question: "3. How often should I post on social media?",
    answer:
      "Posting frequency depends on the platform, audience, content type, and business goals. Rather than focusing only on quantity, businesses should maintain a consistent schedule and publish useful, relevant, and high-quality content.",
  },

  {
    question: "4. How can I measure social media marketing performance?",
    answer:
      "Social media performance can be measured using metrics such as reach, impressions, engagement, clicks, website traffic, leads, conversions, cost per lead, and return on investment (ROI). Regular analytics help identify successful campaigns and areas for improvement.",
  },

 
];

const DEFAULT_FAQS_RIGHT: FAQItem[] = [
  {
    question: "5. Should I invest in paid social media advertising?",
    answer:
      "Paid social media advertising can help businesses reach highly targeted audiences and achieve specific marketing objectives. Platforms such as Facebook, Instagram, LinkedIn, and YouTube offer targeting options based on demographics, interests, behavior, location, and other audience characteristics.",
  },

  {
    question: "6. How can I increase audience engagement on social media?",
    answer:
      "You can improve engagement by publishing valuable content, responding to comments and messages, asking questions, conducting polls, creating videos and reels, sharing user-generated content, and encouraging meaningful conversations with your audience.",
  },

  {
    question: "7. Why should I choose a social media marketing agency in Chennai?",
    answer:
      "A professional social media marketing agency in Chennai can provide strategic planning, content creation, paid advertising, audience targeting, social media management, analytics, and ongoing optimization. This allows businesses to maintain a professional online presence while focusing on their core operations.",
  },

  {
    question: "8. How can social media marketing help generate leads?",
    answer:
      "Social media marketing can generate leads through targeted advertising, engaging content, landing pages, lead-generation campaigns, direct messages, promotional offers, and calls to action. The strategy can be optimized based on campaign data to improve lead quality and conversions.",
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
                justifyContent: "space-between",
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
        <span className="text-blue-about">Frequently Asked Questions </span> Social Media Marketing
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