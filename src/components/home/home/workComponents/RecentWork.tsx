"use client";



import { useEffect, useState } from "react";
import CardSwap, { Card } from "./CardSwap";

import Image1 from "@/assets/img/sample/gallery/img- (1).jpg";
import Image2 from "@/assets/img/sample/gallery/img- (2).jpg";
import Image3 from "@/assets/img/sample/gallery/img- (3).jpg";

import Link from "next/link";


export default function RecentProject() {

    const [activeIndex, setActiveIndex] = useState(0);

    /*
     * Responsive CardSwap width.
     *
     * Desktop:
     * 880px
     *
     * Below 1390px:
     * Reduce the card width so the right side
     * doesn't get clipped.
     */
    const [cardWidth, setCardWidth] = useState(880);


    useEffect(() => {

        const updateCardWidth = () => {

            const width = window.innerWidth;

            if (width < 576) {

                setCardWidth(330);

            } else if (width < 768) {

                setCardWidth(430);

            } else if (width < 992) {

                setCardWidth(560);

            } else if (width < 1200) {

                setCardWidth(650);

            } else if (width < 1390) {

                setCardWidth(720);

            } else {

                setCardWidth(880);

            }

        };


        updateCardWidth();


        window.addEventListener(
            "resize",
            updateCardWidth
        );


        return () => {

            window.removeEventListener(
                "resize",
                updateCardWidth
            );

        };

    }, []);


    /* =====================================================
       PROJECT DATA
    ===================================================== */

    const cardObj = [

        {
            title: "Sovereign",

            subTitle: "Tour Booking Platform",

            category: "Web Development",

            image: Image1,

            description:
                "From sophisticated website design and development that seamlessly combine aesthetics with performance to distinctive logos and branding solutions that embody each brand’s identity, every project reflects our commitment to quality, creativity, and delivering effective digital solutions that help businesses grow.",

            location: "Chennai - India",

            webDate: "Jan-2026",

            icons: [
                "Html",
                "Css",
                "Boostrap",
                "Php",
                "React js",
                "Next Js",
                "Node JS",
            ],

            links:
                "https://yulanto.com/latest-works",
        },


        {
            title: "Safety Merchant",

            subTitle: "Brand Identity",

            category: "UI/UX Design",

            topBarLabel: "Reliable",

            image: Image2,

            description:
                "From sophisticated website design and development that seamlessly combine aesthetics with performance to distinctive logos and branding solutions that embody each brand’s identity, every project reflects our commitment to quality, creativity, and delivering effective digital solutions that help businesses grow.",


            location: "Chennai - India",

            webDate: "Jan-2026",

            icons: [
                "Html",
                "Css",
                "Boostrap",
                "Php",
                "React js",
                "Next Js",
                "Node JS",
            ],

            links:
                "https://yulanto.com/latest-works",
        },


        {
            title: "Terra Pluse ",

            subTitle: "Mobile Experience",

            category: "App Development",

            topBarLabel: "Scalable",

            image: Image3,

            description:
                "From sophisticated website design and development that seamlessly combine aesthetics with performance to distinctive logos and branding solutions that embody each brand’s identity, every project reflects our commitment to quality, creativity, and delivering effective digital solutions that help businesses grow.",


            location: "Chennai - India",

            webDate: "Jan - 2026",

            icons: [
                "Html",
                "Css",
                "Boostrap",
                "Php",
                "React js",
                "Next Js",
                "Node JS",
            ],

            links:
                "https://yulanto.com/latest-works",
        },


        {
            title: "Johoreventrental",

            subTitle: "Mobile Experience",

            category: "App Development",

            topBarLabel: "Scalable",

            image: Image3,

            description:
                "End-to-end mobile application architecture built for seamless performance.",

            location: "Chennai - India",

            webDate: "Jan - 2026",

            icons: [
                "Html",
                "Css",
                "Boostrap",
                "Php",
                "React js",
                "Next Js",
                "Node JS",
            ],

            links:
                "https://yulanto.com/latest-works",
        },


        {
            title: "Freight Digital ",

            subTitle: "Mobile Experience",

            category: "App Development",

            topBarLabel: "Scalable",

            image: Image3,

             description:
                "From sophisticated website design and development that seamlessly combine aesthetics with performance to distinctive logos and branding solutions that embody each brand’s identity, every project reflects our commitment to quality, creativity, and delivering effective digital solutions that help businesses grow.",


            location: "Chennai - India",

            webDate: "Jan - 2026",

            icons: [
                "Html",
                "Css",
                "Boostrap",
                "Php",
                "React js",
                "Next Js",
                "Node JS",
            ],

            links:
                "https://yulanto.com/latest-works",
        },


        {
            title: "LDFKORMESIC",

            subTitle: "Mobile Experience",

            category: "App Development",

            topBarLabel: "Scalable",

            image: Image3,

             description:
                "From sophisticated website design and development that seamlessly combine aesthetics with performance to distinctive logos and branding solutions that embody each brand’s identity, every project reflects our commitment to quality, creativity, and delivering effective digital solutions that help businesses grow.",


            location: "Chennai - India",

            webDate: "Jan - 2026",

            icons: [
                "Html",
                "Css",
                "Boostrap",
                "Php",
                "React js",
                "Next Js",
                "Node JS",
            ],

            links:
                "https://yulanto.com/latest-works",
        },

    ];


    const activeCard =
        cardObj[activeIndex] || cardObj[0];


    return (

        <section
            className="
                recent-project-section
                py-5
                position-relative
            "
        >

            <style>{`

                @keyframes fadeInText {

                    from {
                        opacity: 0;
                        transform: translateY(6px);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }

                }


                .animate-fade-in {

                    animation:
                        fadeInText
                        0.35s
                        ease-out
                        forwards;

                }


                /*
                 * IMPORTANT:
                 *
                 * Don't allow the project card
                 * to be clipped horizontally.
                 */

                .recent-project-card-wrapper {

                    overflow: visible !important;

                }


                /*
                 * Card top bar
                 */

                .recent-project-card-wrapper
                .card-top-bar {

                    width: 100%;

                    padding:
                        18px 24px;

                    box-sizing:
                        border-box;

                }


                /*
                 * Date should always remain
                 * inside the card.
                 */

                .recent-project-card-wrapper
                .card-top-bar > span {

                    white-space: nowrap;

                    flex-shrink: 0;

                }


                /*
                 * Keep title from pushing
                 * the date outside.
                 */

                .recent-project-card-wrapper
                .card-top-bars {

                    min-width: 0;

                    overflow: hidden;

                }


                .recent-project-card-wrapper
                .top-bar-title {

                    display: block;

                    white-space: nowrap;

                    overflow: hidden;

                    text-overflow: ellipsis;

                    max-width: 100%;

                }


                /*
                 * Below 1390px
                 *
                 * Move the whole CardSwap
                 * slightly toward the left.
                 */

                @media (max-width: 1389px) {

                    .recent-project-card-wrapper
                    > div {

                        right: auto !important;

                        left: 50% !important;

                        transform:
                            translateX(-50%)
                            translateY(20%) !important;

                    }

                }


                /*
                 * Tablet
                 */

                @media (max-width: 991px) {

                    .recent-project-card-wrapper {

                        height: 520px !important;

                    }

                }


                /*
                 * Mobile
                 */

                @media (max-width: 767px) {

                    .recent-project-card-wrapper {

                        height: 430px !important;

                    }

                }

            `}</style>


            <div className="container">

                {/* =================================================
                   HEADER
                ================================================= */}

                <div className="row mb-5">

                    <div className="col-lg-4">

                        <span className="tp-section-subtitle text-black blink-ball">

                            Recent Work

                        </span>

                    </div>


                    <div className="col-lg-7 col-md-10">

                        <h2 className="display-5 text-tenor fw-bold mb-3 text-dark">

                            Where Creativity Meets Functionality

                        </h2>


                        <p className="text-muted text-figtree leading-relaxed fs-5">

                            Explore our latest work, where creativity,
                            innovation, and functionality come together
                            to create exceptional digital experiences.
                            As a professional web design and website
                            development company, we create modern,
                            responsive, and user-friendly websites that
                            help businesses strengthen their online presence.

                        </p>

                    </div>

                </div>


                {/* =================================================
                   PROJECT CONTENT
                ================================================= */}

                <div className="row align-items-center g-4">


                    {/* =================================================
                       LEFT DETAILS
                    ================================================= */}

                    <div className="col-lg-4 col-md-5">

                        <div
                            key={activeIndex}
                            className="pe-lg-3 animate-fade-in"
                        >

                            <h3 className="h3 fw-bold mb-1 text-tenor text-dark">

                                {activeCard.title}

                            </h3>


                            <h5 className="h6 text-muted text-figtree fw-semibold mb-3">

                                {activeCard.subTitle}

                            </h5>


                            <p className="text-secondary mb-4 text-figtree text-left">

                                {activeCard.description}

                            </p>


                            <div
                                className="d-flex flex-wrap mb-3"
                                aria-hidden
                            >

                                {activeCard.icons.map(
                                    (item, idx) => (

                                        <span
                                            key={idx}
                                            className="
                                                badge
                                                bg-light
                                                text-figtree
                                                border
                                                text-dark
                                                me-2
                                                mb-2
                                                px-2
                                                py-1
                                            "
                                            style={{
                                                fontSize: 12,
                                            }}
                                        >

                                            {item}

                                        </span>

                                    )
                                )}

                            </div>


                            <Link
                                href={
                                    activeCard.links ??
                                    "#"
                                }
                                className="fd-btn"
                            >

                                <span className="fd-btn-text text-tenor">

                                    Visit Website

                                </span>


                                <i className="fa-solid fa-arrow-right fd-btn-icon" />

                            </Link>

                        </div>

                    </div>


                    {/* =================================================
                       RIGHT CARD SWAP
                    ================================================= */}

                    <div className="col-lg-8 col-md-7">

                        <div
                            className="
                                recent-project-card-wrapper
                                w-100
                                position-relative
                                d-flex
                                justify-content-center
                                align-items-center
                            "
                            style={{
                                height: "600px",
                            }}
                        >

                            <CardSwap

                                /*
                                 * Responsive width.
                                 */
                                width={cardWidth}

                                height={450}

                                /*
                                 * IMPORTANT:
                                 *
                                 * Smaller distance means
                                 * cards 6, 7, 8 remain
                                 * visually inside the stack.
                                 */
                                cardDistance={24}

                                verticalDistance={30}

                                delay={50000}

                                pauseOnHover={false}

                                onSwap={(
                                    index: number
                                ) => {

                                    setActiveIndex(
                                        index
                                    );

                                }}
                            >

                                {cardObj.map(
                                    (item, index) => (

                                        <Card
                                            key={index}

                                            style={{

                                                backgroundImage:
                                                    `url("${item.image.src}")`,

                                                backgroundSize:
                                                    "cover",

                                                backgroundPosition:
                                                    "center",

                                                borderRadius:
                                                    "12px",

                                            }}
                                        >

                                            {/* =================================
                                               TOP BAR
                                            ================================= */}

                                            <div className="
                                                d-flex
                                                justify-content-between
                                                align-items-center
                                                card-top-bar
                                            ">

                                                <div className="card-top-bars">

                                                    <span className="top-bar-dot" />


                                                    <span className="
                                                        top-bar-title
                                                        text-tenor
                                                    ">

                                                        {item.title}

                                                    </span>

                                                </div>


                                                <span className="
                                                    text-tenor
                                                    text-white
                                                ">

                                                    {item.webDate}

                                                </span>

                                            </div>


                                            {/* =================================
                                               BOTTOM CONTENT
                                            ================================= */}

                                            <div className="card-swap-content">

                                                <h3 className="text-tenor">

                                                    {item.title}

                                                </h3>


                                                <p className="
                                                    text-figtree
                                                    fs-6
                                                    d-flex
                                                    justify-content-start
                                                    align-items-center
                                                    gap-2
                                                ">

                                                    <i className="
                                                        fa-solid
                                                        fa-location-dot
                                                    " />

                                                    {item.location}

                                                </p>

                                            </div>

                                        </Card>

                                    )
                                )}

                            </CardSwap>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}