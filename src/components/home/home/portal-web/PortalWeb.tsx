'use client'
import BreadcurmbData from '@/components/breadcrum/sections/breadcrumbdata'
import React from 'react'
import IntroContent from '../myComponents/common/IntroContent'
import { useQuoteModal } from '../myComponents/Content/QuoteContext';
import { useAOS } from "@/components/hooks/useAOS";
import { portalSolutions, portalIcons, classifiedFeatures, directoryPortalFeatures, realEstatePortalFeatures, restaurantPortalFeatures, jobPortalFeatures, webPortalBenefits } from './PortalData/data'
function PortalWeb() {
    useAOS();
    return (
        <div>
            <IntroContent
                leftTitle="Custom Online Stores Built for Your Brand"
                rightTitle1="Build a Powerful E-commerce "
                rightTitle2="Website Designed Around Your Business  "
                description="Your online store should do more than display products—it should create a smooth buying experience that turns visitors into customers. At Yulanto Web Creations, we provide custom e-commerce website design and e-commerce web development services in Chennai for businesses looking to establish, improve, or scale their online presence."
            />
            <div className='container'>
                <div className="web-portal-animation">
                    <svg
                        className="portal-svg"
                        viewBox="0 0 1200 700"
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

                        <ellipse
                            cx="600"
                            cy="625"
                            rx="480"
                            ry="35"
                            fill="#eaf1f8"
                        />

                        <circle
                            className="portal-bg-circle portal-bg-circle-one"
                            cx="160"
                            cy="190"
                            r="100"
                            fill="#eef5ff"
                        />

                        <circle
                            className="portal-bg-circle portal-bg-circle-two"
                            cx="1050"
                            cy="180"
                            r="95"
                            fill="#eefaf5"
                        />


                        {/* Floating Dots */}

                        <circle
                            className="portal-dot portal-dot-one"
                            cx="120"
                            cy="120"
                            r="7"
                            fill="#053456"
                        />

                        <circle
                            className="portal-dot portal-dot-two"
                            cx="1080"
                            cy="330"
                            r="7"
                            fill="#53AE7D"
                        />

                        <circle
                            className="portal-dot portal-dot-three"
                            cx="220"
                            cy="430"
                            r="6"
                            fill="#53AE7D"
                        />


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
            </div>
            <div className='container'>
                <p>With the right combination of modern design, powerful functionality, secure architecture, and responsive development, we build portals that deliver a smooth experience across desktop, tablet, and mobile devices.</p>
            </div>
            <div
                data-aos="fade-right"
                data-aos-delay={400}
                data-aos-once={true}
                className='mt-100 mb-50'
            >
                <div className="container">
                    <div className="row align-items-start">

                        {/* =========================================
                        LEFT CONTENT
                    ========================================= */}
                        <div className="col-md-12">
                            <span className="tp-section-subtitle text-black blink-ball">
                                Business-Focused Web Portal Solutions
                            </span>

                            <h4 className="px-about-title">
                                <span className="text-blue-about">
                                    Professional Web Portal
                                </span>{" "}
                                Development Services
                            </h4>

                        </div>

                        <div className="col-lg-7">
                            <div className="portal-services-content">



                                <p>
                                    Every business has different portal requirements.
                                    Our web portal development services{' '}
                                    are designed around your specific objectives,
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
                        RIGHT SVG
                    ========================================= */}
                        <div className="col-lg-5">
                            <div className="portal-services-visual">

                                <svg
                                    className="portal-services-svg"
                                    viewBox="0 0 500 500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-label="Web portal development illustration"
                                >

                                    {/* Browser */}
                                    <rect
                                        x="55"
                                        y="60"
                                        width="390"
                                        height="300"
                                        rx="18"
                                        fill="#ffffff"
                                        stroke="#053456"
                                        strokeWidth="3"
                                    />

                                    {/* Browser Header */}
                                    <rect
                                        x="55"
                                        y="60"
                                        width="390"
                                        height="55"
                                        rx="18"
                                        fill="#053456"
                                        opacity="0.07"
                                    />

                                    {/* Browser Dots */}
                                    <circle
                                        cx="85"
                                        cy="87"
                                        r="6"
                                        fill="#053456"
                                    />

                                    <circle
                                        cx="107"
                                        cy="87"
                                        r="6"
                                        fill="#053456"
                                        opacity="0.5"
                                    />

                                    <circle
                                        cx="129"
                                        cy="87"
                                        r="6"
                                        fill="#053456"
                                        opacity="0.3"
                                    />

                                    {/* Address Bar */}
                                    <rect
                                        x="165"
                                        y="76"
                                        width="180"
                                        height="22"
                                        rx="11"
                                        fill="#053456"
                                        opacity="0.08"
                                    />


                                    {/* Sidebar */}
                                    <rect
                                        x="80"
                                        y="140"
                                        width="75"
                                        height="185"
                                        rx="9"
                                        fill="#053456"
                                        opacity="0.06"
                                    />

                                    <rect
                                        x="98"
                                        y="160"
                                        width="38"
                                        height="9"
                                        rx="4"
                                        fill="#053456"
                                        opacity="0.25"
                                    />

                                    <rect
                                        x="98"
                                        y="190"
                                        width="42"
                                        height="9"
                                        rx="4"
                                        fill="#053456"
                                        opacity="0.12"
                                    />

                                    <rect
                                        x="98"
                                        y="220"
                                        width="35"
                                        height="9"
                                        rx="4"
                                        fill="#053456"
                                        opacity="0.12"
                                    />

                                    <rect
                                        x="98"
                                        y="250"
                                        width="44"
                                        height="9"
                                        rx="4"
                                        fill="#053456"
                                        opacity="0.12"
                                    />

                                    <rect
                                        x="98"
                                        y="280"
                                        width="32"
                                        height="9"
                                        rx="4"
                                        fill="#053456"
                                        opacity="0.12"
                                    />


                                    {/* Main Content */}
                                    <rect
                                        x="175"
                                        y="140"
                                        width="245"
                                        height="65"
                                        rx="10"
                                        fill="#053456"
                                        opacity="0.06"
                                    />

                                    <rect
                                        x="195"
                                        y="160"
                                        width="95"
                                        height="11"
                                        rx="5"
                                        fill="#053456"
                                    />

                                    <rect
                                        x="195"
                                        y="181"
                                        width="145"
                                        height="7"
                                        rx="3"
                                        fill="#053456"
                                        opacity="0.15"
                                    />


                                    {/* Portal Cards */}
                                    <rect
                                        x="175"
                                        y="225"
                                        width="75"
                                        height="75"
                                        rx="10"
                                        fill="#ffffff"
                                        stroke="#053456"
                                        strokeOpacity="0.12"
                                    />

                                    <rect
                                        x="260"
                                        y="225"
                                        width="75"
                                        height="75"
                                        rx="10"
                                        fill="#ffffff"
                                        stroke="#053456"
                                        strokeOpacity="0.12"
                                    />

                                    <rect
                                        x="345"
                                        y="225"
                                        width="75"
                                        height="75"
                                        rx="10"
                                        fill="#ffffff"
                                        stroke="#053456"
                                        strokeOpacity="0.12"
                                    />


                                    {/* Card Icons */}
                                    <circle
                                        cx="212"
                                        cy="250"
                                        r="13"
                                        fill="#053456"
                                        opacity="0.1"
                                    />

                                    <circle
                                        cx="297"
                                        cy="250"
                                        r="13"
                                        fill="#053456"
                                        opacity="0.1"
                                    />

                                    <circle
                                        cx="382"
                                        cy="250"
                                        r="13"
                                        fill="#053456"
                                        opacity="0.1"
                                    />


                                    {/* Card Lines */}
                                    <rect
                                        x="192"
                                        y="275"
                                        width="40"
                                        height="6"
                                        rx="3"
                                        fill="#053456"
                                        opacity="0.18"
                                    />

                                    <rect
                                        x="277"
                                        y="275"
                                        width="40"
                                        height="6"
                                        rx="3"
                                        fill="#053456"
                                        opacity="0.18"
                                    />

                                    <rect
                                        x="362"
                                        y="275"
                                        width="40"
                                        height="6"
                                        rx="3"
                                        fill="#053456"
                                        opacity="0.18"
                                    />


                                    {/* User Connection Circle */}
                                    <circle
                                        cx="250"
                                        cy="400"
                                        r="62"
                                        fill="#053456"
                                        opacity="0.06"
                                    />

                                    <circle
                                        cx="250"
                                        cy="380"
                                        r="18"
                                        fill="#053456"
                                        opacity="0.2"
                                    />

                                    <path
                                        d="M215 435 C220 400 280 400 285 435"
                                        fill="none"
                                        stroke="#053456"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                    />


                                    {/* Connection Lines */}
                                    <path
                                        d="M115 365 C155 390 180 400 200 400"
                                        fill="none"
                                        stroke="#053456"
                                        strokeWidth="2.5"
                                        strokeDasharray="7 7"
                                        opacity="0.3"
                                    />

                                    <path
                                        d="M300 400 C330 395 350 375 375 350"
                                        fill="none"
                                        stroke="#053456"
                                        strokeWidth="2.5"
                                        strokeDasharray="7 7"
                                        opacity="0.3"
                                    />


                                    {/* Floating User Card */}
                                    <g className="portal-services-user-card">

                                        <rect
                                            x="25"
                                            y="275"
                                            width="125"
                                            height="90"
                                            rx="14"
                                            fill="#ffffff"
                                            stroke="#053456"
                                            strokeOpacity="0.1"
                                        />

                                        <circle
                                            cx="55"
                                            cy="310"
                                            r="16"
                                            fill="#053456"
                                            opacity="0.1"
                                        />

                                        <circle
                                            cx="55"
                                            cy="306"
                                            r="6"
                                            fill="#053456"
                                        />

                                        <path
                                            d="M45 320 Q55 312 65 320"
                                            fill="none"
                                            stroke="#053456"
                                            strokeWidth="2"
                                        />

                                        <rect
                                            x="80"
                                            y="300"
                                            width="50"
                                            height="7"
                                            rx="3"
                                            fill="#053456"
                                            opacity="0.2"
                                        />

                                        <rect
                                            x="80"
                                            y="315"
                                            width="35"
                                            height="6"
                                            rx="3"
                                            fill="#053456"
                                            opacity="0.1"
                                        />

                                    </g>


                                    {/* Floating Globe */}
                                    <g className="portal-services-globe">

                                        <circle
                                            cx="425"
                                            cy="390"
                                            r="35"
                                            fill="#053456"
                                            opacity="0.07"
                                        />

                                        <circle
                                            cx="425"
                                            cy="390"
                                            r="19"
                                            fill="none"
                                            stroke="#053456"
                                            strokeWidth="2"
                                        />

                                        <path
                                            d="M406 390 H444"
                                            stroke="#053456"
                                            strokeWidth="2"
                                        />

                                        <path
                                            d="M425 371 C415 380 415 400 425 409"
                                            fill="none"
                                            stroke="#053456"
                                            strokeWidth="2"
                                        />

                                        <path
                                            d="M425 371 C435 380 435 400 425 409"
                                            fill="none"
                                            stroke="#053456"
                                            strokeWidth="2"
                                        />

                                    </g>

                                </svg>

                            </div>
                        </div>

                    </div>
                </div>
                <div className='container'>
                    <h3 className="text-tenor portal-services-list-title">
                        Our Portal Development Solutions Include:
                    </h3>
                    <div className="portal-services-list">
                        {portalSolutions.map((item, index) => {
                            const Icon = portalIcons[index];

                            return (
                                <div
                                    className="portal-services-item"
                                    key={index}
                                >
                                    <div className="portal-services-icon">
                                        <Icon
                                            size={19}
                                            strokeWidth={1.8}
                                        />
                                    </div>

                                    <span className='text-figtree'>{item}</span>
                                </div>
                            );
                        })}
                    </div>

                </div>

            </div>
            <div data-aos="fade-right"
                data-aos-delay={400}
                data-aos-once={true}
                className='mt-100 mb-50' style={{ background: '#f5f5f5' }}>
                <section className="classified-portal-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <span className="tp-section-subtitle text-black blink-ball">
                                    Scalable Classified Portal Development
                                </span>

                                <h4 className="px-about-title">
                                    <span className="text-blue-about">
                                        Classified Portal
                                    </span>{" "}
                                    Development
                                </h4>
                            </div>


                            {/* Right Illustration */}
                            <div className="col-lg-5">
                                <div className="classified-portal-visual">

                                    <svg
                                        className="classified-portal-svg"
                                        viewBox="0 0 500 500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        role="img"
                                        aria-label="Classified portal development illustration"
                                    >

                                        {/* Background Circle */}
                                        <circle
                                            cx="250"
                                            cy="250"
                                            r="190"
                                            fill="#053456"
                                            opacity="0.04"
                                        />

                                        <circle
                                            cx="250"
                                            cy="250"
                                            r="150"
                                            fill="#053456"
                                            opacity="0.035"
                                        />


                                        {/* Main Browser */}
                                        <g className="classified-browser">

                                            <rect
                                                x="85"
                                                y="105"
                                                width="330"
                                                height="245"
                                                rx="16"
                                                fill="#ffffff"
                                                stroke="#053456"
                                                strokeWidth="3"
                                            />

                                            {/* Browser Header */}
                                            <rect
                                                x="85"
                                                y="105"
                                                width="330"
                                                height="45"
                                                rx="16"
                                                fill="#053456"
                                                opacity="0.07"
                                            />

                                            {/* Browser Dots */}
                                            <circle
                                                cx="110"
                                                cy="127"
                                                r="5"
                                                fill="#053456"
                                            />

                                            <circle
                                                cx="128"
                                                cy="127"
                                                r="5"
                                                fill="#053456"
                                                opacity="0.5"
                                            />

                                            <circle
                                                cx="146"
                                                cy="127"
                                                r="5"
                                                fill="#053456"
                                                opacity="0.3"
                                            />

                                            {/* Search Bar */}
                                            <rect
                                                x="175"
                                                y="116"
                                                width="145"
                                                height="22"
                                                rx="11"
                                                fill="#053456"
                                                opacity="0.08"
                                            />

                                            {/* Search Icon */}
                                            <circle
                                                cx="192"
                                                cy="127"
                                                r="5"
                                                fill="none"
                                                stroke="#053456"
                                                strokeWidth="1.5"
                                            />

                                            <line
                                                x1="196"
                                                y1="131"
                                                x2="200"
                                                y2="135"
                                                stroke="#053456"
                                                strokeWidth="1.5"
                                            />


                                            {/* Categories */}
                                            <rect
                                                x="105"
                                                y="170"
                                                width="75"
                                                height="145"
                                                rx="9"
                                                fill="#053456"
                                                opacity="0.05"
                                            />

                                            <rect
                                                x="118"
                                                y="188"
                                                width="45"
                                                height="8"
                                                rx="4"
                                                fill="#053456"
                                                opacity="0.2"
                                            />

                                            <rect
                                                x="118"
                                                y="213"
                                                width="38"
                                                height="7"
                                                rx="3"
                                                fill="#053456"
                                                opacity="0.1"
                                            />

                                            <rect
                                                x="118"
                                                y="237"
                                                width="42"
                                                height="7"
                                                rx="3"
                                                fill="#053456"
                                                opacity="0.1"
                                            />

                                            <rect
                                                x="118"
                                                y="261"
                                                width="35"
                                                height="7"
                                                rx="3"
                                                fill="#053456"
                                                opacity="0.1"
                                            />

                                            <rect
                                                x="118"
                                                y="285"
                                                width="45"
                                                height="7"
                                                rx="3"
                                                fill="#053456"
                                                opacity="0.1"
                                            />


                                            {/* Listing Cards */}

                                            <rect
                                                x="195"
                                                y="170"
                                                width="95"
                                                height="65"
                                                rx="8"
                                                fill="#ffffff"
                                                stroke="#053456"
                                                strokeOpacity="0.12"
                                            />

                                            <rect
                                                x="300"
                                                y="170"
                                                width="95"
                                                height="65"
                                                rx="8"
                                                fill="#ffffff"
                                                stroke="#053456"
                                                strokeOpacity="0.12"
                                            />

                                            <rect
                                                x="195"
                                                y="250"
                                                width="95"
                                                height="65"
                                                rx="8"
                                                fill="#ffffff"
                                                stroke="#053456"
                                                strokeOpacity="0.12"
                                            />

                                            <rect
                                                x="300"
                                                y="250"
                                                width="95"
                                                height="65"
                                                rx="8"
                                                fill="#ffffff"
                                                stroke="#053456"
                                                strokeOpacity="0.12"
                                            />


                                            {/* Listing Images */}
                                            <rect
                                                x="205"
                                                y="180"
                                                width="35"
                                                height="27"
                                                rx="5"
                                                fill="#053456"
                                                opacity="0.1"
                                            />

                                            <rect
                                                x="310"
                                                y="180"
                                                width="35"
                                                height="27"
                                                rx="5"
                                                fill="#053456"
                                                opacity="0.1"
                                            />

                                            <rect
                                                x="205"
                                                y="260"
                                                width="35"
                                                height="27"
                                                rx="5"
                                                fill="#053456"
                                                opacity="0.1"
                                            />

                                            <rect
                                                x="310"
                                                y="260"
                                                width="35"
                                                height="27"
                                                rx="5"
                                                fill="#053456"
                                                opacity="0.1"
                                            />


                                            {/* Listing Text */}
                                            <rect
                                                x="250"
                                                y="181"
                                                width="30"
                                                height="7"
                                                rx="3"
                                                fill="#053456"
                                                opacity="0.2"
                                            />

                                            <rect
                                                x="250"
                                                y="195"
                                                width="22"
                                                height="5"
                                                rx="2"
                                                fill="#053456"
                                                opacity="0.1"
                                            />

                                            <rect
                                                x="355"
                                                y="181"
                                                width="30"
                                                height="7"
                                                rx="3"
                                                fill="#053456"
                                                opacity="0.2"
                                            />

                                            <rect
                                                x="355"
                                                y="195"
                                                width="22"
                                                height="5"
                                                rx="2"
                                                fill="#053456"
                                                opacity="0.1"
                                            />

                                            <rect
                                                x="250"
                                                y="261"
                                                width="30"
                                                height="7"
                                                rx="3"
                                                fill="#053456"
                                                opacity="0.2"
                                            />

                                            <rect
                                                x="250"
                                                y="275"
                                                width="22"
                                                height="5"
                                                rx="2"
                                                fill="#053456"
                                                opacity="0.1"
                                            />

                                            <rect
                                                x="355"
                                                y="261"
                                                width="30"
                                                height="7"
                                                rx="3"
                                                fill="#053456"
                                                opacity="0.2"
                                            />

                                            <rect
                                                x="355"
                                                y="275"
                                                width="22"
                                                height="5"
                                                rx="2"
                                                fill="#053456"
                                                opacity="0.1"
                                            />

                                        </g>


                                        {/* Floating Add Advertisement Card */}
                                        <g className="classified-add-card">

                                            <rect
                                                x="35"
                                                y="305"
                                                width="145"
                                                height="90"
                                                rx="14"
                                                fill="#ffffff"
                                                stroke="#053456"
                                                strokeOpacity="0.12"
                                            />

                                            <circle
                                                cx="68"
                                                cy="340"
                                                r="20"
                                                fill="#053456"
                                                opacity="0.08"
                                            />

                                            <path
                                                d="M68 328 V352 M56 340 H80"
                                                stroke="#053456"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                            />

                                            <rect
                                                x="98"
                                                y="332"
                                                width="60"
                                                height="8"
                                                rx="4"
                                                fill="#053456"
                                                opacity="0.2"
                                            />

                                            <rect
                                                x="98"
                                                y="348"
                                                width="42"
                                                height="6"
                                                rx="3"
                                                fill="#053456"
                                                opacity="0.1"
                                            />

                                        </g>


                                        {/* Floating Location Card */}
                                        <g className="classified-location-card">

                                            <rect
                                                x="340"
                                                y="350"
                                                width="130"
                                                height="80"
                                                rx="14"
                                                fill="#ffffff"
                                                stroke="#053456"
                                                strokeOpacity="0.12"
                                            />

                                            <circle
                                                cx="370"
                                                cy="385"
                                                r="19"
                                                fill="#053456"
                                                opacity="0.08"
                                            />

                                            <path
                                                d="M370 398 C370 398 358 386 358 379 A12 12 0 1 1 382 379 C382 386 370 398 370 398Z"
                                                fill="none"
                                                stroke="#053456"
                                                strokeWidth="2"
                                            />

                                            <circle
                                                cx="370"
                                                cy="379"
                                                r="4"
                                                fill="#053456"
                                            />

                                            <rect
                                                x="398"
                                                y="375"
                                                width="48"
                                                height="7"
                                                rx="3"
                                                fill="#053456"
                                                opacity="0.2"
                                            />

                                            <rect
                                                x="398"
                                                y="390"
                                                width="35"
                                                height="6"
                                                rx="3"
                                                fill="#053456"
                                                opacity="0.1"
                                            />

                                        </g>


                                        {/* Floating Check */}
                                        <g className="classified-check-card">

                                            <circle
                                                cx="410"
                                                cy="105"
                                                r="31"
                                                fill="#053456"
                                                opacity="0.08"
                                            />

                                            <circle
                                                cx="410"
                                                cy="105"
                                                r="21"
                                                fill="#053456"
                                            />

                                            <path
                                                d="M399 105 L407 113 L422 96"
                                                fill="none"
                                                stroke="#ffffff"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />

                                        </g>

                                    </svg>

                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="classified-portal-content">



                                    <p>
                                        Launch a feature-rich classified platform where
                                        users can post, search, manage, and promote
                                        advertisements.
                                    </p>

                                    <p>
                                        Our classified portal development solutions can
                                        include:
                                    </p>

                                    <div className="classified-feature-list">
                                        {classifiedFeatures.map((item, index) => (
                                            <div
                                                className="classified-feature-item"
                                                key={index}
                                            >
                                                <span className='text-figtree'>{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div
                data-aos="fade-right"
                data-aos-delay={400}
                data-aos-once={true}
                className="mt-100 mb-50"
            >
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12">
                            <span className="tp-section-subtitle text-black blink-ball">
                                Powerful Online Directory Solutions
                            </span>

                            <h4 className="px-about-title">
                                <span className="text-blue-about">
                                    Directory Portal
                                </span>{" "}
                                Development
                            </h4>
                        </div>
                    </div>
                    <div>
                        <p>

                            Create an organized online directory that helps customers discover businesses, professionals, products, and services.

                            We develop directory portals with features such as:
                        </p>
                    </div>
                    <div className="directory-slider">
                        <div className="directory-track">

                            {[
                                ...directoryPortalFeatures,
                                ...directoryPortalFeatures,
                            ].map((item, index) => (
                                <div
                                    className="directory-slide"
                                    key={`${item.id}-${index}`}
                                >
                                    <div className="directory-card">

                                        <span className="directory-number">
                                            {String(item.id).padStart(2, "0")}
                                        </span>

                                        <div className="directory-icon">

                                            {item.icon === "business-registration" && (
                                                <svg viewBox="0 0 80 80">
                                                    <rect
                                                        x="18"
                                                        y="18"
                                                        width="44"
                                                        height="44"
                                                        rx="6"
                                                        className="svg-line"
                                                    />
                                                    <path
                                                        d="M28 32H52M28 41H47M28 50H42"
                                                        className="svg-line svg-draw"
                                                    />
                                                    <circle
                                                        cx="55"
                                                        cy="53"
                                                        r="9"
                                                        className="svg-circle"
                                                    />
                                                    <path
                                                        d="M55 48V58M50 53H60"
                                                        className="svg-line svg-draw"
                                                    />
                                                </svg>
                                            )}

                                            {item.icon === "business-profile" && (
                                                <svg viewBox="0 0 80 80">
                                                    <rect
                                                        x="18"
                                                        y="14"
                                                        width="44"
                                                        height="52"
                                                        rx="6"
                                                        className="svg-line"
                                                    />
                                                    <circle
                                                        cx="40"
                                                        cy="31"
                                                        r="8"
                                                        className="svg-circle"
                                                    />
                                                    <path
                                                        d="M27 54C30 43 50 43 53 54"
                                                        className="svg-line svg-draw"
                                                    />
                                                </svg>
                                            )}

                                            {item.icon === "categories" && (
                                                <svg viewBox="0 0 80 80">
                                                    <rect
                                                        x="16"
                                                        y="17"
                                                        width="20"
                                                        height="20"
                                                        rx="4"
                                                        className="svg-line"
                                                    />
                                                    <rect
                                                        x="44"
                                                        y="17"
                                                        width="20"
                                                        height="20"
                                                        rx="4"
                                                        className="svg-line"
                                                    />
                                                    <rect
                                                        x="16"
                                                        y="45"
                                                        width="20"
                                                        height="20"
                                                        rx="4"
                                                        className="svg-line"
                                                    />
                                                    <rect
                                                        x="44"
                                                        y="45"
                                                        width="20"
                                                        height="20"
                                                        rx="4"
                                                        className="svg-line"
                                                    />
                                                    <path
                                                        d="M36 27H44M26 37V45M54 37V45M36 55H44"
                                                        className="svg-line svg-draw"
                                                    />
                                                </svg>
                                            )}

                                            {item.icon === "location-search" && (
                                                <svg viewBox="0 0 80 80">
                                                    <path
                                                        d="M40 63S23 46 23 34A17 17 0 0 1 57 34C57 46 40 63 40 63Z"
                                                        className="svg-line svg-pin"
                                                    />
                                                    <circle
                                                        cx="40"
                                                        cy="34"
                                                        r="6"
                                                        className="svg-circle"
                                                    />
                                                    <circle
                                                        cx="57"
                                                        cy="55"
                                                        r="9"
                                                        className="svg-circle"
                                                    />
                                                    <path
                                                        d="M64 62L70 68"
                                                        className="svg-line svg-draw"
                                                    />
                                                </svg>
                                            )}

                                            {item.icon === "maps" && (
                                                <svg viewBox="0 0 80 80">
                                                    <path
                                                        d="M15 22L32 15L49 22L65 15V58L49 65L32 58L15 65V22Z"
                                                        className="svg-line"
                                                    />
                                                    <path
                                                        d="M32 15V58M49 22V65"
                                                        className="svg-line"
                                                    />
                                                    <path
                                                        d="M40 27C34 27 30 31 30 37C30 45 40 54 40 54C40 54 50 45 50 37C50 31 46 27 40 27Z"
                                                        className="svg-line svg-pin"
                                                    />
                                                    <circle
                                                        cx="40"
                                                        cy="37"
                                                        r="3"
                                                        className="svg-circle"
                                                    />
                                                </svg>
                                            )}

                                            {item.icon === "search-filter" && (
                                                <svg viewBox="0 0 80 80">
                                                    <circle
                                                        cx="34"
                                                        cy="34"
                                                        r="16"
                                                        className="svg-circle"
                                                    />
                                                    <path
                                                        d="M46 46L63 63"
                                                        className="svg-line svg-draw"
                                                    />
                                                    <path
                                                        d="M18 56H31M18 63H37"
                                                        className="svg-line svg-draw"
                                                    />
                                                </svg>
                                            )}

                                            {item.icon === "reviews" && (
                                                <svg viewBox="0 0 80 80">
                                                    <path
                                                        d="M40 14L47 29L64 31L52 43L55 60L40 52L25 60L28 43L16 31L33 29L40 14Z"
                                                        className="svg-line svg-star"
                                                    />
                                                </svg>
                                            )}

                                            {item.icon === "featured" && (
                                                <svg viewBox="0 0 80 80">
                                                    <path
                                                        d="M40 12L47 28L65 30L52 42L56 60L40 51L24 60L28 42L15 30L33 28L40 12Z"
                                                        className="svg-line svg-star"
                                                    />
                                                    <path
                                                        d="M40 23V43"
                                                        className="svg-line svg-draw"
                                                    />
                                                </svg>
                                            )}

                                            {item.icon === "subscription" && (
                                                <svg viewBox="0 0 80 80">
                                                    <rect
                                                        x="14"
                                                        y="22"
                                                        width="52"
                                                        height="36"
                                                        rx="7"
                                                        className="svg-line"
                                                    />
                                                    <path
                                                        d="M14 34H66"
                                                        className="svg-line"
                                                    />
                                                    <circle
                                                        cx="28"
                                                        cy="47"
                                                        r="5"
                                                        className="svg-circle"
                                                    />
                                                    <path
                                                        d="M42 45H57M42 51H53"
                                                        className="svg-line svg-draw"
                                                    />
                                                </svg>
                                            )}

                                            {item.icon === "enquiry" && (
                                                <svg viewBox="0 0 80 80">
                                                    <path
                                                        d="M14 20H66V56H31L20 66V56H14V20Z"
                                                        className="svg-line"
                                                    />
                                                    <path
                                                        d="M26 32H54M26 41H49M26 50H39"
                                                        className="svg-line svg-draw"
                                                    />
                                                </svg>
                                            )}

                                            {item.icon === "dashboard" && (
                                                <svg viewBox="0 0 80 80">
                                                    <rect
                                                        x="14"
                                                        y="15"
                                                        width="52"
                                                        height="50"
                                                        rx="6"
                                                        className="svg-line"
                                                    />
                                                    <path
                                                        d="M14 29H66"
                                                        className="svg-line"
                                                    />
                                                    <path
                                                        d="M25 52V42M39 52V36M53 52V32"
                                                        className="svg-line svg-bars"
                                                    />
                                                </svg>
                                            )}

                                            {item.icon === "admin" && (
                                                <svg viewBox="0 0 80 80">
                                                    <circle
                                                        cx="40"
                                                        cy="27"
                                                        r="9"
                                                        className="svg-circle"
                                                    />
                                                    <path
                                                        d="M23 59C25 44 55 44 57 59"
                                                        className="svg-line svg-draw"
                                                    />
                                                    <circle
                                                        cx="60"
                                                        cy="54"
                                                        r="9"
                                                        className="svg-circle"
                                                    />
                                                    <path
                                                        d="M60 49V59M55 54H65"
                                                        className="svg-line svg-draw"
                                                    />
                                                </svg>
                                            )}

                                        </div>

                                        <h3 className='text-tenor'>{item.title}</h3>

                                        <div className="directory-arrow">
                                            →
                                        </div>

                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
                <div className='container my-5'>
                    <p>
                        A professionally developed directory portal can help businesses improve their online visibility while giving customers an easy way to find relevant services.
                    </p>
                </div>
            </div>
            <div
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-once={true}
                className="mt-100 mb-50"
            >


                <div className="real-estate-features">

                    <div className="container">
                        <span className="tp-section-subtitle text-black blink-ball">
                            Feature-Rich Real Estate Portal Development
                        </span>

                        <h4 className="px-about-title">
                            <span className="text-blue-about">
                                Real Estate
                            </span>{" "}
                            Portal Development
                        </h4>

                        <div className="real-estate-grid">

                            {realEstatePortalFeatures.map((item, index) => (
                                <div
                                    className={`real-estate-item item-${index + 1}`}
                                    key={item.id}
                                >

                                    <div className="real-estate-icon">

                                        {item.icon === "listing" && (
                                            <svg viewBox="0 0 80 80">
                                                <path
                                                    d="M14 34L40 15L66 34V64H14V34Z"
                                                    className="re-svg-line"
                                                />
                                                <path
                                                    d="M29 64V43H51V64"
                                                    className="re-svg-line"
                                                />
                                                <path
                                                    d="M25 34H55"
                                                    className="re-svg-line re-svg-draw"
                                                />
                                            </svg>
                                        )}

                                        {item.icon === "property" && (
                                            <svg viewBox="0 0 80 80">
                                                <path
                                                    d="M12 65V31L40 14L68 31V65"
                                                    className="re-svg-line"
                                                />
                                                <path
                                                    d="M28 65V45H52V65"
                                                    className="re-svg-line"
                                                />
                                                <path
                                                    d="M20 36H31M49 36H60"
                                                    className="re-svg-line re-svg-draw"
                                                />
                                            </svg>
                                        )}

                                        {item.icon === "search" && (
                                            <svg viewBox="0 0 80 80">
                                                <circle
                                                    cx="34"
                                                    cy="34"
                                                    r="17"
                                                    className="re-svg-circle"
                                                />
                                                <path
                                                    d="M47 47L65 65"
                                                    className="re-svg-line re-svg-draw"
                                                />
                                                <path
                                                    d="M26 34H42"
                                                    className="re-svg-line re-svg-draw"
                                                />
                                            </svg>
                                        )}

                                        {item.icon === "location" && (
                                            <svg viewBox="0 0 80 80">
                                                <path
                                                    d="M40 66S21 47 21 33A19 19 0 0 1 59 33C59 47 40 66 40 66Z"
                                                    className="re-svg-line re-svg-pin"
                                                />
                                                <circle
                                                    cx="40"
                                                    cy="33"
                                                    r="7"
                                                    className="re-svg-circle"
                                                />
                                            </svg>
                                        )}

                                        {item.icon === "price" && (
                                            <svg viewBox="0 0 80 80">
                                                <circle
                                                    cx="40"
                                                    cy="40"
                                                    r="25"
                                                    className="re-svg-circle"
                                                />
                                                <path
                                                    d="M46 28C44 25 39 24 35 26C31 28 31 33 35 35L45 39C49 41 49 46 45 49C41 52 35 51 32 48"
                                                    className="re-svg-line re-svg-draw"
                                                />
                                                <path
                                                    d="M40 22V57"
                                                    className="re-svg-line re-svg-draw"
                                                />
                                            </svg>
                                        )}

                                        {item.icon === "media" && (
                                            <svg viewBox="0 0 80 80">
                                                <rect
                                                    x="13"
                                                    y="19"
                                                    width="54"
                                                    height="42"
                                                    rx="5"
                                                    className="re-svg-line"
                                                />
                                                <circle
                                                    cx="29"
                                                    cy="33"
                                                    r="5"
                                                    className="re-svg-circle"
                                                />
                                                <path
                                                    d="M18 54L34 40L44 49L51 42L63 54"
                                                    className="re-svg-line re-svg-draw"
                                                />
                                            </svg>
                                        )}

                                        {item.icon === "map" && (
                                            <svg viewBox="0 0 80 80">
                                                <path
                                                    d="M14 20L32 14L49 20L66 14V60L49 66L32 60L14 66V20Z"
                                                    className="re-svg-line"
                                                />
                                                <path
                                                    d="M32 14V60M49 20V66"
                                                    className="re-svg-line"
                                                />
                                                <circle
                                                    cx="40"
                                                    cy="36"
                                                    r="7"
                                                    className="re-svg-circle re-svg-pulse"
                                                />
                                            </svg>
                                        )}

                                        {item.icon === "agent" && (
                                            <svg viewBox="0 0 80 80">
                                                <circle
                                                    cx="40"
                                                    cy="27"
                                                    r="10"
                                                    className="re-svg-circle"
                                                />
                                                <path
                                                    d="M20 63C22 45 58 45 60 63"
                                                    className="re-svg-line re-svg-draw"
                                                />
                                                <path
                                                    d="M17 39H27"
                                                    className="re-svg-line"
                                                />
                                                <path
                                                    d="M53 39H63"
                                                    className="re-svg-line"
                                                />
                                            </svg>
                                        )}

                                        {item.icon === "enquiry" && (
                                            <svg viewBox="0 0 80 80">
                                                <path
                                                    d="M12 18H68V55H31L19 66V55H12V18Z"
                                                    className="re-svg-line"
                                                />
                                                <path
                                                    d="M25 31H55M25 41H49"
                                                    className="re-svg-line re-svg-draw"
                                                />
                                            </svg>
                                        )}

                                        {item.icon === "featured" && (
                                            <svg viewBox="0 0 80 80">
                                                <path
                                                    d="M40 12L47 29L65 31L52 43L55 61L40 52L25 61L28 43L15 31L33 29L40 12Z"
                                                    className="re-svg-line re-svg-star"
                                                />
                                            </svg>
                                        )}

                                        {item.icon === "lead" && (
                                            <svg viewBox="0 0 80 80">
                                                <path
                                                    d="M15 59L31 43L42 52L65 25"
                                                    className="re-svg-line re-svg-draw"
                                                />
                                                <path
                                                    d="M51 25H65V39"
                                                    className="re-svg-line re-svg-draw"
                                                />
                                                <circle
                                                    cx="15"
                                                    cy="59"
                                                    r="3"
                                                    className="re-svg-circle"
                                                />
                                                <circle
                                                    cx="31"
                                                    cy="43"
                                                    r="3"
                                                    className="re-svg-circle"
                                                />
                                                <circle
                                                    cx="42"
                                                    cy="52"
                                                    r="3"
                                                    className="re-svg-circle"
                                                />
                                            </svg>
                                        )}

                                        {item.icon === "dashboard" && (
                                            <svg viewBox="0 0 80 80">
                                                <rect
                                                    x="13"
                                                    y="14"
                                                    width="54"
                                                    height="52"
                                                    rx="6"
                                                    className="re-svg-line"
                                                />
                                                <path
                                                    d="M13 30H67"
                                                    className="re-svg-line"
                                                />
                                                <path
                                                    d="M25 53V44M39 53V37M53 53V32"
                                                    className="re-svg-line re-svg-bars"
                                                />
                                            </svg>
                                        )}

                                    </div>

                                    <div className="real-estate-content">

                                        <span className="real-estate-number text-tenor">
                                            {String(item.id).padStart(2, "0")}
                                        </span>

                                        <h3 className='text-tenor'>{item.title}</h3>
                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>
            </div>

            <div
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-once={true}
                className="mt-100 mb-50"
            >
                <section className="restaurant-portal-section">

                    <div className="container">

                        <span className="tp-section-subtitle text-black blink-ball">
                            Feature-Rich Real Estate Portal Development
                        </span>

                        <h4 className="px-about-title">
                            <span className="text-blue-about">
                                Real Estate
                            </span>{" "}
                            Portal Development
                        </h4>

                        <p>Build a restaurant discovery and listing platform where customers can search and explore restaurants, cuisines, menus, locations, offers, and reviews.
                            <br />
                            Our restaurant portal solutions can include:</p>


                        <div className="restaurant-app-grid">

                            {restaurantPortalFeatures.map((item) => (
                                <div
                                    className="restaurant-app-item"
                                    key={item.id}
                                >

                                    <div className="restaurant-app-icon">

                                        {/* Restaurant Registration */}
                                        {item.icon === "registration" && (
                                            <svg viewBox="0 0 80 80">
                                                <circle cx="40" cy="30" r="9" className="restaurant-svg" />
                                                <path
                                                    d="M23 61C25 45 55 45 57 61"
                                                    className="restaurant-svg restaurant-svg-draw"
                                                />
                                                <path
                                                    d="M58 50V62M52 56H64"
                                                    className="restaurant-svg restaurant-svg-draw"
                                                />
                                            </svg>
                                        )}

                                        {/* Profile */}
                                        {item.icon === "profile" && (
                                            <svg viewBox="0 0 80 80">
                                                <circle cx="40" cy="28" r="9" className="restaurant-svg" />
                                                <path
                                                    d="M23 61C25 45 55 45 57 61"
                                                    className="restaurant-svg restaurant-svg-draw"
                                                />
                                            </svg>
                                        )}

                                        {/* Cuisine */}
                                        {item.icon === "cuisine" && (
                                            <svg viewBox="0 0 80 80">
                                                <path
                                                    d="M25 18V42M31 18V42M28 42V64"
                                                    className="restaurant-svg restaurant-svg-draw"
                                                />
                                                <path
                                                    d="M25 18V31H31V18"
                                                    className="restaurant-svg"
                                                />
                                                <path
                                                    d="M50 18C43 26 43 39 50 43V64"
                                                    className="restaurant-svg restaurant-svg-draw"
                                                />
                                                <path
                                                    d="M50 18C57 26 57 39 50 43"
                                                    className="restaurant-svg"
                                                />
                                            </svg>
                                        )}

                                        {/* Location */}
                                        {item.icon === "location" && (
                                            <svg viewBox="0 0 80 80">
                                                <path
                                                    d="M40 66S21 47 21 33A19 19 0 0 1 59 33C59 47 40 66 40 66Z"
                                                    className="restaurant-svg restaurant-svg-pin"
                                                />
                                                <circle
                                                    cx="40"
                                                    cy="33"
                                                    r="7"
                                                    className="restaurant-svg"
                                                />
                                            </svg>
                                        )}

                                        {/* Menu */}
                                        {item.icon === "menu" && (
                                            <svg viewBox="0 0 80 80">
                                                <rect
                                                    x="20"
                                                    y="13"
                                                    width="40"
                                                    height="54"
                                                    rx="5"
                                                    className="restaurant-svg"
                                                />
                                                <path
                                                    d="M29 28H51M29 38H51M29 48H45M29 58H40"
                                                    className="restaurant-svg restaurant-svg-draw"
                                                />
                                            </svg>
                                        )}

                                        {/* Food */}
                                        {item.icon === "food" && (
                                            <svg viewBox="0 0 80 80">
                                                <circle
                                                    cx="40"
                                                    cy="42"
                                                    r="23"
                                                    className="restaurant-svg restaurant-svg-rotate"
                                                />
                                                <path
                                                    d="M25 42H55M40 27V57"
                                                    className="restaurant-svg restaurant-svg-draw"
                                                />
                                                <circle
                                                    cx="40"
                                                    cy="42"
                                                    r="5"
                                                    className="restaurant-svg"
                                                />
                                            </svg>
                                        )}

                                        {/* Reviews */}
                                        {item.icon === "reviews" && (
                                            <svg viewBox="0 0 80 80">
                                                <path
                                                    d="M40 13L47 29L65 31L52 43L55 61L40 52L25 61L28 43L15 31L33 29L40 13Z"
                                                    className="restaurant-svg restaurant-svg-star"
                                                />
                                            </svg>
                                        )}

                                        {/* Offers */}
                                        {item.icon === "offers" && (
                                            <svg viewBox="0 0 80 80">
                                                <path
                                                    d="M20 18H60V62H20V18Z"
                                                    className="restaurant-svg"
                                                />
                                                <path
                                                    d="M27 30H53M27 40H53M27 50H44"
                                                    className="restaurant-svg restaurant-svg-draw"
                                                />
                                                <circle
                                                    cx="55"
                                                    cy="57"
                                                    r="8"
                                                    className="restaurant-svg"
                                                />
                                                <path
                                                    d="M55 53V61M51 57H59"
                                                    className="restaurant-svg restaurant-svg-draw"
                                                />
                                            </svg>
                                        )}

                                        {/* Enquiry */}
                                        {item.icon === "enquiry" && (
                                            <svg viewBox="0 0 80 80">
                                                <path
                                                    d="M14 20H66V55H32L20 65V55H14V20Z"
                                                    className="restaurant-svg"
                                                />
                                                <path
                                                    d="M26 32H54M26 42H49"
                                                    className="restaurant-svg restaurant-svg-draw"
                                                />
                                            </svg>
                                        )}

                                        {/* Booking */}
                                        {item.icon === "booking" && (
                                            <svg viewBox="0 0 80 80">
                                                <rect
                                                    x="15"
                                                    y="19"
                                                    width="50"
                                                    height="46"
                                                    rx="5"
                                                    className="restaurant-svg"
                                                />
                                                <path
                                                    d="M15 33H65"
                                                    className="restaurant-svg"
                                                />
                                                <path
                                                    d="M27 14V24M53 14V24"
                                                    className="restaurant-svg restaurant-svg-draw"
                                                />
                                                <path
                                                    d="M27 44H53M27 53H44"
                                                    className="restaurant-svg restaurant-svg-draw"
                                                />
                                            </svg>
                                        )}

                                        {/* Ordering */}
                                        {item.icon === "ordering" && (
                                            <svg viewBox="0 0 80 80">
                                                <path
                                                    d="M18 20H25L30 53H58L63 30H27"
                                                    className="restaurant-svg restaurant-svg-draw"
                                                />
                                                <circle
                                                    cx="34"
                                                    cy="62"
                                                    r="4"
                                                    className="restaurant-svg"
                                                />
                                                <circle
                                                    cx="54"
                                                    cy="62"
                                                    r="4"
                                                    className="restaurant-svg"
                                                />
                                                <path
                                                    d="M37 40L43 46L54 34"
                                                    className="restaurant-svg restaurant-svg-draw"
                                                />
                                            </svg>
                                        )}

                                        {/* Dashboard */}
                                        {item.icon === "dashboard" && (
                                            <svg viewBox="0 0 80 80">
                                                <rect
                                                    x="13"
                                                    y="14"
                                                    width="54"
                                                    height="52"
                                                    rx="6"
                                                    className="restaurant-svg"
                                                />
                                                <path
                                                    d="M13 30H67"
                                                    className="restaurant-svg"
                                                />
                                                <path
                                                    d="M25 53V44M39 53V37M53 53V32"
                                                    className="restaurant-svg restaurant-svg-bars"
                                                />
                                            </svg>
                                        )}

                                        {/* Admin */}
                                        {item.icon === "admin" && (
                                            <svg viewBox="0 0 80 80">
                                                <circle
                                                    cx="40"
                                                    cy="27"
                                                    r="9"
                                                    className="restaurant-svg"
                                                />
                                                <path
                                                    d="M23 61C25 45 55 45 57 61"
                                                    className="restaurant-svg restaurant-svg-draw"
                                                />
                                                <circle
                                                    cx="59"
                                                    cy="54"
                                                    r="9"
                                                    className="restaurant-svg"
                                                />
                                                <path
                                                    d="M59 49V59M54 54H64"
                                                    className="restaurant-svg restaurant-svg-draw"
                                                />
                                            </svg>
                                        )}

                                    </div>


                                    <div className="restaurant-app-title text-tenor">
                                        {item.title}
                                    </div>


                                    <span className="restaurant-app-number">
                                        {String(item.id).padStart(2, "0")}
                                    </span>

                                </div>
                            ))}

                        </div>

                    </div>

                </section>
            </div>
            <div
                data-aos="fade-up"
                data-aos-delay={300}
                data-aos-once={true}
                className="portal-benefits-section mt-100 mb-100"
            >
                <div className="container">

                    <div className="portal-benefits-heading mb-60">
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
                className="portal-growth-section mt-100 portal-growth-box"
            >
                <div className="container">

                    <div className="">

                        <div className="portal-growth-pattern">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

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

                                        <a
                                            href="#contact"
                                            className="portal-growth-btn"
                                        >
                                            <span>Discuss Your Portal</span>
                                            <span className="growth-btn-arrow">↗</span>
                                        </a>

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

                                    <div className="growth-circle growth-circle-one"></div>
                                    <div className="growth-circle growth-circle-two"></div>

                                    <div className="growth-main-icon">

                                        <svg viewBox="0 0 120 120">
                                            <rect
                                                x="25"
                                                y="25"
                                                width="70"
                                                height="70"
                                                rx="12"
                                                className="growth-svg-draw"
                                            />

                                            <path
                                                d="M40 48h40M40 60h28M40 72h35"
                                                className="growth-svg-draw"
                                            />

                                            <path
                                                d="M76 82l8-8 8 8"
                                                className="growth-arrow"
                                            />

                                        </svg>

                                    </div>

                                    <div className="growth-floating growth-floating-one">
                                        <span>01</span>
                                        <small>Build</small>
                                    </div>

                                    <div className="growth-floating growth-floating-two">
                                        <span>02</span>
                                        <small>Scale</small>
                                    </div>

                                    <div className="growth-floating growth-floating-three">
                                        <span>03</span>
                                        <small>Grow</small>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* CTA */}



                </div>
            </div>
            <div
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-once={true}
                className="portal-contact-banner"
            >

                <div className="portal-contact-content">
                    <span className="tp-section-subtitle text-white blink-ball">
                        Ready To Build Your Portal?
                    </span>

                    <h2 className="text-tenor">
                        Looking for a Web Portal
                        <br />
                        Development Company in Chennai?
                    </h2>

                    <p>
                        Turn your portal idea into a powerful online platform with
                        a customized solution designed for your business.
                    </p>

                </div>

                <div className="portal-contact-action">

                    <p>
                        Talk to our team today to discuss your web portal requirements
                        and get a customized development plan.
                    </p>

                    <a
                        href="#contact"
                        className="portal-contact-btn"
                    >
                        <span>Talk To Our Team</span>
                        <span>↗</span>
                    </a>

                </div>

            </div>
        </div>
    )
}

export default PortalWeb
