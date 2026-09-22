'use client';

import React from 'react';

import { useQuoteModal } from "../home/home/myComponents/Content/QuoteContext";

export const ShopifyCTAPartner: React.FC = () => {
  const { openModal } = useQuoteModal();
  return (
    <section className="px-about-6-area pt-40 pb-40 pb-lg-110">
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
                style={{ color: '#ffffff' }}
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

              <div className="col-xl-12 col-lg-12 mb-30 mb-lg-0">
                <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">

                  <div>
                    <h5
                      className="mt-4 fw-bold mb-2"
                      style={{
                        fontFamily: '"Tenor Sans", "Tenor Sans Fallback"',
                        color: '#ffffff',
                      }}
                    >
                      Looking for a Shopify developer in Chennai?
                    </h5>

                    <p className="text-figtree text-white mt-1 mb-0">
                      Talk to our Shopify development team today and discuss your
                      ecommerce requirements.
                    </p>
                  </div>


                  <button
                    onClick={() => { openModal('manual') }}
                    className="btn d-inline-flex align-items-center gap-2 py-3 px-4 rounded-3 fw-bold text-decoration-none"
                    style={{
                      backgroundColor: '#53ae7d',
                      color: '#ffffff',
                      fontSize: '15px',
                      transition: 'all 0.3s ease',
                      border: '1px solid #53ae7d',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#53ae7d';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#53ae7d';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <span style={{ fontFamily: "Figtree, Figtree Fallback" }}>Let's Talk our Team</span>
                    <i className="fa-solid fa-paper-plane" style={{ fontSize: '14px' }}></i>
                  </button>


                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopifyCTAPartner;