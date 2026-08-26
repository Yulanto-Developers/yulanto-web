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
    <section
      style={{
      
        padding: "4rem 0",
       
      }}
    >
          <h4 className="px-about-title mb-20 text-center">
              <span className="text-blue-about">
                Grow Your Business
                {" "}
              </span>
              with Google Ads

            </h4>
      <div
        className="container"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "15px",
          paddingRight: "15px",
        }}
      >
        {/* Top Hero Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "3rem",
            alignItems: "center",
            marginBottom: "3rem",
          }}
        >
          {/* Left Column Text Content */}
          <div data-aos="fade-right">


            {/* Main Headline */}

        


            {/* Sub-text Paragraph */}
            <p
              className="text-figtree text-black mt-2"
            
            >
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
               <p
              className="text-figtree text-black mt-2"
            
            > Start your Google Ads campaign today and turn relevant searches into valuable business opportunities.</p>
          
          </div>

          {/* Right Column: Google Ads Mockup Graphics */}
          <div data-aos="fade-left" data-aos-delay="200" style={{ position: "relative" }}>
            {/* Soft Blue Arc Background Accent */}
            <div
              style={{
                position: "absolute",
                top: "-10%",
                right: "-10%",
                width: "100%",
                height: "110%",
                background: "radial-gradient(circle at 70% 30%, #dbeafe 0%, rgba(219,234,254,0) 70%)",
                borderRadius: "50%",
                zIndex: 0,
              }}
            />

            {/* Wrapper Container */}
            <div style={{ position: "relative", zIndex: 1, padding: "1rem" }}>
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
                  margin: "0 auto",
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
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <span style={{ fontWeight: 700, color: "#4285f4", fontSize: "1.1rem" }}>G</span>
                      <span style={{ fontSize: "0.875rem", color: "#1e293b", fontWeight: 500 }}>
                        Best Business Solutions
                      </span>
                    </div>
                    <i className="fa-solid fa-microphone" style={{ color: "#4285f4", fontSize: "0.9rem" }} />
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
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.35rem" }}>
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
                  bottom: "-20px",
                  left: "0px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "1rem",
                  padding: "1rem 1.25rem",
                  boxShadow: "0 15px 25px -5px rgba(0, 0, 0, 0.1)",
                  minWidth: "180px",
                }}
              >
                <div style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 600, marginBottom: "0.5rem" }}>
                  Performance Overview
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.35rem", marginBottom: "0.25rem" }}>
                  <span style={{ fontSize: "1.35rem", fontWeight: 800, color: "#53ae7d" }}>+152%</span>
                  <i className="fa-solid fa-arrow-up" style={{ color: "#53ae7d", fontSize: "0.85rem" }} />
                </div>
                <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>Conversions</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 5-Column Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "1.25rem",
            marginTop: "2rem",
          }}
        >
        
        </div>
      </div>
    </section>
  );
}