"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FileText,
  Settings,
  MapPin,
  Search,
  Edit3,
  FileSearch,
  LineChart,
  Link,
  GitCommit,
  Image,
  Code,
  Store,
  ShoppingBag,
  BarChart3,
  Target,
} from "lucide-react";

const seoServices = [
  { name: "On-Page SEO", icon: FileText },
  { name: "Technical SEO", icon: Settings },
  { name: "Local SEO", icon: MapPin },
  { name: "Keyword Research", icon: Search },
  { name: "SEO Content Optimization", icon: Edit3 },
  { name: "Website SEO Audit", icon: FileSearch },
  { name: "Competitor SEO Analysis", icon: LineChart },
  { name: "Link Building", icon: Link },
  { name: "Internal Linking Optimization", icon: GitCommit },
  { name: "Image SEO", icon: Image },
  { name: "Schema Markup", icon: Code },
  { name: "Google Business Profile Optimization", icon: Store },
  { name: "E-commerce SEO", icon: ShoppingBag },
  { name: "SEO Analytics & Reporting", icon: BarChart3 },
  { name: "Search Engine Optimization Strategy", icon: Target },
];

export default function SeoServicesList() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      data-aos="fade-up"
      data-aos-duration="600"
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #e5e7eb",
        padding: "0",
        fontFamily: "sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "3rem 2rem",
          maxWidth: "75rem",
          margin: "0 auto",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        {/* Title Block */}
        <div className="row align-items-center mb-20">
          <div className="col-xl-3" data-aos="fade-right" data-aos-delay="100">
            <span className="tp-section-subtitle text-black blink-ball">
              Our Chennai SEO Services
            </span>
          </div>

          <div className="col-xl-9" data-aos="fade-left" data-aos-delay="200">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">Our SEO solutions can include</span>
              </h4>
            </div>
          </div>
        </div>

        {/* 3 Columns Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "1.25rem",
          }}
        >
          {seoServices.map((item, index) => {
            const IconComponent = item.icon;
            const isHovered = hoveredIndex === index;
            
            // Calculate row and column indices for smooth progressive staggering
            const rowIndex = Math.floor(index / 3);
            const colIndex = index % 3;
            const animationDelay = 100 + rowIndex * 100 + colIndex * 50;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={animationDelay}
                data-aos-anchor-placement="top-bottom"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  padding: "1rem 1.25rem",
                  border: isHovered ? "1px solid #53ae7d" : "1px solid #e5e7eb",
                  borderRadius: "0.5rem",
                  backgroundColor: isHovered ? "#f8fdfa" : "#ffffff",
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                  boxShadow: isHovered
                    ? "0 10px 15px -3px rgba(83, 174, 125, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                    : "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                  transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "transform 0.25s ease",
                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  <IconComponent size={22} color="#53ae7d" style={{ flexShrink: 0 }} />
                </div>
                <span
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: isHovered ? "#53ae7d" : "#053456",
                    transition: "color 0.25s ease",
                  }}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}