// src/components/seo/CtaCard.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const INJECTED_STYLES = `
  .cinematic-hero-root {
    position: relative;
    width: 100%;
    max-width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #053456;
    color: #ffffff;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  .gsap-reveal { visibility: hidden; }

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
    background: #053456;
    box-shadow: 
      0 40px 100px -20px rgba(0, 0, 0, 0.9),
      0 20px 40px -20px rgba(0, 0, 0, 0.8),
      inset 0 1px 2px rgba(255, 255, 255, 0.2),
      inset 0 -2px 4px rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.08);
    position: relative;
  }

  .card-sheen {
    position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
    background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06) 0%, transparent 40%);
    mix-blend-mode: screen; transition: opacity 0.3s ease;
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
.colorh{
 color:#fff;
}
  .progress-ring {
    transform: rotate(-90deg);
    transform-origin: center;
    stroke-dasharray: 402;
    stroke-dashoffset: 402;
    stroke-linecap: round;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
  
  .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

  .hero-card-grid {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 1.5rem 1rem;
    z-index: 10;
    box-sizing: border-box;
  }

  @media (min-width: 1024px) {
    .hero-card-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1.5rem;
      padding: 0 2rem;
    }
    .order-lg-1 { order: 1; }
    .order-lg-2 { order: 2; }
    .order-lg-3 { order: 3; }
  }

  .seo-content-wrapper {
    padding: 1rem;
    width: 100%;
    text-align: left;
    box-sizing: border-box;
  }

  /* Responsive adjustment for floating badge overflow */
  @media (max-width: 640px) {
    .floating-badge {
      left: -10px !important;
      top: 0rem !important;
    }
  }
`;

export interface CtaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  metricValue?: number;
  metricLabel?: string;
}

export function CtaCard({ 
  metricValue = 98,
  metricLabel = "SEO Score",
  style,
  ...props 
}: CtaCardProps) {
  
  const containerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY > window.innerHeight * 2) return;

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

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      gsap.set(".main-card", { y: window.innerHeight + 200, autoAlpha: 1 });
      gsap.set([".seo-content-left", ".seo-content-right", ".mockup-scroll-wrapper", ".floating-badge", ".phone-widget"], { autoAlpha: 0 });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2500",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      scrollTl
        .to(".main-card", { y: 0, ease: "power3.inOut", duration: 2 }, 0)
        .to(".main-card", { width: "100%", height: "100%", borderRadius: "0px", ease: "power3.inOut", duration: 1.5 })
        .fromTo(".mockup-scroll-wrapper",
          { y: 300, z: -500, rotationX: 50, rotationY: -30, autoAlpha: 0, scale: 0.6 },
          { y: 0, z: 0, rotationX: 0, rotationY: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 2.5 }, "-=0.8"
        )
        .fromTo(".phone-widget", { y: 40, autoAlpha: 0, scale: 0.95 }, { y: 0, autoAlpha: 1, scale: 1, stagger: 0.15, ease: "back.out(1.2)", duration: 1.5 }, "-=1.5")
        .to(".progress-ring", { strokeDashoffset: 40, duration: 2, ease: "power3.inOut" }, "-=1.2")
        .to(".counter-val", { innerHTML: metricValue, snap: { innerHTML: 1 }, duration: 2, ease: "expo.out" }, "-=2.0")
        .fromTo(".floating-badge", { y: 100, autoAlpha: 0, scale: 0.7, rotationZ: -10 }, { y: 0, autoAlpha: 1, scale: 1, rotationZ: 0, ease: "back.out(1.5)", duration: 1.5, stagger: 0.2 }, "-=2.0")
        .fromTo(".seo-content-left", { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, ease: "expo.out", duration: 1.5 }, "-=1.5")
        .fromTo(".seo-content-right", { x: 50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, ease: "expo.out", duration: 1.5 }, "-=1.5")
        .to({}, { duration: 2.5 })
        .to([".mockup-scroll-wrapper", ".floating-badge", ".seo-content-left", ".seo-content-right"], {
          scale: 0.9, y: -40, z: -200, autoAlpha: 0, ease: "power3.in", duration: 1.2, stagger: 0.05,
        })
        .to(".main-card", { 
          width: isMobile ? "92vw" : "85vw", 
          height: isMobile ? "92vh" : "85vh", 
          borderRadius: isMobile ? "32px" : "40px", 
          ease: "expo.inOut", 
          duration: 1.8 
        }, "pullback");

    }, containerRef);

    return () => ctx.revert();
  }, [metricValue]); 

  return (
    <div
      ref={containerRef}
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
          position: "absolute",
          inset: 0,
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          perspective: "1500px",
          width: "100%",
          overflow: "hidden"
        }}
      >
        <div
          ref={mainCardRef}
          className="main-card premium-depth-card gsap-reveal"
          style={{
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "auto",
            width: "85vw",
            maxWidth: "100%",
            height: "85vh",
            borderRadius: "40px"
          }}
        >
          <div className="card-sheen" aria-hidden="true" />

          <div className="hero-card-grid">
            
            {/* Left column - Heading & Intro */}
            <div 
              className="seo-content-wrapper seo-content-left gsap-reveal order-lg-1"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 20,
              }}
            >
              <div>
                <h4 className="px-about-title mb-20 colorh">
                <span className="text-blue-about"></span>  Professional SEO Services in Chennai That Drive Organic Growth
                </h4>
              </div>
            </div>

            {/* Center column - SEO-themed Phone Mockup */}
            <div 
              className="mockup-scroll-wrapper order-lg-2"
              style={{
                position: "relative",
                width: "100%",
                height: "500px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
                perspective: "1000px"
              }}
            >
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
                    width: "280px",
                    maxWidth: "85vw",
                    height: "540px",
                    borderRadius: "3rem",
                    display: "flex",
                    flexDirection: "column",
                    willChange: "transform",
                    transformStyle: "preserve-3d"
                  }}
                >
                  <div className="hardware-btn" style={{ position: "absolute", top: "120px", left: "-3px", width: "3px", height: "25px", borderTopLeftRadius: "4px", borderBottomLeftRadius: "4px", zIndex: 0 }} aria-hidden="true" />
                  <div className="hardware-btn" style={{ position: "absolute", top: "160px", left: "-3px", width: "3px", height: "45px", borderTopLeftRadius: "4px", borderBottomLeftRadius: "4px", zIndex: 0 }} aria-hidden="true" />
                  <div className="hardware-btn" style={{ position: "absolute", top: "220px", left: "-3px", width: "3px", height: "45px", borderTopLeftRadius: "4px", borderBottomLeftRadius: "4px", zIndex: 0 }} aria-hidden="true" />
                  <div className="hardware-btn" style={{ position: "absolute", top: "170px", right: "-3px", width: "3px", height: "70px", borderTopRightRadius: "4px", borderBottomRightRadius: "4px", zIndex: 0, transform: "scaleX(-1)" }} aria-hidden="true" />

                  <div 
                    style={{
                      position: "absolute",
                      inset: "7px",
                      backgroundColor: "#032138",
                      borderRadius: "2.5rem",
                      overflow: "hidden",
                      boxShadow: "inset 0 0 15px rgba(0,0,0,0.8)",
                      color: "#ffffff",
                      zIndex: 10
                    }}
                  >
                    <div className="screen-glare" style={{ position: "absolute", inset: 0, zIndex: 40, pointerEvents: "none" }} aria-hidden="true" />

                    <div style={{ position: "relative", width: "100%", height: "100%", paddingTop: "2.8rem", paddingLeft: "1.25rem", paddingRight: "1.25rem", paddingBottom: "2rem", display: "flex", flexDirection: "column", boxSizing: "border-box" }}>
                      
                      {/* SEO Header */}
                      <div className="phone-widget" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                          <span style={{ fontSize: "9px", color: "#38bdf8", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, marginBottom: "0.1rem" }}>Analytics</span>
                          <span style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-0.025em", color: "#ffffff" }}>Google Rank #1</span>
                        </div>
                        <div style={{ width: "2rem", height: "2rem", borderRadius: "9999px", backgroundColor: "rgba(56,189,248,0.15)", color: "#38bdf8", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.75rem", border: "1px solid rgba(56,189,248,0.3)" }}>
                          SEO
                        </div>
                      </div>

                      {/* Circular Meter */}
                      <div className="phone-widget" style={{ position: "relative", width: "10rem", height: "10rem", margin: "0 auto 1.5rem auto", display: "flex", alignItems: "center", justifyContent: "center", filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.5))" }}>
                        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden="true">
                          <circle cx="80" cy="80" r="58" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
                          <circle className="progress-ring" cx="80" cy="80" r="58" fill="none" stroke="#38bdf8" strokeWidth="10" />
                        </svg>
                        <div style={{ textAlign: "center", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center" }}>
                          <span className="counter-val" style={{ fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.05em", color: "#ffffff" }}>0</span>
                          <span style={{ fontSize: "8px", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, marginTop: "2px" }}>{metricLabel}</span>
                        </div>
                      </div>

                      {/* SEO Metric Cards */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                        <div className="phone-widget widget-depth" style={{ borderRadius: "0.85rem", padding: "0.6rem 0.8rem", display: "flex", alignItems: "center" }}>
                          <div style={{ width: "2rem", height: "2rem", borderRadius: "0.5rem", background: "rgba(56,189,248,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "0.75rem", border: "1px solid rgba(56,189,248,0.3)" }}>
                            <svg style={{ width: "0.9rem", height: "0.9rem", color: "#38bdf8" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#ffffff" }}>Organic Keywords</div>
                            <div style={{ fontSize: "0.65rem", color: "#38bdf8" }}>+1,420 Top 3 Rankings</div>
                          </div>
                        </div>

                        {/* Domain Authority */}
                        <div className="phone-widget widget-depth" style={{ borderRadius: "0.85rem", padding: "0.6rem 0.8rem", display: "flex", alignItems: "center" }}>
                          <div style={{ width: "2rem", height: "2rem", borderRadius: "0.5rem", background: "rgba(34,197,94,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "0.75rem", border: "1px solid rgba(34,197,94,0.3)" }}>
                            <svg style={{ width: "0.9rem", height: "0.9rem", color: "#4ade80" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#ffffff" }}>Domain Authority</div>
                            <div style={{ fontSize: "0.65rem", color: "#4ade80" }}>Increased to 65 DA</div>
                          </div>
                        </div>
                      </div>

                      <div style={{ position: "absolute", bottom: "8px", left: "50%", transform: "translateX(-50%)", width: "120px", height: "4px", backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "9999px" }} />
                    </div>
                  </div>
                </div>

                {/* Floating Badge (Traffic Boost) */}
                <div 
                  className="floating-badge floating-ui-badge"
                  style={{
                    position: "absolute",
                    display: "flex",
                    top: "1.5rem",
                    left: "-132px",
                    borderRadius: "0.85rem",
                    padding: "0.6rem 0.85rem",
                    alignItems: "center",
                    gap: "0.6rem",
                    zIndex: 30
                  }}
                >
                  <div style={{ width: "2rem", height: "2rem", borderRadius: "9999px", background: "rgba(56,189,248,0.2)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(56,189,248,0.4)" }}>
                    <svg style={{ width: "1rem", height: "1rem", color: "#38bdf8" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p style={{ color: "#ffffff", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "-0.025em", margin: 0 }}>Traffic Boost</p>
                    <p style={{ color: "#38bdf8", fontSize: "0.7rem", margin: 0 }}>+250% Growth</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right column - Paragraph Content */}
            <div 
              className="seo-content-wrapper seo-content-right gsap-reveal order-lg-3"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 20,
              }}
            >
              <div>
                <p className="text-figtree text-light mt-2">
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