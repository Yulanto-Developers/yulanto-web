'use client';

import React from 'react';
import {
    Compass,
    Smartphone,
    LayoutGrid,
    CreditCard,
    Search
} from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

interface HighlightItem {
    id: number;
    title: string;
    desc: string;
    icon: React.ReactNode;
    badgeBg: string;
    badgeBorder: string;
    glowColor: string;
    rotation: string;
    floatAnimation: string;
}

const highlightsData: HighlightItem[] = [
    {
        id: 1,
        title: 'Easy Navigation',
        desc: 'We create clear menus, product categories, filters, and intuitive layouts that help customers quickly find what they are looking for.',
        icon: <Compass size={22} color="#ffffff" />,
        badgeBg: '#4facfe',
        badgeBorder: '#00f2fe',
        glowColor: 'rgba(236, 72, 153, 0.25)',
        rotation: '-4deg',
        floatAnimation: 'floatSlow 4s ease-in-out infinite'
    },
    {
        id: 2,
        title: 'Responsive Design',
        desc: 'Your Shopify store is designed to work smoothly across desktops, tablets, and smartphones, providing a consistent shopping experience.',
        icon: <Smartphone size={22} color="#ffffff" />,
        badgeBg: '#a8ff78',
        badgeBorder: '#78ffd6',
        glowColor: 'rgba(168, 85, 247, 0.25)',
        rotation: '3deg',
        floatAnimation: 'floatSlow 5s ease-in-out infinite 0.5s'
    },
    {
        id: 3,
        title: 'Attractive Product Presentation',
        desc: 'We organize products with engaging layouts, detailed product information, high-quality images, collections, and effective calls to action.',
        icon: <LayoutGrid size={22} color="#ffffff" />,
        badgeBg: '#ff758c',
        badgeBorder: '#ff7eb3',
        glowColor: 'rgba(234, 179, 8, 0.25)',
        rotation: '-3deg',
        floatAnimation: 'floatSlow 4.5s ease-in-out infinite 1s'
    },
    {
        id: 4,
        title: 'Smooth Checkout Experience',
        desc: 'We help simplify the purchasing process by integrating suitable payment, shipping, and ecommerce features.',
        icon: <CreditCard size={22} color="#ffffff" />,
        badgeBg: '#ffb199',
        badgeBorder: '#ff0844',
        glowColor: 'rgba(59, 130, 246, 0.25)',
        rotation: '4deg',
        floatAnimation: 'floatSlow 4.2s ease-in-out infinite 0.2s'
    },
    {
        id: 5,
        title: 'SEO-Friendly Structure',
        desc: 'Our Shopify website development approach considers search-friendly page structures, metadata, URLs, image optimization, and other essential SEO elements.',
        icon: <Search size={22} color="#ffffff" />,
        badgeBg: '#7f7fd5',
        badgeBorder: '#86a8e7',
        glowColor: 'rgba(34, 197, 94, 0.25)',
        rotation: '-2deg',
        floatAnimation: 'floatSlow 4.8s ease-in-out infinite 0.7s'
    },
];

export const ShopifyHighlights: React.FC = () => {
    return (
        <section
            className="px-about-6-area pt-50 pb-80 pb-lg-110"
            style={{

                overflow: 'hidden',
                backgroundColor: "#ffffff",
            }}
        >
            {/* Keyframe animation for float effect */}
            <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(var(--card-rotate)); }
          50% { transform: translateY(-10px) rotate(var(--card-rotate)); }
        }
        .rotated-card:hover {
          transform: translateY(-12px) scale(1.02) rotate(0deg) !important;
          z-index: 10;
          box-shadow: 0 20px 30px rgba(0, 0, 0, 0.4) !important;
        }
      `}</style>

            <div className="container container-1550" >

                {/* Heading Section */}
                <div className="row align-items-center" data-aos="fade-up" style={{ marginBottom: '60px' }}>
                  

                    <div className="col-xl-12" data-aos="fade-left" data-aos-delay="200">
                        <div className="px-project-title-box">
                            <h4 className="px-about-title mb-20 text-center" >
                                <span className="text-blue-about">Stand Out with Professional</span>
                                Shopify Development
                            </h4>
                            <p className="text-figtree text-black mt-2 text-center">
                                A successful ecommerce website needs more than attractive visuals. It should provide customers with a smooth journey from product discovery to checkout.              </p>
                        </div>
                    </div>
                </div>

                {/* Floating Rotated Cards Grid */}
                <div
                    className="row mt-50"
                    data-aos="fade-up"
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '40px 30px',
                        paddingTop: '20px'
                    }}
                >
                    {highlightsData.map((item, index) => (
                        <div
                            key={item.id}
                            className="col-xl-4 col-lg-6 col-md-6 mb-30"
                            data-aos="fade-up"
                            data-aos-delay={100 * (index + 1)}
                            style={{
                                flex: '0 0 calc(33.333% - 30px)',
                                minWidth: '300px',
                                maxWidth: '400px'
                            }}
                        >
                            <div
                                className="px-feature-item rotated-card"
                                style={{
                                    '--card-rotate': item.rotation,
                                    animation: item.floatAnimation,
                                    transform: `rotate(${item.rotation})`,
                                    backgroundColor: '#ffffff',
                                    color: '#1e293b',
                                    borderRadius: '16px',
                                    padding: '40px 28px 28px 28px',
                                    position: 'relative',
                                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25)',
                                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    marginTop: '25px'
                                } as React.CSSProperties}
                            >
                                {/* Top Center Dashed Badge Icon */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '-28px',
                                        left: '15%',
                                        transform: 'translateX(-50%)',
                                        width: '56px',
                                        height: '56px',
                                        borderRadius: '50%',
                                        backgroundColor: item.badgeBg,
                                        border: `3px dashed ${item.badgeBorder}`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                                    }}
                                >
                                    {item.icon}
                                </div>

                                {/* Corner Gradient Glow */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: '0',
                                        right: '0',
                                        width: '100px',
                                        height: '100px',
                                        background: `radial-gradient(circle at bottom right, ${item.glowColor}, transparent 70%)`,
                                        borderBottomRightRadius: '16px',
                                        pointerEvents: 'none'
                                    }}
                                />

                                {/* Content */}
                                <h5
                                    className="px-feature-title"
                                    style={{
                                        fontSize: '1.25rem',
                                        fontFamily: '"Tenor Sans", "Tenor Sans Fallback"' ,
                                        fontWeight: 700,
                                        color: '#0f172a',
                                        marginBottom: '12px',
                                        marginTop: '8px'
                                    }}
                                >
                                    {item.title}
                                </h5>
                                <span
                                    className="text-figtree text-black mt-2"
                                    style={{
                                        fontSize: '15px !important',
                                        fontFamily: "Figtree, Figtree Fallback",
                                        color: '#475569',
                                        lineHeight: '1.6',
                                        margin: 0
                                    }}
                                >
                                    {item.desc}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ShopifyHighlights;