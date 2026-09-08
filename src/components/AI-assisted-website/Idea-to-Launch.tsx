'use client';

import React from 'react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  color: string;
}

const stepsLeft: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'We start with your business, audience, goals, competitors and brand.',
    color: '#FF6B00',
  },
  {
    number: '02',
    title: 'Explore',
    description: 'AI-assisted research and creative tools help us explore multiple directions quickly.',
    color: '#E91E63',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Our designers turn the strongest ideas into a focused website experience around your brand.',
    color: '#9C27B0',
  },
];

const stepsRight: ProcessStep[] = [
 
  {
    number: '04',
    title: 'Build',
    description: 'AI-assisted development helps accelerate implementation while our developers control the code and architecture.',
    color: '#673AB7',
  },
 {
    number: '05',
    title: 'Refine',
    description: 'We test responsiveness, usability, visual consistency and performance across devices.',
    color: '#2196F3',
  },
 {
    number: '06',
    title: 'Launch',
    description: 'Once everything is reviewed and approved, your website is optimized and prepared for launch.',
    color: '#00BCD4',
  },
 
 
];

export default function ProcessSection() {
  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110">
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

          /* Background Dashed Ring */
          .dashed-ring {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 500px;
            height: 500px;
            border-radius: 50%;
            border: 2px dashed #e2e8f0;
            pointer-events: none;
            z-index: 1;
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
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 4px solid #f8fafc;
            text-align: center;
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
              #FF6B00,
              #E91E63,
              #9C27B0,
              #673AB7,
              #2196F3,
              #00BCD4,
              #FF6B00
            );
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
          }

          /* Process Step Items */
          .step-column {
            display: flex;
            flex-direction: column;
            gap: 50px;
            z-index: 2;
          }

          .step-item {
            display: flex;
            align-items: center;
            gap: 20px;
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
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            flex-shrink: 0;
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
              {stepsLeft.map((step) => (
                <div key={step.number} className="step-item left">
                  <div className="step-badge" style={{ backgroundColor: step.color }}>
                    {step.number}
                  </div>
                  <div className="step-content">
                    <h4 className="px-about-title mb-20" style={{ margin: 0 }}>
                      <span className="text-blue-about" style={{ fontWeight: 700, fontSize: '20px ' }}>
                        {step.title}
                      </span>
                    </h4>
                    <span className="text-figtree text-black mt-2" style={{  fontSize: '14px !important' }}>
                      {step.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Central Hub */}
            <div className="center-hub-wrapper">
              <div className="center-hub">
                <div className="center-ring-arc" />
               <h4 className="px-about-title mb-20" style={{ fontSize: '20px' }}>
                 <span className="text-blue-about" style={{ fontSize: '20px' }}> From Idea to</span> Launch, Faster.
                </h4>
              </div>
            </div>

            {/* Right Column (Steps 06, 05, 04) */}
            <div className="step-column">
              {stepsRight.map((step) => (
                <div key={step.number} className="step-item right">
                  <div className="step-badge" style={{ backgroundColor: step.color }}>
                    {step.number}
                  </div>
                  <div className="step-content">
                    <h4 className="px-about-title mb-20" style={{ margin: 0 }}>
                      <span className="text-blue-about" style={{ fontWeight: 700, fontSize: '20px' }}>
                        {step.title}
                      </span>
                    </h4>
                    <span className="text-figtree text-black mt-2" style={{ margin: '6px 0 0 0', fontSize: '14px', lineHeight: '1.5' }}>
                      {step.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Mobile Grid Layout */}
          <div className="mobile-grid-container">
            {[...stepsLeft, ...stepsRight].map((step) => (
              <div key={step.number} className="mobile-card">
                <div className="step-badge" style={{ backgroundColor: step.color }}>
                  {step.number}
                </div>
                <div>
                  <h4 className="px-about-title mb-20" style={{ margin: 0 }}>
                    <span className="text-blue-about" style={{ fontWeight: 700, fontSize: '20px' }}>
                      {step.title}
                    </span>
                  </h4>
                  <p className="text-figtree text-black mt-2" style={{ margin: '6px 0 0 0', fontSize: '14px', lineHeight: '1.5' }}>
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