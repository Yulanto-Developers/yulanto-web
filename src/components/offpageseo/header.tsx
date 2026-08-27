"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export interface CoverflowSlide {
    src: string;
    alt: string;
}

export interface CoverflowCarouselProps {
    slides?: CoverflowSlide[];
    rotate?: number;
    depth?: number;
    perspective?: number;
    falloff?: number;
    fade?: number;
    cardWidth?: string;
    gap?: number;
    loop?: boolean;
    autoScrollSpeed?: number; // Speed in milliseconds
    label?: string;
}

const DEFAULT_SLIDES: CoverflowSlide[] = [
    { src: "assets/img/offpage/top-1.jpg", alt: "SEO Strategy 1" },
    { src: "assets/img/offpage/top-2.jpg", alt: "SEO Strategy 2" },
    { src: "assets/img/offpage/top-3.jpg", alt: "SEO Strategy 3" },
    { src: "assets/img/offpage/top-4.jpg", alt: "SEO Strategy 4" },
    { src: "assets/img/offpage/top-5.jpg", alt: "SEO Strategy 5" },
];

const useIsoLayoutEffect =
    typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export default function SeoCoverflowSection({
    slides = DEFAULT_SLIDES,
    rotate = 44,
    depth = 0.6,
    perspective = 3,
    falloff = 0.56,
    fade = 0.1,
    cardWidth = "clamp(180px, 25vw, 280px)",
    gap = 0.05,
    loop = true,
    autoScrollSpeed = 1000, // Slides automatically every 2.5s
    label = "Cover carousel",
}: CoverflowCarouselProps) {
    const count = slides.length;

    const frameRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const posRef = useRef(0);
    const targetRef = useRef(0);
    const widthRef = useRef(0);
    const rafRef = useRef<number | null>(null);
    const dragRef = useRef<{ id: number; x: number; pos: number; v: number; t: number } | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
    }, []);

    const indexAt = useCallback(
        (pos: number) => (count > 0 ? ((Math.round(pos) % count) + count) % count : 0),
        [count]
    );

    const paint = useCallback(() => {
        const width = widthRef.current;
        if (!width || count === 0) return;
        const pitch = width * (1 + gap);
        const pos = posRef.current;

        cardRefs.current.forEach((card, index) => {
            if (!card) return;

            let offset = index - pos;
            if (loop) {
                offset = ((offset % count) + count) % count;
                if (offset > count / 2) offset -= count;
            }

            const distance = Math.abs(offset);
            const ramp = Math.pow(distance, falloff);
            const tilt = Math.min(rotate * ramp, 82) * Math.sign(offset);

            card.style.transform =
                `translateX(calc(-50% + ${offset * pitch}px)) ` +
                `translateZ(${-depth * width * ramp}px) rotateY(${-tilt}deg)`;

            const edge = loop ? Math.min(1, Math.max(0, count / 2 - distance)) : 1;
            card.style.opacity = String(Math.max(0, 1 - fade * distance) * edge);
            card.style.zIndex = String(100 - Math.round(distance));
        });
    }, [count, depth, fade, falloff, gap, loop, rotate]);

    const settle = useCallback(
        (target: number) => {
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
            targetRef.current = target;

            const step = () => {
                const remaining = target - posRef.current;
                if (Math.abs(remaining) < 0.0004) {
                    posRef.current = target;
                    paint();
                    rafRef.current = null;
                    return;
                }
                posRef.current += remaining * 0.16;
                paint();
                rafRef.current = requestAnimationFrame(step);
            };
            rafRef.current = requestAnimationFrame(step);
        },
        [paint]
    );

    const clamp = useCallback(
        (pos: number) => (loop ? pos : Math.max(0, Math.min(count - 1, pos))),
        [count, loop]
    );

    const nudge = useCallback(
        (by: number) => settle(clamp(Math.round(targetRef.current) + by)),
        [clamp, settle]
    );

    // Auto-scroll mechanism
    useEffect(() => {
        if (isHovered || count === 0) return;

        const interval = setInterval(() => {
            nudge(1);
        }, autoScrollSpeed);

        return () => clearInterval(interval);
    }, [isHovered, nudge, autoScrollSpeed, count]);

    const measure = useCallback(() => {
        const card = cardRefs.current[0];
        if (card) {
            widthRef.current = card.offsetWidth;
            paint();
        }
    }, [paint]);

    useIsoLayoutEffect(() => {
        const frame = frameRef.current;
        if (!frame) return;

        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(frame);
        return () => observer.disconnect();
    }, [measure]);

    const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
        if (rafRef.current !== null) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
        }
        event.currentTarget.setPointerCapture(event.pointerId);
        targetRef.current = posRef.current;
        dragRef.current = { id: event.pointerId, x: event.clientX, pos: posRef.current, v: 0, t: performance.now() };
    };

    const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
        const drag = dragRef.current;
        if (!drag || drag.id !== event.pointerId) return;

        const pitch = widthRef.current * (1 + gap);
        if (!pitch) return;

        const now = performance.now();
        const previous = posRef.current;
        posRef.current = clamp(drag.pos - (event.clientX - drag.x) / pitch);
        drag.v = ((posRef.current - previous) / Math.max(now - drag.t, 1)) * 1000;
        drag.t = now;

        paint();
    };

    const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
        const drag = dragRef.current;
        if (!drag || drag.id !== event.pointerId) return;
        dragRef.current = null;
        const carried = Math.max(-2, Math.min(2, drag.v * 0.18));
        settle(clamp(Math.round(posRef.current + carried)));
    };

    return (
        <section className="px-about-6-area pt-50 pb-80 pb-lg-110">
            <div className="container container-1550">

                {/* Title Section */}
                <div className="row align-items-center mb-5" data-aos="fade-up">
                    <div className="col-xl-3">
                        <span className="tp-section-subtitle text-black blink-ball">
                            Off-Page SEO in Chennai
                        </span>
                    </div>
                    <div className="col-xl-9">
                        <div className="px-project-title-box">
                            <h4 className="px-about-title mb-20">
                                <span className="text-blue-about">Build Authority, Rankings & </span>
                                Online Visibility
                            </h4>
                            <p className="text-figtree text-black mt-2">
                                Off-Page SEO is an essential part of a successful search engine optimization strategy that focuses on improving your website’s authority, credibility, visibility, and reputation outside your own website. While on-page SEO optimizes your website content and technical elements, off-page SEO helps search engines understand how trustworthy and relevant your business is within your industry.

                            </p>
                        </div>
                    </div>
                </div>

                {/* Auto-Scrolling Coverflow Carousel */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{ width: "100%", position: "relative", ["--cf-card" as string]: cardWidth }}
                    role="region"
                    aria-label={label}
                >
                    <div style={{ position: "relative" }}>
                        <div
                            ref={frameRef}
                            tabIndex={0}
                            onPointerDown={onPointerDown}
                            onPointerMove={onPointerMove}
                            onPointerUp={endDrag}
                            onPointerCancel={endDrag}
                            style={{
                                cursor: "grab",
                                overflow: "hidden",
                                paddingTop: "3rem",
                                paddingBottom: "3rem",
                                outline: "none",
                                perspective: `calc(var(--cf-card) * ${perspective})`,
                                touchAction: "pan-y",
                            }}
                        >
                            <div style={{ position: "relative", userSelect: "none", height: "var(--cf-card)", transformStyle: "preserve-3d" }}>
                                {slides.map((slide, index) => (
                                    <div
                                        key={index}
                                        ref={(node) => { cardRefs.current[index] = node; }}
                                        style={{
                                            position: "absolute",
                                            left: "50%",
                                            top: 0,
                                            width: "var(--cf-card)",
                                            height: "var(--cf-card)",
                                            borderRadius: "1rem",
                                            overflow: "hidden",
                                            backgroundColor: "#e5e7eb",
                                            boxShadow: "0 10px 25px -5px rgba(0,0,0,0.2)",
                                            willChange: "transform",
                                        }}
                                    >
                                        <img
                                            src={slide.src}
                                            alt={slide.alt}
                                            onLoad={measure}
                                            draggable={false}
                                            style={{ height: "100%", width: "100%", objectFit: "cover", display: "block" }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
  <p  className="text-figtree text-black mt-2 font-paragraph-cls">As a professional SEO company in Chennai, we provide result-oriented off-page SEO strategies designed to improve search rankings, strengthen your online presence, attract quality traffic, and generate more business opportunities. Our Chennai SEO services include strategic link building, business citations, local SEO, content promotion, brand mentions, social signals, and other ethical off-page optimization techniques.
              Whether you are a startup, local business, e-commerce company, or established organization, our team develops customized off-page SEO campaigns based on your business goals, competition, target audience, and industry.</p>
            </div>
        </section>
    );
}