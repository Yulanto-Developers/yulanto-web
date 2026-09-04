'use client';

import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Shirt,
  Gem,
  Tv,
  Sparkles,
  Utensils,
  Armchair,
  Factory,
  ShoppingBag,
  Rocket,
  Building2
} from 'lucide-react';

interface IndustryCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const industryCategories: IndustryCategory[] = [
  { id: 'fashion', label: 'Fashion & Apparel', icon: <Shirt size={18} /> },
  { id: 'jewellery', label: 'Jewellery & Accessories', icon: <Gem size={18} /> },
  { id: 'electronics', label: 'Electronics', icon: <Tv size={18} /> },
  { id: 'beauty', label: 'Beauty & Personal Care', icon: <Sparkles size={18} /> },
  { id: 'food', label: 'Food & Lifestyle Products', icon: <Utensils size={18} /> },
  { id: 'home', label: 'Home & Furniture', icon: <Armchair size={18} /> },
  { id: 'manufacturing', label: 'Manufacturing & Industrial Products', icon: <Factory size={18} /> },
  { id: 'b2c', label: 'B2C Ecommerce Businesses', icon: <ShoppingBag size={18} /> },
  { id: 'startups', label: 'Startups & New Brands', icon: <Rocket size={18} /> },
  { id: 'established', label: 'Established Businesses Expanding Online', icon: <Building2 size={18} /> }
];

export const ShopifyIndustriesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('beauty');
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110" style={{ background: 'transparent' }}>
      <style>{`
        .pill-tab-btn {
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .pill-tab-btn:hover {
          background-color: #ffffff !important;
          color: #0f172a !important;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05) !important;
          transform: translateY(-2px);
        }
      `}</style>

      <div className="container container-1550">
        
        {/* Section Heading */}
        <div className="row justify-content-center" data-aos="fade-up">
          <div className="col-xl-12 text-center mb-50">
            <h4 className="px-about-title mb-20">
              <span className="text-blue-about"> Shopify Development Services for </span> Different Businesses
            </h4>
            <p className="text-figtree text-black mt-2">
              Our Shopify web development company in Chennai works with businesses looking to establish or expand their ecommerce presence.
            </p>
            <h5 className="mb-3 fw-bold" style={{ fontFamily: '"Tenor Sans", "Tenor Sans Fallback"' }}>
              We can develop Shopify stores for:
            </h5>
          </div>
        </div>

        {/* Floating Capsule Tabs */}
        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <div className="col-12">
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '12px 10px',
                padding: '24px 16px',
                maxWidth: '1200px',
                margin: '0 auto'
              }}
            >
              {industryCategories.map((tab) => {
                const isActive = activeTab === tab.id;
                const isHovered = hoveredTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    onMouseEnter={() => setHoveredTab(tab.id)}
                    onMouseLeave={() => setHoveredTab(null)}
                    className="pill-tab-btn"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px 24px',
                      borderRadius: '16px',
                      border: 'none',
                      backgroundColor: isActive ? '#ffffff' : 'transparent',
                      color: isActive ? '#0f172a' : '#64748b',
                      fontWeight: isActive || isHovered ? 700 : 500,
                      fontSize: '15px',
                      fontFamily: '"Tenor Sans", sans-serif',
                      cursor: 'pointer',
                      boxShadow: isActive ? '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)' : 'none',
                      transform: isActive ? 'translateY(-2px)' : 'none'
                    }}
                  >
                    <span style={{ color: isActive || isHovered ? '#053456' : '#94a3b8' }}>
                      {tab.icon}
                    </span>
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ShopifyIndustriesSection;