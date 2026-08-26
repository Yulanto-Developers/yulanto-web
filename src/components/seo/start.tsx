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
    /* Full-width outer section wrapper enforcing white background across the screen */
    <section style={{ backgroundColor: "#ffffff", width: "100%" }}>
      {/* Centered inner container (1200px max-width) */}
      <div
        style={{
          background: "#fff",
          padding: "60px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
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
                      <Search size={14} /> SEO Analysis
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
                      <span style={{ fontSize: "12px" }}>📈</span>
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
                    <h3 style={{ color: "#64748b", fontWeight: 500, margin: 0 }}>SEO Performance</h3>
                    <div style={{ height: "8px", backgroundColor: "#f1f5f9", borderRadius: "9999px", overflow: "hidden" }}>
                      <div style={{ height: "100%", backgroundColor: "#2563eb", width: "75%", borderRadius: "9999px" }} />
                    </div>
                  </div>

                  {/* SEO Feature Grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "16px" }}>
                    {[
                      { name: "Keywords", color: "#3b82f6", icon: "🔍" },
                      { name: "Analytics", color: "#22c55e", icon: "📊" },
                      { name: "Backlinks", color: "#a855f7", icon: "🔗" },
                      { name: "Content", color: "#f97316", icon: "📝" },
                      { name: "Rankings", color: "#ef4444", icon: "🏆" },
                      { name: "Traffic", color: "#64748b", icon: "🌐" },
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

                  {/* SEO Stats */}
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", marginTop: "8px" }}>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="700"
                      style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, backgroundColor: "#f8fafc", padding: "8px", borderRadius: "8px" }}
                    >
                      <span style={{ fontSize: "20px", fontWeight: "bold", color: "#2563eb" }}>#1</span>
                      <span style={{ fontSize: "10px", color: "#64748b" }}>Ranking</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="800"
                      style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, backgroundColor: "#f8fafc", padding: "8px", borderRadius: "8px" }}
                    >
                      <span style={{ fontSize: "20px", fontWeight: "bold", color: "#22c55e" }}>45K+</span>
                      <span style={{ fontSize: "10px", color: "#64748b" }}>Traffic</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="900"
                      style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, backgroundColor: "#f8fafc", padding: "8px", borderRadius: "8px" }}
                    >
                      <span style={{ fontSize: "20px", fontWeight: "bold", color: "#a855f7" }}>150+</span>
                      <span style={{ fontSize: "10px", color: "#64748b" }}>Keywords</span>
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

            {/* Mobile App Mockup */}
            <div
              data-aos="fade-up-left"
              data-aos-delay="500"
              style={{
                position: "absolute",
                bottom: "-48px",
                right: "-26px",
                width: "176px",
                height: "320px",
                backgroundColor: "#0f172a",
                borderRadius: "40px",
                padding: "8px",
                transform: "rotate(-12deg)",
                transition: "transform 0.3s ease",
              }}
            >
              <div style={{ width: "100%", height: "100%", backgroundColor: "#ffffff", borderRadius: "32px", overflow: "hidden", border: "1px solid #e2e8f0" }}>
                {/* Phone Header */}
                <div
                  style={{
                    backgroundColor: "rgba(241,245,249,0.3)",
                    padding: "12px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "12px",
                    borderBottom: "1px solid #e2e8f0",
                  }}
                >
                  <span style={{ fontWeight: 600, color: "#0f172a" }}>9:41</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <div style={{ width: "16px", height: "8px", backgroundColor: "#22c55e", borderRadius: "2px" }} />
                    <span style={{ color: "#64748b", fontWeight: 500 }}>100%</span>
                  </div>
                </div>

                {/* Phone Content */}
                <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}></div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
                    {[
                      { icon: "🔍", label: "Search" },
                      { icon: "📊", label: "Stats" },
                      { icon: "🔗", label: "Links" },
                      { icon: "📝", label: "Content" },
                    ].map((item, i) => (
                      <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
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
                          <span style={{ fontSize: "16px" }}>{item.icon}</span>
                        </div>
                        <span style={{ fontSize: "8px", color: "#64748b" }}>{item.label}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "#64748b" }}>
                      <span>SEO Score</span>
                      <span style={{ color: "#2563eb", fontWeight: "bold" }}>92%</span>
                    </div>
                    <div style={{ height: "4px", backgroundColor: "#f1f5f9", borderRadius: "9999px", overflow: "hidden" }}>
                      <div style={{ height: "100%", backgroundColor: "#2563eb", width: "92%", borderRadius: "9999px" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Left Content Area */}
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "600px", flex: "1 1 300px" }}
        >
          <span className="tp-section-subtitle text-black blink-ball" data-aos="fade-down" data-aos-delay="300">
            SEO at Its Best
          </span>
          <div className="px-project-title-box">
            <h4 className="px-about-title mb-20" data-aos="fade-up" data-aos-delay="400">
              <span className="text-blue-about">Professional SEO Services in Chennai </span> That Drive Organic Growth
            </h4>
            <p className="text-figtree text-black mt-2 " data-aos="fade-up" data-aos-delay="500">
              Our SEO strategies are built around the keywords and search queries your potential customers use on Google and other search engines. We optimize your website to improve its relevance, authority, user experience, and organic search performance.
            </p>
            <p className="text-figtree text-black mt-2 " data-aos="fade-up" data-aos-delay="500">
              As one of the trusted search engine optimization companies in Chennai, we focus on ethical, data-driven SEO practices rather than shortcuts. Our goal is to improve your website's visibility for valuable search terms, attract targeted visitors, increase enquiries, and support long-term business growth.
            </p>
            <p className="text-figtree text-black mt-2 " data-aos="fade-up" data-aos-delay="500">
              Whether you are a startup, local business, service provider, eCommerce company, or established organization, our SEO services in Chennai can be tailored to your industry, target audience, competition, and business objectives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;