'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  color: string;
}

// Using strictly #053456 and #53ae7d alternatively
const stepsLeft: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'We start with your business, audience, goals, competitors and brand.',
    color: '#053456',
  },
  {
    number: '02',
    title: 'Explore',
    description: 'AI-assisted research and creative tools help us explore multiple directions quickly.',
    color: '#53ae7d',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Our designers turn the strongest ideas into a focused website experience around your brand.',
    color: '#053456',
  },
];

const stepsRight: ProcessStep[] = [
  {
    number: '04',
    title: 'Build',
    description: 'AI-assisted development helps accelerate implementation while our developers control the code and architecture.',
    color: '#53ae7d',
  },
  {
    number: '05',
    title: 'Refine',
    description: 'We test responsiveness, usability, visual consistency and performance across devices.',
    color: '#053456',
  },
  {
    number: '06',
    title: 'Launch',
    description: 'Once everything is reviewed and approved, your website is optimized and prepared for launch.',
    color: '#53ae7d',
  },
];

export default function ProcessSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="px-about-6-area pt-40 pb-40 pb-lg-110" style={{ overflowX: 'hidden',overflowY: 'hidden' }}>
      <div className="container container-1550">
        
        <style jsx>{`
          .process-container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            padding: 40px 0;
          }

          /* Main Desktop Layout */
          .desktop-layout {
            display: grid;
            grid-template-columns: 1fr 320px 1fr;
            align-items: center;
            gap: 40px;
            position: relative;
          }

          /* Background Dashed Ring with a slow rotation scroll flair */
          .dashed-ring {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 500px;
            height: 500px;
            border-radius: 50%;
            border: 2px dashed #cbd5e1;
            pointer-events: none;
            z-index: 1;
            animation: rotateRing 30s linear infinite;
          }

          @keyframes rotateRing {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          /* Center Circle */
          .center-hub-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2;
          }

          .center-hub {
            position: relative;
            width: 230px;
            height: 230px;
            border-radius: 50%;
            background-color: #ffffff;
            box-shadow: 0 15px 35px rgba(5, 52, 86, 0.08);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 4px solid #f8fafc;
            text-align: center;
            animation: hubPulse 4s ease-in-out infinite;
          }

          @keyframes hubPulse {
            0%, 100% {
              box-shadow: 0 15px 35px rgba(5, 52, 86, 0.08), 0 0 0 0 rgba(83, 174, 125, 0.1);
            }
            50% {
              box-shadow: 0 20px 40px rgba(5, 52, 86, 0.12), 0 0 0 15px rgba(83, 174, 125, 0);
            }
          }

          .center-hub h3 {
            font-size: 26px;
            font-weight: 700;
            color: #1e293b;
            margin: 0;
            line-height: 1.2;
          }

          .center-ring-arc {
            position: absolute;
            inset: 8px;
            border-radius: 50%;
            padding: 4px;
            background: conic-gradient(
              from 180deg,
              #053456,
              #53ae7d,
              #053456,
              #53ae7d,
              #053456
            );
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
          }

          /* Process Step Items */
          .step-column {
            display: flex;
            flex-direction: column;
            gap: 40px;
            z-index: 2;
          }

          .step-item {
            display: flex;
            align-items: center;
            gap: 20px;
            padding: 12px;
            border-radius: 12px;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .step-item:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.8);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.04);
          }

          .step-item.left {
            flex-direction: row-reverse;
            text-align: right;
          }

          .step-item.right {
            flex-direction: row;
            text-align: left;
          }

          .step-badge {
            width: 52px;
            height: 52px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            font-weight: 700;
            font-size: 16px;
            border: 3px solid #ffffff;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.12);
            flex-shrink: 0;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }

          .step-item:hover .step-badge {
            transform: scale(1.15) rotate(8deg);
            box-shadow: 0 8px 20px rgba(83, 174, 125, 0.3);
          }

          .step-content {
            max-width: 300px;
          }

          /* Mobile / Tablet Responsive Fallback */
          .mobile-grid-container {
            display: none;
          }

          @media (max-width: 991px) {
            .desktop-layout {
              display: none;
            }

            .mobile-grid-container {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: 20px;
              width: 100%;
            }

            .mobile-card {
              display: flex;
              align-items: flex-start;
              gap: 16px;
              padding: 20px;
              background-color: #ffffff;
              border: 1px solid #f1f5f9;
              border-radius: 12px;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }

            .mobile-card:hover {
              transform: translateY(-4px);
              box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
            }
          }
        `}</style>

        <div className="process-container">
          
          {/* Desktop Circular Layout */}
          <div className="desktop-layout">
            
            {/* Background Dashed Circle */}
            <div className="dashed-ring" />

            {/* Left Column (Steps 01, 02, 03) */}
            <div className="step-column">
              {stepsLeft.map((step, index) => (
                <div 
                  key={step.number} 
                  className="step-item left" 
                  data-aos="fade-right" 
                  data-aos-delay={150 * (index + 1)}
                >
                  <div className="step-badge" style={{ backgroundColor: step.color }}>
                    {step.number}
                  </div>
                  <div className="step-content">
                    <h4 className="px-about-title mb-10" style={{ margin: 0 }}>
                      <span className="mb-2 fw-bold" style={{ fontFamily: '"Tenor Sans", "Tenor Sans Fallback"', fontSize: "22px", color: '#053456' }}>
                        {step.title}
                      </span>
                    </h4>
                    <span className="text-figtree text-black mt-2" style={{ fontSize: '16px', lineHeight: '1.5', color: '#334155' }}>
                      {step.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Central Hub */}
            <div className="center-hub-wrapper" data-aos="zoom-in" data-aos-delay="200">
              <div className="center-hub">
                <div className="center-ring-arc" />
                <h4 className="px-about-title mb-0" style={{ fontSize: '20px', padding: '0 20px' }}>
                  From Idea to Launch, Faster.
                </h4>
              </div>
            </div>

            {/* Right Column (Steps 04, 05, 06) */}
            <div className="step-column">
              {stepsRight.map((step, index) => (
                <div 
                  key={step.number} 
                  className="step-item right" 
                  data-aos="fade-left" 
                  data-aos-delay={150 * (index + 1)}
                >
                  <div className="step-badge" style={{ backgroundColor: step.color }}>
                    {step.number}
                  </div>
                  <div className="step-content">
                    <h4 className="px-about-title mb-10" style={{ margin: 0 }}>
                      <span className="mb-2 fw-bold" style={{ fontFamily: '"Tenor Sans", "Tenor Sans Fallback"', fontSize: "22px", color: '#053456' }}>
                        {step.title}
                      </span>
                    </h4>
                    <span className="text-figtree text-black mt-2" style={{ margin: '6px 0 0 0', fontSize: '16px', lineHeight: '1.5', color: '#334155' }}>
                      {step.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Mobile Grid Layout */}
          <div className="mobile-grid-container">
            {[...stepsLeft, ...stepsRight].map((step, index) => (
              <div 
                key={step.number} 
                className="mobile-card" 
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
              >
                <div className="step-badge" style={{ backgroundColor: step.color }}>
                  {step.number}
                </div>
                <div>
                  <h4 className="px-about-title mb-10" style={{ margin: 0 }}>
                    <span style={{ fontWeight: 700, fontSize: '18px', color: '#053456', fontFamily: '"Tenor Sans", "Tenor Sans Fallback"' }}>
                      {step.title}
                    </span>
                  </h4>
                  <p className="text-figtree text-black mt-1" style={{ margin: 0, fontSize: '14px', lineHeight: '1.5', color: '#334155' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}