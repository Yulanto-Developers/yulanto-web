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
  return (
    <section
      className="px-about-6-area pt-50 pb-80 pb-lg-110"
      style={{
        overflowX: "hidden",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        className="container container-1550"
        style={{
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
            <span className="tp-section-subtitle text-black blink-ball">
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
          ></div>
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
              src="assets/img/googleads/bottom-1.jpg"
              alt="Google Ads & Digital Marketing Integration"
              style={{
                width: "100%",
                height: "360px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}