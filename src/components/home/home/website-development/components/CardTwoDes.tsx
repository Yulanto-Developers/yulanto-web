'use client';

import React, { useState, useEffect, useRef } from 'react';

interface ProcessStep {
  stepNum: string;
  title: string;
  subtitle: string;
  description: string[];
  subListHeader?: string;
  subList?: string[];
}

const processList: ProcessStep[] = [
  {
    stepNum: "01",
    title: "REQUIREMENT GATHERING",
    subtitle: "FOR YOUR BUSINESS STRATEGY",
    description: [
      "We begin by understanding your business, target audience, competitors, website objectives, required features, content requirements, and technical expectations.",
      "This helps our website developers create a clear development strategy based on your business needs."
    ]
  },
  {
    stepNum: "02",
    title: "PLANNING & ARCHITECTURE",
    subtitle: "FOR YOUR WEBSITE STRUCTURE",
    description: [
      "Once the requirements are finalized, we create the website structure, navigation flow, sitemap, and functional plan.",
      "Wireframes may also be prepared to establish the page structure and user journey before moving into the design stage."
    ]
  },
  {
    stepNum: "03",
    title: "UI/UX DESIGN",
    subtitle: "FOR ENGAGING USER EXPERIENCE",
    description: [
      "Our designers create an engaging and user-friendly interface based on your brand identity. The design process includes layout, typography, colors, imagery, visual hierarchy, and user experience.",
      "The objective is to create a website that not only looks professional but also makes it easy for visitors to find information and take action."
    ]
  },
  {
    stepNum: "04",
    title: "WEBSITE DEVELOPMENT",
    subtitle: "FOR FULL FUNCTIONAL CODE",
    description: [
      "After design approval, our development team converts the approved designs into a fully functional website.",
      "Depending on your requirements, we can work with technologies such as HTML, CSS, JavaScript, PHP, WordPress, Next.js, Laravel, and WooCommerce."
    ]
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
    ]
  },
  {
    stepNum: "06",
    title: "DEPLOYMENT & LAUNCH",
    subtitle: "FOR LIVE SERVER GO-LIVE",
    description: [
      "Once testing is completed and the website receives final approval, we deploy the website to the live server.",
      "Our team assists with domain, hosting, SSL configuration, and deployment requirements to ensure a smooth launch."
    ]
  },
  {
    stepNum: "07",
    title: "MAINTENANCE & UPDATES",
    subtitle: "FOR LONG-TERM GROWTH",
    description: [
      "Website development does not end after launch. Regular updates keep your website secure, functional, and up to date.",
      "We provide ongoing website maintenance, security updates, backups, content edits, and performance enhancements."
    ]
  }
];

export default function StickyProcessSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

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
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
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
        {/* UNTOUCHED HEADER SECTION */}
        <div className="row mb-4">
          <div className="col-xl-3">
            <span
              className="tp-section-subtitle text-black blink-ball mt-40"
              style={{ lineHeight: "25px" }}
              data-aos="text-reveal"
              data-aos-delay="100"
            >
              Our Website <br />
              Development Process
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4
                className="px-about-title text-tenor"
                data-aos="text-reveal"
                data-aos-delay="100"
              >
                A Structured Approach to <span className="text-blue-about"> Custom Website Development</span>
              </h4>
              <p
                className="mb-0"
                data-aos="text-reveal-lines"
                data-aos-delay="200"
              >
                We follow a systematic website development process to ensure that every stage of your project is carefully planned, designed, developed, tested, and launched.
              </p>
            </div>
          </div>
        </div>

        {/* STICKY CARDS CONTAINER */}
        <div className="sticky-cards-container" ref={containerRef}>
          {processList.map((step, index) => {
            // Calculate z-index - higher index = higher z-index (later cards on top)
            const zIndex = index + 1;
            
            // Different background colors - using #053456 and #53ae7d with variations
            const cardColors = [
              '#053456', // Dark Navy
              '#1a4a7a', // Lighter Navy
              '#0f5a8a', // Medium Navy
              '#2a5a7a', // Blue Navy
              '#53ae7d', // Green
              '#45a070', // Darker Green
              '#3a8a62'  // Darkest Green
            ];

            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                data-index={index}
                className={`sticky-card ${isVisible ? 'is-visible' : ''}`}
                style={{
                  zIndex: zIndex,
                  background: cardColors[index % cardColors.length],
                  transitionDelay: `${index * 0.1}s`,
                  top: `${50 + index * 15}px`
                }}
              >
                <div className="sticky-card-inner">
                  <div className="sticky-card-content">
                    {/* Title - matching h4 from header */}
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
                            <div 
                              key={idx} 
                              className="sticky-chip"
                            >
                              <i className="fa-solid fa-check" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
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
          background: #f8fafc;
          position: relative;
        }

        .sticky-cards-container {
          position: relative;
          min-height: 1200px;
          margin-top: 40px;
        }

        .sticky-card {
          position: sticky;
          border-radius: 24px;
          padding: 3rem 2.75rem;
          opacity: 0;
          transform: translateY(40px) scale(0.98);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
          margin-bottom: 2rem;
          min-height: 260px;
          will-change: transform, opacity;
        }

        .sticky-card.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .sticky-card:last-child {
          margin-bottom: 0;
        }

        .sticky-card-inner {
          width: 100%;
        }

        .sticky-card-content {
          position: relative;
        }

        /* Title matching h4 from header - all white */
        .sticky-card-title {
          font-size: 25px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 10px 0;
          letter-spacing: 1.5px;
        }

        .sticky-card-description {
           font-size: 15px;
          line-height: 1.7;
          color: #ffffff;
          margin: 0;
        }

        .sticky-card-description p {
          margin: 0 0 8px 0;
          color: #ffffff;
        }

        .sticky-card-description p:last-child {
          margin-bottom: 0;
        }

        .sticky-sublist {
          margin-top: 16px;
        }

        .sticky-sublist-header {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 10px;
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
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          transition: all 0.3s ease;
          backdrop-filter: blur(4px);
        }

        .sticky-chip:hover {
          transform: translateX(4px);
          background: rgba(255, 255, 255, 0.2);
        }

        .sticky-chip i {
          font-size: 11px;
          color: #ffffff;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .sticky-card {
            top: 80px !important;
            padding: 2.25rem 1.75rem;
            border-radius: 20px;
            min-height: 200px;
          }

          .sticky-cards-container {
            min-height: 900px;
          }

          .sticky-card-title {
            font-size: 1.5rem;
          }

          .sticky-card-description {
            font-size: 15px;
          }
        }

        @media (max-width: 768px) {
          .sticky-card {
            top: 100px !important;
            padding: 1.75rem 1.25rem;
            border-radius: 16px;
            min-height: 180px;
            margin-bottom: 1.5rem;
          }

          .sticky-cards-container {
            min-height: 700px;
          }

          .sticky-card-title {
            font-size: 1.2rem;
          }

          .sticky-card-description {
            font-size: 15px;
          }

          .sticky-chip {
            font-size: 12px;
            padding: 4px 12px;
          }

          .sticky-chips {
            flex-direction: column;
          }
        }

        @media (max-width: 576px) {
          .sticky-card {
            top: 120px !important;
            padding: 1.25rem 1rem;
            min-height: 150px;
          }

          .sticky-cards-container {
            min-height: 500px;
          }

          .sticky-card-title {
            font-size: 1rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sticky-card {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </main>
  );
}