"use client";

import React from "react";
import Image from "next/image";

import image1 from "@/assets/images/webdev/image-1.jpg";
import image2 from "@/assets/images/webdev/image-2.jpg";
import image3 from "@/assets/images/webdev/image-3.jpg";

const CreativeReactSection = () => {
    return (
        <section className="creative-react-section">
            <div className="container container-1550">
                <div className="row align-items-center">
                    {/* LEFT CONTENT */}
                    <div className="col-xl-6">
                        <div
                            className="px-project-title-box"
                            data-aos="fade-up"
                        >
                            <h4 className="px-about-title mb-20">
                                <span className="text-blue-about">
                                    Creative Website Design
                                </span>{" "}
                                Meets React Development
                            </h4>

                            <p className="text-figtree text-black mt-2">
                                Great websites need more than just technology.
                                They need a clear structure, attractive design,
                                and an experience that encourages visitors to
                                take action.
                            </p>

                            <p className="text-figtree text-black mt-2">
                                Our team combines modern design principles with
                                React JS development to create websites that
                                represent your brand professionally. Whether
                                you need a new business website or want to
                                upgrade an existing website, we create
                                solutions that balance design, usability,
                                speed, and functionality.
                            </p>

                            <p className="text-figtree text-black mt-2">
                                If you are searching for best web design in
                                Chennai, we focus on delivering websites that
                                are not only attractive but also aligned with
                                your business objectives and customer
                                expectations.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT IMAGE DESIGN */}
                    <div className="col-xl-6">
                        <div
                            className="creative-react-gallery"
                            data-aos="fade-left"
                        >
                            {/* Decorative Ring */}
                            <div className="gallery-ring"></div>

                            {/* Decorative Dot */}
                            <div className="gallery-dot gallery-dot-one"></div>
                            <div className="gallery-dot gallery-dot-two"></div>

                            {/* Small Image - Top Right */}
                            <div className="gallery-image gallery-image-top">
                                <Image
                                    src={image2}
                                    alt="React website development"
                                    fill
                                    sizes="220px"
                                />

                                <div className="gallery-image-label">
                                    <span>UI / UX</span>
                                </div>
                            </div>

                            {/* Main Image */}
                            <div className="gallery-image gallery-image-main">
                                <Image
                                    src={image1}
                                    alt="Creative website design"
                                    fill
                                    sizes="400px"
                                />

                                <div className="gallery-main-overlay">
                                    <span>Creative Design</span>
                                </div>
                            </div>

                            {/* Small Image - Bottom Left */}
                            <div className="gallery-image gallery-image-bottom">
                                <Image
                                    src={image3}
                                    alt="Modern React development"
                                    fill
                                    sizes="230px"
                                />

                                <div className="gallery-image-label">
                                    <span>React JS</span>
                                </div>
                            </div>

                            {/* Experience Badge */}
                            <div className="gallery-badge">
                                <span>Modern</span>
                                <strong>Web</strong>
                                <small>Experience</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .creative-react-section {
                    padding: 30px 0;
                    overflow: hidden;
                }

                /* =================================
                   GALLERY WRAPPER
                ================================= */

                .creative-react-gallery {
                    position: relative;
                    width: 100%;
                    max-width: 620px;
                    height: 550px;
                    margin: 0 auto;
                }

                /* =================================
                   IMAGES
                ================================= */

                .gallery-image {
                    position: absolute;
                    overflow: hidden;
                    background: #ffffff;
                    box-shadow: 0 20px 50px rgba(5, 52, 86, 0.14);
                    transition:
                        transform 0.5s ease,
                        box-shadow 0.5s ease;
                }

                .gallery-image img {
                    object-fit: cover;
                    transition: transform 0.7s ease;
                }

                /* Main Image */

                .gallery-image-main {
                    width: 350px;
                    height: 440px;
                    top: 45px;
                    left: 50%;
                    z-index: 3;
                    border-radius: 35px;
                    border: 7px solid #ffffff;
                    transform: translateX(-50%);
                }

                /* Top Image */

                .gallery-image-top {
                    width: 220px;
                    height: 220px;
                    top: 0;
                    right: 5px;
                    z-index: 4;
                    border-radius: 30px;
                    border: 6px solid #ffffff;
                    transform: rotate(5deg);
                }

                /* Bottom Image */

                .gallery-image-bottom {
                    width: 235px;
                    height: 205px;
                    bottom: 15px;
                    left: 5px;
                    z-index: 5;
                    border-radius: 30px;
                    border: 6px solid #ffffff;
                    transform: rotate(-5deg);
                }

                /* =================================
                   IMAGE HOVER
                ================================= */

                .creative-react-gallery:hover
                    .gallery-image-main {
                    transform: translateX(-50%) scale(1.025);
                }

                .creative-react-gallery:hover
                    .gallery-image-top {
                    transform: rotate(8deg) translate(5px, -7px);
                }

                .creative-react-gallery:hover
                    .gallery-image-bottom {
                    transform: rotate(-8deg) translate(-5px, 7px);
                }

                .gallery-image:hover {
                    box-shadow: 0 30px 65px rgba(5, 52, 86, 0.22);
                }

                .gallery-image:hover img {
                    transform: scale(1.08);
                }

                /* =================================
                   IMAGE LABELS
                ================================= */

                .gallery-image-label {
                    position: absolute;
                    left: 15px;
                    bottom: 15px;
                    padding: 7px 13px;
                    border-radius: 20px;
                    background: rgba(5, 52, 86, 0.9);
                    color: #ffffff;
                    font-size: 11px;
                    font-weight: 500;
                    backdrop-filter: blur(5px);
                }

                .gallery-main-overlay {
                    position: absolute;
                    left: 20px;
                    bottom: 20px;
                    padding: 9px 17px;
                    border-radius: 20px;
                    background: #53ae7d;
                    color: #ffffff;
                    font-size: 12px;
                    font-weight: 600;
                }

                /* =================================
                   GREEN DECORATIVE RING
                ================================= */

                .gallery-ring {
                    position: absolute;
                    width: 430px;
                    height: 430px;
                    top: 65px;
                    left: 50%;
                    border: 1px solid rgba(83, 174, 125, 0.3);
                    border-radius: 50%;
                    transform: translateX(-50%);
                    z-index: 1;
                    transition: transform 0.7s ease;
                }

                .creative-react-gallery:hover .gallery-ring {
                    transform: translateX(-50%) rotate(15deg) scale(1.05);
                }

                /* =================================
                   DECORATIVE DOTS
                ================================= */

                .gallery-dot {
                    position: absolute;
                    border-radius: 50%;
                    background: #53ae7d;
                    z-index: 1;
                }

                .gallery-dot-one {
                    width: 14px;
                    height: 14px;
                    top: 80px;
                    left: 65px;
                }

                .gallery-dot-two {
                    width: 9px;
                    height: 9px;
                    right: 70px;
                    bottom: 90px;
                    background: #053456;
                }

                /* =================================
                   CENTER BADGE
                ================================= */

                .gallery-badge {
                    position: absolute;
                    right: 25px;
                    bottom: 45px;
                    z-index: 8;

                    width: 105px;
                    height: 105px;

                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;

                    border-radius: 50%;
                    background: #53ae7d;
                    color: #ffffff;

                    box-shadow: 0 15px 35px rgba(5, 52, 86, 0.2);

                    transition:
                        transform 0.4s ease,
                        box-shadow 0.4s ease;
                }

                .creative-react-gallery:hover .gallery-badge {
                    transform: scale(1.08) rotate(-5deg);
                    box-shadow: 0 20px 45px rgba(5, 52, 86, 0.25);
                }

                .gallery-badge span {
                    font-size: 12px;
                    line-height: 1;
                }

                .gallery-badge strong {
                    margin-top: 3px;
                    font-size: 21px;
                    line-height: 1;
                }

                .gallery-badge small {
                    margin-top: 5px;
                    font-size: 9px;
                }

                /* =================================
                   TABLET
                ================================= */

                @media (max-width: 1199px) {
                    .creative-react-gallery {
                        max-width: 560px;
                        height: 500px;
                        margin-top: 40px;
                    }

                    .gallery-image-main {
                        width: 320px;
                        height: 400px;
                    }

                    .gallery-image-top {
                        width: 190px;
                        height: 190px;
                    }

                    .gallery-image-bottom {
                        width: 205px;
                        height: 180px;
                    }

                    .gallery-ring {
                        width: 390px;
                        height: 390px;
                    }
                }

                /* =================================
                   MOBILE
                ================================= */

                @media (max-width: 767px) {
                    .creative-react-section {
                        padding: 60px 0;
                    }

                    .creative-react-gallery {
                        height: 460px;
                        max-width: 500px;
                        margin-top: 30px;
                    }

                    .gallery-image-main {
                        width: 290px;
                        height: 370px;
                    }

                    .gallery-image-top {
                        width: 165px;
                        height: 165px;
                        right: 5px;
                    }

                    .gallery-image-bottom {
                        width: 180px;
                        height: 155px;
                        left: 5px;
                    }

                    .gallery-ring {
                        width: 350px;
                        height: 350px;
                    }

                    .gallery-badge {
                        width: 85px;
                        height: 85px;
                        right: 10px;
                        bottom: 40px;
                    }

                    .gallery-badge strong {
                        font-size: 17px;
                    }

                    .gallery-dot-one {
                        left: 30px;
                    }
                }

                /* =================================
                   SMALL MOBILE
                ================================= */

                @media (max-width: 480px) {
                    .creative-react-gallery {
                        height: 390px;
                    }

                    .gallery-image-main {
                        width: 235px;
                        height: 310px;
                        top: 35px;
                        border-width: 5px;
                        border-radius: 25px;
                    }

                    .gallery-image-top {
                        width: 135px;
                        height: 135px;
                        border-width: 5px;
                        border-radius: 22px;
                    }

                    .gallery-image-bottom {
                        width: 150px;
                        height: 130px;
                        border-width: 5px;
                        border-radius: 22px;
                    }

                    .gallery-ring {
                        width: 285px;
                        height: 285px;
                        top: 50px;
                    }

                    .gallery-badge {
                        width: 72px;
                        height: 72px;
                        right: 5px;
                        bottom: 25px;
                    }

                    .gallery-badge span {
                        font-size: 9px;
                    }

                    .gallery-badge strong {
                        font-size: 14px;
                    }

                    .gallery-badge small {
                        font-size: 7px;
                    }

                    .gallery-image-label,
                    .gallery-main-overlay {
                        padding: 5px 9px;
                        font-size: 9px;
                    }
                }
            `}</style>
        </section>
    );
};

export default CreativeReactSection;