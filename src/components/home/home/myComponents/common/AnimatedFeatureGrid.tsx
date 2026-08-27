"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import type { IconType } from "react-icons";

import "./animationGrid.css";

export interface ZigZagFeature {
    icon: IconType;
    title: string;
    description: string;
    image: StaticImageData;
}

interface ZigZagFeatureSectionProps {
    features: ZigZagFeature[];
}

interface FeatureRowProps {
    feature: ZigZagFeature;
    index: number;
    isReverse: boolean;
}


/* =====================================================
   SINGLE FEATURE ROW
===================================================== */

function FeatureRow({
    feature,
    index,
    isReverse,
}: FeatureRowProps) {
    const Icon = feature.icon;

    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            key={`${feature.title}-${index}`}
            className={`row align-items-center zigzag-feature-row ${isReverse ? "flex-md-row-reverse" : ""
                }`}
            initial={{
                opacity: 0,
                y: 60,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.25,
            }}
            transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            {/* =================================================
                ANIMATED BORDER
            ================================================= */}

            <svg
                className="zigzag-border-svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <motion.rect
                    x="0.5"
                    y="0.5"
                    width="99"
                    height="99"
                    rx="4"
                    ry="4"
                    fill="none"
                    stroke="#315d7d"
                    strokeWidth="0.3"
                    pathLength={1}
                    initial={{
                        pathLength: 0,
                    }}
                    animate={{
                        pathLength: isHovered ? 0.4 : 0,
                    }}
                    transition={{
                        duration: 1.2,
                        ease: "easeInOut",
                    }}
                />
            </svg>


            {/* =================================================
                IMAGE
            ================================================= */}

            <div className="col-lg-6 col-md-6">

                <motion.div
                    className="zigzag-image-wrapper"

                    initial={{
                        opacity: 0,
                        scale: 0.94,
                    }}

                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}

                    viewport={{
                        once: true,
                        amount: 0.25,
                    }}

                    transition={{
                        duration: 0.7,
                        delay: 0.1,
                        ease: [0.16, 1, 0.3, 1],
                    }}

                    whileHover={{
                        scale: 1.02,
                    }}
                >
                    <Image
                        src={feature.image}
                        alt={feature.title}
                        className="zigzag-feature-image"
                        fill
                        sizes="(max-width: 768px) 70vw, 50vw"
                    />
                </motion.div>

            </div>


            {/* =================================================
                CONTENT
            ================================================= */}

            <div className="col-lg-6 col-md-6">

                <motion.div
                    className="zigzag-feature-content"

                    initial={{
                        opacity: 0,
                        x: isReverse ? 40 : -40,
                    }}

                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}

                    viewport={{
                        once: true,
                        amount: 0.25,
                    }}

                    transition={{
                        duration: 0.7,
                        delay: 0.15,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                >

                    {/* =================================================
                        ICON
                    ================================================= */}

                    <motion.div
                        className="zigzag-feature-icon"

                        whileHover={{
                            scale: 1.1,
                            rotate: 4,
                        }}

                        transition={{
                            duration: 0.25,
                        }}
                    >
                        <Icon />
                    </motion.div>


                    {/* =================================================
                        TITLE
                    ================================================= */}

                    <h3 className="zigzag-feature-title text-tenor">
                        {feature.title}
                    </h3>


                    {/* =================================================
                        DESCRIPTION
                    ================================================= */}

                    <p className="zigzag-feature-description">
                        {feature.description}
                    </p>

                </motion.div>

            </div>

        </motion.div>
    );
}


/* =====================================================
   MAIN COMPONENT
===================================================== */

function ZigZagFeatureSection({
    features,
}: ZigZagFeatureSectionProps) {

    return (
        <section className="zigzag-feature-section">

            <div className="container">

                {features.map((feature, index) => {

                    const isReverse = index % 2 !== 0;

                    return (
                        <FeatureRow
                            key={`${feature.title}-${index}`}
                            feature={feature}
                            index={index}
                            isReverse={isReverse}
                        />
                    );

                })}

            </div>

        </section>
    );
}

export default ZigZagFeatureSection;