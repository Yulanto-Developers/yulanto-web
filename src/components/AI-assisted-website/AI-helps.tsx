'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AIFeaturesGrid: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const features = [
    {
      icon: 'fa-solid fa-bolt-lightning',
      title: 'Faster Ideation',
      desc: 'Explore multiple layouts, visual directions, content structures and creative concepts quickly before settling on the right direction.',
    },
    {
      icon: 'fa-solid fa-palette',
      title: 'Smarter Design Exploration',
      desc: 'Use AI-assisted tools to experiment with layouts, imagery, typography, visual styles and interface concepts.',
    },
    {
      icon: 'fa-solid fa-code',
      title: 'Faster Development',
      desc: 'AI-assisted development helps us write, refine and optimize repetitive code while keeping the final implementation under developer control.',
    },
    {
      icon: 'fa-solid fa-pen-nib',
      title: 'Content Assistance',
      desc: 'Generate content ideas, page structures, headlines and supporting copy faster — then refine everything to match your brand.',
    },
    {
      icon: 'fa-solid fa-mobile-screen-button',
      title: 'Responsive Optimization',
      desc: 'Build and refine layouts across desktop, tablet and mobile devices with an accelerated design and development workflow.',
    },
    {
      icon: 'fa-solid fa-rocket',
      title: 'Performance-Focused Builds',
      desc: 'AI helps us identify opportunities to improve code, structure and implementation — while our developers validate the final result.',
    },
  ];

  return (
    <section 
      className="px-about-6-area pt-50 pb-80 pb-lg-110" 
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container container-1550">
        <div className="row align-items-center mb-40" data-aos="fade-up">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
              What AI helps us do
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">More Done. </span>Less Waiting.
              </h4>
            </div>
          </div>
        </div>

        {/* Outer Card Wrapper */}
        <div data-aos="fade-up">
          <div className="row g-4">
            {features.map((item, index) => (
              <div
                key={index}
                className="col-xl-4 col-lg-6 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <div
                  className="ai-feature-card"
                  style={{
                    padding: '32px',
                    borderRadius: '16px',
                    backgroundColor: '#f1f1f1',
                    height: '100%',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                  }}
                >
                  <div
                    style={{
                      fontSize: '1.8rem',
                      marginBottom: '20px',
                      display: 'inline-block',
                      color: '#53ae7d',
                      transition: 'transform 0.3s ease',
                    }}
                    className="feature-icon-wrapper"
                  >
                    <i className={item.icon}></i>
                  </div>

                  <h5 
                    className="mb-3 fw-bold feature-title" 
                    style={{ 
                      fontFamily: '"Tenor Sans", "Tenor Sans Fallback"', 
                      fontSize: "18px", 
                      color: "#053456",
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {item.title}
                  </h5>

                  <p
                    className="text-figtree text-black"
                    style={{
                      fontSize: '15px !important',
                      lineHeight: '1.6',
                      margin: 0,
                      color: '#334155'
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-blue-about {
          color: #53ae7d;
        }

        .text-black {
          color: #000000;
        }

        /* Card Hover Effects */
        .ai-feature-card:hover {
          transform: translateY(-8px);
          background-color: #ffffff !important;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
       
        }

        .ai-feature-card:hover .feature-icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }

        .ai-feature-card:hover .feature-title {
          color: #53ae7d !important;
        }
      `}</style>
    </section>
  );
};

export default AIFeaturesGrid;