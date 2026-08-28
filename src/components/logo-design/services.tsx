"use client";

import React, { FC, ReactNode, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Card } from "./card";

// FontAwesome Solid (Filled) Icons Setup
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGear,       // Experienced Designers
  faPenRuler,       // Custom-Created Concepts
  faFileCircleCheck,// Professional File Formats
  faBullseye,       // Brand-Focused Approach
  faPalette,        // Multiple Design Options
  faPrint,          // Digital & Print Ready
} from "@fortawesome/free-solid-svg-icons";

export interface HighlightCardProps {
  title: string;
  description: string[];
  icon?: ReactNode;
  aosDelay?: number;
}

export const HighlightCard: FC<HighlightCardProps> = ({
  title,
  description,
  icon,
  aosDelay = 0,
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      style={{
        cursor: "pointer",
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
      }}
    >
      <Card
        style={{
          color: "#ffffff",
          borderRadius: "16px",
          border: "1px solid #53ae7d",
          backgroundColor: "#053456",
          boxShadow: "0 10px 30px rgba(5, 52, 86, 0.4)",
          position: "relative",
          overflow: "hidden",
          width: "100%",
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: "20px 20px",
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            height: "100%",
          }}
        >
          {/* Icon Container */}
          {icon && (
            <div
              style={{
                marginBottom: "20px",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  border: "2px solid #53ae7d",
                  backgroundColor: "#053456",
                  boxShadow: "0 0 15px rgba(83, 174, 125, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {icon}
              </div>
            </div>
          )}

          {/* Title */}
          <h4
            style={{
              marginBottom: "16px",
              fontSize: "1.35rem",
              fontFamily:"text-figtree",
              fontWeight: 700,
              color: "#53ae7d",
              margin: "0 0 16px 0",
            }}
          >
            {title}
          </h4>

          {/* Description */}
          <div style={{ flexGrow: 1 }}>
            {description.map((line, idx) => (
              <p
                key={idx}
                style={{
                  color: "#ffffff",
                  fontSize: "15px !important",
                  lineHeight: "1.6",
                  margin: "0 0 8px 0",
                  opacity: 0.9,
                }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Decorative Divider */}
          <div
            style={{
              marginTop: "20px",
              width: "40px",
              height: "3px",
              backgroundColor: "#53ae7d",
              borderRadius: "2px",
            }}
          />
        </div>
      </Card>
    </div>
  );
};

export default function LogoServicesDemo() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const logoTypesData: Omit<HighlightCardProps, "aosDelay">[] = [
    {
      title: "Experienced Designers",
      description: [
        "Our creative team understands branding, typography, color psychology, composition, and modern design principles.",
      ],
      icon: (
        <FontAwesomeIcon
          icon={faUserGear}
          style={{ fontSize: "26px", color: "#53ae7d" }}
        />
      ),
    },
    {
      title: "Custom-Created Concepts",
      description: [
        "We create designs according to your business requirements instead of depending on generic templates.",
      ],
      icon: (
        <FontAwesomeIcon
          icon={faPenRuler}
          style={{ fontSize: "26px", color: "#53ae7d" }}
        />
      ),
    },
    {
      title: "Professional File Formats",
      description: [
        "We provide appropriate file formats so your logo can be used across different digital and print applications.",
      ],
      icon: (
        <FontAwesomeIcon
          icon={faFileCircleCheck}
          style={{ fontSize: "26px", color: "#53ae7d" }}
        />
      ),
    },
    {
      title: "Brand-Focused Approach",
      description: [
        "Every design decision is made with your brand personality, audience, and business objectives in mind.",
      ],
      icon: (
        <FontAwesomeIcon
          icon={faBullseye}
          style={{ fontSize: "26px", color: "#53ae7d" }}
        />
      ),
    },
    {
      title: "Multiple Design Options",
      description: [
        "We explore different creative directions to help you choose a concept that best represents your business.",
      ],
      icon: (
        <FontAwesomeIcon
          icon={faPalette}
          style={{ fontSize: "26px", color: "#53ae7d" }}
        />
      ),
    },
    {
      title: "Digital & Print Ready",
      description: [
        "Your final logo can be prepared for websites, social media, business cards, brochures, signage, packaging, and other marketing materials.",
      ],
      icon: (
        <FontAwesomeIcon
          icon={faPrint}
          style={{ fontSize: "26px", color: "#53ae7d" }}
        />
      ),
    },
  ];

  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110">
      <div className="container container-1550">
        {/* Title Section */}
        <div className="row align-items-center mb-5">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
              Why Choose Yulanto for Logo Design?
            </span>
          </div>
          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">Creative Ideas. Professional Design. </span>
                Stronger Branding.
              </h4>
              <p className="text-figtree text-black mt-2">
                Choosing the right logo design company in Chennai can make a significant difference to your brand identity. At Yulanto Web Creations, we focus on creating logos that are not only attractive but also meaningful and practical for your business.
              </p>
            </div>
          </div>
        </div>

        {/* 3-Cards Per Row Grid Container */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
          }}
        >
          {logoTypesData.map((item, index) => (
            <HighlightCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              aosDelay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}