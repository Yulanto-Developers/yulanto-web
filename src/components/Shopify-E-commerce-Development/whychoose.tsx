'use client';

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface WhyChooseItem {
  id: number;
  stat: string;
  title: string;
  desc: string;
}

const whyChooseData: WhyChooseItem[] = [
  {
    id: 1,
    stat: '100%',
    title: 'Business-Focused Shopify Solutions',
    desc: 'We understand that every business has different products, customers, and objectives. Our Shopify solutions are planned around your specific requirements.'
  },
  {
    id: 2,
    stat: 'Custom',
    title: 'Customized Store Development',
    desc: 'Instead of relying only on standard templates, we customize Shopify themes, layouts, functionality, and integrations to create a store aligned with your brand.'
  },
  {
    id: 3,
    stat: 'High ROI',
    title: 'Conversion-Focused Design',
    desc: 'We focus on clear navigation, product presentation, calls to action, mobile usability, and a simplified customer journey to drive sales.'
  },
  {
    id: 4,
    stat: '360°',
    title: 'Integration Expertise',
    desc: 'We integrate payment gateways, shipping solutions, marketing tools, analytics platforms, third-party applications, and APIs seamlessly.'
  },
  {
    id: 5,
    stat: '24/7',
    title: 'Ongoing Shopify Support',
    desc: 'Our relationship continues after launch. We provide Shopify maintenance and support to keep your store updated, secure, and performing effectively.'
  }
];

export const WhyChooseShopifyPartner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Auto-rotate cards every 4 seconds
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % whyChooseData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110" style={{ overflow: 'hidden' }}>
      <style>{`
        .auto-card {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          transform: translateY(20px) scale(0.95);
          position: absolute;
          pointer-events: none;
        }
        .auto-card.active {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
          position: relative;
        }
        .dot-indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #cbd5e1;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .dot-indicator.active {
          background-color: #53ae7d;
          width: 28px;
          border-radius: 12px;
        }
      `}</style>

      <div className="container container-1550">
        <div className="row align-items-center">
          {/* Left Column - Heading & Content */}
          <div className="col-xl-6 col-lg-6 mb-40" data-aos="fade-right">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">Why Choose Us as Your </span> Shopify Development Partner in Chennai?
              </h4>
              <h5 className="mb-3 fw-bold" style={{ fontFamily: '"Tenor Sans", "Tenor Sans Fallback"' }}>
                Reliable Shopify Web Development for Growing Businesses:
              </h5>
              <p className="text-figtree text-black mt-3">
                Selecting an experienced Shopify development company can help you create an ecommerce website that is built around your business objectives.
              </p>
              <p className="text-figtree mt-2">
                We combine Shopify expertise, ecommerce knowledge, design thinking, and development experience to create online stores that are practical, attractive, and easy to manage.
              </p>
            </div>
          </div>

          {/* Right Column - Auto Transitioning Single Card Display */}
          <div className="col-xl-6 col-lg-6 mb-40" data-aos="fade-left">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '320px'
              }}
            >
              {whyChooseData.map((item, index) => (
                <div
                  key={item.id}
                  className={`auto-card ${index === activeIndex ? 'active' : ''}`}
                  style={{
                    width: '100%',
                    maxWidth: '480px',
                    backgroundColor: '#ffffff',
                    borderRadius: '20px',
                    padding: '32px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 20px 35px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <h3
                    style={{
                      fontSize: '2.2rem',
                      fontWeight: 800,
                      color: '#53ae7d',
                      marginBottom: '6px',
                      fontFamily: '"Tenor Sans", sans-serif'
                    }}
                  >
                    {item.stat}
                  </h3>
                  <h5
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: '#053456',
                      marginBottom: '12px'
                    }}
                  >
                    {item.title}
                  </h5>
                  <p
                    style={{
                      fontSize: '15px',
                      color: '#475569',
                      lineHeight: '1.6',
                      margin: 0
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}

              {/* Step Navigation Dots */}
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  marginTop: '24px',
                  alignItems: 'center'
                }}
              >
                {whyChooseData.map((_, idx) => (
                  <div
                    key={idx}
                    className={`dot-indicator ${idx === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseShopifyPartner;