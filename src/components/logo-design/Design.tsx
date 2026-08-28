"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Type,
  Baseline,
  Image as ImageIcon,
  Shapes,
  Shield,
  Layers,
} from "lucide-react";

interface LogoTypeItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const logoTypes: LogoTypeItem[] = [
  {
    id: "wordmark",
    title: "Wordmark Logo",
    description:
      "A wordmark uses the company or brand name as the primary design element, with creative typography creating a distinctive identity.",
    icon: Type,
  },
  {
    id: "lettermark",
    title: "Lettermark Logo",
    description:
      "Lettermark logos use initials or abbreviations to create a simple and recognizable brand mark.",
    icon: Baseline,
  },
  {
    id: "pictorial",
    title: "Symbol or Pictorial Logo",
    description:
      "A symbol-based logo uses an identifiable visual element to represent the brand without relying heavily on text.",
    icon: ImageIcon,
  },
  {
    id: "abstract",
    title: "Abstract Logo",
    description:
      "Abstract logos use unique shapes, forms, and creative visual concepts to communicate a brand's identity.",
    icon: Shapes,
  },
  {
    id: "emblem",
    title: "Emblem Logo",
    description:
      "Emblem logos combine typography and graphical elements within a badge, seal, or structured design.",
    icon: Shield,
  },
  {
    id: "combination",
    title: "Combination Logo",
    description:
      "Combination logos bring together text and symbols to create a versatile brand identity.",
    icon: Layers,
  },
];

export const LogoTypesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110">
      <div className="container container-1550">
        {/* Title Section */}
                <div className="row align-items-center mb-5">
                    <div className="col-xl-3">
                        <span className="tp-section-subtitle text-black blink-ball">
                         Types of Logo Design We Create
                        </span>
                    </div>
                    <div className="col-xl-9">
                        <div className="px-project-title-box">
                            <h4 className="px-about-title mb-20">
                                <span className="text-blue-about">Choose a Logo Style </span>
                               That Fits Your Brand
                            </h4>
                          <p className="text-figtree text-black mt-2">
                           Different businesses require different visual identities. Our logo designers in Chennai can help you select a logo style that suits your business and branding objectives.
                          </p>
                        </div>
                    </div>
                </div>
     

        {/* 3 x 2 Grid Container */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {logoTypes.map((item, index) => {
            const IconComponent = item.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={100 + index * 50}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  backgroundColor: "rgb(255 255 255)",
                  padding: "32px 28px",
                  borderRadius: "16px",
                  border: isHovered
                    ? "1px solid #53ae7d"
                    : "1px solid rgba(5, 52, 86, 0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  transform: isHovered ? "translateY(-6px)" : "translateY(0px)",
                  boxShadow: isHovered
                    ? "0 20px 30px -10px rgba(5, 52, 86, 0.1)"
                    : "0 4px 12px rgba(0, 0, 0, 0.02)",
                  transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "pointer",
                }}
              >
                {/* Icon Container with Filled Background */}
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "12px",
                    backgroundColor: isHovered ? "#53ae7d" : "#053456",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 300ms ease",
                    flexShrink: 0,
                  }}
                >
                  <IconComponent
                    size={26}
                    color="#ffffff"
                    style={{
                      transform: isHovered ? "scale(1.1)" : "scale(1)",
                      transition: "transform 300ms ease",
                    }}
                  />
                </div>

                {/* Content */}
                <div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontFamily:"text-figtree",
                      fontWeight: 700,
                      color: "#053456",
                      marginBottom: "10px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem !important",
                      lineHeight: "1.6",
                      color: "rgba(5, 52, 86, 0.75)",
                      margin: 0,
                      fontFamily: "text-figtree",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LogoTypesSection;