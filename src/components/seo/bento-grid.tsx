"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./bento-grid.css";

interface BentoCardProps {
  name: string;
  description: string;
  imageUrl: string;
  colClass: string;
  cardHeightClass?: string;
  animationDelay?: number;
}

const BentoCard: React.FC<BentoCardProps> = ({
  name,
  description,
  imageUrl,
  colClass,
  cardHeightClass = "",
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
        className={`bento-card-custom w-100 position-relative overflow-hidden rounded-4 p-4 d-flex flex-column justify-content-between ${cardHeightClass}`}
      >
        {/* Centered Image Area */}
        <div className="bento-image-container flex-grow-1 d-flex align-items-center justify-content-center my-3">
          <img
            src={imageUrl}
            alt={name}
            className="bento-center-img img-fluid rounded-3"
          />
        </div>

        {/* Text Area */}
        <div className="bento-card-text text-start mt-auto">
          <h3 className="bento-title fw-semibold mb-2">{name}</h3>
          <p className="bento-desc text-muted m-0">{description}</p>
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
      colClass: "col-12 col-md-6 col-lg-4",
      cardHeightClass: "bento-card-tall",
      delay: 100,
    },
    {
      name: "Improve Search Rankings",
      description:
        "Off-page optimization works alongside on-page and technical SEO to improve your website's overall ranking potential. Strategic link building and online brand promotion can help your important pages gain greater visibility in search results.",
      imageUrl: "/images/onsite-optimization.jpg",
      colClass: "col-12 col-md-6 col-lg-4",
      cardHeightClass: "bento-card-full-tall",
      delay: 200,
    },
    {
      name: "Increase Online Visibility",
      description:
        "Off-page SEO helps your business appear across multiple relevant online platforms. Business listings, industry websites, local directories, content platforms, and brand mentions can increase your digital presence.",
      imageUrl: "/images/link-building.jpg",
      colClass: "col-12 col-md-6 col-lg-4",
      cardHeightClass: "bento-card-short",
      delay: 300,
    },
    {
      name: "Generate Referral Traffic",
      description:
        "A good backlink is not only valuable for SEO. Links placed on relevant websites can introduce your business to a new audience and generate targeted referral traffic.",
      imageUrl: "/images/analytics.jpg",
      colClass: "col-12 col-md-6 col-lg-4",
      cardHeightClass: "bento-card-short",
      delay: 400,
    },
    {
      name: "Strengthen Brand Reputation",
      description:
        "Consistent brand mentions and positive online visibility can help establish your business as a reliable name within your industry. This is particularly valuable for businesses competing in crowded markets such as Chennai.",
      imageUrl: "/images/technical-seo.jpg",
      colClass: "col-12 col-md-6 col-lg-4",
      cardHeightClass: "bento-card-tall",
      delay: 500,
    },
  ];

  return (
    <section className="bento-grid-section py-5">
      <div className="container">
          <div className="row  align-items-center mb-20" >
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
              Yulanto SEO

            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
            
                <h4 className="px-about-title mb-20">
              <span className="text-blue-about"> How Do We Achieve </span>   Maximum Results
            </h4>
            
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {/* Column 1 */}
          <div className="col-12 col-lg-4 d-flex flex-column">
            <BentoCard {...bentoItems[0]} colClass="col-12" />
            <BentoCard {...bentoItems[3]} colClass="col-12" />
          </div>

          {/* Column 2 (Full Center Height) */}
          <div className="col-12 col-lg-4 d-flex flex-column">
            <BentoCard {...bentoItems[1]} colClass="col-12" />
          </div>

          {/* Column 3 */}
          <div className="col-12 col-lg-4 d-flex flex-column">
            <BentoCard {...bentoItems[2]} colClass="col-12" />
            <BentoCard {...bentoItems[4]} colClass="col-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;