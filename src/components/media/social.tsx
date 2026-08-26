"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const socialPlatforms = [
  {
    name: "LinkedIn",
    description:
      "Reach business professionals, decision-makers, and B2B audiences through targeted LinkedIn marketing campaigns and professional content.",
    logo: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Facebook",
    description:
      "Connect with a broad audience through engaging posts, targeted advertising, lead generation campaigns, and community building.",
    logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Instagram",
    description:
      "Build visual brand awareness through reels, stories, creative posts, influencer collaborations, and targeted Instagram advertising.",
    logo: "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Pinterest",
    description:
      "Promote visually appealing products, services, ideas, and website content while reaching audiences actively searching for inspiration.",
    logo: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "X (Twitter)",
    description:
      "Build conversations around your brand, share industry updates, participate in trending discussions, and engage with your audience in real time.",
    logo: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "YouTube",
    description:
      "Use engaging video content to educate your audience, showcase your products and services, improve brand visibility, and generate website traffic.",
    logo: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=400&auto=format&fit=crop",
  },
];

// Map varied entry animations per column index
const animations = ["fade-right", "zoom-in-up", "fade-left"];

export default function ClientFeedback() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <main style={{ width: "100%" }}>
      <section
        style={{
          position: "relative",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "3.5rem 1.5rem",
        }}
      >
        {/* Main Section Header */}
        <article
          data-aos="zoom-in-down"
          style={{
            maxWidth: "768px",
            margin: "0 auto 2.5rem auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <h4 className="px-about-title mb-20 text-center">
            <span className="text-blue-about">Social Media Platforms </span>
            We Work With
          </h4>
        </article>

        {/* 3-Column Equal Box Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gridAutoRows: "1fr",
            gap: "1.5rem",
            padding: "0.5rem 0",
          }}
        >
          {socialPlatforms.map((platform, index) => {
            const isHovered = hoveredIndex === index;
            const animationType = animations[index % animations.length];

            return (
              <div
                key={platform.name}
                data-aos={animationType}
                data-aos-delay={(index % 3) * 150}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  padding: "1.5rem",
                  backgroundColor: isHovered ? "#053456" : "#ffffff",
                  color: isHovered ? "#ffffff" : "#053456",
                  border: `1.5px solid ${isHovered ? "#053456" : "#053456"}`,
                  borderRadius: "0.75rem",
                  boxShadow: isHovered
                    ? "0 20px 30px -10px rgba(5, 52, 86, 0.3)"
                    : "0 2px 5px rgba(0,0,0,0.05)",
                  transform: isHovered
                    ? "translateY(-8px) scale(1.02)"
                    : "translateY(0) scale(1)",
                  transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  cursor: "pointer",
                  boxSizing: "border-box",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "1.35rem",
                        fontWeight: 700,
                        color: isHovered ? "#ffffff" : "#053456",
                        margin: 0,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {platform.name}
                    </h2>
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "0.5rem",
                        overflow: "hidden",
                        flexShrink: 0,
                        border: `1px solid ${
                          isHovered ? "#53ae7d" : "#e5e7eb"
                        }`,
                        transform: isHovered ? "rotate(6deg) scale(1.1)" : "rotate(0deg) scale(1)",
                        transition: "transform 0.3s ease, border-color 0.3s ease",
                      }}
                    >
                      <Image
                        src={platform.logo}
                        alt={`${platform.name} logo`}
                        width={48}
                        height={48}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: "0.95rem !important",
                      lineHeight: 1.6,
                      color: isHovered ? "#ffffff" : "#053456",
                      margin: 0,
                      opacity: isHovered ? 0.95 : 0.85,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {platform.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}