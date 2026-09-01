'use client';

import React from 'react';

export default function PhpServicesSuitableFor() {
  const suitabilityList = [
    'Corporate Businesses',
    'Startups & New Businesses',
    'Manufacturing Companies',
    'Real Estate Businesses',
    'Educational Institutions',
    'Service-Based Businesses',
    'eCommerce Businesses',
    'B2B Companies',
    'Professional Organizations',
    'Custom Web Application Projects',
  ];

  return (
    <section className="py-5">
      <div className="container mt-3">
        {/* EXACT UNTOUCHED HEADER */}
        <div className="row mb-5">
          <div className="col-xl-12">
            <div className="px-project-title-box">
              <span
                className="tp-section-subtitle text-black blink-ball mt-0"
                style={{ lineHeight: '25px' }}
                data-aos="text-reveal"
                data-aos-delay="100"
              >
                PHP Web Development for Your Business
              </span>

              <h4
                className="px-about-title mb-3 fw-bold"
                style={{ color: '#053456' }}
                data-aos="text-reveal"
                data-aos-delay="100"
              >
                Customized PHP Solutions{' '}
                <span className="text-black">Designed Around Your Goals</span>
              </h4>
              <p
                className="mb-3 text-secondary"
                data-aos="text-reveal-lines"
                data-aos-delay="200"
              >
                Every business has different requirements. Our PHP web development
                company in Chennai focuses on understanding your business before
                recommending the right technology and development approach.
              </p>
              <p
                className="mb-0 text-secondary"
                data-aos="text-reveal-lines"
                data-aos-delay="200"
              >
                We create PHP websites that combine attractive UI/UX design with
                powerful backend functionality. Whether you are launching a new
                website or upgrading an existing application, our team can help you
                develop a solution that is reliable, scalable, mobile responsive, and
                easy to maintain.
              </p>
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div className="mt-2 mb-4 text-center">
          <h4
            className="px-about-title fw-bold"
            style={{ color: '#053456' }}
            data-aos="text-reveal"
            data-aos-delay="100"
          >
            Our PHP website development{' '}
            <span className="text-black">Chennai services are suitable for</span>
          </h4>
        </div>

        {/* DESIGNED SUITABILITY LIST */}
        <div className="row g-3 mt-2">
          {suitabilityList.map((item, index) => (
            <div
              key={index}
              className="col-12 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100 + (index % 5) * 50}
            >
              <div
                className="d-flex align-items-center p-3 rounded-3 h-100"
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#053456';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow =
                    '0 4px 12px rgba(5, 52, 86, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Custom SVG Checkmark Icon */}
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle me-3 flex-shrink-0"
                  style={{
                    width: '32px',
                    height: '32px',
                    backgroundColor: 'rgba(5, 52, 86, 0.1)',
                    color: '#053456',
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                {/* List Item Label */}
                <span
                  className="fw-semibold text-dark"
                  style={{ fontSize: '15px' }}
                >
                  {item}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}