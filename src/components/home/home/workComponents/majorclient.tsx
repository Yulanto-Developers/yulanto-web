"use client";

import AnimatedCounterTree from "@/components/shared/MetricsCounter/AnimatedCounterThree";
import { SmartLink } from "@/components/common";
import { TextArrowIcon } from "@/svg";
import Image from "next/image";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { gsap } from "gsap";

import "./majorclient.css";

gsap.registerPlugin(
    ScrollTrigger,
    ScrollSmoother
);


/* =========================================================
   LEFT NAVIGATION DATA
========================================================= */

export const majorCItems = [
    "Naturographer",
    "Core",
    "Grayt",
    "Freight Digital",
];


/* =========================================================
   SERVICE DATA
========================================================= */

export const innerClient = [
    {
        id: 1,

        title: "Naturographer",

        descriptions: [
            "Strong branding sets your startup apart, signaling quality and professionalism. It builds trust with your audience, making you stand out in a crowded market.",
        ],

        categories: [
            "Brand Naming",
            "Creative Direction",
            "Brand Strategy",
            "Graphic charter",
            "Logo Design",
        ],

        images: [
            "/assets/img/service/inner-service/service-1.jpg",
            "/assets/img/service/inner-service/service-2.jpg",
        ],
    },

    {
        id: 2,

        title: "Core",

        descriptions: [
            "A process of assumption & validation with a goal of taking into account all the necessary variables, which are always custom and are to be uncovered.",

            "Every business has digital potential, and we are here to help you leverage that potential.",
        ],

        categories: [
            "Wireframe",
            "UI design",
            "Prototyping",
            "Design system",
            "UI & UX audit",
            "Design System",
            "Interactive Experiences",
        ],

        images: [
            "/assets/img/service/inner-service/service-3.jpg",
            "/assets/img/service/inner-service/service-4.jpg",
        ],
    },

    {
        id: 3,

        title: "Grayt",

        descriptions: [
            "Marketing strategy is proudly responsible for the half of a campaign's success, another half relies solely on its implementation.",

            "We focus on creating visuals that communicate your value and engage your audience.",
        ],

        categories: [
            "Animated logos",
            "Product Illustrations",
            "Launch Videos",
            "Illustrations",
            "Visual Effects",
            "Illustration 3D",
        ],

        images: [
            "/assets/img/service/inner-service/service-5.jpg",
            "/assets/img/service/inner-service/service-6.jpg",
        ],
    },

    {
        id: 4,

        title: "Freight Digital",

        descriptions: [
            "Efficiency and scalability. The two factors which any decision gets filtered out with - programming language, framework, library, each line of code, and server side.",
        ],

        categories: [
            "Integration",
            "Front-end",
            "Back-end",
            "Webflow",
        ],

        images: [
            "/assets/img/service/inner-service/service-7.jpg",
            "/assets/img/service/inner-service/service-8.jpg",
        ],
    },
];


/* =========================================================
   TYPES
========================================================= */

interface InnerServiceItemProps {
    id: number;
    title: string;
    descriptions: string[];
    categories: string[];
    images: string[];
    isLastItem?: boolean;
}


/* =========================================================
   RIGHT SIDE SERVICE ITEM
========================================================= */

const MajorInnerItems = ({
    id,
    title,
    descriptions,
    categories,
    images,
    isLastItem = false,
}: InnerServiceItemProps) => {

    return (
        <div
            id={`major-service-${id}`}
            className={`major-inner-service-item ${!isLastItem
                ? "major-inner-service-spacing"
                : ""
                }`}
        >

            {/* =========================================
                NUMBER + CONTENT
            ========================================= */}

            <div className="major-inner-service-right">

                <div className="major-service-content-grid">

                    {/* NUMBER */}

                    <div className="major-inner-service-number">

                        <h2>
                            <AnimatedCounterTree
                                end={id}
                                duration={0.2}
                            />
                        </h2>

                    </div>


                    {/* CONTENT */}

                    <div className="major-inner-service-content">

                        <div className="major-inner-service-text text-tenor">

                            <span>
                                {title}
                            </span>


                            {descriptions.map(
                                (description, index) => (
                                    <p className="text-figtree"
                                        key={`description-${id}-${index}`}
                                    >
                                        {description}
                                    </p>
                                )
                            )}

                        </div>


                        {/* CATEGORIES */}

                        <div className="major-inner-service-category text-figtree">

                            {categories.map(
                                (category, index) => (

                                    <p
                                        key={`${category}-${index}`}
                                        className="major-inner-service-category-item d-flex justify-content-between align-items-center"
                                    >

                                        <span>
                                            {category}
                                        </span>

                                        <i>
                                            <TextArrowIcon />
                                        </i>

                                    </p>

                                )
                            )}

                        </div>

                    </div>

                </div>

            </div>


            {/* =========================================
                IMAGES
            ========================================= */}

            <div className="row gx-10 major-inner-service-images-row">

                <div className="major-inner-service-thumb-text">

                    <span className="text-tenor">
                        (Our Recent  Work in {title})
                    </span>

                </div>


                {images.map((image, index) => (

                    <div
                        key={`${image}-${index}`}
                        className="col-xl-6 col-lg-6"
                    >

                        <div className="major-inner-service-thumb">

                            <div className="major-inner-service-ripple-image">

                                <Image
                                    className="w-100 img-fluid"
                                    width={643}
                                    height={720}
                                    src={image}
                                    alt={`${title} ${index + 1}`}
                                />

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
};


/* =========================================================
   MAIN COMPONENT
========================================================= */

const MajorClientService = () => {

    useGSAP(() => {

        /* =========================================
           DESKTOP ONLY
        ========================================= */

        if (window.innerWidth <= 991) {
            return;
        }


        /* =========================================
           ELEMENTS
        ========================================= */

        const section =
            document.querySelector(
                ".major-client-service-area"
            );

        const leftColumn =
            document.querySelector(
                ".major-client-left-column"
            );

        const serviceItems =
            gsap.utils.toArray<HTMLElement>(
                ".major-inner-service-item"
            );

        const navItems =
            gsap.utils.toArray<HTMLElement>(
                ".major-client-service-nav li"
            );


        if (
            !section ||
            !leftColumn ||
            serviceItems.length === 0 ||
            navItems.length === 0
        ) {
            return;
        }


        /* =========================================
           ACTIVE LEFT MENU
        ========================================= */

        const setActiveService = (
            activeIndex: number
        ) => {

            navItems.forEach(
                (item, index) => {

                    item.classList.toggle(
                        "major-service-nav-active",
                        index === activeIndex
                    );

                }
            );

        };


        /* =========================================
           GSAP CONTEXT
        ========================================= */

        const ctx = gsap.context(() => {


            /* =========================================
               LEFT SIDE PIN

               IMPORTANT:
               This controls ONLY the left menu.

               It ends when the bottom of the
               service section reaches the bottom
               of the viewport.

               This prevents the left menu from
               staying over the footer.
            ========================================= */

            ScrollTrigger.create({

                trigger: section,

                start: "top top+=100",

                end: "bottom bottom",

                pin: leftColumn,

                pinSpacing: false,

                anticipatePin: 1,

                invalidateOnRefresh: true,

            });


            /* =========================================
               RIGHT CONTENT -> ACTIVE LEFT MENU

               This is separate from the pin.

               45% controls when the left item
               becomes active.
            ========================================= */

            serviceItems.forEach(
                (service, index) => {

                    ScrollTrigger.create({

                        trigger: service,

                        start: "top 45%",

                        end: "bottom 45%",


                        /* SCROLL DOWN */

                        onEnter: () => {

                            setActiveService(
                                index
                            );

                        },


                        /* SCROLL UP */

                        onEnterBack: () => {

                            setActiveService(
                                index
                            );

                        },

                    });

                }
            );


            /* =========================================
               FIRST ACTIVE ITEM
            ========================================= */

            setActiveService(0);


            /* =========================================
               REFRESH
            ========================================= */

            ScrollTrigger.refresh();

        });


        /* =========================================
           CLEANUP
        ========================================= */

        return () => {
            ctx.revert();
        };

    });


    /* =====================================================
       RENDER
    ===================================================== */

    return (

        <section
            id="major-client-services"
            className="major-client-service-area"
        >

            <div className="container container-1830">

                <div className="row major-client-service-row">


                    {/* =====================================
                        LEFT SIDE
                    ===================================== */}

                    <div className="col-lg-3 major-client-left-column">

                        <div className="major-client-left">

                            <span className="major-client-left-title text-tenor">
                                Services
                            </span>


                            <ul className="major-client-service-nav text-figtree">

                                {majorCItems.map(
                                    (item, index) => (

                                        <li
                                            key={item}
                                        >

                                            <a
                                                href={`#major-service-${index + 1
                                                    }`}

                                                onClick={(e) => {

                                                    e.preventDefault();


                                                    /* =====================
                                                       FIND TARGET
                                                    ===================== */

                                                    const target =
                                                        document.getElementById(
                                                            `major-service-${index + 1
                                                            }`
                                                        );


                                                    if (!target) {
                                                        return;
                                                    }


                                                    /* =====================
                                                       SCROLLSMOOTHER
                                                    ===================== */

                                                    const smoother =
                                                        ScrollSmoother.get();


                                                    if (smoother) {

                                                        smoother.scrollTo(
                                                            target,
                                                            true,
                                                            "top top+=100"
                                                        );

                                                    } else {

                                                        target.scrollIntoView({
                                                            behavior: "smooth",

                                                            block: "start",
                                                        });

                                                    }

                                                }}
                                            >

                                                <span className="nav-num">

                                                    {String(
                                                        index + 1
                                                    ).padStart(
                                                        2,
                                                        "0"
                                                    )}

                                                    .

                                                </span>


                                                <span className="nav-label">

                                                    {item}

                                                </span>

                                            </a>

                                        </li>

                                    )
                                )}

                            </ul>

                        </div>

                    </div>


                    {/* =====================================
                        RIGHT SIDE

                        IMPORTANT:
                        KEEP col-lg-7
                    ===================================== */}

                    <div className="col-lg-7 major-client-right-column">

                        {innerClient.map(
                            (
                                service,
                                index
                            ) => (

                                <MajorInnerItems

                                    key={service.id}

                                    id={service.id}

                                    title={
                                        service.title
                                    }

                                    descriptions={
                                        service.descriptions
                                    }

                                    categories={
                                        service.categories
                                    }

                                    images={
                                        service.images
                                    }

                                    isLastItem={
                                        index ===
                                        innerClient.length - 1
                                    }

                                />

                            )
                        )}

                    </div>

                </div>

            </div>

        </section>
    );
};


export default MajorClientService;