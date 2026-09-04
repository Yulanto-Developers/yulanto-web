'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function WooCommerceCTA(): React.ReactElement {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="px-cta-area pt-80 pb-100" >
      <div className="container container-1550">
        <div
          className="position-relative rounded-4 p-4 p-md-5 overflow-hidden"
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            boxShadow: '0 20px 50px rgba(5, 52, 86, 0.08)',
          }}
          data-aos="fade-up"
        >
          {/* Top Decorative Border Accent */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '5px',
              background: 'linear-gradient(90deg, #053456 0%, #053456 50%, #053456 100%)',
            }}
          />

          <div className="row align-items-center justify-content-between g-4">
            {/* Left Column: Heading & Description */}
            <div className="col-lg-7">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-2 mb-3"
                   style={{ backgroundColor: 'rgba(5, 52, 86, 0.06)', border: '1px solid rgba(5, 52, 86, 0.12)' }}>
                <i className="fa-solid fa-location-dot" style={{ color: '#053456', fontSize: '13px' }}></i>
                <span
                  style={{
                    color: '#053456',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    letterSpacing: '0.5px',
                    fontFamily: '"Figtree", "Figtree Fallback"',
                  }}
                >
                  Start Your WooCommerce Project in Chennai
                </span>
              </div>

               <h4 className="px-about-title mb-20">
                <span className="text-blue-about">Ready to launch or upgrade </span>
              your ecommerce business?
              </h4>
              <p  className="text-figtree text-black mt-2"
                
               
              >
                Partner with a professional WooCommerce development company in Chennai to build an online store that is easy to manage, customer-friendly, and prepared for future growth.
              </p>
            </div>

            {/* Right Column: CTA Box */}
            <div className="col-lg-4 text-lg-end">
              <div
                className="p-4 rounded-3 d-flex flex-column align-items-lg-end align-items-start gap-3"
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #f1f5f9',
                }}
              >
                <div className="d-flex align-items-center gap-2 text-muted" style={{ fontSize: '13px' }}>
                  <i className="fa-solid fa-clock" style={{ color: '#053456' }}></i>
                  <span  className="text-figtree text-black mt-2">Talk to our experts today</span>
                </div>

                <a
                  href="#contact"
                  className="btn w-100 d-inline-flex align-items-center justify-content-center gap-2 py-3 px-4 rounded-3 fw-bold text-decoration-none"
                  style={{
                    backgroundColor: '#053456',
                    color: '#ffffff',
                    fontSize: '15px',
                    transition: 'all 0.3s ease',
                    border: '1px solid #053456',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0a4b7c';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#053456';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span>Discuss Your Project</span>
                  <i className="fa-solid fa-paper-plane" style={{ fontSize: '14px' }}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}