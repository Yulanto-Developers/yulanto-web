import React from 'react'
import IntroContent from '../myComponents/common/IntroContent'
import { ecommerceDesignCards, ecommerceHomepageCards, ecommerceUserExperienceCards, productPageFeatures } from './ecommerceData/shareData'
import t1 from '@/assets/img/website/corporate/Branding.jpg';

function Ecommerce() {
    return (
        <div>
            <IntroContent
                leftTitle="Custom Online Stores Built for Your Brand"
                rightTitle1="Build a Powerful E-commerce "
                rightTitle2="Website Designed Around Your Business  "
                description="Your online store should do more than display products—it should create a smooth buying experience that turns visitors into customers. At Yulanto Web Creations, we provide custom e-commerce website design and e-commerce web development services in Chennai for businesses looking to establish, improve, or scale their online presence."
            />

            <div className="ecommerce-hero-animation" >
                <div className="container">
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
                </div>
            </div>

            <div className="container" >
                <div className="row">
                    <div className="col-12">
                        <p>From ecommerce website design and engaging homepage layouts to custom shopping experiences, payment integration, order management, and mobile-friendly interfaces, we create ecommerce websites that are designed around your products, customers, and business goals.</p>
                    </div>
                </div>
            </div>
            <div
                data-aos="fade-right"
                data-aos-delay={400}
                data-aos-once={true} style={{ background: '#f5f5f5', padding: "50px 0px" }}
            >
                <div className="container mt-30 mb-20">
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
            >
                <div className="container mt-30 mb-20">
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

                            <p className="text-figtree">
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

                                    {/* Icon */}
                                    <div className="ecommerce-card-icon">
                                        {card.icon}
                                    </div>

                                    {/* Title */}
                                    <h5 className="ecommerce-card-title text-figtree">
                                        {card.title}
                                    </h5>

                                    {/* Items */}
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

                        {/* Bottom Content */}
                        <div className="col-12 mt-4">

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
                data-aos-once={true}
            >
                <div className="container mt-30 mb-20">

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
            >
                <div className="container mt-100 mb-20">

                    <div className="row">

                        <div className="col-lg-12 mb-4">

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

                        <div className="row align-items-center">

                            {/* RIGHT CONTENT */}
                            <div className="col-lg-12">

                                <p className="text-figtree">
                                    Your product page plays a major role in the buying decision.
                                    We create product layouts that present important information
                                    clearly while keeping the design visually appealing.
                                </p>

                                <div className="product-page-features">

                                    {productPageFeatures.map((feature, index) => (
                                        <div
                                            className="product-feature-item"
                                            key={feature.title}
                                            data-aos="fade-up"
                                            data-aos-delay={(index + 1) * 80}
                                            data-aos-once={true}
                                        >
                                            <span className="product-feature-number">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <div className="product-feature-icon">
                                                {feature.icon}
                                            </div>

                                            <div className="product-feature-content">
                                                <h6 className="text-tenor">
                                                    {feature.title}
                                                </h6>

                                                <p className="text-figtree">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}

                                </div>

                                <p className="text-figtree product-page-bottom-text">
                                    Our <strong style={{color:'#053456'}}>design for ecommerce websites</strong> keeps
                                    product information organized so customers can make
                                    purchase decisions with confidence.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
             <div
    data-aos="fade-up"
    data-aos-delay={400}
    data-aos-once={true}
    className="responsive-ecommerce-section"
>
    <div className="container">

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

                <div className="responsive-devices">

                    <div className="responsive-desktop">
                        <div className="device-browser">
                            <div className="browser-top">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="device-screen">
                                <div className="screen-header"></div>

                                <div className="screen-hero">
                                    <div></div>
                                    <span></span>
                                </div>

                                <div className="screen-products">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="responsive-tablet">
                        <div className="tablet-screen">

                            <div className="tablet-header"></div>

                            <div className="tablet-hero">
                                <span></span>
                            </div>

                            <div className="tablet-products">
                                <span></span>
                                <span></span>
                            </div>

                        </div>
                    </div>

                    <div className="responsive-mobile">
                        <div className="mobile-speaker"></div>

                        <div className="mobile-screen">

                            <div className="mobile-header"></div>

                            <div className="mobile-hero">
                                <span></span>
                            </div>

                            <div className="mobile-product">
                                <span></span>
                                <span></span>
                            </div>

                            <div className="mobile-button"></div>

                        </div>
                    </div>

                    <div className="responsive-circle responsive-circle-one"></div>
                    <div className="responsive-circle responsive-circle-two"></div>

                </div>

            </div>

        </div>

    </div>
</div>
        </div>
    )
}

export default Ecommerce
