"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Minus, Plus } from "lucide-react";

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  badge?: string;
}

const socialMediaFaqData: FAQItem[] = [
  {
    id: 1,
    question: "What is social media creative design?",
    answer:
      "Social media creative design involves creating visual content such as posts, stories, advertisements, promotional graphics, and branded content for social media platforms.",
    badge: "OVERVIEW",
  },
  {
    id: 2,
    question: "Do you design creatives for Instagram and Facebook?",
    answer:
      "Yes. We create customized creatives for Instagram, Facebook, LinkedIn, and other social media platforms based on your campaign requirements.",
    badge: "PLATFORMS",
  },
  {
    id: 3,
    question: "Can you follow our existing brand guidelines?",
    answer:
      "Yes. We can follow your existing brand colors, fonts, logo usage, imagery, and overall visual identity to maintain consistency.",
    badge: "BRANDING",
  },
  {
    id: 4,
    question: "Do you create promotional and festival creatives?",
    answer:
      "Yes. We design promotional, seasonal, festival, event, offer, announcement, and brand awareness creatives based on your marketing calendar.",
    badge: "CAMPAIGNS",
  },
  {
    id: 5,
    question: "Can social media creatives be used for paid advertising?",
    answer:
      "Yes. We can create social media ad creatives specifically designed to support paid advertising campaigns and promotional activities.",
    badge: "ADVERTISING",
  },
  {
    id: 6,
    question: "Do you provide customized social media designs?",
    answer:
      "Yes. Our social media creative designs are customized according to your brand, audience, industry, campaign objective, and communication requirements.",
    badge: "CUSTOMIZATION",
  },
];

export function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="px-about-6-area pt-40 pb-40 pb-lg-110 overflow-hidden">
      <div className="container container-1550">
        
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h4 className="px-about-title mb-2">
            <span className="text-blue-about">Frequently Asked</span> Questions
          </h4>
        </div>

        {/* Accordion List */}
        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
          <div className="col-lg-10 col-xl-9">
            <div className="d-flex flex-column gap-3">

              {socialMediaFaqData.map((item, index) => {
                const isOpen = openId === item.id;
                const formattedNumber = String(index + 1).padStart(2, "0");

                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-4 shadow-sm border border-light p-3 p-md-4 transition-all"
                    style={{
                      transition: "all 0.3s ease",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      className="d-flex w-100 align-items-center justify-content-between bg-transparent border-0 p-0 shadow-none text-start"
                    >
                      <div className="d-flex align-items-center gap-3 gap-md-4 pe-3">
                        {/* Circular Icon Button */}
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                          style={{
                            width: "42px",
                            height: "42px",
                            backgroundColor: isOpen ? "rgba(83, 174, 125, 0.15)" : "#f8f9fa",
                            color: isOpen ? "#53ae7d" : "#053456",
                            border: "1px solid",
                            borderColor: isOpen ? "#53ae7d" : "#e9ecef",
                            transition: "all 0.3s ease",
                          }}
                        >
                          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                        </div>

                        {/* Question Text with Numbering */}
                        <span
                          className="fw-semibold text-dark font-figtree"
                          style={{ fontSize: "18px", fontFamily: "Figtree, Figtree Fallback" }}
                        >
                          {formattedNumber}. {item.question}
                        </span>
                      </div>

                      {/* Category Badge */}
                      {item.badge && (
                        <span
                          className="badge rounded-pill px-3 py-2 fw-normal d-none d-md-inline-block flex-shrink-0"
                          style={{
                            backgroundColor: "rgba(83, 174, 125, 0.1)",
                            color: "#53ae7d",
                            fontSize: "11px",
                            letterSpacing: "0.5px",
                            border: "1px solid rgba(83, 174, 125, 0.2)",
                          }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </button>

                    {/* Answer Block */}
                    {isOpen && (
                      <div className="mt-3 pt-3 border-top border-light ms-0 ms-md-5 ps-md-3">
                        <p
                          className="mb-0 text-figtree text-secondary lh-base"
                          style={{ fontSize: "15px" }}
                        >
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FaqSection;