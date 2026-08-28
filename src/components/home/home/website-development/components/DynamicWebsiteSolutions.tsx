'use client';

import React, { useEffect } from 'react';
import SectionTitle from "@/components/sectiontitle/SectionTitle";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiSettings, FiTrendingUp, FiSearch } from 'react-icons/fi';


const CARD_DATA = [
  {
    id: 'easy-manage',
    image: '/assets/images/webdev/Image-1.jpg',
    icon: FiSettings,
    title: 'Easy to Manage',
    text: 'A dynamic website is a perfect solution for large corporations aiming to effortlessly publish and oversee products.',
    aosDelay: '100',
  },
  {
    id: 'highly-scalable',
    image: '/assets/images/webdev/Image-2.jpg',
    icon: FiTrendingUp,
    title: 'Highly Scalable Solution',
    text: 'Access modules providing interactive features like e-commerce, blogs, and secure login.',
    aosDelay: '200',
  },
  {
    id: 'search-engine-support',
    image: '/assets/images/webdev/Image-3.jpg',
    icon: FiSearch,
    title: 'Supported By Search Engines',
    text: 'Pages are indexed quickly, giving higher rankings to recently updated content.',
    aosDelay: '300',
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

const WebDevCard = ({ image, icon: Icon, title, text, aosDelay }: WebDevCardProps) => {
  return (
    <div
      className="web-dev-img-card"
      data-aos="fade-up"
      data-aos-delay={aosDelay || '0'}
      data-aos-duration="1000"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="web-dev-card-content">
        <div className="web-dev-card-header">
          <h3 className="web-dev-card-title">{title}</h3>
          <div className="web-dev-card-icon-box">
            <Icon className="web-dev-card-icon" />
          </div>
        </div>
        <p className="web-dev-card-text">{text}</p>
      </div>
    </div>
  );
};

const DynamicWebsiteSolutions = ({ cards = CARD_DATA }: DynamicWebsiteSolutionsProps) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .web-dev-solutions-section {
          padding: 30px 0;
        }

        .web-dev-img-card {
          position: relative;
          border-radius: 24px;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          aspect-ratio: 4 / 5;
          max-height: 480px;
          width: 100%;
          margin: 0 auto 30px auto;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          padding: 16px;
        }

        .web-dev-img-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 30px rgba(5, 52, 86, 0.2);
        }

        .web-dev-card-content {
          background-color: #ffffff;
          border-radius: 16px;
          padding: 20px;
          width: 100%;
          position: relative;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }

        /* Flexbox wrapper to align Title at start and Icon at end */
        .web-dev-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 12px;
        }

        .web-dev-card-title {
          color: #053456;
          font-weight: 700;
          font-size: 18px;
          line-height: 1.3;
          margin: 0;
        }

        .web-dev-card-icon-box {
          background-color: #053456;
          color: #ffffff;
          width: 38px;
          height: 38px;
          min-width: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease;
        }

        .web-dev-img-card:hover .web-dev-card-icon-box {
          background-color: #53ae7d;
        }

        .web-dev-card-icon {
          font-size: 18px;
        }

        .web-dev-card-text {
          font-size: 13.5px;
          line-height: 1.5;
          margin-bottom: 0;
          color: #4b5563;
        }

        .dyncardtitle .px-section-subtitle {
          padding-top: 20px !important;
        }

        @media (min-width: 768px) {
          .web-dev-solutions-section .row {
            --bs-gutter-x: 1.5rem;
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

        @media (max-width: 576px) {
          [data-aos] {
            opacity: 1 !important;
            transform: none !important;
          }
          .web-dev-img-card {
            aspect-ratio: 4 / 5;
            max-height: 420px;
          }
        }
      ` }} />

      <section className="web-dev-solutions-section">
        <div className="container">
          <SectionTitle
            subtitle="Simple to Handle"
            titleFirst="Why Dynamic "
            titleSecond="Website Designing?"
            description=""
            className="mb-0 pb-0 dyncardtitle"
            data-aos="fade-up"
            data-aos-duration="600"
          />

          <div className="row mt-3 justify-content-center">
            {cards.map((card) => (
              <div key={card.id} className="col-12 col-md-4 d-flex justify-content-center">
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