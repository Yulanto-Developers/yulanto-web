'use client'
import React from 'react'
import BreadcurmbData from '@/components/breadcrum/sections/breadcrumbdata'
import { useAOS } from "@/components/hooks/useAOS";
import SeoCoverflowSection, { CoverflowSlide } from "@/components/offpageseo/header";
import { galleryImages, seoBottomText, seoTopText, seoSlides, uiUxProcessData, uisteps, whyChooseItems } from './data/uiuxData';
import ProcessSection from '../myComponents/common/ProcessSection';
import UISteps from '../myComponents/common/UISteps';
import '@/assets/css/process-section.css'
import '@/assets/css/ui-steps.css'
import { useQuoteModal } from '../myComponents/Content/QuoteContext';

function Uiuxdesgin() {
    const { openModal } = useQuoteModal();
    useAOS();
    return (
        <div>
            <BreadcurmbData />
            <SeoCoverflowSection
                subtitle="Professional UI Design Solutions"
                titlePrefix="User Interface Design "
                titleSuffix="That Makes Every Interaction Better"
                topDescription={seoTopText}
                bottomDescription={seoBottomText}
                slides={seoSlides}
                autoScrollSpeed={1200}
                className="akone"
            />
            <div data-aos="fade-right"
                data-aos-delay={400}
                data-aos-once={true}>
                <div className='container mt-30 mb-20'>
                    <div className="row">

                        <div className="col-12 mb-4">
                            <span className="tp-section-subtitle text-black blink-ball">
                                Modern UI/UX Design Solutions
                            </span>

                            <h4 className="px-about-title mb-20">
                                <span className="text-blue-about">
                                    Creative UI/UX Design for {" "}
                                </span>
                                Modern Digital Experiences
                            </h4>

                        </div>

                        <div className="col-md-7">
                            <p>
                                We provide professional UX design and UI design solutions for businesses looking to build intuitive and engaging digital experiences. Whether you need a new website interface, a mobile app design, or a complete digital product experience, our UI and UX designers focus on making every screen purposeful and easy to use.
                                <br />
                                <br />
                                Our UX interface design process helps transform complex ideas into clear, user-friendly experiences that guide visitors naturally toward action.
                            </p>
                        </div>
                        <div className='col-md-5'>
                            <div className="corporate-gallery">
                                {galleryImages.map((image, index) => (
                                    <div key={index} className={image.className}>
                                        <img src={image.src} alt={image.alt} />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='mb-50'>
                <div className='container mt-50'>
                    <div className="row">

                        <div className="col-12">
                            <span className="tp-section-subtitle text-black blink-ball">
                                Creative UI/UX Solutions
                            </span>

                            <h4 className="px-about-title">
                                <span className="text-blue-about">
                                    Our UI/UX Design {" "}
                                </span>
                                Services
                            </h4>

                        </div>
                    </div>
                </div>
                <ProcessSection
                    sectionTitle=""
                    steps={uiUxProcessData}
                />
            </div>
            <div
                data-aos="fade-down"
                data-aos-delay={400}
                data-aos-once={true}
            >
                <div className="container mt-30 mb-20">

                    <div className="row">

                        <div className="col-12 mb-4">

                            <span className="tp-section-subtitle text-black blink-ball">
                                From Research to Final Design
                            </span>

                            <h4 className="px-about-title mb-20">
                                <span className="text-blue-about">
                                    Our UX Design & UI{" "}
                                </span>
                                Design Process
                            </h4>

                        </div>

                    </div>

                    <UISteps steps={uisteps} />

                </div>
            </div>
            <div
                data-aos="fade-down"
                data-aos-delay={400}
                data-aos-once={true}
            >
                <div className="container mt-30 mb-20">

                    <div className="row">

                        <div className="col-12 mb-4">

                            <span className="tp-section-subtitle text-black blink-ball">
                                What Sets Our UI/UX Designers Apart
                            </span>

                            <h4 className="px-about-title mb-20">
                                <span className="text-blue-about">
                                    Why Choose Our UI/UX{" "}
                                </span>
                                Designers in Chennai?
                            </h4>

                        </div>

                    </div>

                    <div className="row">

                        {whyChooseItems.map((item, index) => (
                            <div
                                className="col-lg-3 col-md-6 col-12 mb-20"
                                key={index}
                            >
                                <div className="why-choose-item">

                                    <div className="why-choose-icon">
                                        <i className="fa-regular fa-circle-check"></i>
                                    </div>

                                    <span className='text-figtree'>
                                        {item}
                                    </span>

                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
            <div
                data-aos="fade-down"
                data-aos-delay={400}
                data-aos-once={true}
                style={{ background: "#f5f5f5" }}
            >
                <div className="container mt-30 mb-20">

                    {/* UI/UX DESIGN - INTRO */}
                    <div className="row align-items-center">

                        {/* LEFT - ANIMATED SVG */}
                        <div className="col-lg-5 col-md-6 mb-4 mb-md-0">

                            <div className="uiux-growth-illustration">

                                <svg
                                    viewBox="0 0 500 420"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-100"
                                >
                                    {/* Background Circle */}
                                    <circle
                                        cx="250"
                                        cy="210"
                                        r="175"
                                        fill="#e9edff"
                                    />

                                    <circle
                                        cx="250"
                                        cy="210"
                                        r="135"
                                        fill="#f5f5f5"
                                    />

                                    {/* Floating Dots */}
                                    <circle
                                        cx="85"
                                        cy="105"
                                        r="7"
                                        fill="#053456"
                                        className="uiux-float"
                                    />

                                    <circle
                                        cx="415"
                                        cy="120"
                                        r="6"
                                        fill="#053456"
                                        className="uiux-float-delay"
                                    />

                                    <circle
                                        cx="400"
                                        cy="325"
                                        r="8"
                                        fill="#053456"
                                        className="uiux-float"
                                    />

                                    {/* Laptop */}
                                    <g className="uiux-device">
                                        <rect
                                            x="115"
                                            y="105"
                                            width="270"
                                            height="175"
                                            rx="12"
                                            fill="#ffffff"
                                            stroke="#172554"
                                            strokeWidth="5"
                                        />

                                        {/* Browser Header */}
                                        <rect
                                            x="115"
                                            y="105"
                                            width="270"
                                            height="32"
                                            rx="12"
                                            fill="#053456"
                                        />

                                        <circle cx="135" cy="121" r="4" fill="#FF0000" />
                                        <circle cx="150" cy="121" r="4" fill="#29CC29" />
                                        <circle cx="165" cy="121" r="4" fill="#FFFF00" />

                                        {/* UI Image */}
                                        <rect
                                            x="140"
                                            y="155"
                                            width="85"
                                            height="70"
                                            rx="8"
                                            fill="#e9edff"
                                        />

                                        <circle
                                            cx="182"
                                            cy="177"
                                            r="14"
                                            fill="#053456"
                                        />

                                        <path
                                            d="M150 215 L172 190 L190 207 L204 194 L218 215 Z"
                                            fill="#053456"
                                        />

                                        {/* UI Content */}
                                        <rect
                                            x="245"
                                            y="158"
                                            width="105"
                                            height="10"
                                            rx="5"
                                            fill="#172554"
                                        />

                                        <rect
                                            x="245"
                                            y="180"
                                            width="85"
                                            height="7"
                                            rx="4"
                                            fill="#cbd5e1"
                                        />

                                        <rect
                                            x="245"
                                            y="197"
                                            width="95"
                                            height="7"
                                            rx="4"
                                            fill="#cbd5e1"
                                        />

                                        {/* Button */}
                                        <rect
                                            x="245"
                                            y="218"
                                            width="65"
                                            height="25"
                                            rx="6"
                                            fill="#053456"
                                        />

                                        {/* Laptop Base */}
                                        <path
                                            d="M90 285 H410 L385 310 H115 Z"
                                            fill="#172554"
                                        />

                                        <path
                                            d="M155 295 H345"
                                            stroke="#ffffff"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                        />
                                    </g>

                                    {/* Mobile */}
                                    <g className="uiux-mobile">
                                        <rect
                                            x="315"
                                            y="235"
                                            width="85"
                                            height="145"
                                            rx="14"
                                            fill="#ffffff"
                                            stroke="#172554"
                                            strokeWidth="5"
                                        />

                                        <rect
                                            x="330"
                                            y="260"
                                            width="55"
                                            height="45"
                                            rx="7"
                                            fill="#e9edff"
                                        />

                                        <circle
                                            cx="357"
                                            cy="278"
                                            r="10"
                                            fill="#053456"
                                        />

                                        <rect
                                            x="330"
                                            y="320"
                                            width="55"
                                            height="7"
                                            rx="4"
                                            fill="#cbd5e1"
                                        />

                                        <rect
                                            x="330"
                                            y="335"
                                            width="42"
                                            height="7"
                                            rx="4"
                                            fill="#cbd5e1"
                                        />

                                        <rect
                                            x="330"
                                            y="353"
                                            width="55"
                                            height="13"
                                            rx="5"
                                            fill="#053456"
                                        />
                                    </g>

                                    {/* Design Icon */}
                                    <g className="uiux-icon-float">
                                        <circle
                                            cx="105"
                                            cy="300"
                                            r="38"
                                            fill="#053456"
                                        />

                                        <path
                                            d="M90 312 L113 289"
                                            stroke="#ffffff"
                                            strokeWidth="6"
                                            strokeLinecap="round"
                                        />

                                        <path
                                            d="M94 286 H117 V309"
                                            fill="none"
                                            stroke="#ffffff"
                                            strokeWidth="6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>

                                    {/* Target / Growth Icon */}
                                    <g className="uiux-target">
                                        <circle
                                            cx="400"
                                            cy="75"
                                            r="32"
                                            fill="#053456"
                                        />

                                        <circle
                                            cx="400"
                                            cy="75"
                                            r="15"
                                            fill="none"
                                            stroke="#ffffff"
                                            strokeWidth="4"
                                        />

                                        <circle
                                            cx="400"
                                            cy="75"
                                            r="5"
                                            fill="#ffffff"
                                        />
                                    </g>

                                </svg>

                            </div>

                        </div>


                        {/* RIGHT - CONTENT */}
                        <div className="col-lg-7 col-md-6">

                            <span className="tp-section-subtitle text-black blink-ball">
                                UI/UX Design That Supports Business Growth
                            </span>

                            <h4 className="px-about-title text-tenor mb-20">
                                Design That Drives Better
                                <span className="text-blue-about">
                                    {" "}Digital Experiences
                                </span>
                            </h4>

                            <p>
                                Good design is more than attractive screens. A well-planned
                                <strong> UX design and UI design </strong>
                                strategy can help users find information faster, understand
                                your offerings clearly, and take the actions that matter to
                                your business.
                            </p>

                            <p>
                                As a <strong>UI/UX designer team in Chennai</strong>, we
                                combine creativity, usability, and business thinking to
                                build digital experiences that are both visually impressive
                                and practical.
                            </p>

                        </div>

                    </div>


                    {/* CTA SECTION */}
                    <div className="row mt-50">

                        <div className="col-12">

                            <div
                                className="uiux-growth-cta"
                                style={{
                                    background:
                                        "linear-gradient(110deg, #172554 0%, #053456 55%, #053456 100%)",
                                    borderRadius: "24px",
                                    padding: "45px 50px",
                                    position: "relative",
                                    overflow: "hidden"
                                }}
                            >

                                <div className="row align-items-center">

                                    {/* CTA CONTENT */}
                                    <div className="col-lg-8">

                                        <span className="tp-section-subtitle text-white blink-ball">
                                            Build Better Digital Experiences
                                        </span>

                                        <h4 className="px-about-title text-tenor text-white mb-15">
                                            Let’s Design a
                                            <span className="">
                                                {" "}Better User Experience.
                                            </span>
                                        </h4>

                                        <p className="text-white mb-0">
                                            Looking for professional
                                            <strong> ui and ux designers in Chennai </strong>
                                            for your website or digital product? Let's
                                            create an interface that looks great, feels
                                            intuitive, and helps your users accomplish more.
                                        </p>

                                    </div>


                                    {/* CTA BUTTON */}
                                    <div className="col-lg-4 text-lg-end mt-30 mt-lg-0">

                                        <button
                                            onClick={openModal}
                                            className="tp-btn"
                                            style={{
                                                background: "#ffffff",
                                                color: "#172554",
                                                padding: "15px 28px",
                                                borderRadius: "8px",
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "12px"
                                            }}
                                        >
                                            Let’s Get Started
                                            <i className="fa-regular fa-arrow-right"></i>
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default Uiuxdesgin
