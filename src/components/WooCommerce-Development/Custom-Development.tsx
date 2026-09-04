'use client';

import React, { JSX, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function WooCommerceSection(): JSX.Element {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    /* Fix: Added style={{ overflowX: 'hidden' }} to prevent X-axis overflow */
    <section 
      className="px-about-6-area pt-50 pb-80 pb-lg-110" 
      style={{ overflowX: 'hidden', backgroundColor: '#ffffff' }}
    >
      <div className="container container-1550">
        {/* Top Header Row */}
        <div className="row align-items-center mb-5" data-aos="fade-up">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
              WooCommerce Custom Development
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">Flexible Features Built </span>
                Around Your Business Requirements
              </h4>
              <p className="text-figtree text-black mt-2">
                Every business has different ecommerce requirements. Instead of limiting
                your website to standard features, our WooCommerce custom development
                solutions allow us to modify and extend your online store according
                to your specific workflow.
              </p>
            </div>
          </div>
        </div>

        {/* Content Row */}
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="about-image-wrap text-center mb-4 mb-lg-0">
              <img
                src="/assets/img/woocommerce/woocommerce-development-services.png"
                alt="WooCommerce Custom Development"
                className="img-fluid"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div className="about-content-wrap ps-lg-4">
              <p className="text-figtree text-black mb-3" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                Our WooCommerce developers can customize product pages, checkout processes,
                pricing structures, customer accounts, shipping rules, payment methods,
                dashboards, and other ecommerce functionality.
              </p>
              <p className="text-figtree text-black" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                We can also integrate WooCommerce with third-party applications and business
                systems through APIs and custom development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}