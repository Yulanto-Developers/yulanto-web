'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface FeatureItem {
  id: number;
  title: string;
  desc: string;
  imageSrc: string;
  rotation: string;
  floatAnimation: string;
}

const shopifyFeaturesData: FeatureItem[] = [
  {
    id: 1,
    title: 'User-Friendly Store Management',
    desc: 'Shopify offers an intuitive interface that allows business owners to manage products, collections, orders, customers, and other essential store functions.',
    imageSrc: '/images/shopify-development-banner.jpg',
    rotation: '-4deg',
    floatAnimation: 'floatSlow 4s ease-in-out infinite'
  },
  {
    id: 2,
    title: 'Inventory Management',
    desc: 'Track products, stock levels, variants, and collections efficiently while keeping your ecommerce catalog organized.',
    imageSrc: '/images/shopify-development-banner.jpg',
    rotation: '3deg',
    floatAnimation: 'floatSlow 5s ease-in-out infinite 0.5s'
  },
  {
    id: 3,
    title: 'Order Management',
    desc: 'Manage customer orders, payment status, fulfillment, shipping, and notifications from a centralized platform.',
    imageSrc: '/images/shopify-development-banner.jpg',
    rotation: '-3deg',
    floatAnimation: 'floatSlow 4.5s ease-in-out infinite 1s'
  },
  {
    id: 4,
    title: 'SEO-Friendly Features',
    desc: 'Shopify provides features that support ecommerce SEO, including customizable page titles, meta descriptions, URLs, image optimization, and sitemap generation.',
    imageSrc: '/images/shopify-development-banner.jpg',
    rotation: '4deg',
    floatAnimation: 'floatSlow 4.2s ease-in-out infinite 0.2s'
  },
  {
    id: 5,
    title: 'Multiple Payment Options',
    desc: 'Integrate suitable payment gateways and payment solutions based on your business location, target customers, and ecommerce requirements.',
    imageSrc: '/images/shopify-development-banner.jpg',
    rotation: '-2deg',
    floatAnimation: 'floatSlow 4.8s ease-in-out infinite 0.7s'
  },
  {
    id: 6,
    title: 'Mobile-Friendly Shopping',
    desc: 'Provide customers with a smooth shopping experience across mobile devices, tablets, and desktops.',
    imageSrc: '/images/shopify-development-banner.jpg',
    rotation: '3deg',
    floatAnimation: 'floatSlow 4.4s ease-in-out infinite 0.4s'
  },
  {
    id: 7,
    title: 'Scalable Ecommerce Platform',
    desc: 'Shopify can support businesses from startups and small businesses to growing ecommerce brands and larger online stores.',
    imageSrc: '/images/shopify-development-banner.jpg',
    rotation: '-3deg',
    floatAnimation: 'floatSlow 4.6s ease-in-out infinite 0.9s'
  }
];

export const ShopifyKeyFeatures: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      className="px-about-6-area pt-50 pb-80 pb-lg-110"
      style={{
        overflow: 'hidden',
        background: 'transparent'
      }}
    >
      {/* Keyframe animation for float and Polaroid hover effect */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(var(--card-rotate)); }
          50% { transform: translateY(-10px) rotate(var(--card-rotate)); }
        }
        .polaroid-card:hover {
          transform: translateY(-14px) scale(1.03) rotate(0deg) !important;
          z-index: 20;
          box-shadow: 0 25px 35px rgba(0, 0, 0, 0.25) !important;
        }
      `}</style>

      <div className="container container-1550">
        {/* Heading Section */}
        <div className="row align-items-center" data-aos="fade-up" style={{ marginBottom: '60px' }}>
          
          <div className="col-xl-12" data-aos="fade-left" data-aos-delay="200">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20 text-center">
                <span className="text-blue-about" style={{ color: '#053456' }}>
                  Key Shopify Features{' '}
                </span>
                for Your Ecommerce Business
              </h4>
              <p className="text-figtree text-black mt-2 text-center" >
                Shopify provides a comprehensive set of features that make managing an online store easier and more efficient.
              </p>
            </div>
          </div>
        </div>

        {/* Polaroid Cards Grid Matching Uploaded Design */}
        <div
          className="row mt-50"
          data-aos="fade-up"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '45px 30px',
            paddingTop: '20px'
          }}
        >
          {shopifyFeaturesData.map((item, index) => (
            <div
              key={item.id}
              className="col-xl-4 col-lg-6 col-md-6 mb-30"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
              style={{
                flex: '0 0 calc(33.333% - 30px)',
                minWidth: '300px',
                maxWidth: '380px'
              }}
            >
              <div
                className="px-feature-item polaroid-card"
                style={{
                  '--card-rotate': item.rotation,
                  animation: item.floatAnimation,
                  transform: `rotate(${item.rotation})`,
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  padding: '16px 16px 24px 16px',
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.18)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  border: '1px solid #f1f5f9'
                } as React.CSSProperties}
              >
                {/* Polaroid Top Image Container */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '210px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    marginBottom: '20px'
                  }}
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                </div>

                {/* Polaroid Text Area */}
                <div style={{ padding: '0 4px' }}>
                  <h5
                    className="px-feature-title"
                    style={{
                      fontSize: '1.2rem',
                      fontFamily: '"Tenor Sans", "Tenor Sans Fallback"',
                      fontWeight: 700,
                      color: '#0f172a',
                      marginBottom: '10px',
                      lineHeight: '1.3'
                    }}
                  >
                    {item.title}
                  </h5>

                  <span
                    className="text-figtree mt-2"
                    style={{
                      fontSize: '14px !important',
                      color: '#64748b',
                      lineHeight: '1.6',
                      margin: 0
                    }}
                  >
                    {item.desc}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyKeyFeatures;