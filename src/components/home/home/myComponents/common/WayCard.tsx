"use client";

import React from "react";

export interface WayStep {
    stepNumber: string;
    title: string;
    description: string;
    iconClass: string;
}

interface PackagingProcessSectionProps {
    stepsData: WayStep[];
    title?: string;
    titleHighlight?: string;
}

export function PackagingProcessSection({
    stepsData,
    title = "",
    titleHighlight = "",
}: PackagingProcessSectionProps) {
    return (
        <section
            className="px-about-6-area pb-80 pb-lg-110"
            style={{ backgroundColor: "#ffffff" }}
        >
            <div className="container container-1550">

                {/* Section Title */}
                <div
                    className="mb-50 text-center"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <h4 className="px-about-title mb-20 text-tenor">
                        <span className="text-blue-about">
                            {titleHighlight}{" "}
                        </span>
                        {title}
                    </h4>
                </div>

                {/* Timeline */}
                <div
                    className="mx-auto position-relative"
                    style={{
                        maxWidth: "900px",
                        fontFamily: "Figtree, Figtree Fallback",
                        padding: "20px 0",
                    }}
                >
                    {stepsData.map((step, index) => {
                        const isEven = index % 2 === 0;
                        const isLast = index === stepsData.length - 1;

                        return (
                            <div
                                key={index}
                                className="position-relative mb-5"
                                style={{ minHeight: "160px" }}
                                data-aos={isEven ? "fade-right" : "fade-left"}
                                data-aos-duration="1000"
                                data-aos-delay={`${index * 150}`}
                            >

                                {/* Connecting Line */}
                                {!isLast && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "40px",
                                            [isEven ? "right" : "left"]: "5%",
                                            width: "45%",
                                            height: "170px",
                                            border: "4px dashed #53ae7d",
                                            borderLeft: isEven
                                                ? "none"
                                                : "4px dashed #53ae7d",
                                            borderRight: isEven
                                                ? "4px dashed #53ae7d"
                                                : "none",
                                            borderTop: "none",
                                            borderBottomRightRadius: isEven
                                                ? "80px"
                                                : "0",
                                            borderBottomLeftRadius: isEven
                                                ? "0"
                                                : "80px",
                                            zIndex: 1,
                                            pointerEvents: "none",
                                        }}
                                    />
                                )}

                                {/* Step Content */}
                                <div
                                    className={`d-flex align-items-center gap-4 ${
                                        isEven
                                            ? "flex-row"
                                            : "flex-row-reverse"
                                    }`}
                                    style={{
                                        position: "relative",
                                        zIndex: 2,
                                    }}
                                >

                                    {/* Text Box */}
                                    <div
                                        className="flex-grow-1 p-4 rounded-4 shadow-sm"
                                        style={{
                                            backgroundColor: "#ffffff",
                                            border: "2px solid #053456",
                                            maxWidth: "75%",
                                        }}
                                    >

                                        {/* Step Header */}
                                        <div
                                            className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-2"
                                            style={{
                                                backgroundColor: "#053456",
                                                color: "#ffffff",
                                            }}
                                        >
                                            <span
                                                className="fw-bold"
                                                style={{
                                                    color: "#53ae7d",
                                                    fontSize: "14px",
                                                }}
                                            >
                                                {step.stepNumber}
                                            </span>

                                            <span
                                                className="fw-bold text-uppercase text-tenor"
                                                style={{
                                                    fontSize: "12px",
                                                    letterSpacing: "1px",
                                                }}
                                            >
                                                {step.title}
                                            </span>
                                        </div>

                                        {/* Description */}
                                        <p
                                            className="text-figtree text-black mt-2 mb-0"
                                            style={{
                                                fontFamily:
                                                    "Figtree, Figtree Fallback",
                                                fontSize: "15px",
                                                lineHeight: "1.6",
                                                color: "#053456",
                                            }}
                                        >
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Icon */}
                                    <div
                                        className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 shadow-sm"
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                            backgroundColor: "#53ae7d",
                                            color: "#ffffff",
                                            border: "4px solid #053456",
                                            fontSize: "28px",
                                        }}
                                        data-aos="zoom-in"
                                        data-aos-duration="600"
                                        data-aos-delay={`${index * 150 + 200}`}
                                    >
                                        <i className={step.iconClass}></i>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

export default PackagingProcessSection;