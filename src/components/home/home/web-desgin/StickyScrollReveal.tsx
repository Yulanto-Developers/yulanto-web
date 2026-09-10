"use client";

import React, {
    useEffect,
    useRef,
    useState,
} from "react";

import {
    motion,
    useMotionValueEvent,
    useScroll,
} from "motion/react";

import "./sticky-scroll-reveal.css";


/* =========================================
   TYPES
========================================= */

export interface StickyScrollItem {
    title: string;
    description: React.ReactNode;
    image: string;
}


interface StickyScrollRevealProps {
    content: StickyScrollItem[];
    className?: string;
}


/* =========================================
   COMPONENT
========================================= */

const StickyScrollReveal = ({
    content,
    className = "",
}: StickyScrollRevealProps) => {

    /* =====================================
       ACTIVE CARD
    ===================================== */

    const [activeCard, setActiveCard] = useState(0);


    /* =====================================
       SECTION REF
    ===================================== */

    const ref = useRef<HTMLDivElement | null>(null);


    /* =====================================
       PRELOAD ALL IMAGES
       
       This prevents the image area from
       becoming blank when changing cards.
    ===================================== */

    useEffect(() => {

        if (!content.length) {
            return;
        }

        content.forEach((item) => {

            if (!item.image) {
                return;
            }

            const image = new Image();

            image.src = item.image;

        });

    }, [content]);


    /* =====================================
       SCROLL PROGRESS
       
       Uses normal PAGE scrolling.
    ===================================== */

    const {
        scrollYProgress,
    } = useScroll({

        target: ref,

        offset: [
            "start start",
            "end end",
        ],

    });


    /* =====================================
       UPDATE ACTIVE CARD
    ===================================== */

    useMotionValueEvent(
        scrollYProgress,
        "change",
        (latest) => {

            if (!content.length) {
                return;
            }


            const cardLength = content.length;


            /* ---------------------------------
               Single item
            --------------------------------- */

            if (cardLength === 1) {

                if (activeCard !== 0) {
                    setActiveCard(0);
                }

                return;
            }


            /* ---------------------------------
               Calculate breakpoints
            --------------------------------- */

            const breakpoints = content.map(
                (_, index) => {

                    return index / (cardLength - 1);

                }
            );


            /* ---------------------------------
               Find closest breakpoint
            --------------------------------- */

            let closestIndex = 0;

            let closestDistance =
                Math.abs(
                    latest - breakpoints[0]
                );


            for (
                let index = 1;
                index < breakpoints.length;
                index++
            ) {

                const distance =
                    Math.abs(
                        latest -
                        breakpoints[index]
                    );


                if (
                    distance <
                    closestDistance
                ) {

                    closestDistance =
                        distance;

                    closestIndex =
                        index;

                }

            }


            /* ---------------------------------
               Only update state when required
            --------------------------------- */

            if (
                closestIndex !== activeCard
            ) {

                setActiveCard(
                    closestIndex
                );

            }

        }
    );


    /* =====================================
       EMPTY CONTENT
    ===================================== */

    if (!content.length) {
        return null;
    }


    /* =====================================
       ACTIVE ITEM
    ===================================== */

    const activeItem =
        content[activeCard] ||
        content[0];


    /* =====================================
       RENDER
    ===================================== */

    return (

        <div
            ref={ref}
            className={`startup-sticky-scroll ${className}`}
        >


            {/* =================================
                LEFT CONTENT
            ================================= */}

            <div className="startup-sticky-scroll-content">

                {content.map(
                    (item, index) => {

                        return (

                            <div
                                key={`${item.title}-${index}`}
                                className="startup-sticky-scroll-item"
                            >

                                <div>

                                    {/* =========================
                                        NUMBER
                                    ========================== */}

                                    <div className="startup-process-number">

                                        {String(
                                            index + 1
                                        ).padStart(2, "0")}

                                    </div>


                                    {/* =========================
                                        TITLE
                                    ========================== */}

                                    <h3 className="startup-process-title text-tenor">

                                        {item.title}

                                    </h3>


                                    {/* =========================
                                        DESCRIPTION
                                    ========================== */}

                                    <p className="startup-process-description">

                                        {item.description}

                                    </p>

                                </div>

                            </div>

                        );

                    }
                )}

            </div>


            {/* =================================
                RIGHT STICKY IMAGE
            ================================= */}

            <div className="startup-sticky-scroll-image-wrapper">

                <motion.div
                    className="startup-sticky-scroll-image"

                    initial={{
                        opacity: 1,
                        scale: 1,
                    }}

                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}

                    transition={{
                        duration: 0.3,
                        ease: "easeOut",
                    }}
                >

                    {/* =========================
                        IMAGE
                    ========================== */}

                    <img
                        src={activeItem.image}
                        alt={activeItem.title}
                        draggable={false}
                    />


                    {/* =========================
                        IMAGE NUMBER
                    ========================== */}

                    <div className="startup-sticky-image-overlay">

                        <span>

                            {String(
                                activeCard + 1
                            ).padStart(2, "0")}

                        </span>

                    </div>

                </motion.div>

            </div>

        </div>

    );
};


export default StickyScrollReveal;