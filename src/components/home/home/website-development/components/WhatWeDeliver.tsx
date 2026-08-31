'use client';

import React from 'react';
import { useAOS } from '@/components/hooks/useAOS';

interface ServiceItem {
  title: string;
  iconClass: string;
}

const servicesData: ServiceItem[] = [
  { title: "Custom corporate websites", iconClass: "fa-solid fa-building" },
  { title: "Business websites", iconClass: "fa-solid fa-chart-line" },
  { title: "WordPress website development", iconClass: "fa-brands fa-wordpress" },
  { title: "eCommerce website development", iconClass: "fa-solid fa-cart-shopping" },
  { title: "WooCommerce development", iconClass: "fa-brands fa-woocommerce" },
  { title: "Custom PHP development", iconClass: "fa-brands fa-php" },
  { title: "Laravel website development", iconClass: "fa-brands fa-laravel" },
  { title: "CodeIgniter development", iconClass: "fa-solid fa-fire" },
  { title: "Landing page development", iconClass: "fa-solid fa-laptop-code" },
  { title: "Website redesign & redevelopment", iconClass: "fa-solid fa-rotate" },
  { title: "Custom web applications", iconClass: "fa-solid fa-cubes" },
  { title: "API & third-party integrations", iconClass: "fa-solid fa-network-wired" },
  { title: "Payment gateway integration", iconClass: "fa-solid fa-credit-card" },
  { title: "SEO-friendly website development", iconClass: "fa-solid fa-magnifying-glass" },
  { title: "Website maintenance & support", iconClass: "fa-solid fa-headset" }
];

export default function ServicesGrid() {
  useAOS();

  return (
    <section className="srv-grid-wrapper">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-50">
          <span
            className="tp-section-subtitle text-black blink-ball mt-40"
            style={{ lineHeight: "25px" }}
            data-aos="text-reveal"
            data-aos-delay="100"
          >
            Tailor-Made Website Development for Every Business
          </span>
          <h4
            className="px-about-title text-tenor"
            data-aos="text-reveal"
            data-aos-delay="100"
          >
            <span className="text-blue-about"> Professional Website Development </span> Services in Chennai
          </h4>
          <p
            className="mb-0"
            data-aos="text-reveal-lines"
            data-aos-delay="200"
          >
            Looking for a reliable website development company in Chennai to build a website that truly represents your brand? At Yulanto Web Creations, we create secure, responsive, scalable, and custom-built websites designed around your business objectives.
          </p>
        </div>

        {/* 6-Column Grid Items Wrapper */}
        <div className="srv-grid-container">
          {servicesData.map((item, index) => (
            <div
              key={index}
              className="srv-grid-item"
              data-aos="fade-up"
              data-aos-delay={(index % 6) * 50 + 100}
            >
              <div className="srv-icon-box">
                <i className={`${item.iconClass} srv-icon`} aria-hidden="true"></i>
              </div>
              <h4 className="srv-item-title">{item.title}</h4>
              <div className="srv-line-divider"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .srv-grid-wrapper {
          width: 100%;
          padding: 40px 0;
          background-color: #ffffff;
        }

        .mb-50 {
          margin-bottom: 50px;
        }

        .srv-grid-container {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 36px 24px;
          width: 100%;
        }

        .srv-grid-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: transform 0.3s ease;
        }

        .srv-grid-item:hover {
          transform: translateY(-4px);
        }

        .srv-icon-box {
          height: 48px;
          display: flex;
          align-items: center;
          margin-bottom: 12px;
        }

        .srv-icon {
          font-size: 32px;
          color: #053456;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .srv-grid-item:hover .srv-icon {
          color: #53ae7d;
          transform: scale(1.08);
        }

        .srv-item-title {
          color: #053456;
          font-size: 15px;
          font-weight: 600;
          margin: 0 0 12px 0;
          line-height: 1.4;
          min-height: 42px;
          display: flex;
          align-items: flex-end;
        }

        .srv-line-divider {
          width: 100%;
          height: 2px;
          background-color: #e2e8f0;
          position: relative;
          overflow: hidden;
        }

        .srv-line-divider::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 16px;
          background-color: #053456;
          transition: width 0.3s ease, background-color 0.3s ease;
        }

        .srv-grid-item:hover .srv-line-divider::before {
          width: 100%;
          background-color: #53ae7d;
        }

        @media (max-width: 1200px) {
          .srv-grid-container {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .srv-grid-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px 16px;
          }

          .srv-item-title {
            min-height: auto;
          }
        }

        @media (max-width: 480px) {
          .srv-grid-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}