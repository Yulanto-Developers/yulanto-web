"use client";

import React, { FC, ReactNode, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Card } from "./card";

// FontAwesome Icons Setup
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFont,
  faFontAwesome,
  faShieldHalved,
  faIcons,
  faShapes,
  faLayerGroup,
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
                  padding: "18px",
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

          {/* Title utilizing h4 tag */}
          <h4
            style={{
              marginBottom: "16px",
              fontSize: "1.35rem",
              fontWeight: 700,
              color: "#53ae7d",
              margin: "0 0 16px 0",
            }}
          >
            {title}
          </h4>

          {/* Description utilizing p tags */}
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
      title: "Wordmark or Logotype",
      description: [
        "These logos consist mainly of text, with the company's name stylized in a unique font or typography.",
        "Examples include Coca-Cola, Google, and FedEx.",
      ],
      icon: (
        <FontAwesomeIcon
          icon={faFont}
          style={{ fontSize: "28px", color: "#53ae7d" }}
        />
      ),
    },
    {
      title: "Lettermark",
      description: [
        "Similar to wordmarks, but they use initials or abbreviations of the company's name to create a distinct design.",
        "Examples include IBM, CNN, and HBO.",
      ],
      icon: (
        <FontAwesomeIcon
          icon={faFontAwesome}
          style={{ fontSize: "28px", color: "#53ae7d" }}
        />
      ),
    },
    {
      title: "Emblem",
      description: [
        "These logos integrate text within a symbol or icon, often encased in a shape like a badge or seal.",
        "Examples include Starbucks, Harley-Davidson, and the NFL.",
      ],
      icon: (
        <FontAwesomeIcon
          icon={faShieldHalved}
          style={{ fontSize: "28px", color: "#53ae7d" }}
        />
      ),
    },
    {
      title: "Pictorial Mark or Symbol",
      description: [
        "These logos are composed of a recognizable symbol or icon without any text.",
        "Examples include Apple, Nike, and Twitter.",
      ],
      icon: (
        <FontAwesomeIcon
          icon={faIcons}
          style={{ fontSize: "28px", color: "#53ae7d" }}
        />
      ),
    },
    {
      title: "Abstract Mark",
      description: [
        "These logos use abstract shapes or forms to represent the brand without relying on literal imagery.",
        "Examples include Pepsi, Adidas, and Shell.",
      ],
      icon: (
        <FontAwesomeIcon
          icon={faShapes}
          style={{ fontSize: "28px", color: "#53ae7d" }}
        />
      ),
    },
    {
      title: "Combination Mark",
      description: [
        "These logos combine a wordmark or lettermark with a symbol or icon.",
        "Examples include Burger King, Adidas, and Doritos.",
      ],
      icon: (
        <FontAwesomeIcon
          icon={faLayerGroup}
          style={{ fontSize: "28px", color: "#53ae7d" }}
        />
      ),
    },
  ];

  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110"
      
    >
      <div   className="container container-1550" >
        {/* Title Section */}
        <div className="row align-items-center mb-5">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
              Logo Design Services
            </span>
          </div>
          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">Different Logo Types </span>
                For Different Business
              </h4>
              <p className="text-figtree text-black mt-2">
                Before designing the logo itself, there is a wide range of logo types available to choose from. Our company, located in Chennai, is renowned as the top logo design company that excels in selecting the most suitable logo type for achieving success.
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