'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface FeatureItem {
  id: number;
  title: string;
  iconClass: string;
}

const features: FeatureItem[] = [
  { id: 1, title: 'Custom product layouts', iconClass: 'fa-solid fa-table-cells-large' },
  { id: 2, title: 'Advanced product variations', iconClass: 'fa-solid fa-layer-group' },
  { id: 3, title: 'Custom pricing rules', iconClass: 'fa-solid fa-tags' },
  { id: 4, title: 'Wholesale and B2B pricing', iconClass: 'fa-solid fa-handshake' },
  { id: 5, title: 'Membership functionality', iconClass: 'fa-solid fa-id-card' },
  { id: 6, title: 'Subscription products', iconClass: 'fa-solid fa-arrows-rotate' },
  { id: 7, title: 'Custom checkout fields', iconClass: 'fa-solid fa-list-check' },
  { id: 8, title: 'Location-based shipping', iconClass: 'fa-solid fa-truck-fast' },
  { id: 9, title: 'Advanced product filtering', iconClass: 'fa-solid fa-filter' },
  { id: 10, title: 'Custom order management', iconClass: 'fa-solid fa-boxes-packing' },
  { id: 11, title: 'CRM integration', iconClass: 'fa-solid fa-users-gear' },
  { id: 12, title: 'ERP integration', iconClass: 'fa-solid fa-network-wired' },
  { id: 13, title: 'API integration', iconClass: 'fa-solid fa-code' },
  { id: 14, title: 'Custom WooCommerce plugins', iconClass: 'fa-solid fa-plug' },
  { id: 15, title: 'Automated ecommerce workflows', iconClass: 'fa-solid fa-robot' },
];

export default function CustomWooCommerceFeatures(): React.ReactElement {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section 
      className="px-about-6-area pt-50 pb-80 pb-lg-110" 
      style={{ overflowX: 'hidden', width: '100%' }}
    >
      <div className="container container-1550">
        {/* Header Section */}
        <div className="row align-items-center mb-5" data-aos="fade-up">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
              WooCommerce Custom Development
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span style={{ color: '#053456' }}>Custom WooCommerce </span>
                solutions can include
              </h4>
            </div>
          </div>
        </div>

        {/* Grid Container with Pattern & Outer Border */}
        <div 
          className="rounded-3 border overflow-hidden" 
          style={{
            backgroundColor: '#ffffff',
            backgroundImage: `linear-gradient(#f0f4f8 1px, transparent 1px), linear-gradient(90deg, #f0f4f8 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
            borderColor: '#e2e8f0',
          }}
        >
          {/* 5-Column Responsive Grid */}
          <div className="row g-0 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
            {features.map((item, index) => (
              <div 
                key={item.id} 
                className="col"
                data-aos="fade-up" 
                data-aos-delay={(index % 5) * 100}
              >
                <div 
                  className="feature-box p-4 h-100 position-relative transition-all"
                  style={{
                    borderRight: '1px solid #e2e8f0',
                    borderBottom: '1px solid #e2e8f0',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(5, 52, 86, 0.08)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Top Green Accent Line (matching your image design) */}
                  <div 
                    style={{
                      width: '24px',
                      height: '3px',
                      backgroundColor: '#53ae7d',
                      borderRadius: '2px',
                      marginBottom: '16px',
                    }}
                  />

                  {/* Font Awesome Icon */}
                  <div className="mb-3 d-flex align-items-center" style={{ height: '36px' }}>
                    <i 
                      className={item.iconClass} 
                      style={{ color: '#053456', fontSize: '28px' }}
                    ></i>
                  </div>

                  {/* Title */}
                  <h6 className="fw-bold m-0" style={{ color: '#053456', fontSize: '0.95rem', lineHeight: '1.4',fontFamily: "Figtree, Figtree Fallback",
 }}>
                    {item.title}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}