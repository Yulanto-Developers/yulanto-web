"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Tool {
  name: string;
  iconSrc: string;
}

const toolsList: Tool[] = [
  { name: "ChatGPT", iconSrc: "/assets/img/AI/AI-Logo/ChatGPT.png" },
  { name: "Claude", iconSrc: "/assets/img/AI/AI-Logo/Claude.png" },
  { name: "Gemini", iconSrc: "/assets/img/AI/AI-Logo/Gemini.png" },
  { name: "Midjourney", iconSrc: "/assets/img/AI/AI-Logo/Midjourney.png" },
  { name: "Adobe Firefly", iconSrc: "/assets/img/AI/AI-Logo/Adobe-Firefly.png" },
  { name: "Figma AI", iconSrc: "/assets/img/AI/AI-Logo/Figma-AI.png" },
  { name: "GitHub Copilot", iconSrc: "/assets/img/AI/AI-Logo/1.png" },
  { name: "Cursor", iconSrc: "/assets/img/AI/AI-Logo/2.png" },
  { name: "v0", iconSrc: "/assets/img/AI/AI-Logo/3.png" },
  { name: "Lovable", iconSrc: "/assets/img/AI/AI-Logo/4.png" },
  { name: "Framer AI", iconSrc: "/assets/img/AI/framer.png" },
  { name: "Sketch AI", iconSrc: "/assets/img/AI/sketch.png" },
];

const styles = `
  .ai-hub-wrapper {
    position: relative;
    width: 100%;
    max-width: 1050px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Grid surround layout: 5 columns for desktop */
  .tools-outer-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 24px;
    width: 100%;
    position: relative;
    z-index: 2;
    justify-items: center;
    align-items: center;
  }

  /* Central AI Chip Container (Spans columns 2-4, rows 2-3 on desktop) */
  .center-chip-container {
    grid-column: 2 / span 3;
    grid-row: 2 / span 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Fully Rounded Circular AI Hub Node */
  .ai-chip {
    width: 140px;
    height: 140px;
    background: radial-gradient(circle at 30% 30%, #0a4f78, #053456 80%);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 2px solid rgba(56, 189, 248, 0.4);
    box-shadow: 0 0 25px rgba(5, 52, 86, 0.6), inset 0 0 15px rgba(56, 189, 248, 0.2);
    animation: chipPulse 3s infinite alternate ease-in-out;
  }

  .ai-chip-title {
    color: #ffffff;
    font-size: 26px;
    font-weight: 800;
    letter-spacing: 2px;
    margin: 4px 0 0 0;
  }

  .ai-chip-subtitle {
    color: #53ae7d;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  /* Perfect Circular Tool Card */
  .tool-card {
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 50%;
    width: 160px;
    height: 160px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    cursor: pointer;
    box-sizing: border-box;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  }

  .tool-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.08);
    border-color: #53ae7d;
  }

  .tool-icon {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 6px;
    object-fit: contain;
  }

  .tool-name {
    font-size: 12px;
    font-weight: 600;
    color: #1e293b;
    text-align: center;
    margin: 0;
    line-height: 1.2;
    max-width: 150px;
    overflow: hidden;
  
    white-space: nowrap;
  }

  /* Line SVG backdrop */
  .connection-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
  }

  @keyframes chipPulse {
    0% {
      box-shadow: 0 0 20px rgba(56, 189, 248, 0.3), inset 0 0 10px rgba(56, 189, 248, 0.1);
      transform: scale(1);
    }
    100% {
      box-shadow: 0 0 35px rgba(56, 189, 248, 0.6), inset 0 0 20px rgba(56, 189, 248, 0.3);
      transform: scale(1.03);
    }
  }

  /* Mobile & Tablet Responsive Styles (2-Column Grid Layout) */
  @media (max-width: 991px) {
    .ai-hub-wrapper {
      padding: 10px;
    }

    .tools-outer-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
      justify-items: center;
      align-items: center;
    }

    /* Span central chip across both columns at the very top of mobile view */
    .center-chip-container {
      grid-column: span 2 !important;
      grid-row: auto !important;
      margin-bottom: 10px;
      order: -1;
    }

    .ai-chip {
      width: 160px;
      height: 160px;
    }

    .ai-chip-title {
      font-size: 22px;
    }

    .tool-card {
      width: 180px !important;
      height: 180px !important;
      grid-column: auto !important; /* Clear explicit desktop grid placement overrides */
    }

    .connection-svg {
      display: none;
    }
  }
`;

export const AIToolsIntegrations: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110">
      <style>{styles}</style>

      <div className="container container-1550">
        {/* Header Section */}
        <div className="row align-items-center mb-50" data-aos="fade-up">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
              Next-Gen Ecosystem
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">Powered by Modern AI & </span>
                Web Technologies
              </h4>
            </div>
          </div>
        </div>

        {/* AI Circuit Hub Grid */}
        <div className="ai-hub-wrapper" data-aos="fade-up" data-aos-delay="150">
          {/* Animated Connecting SVG Lines */}
          <svg className="connection-svg" xmlns="http://www.w3.org/2000/svg">
            <line x1="15%" y1="15%" x2="50%" y2="50%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="85%" y1="15%" x2="50%" y2="50%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="15%" y1="85%" x2="50%" y2="50%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="85%" y1="85%" x2="50%" y2="50%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="50%" y1="10%" x2="50%" y2="50%" stroke="#3b82f6" strokeWidth="2" />
            <line x1="50%" y1="90%" x2="50%" y2="50%" stroke="#3b82f6" strokeWidth="2" />
          </svg>

          <div className="tools-outer-grid">
            {/* Central AI Processor Round Node */}
            <div className="center-chip-container" data-aos="zoom-in" data-aos-delay="200">
              <div className="ai-chip">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <rect x="9" y="9" width="6" height="6" />
                  <path d="M15 2v2" />
                  <path d="M15 20v2" />
                  <path d="M2 15h2" />
                  <path d="M2 9h2" />
                  <path d="M20 15h2" />
                  <path d="M20 9h2" />
                  <path d="M9 2v2" />
                  <path d="M9 20v2" />
                </svg>
                <h5 className="ai-chip-title" style={{ fontFamily: '"Tenor Sans", sans-serif' }}>
                  AI
                </h5>
                <span className="ai-chip-subtitle">Engine</span>
              </div>
            </div>

            {/* Row 1 */}
            <div className="tool-card" data-aos="zoom-in" data-aos-delay="100">
              <img src={toolsList[0].iconSrc} alt={toolsList[0].name} className="tool-icon" />
              <p className="tool-name">{toolsList[0].name}</p>
            </div>
            <div className="tool-card" data-aos="zoom-in" data-aos-delay="150">
              <img src={toolsList[1].iconSrc} alt={toolsList[1].name} className="tool-icon" />
              <p className="tool-name">{toolsList[1].name}</p>
            </div>
            {/* Gemini on top center blue line (Desktop) */}
            <div className="tool-card" data-aos="zoom-in" data-aos-delay="200">
              <img src={toolsList[2].iconSrc} alt={toolsList[2].name} className="tool-icon" />
              <p className="tool-name">{toolsList[2].name}</p>
            </div>
            <div className="tool-card" data-aos="zoom-in" data-aos-delay="250">
              <img src={toolsList[3].iconSrc} alt={toolsList[3].name} className="tool-icon" />
              <p className="tool-name">{toolsList[3].name}</p>
            </div>
            <div className="tool-card" data-aos="zoom-in" data-aos-delay="300">
              <img src={toolsList[4].iconSrc} alt={toolsList[4].name} className="tool-icon" />
              <p className="tool-name">{toolsList[4].name}</p>
            </div>

            {/* Row 2 Left */}
            <div className="tool-card" data-aos="fade-right" data-aos-delay="350">
              <img src={toolsList[5].iconSrc} alt={toolsList[5].name} className="tool-icon" />
              <p className="tool-name">{toolsList[5].name}</p>
            </div>
            {/* Row 2 Right */}
            <div className="tool-card" data-aos="fade-left" data-aos-delay="350">
              <img src={toolsList[6].iconSrc} alt={toolsList[6].name} className="tool-icon" />
              <p className="tool-name">{toolsList[6].name}</p>
            </div>

            {/* Row 3 Left */}
            <div className="tool-card" data-aos="fade-right" data-aos-delay="400">
              <img src={toolsList[7].iconSrc} alt={toolsList[7].name} className="tool-icon" />
              <p className="tool-name">{toolsList[7].name}</p>
            </div>
            {/* Row 3 Right */}
            <div className="tool-card" data-aos="fade-left" data-aos-delay="400">
              <img src={toolsList[8].iconSrc} alt={toolsList[8].name} className="tool-icon" />
              <p className="tool-name">{toolsList[8].name}</p>
            </div>

            {/* Row 4 */}
            <div className="tool-card" data-aos="zoom-in" data-aos-delay="450">
              <img src={toolsList[10].iconSrc} alt={toolsList[10].name} className="tool-icon" />
              <p className="tool-name">{toolsList[10].name}</p>
            </div>
            {/* Lovable on bottom center blue line (Desktop) */}
            <div className="tool-card" data-aos="zoom-in" data-aos-delay="500" style={{ gridColumn: 3 }}>
              <img src={toolsList[9].iconSrc} alt={toolsList[9].name} className="tool-icon" />
              <p className="tool-name">{toolsList[9].name}</p>
            </div>
            <div className="tool-card" data-aos="zoom-in" data-aos-delay="550" style={{ gridColumn: 5 }}>
              <img src={toolsList[11].iconSrc} alt={toolsList[11].name} className="tool-icon" />
              <p className="tool-name">{toolsList[11].name}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIToolsIntegrations;