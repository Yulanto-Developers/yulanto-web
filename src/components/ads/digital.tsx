"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaChartLine, FaBullhorn, FaLayerGroup } from "react-icons/fa6";

export interface OffPageFeatureProps {
  heading?: string;
  subHeading?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

export default function OffPageSeoBanner() {
  const integrationPoints = [
    { title: "SEO & Content Synergy", icon: <FaChartLine size={18} /> },
    { title: "Social Media Ads", icon: <FaBullhorn size={18} /> },
    { title: "Landing Page CRO", icon: <FaLayerGroup size={18} /> },
  ];

  return (
    <section
      style={{
        padding: "80px 24px",
        backgroundColor: "#ffffff",
        overflowX: "hidden",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "48px",
          alignItems: "center",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        {/* Left Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ width: "100%", boxSizing: "border-box" }}
        >
          <div style={{ marginBottom: "16px" }}>
            <span
              className="tp-section-subtitle text-black blink-ball"
              style={{
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#2563eb",
              }}
            >
              Google Ads Integration
            </span>
          </div>

          <h4
            className="px-about-title mb-20"
            style={{
              fontSize: "32px",
              fontWeight: 800,
              lineHeight: 1.25,
              color: "#0f172a",
              margin: "0 0 20px 0",
            }}
          >
            <span className="text-blue-about" style={{ color: "#2563eb" }}>
              Google Ads &{" "}
            </span>
            Digital Marketing
          </h4>

          <p
            className="text-figtree text-black mt-2"
            style={{
              fontSize: "15px",
              lineHeight: "1.7",
              color: "#475569",
              marginBottom: "16px",
            }}
          >
            Google Ads works best when it is integrated with a broader digital
            marketing strategy. We align PPC advertising with SEO, social media
            marketing, landing page optimization, conversion tracking, remarketing,
            and data-driven online marketing activities.
          </p>

          <p
            className="text-figtree text-black mt-2"
            style={{
              fontSize: "15px",
              lineHeight: "1.7",
              color: "#475569",
              marginBottom: "28px",
            }}
          >
            By combining paid and organic marketing strategies, businesses build
            stronger online visibility, attract targeted traffic, and create higher-converting opportunities for lead generation and sales.
          </p>

          {/* Mini Feature Badges */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            {integrationPoints.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 16px",
                  borderRadius: "10px",
                  backgroundColor: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  color: "#0f172a",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                <span style={{ color: "#2563eb" }}>{item.icon}</span>
                {item.title}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Content / Image Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "540px",
            margin: "0 auto",
            boxSizing: "border-box",
          }}
        >
          {/* Subtle Decorative Backdrop Card */}
          <div
            style={{
              position: "absolute",
              inset: "-10px",
              borderRadius: "24px",
              background: "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(147,197,253,0.12))",
              zIndex: 0,
            }}
          />

          {/* Main Visual Container */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              borderRadius: "20px",
              overflow: "hidden",
              backgroundColor: "#ffffff",
              boxShadow: "0 20px 40px -15px rgba(15, 23, 42, 0.12)",
              border: "1px solid #e2e8f0",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
              alt="Google Ads & Digital Marketing Integration"
              style={{
                width: "100%",
                height: "360px",
                objectFit: "cover",
                display: "block",
              }}
            />

            {/* Overlay Metric Badge */}
            <div
              style={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                right: "16px",
                backgroundColor: "rgba(255, 255, 255, 0.92)",
                backdropFilter: "blur(8px)",
                padding: "14px 18px",
                borderRadius: "14px",
                border: "1px solid rgba(255, 255, 255, 0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    backgroundColor: "#2563eb",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                  }}
                >
                  <FaChartLine size={16} />
                </div>
                <div>
                  <span style={{ display: "block", fontSize: "11px", color: "#64748b", fontWeight: 500 }}>
                    Integrated Campaign Growth
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "#0f172a" }}>
                    +340% Conversions
                  </span>
                </div>
              </div>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#16a34a",
                  backgroundColor: "#dcfce7",
                  padding: "4px 10px",
                  borderRadius: "20px",
                }}
              >
                Verified Strategy
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}