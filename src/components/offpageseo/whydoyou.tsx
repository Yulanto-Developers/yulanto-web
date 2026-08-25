"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface BentoCardProps {
  name: string;
  description: string;
  imageUrl: string;
  colClass: string;
  minHeight?: string;
  animationDelay?: number;
}

const BentoCard: React.FC<BentoCardProps> = ({
  name,
  description,
  imageUrl,
  colClass,
  minHeight = "auto",
  animationDelay = 0,
}) => {
  return (
    <div
      className={`${colClass} mb-4 d-flex align-items-stretch`}
      data-aos="fade-up"
      data-aos-delay={animationDelay}
      data-aos-duration="800"
    >
      <div
        style={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          borderRadius: "1rem",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          border: "1px solid #e9ecef",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
          minHeight: minHeight,
        }}
      >
        {/* Centered Image Area with Fixed Inline Styles */}
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "1rem 0",
            maxHeight: "220px",
            overflow: "hidden",
          }}
        >
          <img
            src={imageUrl}
            alt={name}
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
              borderRadius: "0.5rem",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>

        {/* Text Area */}
        <div style={{ textAlign: "left", marginTop: "auto" }}>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: 600,
              marginBottom: "0.5rem",
              color: "#053456",
            }}
          >
            {name}
          </h3>
          <p
            style={{
              fontSize: "0.925rem !important",
              color: "#6c757d",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const BentoGrid: React.FC = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const bentoItems = [
    {
      name: "Build Website Authority",
      description:
        "Quality backlinks from relevant and authoritative websites can help strengthen your website's authority. A strong backlink profile can support better search engine visibility and help your website compete for valuable keywords.",
      imageUrl: "/images/keyword-research.jpg",
      colClass: "col-12",
      minHeight: "340px",
      delay: 100,
    },
    {
      name: "Improve Search Rankings",
      description:
        "Off-page optimization works alongside on-page and technical SEO to improve your website's overall ranking potential. Strategic link building and online brand promotion can help your important pages gain greater visibility in search results.",
      imageUrl: "/images/onsite-optimization.jpg",
      colClass: "col-12",
      minHeight: "700px",
      delay: 200,
    },
    {
      name: "Increase Online Visibility",
      description:
        "Off-page SEO helps your business appear across multiple relevant online platforms. Business listings, industry websites, local directories, content platforms, and brand mentions can increase your digital presence.",
      imageUrl: "/images/link-building.jpg",
      colClass: "col-12",
      minHeight: "340px",
      delay: 300,
    },
    {
      name: "Generate Referral Traffic",
      description:
        "A good backlink is not only valuable for SEO. Links placed on relevant websites can introduce your business to a new audience and generate targeted referral traffic.",
      imageUrl: "/images/analytics.jpg",
      colClass: "col-12",
      minHeight: "340px",
      delay: 400,
    },
    {
      name: "Strengthen Brand Reputation",
      description:
        "Consistent brand mentions and positive online visibility can help establish your business as a reliable name within your industry. This is particularly valuable for businesses competing in crowded markets such as Chennai.",
      imageUrl: "/images/technical-seo.jpg",
      colClass: "col-12",
      minHeight: "340px",
      delay: 500,
    },
  ];

  return (
    <section style={{ padding: "4rem 0"}}>
      <div className="container">
        {/* Title Block */}
        <div className="row align-items-center mb-5" data-aos="fade-up">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
              Yulanto SEO
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-3">
                <span className="text-blue-about">Why Do You Need </span> Off-Page SEO?
              </h4>
              <p className="text-figtree text-black mt-2">
                Having a well-designed website with quality content is only the beginning. To compete effectively in search engine results, your website needs authority and recognition from other relevant and trustworthy online sources. Our SEO experts in Chennai use carefully planned off-page SEO strategies to build your website's credibility and improve its overall search engine performance.
              </p>
            </div>
          </div>
        </div>

        {/* Bento Grid layout */}
        <div className="row g-4 justify-content-center">
          {/* Column 1 */}
          <div className="col-12 col-lg-4 d-flex flex-column">
            <BentoCard {...bentoItems[0]} />
            <BentoCard {...bentoItems[3]} />
          </div>

          {/* Column 2 (Center Full Height Card) */}
          <div className="col-12 col-lg-4 d-flex flex-column">
            <BentoCard {...bentoItems[1]} />
          </div>

          {/* Column 3 */}
          <div className="col-12 col-lg-4 d-flex flex-column">
            <BentoCard {...bentoItems[2]} />
            <BentoCard {...bentoItems[4]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;