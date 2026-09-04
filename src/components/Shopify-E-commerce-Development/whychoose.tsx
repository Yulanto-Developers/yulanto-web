'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


interface WhyChooseItem {
  id: number;
  stat: string;
  title: string;
  desc: string;
  rotation: string;
  zIndex: number;
  opacity: number;
  translateY: string;
}

const whyChooseData: WhyChooseItem[] = [
  {
    id: 1,
    stat: '100%',
    title: 'Business-Focused Shopify Solutions',
    desc: 'We understand that every business has different products, customers, and objectives. Our Shopify solutions are planned around your specific requirements.',
    rotation: '6deg',
    zIndex: 5,
    opacity: 1,
    translateY: '0px'
  },
  {
    id: 2,
    stat: 'Custom',
    title: 'Customized Store Development',
    desc: 'Instead of relying only on standard templates, we customize Shopify themes, layouts, functionality, and integrations to create a store aligned with your brand.',
    rotation: '-8deg',
    zIndex: 4,
    opacity: 0.9,
    translateY: '20px'
  },
  {
    id: 3,
    stat: 'High ROI',
    title: 'Conversion-Focused Design',
    desc: 'We focus on clear navigation, product presentation, calls to action, mobile usability, and a simplified customer journey to drive sales.',
    rotation: '4deg',
    zIndex: 3,
    opacity: 0.75,
    translateY: '45px'
  },
  {
    id: 4,
    stat: '360°',
    title: 'Integration Expertise',
    desc: 'We integrate payment gateways, shipping solutions, marketing tools, analytics platforms, third-party applications, and APIs seamlessly.',
    rotation: '-4deg',
    zIndex: 2,
    opacity: 0.55,
    translateY: '70px'
  },
  {
    id: 5,
    stat: '24/7',
    title: 'Ongoing Shopify Support',
    desc: 'Our relationship continues after launch. We provide Shopify maintenance and support to keep your store updated, secure, and performing effectively.',
    rotation: '2deg',
    zIndex: 1,
    opacity: 0.35,
    translateY: '95px'
  }
];

export const WhyChooseShopifyPartner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110" style={{ overflow: 'hidden' }}>
      <style>{`
        .stacked-card {
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .stacked-card-wrapper:hover .stacked-card {
          opacity: 1 !important;
        }
        .stacked-card:hover {
          transform: translateY(-15px) rotate(0deg) scale(1.03) !important;
          z-index: 50 !important;
          opacity: 1 !important;
          box-shadow: 0 25px 40px rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>

      <div className="container container-1550">
        <div className="row align-items-center">
          {/* Left Column - Heading & Content */}
          <div className="col-xl-6 col-lg-6 mb-40" data-aos="fade-right">
            <div className="px-project-title-box">
             
              <h4 className="px-about-title mb-20">
               <span className="text-blue-about" >Why Choose Us as Your </span> Shopify Development Partner in Chennai?
              </h4>
              <h5 className="mb-3 fw-bold" style={{ fontFamily: '"Tenor Sans", "Tenor Sans Fallback"' }}>Reliable Shopify Web Development for Growing Businesses:</h5>
              <p className="text-figtree text-black mt-3">
              Selecting an experienced Shopify development company can help you create an ecommerce website that is built around your business objectives.

              </p>
              <p className="text-figtree mt-2">
                We combine Shopify expertise, ecommerce knowledge, design thinking, and development experience to create online stores that are practical, attractive, and easy to manage.
              </p>
            </div>
          </div>

          {/* Right Column - Stacked Floating Glass Cards matching provided image */}
          <div className="col-xl-6 col-lg-6 mb-40" data-aos="fade-left">
            <div
              className="stacked-card-wrapper"
              style={{
                position: 'relative',
                height: '480px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {whyChooseData.map((item) => (
                <div
                  key={item.id}
                  className="stacked-card"
                  style={{
                    position: 'absolute',
                    width: '85%',
                    maxWidth: '420px',
                    backgroundColor: '#ffffff',
                    borderRadius: '20px',
                    padding: '28px 32px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.08)',
                    transform: `translateY(${item.translateY}) rotate(${item.rotation})`,
                    zIndex: item.zIndex,
                    opacity: item.opacity,
                    cursor: 'pointer'
                  }}
                >
                  <h3
                    style={{
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: '#0f172a',
                      marginBottom: '4px',
                      fontFamily: '"Tenor Sans", sans-serif'
                    }}
                  >
                    {item.stat}
                  </h3>
                  <h5
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: '#053456',
                      marginBottom: '10px'
                    }}
                  >
                    {item.title}
                  </h5>
                  <p
                    style={{
                      fontSize: '14px',
                      color: '#475569',
                      lineHeight: '1.5',
                      margin: 0
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseShopifyPartner;