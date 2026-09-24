"use client";

import React from "react";
import "@/assets/css/ThankYou.css";

export default function ThankYou() {
    return (
        <section className="thankyou-section">
            <div className="container">
                <div className="row align-items-center justify-content-center">

                    {/* LEFT CONTENT */}
                    <div className="col-lg-7 col-md-7">
                        <div className="thankyou-content">

                            <span className="thankyou-badge">
                                Thank You!
                            </span>

                            <h1>
                                Thank you for your interest in
                                <span> Yulanto Web Creations.</span>
                            </h1>

                            <p>
                                Our support team shall contact you shortly.
                            </p>

                            <div className="thankyou-line"></div>

                            <p className="thankyou-small">
                                We appreciate you reaching out to us.
                                Our team will get in touch with you soon.
                            </p>

                        </div>
                    </div>

                    {/* RIGHT ANIMATION */}
                    <div className="col-lg-5 col-md-5">
                        <div className="thankyou-animation">

                            <svg
                                className="thankyou-svg"
                                viewBox="0 0 420 360"
                                xmlns="http://www.w3.org/2000/svg"
                            >

                                {/* Decorative circles */}
                                <circle
                                    className="circle circle-one"
                                    cx="210"
                                    cy="180"
                                    r="130"
                                />

                                <circle
                                    className="circle circle-two"
                                    cx="210"
                                    cy="180"
                                    r="100"
                                />

                                {/* Floating particles */}
                                <circle
                                    className="particle particle-one"
                                    cx="90"
                                    cy="90"
                                    r="5"
                                />

                                <circle
                                    className="particle particle-two"
                                    cx="330"
                                    cy="75"
                                    r="6"
                                />

                                <circle
                                    className="particle particle-three"
                                    cx="350"
                                    cy="260"
                                    r="5"
                                />

                                <circle
                                    className="particle particle-four"
                                    cx="75"
                                    cy="275"
                                    r="4"
                                />

                                {/* Main document */}
                                <g className="document">

                                    <rect
                                        x="125"
                                        y="70"
                                        width="170"
                                        height="220"
                                        rx="18"
                                        fill="#ffffff"
                                        stroke="#053456"
                                        strokeWidth="4"
                                    />

                                    {/* Top bar */}
                                    <rect
                                        x="125"
                                        y="70"
                                        width="170"
                                        height="48"
                                        rx="18"
                                        fill="#053456"
                                    />

                                    <circle
                                        cx="150"
                                        cy="94"
                                        r="6"
                                        fill="#53AE7D"
                                    />

                                    <circle
                                        cx="170"
                                        cy="94"
                                        r="6"
                                        fill="#ffffff"
                                        opacity="0.7"
                                    />

                                    <circle
                                        cx="190"
                                        cy="94"
                                        r="6"
                                        fill="#ffffff"
                                        opacity="0.5"
                                    />

                                    {/* Text lines */}
                                    <rect
                                        x="150"
                                        y="145"
                                        width="110"
                                        height="9"
                                        rx="5"
                                        fill="#053456"
                                        opacity="0.15"
                                    />

                                    <rect
                                        x="150"
                                        y="168"
                                        width="85"
                                        height="8"
                                        rx="4"
                                        fill="#053456"
                                        opacity="0.1"
                                    />

                                    <rect
                                        x="150"
                                        y="191"
                                        width="100"
                                        height="8"
                                        rx="4"
                                        fill="#053456"
                                        opacity="0.1"
                                    />

                                    {/* Check circle */}
                                    <circle
                                        className="success-circle"
                                        cx="210"
                                        cy="245"
                                        r="25"
                                        fill="#53AE7D"
                                    />

                                    <path
                                        className="check-mark"
                                        d="M198 245 L207 254 L224 235"
                                        fill="none"
                                        stroke="#ffffff"
                                        strokeWidth="6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />

                                </g>

                                {/* Flying envelope */}
                                <g className="envelope">

                                    <rect
                                        x="270"
                                        y="145"
                                        width="85"
                                        height="60"
                                        rx="10"
                                        fill="#53AE7D"
                                    />

                                    <path
                                        d="M272 150 L312 182 L353 150"
                                        fill="none"
                                        stroke="#ffffff"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />

                                </g>

                                {/* Small sparkle */}
                                <g className="sparkle">
                                    <path
                                        d="M85 165 L91 180 L106 186 L91 192 L85 207 L79 192 L64 186 L79 180 Z"
                                        fill="#53AE7D"
                                    />
                                </g>

                                {/* Top sparkle */}
                                <g className="sparkle sparkle-two">
                                    <path
                                        d="M325 115 L330 127 L342 132 L330 137 L325 150 L320 137 L308 132 L320 127 Z"
                                        fill="#053456"
                                    />
                                </g>

                            </svg>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}