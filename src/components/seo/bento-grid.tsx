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
  isCenterCard?: boolean; // Added optional prop for center card layout tweaks
}

const BentoCard: React.FC<BentoCardProps> = ({
  name,
  description,
  imageUrl,
  colClass,
  cardHeightClass = "",
  animationDelay = 0,
  isCenterCard = false,
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
        {/* Expanded Image Area for Center Card */}
        <div
          className={`bento-image-container flex-grow-1 d-flex align-items-center justify-content-center my-3 ${
            isCenterCard ? "bento-center-card-img-wrapper" : ""
          }`}
        >
          <img
            src={imageUrl}
            alt={name}
            className={`bento-center-img img-fluid rounded-3 ${
              isCenterCard ? "bento-tall-img" : ""
            }`}
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
      name: "Keyword Research",
      description:
        "Effective SEO starts with understanding what your customers are searching for. Our SEO experts in Chennai conduct detailed keyword research to identify relevant, high-value, and commercially focused search terms. We analyze search intent, competition, keyword relevance, and opportunities to create a focused SEO strategy.",
      imageUrl: "/assets/img/seo/top/SEO-Results-1.jpg",
      colClass: "col-12 col-md-6 col-lg-4",
      cardHeightClass: "bento-card-tall",
      delay: 100,
    },
    {
      name: "Better On-Page Optimization",
      description:
        "We optimize important website elements, including page content, title tags, meta descriptions, headings, URLs, internal links, images, and structured data. Our on-page SEO approach helps search engines better understand your website while providing visitors with useful and engaging content.",
      imageUrl: "/assets/img/seo/top/SEO-Results-3.jpg",
      colClass: "col-12 col-md-6 col-lg-4",
      cardHeightClass: "bento-card-full-tall h-100", // Ensured full height filling
      delay: 200,
    },
    {
      name: "Technical SEO",
      description:
        "Our technical SEO process focuses on improving website crawlability, indexing, mobile usability, page experience, website structure, and other technical factors that can influence search performance. A technically optimized website provides a stronger foundation for long-term SEO growth.",
      imageUrl: "/assets/img/seo/top/SEO-Results-4.jpg",
      colClass: "col-12 col-md-6 col-lg-4",
      cardHeightClass: "bento-card-short",
      delay: 300,
    },
    {
      name: "Strategic Link Building",
      description:
        "Quality backlinks can help strengthen your website's authority and credibility. We follow relevant and ethical link-building practices to develop a natural backlink profile and improve your website's authority within your industry.",
      imageUrl: "/assets/img/seo/top/SEO-Results-2.jpg",
      colClass: "col-12 col-md-6 col-lg-4",
      cardHeightClass: "bento-card-short",
      delay: 400,
    },
    {
      name: "SEO Analytics & Performance Tracking",
      description:
        "We continuously analyze SEO performance to identify opportunities for improvement. We monitor keyword rankings, organic traffic, search visibility, user engagement, conversions, and other important SEO metrics to refine the strategy and maximize results.",
      imageUrl: "/assets/img/seo/top/SEO-Results-5.jpg",
      colClass: "col-12 col-md-6 col-lg-4",
      cardHeightClass: "bento-card-tall",
      delay: 500,
    },
  ];

  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110 bento-grid-section">
      <div className="container container-1550">
        <div className="row align-items-center mb-20">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
              Yulanto SEO
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about"> How Do We Achieve </span>{" "}
                Maximum SEO Results?
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

          {/* Column 2 (Full Center Height with larger image) */}
          <div className="col-12 col-lg-4 d-flex flex-column">
            <BentoCard {...bentoItems[1]} colClass="col-12" isCenterCard={true} />
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