'use client';

import React, { forwardRef } from 'react';
import '@/assets/css/scroll-card.css';

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

        return (
            <section
                ref={ref}
                className="scroll-process-section"
            >

                <div className="scroll-process-container">

                    {/* LEFT SIDE - SCROLLING IMAGE CARDS */}
                    <div className="scroll-process-cards">

                        {cardsData.map((card, index) => (

                            <div
                                className="scroll-process-card-wrapper"
                                key={index}
                            >

                                <article
                                    className={`scroll-process-card ${card.rotation || ''}`}
                                    style={{
                                        backgroundImage: `url("${card.bgImage}")`,
                                    }}
                                >

                                    {/* IMAGE DARK OVERLAY */}
                                    <div className="scroll-process-overlay" />

                                    {/* CONTENT OVER IMAGE */}
                                    <div className="scroll-process-card-content">

                                        <span className="scroll-process-step">
                                            Step {String(index + 1).padStart(2, '0')}
                                        </span>

                                        <h3 className='text-tenor'>
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


                    {/* RIGHT SIDE - STICKY HEADING */}
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