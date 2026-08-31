'use client';

import React, { useEffect, useState } from 'react'
import BreadcurmbData from '@/components/breadcrum/sections/breadcrumbdata'
import IntroContent from '../myComponents/common/IntroContent';
import img from '@/assets/img/sample/Harithams.jpg';
import SafariContentTabs from './SafariContentTabs';
import './RedesignBenefitCard.css'
import RedesignBenefitCard from './RedesignBenefitCard';
import ReFaq from './Refaq';
import ImageGallery from '../myComponents/common/carousel-circular-image-gallery';
import {
    FaPalette,
    FaBrush,
    FaCompass,
    FaMobileScreenButton,
    FaGaugeHigh,
    FaMagnifyingGlassChart,
    FaFileLines,
    FaArrowTrendUp,
    FaShieldHalved,
    FaPuzzlePiece,
    FaBullseye,
} from "react-icons/fa6";

import {
    FaUserGroup,
    FaLayerGroup,
    FaWandMagicSparkles,

    FaLightbulb,

    FaUserCheck,
} from "react-icons/fa6";
import {

    FaBuilding,

    FaUserPlus,
    FaPenToSquare,

} from "react-icons/fa6";
import { useAOS } from "@/components/hooks/useAOS";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FAQA1 } from '../website-development/components'

function Websiteredesign() {

    /* =====================================================
       ROUND SWIPER STATE
    ===================================================== */

    const [activeRoundIndex, setActiveRoundIndex] = useState(0);


    /* =====================================================
       STATS
    ===================================================== */

    const stats = [
        { value: '75+', label: 'Websites' },
        { value: '70+', label: 'Happy Clients' },
        { value: '60+', label: 'Chennai Clients' },
        { value: '100%', label: 'Client Satisfaction' },
    ];


    /* =====================================================
       SAFARI CONTENT
    ===================================================== */

    const redesignServices = [
        {
            title1: "Website",
            title2: "Revamp",
            description:
                "A website revamp can involve anything from improving individual sections to completely rebuilding the website architecture. Our website revamp in Chennai services are suitable for businesses that want to modernize their existing website without necessarily starting from scratch.",
            points: [
                "Modern layouts, typography, visual hierarchy, colors, images, and interactive elements.",
                "Simple menus, improved page structures, intuitive navigation, and better user journeys.",
                "Responsive designs that work smoothly across smartphones, tablets, laptops, and desktops.",
                "Better organization and presentation of website content to make information easier to understand.",
                "Optimization of images, scripts, page structure, and other elements that can affect website speed.",
                "SEO-friendly page layouts, headings, internal linking, content structure, metadata, and technical considerations.",
            ],
        },
        {
            title1: "Small Business",
            title2: "Website Redesign",
            description:
                "Small businesses need a website that works as a powerful marketing and lead-generation tool. Our small business website redesign in Chennai solutions help startups, local businesses, professionals, and growing companies establish a stronger online presence.",
            points: [
                "Professional and modern",
                "Easy to manage",
                "Mobile-friendly",
                "SEO-ready",
                "Fast-loading",
                "Customer-focused",
                "Lead-generation oriented",
                "Aligned with your brand identity",
            ],
        },
    ];


    /* =====================================================
       REDESIGN BENEFITS
    ===================================================== */

    const redesignBenefits = [
        {
            title: "01. Website Audit",
            description:
                "We evaluate your current website, including design, content, navigation, responsiveness, performance, SEO structure, and overall user experience.",
            image: img.src,
            icon: (
                /* Search / Audit Icon */
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                </svg>
            ),
        },
        {
            title: "02. Redesign Strategy",
            description:
                "We identify improvement areas and develop a redesign strategy based on your business objectives, target audience, competitors, and existing website performance.",
            image: img.src,
            icon: (
                /* Strategy / Target Icon */
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                </svg>
            ),
        },
        {
            title: "03. UI/UX Design",
            description:
                "Our designers create modern page layouts that improve visual appeal, usability, readability, and user engagement.",
            image: img.src,
            icon: (
                /* Layout / Palette / Design Icon */
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                </svg>
            ),
        },
        {
            title: "04. Responsive Development",
            description:
                "The redesigned website is developed to provide a consistent experience across desktops, tablets, and mobile devices.",
            image: img.src,
            icon: (
                /* Desktop / Mobile Devices Icon */
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect width="14" height="10" x="5" y="2" rx="2" />
                    <rect width="8" height="6" x="8" y="16" rx="1" />
                    <path d="M12 12v4" />
                </svg>
            ),
        },
        {
            title: "05. SEO-Friendly Implementation",
            description:
                "We maintain important SEO elements while improving page structure, headings, content organization, internal linking, and technical foundations.",
            image: img.src,
            icon: (
                /* Search Check / SEO Icon */
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m9 11 2 2 4-4" />
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                </svg>
            ),
        },
        {
            title: "06. Testing & Optimization",
            description:
                "Before launch, we test the redesigned website for responsiveness, functionality, usability, speed, forms, links, and major browsers.",
            image: img.src,
            icon: (
                /* Checklist / Testing Icon */
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
                    <path d="m9 14 2 2 4-4" />
                </svg>
            ),
        },
        {
            title: "07. Launch & Support",
            description:
                "After final approval, we publish the redesigned website and provide ongoing support to help you maintain and improve your online presence.",
            image: img.src,
            icon: (
                /* Rocket / Launch Icon */
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
            ),
        },
    ];


    const aiRedesignBenefits = [
        {
            text: "Understanding user behavior and website journeys",
            icon: <FaUserGroup />,
        },
        {
            text: "Content structure and presentation",
            icon: <FaLayerGroup />,
        },
        {
            text: "Personalized user experiences",
            icon: <FaWandMagicSparkles />,
        },
        {
            text: "Conversion-focused layouts",
            icon: <FaArrowTrendUp />,
        },
        {
            text: "Design and content recommendations",
            icon: <FaLightbulb />,
        },
        {
            text: "Website performance analysis",
            icon: <FaGaugeHigh />,
        },
        {
            text: "SEO content optimization",
            icon: <FaMagnifyingGlassChart />,
        },
        {
            text: "Improving calls-to-action",
            icon: <FaBullseye />,
        },
        {
            text: "Identifying potential UX improvements",
            icon: <FaUserCheck />,
        },
    ];

    /* =====================================================
       QUOTATION BENEFITS
    ===================================================== */

    const quotationBenefits = [
        {
            title: "Real Estate Companies",
            icon: "fa-pen-ruler",
            bgImage: img
        },
        {
            title: "Builders & Architects",
            icon: "fa-puzzle-piece",
            bgImage: img
        },
        {
            title: "Responsive Design",
            icon: "fa-mobile-screen-button",
            bgImage: img
        },
        {
            title: "Interior Design Companies",
            icon: "fa-gauge-high",
            bgImage: img
        },
        {
            title: "Manufacturing Businesses",
            icon: "fa-gauge-high",
            bgImage: img
        },
        {
            title: "Industrial Companies",
            icon: "fa-gauge-high",
            bgImage: img
        },
        {
            title: "Educational Institutions",
            icon: "fa-gauge-high",
            bgImage: img
        },
        {
            title: "Healthcare Businesses",
            icon: "fa-gauge-high",
            bgImage: img
        },
        {
            title: "Hospitality Businesses",
            icon: "fa-gauge-high",
            bgImage: img
        },
        {
            title: "Travel Companies",
            icon: "fa-gauge-high",
            bgImage: img
        },
        {
            title: "Professional Services",
            icon: "fa-gauge-high",
            bgImage: img
        },
        {
            title: "Startups",
            icon: "fa-gauge-high",
            bgImage: img
        },
        {
            title: "E-commerce Businesses",
            icon: "fa-gauge-high",
            bgImage: img
        },
        {
            title: "Small Businesses",
            icon: "fa-gauge-high",
            bgImage: img
        },
        {
            title: "Corporate Companies",
            icon: "fa-gauge-high",
            bgImage: img
        },
    ];

    const galleryImages = [
        {
            title: 'Website Design',
            url: img.src,
        },
        {
            title: 'Web Development',
            url: img.src,
        },
        {
            title: 'UI UX Design',
            url: img.src,
        },
        {
            title: 'Responsive Design',
            url: img.src,
        },
        {
            title: 'SEO Optimization',
            url: img.src,
        },
    ];


    const corporate = [
        {
            text: "Professional and modern visual design",
            icon: <FaPalette />,
        },
        {
            text: "Website appearance and visual identity",
            icon: <FaBrush />,
        },
        {
            text: "UI/UX and user navigation",
            icon: <FaCompass />,
        },
        {
            text: "Mobile responsiveness",
            icon: <FaMobileScreenButton />,
        },
        {
            text: "Website speed and performance",
            icon: <FaGaugeHigh />,
        },
        {
            text: "SEO-friendly structure",
            icon: <FaMagnifyingGlassChart />,
        },
        {
            text: "Content presentation",
            icon: <FaFileLines />,
        },
        {
            text: "Conversion-focused layouts",
            icon: <FaArrowTrendUp />,
        },
        {
            text: "Security and functionality",
            icon: <FaShieldHalved />,
        },
        {
            text: "Third-party integrations",
            icon: <FaPuzzlePiece />,
        },
        {
            text: "Calls-to-action and lead generation",
            icon: <FaBullseye />,
        },
    ];


    const websiteRedesignBenefits = [
        {
            number: "01",
            title: "Better User Experience",
            description:
                "Improve navigation, page structure, readability, and interactions so visitors can quickly find the information they need.",
            icon: <FaUserCheck />,
        },
        {
            number: "02",
            title: "Modern Brand Image",
            description:
                "A contemporary website design can help your business create a stronger first impression and communicate professionalism.",
            icon: <FaBuilding />,
        },
        {
            number: "03",
            title: "Mobile-Friendly Experience",
            description:
                "Deliver a consistent browsing experience across smartphones, tablets, laptops, and desktop computers.",
            icon: <FaMobileScreenButton />,
        },
        {
            number: "04",
            title: "Improved Website Performance",
            description:
                "Optimize website elements to help improve loading speed, usability, and overall performance.",
            icon: <FaGaugeHigh />,
        },
        {
            number: "05",
            title: "SEO-Friendly Website Structure",
            description:
                "Improve website architecture, content hierarchy, headings, internal links, and other important SEO elements.",
            icon: <FaMagnifyingGlassChart />,
        },
        {
            number: "06",
            title: "Better Lead Generation",
            description:
                "Strategically positioned contact forms, enquiry buttons, service pages, and calls-to-action can help convert more visitors into potential customers.",
            icon: <FaUserPlus />,
        },
        {
            number: "07",
            title: "Easy Content Management",
            description:
                "Simplify the website structure and improve content management so your team can update important information more efficiently.",
            icon: <FaPenToSquare />,
        },
        {
            number: "08",
            title: "New Features & Integrations",
            description:
                "Add modern functionality such as payment gateways, CRM integrations, WhatsApp, chat systems, analytics, and marketing tools.",
            icon: <FaPuzzlePiece />,
        },
    ];

    const NewgalleryImages = [
        {
            src: img.src,
            alt: "Corporate website design",
            className: "gallery-main",
        },
        {
            src: img.src,
            alt: "Corporate website development",
            className: "gallery-small gallery-small-one",
        },
        {
            src: img.src,
            alt: "Corporate website",
            className: "gallery-small gallery-small-two",
        },
    ];

    /* =====================================================
       ROUND SWIPER AUTO PLAY
    ===================================================== */

    useEffect(() => {

        const timer = setInterval(() => {

            setActiveRoundIndex((current) => {

                return (
                    (current + 1) %
                    quotationBenefits.length
                );

            });

        }, 3500);

        return () => {
            clearInterval(timer);
        };

    }, [quotationBenefits.length]);
    // Alternatively, structured as Question & Answer object pairs:


    /* =====================================================
       RETURN
    ===================================================== */
    useAOS();
    return (
        <>

            {/* =================================================
                BREADCRUMB
            ================================================= */}

            <BreadcurmbData />


            {/* =================================================
                INTRO
            ================================================= */}

            <IntroContent
                leftTitle={'Modern Website Revamp'}
                rightTitle1={'Transform Your Existing Website'}
                rightTitle2={' with a Modern, High-Performance Design'}
                description={
                    'Is your website outdated, slow, difficult to navigate, or no longer delivering the results you expect? Our website redesign services in Chennai help businesses transform existing websites into modern, responsive, user-friendly, and conversion-focused digital experiences.'
                }
                css='mt-5'
            />

            <ImageGallery images={galleryImages} />
            {/* =================================================
                WEBSITE REDESIGN INTRO
            ================================================= */}
            <div data-aos='fade-up' data-aos-delay={400} data-aos-once={true}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p> At Yulanto Web Creations, we combine creative UI/UX design, modern web technologies, responsive layouts, performance optimization, and SEO-friendly structures to give your existing website a complete digital makeover.
                                Whether you need a simple website revamp in Chennai, a complete redesign, or an AI website redesign in Chennai, our team creates a website that looks modern, performs better, and supports your business goals.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div data-aos='fade-down' data-aos-delay={400} data-aos-once={true}>
                <div className='container mb-4 mt-30'>

                    <div className='row align-items-center'>

                        <div className='col-12'>
                            <span className="tp-section-subtitle text-black blink-ball">
                                Refresh Your Online Presence
                            </span>
                            <h4 className="px-about-title mb-20">

                                <span className="text-blue-about">
                                    Give Your Old Website {" "}
                                </span>

                                a Fresh, Modern Look

                            </h4>

                        </div>


                        <div className='col-md-7'>

                            <p className='text-figtree'>

                                Your website is often the first interaction customers have with your business. An outdated design can affect credibility, user engagement, search visibility, and conversions.

                            </p>
                            <div className="corporate-features">
                                {corporate.map((item) => (
                                    <div key={item.text} className="corporate-feature">
                                        <div className="corporate-feature-icon">{item.icon}</div>

                                        <div className="corporate-feature-content">
                                            <span>{item.text}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>


                        </div>



                        <div className='col-md-5'>

                            <div className='stats-glass-card'>

                                <div className='stats-glow-bg' />

                                <div className='stats-badge-tag'>
                                    Startup Website Design
                                </div>


                                <div className='stats-grid-wrapper'>

                                    {stats.map((item, index) => (

                                        <div
                                            key={index}
                                            className='stat-box-item'
                                        >

                                            <div className='stat-value-num'>
                                                {item.value}
                                            </div>

                                            <div className='stat-label-text'>
                                                {item.label}
                                            </div>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </div>

                        <div className="col-12 mt-1">
                            <p>We don't simply change the colors and layout. We analyze your existing website, identify opportunities for improvement, and develop a redesign strategy that delivers a better overall digital experience.</p>
                        </div>
                    </div>

                </div>
            </div>



            {/* =================================================
                UI/UX DESIGN SECTION
            ================================================= */}

            <div
                style={{
                    backgroundColor: 'rgb(245 245 245)',
                    margin: '100px 0px 20px 0px'
                }}
            >

                <div className='container'>

                    <div className='row align-items-center pt-50'>

                        <div className='col-12'>

                            <span className="tp-section-subtitle text-black blink-ball">
                                AI Website Redesign in Chennai
                            </span>
                            <h4 className="px-about-title mb-20">

                                <span className="text-blue-about">
                                    Build a Smarter Website with{" "}
                                </span>

                                AI-Powered Design Strategies

                            </h4>

                        </div>


                        <div className='col-md-4'>

                            <img
                                src={img.src}
                                alt='img'
                                className='img-border-cls'
                            />

                        </div>
                        <div className="col-md-8">
                            <p className="text-figtree mb-25">
                                AI is transforming the way websites are planned, designed, and
                                optimized. Our AI website redesign in Chennai
                                combines modern design principles with AI-assisted insights to
                                create websites that are more relevant, engaging, and
                                user-focused.
                            </p>

                        </div>
                        <div className='col-12'>
                            <h5 className="ai-redesign-title text-tenor">
                                AI-assisted redesign can help with:
                            </h5>

                            <div className="ai-redesign-list">

                                {aiRedesignBenefits.map((item, index) => (
                                    <div
                                        className="ai-redesign-item"
                                        key={index}
                                    >

                                        <div className="ai-redesign-icon">
                                            {item.icon}
                                        </div>

                                        <span>
                                            {item.text}
                                        </span>

                                    </div>
                                ))}

                            </div>
                            <p className="text-figtree mt-25">
                                We use AI as part of the redesign strategy while keeping human
                                creativity, brand identity, business objectives, and user
                                experience at the center of the project.
                            </p>
                        </div>


                        {/* =================================================
                            YOUR SAFARI COMPONENT - KEEP THIS
                        ================================================= */}

                        <SafariContentTabs
                            data={redesignServices}
                        />


                        <style>{`

                            .startup-quote-box {

                                border: 1px solid #053456;

                                border-left: 4px solid #053456;

                                color: #053456;

                                text-align: center;

                                background: #53ae7d66;

                                margin: 0 auto;

                                padding: 12px 20px;

                                font-weight: 600;

                                font-size: 1.1rem;

                                border-radius: 4px;

                            }

                        `}</style>

                    </div>

                </div>

            </div>


            {/* =================================================
                FREE WEBSITE AUDIT
            ================================================= */}




            {/* =================================================
                KEY BENEFITS
            ================================================= */}

            <div className="container mt-120 mb-50">

                <div>
                    <span className="tp-section-subtitle text-black blink-ball">
                        Website Redesign Agency in Chennai
                    </span>
                    <h4 className="px-about-title mb-20">

                        <span className="text-blue-about">
                            Strategy-Driven Website Redesign {" "}
                        </span>

                        from Analysis to Launch

                    </h4>

                </div>


                {/* =================================================
                    BENEFIT CARDS
                ================================================= */}

                <div className="redesign-benefits-slider mt-5">

                    <p className="text-figtree mb-40">
                        Choosing the right website redesign agency in Chennai can make
                        the difference between a simple visual makeover and a website
                        that actually improves business performance.
                    </p>

                    <Swiper
                        modules={[
                            Autoplay,
                        ]}
                        spaceBetween={25}
                        slidesPerView={4}
                        loop={true}
                        speed={800}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 15,
                            },
                            576: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 25,
                            },
                        }}
                        className="redesign-benefits-swiper"
                    >

                        {redesignBenefits.map((item, index) => (

                            <SwiperSlide key={index}>

                                <RedesignBenefitCard
                                    image={item.image}
                                    title={item.title}
                                    description={item.description}
                                    icon={item.icon}
                                />

                            </SwiperSlide>

                        ))}

                    </Swiper>

                </div>

            </div>




            <div className='container'>

                <div className='row align-items-center pt-50'>

                    <div className='col-12'>
                        <span className="tp-section-subtitle text-black blink-ball">
                            Key Benefits of Website Redesign
                        </span>

                        <h4 className="px-about-title mb-20">

                            <span className="text-blue-about">
                                Why Should You Redesign {" "}
                            </span>

                            Your Existing Website?

                        </h4>

                    </div>
                    <div className="col-md-12">

                        <p className="text-figtree">
                            A professionally redesigned website can provide several
                            benefits for your business.
                        </p>

                        <div className="website-benefits-grid">

                            {websiteRedesignBenefits.map((item) => (

                                <div
                                    className="website-benefit-card"
                                    key={item.number}
                                >

                                    {/* Number */}
                                    <div className="website-benefit-number">
                                        {item.number}
                                    </div>

                                    {/* Icon */}
                                    <div className="website-benefit-icon">
                                        {item.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="website-benefit-content">

                                        <h5>
                                            {item.title}
                                        </h5>

                                        <p>
                                            {item.description}
                                        </p>

                                    </div>

                                    {/* Arrow */}
                                    <div className="website-benefit-arrow">
                                        →
                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>



            <div
                style={{
                    backgroundColor: "rgb(245 245 245)",
                    margin: "100px 0px 20px 0px",
                }}
            >
                <div className="container my-20">

                    <div className="row justify-content-between align-items-center pt-30 pb-50" >

                        {/* =========================================
                LEFT CONTENT
            ========================================= */}

                        <div className="col-lg-7 col-md-7">
                            <span className="tp-section-subtitle text-black blink-ball">
                                Redesign Websites for All Industries
                            </span>
                            <h4 className="px-about-title mb-20">

                                <span className="text-blue-about">
                                    Website Redesign Solutions{" "}
                                </span>

                                Tailored to Your Industry

                            </h4>

                            <p>
                                Our website redesign services are suitable for businesses across different industries and business models.
                            </p>
                            <p>Our team understands that every business has different audiences, goals, services, and conversion requirements. That's why we develop redesign solutions based on your specific business needs rather than using a one-size-fits-all approach.</p>

                        </div>


                        {/* =========================================
                ROUND SWIPER
            ========================================= */}

                        <div className="col-lg-5 col-md-5">

                            <div className="round-swiper">


                                {/* =====================================
                        BACKGROUND IMAGE
                    ===================================== */}

                                <div
                                    className="round-swiper-background"
                                    style={{
                                        backgroundImage: `url(${quotationBenefits[
                                            activeRoundIndex
                                        ].bgImage.src
                                            })`,
                                    }}
                                />

                                {/* Dark overlay */}

                                <div className="round-swiper-image-overlay" />


                                {/* =====================================
                        OUTER CIRCLE
                    ===================================== */}

                                <div className="round-swiper-outer"></div>


                                {/* =====================================
                        INNER CIRCLE
                    ===================================== */}

                                <div className="round-swiper-inner"></div>


                                {/* =====================================
                        SLIDES
                    ===================================== */}

                                <div className="round-swiper-slides">

                                    {quotationBenefits.map((item, index) => {

                                        const total =
                                            quotationBenefits.length;

                                        let distance =
                                            index - activeRoundIndex;


                                        if (distance > total / 2) {
                                            distance -= total;
                                        }


                                        if (distance < -total / 2) {
                                            distance += total;
                                        }


                                        return (

                                            <div
                                                key={index}
                                                className={`round-swiper-slide ${index === activeRoundIndex
                                                    ? "active"
                                                    : ""
                                                    }`}
                                                style={
                                                    {
                                                        "--slide-position":
                                                            distance,
                                                    } as React.CSSProperties
                                                }
                                            >


                                                <div className="round-slide-icon">

                                                    <i
                                                        className={`fa-solid ${item.icon}`}
                                                    />

                                                </div>

                                                <h3 className="text-tenor">

                                                    {item.title}

                                                </h3>

                                            </div>

                                        );

                                    })}

                                </div>


                                {/* =====================================
                        PAGINATION
                    ===================================== */}

                                {/* <div className="round-swiper-pagination">

                                    {quotationBenefits.map((_, index) => (

                                        <button
                                            key={index}
                                            type="button"
                                            className={
                                                index === activeRoundIndex
                                                    ? "active"
                                                    : ""
                                            }
                                            onClick={() =>
                                                setActiveRoundIndex(index)
                                            }
                                            aria-label={
                                                `Go to slide ${index + 1}`
                                            }
                                        />

                                    ))}

                                </div> */}

                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <div className='container'>

                <div className='row align-items-center pt-50'>

                    <div className='col-12'>

                        <span className="tp-section-subtitle text-black blink-ball">
                            Website Redesign Near Me
                        </span>
                        <h4 className="px-about-title mb-20">

                            <span className="text-blue-about">
                                Looking for Website Redesign {" "}
                            </span>

                            Services Near You?

                        </h4>

                    </div>





                    <div className='col-md-7'>

                        <p className='text-figtree'>

                            If you're searching for website redesign near me, Yulanto Web Creations provides professional website redesign and website revamp solutions for businesses in Chennai and beyond.
                            <br />
                            <br />
                            From redesigning a few important pages to completely transforming your existing website, we help you create a stronger and more modern online presence.
                            <br />
                            Your existing website doesn't always need to be replaced. Sometimes, it simply needs the right redesign strategy.

                        </p>

                    </div>
                    <div className="col-md-5">
                        <div className="corporate-gallery">
                            {NewgalleryImages.map((image, index) => (
                                <div key={index} className={image.className}>
                                    <img src={image.src} alt={image.alt} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <div className="container website-approach-section">

                {/* =========================================
        WEBSITE REDESIGN APPROACH
    ========================================= */}

                <div className="website-approach-header">

                    <span className="tp-section-subtitle text-black blink-ball">
                        Our Website Redesign Approach
                    </span>

                    <h4 className="px-about-title mb-20">

                        <span className="text-blue-about">
                            From Outdated Website{" "}
                        </span>

                        to Modern Digital Experience

                    </h4>

                    <p className="text-figtree website-approach-intro">
                        We believe website redesign should be more than changing
                        the visual appearance of your website. Our approach combines
                        strategy, design, development, optimization, and testing to
                        create a modern digital experience.
                    </p>

                </div>


                {/* =========================================
        APPROACH CARDS
    ========================================= */}
                {/* <div data-aos="fade-right"
                    data-aos-delay={400}
                    data-aos-once={true}> */}

                    <div className="website-approach-grid">

                        {[
                            {
                                number: "01",
                                title: "Research",
                                text: "Understanding your business, audience, competitors, and existing website.",
                            },
                            {
                                number: "02",
                                title: "Strategy",
                                text: "Defining the redesign goals and prioritizing improvements.",
                            },
                            {
                                number: "03",
                                title: "Design",
                                text: "Creating modern UI/UX layouts aligned with your brand.",
                            },
                            {
                                number: "04",
                                title: "Development",
                                text: "Building responsive and functional website experiences.",
                            },
                            {
                                number: "05",
                                title: "Optimization",
                                text: "Improving usability, performance, SEO structure, and conversion opportunities.",
                            },
                            {
                                number: "06",
                                title: "Testing",
                                text: "Checking the redesigned website across devices and browsers before launch.",
                            },
                        ].map((item) => (

                            <div
                                className="website-approach-card"
                                key={item.number}
                            >

                                <div className="approach-card-top">

                                    <span className="approach-number">
                                        {item.number}
                                    </span>

                                    <span className="approach-line"></span>

                                </div>

                                <h5>
                                    {item.title}
                                </h5>

                                <p>
                                    {item.text}
                                </p>

                            </div>

                        ))}

                    </div>
                {/* </div> */}


                {/* =========================================
        WHY CHOOSE YULANTO
    ========================================= */}



            </div>

            <div data-aos="fade-right"
                data-aos-delay={400}
                data-aos-once={true}>

                <div className="why-yulanto-section">

                    <div className="why-yulanto-header">

                        <span className="tp-section-subtitle text-black blink-ball">
                            Why Choose Yulanto for Website Redesign?
                        </span>

                        <h4 className="px-about-title mb-20">

                            <span className="text-blue-about">
                                Built Around Your{" "}
                            </span>

                            Business Goals

                        </h4>

                    </div>


                    <div className="why-yulanto-grid">

                        {[
                            "Experienced website design and development team",
                            "Customized redesign strategies",
                            "Modern UI/UX design",
                            "Responsive website development",
                            "SEO-friendly redesign approach",
                            "AI-assisted redesign capabilities",
                            "Performance optimization",
                            "Conversion-focused layouts",
                            "Support for WordPress and custom websites",
                            "Solutions for startups, small businesses, and enterprises",
                            "White-label redesign support for agencies",
                        ].map((item, index) => (

                            <div
                                className="why-yulanto-item"
                                key={index}
                            >

                                <span className="why-yulanto-check">
                                    ✓
                                </span>

                                <span className="why-yulanto-text">
                                    {item}
                                </span>

                            </div>

                        ))}

                    </div>

                </div>
            </div>


            <div data-aos="fade-right"
                data-aos-delay={400}
                data-aos-once={true}>
                <div className="container mt-80">

                    <div className="website-audit-card">

                        <div className="audit-decoration"></div>


                        <div className="audit-content">

                            <div className="audit-label">

                                <span className="audit-icon">

                                    <i className="fa-regular fa-file-lines"></i>

                                </span>

                                <span className='text-tenor'>
                                    Free Website Audit
                                </span>

                            </div>


                            <div className="service-item-title fw-600  text-white text-tenor audit-title">

                                Not sure whether your website needs a complete redesign or a simple revamp?

                            </div>


                            <p className="slide-descr text-white audit-description">

                                Get a website audit to identify potential issues related to design, usability, mobile responsiveness, performance, SEO structure, and conversion opportunities.

                            </p>
                            <button className='req-btn text-tenor'>Request Your Free Website Audit</button>

                        </div>

                    </div>

                </div>
            </div>



            <FAQA1 num1={16} num2={24}
                highlightedText="Frequently Asked Questions"
                titleSuffix="" />


        </>
    )
}


export default Websiteredesign;