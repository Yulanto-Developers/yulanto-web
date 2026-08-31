"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./dynamicwebdesign.css";

export interface FeatureItem {
  id: string;
  iconClass: string;
  gradientClass: string;
  title: string;
  subtitle: string;
}

const defaultFeatures: FeatureItem[] = [
  {
    id: "#01",
    iconClass: "fa-solid fa-paint-brush",
    gradientClass: "whyc1-bg-primary",
    title: "Brand Identity",
    subtitle: "Unique website design aligned with your brand",
  },
  {
    id: "#02",
    iconClass: "fa-solid fa-mobile-screen-button",
    gradientClass: "whyc1-bg-secondary",
    title: "Responsive Design",
    subtitle: "Mobile-responsive and user-friendly layouts",
  },
  {
    id: "#03",
    iconClass: "fa-solid fa-sliders",
    gradientClass: "whyc1-bg-primary",
    title: "Tailored Features",
    subtitle: "Customized functionality and features",
  },
  {
    id: "#04",
    iconClass: "fa-solid fa-magnifying-glass",
    gradientClass: "whyc1-bg-secondary",
    title: "SEO Optimization",
    subtitle: "SEO-friendly website structure",
  },
  {
    id: "#05",
    iconClass: "fa-solid fa-bolt",
    gradientClass: "whyc1-bg-primary",
    title: "High Performance",
    subtitle: "Fast-loading and performance-focused development",
  },
  {
    id: "#06",
    iconClass: "fa-solid fa-layer-group",
    gradientClass: "whyc1-bg-secondary",
    title: "Secure & Scalable",
    subtitle: "Secure and scalable architecture",
  },
  {
    id: "#07",
    iconClass: "fa-solid fa-link",
    gradientClass: "whyc1-bg-primary",
    title: "Third-Party Integration",
    subtitle: "Easy integration with third-party applications",
  },
  {
    id: "#08",
    iconClass: "fa-solid fa-up-right-and-down-left-from-center",
    gradientClass: "whyc1-bg-secondary",
    title: "Future Growth",
    subtitle: "Flexible solutions for future expansion",
  },
  {
    id: "#09",
    iconClass: "fa-solid fa-gears",
    gradientClass: "whyc1-bg-primary",
    title: "Full Control",
    subtitle: "Better control over website content and functionality",
  },
];

interface WhyC1Props {
  features?: FeatureItem[];
}

const WhyC1: React.FC<WhyC1Props> = ({ features = defaultFeatures }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="pt-3 pb-4">
      <div className="container">
        <h4
          className="px-about-title text-tenor py-3 text-center" 
          data-aos="text-reveal"
          data-aos-delay="100"
        >
          Why Choose  <span className="text-blue-about"> Custom Website Development? </span>
        </h4>
        <div className="row g-4">
          {features.map((item, index) => (
            <div
              key={item.id}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
            >
              <div className="whyc1-feature-card">
                <div className={`whyc1-icon-box ${item.gradientClass}`}>
                  <i className={item.iconClass}></i>
                </div>
                <div className="whyc1-card-content">
                  <h3 className="whyc1-feature-title">{item.title}</h3>
                  <p className="whyc1-feature-subtitle">{item.subtitle}</p>
                </div>
                <div className="whyc1-card-meta">
                  <span className="whyc1-number-badge">{item.id}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyC1;