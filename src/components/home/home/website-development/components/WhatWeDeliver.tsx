'use client';

import React from 'react';
import Image from 'next/image';
import { useAOS } from '@/components/hooks/useAOS';

interface ServiceItem {
  title: string;
  imageUrl: string;
}

const servicesData: ServiceItem[] = [
  { title: "Custom corporate websites", imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=120&q=80" },
  { title: "Business websites", imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=120&q=80" },
  { title: "WordPress website development", imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=120&q=80" },
  { title: "eCommerce website development", imageUrl: "https://images.unsplash.com/photo-1556742049-0a679246c7a6?auto=format&fit=crop&w=120&q=80" },
  { title: "WooCommerce development", imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=120&q=80" },
  { title: "Custom PHP development", imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=120&q=80" },
  { title: "Laravel website development", imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=120&q=80" },
  { title: "CodeIgniter development", imageUrl: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=120&q=80" },
  { title: "Landing page development", imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=120&q=80" },
  { title: "Website redesign & redevelopment", imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=120&q=80" },
  { title: "Custom web applications", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=120&q=80" },
  { title: "API & third-party integrations", imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=120&q=80" },
  { title: "Payment gateway integration", imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=120&q=80" },
  { title: "SEO-friendly website development", imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=120&q=80" },
  { title: "Website maintenance & support", imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=120&q=80" }
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
            className="px-about-title"
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

        {/* 5-Column Grid Wrapper */}
        <div className="srv-grid-container">
          {servicesData.map((item, index) => (
            <div
              key={index}
              className="srv-grid-item"
              data-aos="fade-up"
              data-aos-delay={(index % 5) * 50 + 100}
            >
              <div className="srv-icon-box">
                <Image 
                  src={item.imageUrl} 
                  alt={item.title} 
                  width={44} 
                  height={44} 
                  className="srv-img-icon"
                />
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
          padding: 10px 0 40px;
          background-color: #ffffff;
        }

        .mb-50 {
          margin-bottom: 50px;
        }

        /* 5 Column Grid Layout */
        .srv-grid-container {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
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

        .srv-img-icon {
          width: 44px;
          height: 44px;
          object-fit: cover;
          border-radius: 8px;
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .srv-grid-item:hover .srv-img-icon {
          transform: scale(1.1);
        }

        /* Black Item Title */
        .srv-item-title {
          color: #000000;
          font-size: 15px;
          font-weight: 600;
          margin: 0 0 12px 0;
          line-height: 1.4;
          min-height: 42px;
          display: flex;
          align-items: flex-end;
          transition: color 0.3s ease;
        }

        .srv-grid-item:hover .srv-item-title {
          color: #53ae7d;
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

        /* Responsiveness */
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