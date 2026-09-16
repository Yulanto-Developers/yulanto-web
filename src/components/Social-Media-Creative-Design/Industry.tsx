"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faHardHat,
  faCouch,
  faUserNurse,
  faIndustry,
  faLaptopCode,
  faHeartPulse,
  faHotel,
  faRocket,
  faTruck,
  faDraftingCompass,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

interface IndustryItem {
  icon: any;
  name: string;
}

interface OrbitItem {
  title: string;
  icon: string;
}

const industriesList: IndustryItem[] = [
  { icon: faBuilding, name: "Real Estate" },
  { icon: faHardHat, name: "Construction" },
  { icon: faCouch, name: "Interior Design" },
  { icon: faUserNurse, name: "Healthcare" },
  { icon: faIndustry, name: "Manufacturing" },
  { icon: faLaptopCode, name: "IT & E-commerce" },
  { icon: faHeartPulse, name: "Healthology" },
  { icon: faHotel, name: "Hospitality" },
  { icon: faRocket, name: "Startups & Small Businesses" },
  { icon: faTruck, name: "Delivery" },
  { icon: "faDraftingCompass", name: "Architecture" },
  { icon: faUserTie, name: "Professional Services" },
];

// 15 Real Social Media & Creative Design Services with vector SVG icons
const SERVICE_ITEMS: OrbitItem[] = [
  {
    title: "Instagram Posts & Creatives",
    icon: "https://api.iconify.design/mdi:instagram.svg?color=%23E4405F",
  },
  {
    title: "Facebook Post Designs",
    icon: "https://api.iconify.design/mdi:facebook.svg?color=%231877F2",
  },
  {
    title: "LinkedIn Creative Designs",
    icon: "https://api.iconify.design/mdi:linkedin.svg?color=%230A66C2",
  },
  {
    title: "Instagram Stories",
    icon: "https://api.iconify.design/ri:instagram-line.svg?color=%23E4405F",
  },
  {
    title: "Facebook Stories",
    icon: "https://api.iconify.design/ri:facebook-circle-fill.svg?color=%231877F2",
  },
  {
    title: "Promotional Campaign Creatives",
    icon: "https://api.iconify.design/mdi:bullhorn.svg?color=%23FF9800",
  },
  {
    title: "Product & Service Promotions",
    icon: "https://api.iconify.design/mdi:package-variant-closed.svg?color=%23FF9800",
  },
  {
    title: "Festival & Seasonal Creatives",
    icon: "https://api.iconify.design/mdi:sparkles.svg?color=%23FFC107",
  },
  {
    title: "Offer & Discount Posts",
    icon: "https://api.iconify.design/mdi:tag.svg?color=%23E91E63",
  },
  {
    title: "Corporate Social Media Designs",
    icon: "https://api.iconify.design/mdi:briefcase.svg?color=%236D4C41",
  },
  {
    title: "Event & Announcement Creatives",
    icon: "https://api.iconify.design/mdi:calendar.svg?color=%237E57C2",
  },
  {
    title: "Brand Awareness Posts",
    icon: "https://api.iconify.design/mdi:rocket-launch.svg?color=%23FF5722",
  },
  {
    title: "Infographics & Informative Posts",
    icon: "https://api.iconify.design/mdi:chart-bar.svg?color=%23009688",
  },
  {
    title: "Quote & Engagement Posts",
    icon: "https://api.iconify.design/mdi:message-text.svg?color=%2303A9F4",
  },
  {
    title: "Social Media Ads",
    icon: "https://api.iconify.design/mdi:bullseye-arrow.svg?color=%23F44336",
  },
];

interface SemiCircleOrbitProps {
  radius: number;
  centerX: number;
  centerY: number;
  count: number;
  startIndex: number;
  iconSize: number;
}

function SemiCircleOrbit({
  radius,
  centerX,
  centerY,
  count,
  startIndex,
  iconSize,
}: SemiCircleOrbitProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {/* Orbit icons */}
      {Array.from({ length: count }).map((_, index) => {
        const itemIndex = (startIndex + index) % SERVICE_ITEMS.length;
        const item = SERVICE_ITEMS[itemIndex];
        const angle = (index / (count - 1)) * 180;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        const tooltipAbove = angle > 90;
        const isHovered = hoveredIndex === index;

        return (
          <div
            key={index}
            className="position-absolute d-flex flex-column align-items-center"
            style={{
              left: `${centerX + x - iconSize / 2}px`,
              top: `${centerY - y - iconSize / 2}px`,
              zIndex: 5,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={item.icon}
              alt={item.title}
              width={iconSize}
              height={iconSize}
              className="object-fit-contain"
              style={{
                minWidth: iconSize,
                minHeight: iconSize,
                cursor: "pointer",
                transition: "transform 0.2s ease-in-out",
                transform: isHovered ? "scale(1.25)" : "scale(1)",
              }}
            />

            {/* Dynamic Service Tooltip */}
            <div
              className="position-absolute rounded-3 px-2 py-1 small text-white text-center shadow"
              style={{
                display: isHovered ? "block" : "none",
                backgroundColor: "#053456",
                fontSize: "12px",
                whiteSpace: "nowrap",
                left: "50%",
                transform: "translateX(-50%)",
                [tooltipAbove ? "bottom" : "top"]: "calc(100% + 8px)",
                zIndex: 10,
              }}
            >
              {item.title}
              <div
                className="position-absolute"
                style={{
                  left: "50%",
                  transform: "translateX(-50%) rotate(45deg)",
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#053456",
                  [tooltipAbove ? "top" : "bottom"]: "-4px",
                }}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}

export function IndustryCreativesSection() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });

    const updateSize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Responsive baseWidth configuration ensuring minimum scaling on small mobile viewports
  const baseWidth = size.width 
    ? (size.width < 576 ? Math.max(size.width * 0.9, 320) : Math.min(size.width * 0.45, 550))
    : 450;
    
  const centerX = baseWidth / 2;
  const centerY = baseWidth * 0.52;

  const iconSize =
    size.width < 480
      ? Math.max(24, baseWidth * 0.08)
      : size.width < 768
      ? Math.max(26, baseWidth * 0.06)
      : Math.max(30, baseWidth * 0.07);

  return (
    <section 
      className="px-about-6-area pt-40 pb-40 pb-lg-110 overflow-hidden" 
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container container-1550">
        <h4 className="px-about-title mb-20">
          <span className="text-blue-about">Social Media Creatives </span>
          for Business Growth 
        </h4>
        <p className="text-figtree text-black mt-2 mb-4">
          Great social media design can help your business communicate faster and more effectively. From launching a new service to promoting a special offer, the right creative can capture attention and encourage your audience to take action. 
        </p>

        <div className="row g-4 align-items-center">
          
          {/* Left Column: Industry List with Alternating Styles */}
          <div className="col-xl-6 col-lg-6" data-aos="fade-right">
            <div className="row g-3 mb-4">
              {industriesList.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className="col-6 col-md-6">
                    <div 
                      className="d-flex align-items-center gap-3 p-2 rounded-3 h-100"
                      style={{
                        backgroundColor: isEven ? "#f8f9fa" : "#ffffff",
                        border: "1px solid",
                        borderColor: isEven ? "#e9ecef" : "#53ae7d33",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <div 
                        className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{
                          width: "38px",
                          height: "38px",
                          backgroundColor: isEven ? "#053456" : "#53ae7d",
                          color: "#ffffff",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={item.icon === "faDraftingCompass" ? faDraftingCompass : item.icon}
                          style={{ fontSize: "16px" }}
                        />
                      </div>
                      <span className="text-figtree text-black fw-medium" style={{ fontSize: "16px" }}>
                        {item.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: SemiCircle Orbit Graphic Layout */}
          <div className="col-xl-6 col-lg-6 d-flex justify-content-center align-items-center" data-aos="fade-left" data-aos-delay="200">
            <div className="position-relative w-100 d-flex justify-content-center align-items-center py-4">
              
              {/* Semi-circle glow background */}
              <div
                className="position-absolute start-0 end-0 d-flex justify-content-center pointer-events-none"
                style={{ top: "10%", zIndex: 0 }}
              >
                <div
                  className="rounded-circle"
                  style={{
                    width: size.width < 576 ? "280px" : "380px",
                    height: size.width < 576 ? "280px" : "380px",
                    background:
                      "radial-gradient(circle at center, rgba(83, 174, 125, 0.2), transparent 70%)",
                    filter: "blur(50px)",
                  }}
                />
              </div>

              <div 
                className="position-relative"
                style={{ 
                  width: baseWidth, 
                  height: Math.max(180, baseWidth * 0.55), 
                  maxWidth: "100%" 
                }}
              >
                {/* Inner Ring - 4 items */}
                <SemiCircleOrbit
                  radius={baseWidth * 0.22}
                  centerX={centerX}
                  centerY={centerY}
                  count={4}
                  startIndex={0}
                  iconSize={iconSize}
                />
                {/* Middle Ring - 5 items */}
                <SemiCircleOrbit
                  radius={baseWidth * 0.36}
                  centerX={centerX}
                  centerY={centerY}
                  count={5}
                  startIndex={4}
                  iconSize={iconSize}
                />
                {/* Outer Ring - 6 items */}
                <SemiCircleOrbit
                  radius={baseWidth * 0.5}
                  centerX={centerX}
                  centerY={centerY}
                  count={6}
                  startIndex={9}
                  iconSize={iconSize}
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default IndustryCreativesSection;