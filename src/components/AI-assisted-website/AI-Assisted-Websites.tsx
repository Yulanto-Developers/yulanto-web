"use client";

import React from "react";

interface ServiceCard {
  title: string;
  description: string;
  imageUrl: string;
}

const servicesData: ServiceCard[] = [
  {
    title: "Business Websites",
    description:
      "Corporate and company websites designed to establish credibility and generate enquiries.",
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Landing Pages",
    description:
      "High-converting landing pages for campaigns, products and services.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Portfolio Websites",
    description:
      "Modern websites for agencies, creatives, professionals and personal brands.",
    imageUrl:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Startup Websites",
    description:
      "Fast-moving websites for startups that need to launch and iterate quickly.",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Service Websites",
    description:
      "Conversion-focused websites for businesses offering multiple services.",
    imageUrl:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Campaign Websites",
    description:
      "Short-term campaign and promotional websites that need to go live quickly.",
    imageUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
  },
];

const cardStyles = `
  .service-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  .service-card {
    position: relative;
    height: 380px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .service-card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .service-card:hover .service-card-image {
    transform: scale(1.08);
  }

  .service-card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(7, 18, 29, 0.1) 0%, rgba(7, 18, 29, 0.95) 100%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 32px 28px;
    opacity: 0;
    transition: opacity 0.4s ease, backdrop-filter 0.4s ease;
    backdrop-filter: blur(0px);
  }

  .service-card:hover .service-card-overlay {
    opacity: 1;
    backdrop-filter: blur(4px);
  }

  .service-card-content {
    transform: translateY(20px);
    transition: transform 0.4s ease;
  }

  .service-card:hover .service-card-content {
    transform: translateY(0);
  }

  @media (max-width: 991px) {
    .service-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 576px) {
    .service-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export const BusinessWebsitesSection: React.FC = () => {
  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110" style={{
        backgroundColor: "#ffffff",
      
      }}>
      <style>{cardStyles}</style>

      <div className="container container-1550">
        <div className="row align-items-center mb-50" data-aos="fade-up">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
              Web Solutions
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">
                  AI-Assisted Websites{" "}
                </span>
                For Almost Any Business
              </h4>

              <p className="text-figtree text-black mt-2">
                We design tailored digital experiences for every model and industry,
                helping brands scale, generate leads, and launch faster.
              </p>
            </div>
          </div>
        </div>

        <div className="service-grid" data-aos="fade-up" data-aos-delay="150">
          {servicesData.map((card, index) => (
            <div key={index} className="service-card">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="service-card-image"
              />
              <div className="service-card-overlay">
                <div className="service-card-content">
                     <h5 className="mb-3 fw-bold text-white" style={{ fontFamily: '"Tenor Sans", "Tenor Sans Fallback"' }}>
                    {card.title}
                  </h5>
                  <p
                    className="m-0"
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.6",
                      color: "#e2e8f0",
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessWebsitesSection;