"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface OrbitItem {
  title: string;
  icon: string;
}

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
      {/* Semi-circle glow background */}
      <div
        className="position-absolute start-0 end-0 d-flex justify-content-center pointer-events-none"
        style={{ top: 0, zIndex: 0 }}
      >
        <div
          className="rounded-circle"
          style={{
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle at center, rgba(83, 174, 125, 0.2), transparent 70%)",
            filter: "blur(60px)",
            marginTop: "-70px",
          }}
        />
      </div>

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

export function SocialMediaCreativeHeader() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });

    const updateSize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const baseWidth = size.width ? Math.min(size.width * 0.8, 700) : 600;
  const centerX = baseWidth / 2;
  const centerY = baseWidth * 0.5;

  const iconSize =
    size.width < 480
      ? Math.max(24, baseWidth * 0.05)
      : size.width < 768
      ? Math.max(28, baseWidth * 0.06)
      : Math.max(32, baseWidth * 0.07);

  return (
    <section
      className="px-about-6-area pt-50 pb-80 pb-lg-110 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container container-1550">
        {/* Top Content Row */}
        <div className="row align-items-center mb-5" data-aos="fade-up">
          <div className="col-xl-3">
            <span
              className="tp-section-subtitle text-black blink-ball"
             
            >
              Social Media Creative Design in Chennai
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about" >
                  Creative Social Media Designs That{" "}
                </span>
                <span >
                  Make Your Brand Stand Out
                </span>
              </h4>
              <p
                className="text-figtree text-black mt-2"
              
              >
                In a fast-moving digital world, your social media visuals are
                often the first interaction customers have with your brand. At
                Yulanto Web Creations, we create engaging, professional, and
                brand-focused social media creatives that help businesses
                communicate their message, attract attention, and build a
                consistent online presence.
              </p>
             
            </div>
          </div>
        </div>

        {/* Orbit Graphic Display */}
        <div
          className="d-flex justify-content-center"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div
            className="position-relative"
            style={{ width: baseWidth, height: baseWidth * 0.55 }}
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
         <p
                className="text-figtree text-black mt-2"
              
              >
                As a creative design company in Chennai, we design social media
                posts that combine compelling visuals, clear messaging, and your
                brand identity to create content that connects with your target
                audience.
              </p>
      </div>
    </section>
  );
}

export default SocialMediaCreativeHeader;