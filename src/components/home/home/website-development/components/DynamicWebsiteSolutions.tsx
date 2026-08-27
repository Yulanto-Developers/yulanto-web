'use client';

import React, { useEffect } from 'react';
import SectionTitle from "@/components/sectiontitle/SectionTitle";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CARD_DATA = [
  {
    id: 'easy-manage',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
    title: 'Easy to Manage',
    text: 'A dynamic website is a perfect solution for large corporations aiming to effortlessly publish and oversee products.',
    aosDelay: '100',
  },
  {
    id: 'highly-scalable',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop',
    title: 'Highly Scalable Solution',
    text: 'Access modules providing interactive features like e-commerce, blogs, and secure login.',
    aosDelay: '200',
  },
  {
    id: 'search-engine-support',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop',
    title: 'Supported By Search Engines',
    text: 'Pages are indexed quickly, giving higher rankings to recently updated content.',
    aosDelay: '300',
  },
];

type WebDevCardProps = {
  id: string;
  index: number;
  image: string;
  title: string;
  text: string;
  aosDelay?: string;
};

type DynamicWebsiteSolutionsProps = {
  cards?: Omit<WebDevCardProps, 'index'>[];
};

const WebDevCard = ({ image, title, text, index, aosDelay }: WebDevCardProps) => {
  return (
    <div
      className="web-dev-img-card"
      data-aos="fade-up"
      data-aos-delay={aosDelay || '0'}
      data-aos-duration="1000"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="web-dev-card-content">
        <div className="web-dev-card-number">{index + 1}</div>
        <h3 className="web-dev-card-title">{title}</h3>
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
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          padding: 20px;
          margin-bottom: 30px;
        }

        .web-dev-img-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .web-dev-card-content {
          background-color: #ffffff;
          border-radius: 16px;
          padding: 25px;
          width: 100%;
          position: relative;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }

        .web-dev-card-number {
          position: absolute;
          top: 25px;
          left: 25px;
          background-color: #000000;
          color: #ffffff;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 14px;
        }

        .web-dev-card-title {
          color: #000000;
          font-weight: 700;
          font-size: 20px;
          margin-bottom: 8px;
          line-height: 1.3;
          margin-top: 45px;
        }

        .web-dev-card-text {
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 0;
        }

         .dyncardtitle .px-section-subtitle {
          padding-top: 20px !important;
        }

        @media (min-width: 768px) {
          .web-dev-solutions-section .row {
            --bs-gutter-x: 1.5rem;
          }
        }

        @media (max-width: 576px) {
          [data-aos] {
            opacity: 1 !important;
            transform: none !important;
          }
          .web-dev-img-card {
            aspect-ratio: 1 / 1;
          }
        }
      ` }} />

      <section className="web-dev-solutions-section">
        <div className="container container-1750">
          <SectionTitle
            subtitle="Simple to Handle"
            titleFirst="Why Dynamic "
            titleSecond="Website Designing?"
            description=""
            className="mb-0 pb-0 dyncardtitle"
            data-aos="fade-up"
            data-aos-duration="600"
          />

          <div className="row mt-3">
            {cards.map((card, index) => (
              <div key={card.id} className="col-12 col-md-4">
                <WebDevCard
                  id={card.id}
                  index={index}
                  image={card.image}
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