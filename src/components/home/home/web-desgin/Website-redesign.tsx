'use client';

import React, { useEffect, useState } from 'react'
import BreadcurmbData from '@/components/breadcrum/sections/breadcrumbdata'
import IntroContent from '../myComponents/common/IntroContent';
import img from '@/assets/img/sample/Harithams.jpg';
import SafariContentTabs from './SafariContentTabs';
import './RedesignBenefitCard.css'
import RedesignBenefitCard from './RedesignBenefitCard';
import ReFaq from './Refaq';


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
            title1: "Complete",
            title2: "Transformation",
            description:
                "We, as the leading website redesign company in Chennai, are willing to offer a comprehensive transformation of your website. This includes revamping all existing elements or making cosmetic adjustments while preserving the original content such as images, texts, and more.",
            image: img.src,
        },
        {
            title1: "White",
            title2: "Services",
            description:
                "We are available to offer our redesign services to fellow web design professionals who are seeking to outsource their tasks to a skilled and knowledgeable partner. Our team works under their brand and delivers top-notch services.",
            image: img.src,
        },
    ];


    /* =====================================================
       REDESIGN BENEFITS
    ===================================================== */

    const redesignBenefits = [
        {
            title: "User Experience (UX) Design",

            description:
                "Enhancing the usability and accessibility of the website by improving navigation, simplifying user flows, and optimizing interactions to make it easier for visitors.",

            image: img.src,

            icon: (
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
            title: "Integration of New Features",

            description:
                "Adding new features, functionalities, or integrations to enhance the website's capabilities and provide additional value to users.",

            image: img.src,

            icon: (
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
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" x2="8" y1="13" y2="13" />
                    <line x1="16" x2="8" y1="17" y2="17" />
                    <line x1="10" x2="8" y1="9" y2="9" />
                </svg>
            ),
        },

        {
            title: "Responsive Design",

            description:
                "Ensuring that the website is fully responsive and optimized for various devices and screen sizes, to provide a consistent user experience across all platforms.",

            image: img.src,

            icon: (
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
                    <rect
                        x="3"
                        y="4"
                        width="18"
                        height="14"
                        rx="2"
                    />

                    <path d="M8 20h8" />
                    <path d="M12 18v2" />
                </svg>
            ),
        },

        {
            title: "Performance Optimization",

            description:
                "Optimizing the website's speed and performance by reducing page load times, optimizing images, and server configuration to improve overall site performance.",

            image: img.src,

            icon: (
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
                    <path d="M12 2v4" />
                    <path d="m16.24 7.76 2.83-2.83" />
                    <path d="M18 12h4" />
                    <path d="m16.24 16.24 2.83 2.83" />
                    <path d="M12 18v4" />
                    <path d="m4.93 19.07 2.83-2.83" />
                    <path d="M2 12h4" />
                    <path d="m4.93 4.93 2.83 2.83" />
                </svg>
            ),
        },
    ];


    /* =====================================================
       QUOTATION BENEFITS
    ===================================================== */

    const quotationBenefits = [
        {
            title: "User Experience (UX) Design",
            icon: "fa-pen-ruler",
            bgImage: img
        },
        {
            title: "Integration of New Features",
            icon: "fa-puzzle-piece",
            bgImage: img
        },
        {
            title: "Responsive Design",
            icon: "fa-mobile-screen-button",
            bgImage: img
        },
        {
            title: "Performance Optimization",
            icon: "fa-gauge-high",
            bgImage: img
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
                    redesignBenefits.length
                );

            });

        }, 3500);


        return () => {
            clearInterval(timer);
        };

    }, [redesignBenefits.length]);


    /* =====================================================
       RETURN
    ===================================================== */

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
                leftTitle={'From Vision to Reality'}
                rightTitle1={'Real Projects.'}
                rightTitle2={' Creative Solutions. Real Results.'}
                description={
                    'Explore our successful projects and discover how we transform ideas into engaging, innovative, and impactful digital experiences that help businesses grow and stand out online.'
                }
            />


            {/* =================================================
                WEBSITE REDESIGN INTRO
            ================================================= */}

            <div className='container my-4'>

                <div className='row align-items-center'>

                    <div className='col-12'>

                        <h4 className="px-about-title mb-20">

                            <span className="text-blue-about">
                                Website Redesign{" "}
                            </span>

                            Services in Chennai

                        </h4>

                    </div>


                    <div className='col-md-7'>

                        <p className='text-figtree'>

                            Shed Your Old Look. Get On The New And
                            Trendy. Redesigning a website can be an
                            exciting and impactful endeavor. It is a
                            strategic process that involves multiple
                            steps and considerations to create a more
                            effective and engaging online presence
                            that meets the needs of both users and
                            business objectives.

                            <br />
                            <br />

                            Yulanto offers a fresh and adorable new
                            look by incorporating the latest web
                            design trends, keeping up with the changing
                            times and technologies.

                        </p>

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

                            <h4 className="px-about-title mb-20">

                                <span className="text-blue-about">
                                    Utilize the Latest UI/UX Design{" "}
                                </span>

                                Trends to Revamp the Web Design

                            </h4>

                        </div>


                        <div className='col-md-4'>

                            <img
                                src={img.src}
                                alt='img'
                                className='img-border-cls'
                            />

                        </div>


                        <div className='col-md-8'>

                            <p className='text-figtree'>

                                Redesigning a website involves significant
                                changes to its design, structure, content,
                                or functionality with the goal of improving
                                its performance, user experience, and overall
                                effectiveness.

                                <br />
                                <br />

                                Yulanto improves your web design during the
                                Web Redesigning process to gain valuable
                                insights into customer interests and
                                expectations, resulting in better outcomes.

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

            <div className="container">

                <div className="website-audit-card">

                    <div className="audit-decoration"></div>


                    <div className="audit-content">

                        <div className="audit-label">

                            <span className="audit-icon">

                                <i className="fa-regular fa-file-lines"></i>

                            </span>

                            <span className='text-tenor'>
                                WEBSITE AUDIT
                            </span>

                        </div>


                        <div className="service-item-title fw-600 fs30 text-white text-tenor audit-title">

                            Avail Our Free Website Audit

                        </div>


                        <p className="slide-descr text-white audit-description">

                            Receive a complimentary audit from our team
                            of redesign specialists and enhance the
                            efficiency of your website.

                        </p>

                    </div>

                </div>

            </div>


            {/* =================================================
                KEY BENEFITS
            ================================================= */}

            <div className="container mt-120 mb-50">

                <div>

                    <h4 className="px-about-title mb-20">

                        <span className="text-blue-about">
                            Key Benefits of Web Redesign{" "}
                        </span>

                        and Advantages Of Redesign For Business Websites

                    </h4>

                </div>


                {/* =================================================
                    BENEFIT CARDS
                ================================================= */}

                <div className="row mt-5">

                    {redesignBenefits.map((item, index) => (

                        <div
                            className="col-lg-3 col-md-6 mb-4"
                            key={index}
                        >

                            <RedesignBenefitCard
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                icon={item.icon}
                            />

                        </div>

                    ))}

                </div>

            </div>




            <div className='container'>

                <div className='row align-items-center pt-50'>

                    <div className='col-12'>

                        <h4 className="px-about-title mb-20">

                            <span className="text-blue-about">
                                Who stands to gain from{" "}
                            </span>

                            our website redesign services?

                        </h4>

                    </div>


                    <div className='col-md-4'>

                        <img
                            src={img.src}
                            alt='img'
                            className='img-border-cls'
                        />

                    </div>


                    <div className='col-md-8'>

                        <p className='text-figtree'>

                            We provide top-notch website redesign
                            services in Chennai that cater to a wide
                            range of industries and verticals. Our
                            website redesign solutions are not limited
                            to any particular industry and are suitable
                            for all online businesses aiming to excel
                            and maximize their return on investment.

                            <br />
                            <br />

                            Our team of experts possesses a comprehensive
                            knowledge of redesigning for various
                            industries such as retail, manufacturing,
                            real estate, healthcare, hospitality,
                            travel, and more. With their expertise,
                            they can optimize your website to generate
                            a higher number of leads, boost conversions,
                            and attract loyal customers.

                        </p>

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

                            <h4 className="px-about-title mb-20">

                                <span className="text-blue-about">
                                    Request a {" "}
                                </span>

                                personalized quotation

                            </h4>

                            <p>
                                If you'd like a more specific quotation, feel free
                                to provide more details about your Website, and I
                                can help you estimate the cost accordingly.
                            </p>

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

                                <div className="round-swiper-pagination">

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

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <div className='container'>

                <div className='row align-items-center pt-50'>

                    <div className='col-12'>

                        <h4 className="px-about-title mb-20">

                            <span className="text-blue-about">
                                A Disciplined
                                Approach {" "}
                            </span>

                            For Website Redesigning

                        </h4>

                    </div>





                    <div className='col-md-8'>

                        <p className='text-figtree'>

                            We have established ourselves as the leading website redesigners in
                            Chennai due to our professional expertise and effective design
                            solutions tailored to meet the needs of our diverse clientele. Our
                            approach involves consulting with our customers to gain a thorough
                            understanding of their current design, identifying areas for
                            improvement, determining necessary changes, and optimizing workflow.

                        </p>

                    </div>
                    <div className='col-md-4'>

                        <img
                            src={img.src}
                            alt='img'
                            className='img-border-cls'
                        />

                    </div>
                </div>

            </div>

            <div className='container'>
                <ReFaq />
            </div>

        </>
    )
}


export default Websiteredesign;