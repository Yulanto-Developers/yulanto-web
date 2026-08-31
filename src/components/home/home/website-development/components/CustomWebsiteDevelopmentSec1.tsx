'use client';

import React, { useEffect } from 'react';
import { useAOS } from '@/components/hooks/useAOS';
import '@/components/home/home/aboutcomponents/ourStory.css';
import '@/assets/css/textAnimations.css';
import image4 from "@/assets/images/ourstory/vector-2.png";
import CreativeAgencyFunfact from './CreativeAgencyFunfact';

const galleryImages = [
    "/assets/images/ourstory/image-1.jpg",
    "/assets/images/ourstory/image-1.jpg",
    "/assets/images/ourstory/image-1.jpg",
    "/assets/images/ourstory/image-1.jpg",
    "/assets/images/ourstory/image-1.jpg",
];

const CustomWebsiteDevelopmentSec1 = () => {
    useAOS();
    return (
        <section className="yul-st">
            {/* =========================================
                INTRO - WHITE SECTION
            ========================================= */}
            <style>
                {
                    `.yul-st .services-section {
                     background: #fff;
                     width: 100%;
                     padding: 30px 0px 30px;
                     }
                     
                     .ar-funfact-bg {
                      padding: 10px 0 0;
                     }

                     .yul-st .about-blue-section {
                      color: #fff;
                      background: #0b3456;
                      width: 100%;
                      padding: 35px 20px;
                     }
                    //   
                    /* =========================================
   OVERLAPPING IMAGE GALLERY
========================================= */

.overlap-gallery {
    width: 100%;
    overflow: hidden;
    padding: 20px 0 30px;
    background: #fff;
}

.overlap-gallery-track {
    width: max-content;
    min-width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0;
}

/* =========================================
   IMAGE ITEM
========================================= */

.overlap-gallery-item {
    position: relative;

    width: 195px;
    height: 220px;

    flex: 0 0 195px;

    overflow: hidden;

    border-radius: 14px;

    background: #053456;

    box-shadow:
        0 12px 25px rgba(5, 52, 86, 0.12);

    transition:
        transform 0.4s ease,
        z-index 0.4s ease,
        box-shadow 0.4s ease;
}

.overlap-gallery-item img {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;

    transition: transform 0.5s ease;
}

/* =========================================
   OVERLAPPING
========================================= */

.item-1 {
    margin-right: -5px;
    transform: rotate(-8deg);
    z-index: 1;
}

.item-2 {
    margin-right: -5px;
    transform: rotate(5deg);
    z-index: 2;
}

.item-3 {
    width: 260px;
    height: 255px;

    flex-basis: 260px;

    margin: 0 -2px;

    transform: rotate(0deg);

    z-index: 5;
}

.item-4 {
    margin-left: -5px;
    transform: rotate(-5deg);
    z-index: 2;
}

.item-5 {
    margin-left: -5px;
    transform: rotate(7deg);
    z-index: 1;
}

/* =========================================
   HOVER
========================================= */

.overlap-gallery-item:hover {
    z-index: 20;

    transform: rotate(0deg) translateY(-8px);

    box-shadow:
        0 20px 35px rgba(5, 52, 86, 0.20);
}

.overlap-gallery-item:hover img {
    transform: scale(1.05);
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 991px) {

    .overlap-gallery {
        padding: 15px 0 25px;
    }

    .overlap-gallery-track {
        justify-content: flex-start;

        padding: 0 30px;

        overflow: visible;
    }

    .overlap-gallery-item {
        width: 170px;
        height: 195px;

        flex-basis: 170px;
    }

    .item-3 {
        width: 220px;
        height: 225px;

        flex-basis: 220px;
    }
}


/* =========================================
   MOBILE
========================================= */

@media (max-width: 767px) {

    .overlap-gallery {
        padding: 10px 0 25px;

        overflow-x: auto;
        overflow-y: hidden;

        scrollbar-width: none;
    }

    .overlap-gallery::-webkit-scrollbar {
        display: none;
    }

    .overlap-gallery-track {
        min-width: max-content;

        justify-content: flex-start;

        padding: 10px 35px 20px;
    }

    .overlap-gallery-item {
        width: 145px;
        height: 175px;

        flex-basis: 145px;

        border-radius: 12px;
    }

    .item-1 {
        transform: rotate(-7deg);
    }

    .item-2 {
        transform: rotate(5deg);
    }

    .item-3 {
        width: 185px;
        height: 205px;

        flex-basis: 185px;

        transform: rotate(0);
    }

    .item-4 {
        transform: rotate(-5deg);
    }

    .item-5 {
        transform: rotate(7deg);
    }
}


/* =========================================
   SMALL MOBILE
========================================= */

@media (max-width: 480px) {

    .overlap-gallery-track {
        padding-left: 25px;
        padding-right: 25px;
    }

    .overlap-gallery-item {
        width: 125px;
        height: 155px;

        flex-basis: 125px;

        border-radius: 10px;
    }

    .item-3 {
        width: 165px;
        height: 185px;

        flex-basis: 165px;
    }
}
                     `


                }
            </style>
            <div className="services-section">
                <div className="container services-content mt-3">

                    <div className="row">
                        <div className="col-xl-3">
                            <span
                                className="tp-section-subtitle text-black blink-ball mt-40"
                                style={{ lineHeight: "25px" }} data-aos="text-reveal"
                                data-aos-delay="100"
                            >
                                Website Development <br />
                                Company in Chennai
                            </span>
                        </div>

                        <div className="col-xl-9">
                            <div className="px-project-title-box">

                                <h4
                                    className="px-about-title text-tenor"
                                    data-aos="text-reveal"
                                    data-aos-delay="100"
                                >
                                    Secure, Custom-Built Websites Designed  <br /> <span className="text-blue-about"> Around Your Business  </span>
                                </h4>
                                <p
                                    className="mb-0"
                                    data-aos="text-reveal-lines"
                                    data-aos-delay="200"
                                >
                                    Looking for a reliable website development company in Chennai to build a website that truly represents your brand? At Yulanto Web Creations, we create secure, responsive, scalable, and custom-built websites designed around your business objectives.
                                </p>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>

            <section className="overlap-gallery container mt-3">
                <div className="overlap-gallery-track">
                    {galleryImages.map((image, index) => (
                        <div
                            className={`overlap-gallery-item item-${index + 1}`}
                            key={index}
                        >
                            <img src={image} alt={`Gallery ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </section>

            <div className="container">
                  <div className="row align-items-center">
                        <div className="col-lg-12 mb-4 mb-lg-0">

                            <p
                                className="mt-2"
                                data-aos="text-reveal-lines"
                                data-aos-delay="200"
                            >
                                As an experienced web site development company in Chennai, we combine creative design, modern technologies, intuitive navigation, and search-engine-friendly development to deliver websites that provide an engaging experience across desktops, tablets, and mobile devices.
                            </p>
                            <p
                                className="mt-2"
                                data-aos="text-reveal-lines"
                                data-aos-delay="200"
                            >
                                Our team of professional website developers in Chennai develops websites from the ground up based on your business requirements rather than relying entirely on generic templates. From corporate websites and business portals to customized web applications and eCommerce platforms, we create digital solutions tailored to your goals.
                            </p>
                        </div>
                    </div>
            </div>

            <CreativeAgencyFunfact num1={4} num2={8} titleFirst="Custom " titleHighlight="Website" titleSecond="" />

            {/* =========================================
                            SERVICES - WHITE SECTION
                        ========================================= */}
            <div className="services-section">
                <div className="container services-content">
                    <div className="row mb-30" >
                        <div className="col-xl-3">
                            <span
                                className="tp-section-subtitle text-black blink-ball mt-0"
                                style={{ lineHeight: "25px" }} data-aos="text-reveal"
                                data-aos-delay="100"
                            >
                                Custom-Built Websites <br />
                                for Your Business
                            </span>
                        </div>

                        <div className="col-xl-9">
                            <div className="px-project-title-box">

                                <h4
                                    className="px-about-title text-tenor"
                                    data-aos="text-reveal"
                                    data-aos-delay="100"
                                >
                                    Websites Tailored to  <span className="text-blue-about"> Your Brand, Goals & Customers </span>
                                </h4>

                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-8 mb-4 mb-lg-0">
                            <p
                                className="mb-2 text-justify"
                                data-aos="text-reveal-lines"
                                data-aos-delay="200"
                            >
                                Every business is different, and your website should reflect what makes your business unique. Our custom website development services provide the flexibility to create a website that matches your brand identity, business processes, target audience, and long-term growth plans.
                            </p>
                            <p
                                className="mb-2 text-justify"
                                data-aos="text-reveal-lines"
                                data-aos-delay="200"
                            >
                                As a professional website development company in Chennai, we focus on creating websites that are visually appealing, easy to manage, fast-loading, mobile-friendly, secure, and optimized for search engines.
                            </p>
                            <p
                                className="mb-0 text-justify"
                                data-aos="text-reveal-lines"
                                data-aos-delay="200"
                            >
                                Custom website development gives you greater control over the website's design, functionality, content structure, integrations, and future scalability. Whether you need a simple business website or a feature-rich web platform, our website developers in Chennai can develop a solution around your specific requirements.
                            </p>
                        </div>

                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <div
                                data-aos="image-rotate"
                                data-aos-delay="300"

                            >
                                <img
                                    src={image4.src}
                                    alt="Team collaborating in modern web development office"
                                    className="about-small-img"

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomWebsiteDevelopmentSec1;