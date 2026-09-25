"use client";

import React from "react";
import Image from "next/image";
import { useQuoteModal } from "../../myComponents/Content/QuoteContext";

interface CtaOneProps {
    title?: string;
    description?: string;
    buttonText?: string;
    actionText?: string;
    imageUrl?: string;
    imageAlt?: string;
}

const CtaOne: React.FC<CtaOneProps> = ({
    title = "Looking for Website Design Chennai?",
    description = "Whether you are launching a new website, redesigning an existing website, or developing a custom web application, our team can help you build a professional React-powered digital experience.",
    buttonText = "Get in touch with us today",
    actionText = "to discuss your React website design and development requirements in Chennai.",
    imageUrl = "/assets/img/react/vetor-1.png",
    imageAlt = "Website Design Chennai",
}) => {
    const { openModal } = useQuoteModal();
    
    return (
        <section className="cta-one-section">
            <div className="container mt-30 mb-40">
                <div className="cta-one-card">
                    <div className="cta-one-decoration"></div>
                    <div className="cta-one-decoration-two"></div>

                    {/* Left/Main Content Area */}
                    <div className="cta-one-content">
                        {/* Label */}
                        <div className="cta-one-label">
                            <span className="cta-one-icon">
                                <i className="fa-regular fa-file-lines"></i>
                            </span>
                            <span className="text-tenor">
                                {title}
                            </span>
                        </div>

                        {/* Description */}
                        <p className="cta-one-description">
                            {description}
                        </p>

                        {/* CTA */}
                        <div className="cta-one-action">
                            <button
                                onClick={() => openModal()}
                                className="btn d-inline-flex align-items-center gap-2 py-3 px-4 rounded-3 fw-bold text-decoration-none"
                                style={{
                                    backgroundColor: '#53ae7d',
                                    color: '#ffffff',
                                    fontSize: '15px',
                                    transition: 'all 0.3s ease',
                                    border: '1px solid #53ae7d',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#53ae7d';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#53ae7d';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <span style={{ fontFamily: "Figtree, Figtree Fallback" }}>Get in touch with us today</span>
                                <i className="fa-solid fa-paper-plane" style={{ fontSize: '14px' }}></i>
                            </button>

                            <p className="cta-one-action-text">
                                {actionText}
                            </p>
                        </div>
                    </div>

                    {/* Right Side PNG Image Area - Fixed with explicit standard sizing to prevent render glitch */}
                    <div className="cta-one-image-wrapper">
                        <Image
                            src={imageUrl}
                            alt={imageAlt}
                            width={340}
                            height={250}
                            priority
                            style={{ width: "100%", height: "auto", objectFit: "contain" }}
                            quality={90}
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
                .cta-one-section {
                    width: 100%;
                    position: relative;
                    overflow-x: hidden; /* Fixes bottom horizontal scrollbar */
                }

                .cta-one-card {
                    position: relative;
                    overflow: hidden; /* Contains background decorations properly */
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 30px;
                    padding: 55px 60px;
                    border-radius: 24px;
                    background: #002d46;
                    isolation: isolate;
                    transition: transform 0.4s ease, box-shadow 0.4s ease;
                }

                .cta-one-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 30px 65px rgba(0, 45, 70, 0.25);
                }

                /* Decorative circle constrained inside overflow hidden */
                .cta-one-decoration {
                    position: absolute;
                    width: 360px;
                    height: 360px;
                    top: -190px;
                    right: -110px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.07);
                    z-index: 1;
                    pointer-events: none;
                }

                .cta-one-decoration::after {
                    content: "";
                    position: absolute;
                    width: 220px;
                    height: 220px;
                    top: 95px;
                    right: 75px;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 50%;
                }

                .cta-one-decoration-two {
                    position: absolute;
                    width: 180px;
                    height: 180px;
                    bottom: -125px;
                    left: -80px;
                    border-radius: 50%;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    z-index: 1;
                    pointer-events: none;
                }

                /* Content */
                .cta-one-content {
                    position: relative;
                    z-index: 2;
                    flex: 1;
                    max-width: 700px;
                }

                /* Right Side Image Container */
                .cta-one-image-wrapper {
                    position: relative;
                    z-index: 2;
                    flex: 0 0 320px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                /* Label */
                .cta-one-label {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    margin-bottom: 20px;
                    color: #ffffff;
                    font-size: 16px;
                    font-weight: 500;
                }

                .cta-one-icon {
                    width: 48px;
                    height: 48px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.1);
                    color: #ffffff;
                    font-size: 19px;
                }

                /* Main text */
                .cta-one-description {
                    max-width: 720px;
                    margin: 0 0 28px;
                    color: #ffffff;
                    font-size: 17px;
                    line-height: 1.7;
                }

                /* CTA area */
                .cta-one-action {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 18px;
                }

                .cta-one-action-text {
                    max-width: 400px;
                    margin: 0;
                    color: rgba(255, 255, 255, 0.82);
                    font-size: 14px;
                    line-height: 1.5;
                }

                /* Tablet & Mobile Responsiveness */
                @media (max-width: 991px) {
                    .cta-one-card {
                        flex-direction: column;
                        align-items: stretch;
                        padding: 45px 35px;
                    }

                    .cta-one-image-wrapper {
                        width: 100%;
                        margin-top: 15px;
                    }
                }

                @media (max-width: 768px) {
                    .cta-one-card {
                        margin: 30px auto;
                        padding: 35px 25px;
                        border-radius: 20px;
                    }

                    .cta-one-label {
                        gap: 11px;
                        margin-bottom: 18px;
                        font-size: 14px;
                    }

                    .cta-one-description {
                        margin-bottom: 22px;
                        font-size: 15px;
                        line-height: 1.6;
                    }

                    .cta-one-action {
                        align-items: flex-start;
                        flex-direction: column;
                        gap: 14px;
                    }
                }
            `}</style>
        </section>
    );
};

export default CtaOne;