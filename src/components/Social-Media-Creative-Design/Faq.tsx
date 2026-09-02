"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Minus, Plus } from "lucide-react";

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon?: React.ReactNode | string;
  iconPosition?: "left" | "right";
}

const socialMediaFaqData: FAQItem[] = [
  {
    id: 1,
    question: "What is social media creative design?",
    answer:
      "Social media creative design involves creating visual content such as posts, stories, advertisements, promotional graphics, and branded content for social media platforms.",
    icon: "🎨",
    iconPosition: "left",
  },
  {
    id: 2,
    question: "Do you design creatives for Instagram and Facebook?",
    answer:
      "Yes. We create customized creatives for Instagram, Facebook, LinkedIn, and other social media platforms based on your campaign requirements.",
  },
  {
    id: 3,
    question: "Can you follow our existing brand guidelines?",
    answer:
      "Yes. We can follow your existing brand colors, fonts, logo usage, imagery, and overall visual identity to maintain consistency.",
    icon: "✨",
    iconPosition: "right",
  },
  {
    id: 4,
    question: "Do you create promotional and festival creatives?",
    answer:
      "Yes. We design promotional, seasonal, festival, event, offer, announcement, and brand awareness creatives based on your marketing calendar.",
  },
  {
    id: 5,
    question: "Can social media creatives be used for paid advertising?",
    answer:
      "Yes. We can create social media ad creatives specifically designed to support paid advertising campaigns and promotional activities.",
    icon: "🚀",
    iconPosition: "left",
  },
  {
    id: 6,
    question: "Do you provide customized social media designs?",
    answer:
      "Yes. Our social media creative designs are customized according to your brand, audience, industry, campaign objective, and communication requirements.",
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
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110 overflow-hidden">
      <div className="container container-1550">
        
        {/* Section Header */}
        <div className="text-center mb-4" data-aos="fade-up">
          <h4 className="px-about-title mb-2">
            <span className="text-blue-about">Frequently Asked</span> Questions
          
          </h4>
         
        </div>

        {/* Accordion List */}
        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
          <div className="col-lg-9 col-xl-8">
            <div className="p-3">

              {socialMediaFaqData.map((item) => {
                const isOpen = openId === item.id;

                return (
                  <div key={item.id} className="mb-3 border-0">
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      className="d-flex w-100 align-items-center justify-content-start gap-3 text-start bg-transparent border-0 p-0 shadow-none"
                    >
                      <div
                        className="position-relative d-flex align-items-center rounded-4 px-3 py-2"
                        style={{
                          backgroundColor: isOpen ? "rgba(83, 174, 125, 0.15)" : "#FFFAFA",
                          color: isOpen ? "#053456" : "#212529",
                          transition: "background-color 0.3s ease, color 0.3s ease",
                          fontFamily: "Figtree, Figtree Fallback",
                          
                        }}
                      >
                        {item.icon && (
                          <span
                            className="position-absolute"
                            style={{
                              top: "-12px",
                              [item.iconPosition === "right" ? "right" : "left"]: "-8px",
                              transform: item.iconPosition === "right" ? "rotate(7deg)" : "rotate(-4deg)",
                            }}
                          >
                            {item.icon}
                          </span>
                        )}
                        <span className="fw-semibold font-figtree" style={{ fontSize: "20px",fontFamily: "Figtree, Figtree Fallback", }}>
                          {item.question}
                        </span>
                      </div>

                      <span className="d-inline-flex align-items-center" style={{ color: isOpen ? "#53ae7d" : "#6c757d" }}>
                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                      </span>
                    </button>

                    {/* Answer Block */}
                    {isOpen && (
                      <div className="ms-3 ms-md-5 mt-2">
                        <div
                          className="rounded-4 px-4 py-3 text-white shadow-sm d-inline-block"
                          style={{
                            backgroundColor: "#fff",
                            maxWidth: "550px",
                          }}
                        >
                          <p className="mb-0 text-figtree lh-base" style={{ fontSize: "15px" }}>
                            {item.answer}
                          </p>
                        </div>
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