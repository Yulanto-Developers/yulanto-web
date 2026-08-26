"use client";

import React, { useEffect } from "react";
import { Search } from "lucide-react";
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

  return (
    <div
      style={{
        background: "#fff",
        padding: "60px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {/* Centered Container with Max Width 1200px */}
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "60px",
          alignItems: "center",
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        {/* Left Content Area */}
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "560px", flex: "1 1 450px" }}
        >
          <span className="tp-section-subtitle text-black blink-ball" data-aos="fade-down" data-aos-delay="300">
            Google Ads
          </span>
          <div className="px-project-title-box">
            <h4 className="px-about-title mb-20" data-aos="fade-up" data-aos-delay="400">
              <span className="text-blue-about">Google Ads Management  </span> Services in Chennai
            </h4>
            <p className="text-figtree text-black mt-2 font-paragraph-cls" data-aos="fade-up" data-aos-delay="500">
              Google is one of the most powerful platforms for businesses looking to reach customers who are actively searching for their products and services. With properly planned Google Ads campaigns, your business can appear prominently when potential customers search for relevant keywords.
            </p>
            <p className="text-figtree text-black mt-2" data-aos="fade-up" data-aos-delay="500">
              Our team manages your Google Ads campaign from strategy and keyword research to ad creation, bidding, conversion tracking, optimization, and performance reporting. We focus on maximizing your advertising budget while improving clicks, leads, conversions, and overall return on investment.
            </p>
            <p className="text-figtree text-black mt-2" data-aos="fade-up" data-aos-delay="500">
              Whether you are a startup, small business, or established company, our Google Ads services in Chennai can be customized according to your marketing objectives and budget.
            </p>
          </div>
        </div>

        {/* Right Side - Product Mockups */}
        {showMockups && (
          <div
            style={{
              position: "relative",
              maxWidth: "448px",
              width: "100%",
              flex: "1 1 400px",
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
                      <svg style={{ width: "16px", height: "16px", color: "#64748b" }} viewBox="0 0 24 24" fill="none">
                        <path d="M10 19l-7-7m0 0l7-7m-7 7h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <svg style={{ width: "16px", height: "16px", color: "#64748b" }} viewBox="0 0 24 24" fill="none">
                        <path d="m14 5 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  <div style={{ flex: 1, maxWidth: "280px", margin: "0 24px" }}>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "9999px",
                        padding: "6px 16px",
                        fontSize: "14px",
                        color: "#64748b",
                        border: "1px solid #e2e8f0",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <Search size={14} /> Google Ads Dashboard
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
                      <span style={{ fontSize: "12px" }}>🎯</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Application Content */}
              <div style={{ padding: "32px", backgroundColor: "#ffffff", minHeight: "320px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
                  {logoComponent || (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                      }}
                    >
                      <span style={{ color: "#ffffff", fontWeight: "bold", fontSize: "18px" }}></span>
                    </div>
                  )}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <h3 style={{ color: "#64748b", fontWeight: 500, margin: 0 }}>Campaign ROI Performance</h3>
                    <div style={{ height: "8px", backgroundColor: "#f1f5f9", borderRadius: "9999px", overflow: "hidden" }}>
                      <div style={{ height: "100%", backgroundColor: "#2563eb", width: "85%", borderRadius: "9999px" }} />
                    </div>
                  </div>

                  {/* Google Ads Feature Grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "16px" }}>
                    {[
                      { name: "Search Ads", color: "#3b82f6", icon: "🎯" },
                      { name: "Display", color: "#22c55e", icon: "🖼️" },
                      { name: "Shopping", color: "#a855f7", icon: "🛍️" },
                      { name: "Video Ads", color: "#f97316", icon: "▶️" },
                      { name: "Re-target", color: "#ef4444", icon: "🔄" },
                      { name: "Conversions", color: "#64748b", icon: "📈" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        data-aos="zoom-in"
                        data-aos-delay={400 + index * 50}
                        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", cursor: "pointer" }}
                      >
                        <div
                          style={{
                            width: "48px",
                            height: "48px",
                            backgroundColor: item.color,
                            borderRadius: "12px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                          }}
                        >
                          <span style={{ color: "#ffffff", fontWeight: "bold", fontSize: "20px" }}>{item.icon}</span>
                        </div>
                        <span style={{ fontSize: "10px", color: "#64748b", textAlign: "center", fontWeight: 500 }}>{item.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Google Ads Stats */}
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", marginTop: "8px" }}>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="700"
                      style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, backgroundColor: "#f8fafc", padding: "8px", borderRadius: "8px" }}
                    >
                      <span style={{ fontSize: "20px", fontWeight: "bold", color: "#2563eb" }}>10x</span>
                      <span style={{ fontSize: "10px", color: "#64748b" }}>ROAS</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="800"
                      style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, backgroundColor: "#f8fafc", padding: "8px", borderRadius: "8px" }}
                    >
                      <span style={{ fontSize: "20px", fontWeight: "bold", color: "#22c55e" }}>5.2%</span>
                      <span style={{ fontSize: "10px", color: "#64748b" }}>CTR</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="900"
                      style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, backgroundColor: "#f8fafc", padding: "8px", borderRadius: "8px" }}
                    >
                      <span style={{ fontSize: "20px", fontWeight: "bold", color: "#a855f7" }}>1200+</span>
                      <span style={{ fontSize: "10px", color: "#64748b" }}>Leads</span>
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
                background: "linear-gradient(135deg, #3b82f6, #2563eb)",
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

            {/* Tablet Device Mockup */}
            <div
              data-aos="fade-up-left"
              data-aos-delay="500"
              style={{
                position: "absolute",
                bottom: "-48px",
                right: "-56px",
                width: "280px",
                height: "200px",
                backgroundColor: "#1e293b",
                borderRadius: "20px",
                padding: "10px",
                // boxShadow: "0 25px 50px -12px rgba(0,0,0,0.35)",
                transform: "rotate(-6deg)",
                transition: "transform 0.3s ease",
              }}
            >
              {/* Tablet Camera Hole */}
              <div
                style={{
                  position: "absolute",
                  top: "6px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "6px",
                  height: "6px",
                  backgroundColor: "#475569",
                  borderRadius: "50%",
                }}
              />

              {/* Tablet Screen */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid #e2e8f0",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Tablet App Topbar */}
                <div
                  style={{
                    backgroundColor: "#f8fafc",
                    padding: "8px 12px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid #e2e8f0",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <div style={{ width: "8px", height: "8px", backgroundColor: "#2563eb", borderRadius: "50%" }} />
                    <span style={{ fontSize: "10px", fontWeight: 700, color: "#0f172a" }}>Google Ads Suite</span>
                  </div>
                  <div style={{ display: "flex", gap: "4px" }}>
                    <span style={{ fontSize: "8px", backgroundColor: "#dbeafe", color: "#1e40af", padding: "2px 6px", borderRadius: "4px", fontWeight: 600 }}>Active</span>
                  </div>
                </div>

                {/* Tablet Body Analytics */}
                <div style={{ padding: "12px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <span style={{ fontSize: "9px", color: "#64748b", display: "block" }}>Ad Impressions</span>
                      <span style={{ fontSize: "14px", fontWeight: 800, color: "#0f172a" }}>184.2K</span>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <span style={{ fontSize: "9px", color: "#22c55e", fontWeight: 700 }}>+24.5% 📈</span>
                      <span style={{ fontSize: "8px", color: "#94a3b8", display: "block" }}>vs last month</span>
                    </div>
                  </div>

                  {/* Mini Visual Chart Bar Simulation */}
                  <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", height: "48px", padding: "4px 0", borderBottom: "1px dashed #e2e8f0" }}>
                    {[35, 55, 40, 75, 60, 90, 80, 100].map((h, i) => (
                      <div
                        key={i}
                        style={{
                          flex: 1,
                          height: `${h}%`,
                          backgroundColor: i === 7 ? "#2563eb" : "#93c5fd",
                          borderRadius: "2px",
                        }}
                      />
                    ))}
                  </div>

                  {/* Quick Campaign Metrics */}
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "6px" }}>
                    <div style={{ flex: 1, backgroundColor: "#f1f5f9", padding: "4px 6px", borderRadius: "6px", textAlign: "center" }}>
                      <span style={{ fontSize: "7px", color: "#64748b", display: "block" }}>Cost/Click</span>
                      <span style={{ fontSize: "9px", fontWeight: 700, color: "#0f172a" }}>₹12.40</span>
                    </div>
                    <div style={{ flex: 1, backgroundColor: "#f1f5f9", padding: "4px 6px", borderRadius: "6px", textAlign: "center" }}>
                      <span style={{ fontSize: "7px", color: "#64748b", display: "block" }}>Conv. Value</span>
                      <span style={{ fontSize: "9px", fontWeight: 700, color: "#2563eb" }}>₹4.2L</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HeroSection;