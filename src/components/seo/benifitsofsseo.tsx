"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./benifitsofsseo.css";

interface SeoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isDark?: boolean;
  delay?: number;
}

const SeoCard: React.FC<SeoCardProps> = ({
  title,
  description,
  icon,
  isDark = false,
  delay = 0,
}) => {
  return (
    <div
      className="col-12 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch"
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="800"
    >
      <div
        className={`custom-feature-card w-100 p-2 p-xl-5 d-flex flex-column justify-content-start ${
          isDark ? "dark-variant" : ""
        }`}
      >
        {/* Icon Container */}
        <div className="card-icon-badge d-flex align-items-center justify-content-center mb-4">
          {icon}
        </div>

        {/* Title */}
        <h3 className="card-title-text mb-3">{title}</h3>

        {/* Small Accent Line */}
        <div className="card-accent-bar mb-3" />

        {/* Description Content */}
        <p className="card-desc-text m-0">{description}</p>
      </div>
    </div>
  );
};

export const SeoServices: React.FC = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const seoData = [
    {
      title: "Strategic Link Building",
      description:
        "We identify relevant, authoritative, and industry-related websites to build quality backlinks that support your SEO objectives. Our approach focuses on relevance, authority, natural link placement, and long-term value rather than simply increasing backlink numbers.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      isDark: false,
      delay: 100,
    },
    {
      title: "Local SEO & Citation Building",
      description:
        "For businesses targeting customers in Chennai, local visibility is extremely important. Our local SEO services in Chennai include business citations, local directory optimization, location-based listings, and other strategies that help strengthen your local online presence.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      ),
      isDark: true,
      delay: 200,
    },
    {
      title: "Business Directory Submissions",
      description:
        "We submit and optimize business information across relevant and trustworthy directories to improve brand visibility and maintain consistent business information across online platforms.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
      isDark: false,
      delay: 300,
    },
    {
      title: "Guest Posting",
      description:
        "Publishing useful and relevant content on authoritative websites can help establish industry expertise, generate referral traffic, and earn valuable backlinks.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      isDark: false,
      delay: 400,
    },
    {
      title: "Brand Mentions",
      description:
        "We work on increasing your brand's online visibility through relevant content, industry platforms, business profiles, and other digital channels where your target audience is active.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      isDark: false,
      delay: 500,
    },
    {
      title: "Competitor Backlink Analysis",
      description:
        "Our SEO consultant in Chennai analyzes competitor backlink profiles to identify potential link opportunities, industry-specific platforms, content opportunities, and gaps in your current SEO strategy.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 2l4 4-4 4" />
          <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
          <path d="M7 22l-4-4 4-4" />
          <path d="M21 13v1a4 4 0 0 1-4 4H3" />
        </svg>
      ),
      isDark: false,
      delay: 600,
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container py-4">
        <div className="row align-items-center mb-20">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
              Yulanto SEO
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">Our Off-Page </span> SEO Services
              </h4>
              <p className="text-figtree text-black mt-2">As one of the professional SEO agencies in Chennai, we implement ethical and sustainable off-page SEO techniques that focus on long-term growth.</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {seoData.map((item, index) => (
            <SeoCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              isDark={item.isDark}
              delay={item.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoServices;