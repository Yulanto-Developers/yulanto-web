'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface ProcessStep {
  stepNum: string;
  title: string;
  subtitle: string;
  description: string[];
  subListHeader?: string;
  subList?: string[];
  imageUrl: string;
  imageAlt?: string;
}

const processList: ProcessStep[] = [
  {
    stepNum: "01",
    title: "REQUIREMENT GATHERING",
    subtitle: "FOR YOUR BUSINESS STRATEGY",
    description: [
      "We begin by understanding your business, target audience, competitors, website objectives, required features, content requirements, and technical expectations.",
      "This helps our website developers create a clear development strategy based on your business needs."
    ],
    imageUrl: "/assets/img/customwebsite/A-Structured-Approach-1.jpg",
    imageAlt: "Requirement gathering strategy",
  },
  {
    stepNum: "02",
    title: "PLANNING & ARCHITECTURE",
    subtitle: "FOR YOUR WEBSITE STRUCTURE",
    description: [
      "Once the requirements are finalized, we create the website structure, navigation flow, sitemap, and functional plan.",
      "Wireframes may also be prepared to establish the page structure and user journey before moving into the design stage."
    ],
    imageUrl: "/assets/img/customwebsite/A-Structured-Approach-2.jpg",
    imageAlt: "Planning and architecture",
  },
  {
    stepNum: "03",
    title: "UI/UX DESIGN",
    subtitle: "FOR ENGAGING USER EXPERIENCE",
    description: [
      "Our designers create an engaging and user-friendly interface based on your brand identity. The design process includes layout, typography, colors, imagery, visual hierarchy, and user experience.",
      "The objective is to create a website that not only looks professional but also makes it easy for visitors to find information and take action."
    ],
    imageUrl: "/assets/img/customwebsite/A-Structured-Approach-3.jpg",
    imageAlt: "UI/UX design process",
  },
  {
    stepNum: "04",
    title: "WEBSITE DEVELOPMENT",
    subtitle: "FOR FULL FUNCTIONAL CODE",
    description: [
      "After design approval, our development team converts the approved designs into a fully functional website.",
      "Depending on your requirements, we can work with technologies such as HTML, CSS, JavaScript, PHP, WordPress, Next.js, Laravel, and WooCommerce."
    ],
    imageUrl: "/assets/img/customwebsite/A-Structured-Approach-4.jpg",
    imageAlt: "Website development code",
  },
  {
    stepNum: "05",
    title: "TESTING & QUALITY QA",
    subtitle: "FOR FLAWLESS PERFORMANCE",
    description: [
      "Before launch, the website undergoes comprehensive testing to identify and resolve technical issues."
    ],
    subListHeader: "Key Quality Assurance Checks:",
    subList: [
      "Browser & Mobile responsiveness",
      "Page speed & performance audit",
      "Security checks & SSL verification",
      "Forms, links & SEO setup"
    ],
    imageUrl: "/assets/img/customwebsite/A-Structured-Approach-5.jpg",
    imageAlt: "Testing and quality assurance",
  },
  {
    stepNum: "06",
    title: "DEPLOYMENT & LAUNCH",
    subtitle: "FOR LIVE SERVER GO-LIVE",
    description: [
      "Once testing is completed and the website receives final approval, we deploy the website to the live server. Our team assists with domain, hosting, SSL configuration, and deployment requirements to ensure a smooth launch.",
    ],
    imageUrl: "/assets/img/customwebsite/A-Structured-Approach-6.jpg",
    imageAlt: "Deployment and live launch",
  },
  {
    stepNum: "07",
    title: "MAINTENANCE & UPDATES",
    subtitle: "FOR LONG-TERM GROWTH",
    description: [
      "Website development does not end after launch. Regular updates keep your website secure, functional, and up to date. We provide ongoing website maintenance, security updates, backups, content edits, and performance enhancements."
    ],
    imageUrl: "/assets/img/customwebsite/A-Structured-Approach-7.jpg",
    imageAlt: "Maintenance and updatess",
  }
];

export default function StickyProcessSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="sticky-proc-wrapper">
      <section className="container">
        {/* HEADER SECTION */}
        <div className="row mb-5">
          <div className="col-xl-3">
            <span
              className="tp-section-subtitle text-black blink-ball mt-40"
              style={{ lineHeight: "25px" }}
            >
              Our Website <br />
              Development Process
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title text-tenor">
                A Structured Approach to <span className="text-blue-about"> Custom Website Development</span>
              </h4>
              <p className="mb-0">
                We follow a systematic website development process to ensure that every stage of your project is carefully planned, designed, developed, tested, and launched.
              </p>
            </div>
          </div>
        </div>

        {/* PROCESS CARDS CONTAINER WITH ZIGZAG LAYOUT */}
        <div className="sticky-cards-container">
          {processList.map((step, index) => {
            const zIndex = index + 1;
            const isVisible = visibleCards.includes(index);
            const isOdd = index % 2 !== 0;

            return (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                data-index={index}
                className={`sticky-card ${isVisible ? 'is-visible' : ''}`}
                style={{
                  zIndex: zIndex,
                  transitionDelay: `${index * 0.05}s`,
                  top: `${80 + index * 12}px`
                }}
              >
                <div className="sticky-card-inner">
                  <div className="row align-items-center g-4">
                    {/* CONTENT COLUMN */}
                    <div className={`col-lg-8 ${isOdd ? 'order-lg-2' : 'order-lg-1'}`}>
                      <div className="sticky-card-content">
                        <div className="d-flex align-items-center gap-3 mb-2">
                          <span className="step-number-badge">{step.stepNum}</span>
                          <span className="step-subtitle-tag">{step.subtitle}</span>
                        </div>

                        <h4 className="sticky-card-title text-tenor">
                          {step.title}
                        </h4>

                        <div className="sticky-card-description">
                          {step.description.map((para, i) => (
                            <p key={i}>{para}</p>
                          ))}
                        </div>

                        {step.subList && step.subList.length > 0 && (
                          <div className="sticky-sublist">
                            {step.subListHeader && (
                              <span className="sticky-sublist-header">
                                {step.subListHeader}
                              </span>
                            )}
                            <div className="sticky-chips">
                              {step.subList.map((item, idx) => (
                                <div key={idx} className="sticky-chip">
                                  <i className="fa-solid fa-check" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* IMAGE COLUMN - Using explicit dimensions instead of fill to prevent render bugs */}
                    <div className={`col-lg-4 ${isOdd ? 'order-lg-1' : 'order-lg-2'}`}>
                      <div className="sticky-card-image-wrap">
                        <Image
                          src={step.imageUrl}
                          alt={step.imageAlt || step.title}
                          width={600}
                          height={375}
                          quality={90}
                          priority={index === 0}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <style jsx global>{`
        .sticky-proc-wrapper {
          width: 100%;
          padding: 40px 0 80px 0;
          position: relative;
        }

        .sticky-cards-container {
          position: relative;
          margin-top: 20px;
        }

        .sticky-card {
          position: sticky;
          background: #f5f5f5;
          border-radius: 24px;
          padding: 2.5rem;
          opacity: 0;
          transform: translateY(30px) scale(0.98);
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.4s ease,
                      background-color 0.4s ease,
                      border-color 0.4s ease;
          box-shadow: 0 15px 50px rgba(5, 52, 86, 0.15);
          margin-bottom: 2rem;
          will-change: transform, opacity;
          border: 1px solid rgba(5, 52, 86, 0.08);
          overflow: hidden;
        }

        .sticky-card.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .sticky-card:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 25px 60px rgba(5, 52, 86, 0.22);
          background: #ffffff;
          border-color: rgba(83, 174, 125, 0.4);
        }

        .step-number-badge {
          font-size: 1.25rem;
          font-weight: 800;
          color: #53ae7d;
          background: rgba(83, 174, 125, 0.15);
          padding: 4px 12px;
          border-radius: 10px;
          transition: background-color 0.3s ease;
        }

        .sticky-card:hover .step-number-badge {
          background: rgba(83, 174, 125, 0.25);
        }

        .step-subtitle-tag {
          font-size: 13px;
          font-family: "Figtree", sans-serif;
          letter-spacing: 1px;
          color: #53ae7d;
          font-weight: 600;
        }

        .sticky-card-title {
          font-size: 22px;
          font-weight: 700;
          color: #053456;
          margin: 0 0 12px 0;
          letter-spacing: 0.5px;
        }

        .sticky-card-description p {
          font-size: 17px !important;
          line-height: 1.65;
          margin: 0 0 8px 0;
        }

        .sticky-card-description p:last-child {
          margin-bottom: 0;
        }

        .sticky-sublist {
          margin-top: 14px;
        }

        .sticky-sublist-header {
          display: block;
          font-size: 12px;
          font-weight: 700;
          color: #53ae7d;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .sticky-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .sticky-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          background: #053456;
          color: #ffffff;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .sticky-card:hover .sticky-chip {
          background: #084c7c;
          transform: translateY(-2px);
        }

        .sticky-chip i {
          font-size: 10px;
          color: #53ae7d;
        }

        /* Fixed container block dimensions so image stays locked in flow */
        .sticky-card-image-wrap {
          position: relative;
          width: 100%;
          height: 240px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          transition: box-shadow 0.3s ease;
          background: #e2e8f0;
        }

        .sticky-card:hover .sticky-card-image-wrap {
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
        }

        .sticky-card-image-wrap img {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sticky-card:hover .sticky-card-image-wrap img {
          transform: scale(1.06);
        }

        @media (max-width: 991px) {
          .sticky-card {
            top: 90px !important;
            padding: 1.75rem;
          }
          .sticky-card-image-wrap {
            height: 200px;
            margin-top: 10px;
          }
        }
      `}</style>
    </main>
  );
}