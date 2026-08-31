"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "./dynamicwebdesign.css";

export interface FeatureItem {
    id: string;
    iconClass: string;
    accentClass: string;
    title: string;
    subtitle: string;
    colClass: string;
    isFeatured?: boolean;
    imageUrl: string; // New field for image background
    imageAlt?: string;
}

const defaultFeatures: FeatureItem[] = [
    // Large Hero Feature Block
    {
        id: "01",
        iconClass: "fa-solid fa-palette",
        accentClass: "cardsixdesg1-accent-primary",
        title: "Bespoke Branding",
        subtitle:
            "Create a memorable online identity with a website designed specifically for your business. Our team develops layouts, visual elements, typography, and branding components that communicate your company's personality and help differentiate your brand from competitors.",
        colClass: "col-lg-8 col-md-12",
        isFeatured: true,
        imageUrl: "/assets/images/ourstory/image-1.jpg",
        imageAlt: "Bespoke branding design",
    },
    // Compact Side Feature Block
    {
        id: "02",
        iconClass: "fa-solid fa-bullseye",
        accentClass: "cardsixdesg1-accent-secondary",
        title: "Tailored Landing Pages",
        subtitle:
            "We create customized landing pages designed around your marketing objectives, structured around your target audience to maximize conversion rates.",
        colClass: "col-lg-4 col-md-6",
        imageUrl: "/assets/images/ourstory/image-1.jpg",
        imageAlt: "Landing page design",
    },
    // Compact Feature Block
    {
        id: "03",
        iconClass: "fa-solid fa-sliders",
        accentClass: "cardsixdesg1-accent-secondary",
        title: "Customized Functionality",
        subtitle:
            "From enquiry forms, APIs, and customer portals to payment gateways and eCommerce, built around your business needs.",
        colClass: "col-lg-4 col-md-6",
        imageUrl: "/assets/images/ourstory/image-1.jpg",
        imageAlt: "Custom functionality",
    },
    // Large Featured SEO Block
    {
        id: "04",
        iconClass: "fa-solid fa-chart-line",
        accentClass: "cardsixdesg1-accent-primary",
        title: "Personalized SEO Attributes",
        subtitle:
            "A professionally developed website should also be search-engine friendly. We build websites with SEO-friendly structures, optimized page elements, clean code, responsive layouts, proper heading structures, metadata, and content organization to support your search visibility. Our website development in Chennai focuses on combining technical performance with SEO best practices from day one.",
        colClass: "col-lg-8 col-md-12",
        isFeatured: true,
        imageUrl: "/images/seo-bg.jpg",
        imageAlt: "SEO optimization",
    },
    // Split Equal Bottom Row Blocks
    {
        id: "05",
        iconClass: "fa-solid fa-mobile-screen-button",
        accentClass: "cardsixdesg1-accent-primary",
        title: "Responsive Development",
        subtitle:
            "Your customers access your site from smartphones, tablets, and desktops. We ensure smooth adaptation and flawless user experiences across all screen sizes.",
        colClass: "col-lg-6 col-md-6",
        imageUrl: "/images/responsive-bg.jpg",
        imageAlt: "Responsive development",
    },
    {
        id: "06",
        iconClass: "fa-solid fa-shield-halved",
        accentClass: "cardsixdesg1-accent-secondary",
        title: "Secure & Scalable Websites",
        subtitle:
            "Security and scalability are paramount for long-term growth. We follow enterprise-grade development practices that scale effortlessly alongside your expanding business.",
        colClass: "col-lg-6 col-md-6",
        imageUrl: "/images/security-bg.jpg",
        imageAlt: "Secure and scalable websites",
    },
];

interface CardSixDesg1Props {
    features?: FeatureItem[];
}

const Cardsixdesg1: React.FC<CardSixDesg1Props> = ({
    features = defaultFeatures,
}) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <section className="cardsixdesg1-mosaic-section py-3">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 text-center">
                        <div className="px-project-title-box">
                            <span
                                className="tp-section-subtitle text-black blink-ball mt-0"
                                style={{ lineHeight: "25px" }} data-aos="text-reveal"
                                data-aos-delay="100"
                            >
                                Exclusive Customized Website Development
                            </span>
                            <h4
                                className="px-about-title text-tenor"
                                data-aos="text-reveal"
                                data-aos-delay="100"
                            >
                                A Complete Web Solution <span className="text-blue-about"> for Your Business  </span>
                            </h4>

                            <p className="mb-4"
                                data-aos="text-reveal-lines"
                                data-aos-delay="200">
                                Need more than just a standard website? Our customized website development solutions help businesses establish a strong online presence with professionally designed branding, engaging landing pages, SEO-friendly structures, and business-specific functionalities.  From initial planning to development, testing, deployment, and maintenance, we provide an end-to-end website development solution.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mb-4">
                    {features.map((item, index) => (
                        <div
                            key={item.id}
                            className={item.colClass}
                            data-aos="fade-up"
                            data-aos-delay={100 + index * 50}
                        >
                            <div
                                className={`cardsixdesg1-mosaic-card ${item.isFeatured ? "cardsixdesg1-featured-card" : ""
                                    } ${item.accentClass}`}
                            >
                                {/* Image Background */}
                                <div className="cardsixdesg1-image-bg">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.imageAlt || item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        priority={index < 2}
                                        quality={90}
                                    />
                                </div>

                                {/* Overlay for readability */}
                                <div className="cardsixdesg1-card-overlay" />

                                {/* Content */}
                                <div className="cardsixdesg1-card-content">
                                    <div className="cardsixdesg1-card-topbar">
                                        <div className="cardsixdesg1-icon-glow">
                                            <i className={item.iconClass}></i>
                                        </div>
                                        <span className="cardsixdesg1-index-num">{item.id}</span>
                                    </div>

                                    <div className="cardsixdesg1-card-body">
                                        <h3 className="cardsixdesg1-card-title">
                                            {item.title}
                                        </h3>
                                        <p className="cardsixdesg1-card-desc">{item.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cardsixdesg1;