'use client'
import BreadcurmbData from '@/components/breadcrum/sections/breadcrumbdata'
import React from 'react'
import IntroContent from '../myComponents/common/IntroContent'
import { useQuoteModal } from '../myComponents/Content/QuoteContext';
import { useAOS } from "@/components/hooks/useAOS";
import { portalSolutions, portalIcons, classifiedFeatures, realEstatePortalFeatures, restaurantPortalFeatures, jobPortalFeatures, webPortalBenefits } from './PortalData/data'
function PortalWeb() {
    const { openModal } = useQuoteModal();
    useAOS();
    return (


        <div>
            <section className="px-about-6-area pt-40 pb-40 pb-lg-110" style={{ backgroundColor: "#f5f5f5", overflowX: 'hidden', overflowY: 'hidden', }}>

                <IntroContent
                    leftTitle="Custom Online Stores Built for Your Brand"
                    rightTitle1="Build a Powerful E-commerce "
                    rightTitle2="Website Designed Around Your Business  "
                    description="Your online store should do more than display products—it should create a smooth buying experience that turns visitors into customers. At Yulanto Web Creations, we provide custom e-commerce website design and e-commerce web development services in Chennai for businesses looking to establish, improve, or scale their online presence."
                />

                <div className="container container-1550"
                >
                    <div className="web-portal-animation">
                        <svg
                            className="portal-svg"
                            viewBox="0 0 1200 600"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-label="Web portal development illustration"
                        >
                            <defs>

                                <linearGradient
                                    id="portalBlueGradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="100%"
                                >
                                    <stop offset="0%" stopColor="#053456" />
                                    <stop offset="100%" stopColor="#53AE7D" />
                                </linearGradient>

                                <linearGradient
                                    id="portalScreenGradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="100%"
                                >
                                    <stop offset="0%" stopColor="#eef6ff" />
                                    <stop offset="100%" stopColor="#dff2e9" />
                                </linearGradient>

                                <filter
                                    id="portalShadow"
                                    x="-30%"
                                    y="-30%"
                                    width="160%"
                                    height="160%"
                                >
                                    <feDropShadow
                                        dx="0"
                                        dy="15"
                                        stdDeviation="18"
                                        floodOpacity="0.15"
                                    />
                                </filter>

                                <filter
                                    id="portalSmallShadow"
                                    x="-30%"
                                    y="-30%"
                                    width="160%"
                                    height="160%"
                                >
                                    <feDropShadow
                                        dx="0"
                                        dy="7"
                                        stdDeviation="9"
                                        floodOpacity="0.12"
                                    />
                                </filter>

                            </defs>


                            {/* Background */}





                            {/* Floating Dots */}




                            {/* Main Portal Laptop */}

                            <g
                                className="portal-laptop"
                                filter="url(#portalShadow)"
                            >

                                {/* Laptop Screen */}

                                <rect
                                    x="275"
                                    y="145"
                                    width="650"
                                    height="390"
                                    rx="25"
                                    fill="#14255c"
                                />

                                <rect
                                    x="295"
                                    y="165"
                                    width="610"
                                    height="350"
                                    rx="12"
                                    fill="#ffffff"
                                />


                                {/* Browser Header */}

                                <rect
                                    x="295"
                                    y="165"
                                    width="610"
                                    height="48"
                                    rx="12"
                                    fill="#f5f7fb"
                                />

                                <circle
                                    cx="320"
                                    cy="189"
                                    r="5"
                                    fill="#ff6969"
                                />

                                <circle
                                    cx="338"
                                    cy="189"
                                    r="5"
                                    fill="#ffc857"
                                />

                                <circle
                                    cx="356"
                                    cy="189"
                                    r="5"
                                    fill="#58d68d"
                                />

                                <rect
                                    x="390"
                                    y="178"
                                    width="260"
                                    height="21"
                                    rx="10"
                                    fill="#e5ebf5"
                                />


                                {/* Portal Navigation */}

                                <rect
                                    x="315"
                                    y="230"
                                    width="570"
                                    height="45"
                                    rx="8"
                                    fill="#ffffff"
                                />

                                {/* Logo */}

                                <circle
                                    cx="340"
                                    cy="252"
                                    r="15"
                                    fill="url(#portalBlueGradient)"
                                />

                                <path
                                    d="M333 252 L339 258 L348 247"
                                    fill="none"
                                    stroke="#ffffff"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                />

                                <rect
                                    x="365"
                                    y="246"
                                    width="75"
                                    height="9"
                                    rx="4"
                                    fill="#172554"
                                />

                                {/* Navigation Lines */}

                                <rect
                                    x="590"
                                    y="244"
                                    width="48"
                                    height="8"
                                    rx="4"
                                    fill="#cbd5e1"
                                />

                                <rect
                                    x="650"
                                    y="244"
                                    width="48"
                                    height="8"
                                    rx="4"
                                    fill="#cbd5e1"
                                />

                                <rect
                                    x="710"
                                    y="244"
                                    width="48"
                                    height="8"
                                    rx="4"
                                    fill="#cbd5e1"
                                />

                                {/* User Icon */}

                                <circle
                                    cx="810"
                                    cy="248"
                                    r="6"
                                    fill="#053456"
                                />

                                <path
                                    d="M798 263 Q810 252 822 263"
                                    fill="none"
                                    stroke="#053456"
                                    strokeWidth="2"
                                />


                                {/* Portal Hero */}

                                <rect
                                    x="320"
                                    y="292"
                                    width="550"
                                    height="105"
                                    rx="16"
                                    fill="url(#portalScreenGradient)"
                                />

                                <rect
                                    x="350"
                                    y="315"
                                    width="145"
                                    height="12"
                                    rx="6"
                                    fill="#053456"
                                />

                                <rect
                                    x="350"
                                    y="338"
                                    width="190"
                                    height="8"
                                    rx="4"
                                    fill="#94a3b8"
                                />

                                <rect
                                    x="350"
                                    y="356"
                                    width="120"
                                    height="25"
                                    rx="13"
                                    fill="#053456"
                                />

                                <text
                                    x="410"
                                    y="373"
                                    textAnchor="middle"
                                    fontSize="10"
                                    fontWeight="700"
                                    fill="#ffffff"
                                >
                                    EXPLORE PORTAL
                                </text>


                                {/* Connected User Nodes */}

                                <g className="portal-network">

                                    <circle
                                        cx="720"
                                        cy="345"
                                        r="27"
                                        fill="#ffffff"
                                        stroke="#053456"
                                        strokeWidth="2"
                                    />

                                    <circle
                                        cx="720"
                                        cy="337"
                                        r="7"
                                        fill="#053456"
                                    />

                                    <path
                                        d="M707 357 Q720 345 733 357"
                                        fill="none"
                                        stroke="#053456"
                                        strokeWidth="2"
                                    />

                                    <circle
                                        cx="790"
                                        cy="345"
                                        r="27"
                                        fill="#ffffff"
                                        stroke="#53AE7D"
                                        strokeWidth="2"
                                    />

                                    <circle
                                        cx="790"
                                        cy="337"
                                        r="7"
                                        fill="#53AE7D"
                                    />

                                    <path
                                        d="M777 357 Q790 345 803 357"
                                        fill="none"
                                        stroke="#53AE7D"
                                        strokeWidth="2"
                                    />

                                    <line
                                        x1="747"
                                        y1="345"
                                        x2="763"
                                        y2="345"
                                        stroke="#9db6c8"
                                        strokeWidth="3"
                                        strokeDasharray="5 5"
                                    />

                                </g>


                                {/* Portal Feature Boxes */}

                                <g className="portal-features">

                                    <rect
                                        x="320"
                                        y="415"
                                        width="170"
                                        height="75"
                                        rx="12"
                                        fill="#ffffff"
                                        stroke="#e7edf5"
                                    />

                                    <circle
                                        cx="350"
                                        cy="452"
                                        r="17"
                                        fill="#eef5ff"
                                    />

                                    <path
                                        d="M343 452 L348 457 L358 446"
                                        fill="none"
                                        stroke="#053456"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                    />

                                    <rect
                                        x="380"
                                        y="440"
                                        width="75"
                                        height="7"
                                        rx="3"
                                        fill="#172554"
                                    />

                                    <rect
                                        x="380"
                                        y="454"
                                        width="55"
                                        height="5"
                                        rx="2"
                                        fill="#c1ccdb"
                                    />


                                    <rect
                                        x="505"
                                        y="415"
                                        width="170"
                                        height="75"
                                        rx="12"
                                        fill="#ffffff"
                                        stroke="#e7edf5"
                                    />

                                    <circle
                                        cx="535"
                                        cy="452"
                                        r="17"
                                        fill="#eefaf5"
                                    />

                                    <path
                                        d="M528 452 H542 M535 445 V459"
                                        stroke="#53AE7D"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                    />

                                    <rect
                                        x="565"
                                        y="440"
                                        width="75"
                                        height="7"
                                        rx="3"
                                        fill="#172554"
                                    />

                                    <rect
                                        x="565"
                                        y="454"
                                        width="55"
                                        height="5"
                                        rx="2"
                                        fill="#c1ccdb"
                                    />


                                    <rect
                                        x="690"
                                        y="415"
                                        width="180"
                                        height="75"
                                        rx="12"
                                        fill="#ffffff"
                                        stroke="#e7edf5"
                                    />

                                    <circle
                                        cx="720"
                                        cy="452"
                                        r="17"
                                        fill="#eef5ff"
                                    />

                                    <path
                                        d="M712 452 L718 458 L729 445"
                                        fill="none"
                                        stroke="#053456"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                    />

                                    <rect
                                        x="750"
                                        y="440"
                                        width="80"
                                        height="7"
                                        rx="3"
                                        fill="#172554"
                                    />

                                    <rect
                                        x="750"
                                        y="454"
                                        width="58"
                                        height="5"
                                        rx="2"
                                        fill="#c1ccdb"
                                    />

                                </g>


                                {/* Laptop Base */}

                                <path
                                    d="M235 535 H965 L1010 565 Q1015 575 998 580 H202 Q185 575 190 565 Z"
                                    fill="#cbd8f5"
                                />

                                <path
                                    d="M285 535 H915 L930 555 H270 Z"
                                    fill="#9db6eb"
                                />

                                <rect
                                    x="525"
                                    y="547"
                                    width="150"
                                    height="7"
                                    rx="3"
                                    fill="#819bd4"
                                />

                            </g>


                            {/* Left Business User Card */}

                            <g
                                className="portal-user-card"
                                filter="url(#portalSmallShadow)"
                            >

                                <rect
                                    x="65"
                                    y="270"
                                    width="190"
                                    height="135"
                                    rx="18"
                                    fill="#ffffff"
                                />

                                <circle
                                    cx="105"
                                    cy="315"
                                    r="22"
                                    fill="#eef5ff"
                                />

                                <circle
                                    cx="105"
                                    cy="308"
                                    r="7"
                                    fill="#053456"
                                />

                                <path
                                    d="M91 328 Q105 315 119 328"
                                    fill="none"
                                    stroke="#053456"
                                    strokeWidth="2"
                                />

                                <rect
                                    x="140"
                                    y="302"
                                    width="75"
                                    height="8"
                                    rx="4"
                                    fill="#172554"
                                />

                                <rect
                                    x="140"
                                    y="318"
                                    width="55"
                                    height="6"
                                    rx="3"
                                    fill="#c4cfdd"
                                />

                                <rect
                                    x="90"
                                    y="355"
                                    width="125"
                                    height="8"
                                    rx="4"
                                    fill="#e8edf5"
                                />

                                <rect
                                    x="90"
                                    y="375"
                                    width="95"
                                    height="8"
                                    rx="4"
                                    fill="#e8edf5"
                                />

                            </g>


                            {/* Right Growth Card */}

                            <g
                                className="portal-growth-card"
                                filter="url(#portalSmallShadow)"
                            >

                                <rect
                                    x="950"
                                    y="250"
                                    width="190"
                                    height="135"
                                    rx="18"
                                    fill="#ffffff"
                                />

                                <text
                                    x="975"
                                    y="280"
                                    fontSize="13"
                                    fontWeight="700"
                                    fill="#172554"
                                >
                                    Portal Growth
                                </text>

                                <rect
                                    x="980"
                                    y="345"
                                    width="22"
                                    height="25"
                                    rx="4"
                                    fill="#c5daf5"
                                />

                                <rect
                                    x="1015"
                                    y="330"
                                    width="22"
                                    height="40"
                                    rx="4"
                                    fill="#8bb6e8"
                                />

                                <rect
                                    x="1050"
                                    y="310"
                                    width="22"
                                    height="60"
                                    rx="4"
                                    fill="#053456"
                                />

                                <path
                                    d="M975 330 C1005 325 1020 310 1040 315 C1060 320 1080 295 1110 275"
                                    fill="none"
                                    stroke="#53AE7D"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />

                                <path
                                    d="M1100 275 L1110 275 L1107 285"
                                    fill="none"
                                    stroke="#53AE7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />

                            </g>


                            {/* Floating Connection Icon */}

                            <g
                                className="portal-connect-icon"
                                filter="url(#portalSmallShadow)"
                            >

                                <circle
                                    cx="600"
                                    cy="95"
                                    r="36"
                                    fill="url(#portalBlueGradient)"
                                />

                                <circle
                                    cx="588"
                                    cy="95"
                                    r="8"
                                    fill="#ffffff"
                                />

                                <circle
                                    cx="612"
                                    cy="95"
                                    r="8"
                                    fill="#ffffff"
                                />

                                <line
                                    x1="596"
                                    y1="95"
                                    x2="604"
                                    y2="95"
                                    stroke="#ffffff"
                                    strokeWidth="3"
                                />

                            </g>


                            {/* Notification */}

                            <g
                                className="portal-notification"
                                filter="url(#portalSmallShadow)"
                            >

                                <rect
                                    x="720"
                                    y="75"
                                    width="170"
                                    height="55"
                                    rx="15"
                                    fill="#ffffff"
                                />

                                <circle
                                    cx="748"
                                    cy="102"
                                    r="13"
                                    fill="#53AE7D"
                                />

                                <path
                                    d="M742 102 L747 107 L755 97"
                                    fill="none"
                                    stroke="#ffffff"
                                    strokeWidth="2.5"
                                />

                                <text
                                    x="770"
                                    y="98"
                                    fontSize="10"
                                    fontWeight="700"
                                    fill="#172554"
                                >
                                    User Connected
                                </text>

                                <text
                                    x="770"
                                    y="113"
                                    fontSize="9"
                                    fill="#7b879d"
                                >
                                    New portal activity
                                </text>

                            </g>


                            {/* Floating Building Icon */}

                            <g className="portal-building">

                                <circle
                                    cx="175"
                                    cy="510"
                                    r="34"
                                    fill="#eef5ff"
                                />

                                <rect
                                    x="158"
                                    y="492"
                                    width="34"
                                    height="38"
                                    rx="3"
                                    fill="#053456"
                                />

                                <rect
                                    x="164"
                                    y="498"
                                    width="7"
                                    height="7"
                                    fill="#ffffff"
                                />

                                <rect
                                    x="179"
                                    y="498"
                                    width="7"
                                    height="7"
                                    fill="#ffffff"
                                />

                                <rect
                                    x="164"
                                    y="511"
                                    width="7"
                                    height="7"
                                    fill="#ffffff"
                                />

                                <rect
                                    x="179"
                                    y="511"
                                    width="7"
                                    height="7"
                                    fill="#ffffff"
                                />

                            </g>


                            {/* Floating Globe */}

                            <g className="portal-globe">

                                <circle
                                    cx="1035"
                                    cy="500"
                                    r="38"
                                    fill="#eefaf5"
                                />

                                <circle
                                    cx="1035"
                                    cy="500"
                                    r="20"
                                    fill="none"
                                    stroke="#53AE7D"
                                    strokeWidth="2.5"
                                />

                                <path
                                    d="M1015 500 H1055"
                                    stroke="#53AE7D"
                                    strokeWidth="2"
                                />

                                <path
                                    d="M1035 480 C1025 490 1025 510 1035 520"
                                    fill="none"
                                    stroke="#53AE7D"
                                    strokeWidth="2"
                                />

                                <path
                                    d="M1035 480 C1045 490 1045 510 1035 520"
                                    fill="none"
                                    stroke="#53AE7D"
                                    strokeWidth="2"
                                />

                            </g>

                        </svg>
                    </div>
                    <p>With the right combination of modern design, powerful functionality, secure architecture, and responsive development, we build portals that deliver a smooth experience across desktop, tablet, and mobile devices.</p>

                </div>
            </section>
            <div
                data-aos="fade-right"
                data-aos-delay={400}
                data-aos-once={true}
                className=''
            >
            </div>
            <section className="px-about-6-area pt-40 pb-40 pb-lg-110" style={{ backgroundColor: "#ffffff", overflowX: 'hidden', overflowY: 'hidden', }}>
                <div className="container container-1550">

                    <div className="row align-items-center">


                        {/* =========================================
          LEFT CONTENT (6 Columns)
      ========================================= */}
                        <div className="col-lg-6 col-md-12">
                            <div className="portal-services-content-wrapper">
                                <span className="tp-section-subtitle text-black blink-ball">
                                    Business-Focused Web Portal Solutions
                                </span>
                                <h4 className="px-about-title mb-20">
                                    <span className="text-blue-about">Professional Web Portal </span>  Development Services
                                </h4>


                                <p>
                                    Every business has different portal requirements.
                                    Our web portal development services are designed around your specific objectives,
                                    target audience, and workflow.
                                </p>

                                <p>
                                    From user registration and profile management to
                                    advanced search, listings, payments, notifications,
                                    dashboards, and administration, we develop complete
                                    portal solutions that can grow with your business.
                                </p>
                            </div>
                        </div>

                        {/* =========================================
          RIGHT IMAGE (6 Columns)
      ========================================= */}
                        <div className="col-lg-6 col-md-12">
                            <div className="portal-services-visual text-center">
                                <img
                                    src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
                                    alt="Web portal development illustration"
                                    className="img-fluid"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <div
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-once={true}
                className="mt-0 "
            >



            </div>

            <section className="px-about-6-area pt-40 pb-40 pb-lg-110" style={{ backgroundColor: '#f5f5f5', overflowX: 'hidden', overflowY: 'hidden' }}>
                <div className="container container-1550">
                    <h4 className="px-about-title mb-30 text-center">
                        <span className="text-blue-about">Our Portal Development</span> Solutions Include:
                    </h4>

                    {/* Added align-items-stretch so both columns match heights */}
                    <div className="row align-items-stretch">

                        {/* =========================================
                LEFT SIDE: TWO-COLUMN SOLUTIONS LIST (7 Columns)
            ========================================= */}
                        <div className="col-lg-7 col-md-12 mb-4 mb-lg-0 d-flex flex-column">
                            <div className="row flex-grow-1">
                                {portalSolutions.map((item, index) => {
                                    const Icon = portalIcons[index];

                                    return (
                                        <div className="col-md-6 mb-3 d-flex" key={index}>
                                            <div
                                                className="portal-services-item d-flex align-items-center p-3 w-100 h-100"
                                                style={{
                                                    borderRadius: "10px",
                                                    border: "none",
                                                    backgroundColor: "#fff",
                                                    transition: "all 0.3s ease-in-out",
                                                    cursor: "pointer"
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = "translateY(-4px)";
                                                    e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.08)";
                                                    const iconBox = e.currentTarget.querySelector(".portal-services-icon");
                                                    if (iconBox) iconBox.style.color = "#53ae7d";
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = "translateY(0px)";
                                                    e.currentTarget.style.boxShadow = "none";
                                                    const iconBox = e.currentTarget.querySelector(".portal-services-icon");
                                                    if (iconBox) iconBox.style.color = "#0056b3";
                                                }}
                                            >
                                                <div
                                                    className="portal-services-icon me-3 d-flex align-items-center justify-content-center"
                                                    style={{
                                                        minWidth: "40px",
                                                        height: "40px",
                                                        borderRadius: "8px",
                                                        backgroundColor: "#eef2ff",
                                                        color: "#0056b3",
                                                        transition: "color 0.3s ease-in-out"
                                                    }}
                                                >
                                                    {Icon && (
                                                        <Icon
                                                            size={19}
                                                            strokeWidth={1.8}
                                                        />
                                                    )}
                                                </div>

                                                <span className="text-figtree fw-medium text-dark">{item}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* =========================================
                RIGHT SIDE: IMAGE / VISUAL (5 Columns matching height)
            ========================================= */}
                        <div className="col-lg-5 col-md-12 d-flex">
                            <div className="portal-services-visual text-center ps-lg-4 w-100 d-flex flex-column justify-content-center">
                                <img
                                    src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
                                    alt="Portal Development Solutions"
                                    className="img-fluid w-100 shadow-sm"
                                    style={{
                                        height: "100%",
                                        maxHeight: "none",
                                        minHeight: "100%",
                                        objectFit: "cover",
                                        borderRadius: "12px"
                                    }}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <div
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-once={true}
                className="mt-0 "
            >



            </div>

            <section className="px-about-6-area pt-40 pb-40 pb-lg-110" style={{ background: '#fff', overflowX: 'hidden', overflowY: 'hidden' }}>
                <div className="container container-1550">
                    <div className="row align-items-center" data-aos="fade-up">
                        <div className="col-xl-3">
                            <span className="tp-section-subtitle text-black blink-ball">
                                Job & Career Portal Development
                            </span>
                        </div>

                        <div className="col-xl-9">
                            <div className="px-project-title-box">
                                <h4 className="px-about-title mb-20">
                                    <span className="text-blue-about"> Connect Employers, Recruiters </span> & Job Seekers
                                </h4>
                                <p className="text-figtree text-black mt-2">
                                    We develop modern and user-friendly Job & Career Portals that connect employers with qualified candidates through an easy-to-manage online platform. Whether you need a general job portal, industry-specific recruitment portal, or a career-focused platform, we can create a solution based on your business requirements.                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center mt-4">
                        <h5 className="mb-3 fw-bold text-center" style={{ fontFamily: '"Tenor Sans", "Tenor Sans Fallback"' }}>
                            Key Features
                        </h5>

                        {/* Right Features Grid Column (6 items per row using col-xl-2 / col-md-4) */}
                        <div
                            className="col-lg-12"
                            data-aos="fade-left"
                            data-aos-delay={400}
                            data-aos-once={true}
                        >
                            <div
                                className="row g-0 align-items-stretch feature-grid-wrapper"
                                style={{
                                    borderLeft: '1px solid rgba(83, 174, 125, 0.2)'
                                }}
                            >
                                {[
                                    { title: "Candidate & Employer Registration", icon: "fa-solid fa-user-plus" },
                                    { title: "Job Posting & Management", icon: "fa-solid fa-briefcase" },
                                    { title: "Resume / CV Upload", icon: "fa-solid fa-file-arrow-up" },
                                    { title: "Candidate Profile Management", icon: "fa-solid fa-id-card" },
                                    { title: "Advanced Job Search & Filters", icon: "fa-solid fa-magnifying-glass" },
                                    { title: "Location-Based Job Search", icon: "fa-solid fa-location-dot" },
                                    { title: "Job Categories & Industries", icon: "fa-solid fa-layer-group" },
                                    { title: "Online Job Applications", icon: "fa-solid fa-paper-plane" },
                                    { title: "Employer Dashboard", icon: "fa-solid fa-chart-pie" },
                                    { title: "Candidate Dashboard", icon: "fa-solid fa-gauge-high" },
                                    { title: "Job Alerts & Notifications", icon: "fa-solid fa-bell" },
                                    { title: "Featured & Premium Job Listings", icon: "fa-solid fa-star" },
                                    { title: "Application Management", icon: "fa-solid fa-list-check" },
                                    { title: "Admin Approval & Moderation", icon: "fa-solid fa-user-shield" },
                                    { title: "Subscription & Payment Integration", icon: "fa-solid fa-credit-card" },
                                    { title: "Reports & Analytics", icon: "fa-solid fa-chart-line" }
                                ].map((item, index) => (
                                    <div
                                        className="col-xl-2 col-md-4 col-6 text-center p-3 feature-grid-item d-flex align-items-stretch"
                                        key={index}
                                        style={{
                                            borderBottom: '1px solid rgba(83, 174, 125, 0.2)',
                                            borderRight: '1px solid rgba(83, 174, 125, 0.2)',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        <div className="feature-item-box w-100 d-flex flex-column align-items-center justify-content-between py-3">

                                            <div
                                                className="icon-circle mb-3 d-flex align-items-center justify-content-center"
                                                style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    borderRadius: '50%',
                                                    background: '#ffffff',
                                                    boxShadow: '0 5px 15px rgba(5, 52, 86, 0.05)',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                <i
                                                    className={item.icon}
                                                    style={{
                                                        fontSize: '22px',
                                                        color: '#53ae7d',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                ></i>
                                            </div>

                                            <h6
                                                className="feature-title mb-0"
                                                style={{
                                                    color: '#053456',
                                                    fontSize: '14px',
                                                    fontFamily: "Figtree, Figtree Fallback",
                                                    fontWeight: '600',
                                                    minHeight: '40px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                {item.title}
                                            </h6>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="text-figtree text-black mt-20">Our job portal development services include candidate registration, employer accounts, job posting, resume management, job search, applications, notifications, and administrative controls.
                        </p>

                    </div>
                </div>

                {/* Custom Hover & Equal Size Styles */}
                <style jsx>{`
        .feature-grid-item:hover {
            background-color: rgba(83, 174, 125, 0.04);
            transform: translateY(-3px);
        }
        .feature-grid-item:hover .icon-circle {
            background-color: #053456 !important;
            box-shadow: 0 8px 20px rgba(83, 174, 125, 0.25) !important;
        }
        .feature-grid-item:hover .icon-circle i {
            color: #ffffff !important;
        }
    `}</style>
            </section>
            <div
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-once={true}
                className="mt-0 "
            >



            </div>

            <section className="px-about-6-area pt-40 pb-40 pb-lg-110" style={{
                backgroundColor: "#f5f5f5", overflowX: 'hidden', overflowY: 'hidden',
            }}>
                <div className="container container-1550">

                    {/* Section Heading Area */}
                    <div className="row align-items-center mb-5" data-aos="fade-up">
                        <div className="col-xl-12">
                            <div className="px-project-title-box">
                                <span className="tp-section-subtitle text-black blink-ball">
                                    LMS Portal Development
                                </span>
                                <h4 className="px-about-title mb-20">
                                    <span className="text-blue-about">Build a Powerful Online </span>Learning Platform
                                </h4>
                                <p className="text-figtree text-black mt-2">
                                    An LMS (Learning Management System) Portal provides a centralized platform for institutions, trainers, businesses, and educators to deliver and manage online learning.

                                    We provide LMS portal development services to create customized learning platforms where administrators, instructors, and students can manage courses, lessons, assessments, progress, and learning resources from a single system.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Main Layout: Left 4 Columns Image, Right 8 Columns Features Grid (3 Columns) - Added align-items-stretch */}
                    <div className="row align-items-stretch">

                        {/* Left Side: 4 Columns Image (Matched to full row height) */}
                        <div className="col-lg-4 mb-4 mb-lg-0 d-flex flex-column" data-aos="fade-right" data-aos-delay={200} data-aos-once={true}>
                            <div className="directory-left-image-box text-center h-100 d-flex flex-column">
                                <img
                                    src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
                                    alt="Directory Portal Development"
                                    className="img-fluid w-100 shadow-sm"
                                    style={{
                                        borderRadius: '16px',
                                        objectFit: 'cover',
                                        height: '100%',
                                        maxHeight: 'none',
                                        minHeight: '100%',
                                        boxShadow: '0 10px 30px rgba(5, 52, 86, 0.08)'
                                    }}
                                />
                            </div>
                        </div>

                        {/* Right Side: 8 Columns Features Grid (3 Columns) */}
                        <div className="col-lg-8 d-flex flex-column" data-aos="fade-left" data-aos-delay={400} data-aos-once={true}>
                            <div className="row g-3 flex-grow-1">
                                {[
                                    { id: 1, title: "Student Registration & Login", icon: "fa-solid fa-user-plus" },
                                    { id: 2, title: "Instructor & Trainer Accounts", icon: "fa-solid fa-chalkboard-user" },
                                    { id: 3, title: "Course Creation & Management", icon: "fa-solid fa-book-open" },
                                    { id: 4, title: "Video-Based Learning", icon: "fa-solid fa-circle-play" },
                                    { id: 5, title: "Lessons & Learning Materials", icon: "fa-solid fa-file-lines" },
                                    { id: 6, title: "Online Assessments & Quizzes", icon: "fa-solid fa-list-ol" },
                                    { id: 7, title: "Assignment Management", icon: "fa-solid fa-file-pen" },
                                    { id: 8, title: "Student Progress Tracking", icon: "fa-solid fa-chart-line" },
                                    { id: 9, title: "Course Categories", icon: "fa-solid fa-layer-group" },
                                    { id: 10, title: "Certificates", icon: "fa-solid fa-certificate" },
                                    { id: 11, title: "Course Completion Tracking", icon: "fa-solid fa-list-check" },
                                    { id: 12, title: "Discussion & Communication", icon: "fa-solid fa-comments" },
                                    { id: 13, title: "Notifications & Announcements", icon: "fa-solid fa-bell" },
                                    { id: 14, title: "Subscription & Payment Integration", icon: "fa-solid fa-credit-card" },
                                    { id: 15, title: "Student & Instructor Dashboards", icon: "fa-solid fa-gauge-high" },
                                    { id: 16, title: "Admin Dashboard", icon: "fa-solid fa-user-gear" },
                                    { id: 17, title: "Reports & Analytics", icon: "fa-solid fa-chart-pie" }
                                ].map((item) => (
                                    <div className="col-lg-4 col-md-6 col-12 d-flex" key={item.id}>
                                        <div
                                            className="directory-feature-card d-flex align-items-center p-3 w-100 h-100"
                                            style={{
                                                transition: 'all 0.3s ease',
                                                borderRadius: '10px',
                                                border: '1px solid rgba(83, 174, 125, 0.15)',
                                                background: '#fff'
                                            }}
                                        >
                                            <div
                                                className="feature-icon-wrapper me-3 flex-shrink-0 d-flex align-items-center justify-content-center"
                                                style={{
                                                    width: '45px',
                                                    height: '45px',
                                                    borderRadius: '50%',
                                                    background: 'rgba(83, 174, 125, 0.1)',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                <i
                                                    className={item.icon}
                                                    style={{
                                                        fontSize: '16px',
                                                        color: '#53ae7d',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                ></i>
                                            </div>

                                            <div className="feature-content">
                                                <h6
                                                    className="mb-0"
                                                    style={{
                                                        color: '#053456',
                                                        fontSize: '13px',
                                                        fontWeight: '700',
                                                        fontFamily: 'Figtree, Figtree Fallback'
                                                    }}
                                                >
                                                    {item.title}
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                    <p className="text-figtree text-black mt-4 mb-0">Our LMS website development solutions can be designed for schools, colleges, training institutes, coaching centres, corporate training programs, professional educators, and online course businesses.</p>
                </div>

                {/* Custom Hover Effects */}
                <style jsx>{`
        .directory-feature-card:hover {
            border-color: #53ae7d !important;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(5, 52, 86, 0.05);
        }
        .directory-feature-card:hover .feature-icon-wrapper {
            background-color: #053456 !important;
        }
        .directory-feature-card:hover .feature-icon-wrapper i {
            color: #ffffff !important;
        }
    `}</style>
            </section>
            <div
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-once={true}
                className="px-magazine-area pt-60 pb-60 pb-lg-120"
                style={{ backgroundColor: '#fff' }}
            >
                <div className="container container-1550">

                    {/* Top Header Section */}
                    <div className="row justify-content-center mb-5">
                        <div className="row align-items-center" data-aos="fade-up">
                            <div className="col-xl-3">
                                <span className="tp-section-subtitle text-black blink-ball" style={{ color: '#053456' }}>
                                    Magazine Portal Development
                                </span>
                            </div>

                            <div className="col-xl-9">
                                <div className="px-project-title-box">
                                    <h4 className="px-about-title mb-20">
                                        <span className="text-blue-about" style={{ color: '#053456' }}>Create an Engaging </span>Digital Magazine Experience
                                    </h4>
                                    <p className="text-figtree text-black mt-2">
                                        Transform your publication into an interactive online platform with customized Magazine Portal Development solutions. We develop digital magazine portals for publishers, organizations, communities, brands, and niche publications where readers can explore articles, stories, interviews, features, images, videos, and other digital content.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Featured Editorial Image Showcase Section */}
                    <div className="row mb-30 align-items-center" data-aos="fade-up">
                        <div className="col-12">
                            <div
                                className="magazine-hero-image-wrapper p-3 p-lg-4"
                                style={{
                                    borderRadius: '16px',
                                    background: 'linear-gradient(135deg, rgba(5, 52, 86, 0.03) 0%, rgba(83, 174, 125, 0.05) 100%)',
                                    border: '1px solid rgba(83, 174, 125, 0.15)',
                                    boxShadow: '0 10px 30px rgba(5, 52, 86, 0.04)'
                                }}
                            >
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-lg-12">
                                        <div className="position-relative overflow-hidden text-center" style={{ borderRadius: '12px', minHeight: '300px', maxHeight: '380px' }}>
                                            <img
                                                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
                                                alt="Digital Magazine Portal Development"
                                                className="w-100 h-100 object-fit-cover"
                                                style={{ borderRadius: '12px', transition: 'transform 0.5s ease' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid - 5 Cards per row on Desktop, 2 cards per row on Mobile */}
                    <div className="row g-3 mb-5">
                        {[
                            { id: 1, title: "Digital magazine publishing", icon: "fa-solid fa-newspaper" },
                            { id: 2, title: "Article and content management", icon: "fa-solid fa-file-lines" },
                            { id: 3, title: "Magazine categories", icon: "fa-solid fa-folder-open" },
                            { id: 4, title: "Featured stories", icon: "fa-solid fa-star" },
                            { id: 5, title: "Author profiles", icon: "fa-solid fa-user-pen" },
                            { id: 6, title: "Image galleries", icon: "fa-solid fa-images" },
                            { id: 7, title: "Video content", icon: "fa-solid fa-circle-play" },
                            { id: 8, title: "Interview and editorial sections", icon: "fa-solid fa-microphone-lines" },
                            { id: 9, title: "Search and filtering", icon: "fa-solid fa-magnifying-glass" },
                            { id: 10, title: "Featured publications", icon: "fa-solid fa-book-bookmark" },
                            { id: 11, title: "Digital archive", icon: "fa-solid fa-box-archive" },
                            { id: 12, title: "Social media integration", icon: "fa-solid fa-share-nodes" },
                            { id: 13, title: "Newsletter subscription", icon: "fa-solid fa-envelope-open-text" },
                            { id: 14, title: "Advertisement management", icon: "fa-solid fa-rectangle-ad" },
                            { id: 15, title: "Subscription management", icon: "fa-solid fa-id-card" },
                            { id: 16, title: "Online payment integration", icon: "fa-solid fa-credit-card" },
                            { id: 17, title: "SEO-friendly pages", icon: "fa-solid fa-globe" },
                            { id: 18, title: "Mobile-friendly design", icon: "fa-solid fa-mobile-screen-button" },
                            { id: 19, title: "Admin and editor management", icon: "fa-solid fa-user-shield" }
                        ].map((item, index) => (
                            // col-xl custom override for exactly 5 columns per row, col-6 for 2 columns on mobile
                            <div className="col-xl-2dot4 col-lg-4 col-md-6 col-6 mb-3" key={item.id} data-aos="fade-up" data-aos-delay={(index % 5) * 50}>
                                <div
                                    className="magazine-feature-card p-3 h-100 d-flex flex-column justify-content-between"
                                    style={{
                                        transition: 'all 0.35s ease',
                                        borderRadius: '10px',
                                        border: '1px solid rgba(83, 174, 125, 0.15)',
                                        background: '#ffffff',
                                        boxShadow: '0 4px 15px rgba(5, 52, 86, 0.03)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                >
                                    {/* Top Accent Line on Card Hover */}
                                    <div
                                        className="card-top-line"
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '3px',
                                            background: '#53ae7d',
                                            transform: 'scaleX(0)',
                                            transformOrigin: 'left',
                                            transition: 'transform 0.3s ease'
                                        }}
                                    />

                                    <div>
                                        <div
                                            className="feature-icon-wrapper mb-3 d-flex align-items-center justify-content-center"
                                            style={{
                                                width: '45px',
                                                height: '45px',
                                                borderRadius: '50%',
                                                background: 'rgba(83, 174, 125, 0.1)',
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            <i
                                                className={`${item.icon} card-icon-hover`}
                                                style={{
                                                    fontSize: '16px',
                                                    color: '#53ae7d',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            ></i>
                                        </div>

                                        <h6
                                            className="mb-0"
                                            style={{
                                                color: '#053456',
                                                fontSize: '14px',
                                                fontWeight: '700',
                                                fontFamily: 'Figtree, Figtree Fallback',
                                                lineHeight: '1.4'
                                            }}
                                        >
                                            {item.title}
                                        </h6>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Closing Description */}
                    <p className="text-figtree text-black mt-20">A customized magazine portal can help publishers build a stronger digital presence while making content easier to discover and access across devices.</p>

                </div>
            </div>

            {/* Custom Styles for 5 columns layout, image effects and icon color transition on hover */}
            <style dangerouslySetInnerHTML={{
                __html: `
    @media (min-width: 1200px) {
        .col-xl-2dot4 {
            flex: 0 0 20%;
            max-width: 20%;
        }
    }
    .magazine-hero-image-wrapper img:hover {
        transform: scale(1.03);
    }
    .magazine-feature-card:hover {
        border-color: rgba(5, 52, 86, 0.2) !important;
        box-shadow: 0 8px 25px rgba(5, 52, 86, 0.08) !important;
        transform: translateY(-3px);
    }
    .magazine-feature-card:hover .card-top-line {
        transform: scaleX(1) !important;
    }
    .magazine-feature-card:hover .feature-icon-wrapper {
        background: rgba(5, 52, 86, 0.1) !important;
    }
    .magazine-feature-card:hover .card-icon-hover {
        color: #053456 !important;
    }
`}} />
            <div
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-once={true}
                className=""
            >
                <section className="px-about-6-area pt-40 pb-40 pb-lg-110" style={{ backgroundColor: "#f5f5f5", overflowX: 'hidden', overflowY: 'hidden', }}>
                    <div className="container container-1550">
                        {/* Section Header */}
                        <div className="row align-items-center mb-20" data-aos="fade-up">
                            <div className="col-xl-3">
                                <span className="tp-section-subtitle text-black blink-ball">
                                    Next-Gen Property Ecosystems
                                </span>
                            </div>
                            <div className="col-xl-8">
                                <div className="px-project-title-box">
                                    <h4 className="px-about-title mb-20">
                                        <span className="text-blue-about">Real Estate Portal </span> Architecture & Features
                                    </h4>
                                </div>
                            </div>
                        </div>

                        {/* Unique Layout with Clean Minimalist Lists and Centered Image */}
                        <div className="row g-4 align-items-center">
                            {/* Left Column: Minimalist Feature List */}
                            <div className="col-lg-4" data-aos="fade-right" data-aos-delay={200}>
                                <div className="d-flex flex-column gap-4">
                                    {[
                                        { id: 1, title: "Property Listing Management", icon: "fa-solid fa-house-laptop" },
                                        { id: 2, title: "Advanced Search Filters", icon: "fa-solid fa-sliders" },
                                        { id: 3, title: "Interactive Map Integration", icon: "fa-solid fa-map-location-dot" },
                                        { id: 4, title: "Lead Tracking & CRM", icon: "fa-solid fa-chart-pie" }
                                    ].map((item) => (
                                        <div key={item.id} className="re-list-item d-flex align-items-center">
                                            <div className="re-icon-box me-3 flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle" style={{ width: "42px", height: "42px", backgroundColor: "rgba(5, 52, 86, 0.06)", transition: "all 0.3s ease" }}>
                                                <i className={item.icon} style={{ color: "#053456", fontSize: "15px", transition: "all 0.3s ease" }}></i>
                                            </div>
                                            <div>
                                                <h6 className="mb-0" style={{ fontSize: "18px", fontWeight: "700", color: "#053456", fontFamily: "Figtree, Figtree Fallback", }}>{item.title}</h6>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Center Column: Perfectly Centered Image Box */}
                            <div className="col-lg-4 text-center my-4 my-lg-0" data-aos="zoom-in" data-aos-delay={300}>
                                <div className="directory-left-image-box text-center">
                                    <img
                                        src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
                                        alt="Real Estate Portal Development"
                                        className="img-fluid w-100"
                                        style={{ borderRadius: '16px', objectFit: 'cover', maxHeight: '480px', boxShadow: '0 10px 30px rgba(5, 52, 86, 0.08)' }}
                                    />
                                </div>
                            </div>

                            {/* Right Column: Minimalist Feature List */}
                            <div className="col-lg-4" data-aos="fade-left" data-aos-delay={400}>
                                <div className="d-flex flex-column gap-4">
                                    {[
                                        { id: 5, title: "Agent & Builder Profiles", icon: "fa-solid fa-id-badge" },
                                        { id: 6, title: "Virtual Tours & Media", icon: "fa-solid fa-video" },
                                        { id: 7, title: "Price Range & ROI Tools", icon: "fa-solid fa-calculator" },
                                        { id: 8, title: "Multi-Admin & Roles", icon: "fa-solid fa-user-shield" }
                                    ].map((item) => (
                                        <div key={item.id} className="re-list-item d-flex align-items-center">
                                            <div className="re-icon-box me-3 flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle" style={{ width: "42px", height: "42px", backgroundColor: "rgba(83, 174, 125, 0.1)", transition: "all 0.3s ease" }}>
                                                <i className={item.icon} style={{ color: "#53ae7d", fontSize: "15px", transition: "all 0.3s ease" }}></i>
                                            </div>
                                            <div>
                                                <h6 className="mb-0" style={{ fontSize: "18px", fontWeight: "700", color: "#053456", fontFamily: "Figtree, Figtree Fallback", }}>{item.title}</h6>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Custom Unique Styling for Minimalist Hover */}
                    <style jsx>{`
                .re-list-item {
                    transition: transform 0.3s ease;
                }
                .re-list-item:hover {
                    transform: translateX(5px);
                }
                .re-list-item:hover .re-icon-box {
                    background-color: #053456 !important;
                }
                .re-list-item:hover .re-icon-box i {
                    color: #ffffff !important;
                }
            `}</style>
                </section>
            </div>
            <div
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-once={true}
                className=""
            >
                <section className="px-about-6-area pt-40 pb-40 pb-lg-110" style={{ backgroundColor: '#fff', overflowX: 'hidden' }}>
                    <div className="container">
                        {/* Top Header Row */}
                        <div className="row align-items-center mb-40" data-aos="fade-up">
                            <div className="col-xl-3">
                                <span className="tp-section-subtitle text-black blink-ball" style={{ color: '#053456' }}>
                                    Feature-Rich Portal Development
                                </span>
                            </div>

                            <div className="col-xl-9">
                                <div className="px-project-title-box">
                                    <h4 className="px-about-title mb-20">
                                        <span className="text-blue-about" style={{ color: '#053456' }}>Restaurant </span>Portal Development
                                    </h4>
                                    <p className="text-figtree text-black mt-2">
                                        Build a restaurant discovery and listing platform where customers can search and explore restaurants, cuisines, menus, locations, offers, and reviews.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h5 className="mb-30 fw-bold" style={{ fontFamily: '"Tenor Sans", "Tenor Sans Fallback"', color: '#053456' }}>
                            Our restaurant portal solutions can include:
                        </h5>

                        {/* Main Content Row: Left Columns for Grid, Right Columns for Image */}
                        <div className="row align-items-center g-4">
                            {/* Left Side: 7 Columns for the Features Grid to give proper breathing room */}
                            <div className="col-lg-8">
                                <div className="restaurant-app-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px 20px' }}>
                                    {restaurantPortalFeatures.map((item) => (
                                        <div
                                            className="restaurant-app-item text-center p-2"
                                            key={item.id}
                                        >
                                            <div className="restaurant-app-icon mx-auto mb-2" style={{ width: '65px', height: '65px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                {/* Restaurant Registration */}
                                                {item.icon === "registration" && (
                                                    <svg viewBox="0 0 80 80" width="50" height="50">
                                                        <circle cx="40" cy="30" r="9" className="restaurant-svg" />
                                                        <path d="M23 61C25 45 55 45 57 61" className="restaurant-svg restaurant-svg-draw" />
                                                        <path d="M58 50V62M52 56H64" className="restaurant-svg restaurant-svg-draw" />
                                                    </svg>
                                                )}

                                                {/* Profile */}
                                                {item.icon === "profile" && (
                                                    <svg viewBox="0 0 80 80" width="50" height="50">
                                                        <circle cx="40" cy="28" r="9" className="restaurant-svg" />
                                                        <path d="M23 61C25 45 55 45 57 61" className="restaurant-svg restaurant-svg-draw" />
                                                    </svg>
                                                )}

                                                {/* Cuisine */}
                                                {item.icon === "cuisine" && (
                                                    <svg viewBox="0 0 80 80" width="50" height="50">
                                                        <path d="M25 18V42M31 18V42M28 42V64" className="restaurant-svg restaurant-svg-draw" />
                                                        <path d="M25 18V31H31V18" className="restaurant-svg" />
                                                        <path d="M50 18C43 26 43 39 50 43V64" className="restaurant-svg restaurant-svg-draw" />
                                                        <path d="M50 18C57 26 57 39 50 43" className="restaurant-svg" />
                                                    </svg>
                                                )}

                                                {/* Location */}
                                                {item.icon === "location" && (
                                                    <svg viewBox="0 0 80 80" width="50" height="50">
                                                        <path d="M40 66S21 47 21 33A19 19 0 0 1 59 33C59 47 40 66 40 66Z" className="restaurant-svg restaurant-svg-pin" />
                                                        <circle cx="40" cy="33" r="7" className="restaurant-svg" />
                                                    </svg>
                                                )}

                                                {/* Menu */}
                                                {item.icon === "menu" && (
                                                    <svg viewBox="0 0 80 80" width="50" height="50">
                                                        <rect x="20" y="13" width="40" height="54" rx="5" className="restaurant-svg" />
                                                        <path d="M29 28H51M29 38H51M29 48H45M29 58H40" className="restaurant-svg restaurant-svg-draw" />
                                                    </svg>
                                                )}

                                                {/* Food */}
                                                {item.icon === "food" && (
                                                    <svg viewBox="0 0 80 80" width="50" height="50">
                                                        <circle cx="40" cy="42" r="23" className="restaurant-svg restaurant-svg-rotate" />
                                                        <path d="M25 42H55M40 27V57" className="restaurant-svg restaurant-svg-draw" />
                                                        <circle cx="40" cy="42" r="5" className="restaurant-svg" />
                                                    </svg>
                                                )}

                                                {/* Reviews */}
                                                {item.icon === "reviews" && (
                                                    <svg viewBox="0 0 80 80" width="50" height="50">
                                                        <path d="M40 13L47 29L65 31L52 43L55 61L40 52L25 61L28 43L15 31L33 29L40 13Z" className="restaurant-svg restaurant-svg-star" />
                                                    </svg>
                                                )}

                                                {/* Offers */}
                                                {item.icon === "offers" && (
                                                    <svg viewBox="0 0 80 80" width="50" height="50">
                                                        <path d="M20 18H60V62H20V18Z" className="restaurant-svg" />
                                                        <path d="M27 30H53M27 40H53M27 50H44" className="restaurant-svg restaurant-svg-draw" />
                                                        <circle cx="55" cy="57" r="8" className="restaurant-svg" />
                                                        <path d="M55 53V61M51 57H59" className="restaurant-svg restaurant-svg-draw" />
                                                    </svg>
                                                )}

                                                {/* Enquiry */}
                                                {item.icon === "enquiry" && (
                                                    <svg viewBox="0 0 80 80" width="50" height="50">
                                                        <path d="M14 20H66V55H32L20 65V55H14V20Z" className="restaurant-svg" />
                                                        <path d="M26 32H54M26 42H49" className="restaurant-svg restaurant-svg-draw" />
                                                    </svg>
                                                )}

                                                {/* Booking */}
                                                {item.icon === "booking" && (
                                                    <svg viewBox="0 0 80 80" width="50" height="50">
                                                        <rect x="15" y="19" width="50" height="46" rx="5" className="restaurant-svg" />
                                                        <path d="M15 33H65" className="restaurant-svg" />
                                                        <path d="M27 14V24M53 14V24" className="restaurant-svg restaurant-svg-draw" />
                                                        <path d="M27 44H53M27 53H44" className="restaurant-svg restaurant-svg-draw" />
                                                    </svg>
                                                )}

                                                {/* Ordering */}
                                                {item.icon === "ordering" && (
                                                    <svg viewBox="0 0 80 80" width="50" height="50">
                                                        <path d="M18 20H25L30 53H58L63 30H27" className="restaurant-svg restaurant-svg-draw" />
                                                        <circle cx="34" cy="62" r="4" className="restaurant-svg" />
                                                        <circle cx="54" cy="62" r="4" className="restaurant-svg" />
                                                        <path d="M37 40L43 46L54 34" className="restaurant-svg restaurant-svg-draw" />
                                                    </svg>
                                                )}

                                                {/* Dashboard */}
                                                {item.icon === "dashboard" && (
                                                    <svg viewBox="0 0 80 80" width="50" height="50">
                                                        <rect x="13" y="14" width="54" height="52" rx="6" className="restaurant-svg" />
                                                        <path d="M13 30H67" className="svg" />
                                                        <path d="M25 53V44M39 53V37M53 53V32" className="restaurant-svg restaurant-svg-bars" />
                                                    </svg>
                                                )}

                                                {/* Admin */}
                                                {item.icon === "admin" && (
                                                    <svg viewBox="0 0 80 80" width="50" height="50">
                                                        <circle cx="40" cy="27" r="9" className="restaurant-svg" />
                                                        <path d="M23 61C25 45 55 45 57 61" className="restaurant-svg restaurant-svg-draw" />
                                                        <circle cx="59" cy="54" r="9" className="restaurant-svg" />
                                                        <path d="M59 49V59M54 54H64" className="restaurant-svg restaurant-svg-draw" />
                                                    </svg>
                                                )}
                                            </div>

                                            <div className="restaurant-app-title text-tenor" style={{ fontSize: '14px', fontWeight: '600', color: '#053456', lineHeight: '1.3' }}>
                                                {item.title}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side: 5 Columns for a Single Feature Image with nice spacing */}
                            <div className="col-lg-4 ps-lg-4 mt-4 mt-lg-0">
                                <div className="restaurant-portal-side-image text-center">
                                      <img
                                    src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
                                    alt="Directory Portal Development"
                                    className="img-fluid w-100 shadow-sm"
                                    style={{
                                        borderRadius: '16px',
                                        objectFit: 'cover',
                                        height: '500px',
                                        maxHeight: 'none',
                                        minHeight: '100%',
                                        boxShadow: '0 10px 30px rgba(5, 52, 86, 0.08)'
                                    }}
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Responsive override for grid layout */}
                <style dangerouslySetInnerHTML={{
                    __html: `
    @media (max-width: 991px) {
        .restaurant-app-grid {
            grid-template-columns: repeat(2, 1fr) !important;
        }
    }
    @media (max-width: 575px) {
        .restaurant-app-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 15px 10px !important;
        }
    }
`}} />
            </div>

            <div
                data-aos="fade-up"
                data-aos-delay={300}
                data-aos-once={true}
                className="px-about-6-area pt-40 pb-40 pb-lg-110"
                style={{
                    overflowX: 'hidden', overflowY: 'hidden', backgroundColor: "#f5f5f5",

                }}
            >

                <div className="container container-1550">


                    <div className="portal-benefits-heading mb-40">
                        <span className="tp-section-subtitle text-black blink-ball">
                            The Advantage of Our Portal Solutions
                        </span>

                        <h4 className="px-about-title">
                            <span className="text-blue-about">
                                Why Choose Our Web Portal
                            </span>{" "}
                            Development Services?
                        </h4>
                        <p>
                            We focus on developing portals that are not only visually attractive
                            but also practical, scalable, and easy to manage.
                        </p>
                    </div>

                    <div className="portal-benefits-list">
                        {webPortalBenefits.map((item, index) => (
                            <div
                                className="portal-benefit-card"
                                key={item.id}
                                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                                data-aos-delay={index * 100}
                                data-aos-once={true}
                            >

                                <div className="portal-benefit-number">
                                    {String(item.id).padStart(2, "0")}
                                </div>

                                <div className="portal-benefit-icon">

                                    {item.icon === "custom" && (
                                        <svg viewBox="0 0 64 64" className="benefit-svg">
                                            <rect
                                                x="14"
                                                y="14"
                                                width="36"
                                                height="36"
                                                rx="6"
                                                className="svg-draw"
                                            />
                                            <path
                                                d="M22 25h20M22 32h14M22 39h18"
                                                className="svg-draw"
                                            />
                                        </svg>
                                    )}

                                    {item.icon === "mobile" && (
                                        <svg viewBox="0 0 64 64" className="benefit-svg">
                                            <rect
                                                x="20"
                                                y="9"
                                                width="24"
                                                height="46"
                                                rx="5"
                                                className="svg-draw"
                                            />
                                            <circle
                                                cx="32"
                                                cy="48"
                                                r="2"
                                                className="svg-dot"
                                            />
                                        </svg>
                                    )}

                                    {item.icon === "scale" && (
                                        <svg viewBox="0 0 64 64" className="benefit-svg">
                                            <path
                                                d="M32 12v40M18 20h28M14 52h36"
                                                className="svg-draw"
                                            />
                                            <path
                                                d="M18 20l-9 14h18zM46 20l-9 14h18z"
                                                className="svg-draw"
                                            />
                                        </svg>
                                    )}

                                    {item.icon === "admin" && (
                                        <svg viewBox="0 0 64 64" className="benefit-svg">
                                            <circle
                                                cx="32"
                                                cy="20"
                                                r="8"
                                                className="svg-draw"
                                            />
                                            <path
                                                d="M17 48c1-10 8-15 15-15s14 5 15 15"
                                                className="svg-draw"
                                            />
                                            <circle
                                                cx="49"
                                                cy="45"
                                                r="6"
                                                className="svg-pulse"
                                            />
                                        </svg>
                                    )}

                                    {item.icon === "seo" && (
                                        <svg viewBox="0 0 64 64" className="benefit-svg">
                                            <circle
                                                cx="28"
                                                cy="28"
                                                r="14"
                                                className="svg-draw"
                                            />
                                            <path
                                                d="M39 39l12 12"
                                                className="svg-draw"
                                            />
                                            <path
                                                d="M21 28l5 5 10-11"
                                                className="svg-draw svg-check"
                                            />
                                        </svg>
                                    )}

                                    {item.icon === "security" && (
                                        <svg viewBox="0 0 64 64" className="benefit-svg">
                                            <path
                                                d="M32 8l20 8v15c0 13-8 22-20 26C20 53 12 44 12 31V16z"
                                                className="svg-draw"
                                            />
                                            <path
                                                d="M22 31l7 7 14-15"
                                                className="svg-draw svg-check"
                                            />
                                        </svg>
                                    )}

                                </div>

                                <div className="portal-benefit-content">
                                    <h3 className="text-tenor">
                                        {item.title}
                                    </h3>

                                    <p>
                                        {item.description}
                                    </p>
                                </div>

                                <div className="portal-benefit-arrow">
                                    <span>↗</span>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <div
                data-aos="fade-up"
                data-aos-delay={300}
                data-aos-once={true}
                className="px-about-6-area pt-40 pb-40 pb-lg-110 portal-growth-box" style={{ overflowX: "hidden", overflowY: "hidden" }}  >

                <div className="container container-1550">






                    <div className="row align-items-center">

                        {/* LEFT CONTENT */}

                        <div className="col-lg-7">

                            <div
                                data-aos="fade-right"
                                data-aos-delay={400}
                                data-aos-once={true}
                                className="portal-growth-content"
                            >
                                <span className="tp-section-subtitle text-white blink-ball">
                                    Custom Portal Solutions
                                </span>
                                <h4 className="px-about-title text-white">
                                    <span className="text-blue-about text-white">
                                        Grow Your Online Business
                                    </span>{" "}
                                    With a Custom Web Portal
                                </h4>
                                <p>
                                    Whether you want to launch a local directory in Chennai,
                                    a nationwide classified platform, a property listing portal,
                                    a recruitment website, or a restaurant discovery platform,
                                    we can help turn your idea into a functional digital platform.
                                </p>

                                <p>
                                    Our team combines <strong>website portal development</strong>,
                                    UI/UX design, custom functionality, database integration,
                                    and SEO-friendly development to create portals built around
                                    real business objectives.
                                </p>

                                <div className="portal-growth-actions">


                                    <button
                                        onClick={openModal}
                                        className="btn d-inline-flex align-items-center gap-2 py-3 px-4 rounded-3 fw-bold text-decoration-none"
                                        style={{
                                            backgroundColor: '#53ae7d',
                                            color: '#ffffff',
                                            fontSize: '15px',
                                            transition: 'all 0.3s ease',
                                            border: '1px solid #53ae7d',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = '#53ae7d';
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = '#53ae7d';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <span style={{ fontFamily: "Figtree, Figtree Fallback" }}>Discuss Your Portal</span>
                                        <i className="fa-solid fa-paper-plane" style={{ fontSize: '14px' }}></i>
                                    </button>

                                </div>

                            </div>

                        </div>

                        {/* RIGHT VISUAL */}

                        <div className="col-lg-5">
                            <div
                                data-aos="zoom-in"
                                data-aos-delay={500}
                                data-aos-once={true}
                                className="portal-growth-visual"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
                                    alt="Shopify Development"
                                    className="img-fluid"
                                    style={{
                                        width: "100%",
                                        height: "400px",
                                        objectFit: "cover",
                                        borderRadius: "20px",
                                        display: "block",
                                    }}
                                />
                            </div>
                        </div>

                    </div>




                    {/* CTA */}



                </div>
            </div>
            <section
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-once={true}
                className="px-about-6-area pt-40 pb-40 pb-lg-110" style={{ overflowX: "hidden", overflowY: "hidden" }}
            >
                <div className="container container-1550">
                    <div className="row align-items-center">
                        {/* Left Column: Image */}
                        <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right" data-aos-delay={200}>
                            <div className="portal-cta-image text-center">
                                <img
                                    src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
                                    alt="Web Portal Development Chennai"
                                    className="img-fluid w-100"
                                    style={{ borderRadius: '16px', objectFit: 'cover', maxHeight: '450px' }}
                                />
                            </div>
                        </div>

                        {/* Right Column: Content & Button */}
                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay={300}>
                            <div className="portal-cta-content ps-lg-4">
                                <span className="tp-section-subtitle text-black blink-ball">
                                    Ready To Build Your Portal?
                                </span>

                                <h4 className="px-about-title mb-20">
                                    <span className="text-blue-about">Looking for a Web Portal
                                        Development</span> Company in Chennai?
                                </h4>

                                <p className="text-figtree text-black mb-4" style={{ fontSize: "16px", lineHeight: "1.6" }}>
                                    Turn your portal idea into a powerful online platform with a customized solution designed for your business. Talk to our team today to discuss your web portal requirements and get a customized development plan.
                                </p>

                                {/* Left Aligned CTA Button */}
                                <button
                                    onClick={openModal}
                                    className="btn d-inline-flex align-items-center gap-2 py-3 px-4 rounded-3 fw-bold text-decoration-none"
                                    style={{
                                        backgroundColor: '#053456',
                                        color: '#ffffff',
                                        fontSize: '15px',
                                        transition: 'all 0.3s ease',
                                        border: '1px solid #053456',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#053456';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = '#053456';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <span style={{ fontFamily: "Figtree, Figtree Fallback" }}>Let's Talk our Team</span>
                                    <i className="fa-solid fa-paper-plane" style={{ fontSize: '14px' }}></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >

    )
}

export default PortalWeb
