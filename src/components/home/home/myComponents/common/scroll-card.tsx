'use client';

import React, {
    forwardRef,
    useLayoutEffect,
    useRef,
} from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '@/assets/css/scroll-card.css';

gsap.registerPlugin(ScrollTrigger);

export interface ProcessCardData {
    title: string;
    description: string;
    link?: string;
    bgImage: string;
    rotation?: string;
}

interface ScrollCardProps {
    cardsData: ProcessCardData[];
    sectionTitle?: React.ReactNode;
}

const ScrollCard = forwardRef<HTMLElement, ScrollCardProps>(
    ({ cardsData, sectionTitle }, ref) => {

        const sectionRef = useRef<HTMLElement | null>(null);

        useLayoutEffect(() => {

            const section = sectionRef.current;

            if (!section) return;

            const ctx = gsap.context(() => {

                const cards = gsap.utils.toArray<HTMLElement>(
                    '.scroll-process-card'
                );

                const heading =
                    section.querySelector(
                        '.scroll-process-heading-inner'
                    );

                if (!cards.length) return;


                /* =====================================================
                   CARD STACK
                ===================================================== */

                cards.forEach((card, index) => {

                    gsap.set(card, {
                        zIndex: index + 1,
                    });

                });


                /* =====================================================
                   PIN LEFT CARDS
                ===================================================== */

                ScrollTrigger.create({
                    trigger: section,

                    start: 'top top',

                    end: 'bottom bottom',

                    pin: false,

                    scrub: false,

                    invalidateOnRefresh: true,
                });


                /* =====================================================
                   EACH CARD POSITION
                ===================================================== */

                cards.forEach((card, index) => {

                    const wrapper =
                        card.closest(
                            '.scroll-process-card-wrapper'
                        ) as HTMLElement | null;

                    if (!wrapper) return;


                    gsap.set(wrapper, {
                        position: 'relative',
                    });


                    /*
                     * Keep each card centered while its
                     * wrapper scrolls.
                     */
                    ScrollTrigger.create({

                        trigger: wrapper,

                        start: 'top top+=100',

                        end: 'bottom top+=100',

                        pin: card,

                        pinSpacing: false,

                        anticipatePin: 1,

                        invalidateOnRefresh: true,
                    });

                });


                /* =====================================================
                   RIGHT HEADING
                ===================================================== */

                if (heading) {

                    ScrollTrigger.create({

                        trigger: section,

                        start: 'top top',

                        end: 'bottom bottom',

                        pin: heading,

                        pinSpacing: false,

                        anticipatePin: 1,

                        invalidateOnRefresh: true,
                    });

                }


                /* =====================================================
                   REFRESH
                ===================================================== */

                ScrollTrigger.refresh();

            }, section);

            return () => {
                ctx.revert();
            };

        }, [cardsData]);


        return (
            <section
                ref={(node) => {
                    sectionRef.current = node;

                    if (typeof ref === 'function') {
                        ref(node);
                    } else if (ref) {
                        ref.current = node;
                    }
                }}
                className="scroll-process-section"
            >

                <div className="scroll-process-container">

                    {/* LEFT SIDE */}

                    <div className="scroll-process-cards">

                        {cardsData.map((card, index) => (

                            <div
                                className="scroll-process-card-wrapper"
                                key={index}
                            >

                                <article
                                    className={`scroll-process-card ${
                                        card.rotation || ''
                                    }`}
                                    style={{
                                        backgroundImage:
                                            `url("${card.bgImage}")`,
                                    }}
                                >

                                    <div className="scroll-process-overlay" />

                                    <div className="scroll-process-card-content">

                                        <span className="scroll-process-step">
                                            Step{' '}
                                            {String(index + 1).padStart(
                                                2,
                                                '0'
                                            )}
                                        </span>

                                        <h3 className="text-tenor">
                                            {card.title}
                                        </h3>

                                        <p>
                                            {card.description}
                                        </p>

                                        {card.link && (
                                            <a
                                                href={card.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="scroll-process-link"
                                            >
                                                Learn More
                                                <span> →</span>
                                            </a>
                                        )}

                                    </div>

                                </article>

                            </div>

                        ))}

                    </div>


                    {/* RIGHT SIDE */}

                    <div className="scroll-process-heading">

                        <div className="scroll-process-heading-inner text-tenor">

                            {sectionTitle || (
                                <>
                                    <span className="scroll-process-small-title">
                                        How We Work
                                    </span>

                                    <h2>
                                        Our Landing Page
                                        <br />
                                        <span>
                                            Design Process
                                        </span>
                                    </h2>
                                </>
                            )}

                        </div>

                    </div>

                </div>

            </section>
        );
    }
);

ScrollCard.displayName = 'ScrollCard';

export default ScrollCard;