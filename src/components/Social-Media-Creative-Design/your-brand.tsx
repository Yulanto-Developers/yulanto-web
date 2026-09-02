"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faLightbulb,
    faPenRuler,
    faPalette,
    faFileExport,
    faShareNodes,
    faBuilding,
} from "@fortawesome/free-solid-svg-icons";
interface ProcessStep {
    icon: any;
    title: string;
    description: string;
}

const processSteps: ProcessStep[] = [
    {
        icon: faMagnifyingGlass,
        title: "Understand Your Brand",
        description: "We first understand your business, audience, services, competitors, and marketing objectives.",
    },
    {
        icon: faLightbulb,
        title: "Creative Concept Development",
        description:
            "Our designers develop visual concepts that align with your brand and campaign goals.",
    },
    {
        icon: faPenRuler,
        title: "Professional Design",
        description:
            "We combine typography, imagery, icons, colors, and layouts to create visually appealing social media creatives.",
    },
    {
        icon: faPalette,
        title: "Brand Consistency",
        description:
            "Every design follows your brand guidelines to ensure consistency across your social media presence.",
    },
    {
        icon: faFileExport,
        title: "Final Delivery",
        description:
            "We provide optimized creative files suitable for your selected social media platforms and marketing campaigns.",
    },
];

const featurePoints = [
    {
        icon: faShareNodes,
        text: "A consistent visual identity can make your business instantly recognizable across social media platforms.",
    },
    {
        icon: faPalette,
        text: "Our designers create customized creatives using your brand colors, typography, logo, imagery, and communication style.",
    },
    {
        icon: faBuilding,
        text: "Whether you are a startup, small business, corporate company, or established brand, we create social media graphics that maintain a professional and consistent appearance across your digital channels.",
    },
];

export function ProcessAndWhyChooseSection() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <section
            className="px-about-6-area pt-50 pb-80 pb-lg-110"
            style={{
                overflowX: "hidden",
                width: "100%",
            }}
        >
            <div
                className="container container-1550"
                style={{
                  
                    overflowX: "hidden",
                }}
            >
                <div className="row g-4 align-items-stretch">

                    {/* Left Side: 5-Step Process */}
                    <div
                        className="col-xl-7 col-lg-12"
                        data-aos="fade-right"
                    >
                        <h4 className="px-about-title mb-20">
                            <span className="text-blue-about">
                                Our Social Media Creative Design{" "}
                            </span>
                            Process
                        </h4>

                        {/* 5 Process Steps Container */}
                        <div className="row g-2 g-md-3">
                            {processSteps.map((step, index) => (
                                <div
                                    key={index}
                                    className="col-6 col-sm-4 col-md-2-4 flex-grow-1"
                                >
                                    <div
                                        className="h-100 p-3 text-center rounded-4 border d-flex flex-column align-items-center justify-content-start shadow-sm"
                                        style={{
                                            backgroundColor: "#ffffff",
                                            borderColor: "#e5e7eb",
                                            overflow: "hidden",
                                        }}
                                    >
                                        {/* Font Awesome Icon */}
                                        <div
                                            className="rounded-circle d-flex align-items-center justify-content-center mb-3 flex-shrink-0"
                                            style={{
                                                width: "36px",
                                                height: "36px",
                                                backgroundColor: "#53ae7d",
                                                color: "#ffffff",
                                                fontSize: "15px ",
                                            }}
                                        >
                                            <FontAwesomeIcon icon={step.icon} />
                                        </div>

                                        {/* Title & Description */}
                                        <h6
                                            className="fw-bold mb-2 fs-6 lh-sm font-title"
                                            style={{ color: "#053456" }}
                                        >
                                            {step.title}
                                        </h6>

                                        <p
                                            className="small text-muted mb-0 lh-sm"
                                            style={{ fontSize: "15px !important" }}
                                        >
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Feature Box */}
                    <div
                        className="col-xl-5 col-lg-12"
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >
                        <div
                            className="h-100 p-4 p-md-5 rounded-4 text-white d-flex flex-column justify-content-between position-relative"
                            style={{
                                backgroundColor: "#053456",
                                overflow: "hidden",
                            }}
                        >
                            <div>
                                <h4 className="px-about-title text-white mb-4">
                                    Social Media Design <br />
                                    <span style={{ color: "#53ae7d" }}>
                                        That Builds Your Brand
                                    </span>
                                </h4>

                                <div className="d-flex flex-column gap-3 mb-4">
                                    {featurePoints.map((point, index) => (
                                        <div
                                            key={index}
                                            className="d-flex align-items-start gap-3"
                                        >
                                            {/* Font Awesome Icon */}
                                            <div
                                                className="d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"
                                                style={{
                                                    width: "32px",
                                                    height: "32px",
                                                    backgroundColor: "#53ae7d",
                                                    color: "#ffffff",
                                                    fontSize: "14px ",
                                                }}
                                            >
                                                <FontAwesomeIcon icon={point.icon} />
                                            </div>

                                            {/* Point Text */}
                                            <p
                                                className="text-white text-figtree mt-1 mb-0 lh-sm"
                                                style={{
                                                    fontSize: "15px !important",
                                                    overflowWrap: "break-word",
                                                }}
                                            >
                                                {point.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ProcessAndWhyChooseSection;