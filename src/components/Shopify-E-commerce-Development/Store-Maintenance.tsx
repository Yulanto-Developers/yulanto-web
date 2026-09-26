'use client';

import React from 'react';
import Image from 'next/image';
import { useQuoteModal } from "../home/home/myComponents/Content/QuoteContext";

export const ShopifyExperience: React.FC = () => {
   const { openModal } = useQuoteModal();
  return (
    <section 
      className="px-about-6-area pt-40 pb-40 pb-lg-110" 
     
    >
      <div className="container container-1550">
        <div 
          className="row align-items-center" 
          data-aos="fade-up"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '40px 0'
          }}
        >
          {/* Left Column: Image Container */}
          <div 
            className="col-xl-5 col-lg-6"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div 
              style={{
                width: '100%',
                height: '100%',
                minHeight: '480px',
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden'
              }}
            >
              <Image
                src="/assets/img/Shopify E-commerce Development/Last-img.jpg"
                alt="shopify development company chennai"
                fill
                priority
                sizes="(max-width: 991px) 100vw, 45vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="col-xl-7 col-lg-6">
            <div className="px-project-title-box" style={{ paddingLeft: '20px' }}>

              <h4 
                className="px-about-title mb-20"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <span className="text-blue-about" style={{ color: '#053456' }}>
                  Shopify Store Maintenance
                </span>{' '}
                & Support
              </h4>

              <h5 
                className="mb-3 fw-bold" 
                data-aos="fade-up"
                data-aos-delay="150"
                style={{ fontFamily: '"Tenor Sans", "Tenor Sans Fallback"' }}
              >
                Already have a Shopify store?
              </h5>

              <p 
                className="text-figtree text-black mt-2"
                data-aos="fade-up"
                data-aos-delay="200"
                style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.7',
                  marginBottom: '16px',
                  color: '#334155'
                }}
              >
                Our Shopify developers can help maintain, improve, and update your existing website. We provide ongoing support for theme modifications, content updates, app integrations, functionality enhancements, performance improvements, and other Shopify development requirements.
              </p>

              <p 
                className="text-figtree text-black mt-2"
                data-aos="fade-up"
                data-aos-delay="300"
                style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.7',
                  margin: 0,
                  color: '#334155'
                }}
              >
                If your existing Shopify store requires redesign or additional functionality, we can evaluate the current setup and recommend suitable improvements.
              </p>

                 <button
             onClick={() => openModal()}
              className="btn d-inline-flex align-items-center mt-20 gap-2 py-3 px-4 rounded-3 fw-bold text-decoration-none"
              style={{
                backgroundColor: '#053456',
                color: '#ffffff',
                fontSize: '15px',
                transition: 'all 0.3s ease',
                border: '1px solid #053456',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#053456';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#053456';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
            <span style={{fontFamily: "Figtree, Figtree Fallback"}}>Get Shopify Support</span>
              <i className="fa-solid fa-paper-plane" style={{ fontSize: '14px'}}></i>
            </button>

            </div>
           
          </div>

        </div>
      </div>
    </section>
  );
};

export default ShopifyExperience;