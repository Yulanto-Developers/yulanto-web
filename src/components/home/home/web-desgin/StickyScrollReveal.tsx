"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./sticky-scroll-reveal.css";

gsap.registerPlugin(ScrollTrigger);

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
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const imageWrapperRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);

    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const [activeCard, setActiveCard] = useState(0);

    /*
    ============================================
    PRELOAD ALL IMAGES
    ============================================
    */

    useEffect(() => {
        content.forEach((item) => {
            if (!item.image) return;

            const image = new window.Image();
            image.src = item.image;
        });
    }, [content]);

    /*
    ============================================
    SCROLLTRIGGER
    ============================================
    */

    useEffect(() => {
        if (!content.length) return;

        const section = sectionRef.current;
        const imageWrapper = imageWrapperRef.current;

        if (!section || !imageWrapper) return;

        let ctx: gsap.Context | null = null;

        const init = () => {
            ctx = gsap.context(() => {

                /*
                --------------------------------------------
                PIN IMAGE
                --------------------------------------------
                */

                ScrollTrigger.create({
                    trigger: section,
                    start: "top top+=100",
                    end: "bottom bottom",
                    pin: imageWrapper,
                    pinSpacing: false,
                    invalidateOnRefresh: true,
                });

                /*
                --------------------------------------------
                EACH CONTENT ITEM
                --------------------------------------------
                */

                itemRefs.current.forEach((item, index) => {

                    if (!item) return;

                    ScrollTrigger.create({
                        trigger: item,

                        start: "top center",
                        end: "bottom center",

                        onEnter: () => {
                            setActiveCard(index);
                        },

                        onEnterBack: () => {
                            setActiveCard(index);
                        },
                    });

                });

                /*
                --------------------------------------------
                REFRESH AFTER EVERYTHING IS READY
                --------------------------------------------
                */

                requestAnimationFrame(() => {
                    ScrollTrigger.refresh();
                });

            }, section);
        };

        /*
        Give ScrollSmoother/AOS one frame to finish layout.
        */

        const timer = window.setTimeout(init, 100);

        return () => {
            window.clearTimeout(timer);

            if (ctx) {
                ctx.revert();
            }
        };

    }, [content]);

    /*
    ============================================
    IMAGE ANIMATION
    ============================================
    */

    useEffect(() => {

        const image = imageRef.current;

        if (!image) return;

        gsap.killTweensOf(image);

        gsap.fromTo(
            image,
            {
                opacity: 0,
                scale: 1.05,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.45,
                ease: "power2.out",
            }
        );

    }, [activeCard]);

    /*
    ============================================
    SAFETY
    ============================================
    */

    if (!content.length) {
        return null;
    }

    return (
        <div
            ref={sectionRef}
            className={`startup-sticky-scroll ${className}`}
        >

            {/* =====================================
                LEFT CONTENT
            ===================================== */}

            <div className="startup-sticky-scroll-content">

                {content.map((item, index) => (

                    <div
                        key={`${index}-${item.title}`}

                        ref={(element) => {
                            itemRefs.current[index] = element;
                        }}

                        className={`
                            startup-sticky-scroll-item
                            ${
                                activeCard === index
                                    ? "is-active"
                                    : ""
                            }
                        `}
                    >

                        <div>

                            <div className="startup-process-number">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            <h3 className="startup-process-title text-tenor">
                                {item.title}
                            </h3>

                            <p className="startup-process-description">
                                {item.description}
                            </p>

                        </div>

                    </div>

                ))}

            </div>


            {/* =====================================
                RIGHT IMAGE
            ===================================== */}

            <div
                ref={imageWrapperRef}
                className="startup-sticky-scroll-image-wrapper"
            >

                <div className="startup-sticky-scroll-image">

                    <img
                        ref={imageRef}
                        key={activeCard}
                        src={content[activeCard].image}
                        alt={content[activeCard].title}
                        draggable={false}
                    />

                    <div className="startup-sticky-image-overlay">

                        {String(activeCard + 1).padStart(2, "0")}

                    </div>

                </div>

            </div>

        </div>
    );
};

export default StickyScrollReveal;