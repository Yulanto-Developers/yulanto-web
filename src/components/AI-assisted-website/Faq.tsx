"use client";

import React, { useState } from "react";



interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  // Left Column (5 Items)
  {
    question: "Is the website completely created by AI?",
    answer: "No. We use AI-assisted tools throughout the workflow, but our designers and developers control the creative direction, implementation and final quality."
  },
  {
    question: "Will my website look like an AI-generated template?",
    answer: "No. AI is used to accelerate exploration and production. The final design is customized around your brand, audience and business objectives."
  },
  {
    question: "Can you use my existing branding?",
    answer: "Yes. We can work with your existing logo, colors, typography, imagery and brand guidelines."
  },
  {
    question: "Will the website be mobile responsive?",
    answer: "Yes. Responsive design is part of our standard website development process."
  },
  {
    question: "Will my website be SEO friendly?",
    answer: "We build websites with SEO-friendly structure and technical best practices. SEO performance itself also depends on content, competition and ongoing optimization."
  },
  // Right Column (4 Items)
  {
    question: "Will AI write all of my website content?",
    answer: "AI can assist with content ideation and drafts, but we refine the content to match your brand, audience and goals."
  },
  {
    question: "Can you redesign my existing website using AI?",
    answer: "Yes. AI-assisted tools can help us analyze, explore and redesign existing websites while preserving the important parts of your brand and business."
  },
  {
    question: "How quickly can you build an AI-assisted website?",
    answer: "The timeline depends on the scope, number of pages, content requirements and functionality. AI can significantly reduce repetitive production time, but quality and complexity still determine the final timeline."
  },
  {
    question: "Can I request changes?",
    answer: "Absolutely. Your website goes through the same review and revision process as our other website projects."
  }
];

const styles = `

  /* FAQ 2-Column Grid Layout */
  .faq-container {
    max-width: 1100px;
    margin: 60px auto 0 auto;
    text-align: center;
  }

  .faq-header-title {
    font-size: 28px;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 8px;
  }

  .faq-header-subtitle {
    font-size: 14px;
    color: #64748b;
    margin-bottom: 36px;
  }

  .faq-grid-2col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-items: start;
    text-align: left;
  }

  .faq-column {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .faq-item {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.25s ease;
  }

  .faq-item.open {
    border-color: #0000;
    box-shadow: 0 8px 20px rgba(56, 189, 248, 0.1);
  }

  .faq-question {
    width: 100%;
    padding: 18px 20px;
    background: none;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    color: #1e293b;
    cursor: pointer;
    text-align: left;
    gap: 12px;
  }

  .faq-question:hover {
    color: #53ae7d;
  }

  .faq-icon {
    font-size: 18px;
    font-weight: 400;
    color: #53ae7d;
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }

  .faq-item.open .faq-icon {
    transform: rotate(45deg);
  }

  .faq-answer {
    padding: 0 20px 18px 20px;
    font-size: 13.5px;
    line-height: 1.6;
    color: #475569;
  }

  @media (max-width: 992px) {
    .faq-grid-2col {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .tools-outer-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
    
    .center-chip-container {
      grid-column: span 2;
      grid-row: auto;
      margin: 10px 0;
    }

    .tool-card {
      width: 105px;
      height: 105px;
    }

    .ai-chip {
      width: 110px;
      height: 110px;
    }

    .ai-chip-title {
      font-size: 20px;
    }

    .connection-svg {
      display: none;
    }

    .faq-container {
      margin-top: 40px;
      padding: 0 10px;
    }

    .faq-header-title {
      font-size: 22px;
    }

    .faq-question {
      padding: 14px 16px;
      font-size: 14px;
    }

    .faq-answer {
      padding: 0 16px 14px 16px;
      font-size: 13px;
    }
  }
`;

export const AIToolsIntegrations: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const leftFaqs = faqs.slice(0, 5);
  const rightFaqs = faqs.slice(5, 9);

  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110" style={{
        backgroundColor: "#ffffff",
      
      }}>
      <style>{styles}</style>

      <div className="container container-1550">
     


        {/* 2-Column Split FAQ Layout (5 Items Left / 4 Items Right) */}
        <div className="faq-container" data-aos="fade-up" data-aos-delay="250">
        <h4 className="px-about-title mb-20">
                <span className="text-blue-about">Frequently Asked </span>
                Questions
              </h4>

          <div className="faq-grid-2col">
            {/* Left Column (Items 0 to 4) */}
            <div className="faq-column">
              {leftFaqs.map((faq, index) => {
                const actualIndex = index;
                const isOpen = openIndex === actualIndex;
                return (
                  <div
                    key={actualIndex}
                    className={`faq-item ${isOpen ? "open" : ""}`}
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleFAQ(actualIndex)}
                      aria-expanded={isOpen}
                    >
                      <h5 className="" style={{ fontFamily: '"Tenor Sans", "Tenor Sans Fallback"',fontSize:"20px" }}>{faq.question}</h5>
                      <span className="faq-icon">+</span>
                    </button>
                    {isOpen && (
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column (Items 5 to 8) */}
            <div className="faq-column">
              {rightFaqs.map((faq, index) => {
                const actualIndex = index + 5;
                const isOpen = openIndex === actualIndex;
                return (
                  <div
                    key={actualIndex}
                    className={`faq-item ${isOpen ? "open" : ""}`}
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleFAQ(actualIndex)}
                      aria-expanded={isOpen}
                    >
                        <h5 className="" style={{ fontFamily: '"Tenor Sans", "Tenor Sans Fallback"',fontSize:"20px", }}>{faq.question}</h5>
                      <span className="faq-icon">+</span>
                    </button>
                    {isOpen && (
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
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
};

export default AIToolsIntegrations;