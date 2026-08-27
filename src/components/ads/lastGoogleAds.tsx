"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function GoogleAdsHeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
  }, []);

  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110"
      style={{
        
        overflowX: "hidden", // Prevents horizontal scroll globally on this section
     
      }}
    >
      <h4 className="px-about-title mb-20 text-center">
        <span className="text-blue-about">Grow Your Business </span>
        with Google Ads
      </h4>
      
      <div className="container container-1550"
       
      >
        {/* Top Hero Layout */}
        <div
          style={{
            display: "grid",
            // Changed minwidth from 340px to 280px to safely fit small mobile devices
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "3rem",
            alignItems: "center",
            marginBottom: "3rem",
          }}
        >
          {/* Left Column Text Content */}
          <div data-aos="fade-right">
            <p className="text-figtree text-black mt-2">
              Get your business in front of customers who are actively searching for your products or services. Partner with a{" "}
              <strong style={{ color: "#0a192f" }}>Google Ads agency in Chennai</strong> that focuses on strategic PPC campaign management, targeted advertising, measurable performance, and continuous optimization.
            </p>

            {/* Callout Box with Icon */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "1rem",
                padding: "1.25rem",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.03)",
                marginBottom: "1.25rem",
              }}
            >
              <div
                style={{
                  minWidth: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "#53ae7d",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <i className="fa-solid fa-bullseye" style={{ color: "#ffffff", fontSize: "1.25rem" }} />
              </div>
              <p
                className="text-figtree"
                style={{
                  fontSize: "0.95rem",
                  color: "#4a5568",
                  margin: 0,
                  lineHeight: "1.5",
                }}
              >
                From Google AdWords and PPC campaigns to search advertising, display advertising, remarketing, and conversion tracking, we help you build{" "}
                <strong style={{ color: "#53ae7d" }}>Google advertising campaigns</strong> aligned with your business goals.
              </p>
            </div>

            <p className="text-figtree text-black mt-2">
              Start your Google Ads campaign today and turn relevant searches into valuable business opportunities.
            </p>
          </div>

          {/* Right Column: Google Ads Mockup Graphics */}
          <div data-aos="fade-left" data-aos-delay="200" style={{ position: "relative", width: "100%" }}>
            {/* Soft Blue Arc Background Accent (Constrained inside boundaries) */}
            <div
              style={{
                position: "absolute",
                top: "-5%",
                right: "0%",
                width: "100%",
                height: "100%",
                background: "radial-gradient(circle at 70% 30%, #dbeafe 0%, rgba(219,234,254,0) 70%)",
                borderRadius: "50%",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />

            {/* Wrapper Container */}
            <div style={{ position: "relative", zIndex: 1, padding: "1rem 0" }}>
              {/* Top Google Ads Header Logo */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                <i className="fa-solid fa-triangle-exclamation" style={{ color: "#4285f4", fontSize: "1.8rem" }} />
                <span style={{ fontSize: "1.5rem", fontWeight: 700, color: "#5f6368" }}>
                  Google <span style={{ fontWeight: 400 }}>Ads</span>
                </span>
              </div>

              {/* Main Browser Mockup Window */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "1rem",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.08)",
                  overflow: "hidden",
                  maxWidth: "460px",
                  width: "100%",
                  margin: "0 auto",
                  boxSizing: "border-box",
                }}
              >
                {/* Window Top Controls Bar */}
                <div
                  style={{
                    backgroundColor: "#f8fafc",
                    padding: "0.75rem 1rem",
                    borderBottom: "1px solid #e2e8f0",
                    display: "flex",
                    gap: "0.35rem",
                  }}
                >
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#ef4444" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#eab308" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#22c55e" }} />
                </div>

                <div style={{ padding: "1.25rem" }}>
                  {/* Google Search Bar Mockup */}
                  <div
                    style={{
                      border: "1px solid #e2e8f0",
                      borderRadius: "2rem",
                      padding: "0.5rem 1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      backgroundColor: "#ffffff",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", overflow: "hidden" }}>
                      <span style={{ fontWeight: 700, color: "#4285f4", fontSize: "1.1rem" }}>G</span>
                      <span style={{ fontSize: "0.875rem", color: "#1e293b", fontWeight: 500, whiteSpace: "nowrap" }}>
                        Best Business Solutions
                      </span>
                    </div>
                    <i className="fa-solid fa-microphone" style={{ color: "#4285f4", fontSize: "0.9rem", flexShrink: 0 }} />
                  </div>

                  {/* Ad Result Card Mockup */}
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "0.75rem",
                      padding: "1rem",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.35rem", flexWrap: "wrap" }}>
                      <span
                        style={{
                          backgroundColor: "#e6f4ea",
                          color: "#53ae7d",
                          fontWeight: 700,
                          fontSize: "0.75rem",
                          padding: "0.1rem 0.4rem",
                          borderRadius: "0.25rem",
                        }}
                      >
                        Ad
                      </span>
                      <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#053456" }}>
                        Your Business on Top
                      </span>
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#53ae7d", marginBottom: "0.5rem" }}>
                      www.yourbusiness.com
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "#545454", lineHeight: "1.4" }}>
                      Reach more customers. Grow your business with Google Ads.
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Performance Analytics Card */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-10px",
                  left: "10px", // Moved inside boundary to eliminate overflow
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "1rem",
                  padding: "0.75rem 1rem",
                  boxShadow: "0 15px 25px -5px rgba(0, 0, 0, 0.1)",
                  maxWidth: "180px",
                  zIndex: 2,
                }}
              >
                <div style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 600, marginBottom: "0.25rem" }}>
                  Performance Overview
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.35rem" }}>
                  <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "#53ae7d" }}>+152%</span>
                  <i className="fa-solid fa-arrow-up" style={{ color: "#53ae7d", fontSize: "0.85rem" }} />
                </div>
                <div style={{ fontSize: "0.7rem", color: "#94a3b8" }}>Conversions</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
            gap: "1.25rem",
            marginTop: "2rem",
          }}
        ></div>
      </div>
    </section>
  );
}