"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export type FAQItem = {
  question: string;
  answer: string;
};

export interface FAQSectionProps {
  faqsLeft?: FAQItem[];
  faqsRight?: FAQItem[];
}

const DEFAULT_FAQS_LEFT: FAQItem[] = [
  {
    question: "1. What is Google Ads?",
    answer:
      "Google Ads is Google's online advertising platform that allows businesses to display paid advertisements to people searching for relevant products and services or browsing websites, apps, and other Google advertising channels.",
  },
  {
    question: "2. What is PPC advertising?",
    answer:
      "PPC stands for Pay-Per-Click advertising. In a PPC campaign, advertisers generally pay when someone clicks on their advertisement. Google Ads is one of the most widely used PPC advertising platforms.",
  },
  {
    question: "3. Why should I hire a Google Ads agency in Chennai?",
    answer:
      "A professional Google Ads agency in Chennai can help with campaign planning, keyword research, ad creation, audience targeting, bidding, conversion tracking, campaign optimization, and performance analysis. This can help businesses manage their advertising budget more effectively.",
  },
  {
    question: "4. How much does Google Ads cost?",
    answer:
      "There is no fixed Google Ads price. Your advertising cost depends on factors such as industry competition, keywords, location, targeting, bidding strategy, campaign objectives, and budget. A campaign can be planned according to your business requirements and available advertising budget.",
  },
  {
    question: "5. How quickly can Google Ads generate results?",
    answer:
      "Google Ads can provide paid visibility much faster than many organic marketing strategies. However, campaign performance depends on factors such as keyword selection, competition, ad relevance, landing page quality, budget, targeting, and conversion tracking. Continuous optimization is important for sustainable results.",
  },
];

const DEFAULT_FAQS_RIGHT: FAQItem[] = [
  {
    question: "6. What types of Google Ads campaigns do you manage?",
    answer:
      "We can manage different campaign types and advertising solutions, including Google Search Ads, Display Ads, Remarketing Ads, Shopping Ads, and other suitable Google advertising campaigns, depending on your business goals and eligibility.",
  },
  {
    question: "7. Can Google Ads help generate leads?",
    answer:
      "Yes. Google Ads can help generate targeted leads by displaying advertisements to users actively searching for relevant products or services. Effective keyword targeting, compelling ad copy, optimized landing pages, and accurate conversion tracking are important for lead generation.",
  },
  {
    question: "8. What is the difference between Google Ads and SEO?",
    answer:
      "Google Ads provides paid search visibility, while SEO focuses on improving organic search rankings. Google Ads can deliver faster paid visibility, whereas SEO is generally a longer-term strategy. Using both can create a comprehensive search marketing approach.",
  },
  {
    question: "9. How do you measure Google Ads performance?",
    answer:
      "We monitor metrics such as click-through rate (CTR), cost per click (CPC), conversions, conversion rate, cost per conversion, impressions, search terms, and return on ad spend (ROAS) where applicable. These metrics help identify opportunities for campaign optimization.",
  },
  {
    question: "10. Can you manage an existing Google Ads account?",
    answer:
      "Yes. We can review existing campaigns, conduct a PPC audit, identify areas for improvement, restructure campaigns where necessary, optimize targeting and bidding, and continuously monitor performance.",
  },
];

export default function FAQSection({
  faqsLeft = DEFAULT_FAQS_LEFT,
  faqsRight = DEFAULT_FAQS_RIGHT,
}: FAQSectionProps) {
  const [openItemKey, setOpenItemKey] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
  }, []);

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
              backgroundColor: "#ffffff",
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
                backgroundColor: "#ffffff",
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
                  fontFamily: "Figtree, sans-serif",
                  color: "#4b5563",
                  lineHeight: 1.6,
                  backgroundColor: "#ffffff",
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
      className="px-about-6-area pt-50 pb-80 pb-lg-110"
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        overflow: "hidden",
      }}
    >
      <div
        className="container container-1550"
        
      >
        {/* Header Block */}
        <h4
          className="px-about-title mb-20 text-center"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
          <span className="text-blue-about">Frequently Asked Questions</span> About Google Ads
        </h4>

        {/* FAQs Grid */}
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
      </div>
    </section>
  );
}