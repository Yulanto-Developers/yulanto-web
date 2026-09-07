'use client';

import React from 'react';

export const ShopifyCTAPartner: React.FC = () => {
  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110">
      <div className="container container-1550">
        <div
          style={{
            backgroundColor: '#053456',
            borderRadius: '24px',
            padding: '60px 40px',
            color: '#ffffff',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
         
         

          <div className="row align-items-center">
            {/* Left Column: Headings & Content */}
            <div className="col-xl-12 col-lg-12 mb-30 mb-lg-0">
              <h4
                className="px-about-title mb-20"
                style={{ color: '#ffffff'}}
              >
                <span style={{ color: '#53ae7d' }}>
                  Build Your Shopify Store{' '}
                </span>
                with a Trusted Development Partner
              </h4>

              <p
                className="text-figtree mt-3 text-white"
              
              >
                Your ecommerce website should be more than an online product
                catalog. It should create a smooth shopping experience,
                strengthen your brand, and support business growth.
              </p>

              <p
                className="text-figtree mt-2 text-white"
             
              >
                Partner with our Shopify development company in Chennai to build
                a professional, responsive, scalable, and user-friendly Shopify
                store.
              </p>

              <h5
                className="mt-4 fw-bold"
                style={{
                  fontFamily: '"Tenor Sans", "Tenor Sans Fallback"',
                  color: '#ffffff',
                 
                }}
              >
                Looking for a Shopify developer in Chennai?
              </h5>
              
              <p className="text-figtree text-white mt-1">
                Talk to our Shopify development team today and discuss your
                ecommerce requirements.
              </p>
                   <a
                href="#contact"
                className="btn"
                style={{
                  backgroundColor: '#53ae7d',
                  color: '#ffffff',
                  padding: '16px 36px',
                  borderRadius: '50px',
                  fontSize: '1.05rem',
                  fontFamily: "Figtree, Figtree Fallback", 
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 20px rgba(83, 174, 125, 0.3)',
                }}
              >
                <span>Talk to Our Team</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

          
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopifyCTAPartner;