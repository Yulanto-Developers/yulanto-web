"use client";

import React, { useEffect } from "react";
import { 
  Search, 
  Sparkles, 
  HelpCircle, 
  FileText, 
  BarChart3, 
  Layers, 
  Zap, 
  TrendingUp, 
  CheckCircle2, 
  Cpu 
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

interface LandingPageProps {
  brandColor?: string;
  accentColor?: string;
  showMockups?: boolean;
  logoComponent?: React.ReactNode;
}

export function HeroSection({
  showMockups = true,
  logoComponent,
}: LandingPageProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const aeoPtag = [
    {
      title: 'Traditional SEO keyword',
      ptag: 'Web design company in Chennai'
    },
    {
      title: 'AEO question:',
      ptag: 'How much does a website design company in Chennai charge?'
    }
  ];

  return (
    /* Full-width section matching your requested layout classes */
    <section className="px-about-6-area pt-40 pb-40 pb-lg-110 bg-white">
      {/* Container wrapper matching your site standard */}
      <div className="container container-1550">
        <div
          style={{
            background: "#fff",
            display: "flex",
            flexDirection: "row-reverse",
            flexWrap: "wrap-reverse",
            gap: "60px",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          {/* Right Side - Product Mockups */}
          {showMockups && (
            <div
              style={{
                position: "relative",
                maxWidth: "448px",
                width: "100%",
                margin: "32px auto 0 auto",
              }}
            >
              {/* Desktop Application Window */}
              <div
                data-aos="fade-left"
                data-aos-delay="200"
                style={{
                  position: "relative",
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  border: "1px solid #e2e8f0",
                  overflow: "hidden",
                  transform: "rotate(2deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                {/* Application Header */}
                <div
                  style={{
                    backgroundColor: "rgba(241, 245, 249, 0.5)",
                    padding: "16px 24px",
                    borderBottom: "1px solid #e2e8f0",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                      <div style={{ display: "flex", gap: "8px" }}>
                        <div style={{ width: "12px", height: "12px", backgroundColor: "#ef4444", borderRadius: "50%" }} />
                        <div style={{ width: "12px", height: "12px", backgroundColor: "#eab308", borderRadius: "50%" }} />
                        <div style={{ width: "12px", height: "12px", backgroundColor: "#22c55e", borderRadius: "50%" }} />
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <Sparkles size={16} className="text-slate-500" />
                        <Cpu size={16} className="text-slate-500" />
                      </div>
                    </div>

                    <div style={{ flex: 1, maxWidth: "280px", margin: "0 24px" }}>
                      <div
                        style={{
                          backgroundColor: "#ffffff",
                          borderRadius: "9999px",
                          padding: "6px 16px",
                          fontSize: "13px",
                          color: "#053456",
                          fontWeight: 500,
                          border: "1px solid #cbd5e1",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <Search size={14} className="text-slate-400" /> AEO & AI Search Analysis
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div
                        style={{
                          width: "32px",
                          height: "32px",
                          backgroundColor: "#f1f5f9",
                          borderRadius: "8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <TrendingUp size={16} className="text-blue-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Application Content */}
                <div style={{ padding: "32px", backgroundColor: "#ffffff", minHeight: "320px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                    {logoComponent || (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          color: "#053456",
                          fontWeight: "bold",
                          fontSize: "16px",
                        }}
                      >
                        <Sparkles size={20} className="text-blue-600" />
                        <span>AEO Answer Engine Engine</span>
                      </div>
                    )}
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h3 style={{ color: "#64748b", fontWeight: 500, margin: 0, fontSize: "14px" }}>
                          Direct Answer Extraction Readiness
                        </h3>
                        <span style={{ fontSize: "12px", color: "#2563eb", fontWeight: "bold" }}>88%</span>
                      </div>
                      <div style={{ height: "8px", backgroundColor: "#f1f5f9", borderRadius: "9999px", overflow: "hidden" }}>
                        <div style={{ height: "100%", backgroundColor: "#053456", width: "88%", borderRadius: "9999px" }} />
                      </div>
                    </div>

                    {/* AEO Feature Grid */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "12px" }}>
                      {[
                        { name: "Direct Q&A", color: "#3b82f6", icon: <HelpCircle size={20} color="#fff" /> },
                        { name: "AI Snippet", color: "#22c55e", icon: <Sparkles size={20} color="#fff" /> },
                        { name: "Schema", color: "#a855f7", icon: <Layers size={20} color="#fff" /> },
                        { name: "Structured", color: "#f97316", icon: <FileText size={20} color="#fff" /> },
                        { name: "Rank #1", color: "#ef4444", icon: <BarChart3 size={20} color="#fff" /> },
                        { name: "Voice Ready", color: "#053456", icon: <Zap size={20} color="#fff" /> },
                      ].map((item, index) => (
                        <div
                          key={index}
                          data-aos="zoom-in"
                          data-aos-delay={400 + index * 50}
                          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", cursor: "pointer" }}
                        >
                          <div
                            style={{
                              width: "44px",
                              height: "44px",
                              backgroundColor: item.color,
                              borderRadius: "12px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                            }}
                          >
                            {item.icon}
                          </div>
                          <span style={{ fontSize: "10px", color: "#64748b", textAlign: "center", fontWeight: 500 }}>{item.name}</span>
                        </div>
                      ))}
                    </div>

                    {/* AEO Stats */}
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", marginTop: "8px" }}>
                      <div
                        data-aos="fade-up"
                        data-aos-delay="700"
                        style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, backgroundColor: "#f8fafc", padding: "10px 8px", borderRadius: "8px" }}
                      >
                        <span style={{ fontSize: "18px", fontWeight: "bold", color: "#053456" }}>AI #1</span>
                        <span style={{ fontSize: "10px", color: "#64748b" }}>Result Slot</span>
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-delay="800"
                        style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, backgroundColor: "#f8fafc", padding: "10px 8px", borderRadius: "8px" }}
                      >
                        <span style={{ fontSize: "18px", fontWeight: "bold", color: "#22c55e" }}>100%</span>
                        <span style={{ fontSize: "10px", color: "#64748b" }}>Intent Match</span>
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-delay="900"
                        style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, backgroundColor: "#f8fafc", padding: "10px 8px", borderRadius: "8px" }}
                      >
                        <span style={{ fontSize: "18px", fontWeight: "bold", color: "#a855f7" }}>Schema</span>
                        <span style={{ fontSize: "10px", color: "#64748b" }}>Optimized</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stacked Windows Behind */}
              <div
                data-aos="fade-left"
                data-aos-delay="100"
                style={{
                  position: "absolute",
                  top: "-16px",
                  left: "-16px",
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(135deg, #3b82f6, #053456)",
                  borderRadius: "16px",
                  boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
                  transform: "rotate(6deg)",
                  zIndex: -10,
                }}
              />
              <div
                data-aos="fade-left"
                data-aos-delay="0"
                style={{
                  position: "absolute",
                  top: "-32px",
                  left: "-32px",
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
                  borderRadius: "16px",
                  boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
                  transform: "rotate(12deg)",
                  zIndex: -20,
                }}
              />

              {/* Mobile App Mockup */}
            
            </div>
          )}

          {/* Left Content Area */}
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "600px", flex: "1 1 300px" }}
          >
            <span className="tp-section-subtitle text-black blink-ball" data-aos="fade-down" data-aos-delay="300">
              AEO at Its Best
            </span>
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20" data-aos="fade-up" data-aos-delay="400">
                <span className="text-blue-about">Answer Engine Optimization (AEO)  </span> Services in Chennai?
              </h4>
              <p className="text-figtree text-black mt-2" data-aos="fade-up" data-aos-delay="500">
                Answer Engine Optimization (AEO) is the process of optimizing website content so that search engines and AI-powered answer systems can easily understand, extract and present relevant information from your website.
              </p>
              <div className="font-figtree text-dark mt-4 d-flex flex-column gap-3" data-aos="fade-up" data-aos-delay="500">
                {/* AEO Item */}
                {
                  aeoPtag.map((item, index) => (
                    <div
                      key={index}
                      className="p-3 bg-primary-subtle rounded-3"
                      style={{ borderLeft: '4px solid #053456' }}
                    >
                      <small className="text-tenor fs-6 fw-bold tracking-wide d-block mb-1">
                        {item.title}
                      </small>
                      <p className="text-figtree fs-6 text-dark mb-0">
                        {item.ptag}
                      </p>
                    </div>
                  ))
                }
              </div>
              <p className="text-figtree text-black mt-2" data-aos="fade-up" data-aos-delay="500">
                A well-optimized AEO page provides a concise answer first, followed by detailed information that helps users understand the subject.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;