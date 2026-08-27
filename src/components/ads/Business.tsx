"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../seo/benifitsofsseo.css";

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
        className={`custom-feature-card w-100 p-4 p-xl-5 d-flex flex-column justify-content-start ${
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

  const googleAdsData = [
    {
      title: "Wide Audience Reach",
      description:
        "Reach potential customers across Google Search, Google Display Network, YouTube, Google Shopping, and other Google advertising platforms. Your ads can be targeted based on keywords, location, demographics, interests, devices, and user behavior.",
      icon: <i className="fa-solid fa-globe text-2xl"></i>,
      isDark: false,
      delay: 100,
    },
    {
      title: "Precise Keyword Targeting",
      description:
        "Show your advertisements when customers search for products or services related to your business. Effective keyword research and search-term analysis help attract more relevant visitors to your website.",
      icon: <i className="fa-solid fa-key text-2xl"></i>,
      isDark: true,
      delay: 200,
    },
    {
      title: "Reach Customers with Purchase Intent",
      description:
        "Unlike many forms of traditional advertising, Google Ads can connect your business with people who are actively searching for a solution. This makes PPC advertising an effective channel for generating targeted traffic and leads.",
      icon: <i className="fa-solid fa-bullseye text-2xl"></i>,
      isDark: false,
      delay: 300,
    },
    {
      title: "Flexible Advertising Budgets",
      description:
        "Google Ads can be customized for businesses of different sizes. You can set daily and monthly budgets, control bids, select target locations, and adjust campaigns based on performance.",
      icon: <i className="fa-solid fa-wallet text-2xl"></i>,
      isDark: false,
      delay: 400,
    },
    {
      title: "Faster Online Visibility",
      description:
        "SEO is a long-term strategy, while Google Ads can provide immediate paid visibility once campaigns are approved and launched. Using Google Ads and SEO together can create a stronger digital marketing strategy.",
      icon: <i className="fa-solid fa-bolt text-2xl"></i>,
      isDark: false,
      delay: 500,
    },
    {
      title: "Measurable Performance",
      description:
        "Track important metrics such as impressions, clicks, CTR, conversions, cost per click, cost per lead, conversion rate, and return on ad spend. These insights help us continuously optimize your campaigns.",
      icon: <i className="fa-solid fa-chart-line text-2xl"></i>,
      isDark: false,
      delay: 600,
    },
  ];

  return (
    <section className="px-about-6-area pt-80 pb-80 seo-hero-section" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container container-1550 ">
        {/* Header Section */}
        <div className="row align-items-center mb-5">
          <div className="col-xl-3">
            <span
              className="tp-section-subtitle text-black blink-ball"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              Make Google Ads Work for Your Business
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20" data-aos="fade-up" data-aos-delay="400">
                <span className="text-blue-about">Why Invest in a Well-Managed </span> Campaign?
              </h4>
              <p className="text-figtree text-black mt-2" data-aos="fade-up" data-aos-delay="500">
                A professionally managed PPC campaign can help your business reach high-intent customers and generate measurable results. Our Google Ads experts in Chennai develop customized campaigns based on your industry, competition, audience, and business goals.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="row justify-content-center">
          {googleAdsData.map((item, index) => (
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