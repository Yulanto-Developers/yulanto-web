'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function WorkflowSection() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const traditionalSteps = [
    { num: 1, title: 'Brief', image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80' },
    { num: 2, title: 'Research', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80' },
    { num: 3, title: 'Design', image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80' },
    { num: 4, title: 'Development', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80' },
    { num: 5, title: 'Testing', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80' },
    { num: 6, title: 'Launch', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80' },
  ];

  const aiSteps = [
    { num: 1, title: 'Brief', image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80' },
    { num: 2, title: 'AI Research', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80' },
    { num: 3, title: 'Concepts', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80' },
    { num: 4, title: 'Human Design', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80' },
    { num: 5, title: 'AI-Powered Functionalities and Model', image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80' },
    { num: 6, title: 'Human Development', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80' },
    { num: 7, title: 'Human QA', image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80' },
    { num: 8, title: 'Launch', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80' },
  ];

  // States for automatic stepping
  const [traditionalIndex, setTraditionalIndex] = useState(0);
  const [aiIndex, setAiIndex] = useState(0);

  // Automatic cycle timers
  useEffect(() => {
    const tradTimer = setInterval(() => {
      setTraditionalIndex((prev) => (prev + 1) % traditionalSteps.length);
    }, 3000);

    const aiTimer = setInterval(() => {
      setAiIndex((prev) => (prev + 1) % aiSteps.length);
    }, 3000);

    return () => {
      clearInterval(tradTimer);
      clearInterval(aiTimer);
    };
  }, [traditionalSteps.length, aiSteps.length]);

  return (
    <section className="px-about-6-area pt-40 pb-40 pb-lg-110" style={{overflowX:"hidden"}}>
      <div className="container container-1550">
        
        {/* Title Section with AOS */}
        <div className="row align-items-center mb-40" data-aos="fade-up">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
              AI website vs traditional website
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">What's Different About an </span> AI-Assisted Website?
              </h4>
            </div>
          </div>
        </div>

        <div className="workflow-grid">
          {/* Traditional Workflow Column */}
          <div className="workflow-card" data-aos="fade-right" data-aos-delay="100">
            <h5 className="mb-4 fw-bold " style={{ fontFamily: '"Tenor Sans", "Tenor Sans Fallback"' }}>
              Traditional workflow
            </h5>
            
            <div className="workflow-card-content">
              {/* Stepper list */}
              <div className="stepper-list">
                {traditionalSteps.map((step, index) => (
                  <div 
                    key={index} 
                    className={`stepper-item ${index === traditionalIndex ? 'active' : ''}`}
                    onClick={() => setTraditionalIndex(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="stepper-node">
                      <span className="stepper-badge">{step.num}</span>
                      {index < traditionalSteps.length - 1 && <div className="stepper-line"></div>}
                    </div>
                    <span className="stepper-text">{step.title}</span>
                  </div>
                ))}
              </div>

              {/* Dynamic Image Display Box */}
              <div className="workflow-image-container">
                <Image
                  src={traditionalSteps[traditionalIndex].image}
                  alt={traditionalSteps[traditionalIndex].title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 30vw"
                  priority
                />
                
              </div>
            </div>
          </div>

          {/* AI-Assisted Workflow Column */}
          <div className="workflow-card ai-card" data-aos="fade-left" data-aos-delay="200">
            <h5 className="mb-4 fw-bold" style={{ fontFamily: '"Tenor Sans", "Tenor Sans Fallback"' }}>
              Our AI-assisted workflow
            </h5>
            
            <div className="workflow-card-content">
              {/* Stepper list */}
              <div className="stepper-list">
                {aiSteps.map((step, index) => (
                  <div 
                    key={index} 
                    className={`stepper-item ${index === aiIndex ? 'active' : ''}`}
                    onClick={() => setAiIndex(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="stepper-node">
                      <span className="stepper-badge ai-badge">{step.num}</span>
                      {index < aiSteps.length - 1 && <div className="stepper-line ai-line"></div>}
                    </div>
                    <span className="stepper-text">{step.title}</span>
                  </div>
                ))}
              </div>

              {/* Dynamic Image Display Box */}
              <div className="workflow-image-container">
                <Image
                  src={aiSteps[aiIndex].image}
                  alt={aiSteps[aiIndex].title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 30vw"
                  priority
                />
             
              </div>
            </div>
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

        /* 2-Column Grid */
        .workflow-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 40px;
        }

        @media (max-width: 991px) {
          .workflow-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Cards */
        .workflow-card {
          border-radius: 16px;
          padding: 32px;
          background-color: #fff;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        }

        .workflow-card.ai-card {
          background-color: #f0f7ff;
        }

        .workflow-card-content {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          justify-content: space-between;
        }

        @media (max-width: 768px) {
          .workflow-card-content {
            flex-direction: column-reverse;
          }
        }

        /* Image Display Container */
        .workflow-image-container {
          flex: 1;
          width: 100%;
          min-height: 320px;
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          background-color: #e2e8f0;
        }

      

     
        /* Vertical Stepper Styles */
        .stepper-list {
          display: flex;
          flex-direction: column;
          flex: 1.1;
        }

        .stepper-item {
          display: flex;
          align-items: flex-start;
          position: relative;
          min-height: 45px;
          transition: all 0.3s ease;
          padding: 2px 4px;
          border-radius: 6px;
        }

        .stepper-item:hover {
          background-color: rgba(0, 0, 0, 0.02);
        }

        .stepper-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 12px;
        }

        .stepper-badge {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background-color: #053456;
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .stepper-badge.ai-badge {
          background-color: #53ae7d;
          color: #ffffff;
        }

        .stepper-line {
          width: 2px;
          height: 100%;
          background-color: #053456;
          position: absolute;
          top: 26px;
          z-index: 1;
        }

        .stepper-line.ai-line {
          background-color: #53ae7d;
        }

        .stepper-text {
          font-size: 14px;
          fontFamily: "Figtree, Figtree Fallback",
          font-weight: 500;
          padding-top: 2px;
          color: #334155;
          transition: color 0.3s ease, font-weight 0.3s ease;
        }

        /* Active Step Highlight States */
        .stepper-item.active .stepper-badge {
          transform: scale(1.15);
          box-shadow: 0 0 10px rgba(5, 52, 86, 0.4);
        }

        .workflow-card.ai-card .stepper-item.active .stepper-badge {
          box-shadow: 0 0 10px rgba(83, 174, 125, 0.6);
        }

        .stepper-item.active .stepper-text {
          font-weight: 700;
          fontFamily: "Figtree, Figtree Fallback",
          color: #053456;
        }

        .workflow-card.ai-card .stepper-item.active .stepper-text {
          color: #53ae7d;
        }
      `}</style>
    </section>
  );
}