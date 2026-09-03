"use client";

import React from "react";

const CtaOne = () => {
    return (
        <section className="cta-one-section">
            <div className="container mt-30 mb-40">
                <div className="cta-one-card">
                    <div className="cta-one-decoration"></div>
                    <div className="cta-one-decoration-two"></div>

                    <div className="cta-one-content">
                        {/* Label */}
                        <div className="cta-one-label">
                            <span className="cta-one-icon">
                                <i className="fa-regular fa-file-lines"></i>
                            </span>

                            <span className="text-tenor">
                                Looking for Website Design Chennai?
                            </span>
                        </div>

                        {/* Description */}
                        <p className="cta-one-description">
                            Whether you are launching a new website,
                            redesigning an existing website, or developing a
                            custom web application, our team can help you build
                            a professional React-powered digital experience.
                        </p>

                        {/* CTA */}
                        <div className="cta-one-action">
                            <button className="cta-one-button text-tenor">
                                Get in touch with us today
                            </button>

                            <p className="cta-one-action-text">
                                to discuss your React website design and
                                development requirements in Chennai.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .cta-one-section {
                    width: 100%;
                }

                .cta-one-card {
                    position: relative;
                    overflow: hidden;
                    min-height: 330px;
                    display: flex;
                    align-items: center;
                    padding: 65px 70px;
                    border-radius: 24px;
                    background: #002d46;
                    isolation: isolate;
                    transition:
                        transform 0.4s ease,
                        box-shadow 0.4s ease;
                }

                .cta-one-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 30px 65px rgba(0, 45, 70, 0.25);
                }

                /* Decorative circle */
                .cta-one-decoration {
                    position: absolute;
                    width: 360px;
                    height: 360px;
                    top: -190px;
                    right: -110px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.07);
                    z-index: -1;
                    transition: transform 0.7s ease;
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
                    z-index: -1;
                    transition: transform 0.7s ease;
                }

                .cta-one-card:hover .cta-one-decoration {
                    transform: scale(1.12);
                }

                .cta-one-card:hover .cta-one-decoration-two {
                    transform: scale(1.15);
                }

                /* Content */
                .cta-one-content {
                    position: relative;
                    z-index: 2;
                    width: 100%;
                    max-width: 950px;
                }

                /* Label */
                .cta-one-label {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    margin-bottom: 25px;
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
                    max-width: 900px;
                    margin: 0 0 32px;
                    color: #ffffff;
                    font-size: 18px;
                    line-height: 1.75;
                }

                /* CTA area */
                .cta-one-action {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 20px;
                }

                .cta-one-button {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 52px;
                    padding: 14px 28px;
                    border: 0;
                    border-radius: 7px;
                    outline: none;
                    background: #ffffff;
                    color: #002d46;
                    cursor: pointer;
                    font-size: 15px;
                    font-weight: 600;
                    white-space: nowrap;
                    transition:
                        transform 0.3s ease,
                        background 0.3s ease,
                        box-shadow 0.3s ease;
                }

                .cta-one-button:hover {
                    transform: translateY(-3px);
                    background: #f5f5f5;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
                }

                .cta-one-action-text {
                    max-width: 450px;
                    margin: 0;
                    color: rgba(255, 255, 255, 0.82);
                    font-size: 15px;
                    line-height: 1.6;
                }

                /* Tablet */
                @media (max-width: 991px) {
                    .cta-one-card {
                        min-height: auto;
                        padding: 55px 45px;
                    }

                    .cta-one-description {
                        font-size: 17px;
                    }
                }

                /* Mobile */
                @media (max-width: 768px) {
                    .cta-one-card {
                        margin: 40px auto;
                        padding: 40px 30px;
                        border-radius: 20px;
                    }

                    .cta-one-label {
                        gap: 11px;
                        margin-bottom: 22px;
                        font-size: 14px;
                    }

                    .cta-one-icon {
                        width: 42px;
                        height: 42px;
                        font-size: 17px;
                    }

                    .cta-one-description {
                        margin-bottom: 27px;
                        font-size: 16px;
                        line-height: 1.65;
                    }

                    .cta-one-action {
                        align-items: flex-start;
                        flex-direction: column;
                        gap: 15px;
                    }

                    .cta-one-button {
                        width: auto;
                        min-height: 50px;
                        padding: 13px 24px;
                    }

                    .cta-one-action-text {
                        font-size: 14px;
                    }

                    .cta-one-decoration {
                        width: 220px;
                        height: 220px;
                        top: -105px;
                        right: -80px;
                    }

                    .cta-one-decoration::after {
                        width: 140px;
                        height: 140px;
                        top: 65px;
                        right: 50px;
                    }
                }

                /* Small Mobile */
                @media (max-width: 480px) {
                    .cta-one-card {
                        margin: 30px auto;
                        padding: 30px 22px;
                        border-radius: 17px;
                    }

                    .cta-one-label {
                        align-items: flex-start;
                        font-size: 13px;
                        line-height: 1.5;
                    }

                    .cta-one-icon {
                        width: 40px;
                        height: 40px;
                        font-size: 16px;
                    }

                    .cta-one-description {
                        font-size: 15px;
                        line-height: 1.65;
                    }

                    .cta-one-action {
                        width: 100%;
                    }

                    .cta-one-button {
                        width: 100%;
                        min-height: 50px;
                        padding: 13px 18px;
                        font-size: 14px;
                    }

                    .cta-one-action-text {
                        font-size: 13px;
                        line-height: 1.6;
                    }

                    .cta-one-decoration {
                        width: 170px;
                        height: 170px;
                        top: -80px;
                        right: -70px;
                    }

                    .cta-one-decoration-two {
                        width: 120px;
                        height: 120px;
                        bottom: -80px;
                        left: -55px;
                    }
                }
            `}</style>
        </section>
    );
};

export default CtaOne;