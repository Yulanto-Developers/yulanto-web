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
  imageAlt: string;
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
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Requirement Gathering"
  },
  {
    stepNum: "02",
    title: "PLANNING & ARCHITECTURE",
    subtitle: "FOR YOUR WEBSITE STRUCTURE",
    description: [
      "Once the requirements are finalized, we create the website structure, navigation flow, sitemap, and functional plan.",
      "Wireframes may also be prepared to establish the page structure and user journey before moving into the design stage."
    ],
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Planning & Architecture"
  },
  {
    stepNum: "03",
    title: "UI/UX DESIGN",
    subtitle: "FOR ENGAGING USER EXPERIENCE",
    description: [
      "Our designers create an engaging and user-friendly interface based on your brand identity. The design process includes layout, typography, colors, imagery, visual hierarchy, and user experience.",
      "The objective is to create a website that not only looks professional but also makes it easy for visitors to find information and take action."
    ],
    imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "UI/UX Design"
  },
  {
    stepNum: "04",
    title: "WEBSITE DEVELOPMENT",
    subtitle: "FOR FULL FUNCTIONAL CODE",
    description: [
      "After design approval, our development team converts the approved designs into a fully functional website.",
      "Depending on your requirements, we can work with technologies such as HTML, CSS, JavaScript, PHP, WordPress, Next.js, Laravel, and WooCommerce."
    ],
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Website Development"
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
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Testing & Quality Assurance"
  },
  {
    stepNum: "06",
    title: "DEPLOYMENT & LAUNCH",
    subtitle: "FOR LIVE SERVER GO-LIVE",
    description: [
      "Once testing is completed and the website receives final approval, we deploy the website to the live server.",
      "Our team assists with domain, hosting, SSL configuration, and deployment requirements to ensure a smooth launch."
    ],
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Deployment"
  },
  {
    stepNum: "07",
    title: "MAINTENANCE & UPDATES",
    subtitle: "FOR LONG-TERM GROWTH",
    description: [
      "Website development does not end after launch. Regular updates keep your website secure, functional, and up to date.",
      "We provide ongoing website maintenance, security updates, backups, content edits, and performance enhancements."
    ],
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Maintenance & Updates"
  }
];

export default function FixedHeightProcessSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % processList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + processList.length) % processList.length);
  };

  // Auto-Slide Timer (Rotates every 5 seconds, pauses on hover)
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentIndex]);

  const currentStep = processList[currentIndex];

  return (
    <main className="retro-proc-wrapper">
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

        {/* MAIN OUTER CARD WITH CUSTOM CLIPPED SHAPE */}
        <div
          className="retro-card-outer mt-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="retro-card-inner">

            {/* LEFT PHOTO CONTAINER (FIXED HEIGHT WITH TOP ARCH MASK) */}
            <div className="retro-player-frame">
              <div className="retro-photo-container">
                <Image
                  src={currentStep.imageUrl}
                  alt={currentStep.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 340px"
                  className="retro-photo-img"
                  priority
                />
              </div>

              {/* Step Progress Line */}
              <div className="retro-player-progress">
                <div
                  className="retro-progress-fill"
                  style={{ width: `${((currentIndex + 1) / processList.length) * 100}%` }}
                />
              </div>
            </div>

            {/* RIGHT BANNER (FIXED EQUAL HEIGHT WITH ASYMMETRIC NOTCH CLIP) */}
            <div className="retro-banner-container">
              <div className="retro-white-banner">
                {/* Fixed Header */}
                <div className="retro-banner-header">
                  <div>
                    <h2 className="retro-banner-title">{currentStep.title}</h2>
                    <span className="retro-banner-subtitle">{currentStep.subtitle}</span>
                  </div>

                  {/* Navigation Arrow Group */}
                  <div className="retro-arrows-group">
                    <button
                      type="button"
                      className="retro-arrow-btn"
                      onClick={handlePrev}
                      aria-label="Previous Step"
                    >
                      <i className="fa-solid fa-arrow-left" />
                    </button>
                    <button
                      type="button"
                      className="retro-arrow-btn"
                      onClick={handleNext}
                      aria-label="Next Step"
                    >
                      <i className="fa-solid fa-arrow-right" />
                    </button>
                  </div>
                </div>

                {/* Body Content with Scrollable Overflow Protection */}
                <div className="retro-banner-body">
                  {currentStep.description.map((para, i) => (
                    <p key={i} className="retro-body-text">{para}</p>
                  ))}

                  {currentStep.subList && currentStep.subList.length > 0 && (
                    <div className="retro-sublist-wrapper">
                      {currentStep.subListHeader && (
                        <span className="retro-sublist-head">{currentStep.subListHeader}</span>
                      )}
                      <div className="retro-chips-grid">
                        {currentStep.subList.map((item, idx) => (
                          <div key={idx} className="retro-chip">
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

          </div>
        </div>
      </section>

      <style jsx global>{`
        /* Section Wrapper */
        .retro-proc-wrapper {
          width: 100%;
          padding: 40px 0 30px 0;
        }

        /* Outer Navy Frame (#053456) with Asymmetric Polygon Cutout Notch */
        .retro-card-outer {
          background: #053456cf;
          border-radius: 36px;
          padding: 32px;
          box-shadow: 0 25px 50px -12px rgba(5, 52, 86, 0.35);
          position: relative;
          /* Dual diagonal corner clip-path */
          clip-path: polygon(0 0, 96% 0, 100% 6%, 100% 100%, 4% 100%, 0 94%);
          transition: all 0.3s ease;
        }

        .retro-card-inner {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        /* LEFT PHOTO FRAME (FIXED HEIGHT) */
        .retro-player-frame {
          width: 320px;
          height: 480px; /* STRICT EQUAL HEIGHT */
          flex-shrink: 0;
          background: #ffffff;
          border-radius: 28px;
          padding: 16px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          /* Curved Arch Mask Clip */
          clip-path: inset(0 round 100px 24px 24px 24px);
        }

        .retro-photo-container {
          position: relative;
          width: 100%;
          height: 400px;
          border-radius: 80px 16px 16px 16px;
          overflow: hidden;
          background: #053456;
        }

        .retro-photo-img {
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        /* Step Progress Line */
        .retro-player-progress {
          position: relative;
          width: 100%;
          height: 6px;
          background: #e2e8f0;
          border-radius: 6px;
          overflow: hidden;
          margin-top: 10px;
        }

        .retro-progress-fill {
          height: 100%;
          background: #53ae7d;
          border-radius: 6px;
          transition: width 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* RIGHT ASYMMETRIC BANNER (FIXED EQUAL HEIGHT) */
        .retro-banner-container {
          flex: 1;
          height: 480px; /* STRICT EQUAL HEIGHT */
        }

        .retro-white-banner {
          background: #eef2f3;
          height: 100%;
          border-radius: 28px 28px 28px 0;
          padding: 40px;
          box-shadow: 0 10px 30px #00000026;
          display: flex;
          flex-direction: column;
          /* Asymmetric Notch Top-Right Mask Clip */
          clip-path: polygon(0 0, 92% 0, 100% 12%, 100% 100%, 0 100%);
        }

        .retro-banner-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          border-bottom: 2px solid rgba(5, 52, 86, 0.12);
          padding-bottom: 18px;
          margin-bottom: 20px;
          flex-shrink: 0;
        }

        .retro-banner-title {
          font-size: 28px;
          font-weight: 800;
          color: #053456;
          letter-spacing: 1.5px;
          margin: 0 0 6px 0;
          text-transform: uppercase;
        }

        .retro-banner-subtitle {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #53ae7d;
        }

        .retro-arrows-group {
          display: flex;
          gap: 10px;
        }

        .retro-arrow-btn {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          border: 2px solid #053456;
          background: #ffffff;
          color: #053456;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .retro-arrow-btn:hover {
          background: #53ae7d;
          color: #ffffff;
          border-color: #53ae7d;
        }

        /* Scrollable body content to prevent layout jumps */
        .retro-banner-body {
          flex: 1;
          overflow-y: auto;
          padding-right: 6px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .retro-banner-body::-webkit-scrollbar {
          width: 4px;
        }
        .retro-banner-body::-webkit-scrollbar-thumb {
          background: rgba(5, 52, 86, 0.2);
          border-radius: 4px;
        }

        .retro-body-text {
          font-size: 15.5px;
          line-height: 1.7;
          color: #053456;
          margin: 0;
        }

        /* Chips Grid with #53ae7d Theme */
        .retro-sublist-wrapper {
          margin-top: 10px;
        }

        .retro-sublist-head {
          display: block;
          font-size: 14px;
          font-weight: 700;
          color: #053456;
          margin-bottom: 10px;
        }

        .retro-chips-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .retro-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(83, 174, 125, 0.15);
          color: #053456;
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 13.5px;
          font-weight: 600;
          border: 1px solid rgba(83, 174, 125, 0.3);
        }

        .retro-chip i {
          color: #53ae7d;
        }

        /* Mobile Adjustments */
        @media (max-width: 992px) {
          .retro-card-inner {
            flex-direction: column;
          }

          .retro-player-frame, 
          .retro-banner-container {
            width: 100%;
            height: auto;
          }

          .retro-card-outer,
          .retro-player-frame,
          .retro-white-banner {
            clip-path: none;
            border-radius: 20px;
          }

          .retro-white-banner {
            padding: 24px;
          }

          .retro-banner-title {
            font-size: 22px;
          }

          .retro-chips-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}