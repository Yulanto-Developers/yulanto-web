'use client';

import React from 'react';

export const AIFeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Faster Ideation',
      desc: 'Explore multiple layouts, visual directions, content structures and creative concepts quickly before settling on the right direction.',
    },
    {
      icon: '🎨',
      title: 'Smarter Design Exploration',
      desc: 'Use AI-assisted tools to experiment with layouts, imagery, typography, visual styles and interface concepts.',
    },
    {
      icon: '💻',
      title: 'Faster Development',
      desc: 'AI-assisted development helps us write, refine and optimize repetitive code while keeping the final implementation under developer control.',
    },
    {
      icon: '✍️',
      title: 'Content Assistance',
      desc: 'Generate content ideas, page structures, headlines and supporting copy faster — then refine everything to match your brand.',
    },
    {
      icon: '📱',
      title: 'Responsive Optimization',
      desc: 'Build and refine layouts across desktop, tablet and mobile devices with an accelerated design and development workflow.',
    },
    {
      icon: '🚀',
      title: 'Performance-Focused Builds',
      desc: 'AI helps us identify opportunities to improve code, structure and implementation — while our developers validate the final result.',
    },
  ];

  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110" 
style={{
        backgroundColor: "#ffffff",
      
      }}>
      <div className="container container-1550">
          <div className="row align-items-center" data-aos="fade-up">
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
        <div
          data-aos="fade-up"
       
        >
          <div className="row g-4">
            {features.map((item, index) => (
              <div
                key={index}
                className="col-xl-4 col-lg-6 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <div
                  style={{
                    padding: '28px',
                    borderRadius: '16px',
                    backgroundColor: '#f1f1f1',
                  
                    height: '100%',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div
                    style={{
                      fontSize: '2rem',
                      marginBottom: '16px',
                      display: 'inline-block',
                    }}
                  >
                    {item.icon}
                  </div>

                  <h5 className="mb-3 fw-bold" style={{ fontFamily: '"Tenor Sans", "Tenor Sans Fallback"',fontSize:"18px",color:"#053456" }}>
                    {item.title}
                  </h5>

                  <p
                    className="text-figtree text-black"
                    style={{
                      fontSize: '15px !important',
                   
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
    </section>
  );
};

export default AIFeaturesGrid;