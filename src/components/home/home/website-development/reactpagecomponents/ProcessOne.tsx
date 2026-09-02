"use client";

import React from "react";
import {
    ClipboardList,
    Palette,
    Code2,
    Puzzle,
    ShieldCheck,
    Rocket,
    ArrowRight,
} from "lucide-react";
import { useAOS } from "@/components/hooks/useAOS";

const processData = [
    {
        icon: ClipboardList,
        title: "Requirement Analysis",
        description:
            "We understand your business, target audience, website requirements, and project objectives.",
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description:
            "Our designers create a clean, intuitive, and responsive interface that reflects your brand identity.",
    },
    {
        icon: Code2,
        title: "React Development",
        description:
            "The approved design is converted into a functional React website using reusable and scalable components.",
    },
    {
        icon: Puzzle,
        title: "API & Feature Integration",
        description:
            "We integrate required APIs, forms, third-party services, payment systems, and other business functionalities.",
    },
    {
        icon: ShieldCheck,
        title: "Testing & Optimization",
        description:
            "The website is tested across different devices and browsers for functionality, responsiveness, usability, and performance.",
    },
    {
        icon: Rocket,
        title: "Launch & Support",
        description:
            "After final approval, we deploy the website and provide ongoing maintenance and technical support when required.",
    },
];

const ProcessOne = () => {
    // Initialize AOS
    useAOS();

    return (
        <section 
            className="process-section"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
        >
            <div className="process-container container">
                <h4 
                    className="px-about-title mb-20 text-center"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="800"
                >
                    <span className="text-blue-about">Our React Website</span>
                    Development Process
                </h4>
                <div className="process-grid">
                    {processData.map((item, index) => {
                        const Icon = item.icon;
                        const isLastInRowDesktop = (index + 1) % 3 === 0;

                        return (
                            <React.Fragment key={item.title}>
                                <div 
                                    className="process-card"
                                    data-aos="fade-up"
                                    data-aos-delay={150 + (index * 100)}
                                    data-aos-duration="800"
                                    data-aos-offset="100"
                                >
                                    {/* Corner Decorative Accent */}
                                    <div className="card-corner-accent" />

                                    {/* Icon Container */}
                                    <div className="icon-wrapper">
                                        <Icon size={24} strokeWidth={2} />
                                    </div>

                                    {/* Card Header & Content */}
                                    <h3 className="card-title">{item.title}</h3>
                                    <div className="card-divider" />
                                    <p className="card-description">{item.description}</p>

                                    {/* Responsive Connector Arrow */}
                                    {!isLastInRowDesktop && (
                                        <div className="connector-arrow desktop-arrow">
                                            <ArrowRight size={18} />
                                        </div>
                                    )}
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                .process-section {
                    width: 100%;
                    padding: 40px 0px;
                }

                .process-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 32px;
                }

                /* =========================
                   CARD STYLES
                ========================= */
                .process-card {
                    position: relative;
                    background: #ffffff;
                    border: 1px solid #e9ecef;
                    border-radius: 16px;
                    padding: 80px 28px 32px 28px;
                    box-shadow: 0 4px 20px rgba(5, 52, 86, 0.03);
                    transition: all 0.3s ease;
                }

                .process-card:hover {
                    transform: translateY(-4px);
                    border-color: rgba(83, 174, 125, 0.4);
                    box-shadow: 0 12px 30px rgba(5, 52, 86, 0.08);
                }

                /* Corner Light Green Accent */
                .card-corner-accent {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 80px;
                    height: 80px;
                    background-color: #eaf6f0;
                    border-top-left-radius: 16px;
                    border-bottom-right-radius: 100%;
                    pointer-events: none;
                }

                /* Floating Icon Badge */
                .icon-wrapper {
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    background: #ffffff;
                    color: #43a047;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
                    z-index: 2;
                    transition: all 0.3s ease;
                }

                .process-card:hover .icon-wrapper {
                    background: #43a047;
                    color: #ffffff;
                }

                /* Text & Content Elements */
                .card-title {
                    margin: 0 0 12px 0;
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #0f2d4a;
                    line-height: 1.3;
                }

                .card-divider {
                    width: 32px;
                    height: 2px;
                    background-color: #43a047;
                    margin-bottom: 16px;
                    border-radius: 2px;
                    transition: width 0.3s ease;
                }

                .process-card:hover .card-divider {
                    width: 50px;
                }

                .card-description {
                    margin: 0;
                    font-size: 0.95rem;
                    color: #6c757d;
                    line-height: 1.6;
                }

                /* Connector Arrow */
                .connector-arrow {
                    position: absolute;
                    top: 50%;
                    right: -33px;
                    transform: translateY(-50%);
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    background: #ffffff;
                    border: 1px solid #e9ecef;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #0f2d4a;
                    z-index: 10;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
                }

                /* =========================
                   RESPONSIVE BREAKPOINTS
                ========================= */
                @media (max-width: 992px) {
                    .process-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 24px;
                    }
                    .desktop-arrow {
                        display: none;
                    }
                }

                @media (max-width: 640px) {
                    .process-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                }
            `}</style>
        </section>
    );
};

export default ProcessOne;