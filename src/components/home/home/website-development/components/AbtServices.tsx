'use client';

import React, { useEffect } from 'react';
import { useAOS } from '@/components/hooks/useAOS';
import '@/components/home/home/aboutcomponents/ourStory.css';
import '@/assets/css/textAnimations.css';
import CreativeAgencyFunfact from './CreativeAgencyFunfact';


const galleryImages = [
    "/assets/images/website-development/dynamic-website-development/top-1.jpg",
    "/assets/images/website-development/dynamic-website-development/top-2.jpg",
    "/assets/images/website-development/dynamic-website-development/top-3.jpg",
    "/assets/images/website-development/dynamic-website-development/top-4.jpg",
    "/assets/images/website-development/dynamic-website-development/top-5.jpg",
];

const AbtServices = () => {
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
                                Web Development <br />
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
                                    Dynamic Website Development Services  <br /> <span className="text-blue-about"> for Growing Businesses </span>
                                </h4>
                                <p
                                    className="mb-0"
                                    data-aos="text-reveal-lines"
                                    data-aos-delay="200"
                                >
                                    Looking for a reliable web development company in Chennai to build a powerful, scalable, and professional website for your business? At Yulanto Web Creations, we provide result-oriented web development services in Chennai designed to help businesses establish a strong digital presence, engage customers, and achieve their online goals.
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
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            data-aos-duration="800"
                        >
                            <img src={image} alt={`Gallery ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </section>

            <div className="container">
                <p
                    className="mt-2"
                    data-aos="text-reveal-lines"
                    data-aos-delay="200"
                >
                    As one of the experienced web design and development companies in Chennai, we create dynamic, responsive, database-driven, and easy-to-manage websites tailored to your business requirements. Whether you need a corporate website, business portal, e-commerce website, booking platform, content management system, or custom web application, our experienced web developers in Chennai can develop a solution that fits your needs.
                </p>
            </div>

            <CreativeAgencyFunfact num1={0} num2={4} titleFirst="Dynamic"
                titleHighlight="Website"
                titleSecond="Development" />

            {/* =========================================
                ABOUT SECTION - BLUE
            ========================================= */}
            <section className="about-blue-section">
                <div className="container-fuild">
                    <div className="row align-items-center">
                        {/* <div className="col-lg-4 mb-4 mb-lg-0">
                            <div
                                className="about-img-wrap"
                                data-aos="image-zoom"
                                data-aos-delay="100"

                            >
                                <img
                                    src={image1.src}
                                    alt="Team collaborating in modern web development office"
                                    className="about-small-img"

                                />
                            </div>
                        </div> */}

                        <div className="col-lg-12">
                            <div className="about-content-side">
                                <span className="tp-section-subtitle text-white blink-ball">
                                    We Are a Creative Web Development Agency
                                </span>
                                <h4
                                    className="px-about-title text-tenor"
                                    data-aos="text-reveal"
                                    data-aos-delay="200"
                                >
                                    <span className="text-white">Content Management Systems (CMS) & Dynamic Web Development </span>
                                </h4>

                                <p
                                    className="text-figtree "
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    Dynamic websites offer greater flexibility, functionality, and scalability compared with basic static websites. They allow businesses to manage website content, products, services, images, blogs, users, and other information through a convenient content management system.
                                </p>

                                <p
                                    className="text-figtree mb-0 "
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                >
                                    Our web development services in Chennai include CMS-based development using popular platforms such as WordPress, WooCommerce, and other suitable technologies. A CMS enables business owners and administrators to add, edit, or remove website content without requiring extensive technical knowledge.
                                </p>


                                <p
                                    className="text-figtree mt-2 "
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                >
                                    Dynamic websites can also connect with databases to store and retrieve information efficiently. Depending on project requirements, our web developers in Chennai can work with technologies and databases such as PHP, MySQL, Laravel, CodeIgniter, and other modern web development frameworks.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* =========================================
                            SERVICES - WHITE SECTION
                        ========================================= */}
            <div className="services-section">
                <div className="container services-content">
                    <div className="row align-items-center justify-content-center text-center">
                        <div className="col-lg-12 mb-4 mb-lg-0">
                            <h4
                                className="px-about-title text-tenor"
                                data-aos="text-reveal"
                                data-aos-delay="100"
                            >
                                Easy to  <span className="text-blue-about">Manage</span>
                            </h4>

                            <p
                                className="mb-0 "
                                data-aos="text-reveal-lines"
                                data-aos-delay="200"
                            >
                                A professionally developed dynamic website makes it simple to manage your online content. Administrators can update pages, services, products, images, blogs, testimonials, and other information through an easy-to-use interface.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AbtServices;