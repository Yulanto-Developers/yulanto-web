"use client";



import { useEffect, useState } from "react";
import CardSwap, { Card } from "./CardSwap";


import img1 from '@/assets/img/recent-work/Sovereign.jpg';
import img2 from '@/assets/img/recent-work/freight-digital.jpg';
import img3 from '@/assets/img/recent-work/ldf.jpg';
import img4 from '@/assets/img/recent-work/safety-merchant.jpg';
import img5 from '@/assets/img/recent-work/Jer.jpg';
import img6 from '@/assets/img/recent-work/tera-plus.jpg';
import {
    FaWordpress,
    FaPhp,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaReact,
    FaNodeJs,
    FaCode,
} from "react-icons/fa";
import { SiMysql, SiNextdotjs, SiTailwindcss } from "react-icons/si";

import Link from "next/link";
const techIcons: Record<string, React.ReactNode> = {
    WordPress: <FaWordpress />,
    Mysql: <SiMysql />,
    Php: <FaPhp />,
    Html: <FaHtml5 />,
    Css: <FaCss3Alt />,
    Boostrap: <FaBootstrap />,
    Ajax: <FaCode />,
    "React js": <FaReact />,
    "Next Js": <SiNextdotjs />,
    "Node JS": <FaNodeJs />,
    "Tailwind Css": <SiTailwindcss />,
};

export default function RecentProject() {

    const [activeIndex, setActiveIndex] = useState(0);

    /*
     * Responsive CardSwap width.
     *
     * Desktop:
     * 880px
     *
     * Below 1390px:
     * Reduce the card width so the right side
     * doesn't get clipped.
     */
    const [cardWidth, setCardWidth] = useState(880);


    useEffect(() => {

        const updateCardWidth = () => {

            const width = window.innerWidth;

            if (width < 576) {

                setCardWidth(330);

            } else if (width < 768) {

                setCardWidth(430);

            } else if (width < 992) {

                setCardWidth(560);

            } else if (width < 1200) {

                setCardWidth(650);

            } else if (width < 1390) {

                setCardWidth(720);

            } else {

                setCardWidth(880);

            }

        };


        updateCardWidth();


        window.addEventListener(
            "resize",
            updateCardWidth
        );


        return () => {

            window.removeEventListener(
                "resize",
                updateCardWidth
            );

        };

    }, []);


    /* =====================================================
       PROJECT DATA
    ===================================================== */

    const cardObj = [

        {
            title: "Sovereign - UK",

            subTitle: "Specialist Facade Engineering Consultants – UK",

            category: "Web Development",

            image: img1,

            description:
                "A professional, responsive website designed for a leading facade engineering consultancy serving the UK construction industry. ",
            services: [
                "Website Design & Development",
                "Corporate Website Design",
                "Responsive & Mobile-Friendly Design",
                "UI/UX Design",
                "SEO-Friendly Website Structure",
                "Content Presentation & Optimization",
                "Service & Project Showcase",
                "Contact & Lead Generation Integration",
                "Performance & Speed Optimization",
                "Cross-Browser Compatibility",
                "Website Security & SSL Integration",
                "Ongoing Website Support & Maintenance",
            ],

            location: "United Kingdom",

            webDate: "Jan-2026",

            icons: [
                "WordPress",
                "Mysql",
                "Php",
            ],

            links:
                "https://www.sovereignfacade.co.uk/",
        },
        {
            title: "Terra Pulse - Saudi Arabia - UAE",

            subTitle: "Mobile Experience",

            category: "App Development",

            topBarLabel: "Scalable",

            image: img6,

            description:
                "Integrated engineering, environmental, and facility management solutions supporting sustainable projects across Saudi Arabia.",

            services: [
                "Corporate Website Design & Development",
                "Modern UI/UX Design",
                "Responsive & Mobile-Friendly Design",
                "SEO-Friendly Website Structure",
                "Environmental Consulting Service Presentation",
                "Sector & Industry Showcase",
                "Project & Partner Presentation",
                "Website Performance Optimization",
                "English & Arabic Website Integration",
                "Contact & Lead Generation Integration",
                "Website Performance Optimization",
                "Website Security & SSL Integration",
                "Cross-Browser Compatibility",
            ],
            location: "Saudi Arabia - UAE",

            webDate: "Jan - 2026",

            icons: [
                "Html",
                "Css",
                "Boostrap",
                "Ajax",
                "Php",
            ],

            links:
                "https://www.terrapulse.com.sa/",
        },


        {
            title: "Johor Event Rental - Malaysia",

            subTitle: "Johor Event Rental - Malaysia",

            category: "App Development",

            topBarLabel: "Scalable",

            image: img5,

            description:
                "Professional event rental website showcasing tents, staging, furniture, lighting, and complete event solutions in Johor.",

            services: [
                "Event Rental Website Design & Development",
                "Modern UI/UX Design",
                "Responsive & Mobile-Friendly Design",
                "Event Equipment & Product Showcase",
                "Tent & Canopy Rental Presentation",
                "Staging, Furniture & Accessories Showcase",
                "Sound, Lighting & LED Equipment Presentation",
                "SEO-Friendly Website Structure",
                "Event Portfolio & Gallery Integration",
                "Corporate & Wedding Event Service Presentation",
                "Contact & Quote Request Integration",
                "Website Performance Optimization",
                "Cross-Browser Compatibility",
                "Website Security & SSL Integration",
            ],

            location: "Chennai - India",

            webDate: "Jan - 2026",

            icons: [
                "Html",
                "Css",
                "Boostrap",
                "Ajax",
                "Php",
            ],

            links:
                "https://yulanto.com/latest-works",
        },


        {
            title: "Freight Digital – UAE",

            subTitle: "Freight Digital – UAE",

            category: "Web Application",

            topBarLabel: "Scalable",

            image: img2,

            description:
                "Corporate website for a global freight and logistics digital marketing company, built for visibility and growth.",
            services: [
                "Corporate Website Design & Development",
                "Modern UI/UX Design",
                "Responsive & Mobile-Friendly Design",
                "SEO-Friendly Website Structure",
                "Freight & Logistics Industry-Focused Design",
                "Service & Solutions Presentation",
                "Lead Generation & Contact Forms",
                "Website Performance Optimization",
                "Cross-Browser Compatibility",
                "Content Structuring & Integration",
                "SSL & Website Security Integration",
                "Ongoing Website Support & Maintenance",
            ],

            location: "UAE",

            webDate: "Jan - 2026",

            icons: [

                "React js",
                "Next Js",
                "Node JS",
                "Css",
                "Tailwind Css"
            ],

            links:
                "https://freightdigitalfzc.com/",
        },


        {
            title: "LDFKORMESIC - USA",

            subTitle: "LDFKORMESIC - USA",

            category: "App Development",

            topBarLabel: "Scalable",

            image: img3,

            description:
                "Marine safety solutions website showcasing lifeboat, fire-fighting, calibration, testing, and fleet services in Malaysia.",
            services: [
                "Corporate Website Design & Development",
                "Modern UI/UX Design",
                "Responsive & Mobile-Friendly Design",
                "SEO-Friendly Website Structure",
                "Professional Service Presentation",
                "Brand-Focused Website Design",
                "Content Structuring & Integration",
                "Lead Generation & Contact Form Integration",
                "Website Performance Optimization",
                "Cross-Browser Compatibility",
                "Website Security & SSL Integration",
                "Ongoing Website Support & Maintenance",
            ],

            location: "Unitied States of America (USA)",

            webDate: "Jan - 2026",

            icons: [
                "Html",
                "Css",
                "Boostrap",
                "Php",
                "React js",
                "Next Js",
                "Node JS",
            ],

            links:
                "https://yulanto.com/latest-works",
        },
        {
            title: "Safety Merchant - Malaysia",

            subTitle: "Safety Merchant - Malaysia",

            category: "App Development",

            topBarLabel: "Scalable",

            image: img4,

            description:
                "Modern product showcase website designed to highlight the brand, products, expertise, and business solutions with a professional online presence. What We Did",
            services: [
                "Marine Safety Website Design & Development",
                "Corporate Website Design",
                "Modern UI/UX Design",
                "Responsive & Mobile-Friendly Design",
                "Marine Safety Services Showcase",
                "Lifeboat & Davit Systems Presentation",
                "LSA & FFA Services Showcase",
                "Calibration & Testing Services Presentation",
                "Load Testing Services Showcase",
                "Fleet Service Agreement Presentation",
                "Product & Certification Sections",
                "SEO-Friendly Website Structure",
                "Contact & Consultation Form Integration",
                "Website Performance Optimization",
                "Cross-Browser Compatibility",
                "SSL & Website Security Integration"
            ],

            location: "Unitied States of America (USA)",

            webDate: "Jan - 2026",

            icons: [
                "Html",
                "Css",
                "Boostrap",
                "Ajax",
                "Php",

            ],

            links:
                "https://safety-merchant.com/",
        },

    ];


    const activeCard =
        cardObj[activeIndex] || cardObj[0];


    return (

        <section
            className="
                recent-project-section
                py-5
                position-relative
            "
        >

            <style>{`

                @keyframes fadeInText {

                    from {
                        opacity: 0;
                        transform: translateY(6px);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }

                }


                .animate-fade-in {

                    animation:
                        fadeInText
                        0.35s
                        ease-out
                        forwards;

                }


                /*
                 * IMPORTANT:
                 *
                 * Don't allow the project card
                 * to be clipped horizontally.
                 */

                .recent-project-card-wrapper {

                    overflow: visible !important;

                }


                /*
                 * Card top bar
                 */

                .recent-project-card-wrapper
                .card-top-bar {

                    width: 100%;

                    padding:
                        18px 24px;

                    box-sizing:
                        border-box;

                }


                /*
                 * Date should always remain
                 * inside the card.
                 */

                .recent-project-card-wrapper
                .card-top-bar > span {

                    white-space: nowrap;

                    flex-shrink: 0;

                }


                /*
                 * Keep title from pushing
                 * the date outside.
                 */

                .recent-project-card-wrapper
                .card-top-bars {

                    min-width: 0;

                    overflow: hidden;

                }


                .recent-project-card-wrapper
                .top-bar-title {

                    display: block;

                    white-space: nowrap;

                    overflow: hidden;

                    text-overflow: ellipsis;

                    max-width: 100%;

                }


                /*
                 * Below 1390px
                 *
                 * Move the whole CardSwap
                 * slightly toward the left.
                 */

                @media (max-width: 1389px) {

                    .recent-project-card-wrapper
                    > div {

                        right: auto !important;

                        left: 50% !important;

                        transform:
                            translateX(-50%)
                            translateY(20%) !important;

                    }

                }


                /*
                 * Tablet
                 */

                @media (max-width: 991px) {

                    .recent-project-card-wrapper {

                        height: 520px !important;

                    }

                }


                /*
                 * Mobile
                 */

                @media (max-width: 767px) {

                    .recent-project-card-wrapper {

                        height: 430px !important;

                    }

                }

            `}</style>


            <div className="container">

                {/* =================================================
                   HEADER
                ================================================= */}

                <div className="row mb-70 align-items-center">
                    <div className="col-xl-3">
                        <span className="tp-section-subtitle text-black blink-ball">
                            Recent Work
                        </span>
                    </div>

                    <div className="col-xl-9">
                        <div className="px-project-title-box">

                            <h4 className="px-about-title mb-20">
                                <span className="text-blue-about">Where Creativity  {' '}</span>  Meets Functionality
                            </h4>

                            <p className="text-figtree text-dark mt-2 font-paragraph-cls">
                                Explore our latest work, where creativity, innovation, and functionality come together to create exceptional digital experiences. As a professional web design and website development company, we create modern, responsive, and user-friendly websites that help businesses strengthen their online presence.
                            </p>
                        </div>
                    </div>
                </div>


                {/* =================================================
                   PROJECT CONTENT
                ================================================= */}

                <div className="row align-items-start g-2">


                    {/* =================================================
                       LEFT DETAILS
                    ================================================= */}

                    <div className="col-lg-4 col-md-5">

                        <div
                            key={activeIndex}
                            className="pe-lg-3 animate-fade-in"
                        >

                            <h3 className="h3 fw-bold mb-1 text-tenor text-blue">

                                {activeCard.title}

                            </h3>


                            {/* <h5 className="h6 text-muted text-figtree fw-semibold mb-3">

                                {activeCard.subTitle}

                            </h5> */}


                            <p className="text-secondary mb-4 text-figtree text-left">

                                {activeCard.description}

                            </p>

                            {activeCard.services && (
                                <div className="sovereign-services mb-3">
                                    <h6 className="sovereign-services-title">
                                        What We Did
                                    </h6>

                                    <div className="sovereign-services-list">
                                        {activeCard.services.map((service, index) => (
                                            <div
                                                key={index}
                                                className="sovereign-service-item"
                                            >
                                                <span className="sovereign-service-dot">
                                                    ✓
                                                </span>

                                                <span>{service}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div
                                className="d-flex flex-wrap mb-3"
                                aria-hidden
                            >

                                {activeCard.icons.map(
                                    (item, idx) => (
                                        <span
                                            key={idx}
                                            className="
                badge
                bg-light
                text-figtree
                border
                text-dark
                me-2
                mb-2
                px-2
                py-1
                d-flex
                align-items-center
                gap-1
            "
                                            style={{
                                                fontSize: 12,
                                            }}
                                        >
                                            {techIcons[item]}
                                            {item}
                                        </span>
                                    )
                                )}

                            </div>


                            <a
                                href={
                                    activeCard.links ??
                                    "#"
                                }
                                target="_blank"
                                className="fd-btn text-white"
                            >

                                <span className="fd-btn-text  text-tenor">

                                    Visit Website

                                </span>


                                <i className="fa-solid  fa-arrow-right fd-btn-icon" />

                            </a>

                        </div>

                    </div>


                    {/* =================================================
                       RIGHT CARD SWAP
                    ================================================= */}

                    <div className="col-lg-8 col-md-7">

                        <div
                            className="
                                recent-project-card-wrapper
                                w-100
                                position-relative
                                d-flex
                                justify-content-center
                                align-items-center
                            "
                            style={{
                                height: "600px",
                            }}
                        >

                            <CardSwap

                                /*
                                 * Responsive width.
                                 */
                                width={cardWidth}

                                height={450}

                                /*
                                 * IMPORTANT:
                                 *
                                 * Smaller distance means
                                 * cards 6, 7, 8 remain
                                 * visually inside the stack.
                                 */
                                cardDistance={24}

                                verticalDistance={30}

                                delay={5000}

                                pauseOnHover={false}

                                onSwap={(
                                    index: number
                                ) => {

                                    setActiveIndex(
                                        index
                                    );

                                }}
                            >

                                {cardObj.map(
                                    (item, index) => (

                                        <Card
                                            key={index}

                                            style={{

                                                backgroundImage:
                                                    `url("${item.image.src}")`,

                                                backgroundSize:
                                                    "cover",

                                                backgroundPosition:
                                                    "center",

                                                borderRadius:
                                                    "12px",

                                            }}
                                        >

                                            {/* =================================
                                               TOP BAR
                                            ================================= */}

                                            <div className="
                                                d-flex
                                                justify-content-between
                                                align-items-center
                                                card-top-bar
                                            ">

                                                <div className="card-top-bars">

                                                    <span className="top-bar-dot" />


                                                    <span className="
                                                        top-bar-title
                                                        text-tenor
                                                    ">

                                                        {item.title}

                                                    </span>

                                                </div>


                                                <span className="
                                                    text-tenor
                                                    text-white
                                                ">

                                                    {item.webDate}

                                                </span>

                                            </div>


                                            {/* =================================
                                               BOTTOM CONTENT
                                            ================================= */}

                                            <div className="card-swap-content">

                                                <h3 className="text-tenor">

                                                    {item.title}

                                                </h3>


                                                <p className="
                                                    text-figtree
                                                    fs-6
                                                    d-flex
                                                    justify-content-start
                                                    align-items-center
                                                    gap-2
                                                ">

                                                    <i className="
                                                        fa-solid
                                                        fa-location-dot
                                                    " />

                                                    {item.location}

                                                </p>

                                            </div>

                                        </Card>

                                    )
                                )}

                            </CardSwap>

                        </div>

                    </div>

                </div>


                <div className="mt-50">
                    <p className="text-figtree text-dark">From sophisticated website design and development that seamlessly combine aesthetics with performance to distinctive logos and branding solutions that embody each brand’s identity, every project reflects our commitment to quality, creativity, and delivering effective digital solutions that help businesses grow.</p>
                </div>

            </div>

        </section>
    );
}