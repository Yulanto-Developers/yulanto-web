"use client";

import React from "react";

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
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Grid surround layout */
  .tools-outer-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    width: 100%;
    position: relative;
    z-index: 2;
    justify-items: center;
    align-items: center;
  }

  /* Central AI Chip Container */
  .center-chip-container {
    grid-column: span 2;
    grid-row: span 2;
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
    width: 200px;
    height: 200px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    cursor: pointer;
    box-sizing: border-box;
  }

  .tool-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1);
  }

  .tool-icon {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 6px;
    object-fit: contain;
  }

  .tool-name {
    font-size: 11px;
    font-weight: 600;
    color: #1e293b;
    text-align: center;
    margin: 0;
    line-height: 1.2;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
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

  /* Responsive Settings */
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
      width: 150px;
      height: 150px;
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
  }
`;

export const AIToolsIntegrations: React.FC = () => {
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
            {/* Top Row Cards */}
            {toolsList.slice(0, 4).map((tool) => (
              <div key={tool.name} className="tool-card">
                <img
                  src={tool.iconSrc}
                  alt={tool.name}
                  className="tool-icon"
                />
                <p className="tool-name">{tool.name}</p>
              </div>
            ))}

            {/* Middle Left Side */}
            {toolsList.slice(4, 5).map((tool) => (
              <div key={tool.name} className="tool-card">
                <img
                  src={tool.iconSrc}
                  alt={tool.name}
                  className="tool-icon"
                />
                <p className="tool-name">{tool.name}</p>
              </div>
            ))}

            {/* Central AI Processor Round Node */}
            <div className="center-chip-container">
              <div className="ai-chip">
                {/* Microchip SVG Logo */}
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
                <h5
                  className="ai-chip-title"
                  style={{ fontFamily: '"Tenor Sans", sans-serif' }}
                >
                  AI
                </h5>
                <span className="ai-chip-subtitle">Engine</span>
              </div>
            </div>

            {/* Middle Right Side */}
            {toolsList.slice(5, 6).map((tool) => (
              <div key={tool.name} className="tool-card">
                <img
                  src={tool.iconSrc}
                  alt={tool.name}
                  className="tool-icon"
                />
                <p className="tool-name">{tool.name}</p>
              </div>
            ))}

            {/* Bottom Row Cards */}
            {toolsList.slice(6, 10).map((tool) => (
              <div key={tool.name} className="tool-card">
                <img
                  src={tool.iconSrc}
                  alt={tool.name}
                  className="tool-icon"
                />
                <p className="tool-name">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIToolsIntegrations;