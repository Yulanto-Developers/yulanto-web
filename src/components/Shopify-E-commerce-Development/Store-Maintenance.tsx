'use client';

import React from 'react';
import Image from 'next/image';

export const ShopifyExperience: React.FC = () => {
  return (
    <section 
      className="px-about-6-area pt-50 pb-80 pb-lg-110" 
     
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
                src="/images/shopify-development-banner.jpg"
                alt="Shopify Store Maintenance & Support"
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

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ShopifyExperience;