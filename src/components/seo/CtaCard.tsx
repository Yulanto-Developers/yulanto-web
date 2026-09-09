// src/components/seo/CtaCard.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const INJECTED_STYLES = `
  .cinematic-hero-root {
    position: relative;
    width: 100%;
    max-width: 100%;
    min-height: auto;
    padding: 2.5rem 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #053456;
    color: #ffffff;
  }

  @media (min-width: 1024px) {
    .cinematic-hero-root {
      height: 560px;
      min-height: 560px;
      padding: 0;
    }
  }

  .film-grain {
    position: absolute; inset: 0; width: 100%; height: 100%;
    pointer-events: none; z-index: 50; opacity: 0.05; mix-blend-mode: overlay;
    background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }

  .bg-grid-theme {
    position: absolute; inset: 0; z-index: 0; pointer-events: none; opacity: 0.3;
    background-size: 60px 60px;
    background-image: 
      linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px);
    mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  .premium-depth-card {
    position: relative;
    width: 100% !important;
    max-width: 100%;
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    overflow: visible !important;
  }

  .iphone-bezel {
    background-color: #0d1e2b;
    box-shadow: 
      inset 0 0 0 2px #1e3a8a, 
      inset 0 0 0 7px #020617, 
      0 40px 80px -15px rgba(0,0,0,0.9),
      0 15px 25px -5px rgba(0,0,0,0.7);
    transform-style: preserve-3d;
  }

  .hardware-btn {
    background: linear-gradient(90deg, #1e293b 0%, #0f172a 100%);
    box-shadow: 
      -2px 0 5px rgba(0,0,0,0.8),
      inset -1px 0 1px rgba(255,255,255,0.15),
      inset 1px 0 2px rgba(0,0,0,0.8);
    border-left: 1px solid rgba(255,255,255,0.05);
  }
  
  .screen-glare {
    background: linear-gradient(110deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 45%);
  }

  .widget-depth {
    background: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%);
    box-shadow: 
      0 10px 20px rgba(0,0,0,0.3),
      inset 0 1px 1px rgba(255,255,255,0.1),
      inset 0 -1px 1px rgba(0,0,0,0.5);
    border: 1px solid rgba(255,255,255,0.05);
  }

  .floating-ui-badge {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%);
    backdrop-filter: blur(24px); 
    -webkit-backdrop-filter: blur(24px);
    box-shadow: 
      0 0 0 1px rgba(255, 255, 255, 0.15),
      0 25px 50px -12px rgba(0, 0, 0, 0.8),
      inset 0 1px 1px rgba(255,255,255,0.2),
      inset 0 -1px 1px rgba(0,0,0,0.5);
  }

  .colorh {
    color: #fff;
  }

  .progress-ring {
    transform: rotate(-90deg);
    transform-origin: center;
    stroke-dasharray: 402;
    stroke-dashoffset: 40;
    stroke-linecap: round;
  }

  .hero-card-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 1rem 1.25rem;
    z-index: 10;
    box-sizing: border-box;
  }

  .mockup-scroll-wrapper {
    position: relative;
    width: 100%;
    height: 480px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    perspective: 1000px;
  }

  .floating-badge {
    position: absolute;
    display: flex;
    top: -3.5rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0.85rem;
    padding: 0.6rem 0.85rem;
    align-items: center;
    gap: 0.6rem;
    z-index: 30;
    white-space: nowrap;
  }

  @media (min-width: 640px) {
    .mockup-scroll-wrapper {
      height: 520px;
    }
    .floating-badge {
      top: 1.5rem;
      left: -20px;
      transform: none;
    }
  }

  @media (min-width: 1024px) {
    .hero-card-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1.5rem;
      padding: 0 2rem;
      height: 100%;
    }
    .mockup-scroll-wrapper {
      height: 440px;
    }
    .floating-badge {
      left: -132px;
    }
    .order-lg-1 { order: 1; }
    .order-lg-2 { order: 2; }
    .order-lg-3 { order: 3; }
  }

  .seo-content-wrapper {
    width: 100%;
    text-align: center;
    box-sizing: border-box;
  }

  @media (min-width: 1024px) {
    .seo-content-wrapper {
      text-align: left;
    }
  }
`;

export interface CtaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  metricValue?: number;
  metricLabel?: string;
}

export function CtaCard({ 
  metricValue = 100,
  metricLabel = "SEO Score",
  style,
  ...props 
}: CtaCardProps) {
  
  const mainCardRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(requestRef.current);
      
      requestRef.current = requestAnimationFrame(() => {
        if (mainCardRef.current && mockupRef.current) {
          const rect = mainCardRef.current.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;
          
          mainCardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
          mainCardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);

          const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
          const yVal = (e.clientY / window.innerHeight - 0.5) * 2;

          gsap.to(mockupRef.current, {
            rotationY: xVal * 12,
            rotationX: -yVal * 12,
            ease: "power3.out",
            duration: 1.2,
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div
      className="cinematic-hero-root"
      style={{ perspective: "1500px", ...style }}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
      <div className="film-grain" aria-hidden="true" />
      <div className="bg-grid-theme" aria-hidden="true" />

      {/* FOREGROUND LAYER */}
      <div 
        style={{
          position: "relative",
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          ref={mainCardRef}
          className="main-card premium-depth-card"
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "auto",
            background: "transparent",
          }}
        >
          <div className="hero-card-grid">
            
            {/* Left column - Heading & Intro */}
            <div 
              className="seo-content-wrapper seo-content-left order-lg-1"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 20,
              }}
            >
              <div>
                <h4 className="px-about-title mb-20 colorh">
                  Professional SEO Services in Chennai That Drive Organic Growth
                </h4>
              </div>
            </div>

            {/* Center column - SEO-themed Phone Mockup */}
            <div className="mockup-scroll-wrapper order-lg-2">
              <div 
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <div
                  ref={mockupRef}
                  className="iphone-bezel"
                  style={{
                    position: "relative",
                    width: "260px",
                    maxWidth: "80vw",
                    height: "460px",
                    borderRadius: "2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    willChange: "transform",
                    transformStyle: "preserve-3d"
                  }}
                >
                  <div className="hardware-btn" style={{ position: "absolute", top: "100px", left: "-3px", width: "3px", height: "20px", borderTopLeftRadius: "4px", borderBottomLeftRadius: "4px", zIndex: 0 }} aria-hidden="true" />
                  <div className="hardware-btn" style={{ position: "absolute", top: "135px", left: "-3px", width: "3px", height: "35px", borderTopLeftRadius: "4px", borderBottomLeftRadius: "4px", zIndex: 0 }} aria-hidden="true" />
                  <div className="hardware-btn" style={{ position: "absolute", top: "185px", left: "-3px", width: "3px", height: "35px", borderTopLeftRadius: "4px", borderBottomLeftRadius: "4px", zIndex: 0 }} aria-hidden="true" />
                  <div className="hardware-btn" style={{ position: "absolute", top: "145px", right: "-3px", width: "3px", height: "55px", borderTopRightRadius: "4px", borderBottomRightRadius: "4px", zIndex: 0, transform: "scaleX(-1)" }} aria-hidden="true" />

                  <div 
                    style={{
                      position: "absolute",
                      inset: "6px",
                      backgroundColor: "#032138",
                      borderRadius: "2.1rem",
                      overflow: "hidden",
                      boxShadow: "inset 0 0 15px rgba(0,0,0,0.8)",
                      color: "#ffffff",
                      zIndex: 10
                    }}
                  >
                    <div className="screen-glare" style={{ position: "absolute", inset: 0, zIndex: 40, pointerEvents: "none" }} aria-hidden="true" />

                    <div style={{ position: "relative", width: "100%", height: "100%", paddingTop: "2.2rem", paddingLeft: "1rem", paddingRight: "1rem", paddingBottom: "1.5rem", display: "flex", flexDirection: "column", boxSizing: "border-box" }}>
                      
                      {/* SEO Header */}
                      <div className="phone-widget" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                          <span style={{ fontSize: "8px", color: "#38bdf8", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, marginBottom: "0.1rem" }}>Analytics</span>
                          <span style={{ fontSize: "0.95rem", fontWeight: 700, letterSpacing: "-0.025em", color: "#ffffff" }}>Google Rank #1</span>
                        </div>
                        <div style={{ width: "1.75rem", height: "1.75rem", borderRadius: "9999px", backgroundColor: "rgba(56,189,248,0.15)", color: "#38bdf8", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.65rem", border: "1px solid rgba(56,189,248,0.3)" }}>
                          SEO
                        </div>
                      </div>

                      {/* Circular Meter */}
                      <div className="phone-widget" style={{ position: "relative", width: "8.5rem", height: "8.5rem", margin: "0 auto 1rem auto", display: "flex", alignItems: "center", justifyContent: "center", filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.5))" }}>
                        <svg viewBox="0 0 160 160" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden="true">
                          <circle cx="80" cy="80" r="58" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
                          <circle className="progress-ring" cx="80" cy="80" r="58" fill="none" stroke="#38bdf8" strokeWidth="10" />
                        </svg>
                        <div style={{ textAlign: "center", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center" }}>
                          <span className="counter-val" style={{ fontSize: "1.75rem", fontWeight: 800, letterSpacing: "-0.05em", color: "#ffffff" }}>{metricValue}</span>
                          <span style={{ fontSize: "7px", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, marginTop: "2px" }}>{metricLabel}</span>
                        </div>
                      </div>

                      {/* SEO Metric Cards */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <div className="phone-widget widget-depth" style={{ borderRadius: "0.75rem", padding: "0.5rem 0.7rem", display: "flex", alignItems: "center" }}>
                          <div style={{ width: "1.75rem", height: "1.75rem", borderRadius: "0.4rem", background: "rgba(56,189,248,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "0.6rem", border: "1px solid rgba(56,189,248,0.3)" }}>
                            <svg style={{ width: "0.8rem", height: "0.8rem", color: "#38bdf8" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          </div>
                          <div style={{ flex: 1, textAlign: "left" }}>
                            <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#ffffff" }}>Organic Keywords</div>
                            <div style={{ fontSize: "0.6rem", color: "#38bdf8" }}>+1,420 Top 3 Rankings</div>
                          </div>
                        </div>

                        {/* Domain Authority */}
                        <div className="phone-widget widget-depth" style={{ borderRadius: "0.75rem", padding: "0.5rem 0.7rem", display: "flex", alignItems: "center" }}>
                          <div style={{ width: "1.75rem", height: "1.75rem", borderRadius: "0.4rem", background: "rgba(34,197,94,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "0.6rem", border: "1px solid rgba(34,197,94,0.3)" }}>
                            <svg style={{ width: "0.8rem", height: "0.8rem", color: "#4ade80" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div style={{ flex: 1, textAlign: "left" }}>
                            <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#ffffff" }}>Domain Authority</div>
                            <div style={{ fontSize: "0.6rem", color: "#4ade80" }}>Increased to 65 DA</div>
                          </div>
                        </div>
                      </div>

                      <div style={{ position: "absolute", bottom: "6px", left: "50%", transform: "translateX(-50%)", width: "100px", height: "3px", backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "9999px" }} />
                    </div>
                  </div>
                </div>

                {/* Floating Badge (Traffic Boost) */}
                <div className="floating-badge floating-ui-badge">
                  <div style={{ width: "1.75rem", height: "1.75rem", borderRadius: "9999px", background: "rgba(56,189,248,0.2)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(56,189,248,0.4)" }}>
                    <svg style={{ width: "0.9rem", height: "0.9rem", color: "#38bdf8" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <p style={{ color: "#ffffff", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "-0.025em", margin: 0 }}>Traffic Boost</p>
                    <p style={{ color: "#38bdf8", fontSize: "0.65rem", margin: 0 }}>+250% Growth</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right column - Paragraph Content */}
            <div 
              className="seo-content-wrapper seo-content-right order-lg-3"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 20,
              }}
            >
              <div>
                <p className="text-figtree text-light mt-2" style={{color: "rgba(255, 255, 255, 0.85)" }}>
                  Improve your online presence with professional Chennai SEO services designed to attract the right audience and generate sustainable organic growth. Our SEO specialists in Chennai can help improve your search visibility, increase qualified website traffic, and create opportunities for more enquiries and conversions.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CtaCard;