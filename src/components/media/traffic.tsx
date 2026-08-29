"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  TrendingUp, 
  Eye, 
  UserCheck, 
  MessageSquare, 
  Heart, 
  Megaphone, 
  DollarSign, 
  Compass, 
  Share2  
} from "lucide-react";

interface ServiceItem {
  name: string;
  icon: React.ElementType;
}

const seoServices: ServiceItem[] = [
  { name: "Increase website traffic and online visibility", icon: TrendingUp },
  { name: "Build stronger brand awareness", icon: Eye },
  { name: "Generate qualified leads", icon: UserCheck },
  { name: "Improve customer engagement", icon: MessageSquare },
  { name: "Strengthen customer loyalty", icon: Heart },
  { name: "Promote products and services", icon: Megaphone },
  { name: "Increase conversions and sales", icon: DollarSign },
  { name: "Understand customer interests and preferences", icon: Compass },
  { name: "Build a consistent brand identity across social platforms", icon: Share2 },
];

export default function SeoServicesList() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 50,
    });

    // Timeout ensures layout finishes rendering before AOS computes scroll offsets
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  // Divide 9 items cleanly into 3 explicit columns
  const col1 = seoServices.slice(0, 3);
  const col2 = seoServices.slice(3, 6);
  const col3 = seoServices.slice(6, 9);

  const renderCard = (item: ServiceItem, index: number, delay: number) => {
    const IconComponent = item.icon;
    const isHovered = hoveredIndex === index;

    return (
      <div
        key={index}
        className="mb-4 flex-grow-1"
        data-aos="fade-up"
        data-aos-delay={delay}
        data-aos-duration="800"
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.85rem",
          padding: "1.25rem 1.25rem",
          boxSizing: "border-box",
          height: "100%",
          minHeight: "84px",
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
            flexShrink: 0,
            transition: "transform 0.25s ease",
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        >
          <IconComponent size={22} color="#53ae7d" style={{ flexShrink: 0 }} />
        </div>
        <span
          style={{
            fontSize: "15px",
            fontFamily: "Figtree, Figtree Fallback",
            fontWeight: 600,
            lineHeight: "1.35",
            color: isHovered ? "#53ae7d" : "#053456",
            transition: "color 0.25s ease",
            flex: 1,
          }}
        >
          {item.name}
        </span>
      </div>
    );
  };

  return (
    <section
      className="px-about-6-area pt-50 pb-80 pb-lg-110"
      style={{
        backgroundColor: "#ffffff",
      }}
    >
      <div className="container container-1550">
        {/* ROW 1: Title Section */}
        <div className="row align-items-center mb-4" data-aos="fade-up">
          <div className="col-xl-12">
            <div className="px-project-title-box">
              <span className="tp-section-subtitle text-black blink-ball">
                Drive Traffic and Increase Conversions
              </span>
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">Get the Best Social Media Marketing </span>
                Services from Experienced Professionals
              </h4>
              <h5 className="mb-20">
                An effective social media marketing strategy can help you:
              </h5>
              <p className="text-figtree text-black mt-2">
                Our social media marketing company in Chennai develops and distributes engaging content across relevant social media platforms to reach your ideal customers. From content creation and community engagement to paid social media campaigns and performance analysis, we provide a complete social media marketing service in Chennai designed to strengthen your brand and support business growth.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Explicit Bootstrap Columns with Equal Height Alignment */}
        <div className="row g-3 justify-content-center align-items-stretch">
          {/* Column 1 */}
          <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-between">
            {col1.map((item, idx) => renderCard(item, idx, 100 + idx * 100))}
          </div>

          {/* Column 2 */}
          <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-between">
            {col2.map((item, idx) => renderCard(item, idx + 3, 200 + idx * 100))}
          </div>

          {/* Column 3 */}
          <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-between">
            {col3.map((item, idx) => renderCard(item, idx + 6, 300 + idx * 100))}
          </div>
        </div>
      </div>
    </section>
  );
}