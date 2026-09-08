'use client';

import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";  

import {
  ShoppingBag,
  Palette,
  Sliders,
  Code2,
  RefreshCw,
  Layers,
  Puzzle,
  Webhook,
  CreditCard,
  Truck,
  Search,
  Smartphone,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const COLORS = {
  primaryBlue: '#053456',
  accentGreen: '#53ae7d',
  bgLight: '#f8fafc',
  white: '#ffffff',
  textDark: '#1e293b',
  textMuted: '#475569',
  borderLight: '#e2e8f0',
};

const servicesData = [
  { id: 1, title: 'Shopify Store Setup & Configuration', icon: <ShoppingBag size={22} color="#ffffff" />, iconBg: COLORS.primaryBlue },
  { id: 2, title: 'Shopify Website Design & Development', icon: <Palette size={22} color="#ffffff" />, iconBg: COLORS.accentGreen },
  { id: 3, title: 'Shopify Theme Customization', icon: <Sliders size={22} color="#ffffff" />, iconBg: COLORS.primaryBlue },
  { id: 4, title: 'Custom Shopify Development', icon: <Code2 size={22} color="#ffffff" />, iconBg: COLORS.accentGreen },
  { id: 5, title: 'Shopify Store Redesign', icon: <RefreshCw size={22} color="#ffffff" />, iconBg: COLORS.primaryBlue },
  { id: 6, title: 'Shopify Product & Collection Setup', icon: <Layers size={22} color="#ffffff" />, iconBg: COLORS.accentGreen },
  { id: 7, title: 'Shopify App Integration', icon: <Puzzle size={22} color="#ffffff" />, iconBg: COLORS.primaryBlue },
  { id: 8, title: 'Third-Party API Integration', icon: <Webhook size={22} color="#ffffff" />, iconBg: COLORS.accentGreen },
  { id: 9, title: 'Payment Gateway Integration', icon: <CreditCard size={22} color="#ffffff" />, iconBg: COLORS.primaryBlue },
  { id: 10, title: 'Shipping & Delivery Integration', icon: <Truck size={22} color="#ffffff" />, iconBg: COLORS.accentGreen },
  { id: 11, title: 'Shopify SEO Optimization', icon: <Search size={22} color="#ffffff" />, iconBg: COLORS.primaryBlue },
  { id: 12, title: 'Mobile-Responsive Shopify Development', icon: <Smartphone size={22} color="#ffffff" />, iconBg: COLORS.accentGreen },
  { id: 13, title: 'Shopify Speed & Performance Optimization', icon: <Zap size={22} color="#ffffff" />, iconBg: COLORS.primaryBlue },
  { id: 14, title: 'Shopify Store Maintenance & Support', icon: <ShieldCheck size={22} color="#ffffff" />, iconBg: COLORS.accentGreen },
];

const highlightsData = [
  {
    title: 'Easy Navigation',
    desc: 'We create clear menus, product categories, filters, and intuitive layouts that help customers quickly find what they are looking for.',
  },
  {
    title: 'Responsive Design',
    desc: 'Your Shopify store is designed to work smoothly across desktops, tablets, and smartphones, providing a consistent shopping experience.',
  },
  {
    title: 'Attractive Product Presentation',
    desc: 'We organize products with engaging layouts, detailed product information, high-quality images, collections, and effective calls to action.',
  },
  {
    title: 'Smooth Checkout Experience',
    desc: 'We help simplify the purchasing process by integrating suitable payment, shipping, and ecommerce features.',
  },
  {
    title: 'SEO-Friendly Structure',
    desc: 'Our Shopify website development approach considers search-friendly page structures, metadata, URLs, image optimization, and other essential SEO elements.',
  },
];

export const ShopifyDigitalCraft = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <section className="px-about-6-area pt-50 pb-80 pb-lg-110 overflow-hidden">
        <div className="container container-1550">
          <div style={{ textAlign: 'center', marginBottom: '48px' }} data-aos="fade-up">
            <h4 className="px-about-title mb-20">
              <span className="text-blue-about">Shopify Website </span>Development Services
            </h4>
            <p className="text-figtree text-black mt-2">
              Our Shopify development services cover everything required to build and maintain a successful ecommerce website.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {servicesData.map((item, index) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={(index % 4) * 100}
                style={{
                  padding: '24px',
                  borderRadius: '12px',
                  backgroundColor: COLORS.white,
                  border: `1px solid ${COLORS.borderLight}`,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  transition: 'box-shadow 0.3s ease',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: item.iconBg,
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                  }}
                >
                  {item.icon}
                </div>
                <span
                  style={{
                    fontSize: '15px !important',
                    fontWeight: 600,
                    fontFamily: '"Tenor Sans", "Tenor Sans Fallback"',
                    color: COLORS.textDark,
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};