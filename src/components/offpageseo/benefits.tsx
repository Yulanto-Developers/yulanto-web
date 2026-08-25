"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface BenefitItem {
  id: string;
  title: string;
  tag: string;
  category: string;
  iconClass: string;
  image: string;
}

const BENEFITS_DATA: BenefitItem[] = [
  { id: "1", title: "Higher Search Engine Visibility", tag: "Visibility", category: "Reach", iconClass: "fa-solid fa-eye", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" },
  { id: "2", title: "Improved Website Authority", tag: "Authority", category: "Trust", iconClass: "fa-solid fa-award", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80" },
  { id: "3", title: "Better Keyword Ranking Potential", tag: "Rankings", category: "SEO", iconClass: "fa-solid fa-chart-line", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
  { id: "4", title: "Quality Backlink Acquisition", tag: "Backlinks", category: "Authority", iconClass: "fa-solid fa-link", image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80" },
  { id: "5", title: "Increased Referral Traffic", tag: "Traffic", category: "Reach", iconClass: "fa-solid fa-users-rays", image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80" },
  { id: "6", title: "Improved Local Search Visibility", tag: "Local SEO", category: "Targeting", iconClass: "fa-solid fa-location-dot", image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80" },
  { id: "7", title: "Greater Brand Awareness", tag: "Awareness", category: "Branding", iconClass: "fa-solid fa-bullhorn", image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80" },
  { id: "8", title: "Stronger Online Reputation", tag: "Reputation", category: "Trust", iconClass: "fa-solid fa-shield-halved", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" },
  { id: "9", title: "Better Industry Credibility", tag: "Credibility", category: "Authority", iconClass: "fa-solid fa-user-check", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" },
  { id: "10", title: "More Qualified Website Visitors", tag: "Leads", category: "Conversion", iconClass: "fa-solid fa-bullseye", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" },
  { id: "11", title: "Long-Term Organic Growth", tag: "Growth", category: "Strategy", iconClass: "fa-solid fa-seedling", image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=800&q=80" },
  { id: "12", title: "Greater Competitive Advantage", tag: "Advantage", category: "Market", iconClass: "fa-solid fa-trophy", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80" },
];

export default function BenefitsSection() {
  const [selectedId, setSelectedId] = useState<string>(BENEFITS_DATA[0].id);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-slide logic (4 seconds interval)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setSelectedId((prevId) => {
        const currentIndex = BENEFITS_DATA.findIndex((item) => item.id === prevId);
        const nextIndex = (currentIndex + 1) % BENEFITS_DATA.length;
        return BENEFITS_DATA[nextIndex].id;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const activeItem = BENEFITS_DATA.find((item) => item.id === selectedId) || BENEFITS_DATA[0];

  return (
    <section style={{ backgroundColor: "#fff", padding: "5rem 0" }}>
      <div className="container">
        {/* Header Section */}
        <div className="row align-items-center mb-5">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
              Yulanto SEO
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-3">
                <span className="text-blue-about">Benefits of </span>Off-Page SEO
              </h4>
              <p className="text-figtree text-black mt-2">
                A professionally implemented off-page SEO campaign can provide several long-term benefits for your business.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="row g-4 align-items-stretch">
          {/* Left Card: Full Background Image with Content Overlay */}
          <div className="col-lg-5">
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{
                borderRadius: "1.5rem",
                height: "100%",
                minHeight: "450px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.2)",
              }}
            >
              {/* Animated Image Background */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeItem.id}
                  src={activeItem.image}
                  alt={activeItem.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 1,
                  }}
                />
              </AnimatePresence>

              {/* Gradient Overlay for Readability */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(5, 52, 86, 0.95) 0%, rgba(5, 52, 86, 0.4) 60%, rgba(0, 0, 0, 0.2) 100%)",
                  zIndex: 2,
                }}
              />

              {/* Card Content Overlay */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "relative",
                    zIndex: 3,
                    height: "100%",
                    padding: "2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Top Bar: Tag & Category */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.25)",
                        backdropFilter: "blur(4px)",
                        color: "#ffffff",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        padding: "0.35rem 0.85rem",
                        borderRadius: "9999px",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      {activeItem.tag}
                    </span>
                    <span
                      style={{
                        color: "rgba(255, 255, 255, 0.85)",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "0.5rem",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      {activeItem.category}
                    </span>
                  </div>

                  {/* Bottom Bar: Icon, Title & Indicator */}
                  <div>
                    <div
                      style={{
                        width: "3.5rem",
                        height: "3.5rem",
                        borderRadius: "1rem",
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        backdropFilter: "blur(8px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1.25rem",
                      }}
                    >
                      <i className={activeItem.iconClass} style={{ fontSize: "1.5rem", color: "#ffffff" }} />
                    </div>

                    <h3
                      style={{
                        color: "#ffffff",
                        fontSize: "1.65rem",
                        fontWeight: 700,
                        lineHeight: 1.3,
                        margin: 0,
                        textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                      }}
                    >
                      {activeItem.title}
                    </h3>

                   
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side Selection Grid with FontAwesome Icons */}
          <div className="col-lg-7">
            <div className="row g-2">
              {BENEFITS_DATA.map((item) => {
                const isSelected = item.id === selectedId;

                return (
                  <div key={item.id} className="col-sm-6">
                    <button
                      onClick={() => setSelectedId(item.id)}
                      type="button"
                      style={{
                        width: "100%",
                        height: "100%",
                        padding: "1rem 1.25rem",
                        borderRadius: "1rem",
                        backgroundColor: isSelected ? "#053456" : "#ffffff",
                        border: `1.5px solid ${isSelected ? "#053456" : "rgba(5, 52, 86, 0.1)"}`,
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        cursor: "pointer",
                        textAlign: "left",
                        transition: "all 0.2s ease",
                        boxShadow: isSelected
                          ? "0 8px 20px -6px rgba(5, 52, 86, 0.3)"
                          : "0 2px 8px rgba(0, 0, 0, 0.03)",
                      }}
                    >
                      {/* Icon Container */}
                      <div
                        style={{
                          width: "2.25rem",
                          height: "2.25rem",
                          borderRadius: "0.6rem",
                          backgroundColor: isSelected ? "rgba(255, 255, 255, 0.15)" : "rgba(5, 52, 86, 0.06)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          transition: "all 0.2s ease",
                        }}
                      >
                        <i
                          className={item.iconClass}
                          style={{
                            fontSize: "1rem",
                            color: isSelected ? "#ffffff" : "#053456",
                          }}
                        />
                      </div>

                      {/* Benefit Title */}
                      <span
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          color: isSelected ? "#ffffff" : "#053456",
                          lineHeight: 1.3,
                        }}
                      >
                        {item.title}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}