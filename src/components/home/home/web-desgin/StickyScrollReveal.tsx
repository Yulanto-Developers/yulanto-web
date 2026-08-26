"use client";

import React, { useRef, useState } from "react";
import {
    motion,
    useMotionValueEvent,
    useScroll,
} from "motion/react";

import "./sticky-scroll-reveal.css";

export interface StickyScrollItem {
    title: string;
    description: React.ReactNode;
    image: string;
}

interface StickyScrollRevealProps {
    content: StickyScrollItem[];
    className?: string;
}

const StickyScrollReveal = ({
    content,
    className = "",
}: StickyScrollRevealProps) => {

    const [activeCard, setActiveCard] = useState(0);

    /*
     * IMPORTANT:
     * This is the target section.
     *
     * We are NOT using:
     * container: ref
     *
     * because we want the normal PAGE scroll.
     */
    const ref = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: ref,

        /*
         * Start animation when this section
         * enters the viewport.
         *
         * Finish when the section reaches
         * the top of the viewport.
         */
        offset: [
            "start 80%",
            "end 20%",
        ],
    });


    /*
     * Change active image based on
     * the page scroll position.
     */
    useMotionValueEvent(
        scrollYProgress,
        "change",
        (latest) => {

            if (!content.length) {
                return;
            }

            const cardLength = content.length;

            /*
             * Divide the section into equal
             * scroll areas.
             */
            const breakpoints = content.map(
                (_, index) => {
                    if (cardLength === 1) {
                        return 0;
                    }

                    return index / (cardLength - 1);
                }
            );


            /*
             * Find the closest item.
             */
            const closestBreakpointIndex =
                breakpoints.reduce(
                    (closestIndex, breakpoint, index) => {

                        const currentDistance =
                            Math.abs(
                                latest - breakpoint
                            );

                        const closestDistance =
                            Math.abs(
                                latest -
                                breakpoints[closestIndex]
                            );

                        if (
                            currentDistance <
                            closestDistance
                        ) {
                            return index;
                        }

                        return closestIndex;
                    },
                    0
                );


            setActiveCard(
                closestBreakpointIndex
            );
        }
    );


    if (!content.length) {
        return null;
    }


    const activeItem =
        content[activeCard] || content[0];


    return (
        <div
            ref={ref}
            className={`startup-sticky-scroll ${className}`}
        >

            {/* =====================================
                LEFT CONTENT
            ====================================== */}

            <div className="startup-sticky-scroll-content">

                {content.map(
                    (item, index) => {

                        const isActive =
                            activeCard === index;

                        return (
                            <div
                                key={`${item.title}-${index}`}
                                className="startup-sticky-scroll-item"
                            >

                                <motion.div
                                    // animate={{
                                    //     opacity:
                                    //         isActive
                                    //             ? 1
                                    //             : 1,
                                    // }}

                                    transition={{
                                        duration: 0.3,
                                    }}
                                >

                                    {/* Number */}

                                    <div className="startup-process-number">
                                        {String(
                                            index + 1
                                        ).padStart(2, "0")}
                                    </div>


                                    {/* Title */}

                                    <h3 className="startup-process-title text-tenor">
                                        {item.title}
                                    </h3>


                                    {/* Description */}

                                    <p className="startup-process-description">
                                        {item.description}
                                    </p>

                                </motion.div>

                            </div>
                        )
                    }
                )}

            </div>


            {/* =====================================
                RIGHT STICKY IMAGE
            ====================================== */}

            <div className="startup-sticky-scroll-image-wrapper">

                <motion.div
                    key={activeItem.image}

                    initial={{
                        opacity: 0,
                        scale: 0.97,
                    }}

                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}

                    transition={{
                        duration: 0.35,
                        ease: "easeOut",
                    }}

                    className="startup-sticky-scroll-image"
                >

                    <img
                        src={activeItem.image}
                        alt={activeItem.title}
                    />


                    {/* Image number */}

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