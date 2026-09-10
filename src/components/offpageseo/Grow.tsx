"use client";

import React from "react";
import { motion } from "framer-motion";
import { useQuoteModal } from "../home/home/myComponents/Content/QuoteContext";
export interface OffPageFeatureProps {
  heading?: string;
  subHeading?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

export default function OffPageSeoBanner() {
    const { openModal } = useQuoteModal();

  return (
    <section className="px-about-6-area pt-40 pb-40 pb-lg-110"  style={{
        backgroundColor: "#ffffff",
      
      }}
>
      <div className="container container-1550">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3.5rem",
            alignItems: "center",
          }}
        >
          {/* Left Content Area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h4 className="px-about-title mb-20">
              <span className="text-blue-about">Grow Your Online Presence with </span>
              Professional Off-Page SEO
            </h4>
            <p className="text-figtree text-black mt-2">
              A strong website needs more than great design and content. It needs
              authority, credibility, visibility, and recognition across the
              web. Our best SEO services in Chennai are designed to help
              businesses build a stronger digital presence through ethical and
              strategic search engine optimization.
            </p>

            <p className="text-figtree text-black mt-2">
              Partner with an experienced SEO agency in Chennai and take the next
              step toward improving your organic visibility, attracting qualified
              visitors, and building sustainable online growth.
            </p>
                {/* Left Aligned CTA Button */}
            <button
             onClick={openModal}
              className="btn d-inline-flex align-items-center gap-2 py-3 px-4 rounded-3 fw-bold text-decoration-none"
              style={{
                backgroundColor: '#053456',
                color: '#ffffff',
                fontSize: '15px',
                transition: 'all 0.3s ease',
                border: '1px solid #053456',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#053456';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#053456';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
            <span style={{fontFamily: "Figtree, Figtree Fallback"}}>Boost Your Online Visibility</span>
              <i className="fa-solid fa-paper-plane" style={{ fontSize: '14px'}}></i>
            </button>
          </motion.div>

          {/* Right Image Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* Accent Decorative Backdrop Frame */}
            <div
              style={{
                position: "absolute",
                inset: "-12px",
                borderRadius: "1.5rem",
                zIndex: 0,
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                maxHeight: "480px",
                borderRadius: "1.25rem",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(5, 52, 86, 0.15)",
                border: "1px solid rgba(5, 52, 86, 0.08)",
              }}
            >
              <img
                src="assets/img/offpage/Grow-Your-Online.jpg"
                alt="Professional Off-Page SEO Services in Chennai"
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "480px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}