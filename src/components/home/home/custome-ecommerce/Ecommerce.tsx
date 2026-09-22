'use client'
import React from 'react'
import IntroContent from '../myComponents/common/IntroContent'
import { ecommerceDesignCards, ecommerceHomepageCards, ecommerceUserExperienceCards, productPageFeatures, industryData, ecommerceProcessData } from './ecommerceData/shareData'
import t1 from '@/assets/img/website/corporate/Branding.jpg';
import IndustrySection from '../myComponents/common/IndustrySection';
import { useQuoteModal } from '../myComponents/Content/QuoteContext';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useAOS } from "@/components/hooks/useAOS";

import "swiper/css";

function Ecommerce() {
    const { openModal } = useQuoteModal();
    useAOS();
    return (
        <div>
            <IntroContent
                leftTitle="Custom Online Stores Built for Your Brand"
                rightTitle1="Build a Powerful E-commerce "
                rightTitle2="Website Designed Around Your Business  "
                description="Your online store should do more than display products—it should create a smooth buying experience that turns visitors into customers. At Yulanto Web Creations, we provide custom e-commerce website design and e-commerce web development services in Chennai for businesses looking to establish, improve, or scale their online presence."
            />

            <div className="ecommerce-hero-animation" >

                <div className="container container-1550">

                    <div className="row align-items-center">
                        <div className="col-12">
                            <svg
                                className="ecommerce-svg"
                                viewBox="0 0 1200 650"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="Custom ecommerce website development illustration"
                            >
                                <defs>
                                    <linearGradient
                                        id="screenGradient"
                                        x1="0%"
                                        y1="0%"
                                        x2="100%"
                                        y2="100%"
                                    >
                                        <stop offset="0%" stopColor="#eef6ff" />
                                        <stop offset="100%" stopColor="#dcecff" />
                                    </linearGradient>

                                    <linearGradient
                                        id="blueGradient"
                                        x1="0%"
                                        y1="0%"
                                        x2="100%"
                                        y2="100%"
                                    >
                                        <stop offset="0%" stopColor="#053456" />
                                        <stop offset="100%" stopColor="#53AE7D" />
                                    </linearGradient>

                                    <linearGradient
                                        id="orangeGradient"
                                        x1="0%"
                                        y1="0%"
                                        x2="100%"
                                        y2="100%"
                                    >
                                        <stop offset="0%" stopColor="#ffb000" />
                                        <stop offset="100%" stopColor="#ff6b00" />
                                    </linearGradient>

                                    <filter
                                        id="shadow"
                                        x="-30%"
                                        y="-30%"
                                        width="160%"
                                        height="160%"
                                    >
                                        <feDropShadow
                                            dx="0"
                                            dy="12"
                                            stdDeviation="15"
                                            floodOpacity="0.15"
                                        />
                                    </filter>

                                    <filter
                                        id="smallShadow"
                                        x="-30%"
                                        y="-30%"
                                        width="160%"
                                        height="160%"
                                    >
                                        <feDropShadow
                                            dx="0"
                                            dy="6"
                                            stdDeviation="8"
                                            floodOpacity="0.12"
                                        />
                                    </filter>
                                </defs>

                                {/* Background */}
                                <ellipse
                                    cx="600"
                                    cy="575"
                                    rx="480"
                                    ry="35"
                                    fill="#e8efff"
                                />

                                <circle
                                    className="ecom-bg-circle ecom-bg-circle-1"
                                    cx="170"
                                    cy="180"
                                    r="95"
                                    fill="#eef5ff"
                                />

                                <circle
                                    className="ecom-bg-circle ecom-bg-circle-2"
                                    cx="1050"
                                    cy="170"
                                    r="90"
                                    fill="#f1edff"
                                />

                                {/* Floating decorative dots */}
                                <circle
                                    className="ecom-dot ecom-dot-1"
                                    cx="130"
                                    cy="105"
                                    r="7"
                                    fill="#053456"
                                />

                                <circle
                                    className="ecom-dot ecom-dot-2"
                                    cx="1080"
                                    cy="310"
                                    r="6"
                                    fill="#ff6b00"
                                />

                                <circle
                                    className="ecom-dot ecom-dot-3"
                                    cx="230"
                                    cy="400"
                                    r="5"
                                    fill="#633cff"
                                />

                                {/* Growth chart */}
                                <g
                                    className="ecom-chart"
                                    filter="url(#smallShadow)"
                                >
                                    <rect
                                        x="900"
                                        y="75"
                                        width="210"
                                        height="125"
                                        rx="18"
                                        fill="#ffffff"
                                    />

                                    <text
                                        x="925"
                                        y="105"
                                        fontSize="15"
                                        fontWeight="600"
                                        fill="#172554"
                                    >
                                        Store Growth
                                    </text>

                                    <rect
                                        x="930"
                                        y="150"
                                        width="20"
                                        height="25"
                                        rx="4"
                                        fill="#bcd5ff"
                                    />

                                    <rect
                                        x="965"
                                        y="135"
                                        width="20"
                                        height="40"
                                        rx="4"
                                        fill="#7caaff"
                                    />

                                    <rect
                                        x="1000"
                                        y="120"
                                        width="20"
                                        height="55"
                                        rx="4"
                                        fill="#053456"
                                    />

                                    <rect
                                        x="1035"
                                        y="100"
                                        width="20"
                                        height="75"
                                        rx="4"
                                        fill="#53AE7D"
                                    />

                                    <path
                                        d="M925 140 C960 125 985 135 1010 110 C1030 92 1050 95 1080 75"
                                        fill="none"
                                        stroke="#ff7a00"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                    />

                                    <path
                                        d="M1070 75 L1080 75 L1076 85"
                                        fill="none"
                                        stroke="#ff7a00"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                    />
                                </g>

                                {/* Main laptop */}
                                <g className="ecom-laptop" filter="url(#shadow)">
                                    {/* Laptop screen */}
                                    <rect
                                        x="275"
                                        y="155"
                                        width="650"
                                        height="370"
                                        rx="24"
                                        fill="#14255c"
                                    />

                                    <rect
                                        x="295"
                                        y="175"
                                        width="610"
                                        height="330"
                                        rx="12"
                                        fill="#ffffff"
                                    />

                                    {/* Browser header */}
                                    <rect
                                        x="295"
                                        y="175"
                                        width="610"
                                        height="48"
                                        rx="12"
                                        fill="#f5f7fb"
                                    />

                                    <circle cx="320" cy="199" r="5" fill="#ff6969" />
                                    <circle cx="338" cy="199" r="5" fill="#ffc857" />
                                    <circle cx="356" cy="199" r="5" fill="#58d68d" />

                                    <rect
                                        x="390"
                                        y="188"
                                        width="250"
                                        height="21"
                                        rx="10"
                                        fill="#e5ebf5"
                                    />

                                    {/* Navbar */}
                                    <rect
                                        x="315"
                                        y="240"
                                        width="570"
                                        height="42"
                                        rx="8"
                                        fill="#ffffff"
                                    />

                                    {/* Store logo */}
                                    <circle
                                        cx="340"
                                        cy="261"
                                        r="15"
                                        fill="url(#blueGradient)"
                                    />

                                    <path
                                        d="M334 260 L339 265 L347 255"
                                        fill="none"
                                        stroke="#ffffff"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                    />

                                    <rect
                                        x="365"
                                        y="254"
                                        width="70"
                                        height="9"
                                        rx="4"
                                        fill="#172554"
                                    />

                                    {/* Search */}
                                    <rect
                                        x="600"
                                        y="249"
                                        width="130"
                                        height="24"
                                        rx="12"
                                        fill="#f1f5fb"
                                    />

                                    <circle
                                        cx="710"
                                        cy="261"
                                        r="5"
                                        fill="none"
                                        stroke="#053456"
                                        strokeWidth="2"
                                    />

                                    <line
                                        x1="714"
                                        y1="265"
                                        x2="718"
                                        y2="269"
                                        stroke="#053456"
                                        strokeWidth="2"
                                    />

                                    {/* User */}
                                    <circle
                                        cx="760"
                                        cy="255"
                                        r="5"
                                        fill="#172554"
                                    />

                                    <path
                                        d="M751 270 Q760 261 769 270"
                                        fill="none"
                                        stroke="#172554"
                                        strokeWidth="2"
                                    />

                                    {/* Cart */}
                                    <g className="ecom-cart-icon">
                                        <path
                                            d="M790 254 H802 L807 268 H825 L829 258 H805"
                                            fill="none"
                                            stroke="#053456"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <circle cx="810" cy="274" r="3" fill="#053456" />
                                        <circle cx="823" cy="274" r="3" fill="#053456" />

                                        <circle
                                            cx="826"
                                            cy="249"
                                            r="9"
                                            fill="#ff496c"
                                        />

                                        <text
                                            x="826"
                                            y="253"
                                            textAnchor="middle"
                                            fontSize="9"
                                            fontWeight="700"
                                            fill="#ffffff"
                                        >
                                            3
                                        </text>
                                    </g>

                                    {/* Hero banner */}
                                    <rect
                                        x="320"
                                        y="300"
                                        width="550"
                                        height="92"
                                        rx="15"
                                        fill="url(#screenGradient)"
                                    />

                                    {/* Product */}
                                    <g className="ecom-product">
                                        <ellipse
                                            cx="430"
                                            cy="365"
                                            rx="55"
                                            ry="8"
                                            fill="#b9cff0"
                                        />

                                        <path
                                            d="M390 338
                                   C395 315 425 315 435 330
                                   L452 350
                                   C458 357 452 367 443 367
                                   H402
                                   C391 367 386 355 390 338Z"
                                            fill="url(#blueGradient)"
                                        />

                                        <path
                                            d="M400 343
                                   C412 334 428 335 438 348"
                                            fill="none"
                                            stroke="#ffffff"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                        />
                                    </g>

                                    <text
                                        x="510"
                                        y="330"
                                        fontSize="12"
                                        fill="#64748b"
                                    >
                                        Featured Product
                                    </text>

                                    <text
                                        x="510"
                                        y="352"
                                        fontSize="19"
                                        fontWeight="700"
                                        fill="#172554"
                                    >
                                        Shop Your Favorites
                                    </text>

                                    <rect
                                        x="510"
                                        y="365"
                                        width="82"
                                        height="22"
                                        rx="11"
                                        fill="#053456"
                                    />

                                    <text
                                        x="551"
                                        y="380"
                                        textAnchor="middle"
                                        fontSize="10"
                                        fontWeight="700"
                                        fill="#ffffff"
                                    >
                                        Buy Now
                                    </text>

                                    {/* Product cards */}
                                    <g className="ecom-products">
                                        {/* Card 1 */}
                                        <rect
                                            x="320"
                                            y="410"
                                            width="125"
                                            height="75"
                                            rx="12"
                                            fill="#ffffff"
                                            stroke="#edf1f7"
                                        />

                                        <rect
                                            x="330"
                                            y="420"
                                            width="48"
                                            height="45"
                                            rx="9"
                                            fill="#edf5ff"
                                        />

                                        <path
                                            d="M342 448 L351 433 L366 448 Z"
                                            fill="#053456"
                                        />

                                        <rect
                                            x="390"
                                            y="425"
                                            width="40"
                                            height="6"
                                            rx="3"
                                            fill="#172554"
                                        />

                                        <rect
                                            x="390"
                                            y="438"
                                            width="28"
                                            height="5"
                                            rx="2"
                                            fill="#b9c5d8"
                                        />

                                        <text
                                            x="390"
                                            y="461"
                                            fontSize="10"
                                            fontWeight="700"
                                            fill="#053456"
                                        >
                                            ₹1,299
                                        </text>

                                        {/* Card 2 */}
                                        <rect
                                            x="455"
                                            y="410"
                                            width="125"
                                            height="75"
                                            rx="12"
                                            fill="#ffffff"
                                            stroke="#edf1f7"
                                        />

                                        <rect
                                            x="465"
                                            y="420"
                                            width="48"
                                            height="45"
                                            rx="9"
                                            fill="#f3efff"
                                        />

                                        <circle
                                            cx="489"
                                            cy="443"
                                            r="15"
                                            fill="#633cff"
                                        />

                                        <rect
                                            x="525"
                                            y="425"
                                            width="40"
                                            height="6"
                                            rx="3"
                                            fill="#172554"
                                        />

                                        <rect
                                            x="525"
                                            y="438"
                                            width="28"
                                            height="5"
                                            rx="2"
                                            fill="#b9c5d8"
                                        />

                                        <text
                                            x="525"
                                            y="461"
                                            fontSize="10"
                                            fontWeight="700"
                                            fill="#633cff"
                                        >
                                            ₹2,499
                                        </text>

                                        {/* Card 3 */}
                                        <rect
                                            x="590"
                                            y="410"
                                            width="125"
                                            height="75"
                                            rx="12"
                                            fill="#ffffff"
                                            stroke="#edf1f7"
                                        />

                                        <rect
                                            x="600"
                                            y="420"
                                            width="48"
                                            height="45"
                                            rx="9"
                                            fill="#fff0f3"
                                        />

                                        <path
                                            d="M612 435 Q624 420 636 435 L636 457 H612 Z"
                                            fill="#ff496c"
                                        />

                                        <rect
                                            x="660"
                                            y="425"
                                            width="40"
                                            height="6"
                                            rx="3"
                                            fill="#172554"
                                        />

                                        <rect
                                            x="660"
                                            y="438"
                                            width="28"
                                            height="5"
                                            rx="2"
                                            fill="#b9c5d8"
                                        />

                                        <text
                                            x="660"
                                            y="461"
                                            fontSize="10"
                                            fontWeight="700"
                                            fill="#ff496c"
                                        >
                                            ₹899
                                        </text>

                                        {/* Card 4 */}
                                        <rect
                                            x="725"
                                            y="410"
                                            width="145"
                                            height="75"
                                            rx="12"
                                            fill="#ffffff"
                                            stroke="#edf1f7"
                                        />

                                        <rect
                                            x="735"
                                            y="420"
                                            width="48"
                                            height="45"
                                            rx="9"
                                            fill="#eefaf5"
                                        />

                                        <path
                                            d="M748 430 H770 L774 455 H744 Z"
                                            fill="#20b77a"
                                        />

                                        <rect
                                            x="795"
                                            y="425"
                                            width="50"
                                            height="6"
                                            rx="3"
                                            fill="#172554"
                                        />

                                        <rect
                                            x="795"
                                            y="438"
                                            width="35"
                                            height="5"
                                            rx="2"
                                            fill="#b9c5d8"
                                        />

                                        <text
                                            x="795"
                                            y="461"
                                            fontSize="10"
                                            fontWeight="700"
                                            fill="#20a777"
                                        >
                                            ₹1,799
                                        </text>
                                    </g>

                                    {/* Laptop base */}
                                    <path
                                        d="M235 525 H965 L1010 555
                               Q1015 565 998 570 H202
                               Q185 565 190 555 Z"
                                        fill="#cbd8f5"
                                    />

                                    <path
                                        d="M285 525 H915 L930 545 H270 Z"
                                        fill="#9db6eb"
                                    />

                                    <rect
                                        x="525"
                                        y="537"
                                        width="150"
                                        height="7"
                                        rx="3"
                                        fill="#819bd4"
                                    />
                                </g>

                                {/* Shopping cart */}
                                <g
                                    className="ecom-shopping-cart"
                                    filter="url(#smallShadow)"
                                >
                                    <path
                                        d="M130 420 H150 L170 495 H285 L305 440 H160"
                                        fill="none"
                                        stroke="#53AE7D"
                                        strokeWidth="8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />

                                    <circle
                                        cx="188"
                                        cy="515"
                                        r="14"
                                        fill="#53AE7D"
                                    />

                                    <circle
                                        cx="270"
                                        cy="515"
                                        r="14"
                                        fill="#53AE7D"
                                    />

                                    {/* Shopping bags */}
                                    <path
                                        d="M180 450 H225 L220 405 H185 Z"
                                        fill="#053456"
                                    />

                                    <path
                                        d="M235 455 H280 L275 400 H240 Z"
                                        fill="#ff496c"
                                    />

                                    <path
                                        d="M195 410 Q205 390 215 410"
                                        fill="none"
                                        stroke="#172554"
                                        strokeWidth="4"
                                    />

                                    <path
                                        d="M248 405 Q258 385 268 405"
                                        fill="none"
                                        stroke="#172554"
                                        strokeWidth="4"
                                    />
                                </g>

                                {/* Secure payment card */}
                                <g
                                    className="ecom-payment-card"
                                    filter="url(#smallShadow)"
                                >
                                    <rect
                                        x="920"
                                        y="250"
                                        width="215"
                                        height="120"
                                        rx="18"
                                        fill="#ffffff"
                                    />

                                    <rect
                                        x="945"
                                        y="278"
                                        width="165"
                                        height="65"
                                        rx="12"
                                        fill="url(#blueGradient)"
                                    />

                                    <rect
                                        x="960"
                                        y="295"
                                        width="25"
                                        height="18"
                                        rx="4"
                                        fill="#ffd66b"
                                    />

                                    <rect
                                        x="960"
                                        y="323"
                                        width="55"
                                        height="5"
                                        rx="2"
                                        fill="#ffffff"
                                        opacity="0.8"
                                    />

                                    <circle
                                        cx="1080"
                                        cy="325"
                                        r="11"
                                        fill="#ff4c78"
                                        opacity="0.9"
                                    />

                                    <circle
                                        cx="1090"
                                        cy="325"
                                        r="11"
                                        fill="#ffb300"
                                        opacity="0.9"
                                    />

                                    <text
                                        x="945"
                                        y="360"
                                        fontSize="10"
                                        fontWeight="700"
                                        fill="#172554"
                                    >
                                        SECURE PAYMENT
                                    </text>
                                </g>

                                {/* Order tracking */}
                                <g
                                    className="ecom-order-card"
                                    filter="url(#smallShadow)"
                                >
                                    <rect
                                        x="75"
                                        y="240"
                                        width="190"
                                        height="125"
                                        rx="18"
                                        fill="#ffffff"
                                    />

                                    <text
                                        x="98"
                                        y="270"
                                        fontSize="13"
                                        fontWeight="700"
                                        fill="#172554"
                                    >
                                        Order Tracking
                                    </text>

                                    <circle
                                        cx="110"
                                        cy="310"
                                        r="13"
                                        fill="#053456"
                                    />

                                    <path
                                        d="M104 310 L109 315 L117 305"
                                        fill="none"
                                        stroke="#ffffff"
                                        strokeWidth="2.5"
                                    />

                                    <line
                                        x1="123"
                                        y1="310"
                                        x2="150"
                                        y2="310"
                                        stroke="#053456"
                                        strokeWidth="4"
                                    />

                                    <circle
                                        cx="165"
                                        cy="310"
                                        r="13"
                                        fill="#53AE7D"
                                    />

                                    <rect
                                        x="157"
                                        y="303"
                                        width="16"
                                        height="14"
                                        rx="2"
                                        fill="#ffffff"
                                    />

                                    <line
                                        x1="178"
                                        y1="310"
                                        x2="205"
                                        y2="310"
                                        stroke="#d8e1f3"
                                        strokeWidth="4"
                                    />

                                    <circle
                                        cx="220"
                                        cy="310"
                                        r="13"
                                        fill="#e8edf7"
                                    />

                                    <path
                                        d="M214 310 H226"
                                        stroke="#9baaca"
                                        strokeWidth="2"
                                    />

                                    <rect
                                        x="98"
                                        y="337"
                                        width="135"
                                        height="7"
                                        rx="3"
                                        fill="#e5ebf5"
                                    />

                                    <rect
                                        className="ecom-progress"
                                        x="98"
                                        y="337"
                                        width="85"
                                        height="7"
                                        rx="3"
                                        fill="#053456"
                                    />
                                </g>

                                {/* Mobile phone */}
                                <g
                                    className="ecom-mobile"
                                    filter="url(#shadow)"
                                >
                                    <rect
                                        x="870"
                                        y="400"
                                        width="145"
                                        height="245"
                                        rx="25"
                                        fill="#172554"
                                    />

                                    <rect
                                        x="880"
                                        y="418"
                                        width="125"
                                        height="210"
                                        rx="15"
                                        fill="#ffffff"
                                    />

                                    <rect
                                        x="920"
                                        y="410"
                                        width="45"
                                        height="12"
                                        rx="6"
                                        fill="#172554"
                                    />

                                    <rect
                                        x="895"
                                        y="440"
                                        width="95"
                                        height="70"
                                        rx="12"
                                        fill="url(#screenGradient)"
                                    />

                                    <circle
                                        cx="942"
                                        cy="475"
                                        r="24"
                                        fill="url(#blueGradient)"
                                    />

                                    <path
                                        d="M930 475 Q942 453 954 475"
                                        fill="none"
                                        stroke="#ffffff"
                                        strokeWidth="4"
                                    />

                                    <rect
                                        x="895"
                                        y="525"
                                        width="95"
                                        height="10"
                                        rx="5"
                                        fill="#172554"
                                    />

                                    <rect
                                        x="895"
                                        y="545"
                                        width="65"
                                        height="7"
                                        rx="3"
                                        fill="#b9c5d8"
                                    />

                                    <rect
                                        x="895"
                                        y="568"
                                        width="70"
                                        height="28"
                                        rx="14"
                                        fill="#53AE7D"
                                    />

                                    <text
                                        x="930"
                                        y="586"
                                        textAnchor="middle"
                                        fontSize="10"
                                        fontWeight="700"
                                        fill="#ffffff"
                                    >
                                        BUY NOW
                                    </text>

                                    <circle
                                        className="ecom-mobile-notification"
                                        cx="987"
                                        cy="438"
                                        r="10"
                                        fill="#ff496c"
                                    />

                                    <text
                                        x="987"
                                        y="442"
                                        textAnchor="middle"
                                        fontSize="9"
                                        fontWeight="700"
                                        fill="#ffffff"
                                    >
                                        2
                                    </text>
                                </g>

                                {/* Floating shopping icon */}
                                <g className="ecom-floating-cart">
                                    <circle
                                        cx="650"
                                        cy="115"
                                        r="34"
                                        fill="url(#blueGradient)"
                                        filter="url(#smallShadow)"
                                    />

                                    <path
                                        d="M633 105 H641 L645 121 H666 L671 109 H645"
                                        fill="none"
                                        stroke="#ffffff"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />

                                    <circle
                                        cx="649"
                                        cy="127"
                                        r="3"
                                        fill="#ffffff"
                                    />

                                    <circle
                                        cx="663"
                                        cy="127"
                                        r="3"
                                        fill="#ffffff"
                                    />
                                </g>

                                {/* Animated notification */}
                                <g className="ecom-notification">
                                    <rect
                                        x="690"
                                        y="65"
                                        width="155"
                                        height="55"
                                        rx="15"
                                        fill="#ffffff"
                                        filter="url(#smallShadow)"
                                    />

                                    <circle
                                        cx="718"
                                        cy="92"
                                        r="13"
                                        fill="#20b77a"
                                    />

                                    <path
                                        d="M712 92 L717 97 L725 87"
                                        fill="none"
                                        stroke="#ffffff"
                                        strokeWidth="2.5"
                                    />

                                    <text
                                        x="742"
                                        y="88"
                                        fontSize="10"
                                        fontWeight="700"
                                        fill="#172554"
                                    >
                                        Order Confirmed
                                    </text>

                                    <text
                                        x="742"
                                        y="103"
                                        fontSize="9"
                                        fill="#7b879d"
                                    >
                                        Your order is on its way
                                    </text>
                                </g>

                                {/* Decorative paper plane */}
                                <g className="ecom-paper-plane">
                                    <path
                                        d="M100 150 L155 125 L132 177 L125 153 Z"
                                        fill="url(#blueGradient)"
                                    />

                                    <path
                                        d="M125 153 L155 125"
                                        stroke="#ffffff"
                                        strokeWidth="2"
                                        opacity="0.8"
                                    />
                                </g>
                            </svg>
                        </div>
                    </div>
                    <p className='pb-40'>From ecommerce website design and engaging homepage layouts to custom shopping experiences, payment integration, order management, and mobile-friendly interfaces, we create ecommerce websites that are designed around your products, customers, and business goals.</p>

                </div>


            </div>


            <div
                data-aos="fade-right"
                data-aos-delay={400}
                data-aos-once={true} style={{ background: '#f5f5f5' }}
                className="px-about-6-area pt-40 pb-40 pb-lg-110"
            >
                <div className="container container-1550">
                    <div className="row">

                        <div className="col-12 mb-4">
                            <span className="tp-section-subtitle text-black blink-ball">
                                Custom Online Store Design for Your Brand
                            </span>

                            <h4 className="px-about-title">
                                <span className="text-blue-about">
                                    Custom E-commerce Website Design{" "}
                                </span>
                                That Fits Your Brand
                            </h4>
                        </div>

                        <div className="col-md-12">
                            <p className="text-figtree">
                                Every business is different, so your online store should
                                not look like a generic template. Our team creates a
                                custom ecommerce site design that reflects your brand
                                identity while keeping navigation simple and the
                                purchasing journey clear.
                            </p>
                        </div>

                        {ecommerceDesignCards.map((card, index) => (
                            <div
                                className="col-lg-3 col-md-6 mt-4"
                                data-aos="fade-up"
                                data-aos-delay={(index + 1) * 100}
                                data-aos-once={true}
                                key={card.title}
                            >
                                <div className="ecommerce-design-card">

                                    <div className="ecommerce-card-icon">
                                        {card.icon}
                                    </div>

                                    <h5 className="ecommerce-card-title text-figtree">
                                        {card.title}
                                    </h5>

                                    <ul className="ecommerce-card-list">
                                        {card.items.map((item) => (
                                            <li
                                                className="text-figtree"
                                                key={item}
                                            >
                                                <span className="ecommerce-list-icon">
                                                    ✓
                                                </span>

                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                        ))}

                        <div className="col-12 mt-4">
                            <p className="text-figtree">
                                Whether you need a new online store or want to redesign an
                                existing one, we can design an ecommerce website that
                                supports your long-term business growth.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div
                data-aos="fade-right"
                data-aos-delay={400}
                data-aos-once={true}
                className="px-about-6-area pt-40 pb-40 pb-lg-110 unique-ecom-cards-section"
            >
                <div className="container container-1550">
                    <div className="row">

                        <div className="col-12 mb-4">
                            <span className="tp-section-subtitle text-black blink-ball">
                                High-Converting E-commerce Homepage Design
                            </span>
                            <h4 className="px-about-title">
                                <span className="text-blue-about">
                                    Ecommerce Homepage Design{" "}
                                </span>
                                That Makes a Strong First Impression
                            </h4>
                        </div>

                        <div className="col-md-12">
                            <p className="text-figtree mb-5">
                                Your homepage is often the first interaction customers
                                have with your brand. Our ecommerce homepage design
                                combines strong visuals, product highlights, promotional
                                sections, trust elements, and clear calls-to-action to
                                encourage visitors to explore your store.
                            </p>
                        </div>

                        {/* Homepage Design Cards */}
                        {ecommerceHomepageCards.map((card, index) => (
                            <div
                                className="col-lg-3 col-md-6 mt-4"
                                data-aos="fade-up"
                                data-aos-delay={(index + 1) * 100}
                                data-aos-once={true}
                                key={card.title}
                            >
                                <div className="ecommerce-design-card">
                                    <div className="ecommerce-card-content">
                                        {/* Icon */}


                                        {/* Title */}
                                        <h5 className="ecommerce-card-title text-figtree">
                                            {card.title}
                                        </h5>

                                        {/* Hover Image Preview (Appears smoothly between title and list) */}
                                        <div className="ecommerce-card-image"></div>

                                        {/* Items / Bullet Points */}
                                        <ul className="ecommerce-card-list">
                                            {card.items.map((item) => (
                                                <li className="text-figtree" key={item}>
                                                    <span className="ecommerce-list-icon">✓</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Bottom Content */}
                        <div className="col-12 mt-20">
                            <p className="text-figtree">
                                Our homepage design for ecommerce is structured to
                                provide customers with a clear path from discovering
                                your brand to browsing products and completing a
                                purchase.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div
                data-aos="fade-right"
                data-aos-delay={400}
                data-aos-once={true} className="px-about-6-area pt-40 pb-40 pb-lg-110"
                style={{
                    backgroundColor: "#f5f5f5",

                }}
            >
                <div className="container container-1550">


                    <div className="row">

                        <div className="col-12 mb-4">

                            <span className="tp-section-subtitle text-black blink-ball">
                                Better Shopping Experiences
                            </span>

                            <h4 className="px-about-title">
                                <span className="text-blue-about">
                                    E-commerce Web Design{" "}
                                </span>
                                Focused on User Experience
                            </h4>

                        </div>

                        <div className="col-md-12">

                            <p className="text-figtree">
                                Good ecommerce site web design should make it easy for
                                customers to find products, understand their options,
                                and complete purchases without unnecessary steps.
                            </p>

                            <p className="text-figtree">
                                We carefully plan the structure of every ecommerce web
                                page design, including product pages, category pages,
                                shopping cart pages, checkout pages, and customer
                                account sections.
                            </p>

                        </div>

                        {/* User Experience Journey */}
                        <div className="col-12 mt-20">

                            <div className="ecommerce-journey">

                                {ecommerceUserExperienceCards.map((card, index) => (
                                    <React.Fragment key={card.title}>

                                        <div
                                            className="ecommerce-journey-card"
                                            data-aos="fade-up"
                                            data-aos-delay={(index + 1) * 100}
                                            data-aos-once={true}
                                        >

                                            <div className="ecommerce-journey-icon">
                                                {card.icon}
                                            </div>

                                            <h5 className="ecommerce-journey-title text-figtree">
                                                {card.title}
                                            </h5>

                                            <p className="ecommerce-journey-description text-figtree">
                                                {card.description}
                                            </p>

                                        </div>

                                        {/* Arrow */}
                                        {index < ecommerceUserExperienceCards.length - 1 && (
                                            <div
                                                className="ecommerce-journey-arrow"
                                                data-aos="fade-in"
                                                data-aos-delay={(index + 1) * 150}
                                            >
                                                <svg
                                                    width="30"
                                                    height="24"
                                                    viewBox="0 0 30 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2 12H25"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                    />

                                                    <path
                                                        d="M18 5L25 12L18 19"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        )}

                                    </React.Fragment>
                                ))}

                            </div>

                        </div>

                        {/* Journey Heading */}
                        <div className="col-12 mt-30">

                            <div className="ecommerce-journey-label">

                                <span className="text-figtree">
                                    Discover
                                </span>

                                <span>→</span>

                                <span className="text-figtree">
                                    Explore
                                </span>

                                <span>→</span>

                                <span className="text-figtree">
                                    Compare
                                </span>

                                <span>→</span>

                                <span className="text-figtree">
                                    Add to Cart
                                </span>

                                <span>→</span>

                                <span className="text-figtree">
                                    Checkout
                                </span>

                                <span>→</span>

                                <span className="text-figtree">
                                    Purchase
                                </span>

                            </div>

                        </div>

                        <div className="col-12 mt-20">

                            <p className="text-figtree">
                                This customer-focused journey helps create an online
                                store that is easier to use and more effective for
                                your business.
                            </p>

                        </div>

                    </div>

                </div>
            </div>
            <div
                data-aos="fade-right"
                data-aos-delay={400}
                data-aos-once={true}

                className="px-about-6-area pt-40 pb-40 pb-lg-110"
            >
                <div className="container container-1550" >
                    <div className="row align-items-center mb-4" data-aos="fade-up">
                        <div className="col-xl-3 col-lg-4 mb-3 mb-lg-0">
                            <span className="tp-section-subtitle text-black blink-ball" >
                                Product Design That Connects
                            </span>
                        </div>

                        <div className="col-xl-9 col-lg-8">
                            <div className="px-project-title-box">
                                <h4 className="px-about-title mb-3" >
                                    <span className="text-blue-about">Product Page Design for </span> Better Customer Engagement
                                </h4>
                                <p className="text-figtree mb-0">
                                    Your product page plays a major role in the buying decision. We create product layouts that present important information clearly while keeping the design visually appealing.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Main Split Row */}
                    <div className="row align-items-stretch" style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {/* LEFT SIDE: 2-Column Grid of Feature Cards (Icon on top, Title below) */}
                        <div className="col-lg-7 mb-4 mb-lg-0" style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                                gap: '16px',
                                height: '100%'
                            }}>
                                {productPageFeatures.map((feature, index) => (
                                    <div
                                        key={feature.title}
                                        data-aos="fade-up"
                                        data-aos-delay={(index + 1) * 60}
                                        data-aos-once={true}
                                        style={{
                                            background: '#ffffff',
                                            padding: '18px 20px',
                                            borderRadius: '12px',
                                            boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            border: '1px solid #eaeaea',
                                        }}
                                    >
                                        <div style={{
                                            fontSize: '20px',
                                            color: '#053456',
                                            marginRight: '14px',
                                            background: '#f0f4f8',
                                            width: '42px',
                                            height: '42px',
                                            borderRadius: '8px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            <i className={feature.icon}></i>
                                        </div>
                                        <h6 style={{ fontSize: '15px', fontWeight: 600, color: '#111', margin: 0, lineHeight: 1.4 }}>
                                            {feature.title}
                                        </h6>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* RIGHT SIDE: Visual Image Showcase matching full height */}
                        <div className="col-lg-5" data-aos="fade-left" data-aos-delay={200} data-aos-once={true} style={{ display: 'flex' }}>
                            <div style={{
                                width: '100%',
                                background: '#f8f9fa',
                                borderRadius: '16px',
                                border: '1px solid #eaeaea',
                                minHeight: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                                overflow: 'hidden'
                            }} className="split-showcase-image-wrapper">
                                <div style={{ width: '100%', height: '100%', minHeight: '450px', backgroundSize: 'cover', backgroundPosition: 'center' }} className="split-showcase-image"></div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <p className="text-figtree product-page-bottom-text mb-0" style={{ color: '#555', fontSize: '16px' }}>
                                Our <strong style={{ color: '#053456' }}>design for ecommerce websites</strong> keeps
                                product information organized so customers can make
                                purchase decisions with confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-once={true}
                className="px-about-6-area pt-40 pb-40 pb-lg-110"
                style={{
                    backgroundColor: "#f5f5f5",
                }}
            >
                <div className="container container-1550">
                    <div className="row align-items-center">

                        {/* LEFT CONTENT */}
                        <div className="col-lg-6">
                            <span className="tp-section-subtitle text-black blink-ball">
                                Responsive Shopping Experience
                            </span>

                            <h4 className="px-about-title">
                                <span className="text-blue-about">
                                    Responsive E-commerce Website{" "}
                                </span>
                                Design
                            </h4>

                            <p className="text-figtree">
                                Customers shop from desktops, laptops, tablets, and
                                smartphones. That's why responsive design is an essential
                                part of modern <strong>ecom website design</strong>.
                            </p>

                            <p className="text-figtree">
                                We develop ecommerce websites that adapt to different
                                screen sizes while maintaining usability, visual
                                consistency, and easy navigation.
                            </p>

                            <p className="text-figtree">
                                Whether your customers visit your store from a mobile phone
                                or desktop computer, we make sure your
                                <strong> website and ecommerce design</strong> provide a
                                consistent shopping experience.
                            </p>
                        </div>

                        {/* RIGHT RESPONSIVE VISUAL */}
                        <div className="col-lg-6">


                            <div className="portal-cta-image text-center">
                                <img
                                    src="assets/img/portal/8.Looking-for-a-Web-Portal-Development.jpg"
                                    alt="Web Portal Development Chennai"
                                    className="img-fluid w-100 "
                                    style={{ borderRadius: '16px', objectFit: 'cover', maxHeight: '450px', marginBottom: '20px' }}
                                />
                            </div>







                        </div>

                    </div>
                </div>
            </div>
            <div
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-once={true}
                className="px-about-6-area pt-40 pb-40 pb-lg-110"
            >
                <div className="container container-1550">
                    <div className="row align-items-center mb-4" data-aos="fade-up">
                        <div className="col-xl-3">
                            <span className="tp-section-subtitle text-black blink-ball">
                                Tailored E-commerce Development
                            </span>
                        </div>

                        <div className="col-xl-9">
                            <div className="px-project-title-box">
                                <h4 className="px-about-title mb-20">
                                    <span className="text-blue-about"> Custom E-commerce Development </span> for Different Industries
                                </h4>
                                <p className="text-figtree mt-2">
                                    Our ecommerce website development solutions can be customized for businesses across different industries.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h5 className="mb-3 fw-bold" style={{ fontFamily: '"Tenor Sans", "Tenor Sans Fallback"' }}>We can develop online stores for:</h5>

                    <IndustrySection data={industryData} />
                </div>
            </div>
            <div
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-once={true}
                className="px-about-6-area pt-40 pb-40 pb-lg-110" style={{
                    backgroundColor: "#f5f5f5",

                }}
            >
                <div className="container container-1550">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <span className="tp-section-subtitle text-black blink-ball">
                                Powerful E-commerce Solutions for Your Business
                            </span>

                            <h4 className="px-about-title">
                                <span className="text-blue-about">
                                    E-commerce Website Design{" "}
                                </span>
                                and Development in Chennai
                            </h4>
                        </div>
                        {/* LEFT - E-COMMERCE SVG */}
                        <div className="col-lg-6">
                            <div className="portal-cta-image text-center">
                                <img
                                    src="assets/img/portal/8.Looking-for-a-Web-Portal-Development.jpg"
                                    alt="Web Portal Development Chennai"
                                    className="img-fluid w-100"
                                    style={{ borderRadius: '16px', objectFit: 'cover', maxHeight: '450px' }}
                                />
                            </div>
                        </div>

                        {/* RIGHT - CONTENT */}
                        <div className="col-lg-6">




                            <p className="text-figtree mt-3 mt-lg-20">
                                Looking for an{" "}

                                ecommerce website design company in Chennai

                                ? Yulanto Web Creations helps startups, retailers,
                                manufacturers, service businesses, and established brands
                                create professional online stores.
                            </p>

                            <p className="text-figtree">
                                Our local team understands the requirements of Chennai
                                businesses and provides end-to-end{" "}
                                e commerce and web design services—from
                                planning and UI/UX design to development, payment
                                integration, testing, launch, and ongoing support.
                            </p>

                            <p className="text-figtree">
                                Whether you're launching your first online store or
                                upgrading an existing ecommerce platform, we can help you
                                create a scalable digital storefront.
                            </p>



                        </div>

                    </div>
                </div>
            </div>
            <div
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-once={true}
                className="px-about-6-area pt-40 pb-40 pb-lg-110"
            >
                <div className="container container-1550">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <span className="tp-section-subtitle text-black blink-ball">
                                Why Choose Yulanto
                            </span>

                            <h4 className="px-about-title">
                                <span className="text-blue-about">
                                    Why Choose Yulanto
                                </span>{" "}
                                for Custom E-commerce Development?
                            </h4>

                            <p className="text-figtree">
                                We combine design, development, usability, and business
                                objectives to create ecommerce solutions that are
                                practical and scalable.
                            </p>
                        </div>
                        <div className="col-lg-7">
                            <div className="why-yulanto-content">




                                <div className="why-yulanto-features">

                                    {/* 01 */}
                                    <div className="why-yulanto-feature">



                                        <div>
                                            <h5 className="text-tenor">
                                                Custom Design
                                            </h5>

                                            <p className="text-figtree">
                                                We create unique{" "}
                                                ecommerce site designs{" "}
                                                based on your brand, products, audience,
                                                and objectives.
                                            </p>
                                        </div>

                                    </div>


                                    {/* 02 */}
                                    <div className="why-yulanto-feature">



                                        <div>
                                            <h5 className="text-tenor">
                                                Mobile-First Experience
                                            </h5>

                                            <p className="text-figtree">
                                                Your online store is designed to provide a
                                                smooth experience across mobile, tablet,
                                                and desktop devices.
                                            </p>
                                        </div>

                                    </div>


                                    {/* 03 */}
                                    <div className="why-yulanto-feature">



                                        <div>
                                            <h5 className="text-tenor">
                                                Conversion-Focused Layouts
                                            </h5>

                                            <p className="text-figtree">
                                                We structure important pages and CTAs to
                                                make the customer journey simple and
                                                engaging.
                                            </p>
                                        </div>

                                    </div>


                                    {/* 04 */}
                                    <div className="why-yulanto-feature">



                                        <div>
                                            <h5 className="text-tenor">
                                                Scalable Development
                                            </h5>

                                            <p className="text-figtree">
                                                Your ecommerce platform can be developed
                                                with future growth and additional
                                                functionality in mind.
                                            </p>
                                        </div>

                                    </div>


                                    {/* 05 */}
                                    <div className="why-yulanto-feature">



                                        <div>
                                            <h5 className="text-tenor">
                                                Payment & Shipping Integration
                                            </h5>

                                            <p className="text-figtree">
                                                We can integrate suitable payment gateways
                                                and shipping options based on your business
                                                requirements.
                                            </p>
                                        </div>

                                    </div>




                                    {/* 07 */}
                                    <div className="why-yulanto-feature">



                                        <div>
                                            <h5 className="text-tenor">
                                                Ongoing Support
                                            </h5>

                                            <p className="text-figtree">
                                                After launch, we can assist with website
                                                maintenance, updates, improvements,
                                                hosting, security, and further development.
                                            </p>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>



                        <div className="col-lg-5 mb-5 mb-lg-0">
                            <div className="why-yulanto-visual">

                                <svg
                                    className="why-yulanto-svg"
                                    viewBox="0 0 560 520"
                                    xmlns="http://www.w3.org/2000/svg"
                                >

                                    {/* Background */}
                                    <ellipse
                                        cx="280"
                                        cy="270"
                                        rx="225"
                                        ry="190"
                                        fill="#EDF6FA"
                                    />

                                    <circle
                                        cx="95"
                                        cy="105"
                                        r="35"
                                        fill="#E3F1F5"
                                        className="why-float"
                                    />

                                    <circle
                                        cx="475"
                                        cy="100"
                                        r="28"
                                        fill="#E3F1F5"
                                        className="why-float-delay"
                                    />




                                    {/* CENTRAL WEBSITE WINDOW */}
                                    <g className="why-screen">

                                        <rect
                                            x="105"
                                            y="120"
                                            width="350"
                                            height="275"
                                            rx="18"
                                            fill="#053456"
                                        />

                                        {/* Browser */}
                                        <rect
                                            x="120"
                                            y="135"
                                            width="320"
                                            height="245"
                                            rx="9"
                                            fill="white"
                                        />

                                        {/* Browser dots */}
                                        <circle
                                            cx="138"
                                            cy="150"
                                            r="5"
                                            fill="#53ae7d"
                                        />

                                        <circle
                                            cx="153"
                                            cy="150"
                                            r="5"
                                            fill="#D8E8EE"
                                        />

                                        <circle
                                            cx="168"
                                            cy="150"
                                            r="5"
                                            fill="#D8E8EE"
                                        />


                                        {/* Header */}
                                        <rect
                                            x="140"
                                            y="170"
                                            width="280"
                                            height="34"
                                            rx="6"
                                            fill="#EDF6FA"
                                        />

                                        <text
                                            x="153"
                                            y="192"
                                            fill="#053456"
                                            fontSize="12"
                                            fontWeight="700"
                                            fontFamily="Arial, sans-serif"
                                        >
                                            Add Cart
                                        </text>

                                        <rect
                                            x="350"
                                            y="180"
                                            width="55"
                                            height="12"
                                            rx="6"
                                            fill="#53ae7d"
                                        />


                                        {/* Main Product */}
                                        <rect
                                            x="140"
                                            y="220"
                                            width="125"
                                            height="110"
                                            rx="9"
                                            fill="#EDF6FA"
                                        />

                                        {/* Product */}
                                        <path
                                            d="M155 288C172 282 180 250 198 244L222 257L240 280L258 292V307H165C153 305 149 296 155 288Z"
                                            fill="#053456"
                                        />

                                        <path
                                            d="M190 270L220 282"
                                            stroke="#53ae7d"
                                            strokeWidth="7"
                                            strokeLinecap="round"
                                        />

                                        <path
                                            d="M160 307H255"
                                            stroke="#53ae7d"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                        />


                                        {/* Content Lines */}
                                        <rect
                                            x="285"
                                            y="225"
                                            width="105"
                                            height="10"
                                            rx="5"
                                            fill="#053456"
                                        />

                                        <rect
                                            x="285"
                                            y="246"
                                            width="80"
                                            height="7"
                                            rx="4"
                                            fill="#D3E6ED"
                                        />

                                        <rect
                                            x="285"
                                            y="263"
                                            width="95"
                                            height="7"
                                            rx="4"
                                            fill="#D3E6ED"
                                        />

                                        {/* Stars */}
                                        <text
                                            x="285"
                                            y="293"
                                            fill="#53ae7d"
                                            fontSize="17"
                                            fontFamily="Arial, sans-serif"
                                        >
                                            ★ ★ ★ ★ ★
                                        </text>

                                        {/* CTA */}
                                        <rect
                                            x="285"
                                            y="307"
                                            width="110"
                                            height="32"
                                            rx="7"
                                            fill="#53ae7d"
                                            className="why-button"
                                        />

                                        <text
                                            x="310"
                                            y="328"
                                            fill="white"
                                            fontSize="11"
                                            fontWeight="700"
                                            fontFamily="Arial, sans-serif"
                                        >
                                            SHOP NOW
                                        </text>

                                    </g>


                                    {/* CUSTOM DESIGN CARD */}
                                    <g className="why-card why-card-one">

                                        <rect
                                            x="35"
                                            y="165"
                                            width="120"
                                            height="75"
                                            rx="12"
                                            fill="white"
                                            stroke="#DDEBF0"
                                            strokeWidth="3"
                                        />

                                        <circle
                                            cx="62"
                                            cy="190"
                                            r="15"
                                            fill="#EDF6FA"
                                        />

                                        <path
                                            d="M55 194L62 184L70 194"
                                            stroke="#53ae7d"
                                            strokeWidth="4"
                                            fill="none"
                                        />

                                        <text
                                            x="82"
                                            y="190"
                                            fill="#053456"
                                            fontSize="10"
                                            fontWeight="700"
                                            fontFamily="Arial, sans-serif"
                                        >
                                            Custom
                                        </text>

                                        <text
                                            x="82"
                                            y="205"
                                            fill="#053456"
                                            fontSize="10"
                                            fontWeight="700"
                                            fontFamily="Arial, sans-serif"
                                        >
                                            Design
                                        </text>

                                        <circle
                                            cx="62"
                                            cy="218"
                                            r="5"
                                            fill="#53ae7d"
                                            className="why-pulse"
                                        />

                                    </g>


                                    {/* MOBILE CARD */}
                                    <g className="why-card why-card-two">

                                        <rect
                                            x="410"
                                            y="190"
                                            width="115"
                                            height="82"
                                            rx="12"
                                            fill="white"
                                            stroke="#DDEBF0"
                                            strokeWidth="3"
                                        />

                                        <rect
                                            x="430"
                                            y="205"
                                            width="28"
                                            height="48"
                                            rx="5"
                                            fill="#053456"
                                        />

                                        <rect
                                            x="435"
                                            y="211"
                                            width="18"
                                            height="31"
                                            rx="2"
                                            fill="#EDF6FA"
                                        />

                                        <circle
                                            cx="444"
                                            cy="247"
                                            r="3"
                                            fill="#53ae7d"
                                        />

                                        <text
                                            x="468"
                                            y="220"
                                            fill="#053456"
                                            fontSize="10"
                                            fontWeight="700"
                                            fontFamily="Arial, sans-serif"
                                        >
                                            Mobile
                                        </text>

                                        <text
                                            x="468"
                                            y="235"
                                            fill="#053456"
                                            fontSize="10"
                                            fontWeight="700"
                                            fontFamily="Arial, sans-serif"
                                        >
                                            First
                                        </text>

                                    </g>


                                    {/* SECURITY SHIELD */}
                                    <g className="why-security">

                                        <circle
                                            cx="95"
                                            cy="345"
                                            r="42"
                                            fill="white"
                                            stroke="#DDEBF0"
                                            strokeWidth="4"
                                        />

                                        <path
                                            d="M95 318L120 328V347C120 365 108 378 95 384C82 378 70 365 70 347V328L95 318Z"
                                            fill="#53ae7d"
                                            stroke="#053456"
                                            strokeWidth="5"
                                        />

                                        <path
                                            d="M82 348L91 357L108 338"
                                            stroke="white"
                                            strokeWidth="6"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />

                                    </g>


                                    {/* SCALABILITY GRAPH */}
                                    <g className="why-growth">

                                        <circle
                                            cx="465"
                                            cy="350"
                                            r="48"
                                            fill="white"
                                            stroke="#DDEBF0"
                                            strokeWidth="4"
                                        />

                                        <rect
                                            x="438"
                                            y="355"
                                            width="12"
                                            height="20"
                                            rx="3"
                                            fill="#053456"
                                        />

                                        <rect
                                            x="457"
                                            y="340"
                                            width="12"
                                            height="35"
                                            rx="3"
                                            fill="#53ae7d"
                                        />

                                        <rect
                                            x="476"
                                            y="322"
                                            width="12"
                                            height="53"
                                            rx="3"
                                            fill="#053456"
                                        />

                                        <path
                                            d="M430 340C448 330 465 320 492 300"
                                            stroke="#53ae7d"
                                            strokeWidth="5"
                                            fill="none"
                                            strokeLinecap="round"
                                        />

                                        <path
                                            d="M482 302L494 299L491 312"
                                            stroke="#53ae7d"
                                            strokeWidth="5"
                                            fill="none"
                                            strokeLinecap="round"
                                        />

                                    </g>


                                    {/* PAYMENT CARD */}
                                    <g className="why-payment">

                                        <rect
                                            x="180"
                                            y="415"
                                            width="155"
                                            height="70"
                                            rx="12"
                                            fill="#053456"
                                        />

                                        <rect
                                            x="195"
                                            y="430"
                                            width="75"
                                            height="8"
                                            rx="4"
                                            fill="#53ae7d"
                                        />

                                        <rect
                                            x="195"
                                            y="447"
                                            width="45"
                                            height="6"
                                            rx="3"
                                            fill="#B8D3DE"
                                        />

                                        <circle
                                            cx="305"
                                            cy="453"
                                            r="14"
                                            fill="#53ae7d"
                                        />

                                        <path
                                            d="M298 453L303 458L313 447"
                                            stroke="white"
                                            strokeWidth="4"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />

                                    </g>


                                    {/* FLOATING DOTS */}
                                    <circle
                                        cx="175"
                                        cy="100"
                                        r="7"
                                        fill="#53ae7d"
                                        className="why-float"
                                    />

                                    <circle
                                        cx="385"
                                        cy="90"
                                        r="6"
                                        fill="#53ae7d"
                                        className="why-float-delay"
                                    />

                                    <circle
                                        cx="50"
                                        cy="300"
                                        r="6"
                                        fill="#53ae7d"
                                        className="why-float"
                                    />

                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-about-6-area pt-40 pb-40 pb-lg-110" style={{
                backgroundColor: "#f5f5f5",

            }}
            >
                <div className="container container-1550">
                    <div className="row align-items-center" data-aos="fade-up">
                        <div className="col-xl-3">
                            <span className="tp-section-subtitle text-black blink-ball">
                                From Design to Development
                            </span>
                        </div>

                        <div className="col-xl-9">
                            <div className="px-project-title-box">
                                <h4 className="px-about-title mb-20">
                                    <span className="text-blue-about">  From Ecommerce Website Design </span> to Development—Everything Under One Roof
                                </h4>

                            </div>
                        </div>
                    </div>




                    <div className="row align-items-start">

                        {/* Left Content */}
                        <div className="col-lg-5 mb-5 mb-lg-0">
                            <div className="ecom-process-left">
                                <div className="ecom-process-intro">
                                    <p className="text-figtree">
                                        A successful online store requires both ecommerce
                                        and web design expertise. Our team brings together
                                        visual design, UX planning, website development,
                                        ecommerce functionality, and digital marketing
                                        considerations.
                                    </p>

                                    <p className="text-figtree">
                                        From ecommerce homepage design to product pages,
                                        checkout, and backend management, we help create
                                        a complete ecommerce solution for your business.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Process */}
                        <div className="col-lg-7">
                            <div className="ecom-process-right">
                                <div className="ecom-process-area">

                                    {/* Process Title */}
                                    <div className="ecom-process-title">
                                        <span className="ecom-process-title-line"></span>

                                        <h5 className="text-tenor">
                                            Our E-commerce Process
                                        </h5>
                                    </div>

                                    {/* Swiper */}
                                    <Swiper
                                        className="ecom-process-slider"
                                        modules={[Autoplay]}
                                        slidesPerView={1}
                                        spaceBetween={25}
                                        loop={true}
                                        speed={700}
                                        autoplay={{
                                            delay: 4000,
                                            disableOnInteraction: false,
                                            pauseOnMouseEnter: true,
                                        }}
                                    >
                                        {ecommerceProcessData.map((process) => (
                                            <SwiperSlide>
                                                <div className="ecom-process-slide">


                                                    {/* Card */}
                                                    <div className="ecom-process-card">


                                                        <h6 className="text-tenor">
                                                            {process.title}
                                                        </h6>

                                                        <p className="text-figtree">
                                                            {process.description}
                                                        </p>
                                                    </div>

                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-once={true}
                className="px-about-6-area pt-40 pb-40 pb-lg-110"
            >
                <div className="container container-1550">
                    <div className="row align-items-center" data-aos="fade-up">
                        <div className="col-xl-3">
                            <span className="tp-section-subtitle text-black blink-ball">
                                Ready to Build Your Ecommerce Website?
                            </span>
                        </div>

                        <div className="col-xl-9">
                            <div className="px-project-title-box">
                                <h4 className="px-about-title mb-20">
                                    <span className="text-blue-about"> Build an Ecommerce Website </span> Designed for Your Business Growth
                                </h4>

                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">

                        {/* LEFT SIDE: Content */}
                        <div className="col-lg-6 mb-5 mb-lg-0">






                            <p className="text-figtree">
                                Whether you need a new online store, a complete ecommerce
                                redesign, or a custom ecommerce platform, Yulanto Web
                                Creations can help you turn your idea into a professional
                                digital storefront.
                            </p>

                            <p className="text-figtree">
                                Let's design an ecommerce website that looks professional,
                                works smoothly, and is built to support your business
                                growth.
                            </p>

                            <div className="ecommerce-cta-company mb-3">
                                <strong>Yulanto Web Creations</strong>{" "}
                                <span style={{ fontFamily: '"Tenor Sans", "Tenor Sans Fallback"' }}>
                                    Custom E-commerce Website Design & Development Company in Chennai
                                </span>
                            </div>

                            <p className="text-figtree">Get in touch with us today to discuss your ecommerce website requirements.</p>

                            <button
                                onClick={() => { openModal('manual') }}
                                className="btn d-inline-flex align-items-center gap-2 py-3 px-4 mt-3 rounded-3 fw-bold text-decoration-none"
                                style={{
                                    backgroundColor: '#053456',
                                    color: '#ffffff',
                                    fontSize: '15px',
                                    transition: 'all 0.3s ease',
                                    border: '1px solid #053456',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#03233a';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#053456';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <span style={{ fontFamily: "Figtree, Figtree Fallback" }}>Let's Talk to Our Team</span>
                                <i className="fa-solid fa-paper-plane" style={{ fontSize: '14px' }}></i>
                            </button>

                        </div>

                        {/* RIGHT SIDE: Visual / Image Properly Aligned */}
                        <div className="col-lg-6">

                            <div className="portal-cta-image text-center">
                                <img
                                    src="assets/img/portal/8.Looking-for-a-Web-Portal-Development.jpg"
                                    alt="Web Portal Development Chennai"
                                    className="img-fluid w-150 shadow-sm"
                                    style={{
                                        borderRadius: '16px',
                                        objectFit: 'cover',
                                        maxHeight: '450px',
                                        width: '100%'
                                    }}
                                />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecommerce
