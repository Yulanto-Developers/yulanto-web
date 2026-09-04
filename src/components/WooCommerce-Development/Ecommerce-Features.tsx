'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface StoreFeature {
  id: number;
  title: string;
  description: string;
  iconClass: string;
}

const storeFeatures: StoreFeature[] = [
  {
    id: 1,
    title: 'Customer Accounts',
    description: 'Allow customers to register, manage their profiles, save addresses, view previous orders, and track their purchases.',
    iconClass: 'fa-solid fa-user-gear',
  },
  {
    id: 2,
    title: 'Product Catalogue',
    description: 'Display products with images, descriptions, pricing, specifications, variations, availability, and related products.',
    iconClass: 'fa-solid fa-boxes-stacked',
  },
  {
    id: 3,
    title: 'Search & Product Filters',
    description: 'Help visitors quickly find products using search, categories, brands, attributes, price ranges, ratings, and other filtering options.',
   iconClass: 'fa-solid fa-chart-line',
  },
  {
    id: 4,
    title: 'Product Reviews & Ratings',
    description: 'Enable customers to share feedback and ratings, helping new visitors make informed purchasing decisions.',
    iconClass: 'fa-solid fa-star-half-stroke',
  },
  {
    id: 5,
    title: 'Shopping Cart',
    description: 'Provide a simple shopping cart where customers can add products, change quantities, remove items, and review their order before checkout.',
    iconClass: 'fa-solid fa-cart-shopping',
  },
  {
    id: 6,
    title: 'Secure Checkout',
    description: 'Create a streamlined checkout experience with guest checkout, customer accounts, billing information, shipping details, coupons, and multiple payment options.',
    iconClass: 'fa-solid fa-user-shield',
  },
  {
    id: 7,
    title: 'Payment Gateway Integration',
    description: 'Integrate popular payment gateways such as Razorpay, Stripe, PayPal, and other suitable payment solutions based on your business requirements.',
    iconClass: 'fa-solid fa-credit-card',
  },
  {
    id: 8,
    title: 'Order Management',
    description: 'Manage customer orders, payment status, fulfilment, cancellations, returns, and order tracking from the WooCommerce dashboard.',
    iconClass: 'fa-solid fa-receipt',
  },
  {
    id: 9,
    title: 'Inventory Management',
    description: 'Monitor product stock levels and manage inventory directly through the WooCommerce administration panel.',
    iconClass: 'fa-solid fa-warehouse',
  },
  {
    id: 10,
    title: 'Shipping & Delivery',
    description: 'Configure shipping zones, delivery charges, shipping methods, location-based rules, and tracking integrations.',
    iconClass: 'fa-solid fa-truck-ramp-box',
  },
  {
    id: 11,
    title: 'Discounts & Promotions',
    description: 'Create coupons, promotional offers, discounts, seasonal campaigns, and other sales incentives to encourage purchases.',
    iconClass: 'fa-solid fa-percent',
  },
  {
    id: 12,
    title: 'Analytics & Reporting',
    description: 'Monitor sales, orders, customer activity, product performance, and other important ecommerce metrics to support business decisions.',
    iconClass: 'fa-solid fa-chart-line',
  },
];

export default function WooCommerceStoreCapabilities(): React.ReactElement {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section 
      className="px-store-features-area pt-80 pb-100" 
      style={{ overflowX: 'hidden',backgroundColor: '#fff' }}
    >
      <div className="container container-1550">
        {/* Header Section */}
        <div className="row align-items-center mb-5" data-aos="fade-up">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
              Essential WooCommerce Ecommerce Features
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span style={{ color: '#053456' }}> Everything Your Online </span>
               Store Needs
              </h4>
              <p className="text-figtree text-black mt-2">
                We develop WooCommerce websites with practical features that improve usability and help customers complete their purchases efficiently.
              </p>
            </div>
          </div>
        </div>

        {/* 2-Column Split Feature List Design */}
        <div className="row g-4">
          {storeFeatures.map((item, index) => (
            <div 
              key={item.id} 
              className="col-lg-6" 
              data-aos="fade-up" 
              data-aos-delay={(index % 2) * 150}
            >
              <div 
                className="d-flex align-items-start p-4 h-100 rounded-3 bg-white"
                style={{
                  borderLeft: '4px solid #053456',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 25px rgba(5, 52, 86, 0.1)';
                  e.currentTarget.style.borderLeftColor = '#53ae7d';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.03)';
                  e.currentTarget.style.borderLeftColor = '#053456';
                }}
              >
                {/* Icon Column */}
                <div 
                  className="me-4 d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"
                  style={{
                    width: '56px',
                    height: '56px',
                    backgroundColor: 'rgba(5, 52, 86, 0.06)',
                  }}
                >
                  <i className={item.iconClass} style={{ color: '#053456', fontSize: '24px' }}></i>
                </div>

                {/* Content Column */}
                <div>
                        <h6 className="fw-bold mb-2" style={{ color: '#053456', fontSize: '1.1rem', fontFamily: '"Tenor Sans", "Tenor Sans Fallback"', lineHeight: '1.4' }}>
                    {item.title}
                  </h6>
                  <p className="m-0" style={{ color: '#4a5568', fontSize: '15px !important', fontFamily: "Figtree, Figtree Fallback",lineHeight: '1.6' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}