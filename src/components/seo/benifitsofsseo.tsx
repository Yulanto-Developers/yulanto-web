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
      title: "Increased Visibility & Organic Traffic",
      description:
        "Our SEO experts in Chennai optimize your website to improve its visibility in search engine results pages (SERPs). Better visibility for relevant keywords can help your business attract more qualified organic traffic.",
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
      title: "Improved User Experience",
      description:
        "SEO involves more than keywords and rankings. We optimize website structure, navigation, content, mobile experience, and page usability to create a better experience for visitors while making your website easier for search engines to understand.",
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
      title: "Higher-Quality Leads & Conversions",
      description:
        "By targeting relevant keywords based on user search intent, SEO can help attract visitors who are actively looking for your products or services. This targeted traffic can create better opportunities for enquiries, leads, and conversions.",
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
      title: "Cost-Effective Long-Term Marketing",
      description:
        "Unlike advertising campaigns that require continuous spending to maintain visibility, SEO can deliver long-term organic traffic when your website continues to provide relevant content and maintain strong search performance.",
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
      title: "Builds Brand Credibility & Authority",
      description:
        "Consistent visibility in organic search results can strengthen brand awareness and establish your business as a credible source within your industry. High-quality content and authoritative SEO practices can further support your online reputation.",
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
      title: "Sustainable Search Growth",
      description:
        "SEO is a long-term strategy. By continuously improving content, technical performance, user experience, and website authority, businesses can build a sustainable organic search presence and adapt to changes in search engine algorithms.",
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
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110" style={{ backgroundColor: "#f8f9fa" }}>
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
                <span className="text-blue-about">Benefits of SEO </span> for Your Website 
              </h4>
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