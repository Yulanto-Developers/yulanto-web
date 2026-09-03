"use client";

import React, { useEffect } from "react";
import SectionTitle from "@/components/sectiontitle/SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FiPenTool,
  FiTarget,
  FiSearch,
  FiSmartphone,
  FiShield,
  FiClock,
  FiTrendingUp,
  FiDollarSign,
} from "react-icons/fi";

const CARD_DATA = [
  {
    id: "creative-customized-designs",
    image:
      "/assets/images/website-development/custom-website-development/why-business-1.jpg",
    icon: FiPenTool,
    title: "Creative & Customized Designs",
    text: "We create unique website experiences instead of depending entirely on generic templates.",
    aosDelay: "100",
  },
  {
    id: "business-focused-development",
    image:
      "/assets/images/website-development/custom-website-development/why-business-2.jpg",
    icon: FiTarget,
    title: "Business-Focused Development",
    text: "Every website is planned around your business goals, customers, services, and industry.",
    aosDelay: "150",
  },
  {
    id: "seo-friendly-structure",
    image:
      "/assets/images/website-development/custom-website-development/why-business-3.jpg",
    icon: FiSearch,
    title: "SEO-Friendly Structure",
    text: "We follow search-engine-friendly development practices to create a strong technical foundation for SEO.",
    aosDelay: "200",
  },
  {
    id: "responsive-performance",
    image:
      "/assets/images/website-development/custom-website-development/why-business-4.jpg",
    icon: FiSmartphone,
    title: "Responsive & High-Performance Websites",
    text: "Our websites are developed to provide a smooth experience across different devices and screen sizes.",
    aosDelay: "250",
  },
  {
    id: "secure-development",
    image:
      "/assets/images/website-development/custom-website-development/why-business-5.jpg",
    icon: FiShield,
    title: "Secure Development",
    text: "We prioritize security, reliable functionality, and maintainable code during the development process.",
    aosDelay: "300",
  },
  {
    id: "timely-project-delivery",
    image:
      "/assets/images/website-development/custom-website-development/why-business-6.jpg",
    icon: FiClock,
    title: "Timely Project Delivery",
    text: "We follow a structured development workflow to keep the project on track and meet agreed timelines.",
    aosDelay: "350",
  },
  {
    id: "scalable-solutions",
    image:
      "/assets/images/website-development/custom-website-development/why-business-7.jpg",
    icon: FiTrendingUp,
    title: "Scalable Solutions",
    text: "Our custom development approach allows your website to accommodate additional features as your business grows.",
    aosDelay: "400",
  },
  {
    id: "budget-friendly-solutions",
    image:
      "/assets/images/website-development/custom-website-development/why-business-8.jpg",
    icon: FiDollarSign,
    title: "Budget-Friendly Solutions",
    text: "We recommend suitable technologies and features based on your requirements and budget rather than adding unnecessary complexity.",
    aosDelay: "450",
  },
];

type WebDevCardProps = {
  id: string;
  image: string;
  icon: React.ElementType;
  title: string;
  text: string;
  aosDelay?: string;
};

type DynamicWebsiteSolutionsProps = {
  cards?: WebDevCardProps[];
};

const WebDevCard = ({
  image,
  icon: Icon,
  title,
  text,
  aosDelay,
}: WebDevCardProps) => {
  return (
    <div
      className="web-dev-img-card"
      data-aos="fade-up"
      data-aos-delay={aosDelay || "0"}
      data-aos-duration="1000"
    >
      {/* Background Image Container */}
      <div
        className="web-dev-card-bg"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* #53ae7d Tint Overlay */}
      <div className="web-dev-card-overlay" />

      {/* Foreground Content */}
      <div className="web-dev-card-content">
        <div className="web-dev-card-header">
          <h3 className="web-dev-card-title">{title}</h3>

          <div className="web-dev-card-icon-box">
            <Icon className="web-dev-card-icon" />
          </div>
        </div>

        <div className="web-dev-card-text-wrapper">
          <p className="web-dev-card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

const DynamicWebsiteSolutions = ({
  cards = CARD_DATA,
}: DynamicWebsiteSolutionsProps) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .web-dev-solutions-section {
              padding: 30px 0;
            }

            .web-dev-img-card {
              position: relative;
              border-radius: 24px;
              aspect-ratio: 4 / 5;
              max-height: 480px;
              width: 100%;
              margin: 0 auto 30px auto;
              transition: transform 0.35s ease, box-shadow 0.35s ease;
              overflow: hidden;
              display: flex;
              align-items: flex-end;
              padding: 16px;
              cursor: pointer;
            }

            /* Separate Image Layer for Blur Scaling */
            .web-dev-card-bg {
              position: absolute;
              inset: 0;
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
              transition: transform 0.5s ease, filter 0.5s ease;
              z-index: 1;
            }

            /*  Slightly Tinted Gradient Overlay */
            .web-dev-card-overlay {
              position: absolute;
              inset: 0;
              background: linear-gradient(to top, rgba(255, 255, 255, 0.95) 0%, rgb(255 255 255 / 0%) 35%, rgb(255 255 255 / 0%) 58%);
              z-index: 2;
              transition: opacity 0.35s ease;
            }

            /* Card Lift & Shadow on Hover */
            .web-dev-img-card:hover {
              transform: translateY(-8px);
              box-shadow: 0 14px 35px rgba(5, 52, 86, 0.25);
            }

            /* Blur & Zoom Background Image on Hover */
            .web-dev-img-card:hover .web-dev-card-bg {
              filter: blur(5px);
              transform: scale(1.08);
            }

            .web-dev-card-content {
              background-color: transparent;
              border-radius: 16px;
              padding: 16px;
              width: 100%;
              position: relative;
              z-index: 3;
              transition: background-color 0.35s ease, box-shadow 0.35s ease, padding 0.35s ease;
            }

            /* Solid Background Box on Hover for Text Contrast */
            .web-dev-img-card:hover .web-dev-card-content {
              background-color: #ffffff;
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
              padding: 20px;
            }

            .web-dev-card-header {
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 12px;
            }

            .web-dev-card-title {
              color: #000000;
              font-weight: 700;
              font-size: 18px;
              line-height: 1.3;
              margin: 0;
              transition: color 0.35s ease;
            }

            .web-dev-img-card:hover .web-dev-card-title {
              color: #053456;
            }

            .web-dev-card-icon-box {
              background-color: #53ae7d;
              color: #ffffff;
              width: 38px;
              height: 38px;
              min-width: 38px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: background-color 0.35s ease, transform 0.35s ease;
            }

            .web-dev-img-card:hover .web-dev-card-icon-box {
              background-color: #053456;
              transform: rotate(10deg);
            }

            .web-dev-card-icon {
              font-size: 18px;
            }

            /* Animated Collapsible Text Box */
            .web-dev-card-text-wrapper {
              display: grid;
              grid-template-rows: 0fr;
              transition: grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1), margin-top 0.35s ease;
              margin-top: 0;
            }

            .web-dev-img-card:hover .web-dev-card-text-wrapper {
              grid-template-rows: 1fr;
              margin-top: 12px;
            }

            .web-dev-card-text {
              font-size: 13.5px;
              line-height: 1.5;
              margin-bottom: 0;
              color: #4b5563;
              overflow: hidden;
              opacity: 0;
              transform: translateY(10px);
              transition: opacity 0.35s ease 0.1s, transform 0.35s ease 0.1s;
            }

            .web-dev-img-card:hover .web-dev-card-text {
              opacity: 1;
              transform: translateY(0);
            }

            .dyncardtitle .px-section-subtitle {
              padding-top: 20px !important;
            }

            @media (min-width: 768px) {
              .web-dev-solutions-section .row {
                --bs-gutter-x: 1.5rem;
                --bs-gutter-y: 0;
              }

              .web-dev-img-card {
                max-height: 440px;
              }
            }

            @media (min-width: 1200px) {
              .web-dev-img-card {
                max-width: 380px;
                max-height: 460px;
              }
            }

            @media (max-width: 767px) {
              .web-dev-img-card {
                max-width: 420px;
              }
            }

            @media (max-width: 576px) {
              [data-aos] {
                opacity: 1 !important;
                transform: none !important;
              }

              .web-dev-img-card {
                aspect-ratio: 4 / 5;
                max-height: 420px;
              }

              .web-dev-card-title {
                font-size: 17px;
              }

              .web-dev-card-text {
                font-size: 13px;
              }
            }
          `,
        }}
      />

      <section className="web-dev-solutions-section">
        <div className="container">
          <SectionTitle
            titleFirst="Why Businesses"
            titleSecond="Choose Us"
            description=""
            className="mb-0 pb-0 dyncardtitle"
            data-aos="fade-up"
            data-aos-duration="600"
          />

          <div className="row mt-3 justify-content-center">
            {cards.map((card) => (
              <div
                key={card.id}
                className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
              >
                <WebDevCard
                  id={card.id}
                  image={card.image}
                  icon={card.icon}
                  title={card.title}
                  text={card.text}
                  aosDelay={card.aosDelay}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DynamicWebsiteSolutions;
