"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaLinkedinIn, 
  FaFacebookF, 
  FaInstagram, 
  FaPinterestP, 
  FaXTwitter, 
  FaYoutube 
} from "react-icons/fa6";

const socialPlatforms = [
  {
    name: "LinkedIn",
    tag: "B2B & Professional",
    description:
      "Reach business professionals, decision-makers, and B2B audiences through targeted LinkedIn marketing campaigns and professional content.",
    icon: <FaLinkedinIn />,
  },
  {
    name: "Facebook",
    tag: "Community & Leads",
    description:
      "Connect with a broad audience through engaging posts, targeted advertising, lead generation campaigns, and community building.",
    icon: <FaFacebookF />,
  },
  {
    name: "Instagram",
    tag: "Visual & Reels",
    description:
      "Build visual brand awareness through reels, stories, creative posts, influencer collaborations, and targeted Instagram advertising.",
    icon: <FaInstagram />,
  },
  {
    name: "Pinterest",
    tag: "Inspiration",
    description:
      "Promote visually appealing products, services, ideas, and website content while reaching audiences actively searching for inspiration.",
    icon: <FaPinterestP />,
  },
  {
    name: "X (Twitter)",
    tag: "Real-Time",
    description:
      "Build conversations around your brand, share industry updates, participate in trending discussions, and engage with your audience in real time.",
    icon: <FaXTwitter />,
  },
  {
    name: "YouTube",
    tag: "Video Growth",
    description:
      "Use engaging video content to educate your audience, showcase your products and services, improve brand visibility, and generate website traffic.",
    icon: <FaYoutube />,
  },
];

const animations = ["fade-right", "zoom-in", "fade-left"];

export default function ClientFeedback() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <main style={{ width: "100%" }}>
      <section className="px-about-6-area pt-40 pb-40 pb-lg-110">
        <div className="container container-1550">
          
          {/* Header */}
          <article
            data-aos="fade-down"
            style={{
              maxWidth: "800px",
              margin: "0 auto 3rem auto",
              textAlign: "center",
            }}
          >
        
            <h4 className="px-about-title text-center" >
             <span className="text-blue-about"> Social Media Platforms</span> We Master
            </h4>
          </article>

          {/* Bento Grid Layout Container */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
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
                  data-aos-delay={index * 100}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "2rem",
                    backgroundColor: isHovered ? "#053456" : "#f8fafc",
                    color: isHovered ? "#ffffff" : "#053456",
                    border: `1px solid ${isHovered ? "#053456" : "#e2e8f0"}`,
                    borderRadius: "1.25rem",
                    boxShadow: isHovered
                      ? "0 20px 40px -15px rgba(5, 52, 86, 0.25)"
                      : "0 4px 6px -1px rgba(0, 0, 0, 0.02)",
                    transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Background decorative glow element */}
                 

                  <div>
                    {/* Top Row: Font Awesome Icon & Tag */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "1.5rem",
                      }}
                    >
                      <div
                        style={{
                          width: "52px",
                          height: "52px",
                          borderRadius: "1rem",
                          backgroundColor: isHovered ? "rgba(255, 255, 255, 0.15)" : "rgba(5, 52, 86, 0.08)",
                          color: isHovered ? "#ffffff" : "#053456",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.35rem",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                          transform: isHovered ? "scale(1.1) rotate(6deg)" : "scale(1)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {platform.icon}
                      </div>

                      <span
                        style={{
                          fontSize: "12px",
                          fontFamily: "Figtree, Figtree Fallback",
                          fontWeight: 600,
                          padding: "6px 12px",
                          borderRadius: "10px",
                          backgroundColor: isHovered ? "rgba(255, 255, 255, 0.15)" : "rgba(5, 52, 86, 0.06)",
                          color: isHovered ? "#ffffff" : "#053456",
                          letterSpacing: "0.5px",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {platform.tag}
                      </span>
                    </div>

                    {/* Platform Title */}
                    <h3
                      style={{
                        fontSize: "1.45rem",
                         fontFamily: '"Tenor Sans", "Tenor Sans Fallback"' ,
                        fontWeight: 700,
                        color: isHovered ? "#ffffff" : "#053456",
                        marginBottom: "0.75rem",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {platform.name}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: "15px !important",
                        lineHeight: 1.6,
                        color: isHovered ? "rgba(255, 255, 255, 0.9)" : "#64748b",
                        margin: 0,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {platform.description}
                    </p>
                  </div>

                  {/* Bottom indicator line */}
                  <div
                    style={{
                      width: isHovered ? "100%" : "30px",
                      height: "3px",
                      backgroundColor: isHovered ? "#ffffff" : "#053456",
                      marginTop: "1.5rem",
                      borderRadius: "2px",
                      opacity: isHovered ? 1 : 0.4,
                      transition: "all 0.4s ease",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}