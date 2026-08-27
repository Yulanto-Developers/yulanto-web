"use client";

import React, { useState } from "react";

interface RedesignBenefitCardProps {
    image: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}


/* =========================================================
   PLUS ICON
========================================================= */

const PlusIcon = ({
    isHovered,
}: {
    isHovered: boolean;
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="26"
            height="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            className={`redesign-plus-icon ${isHovered ? "plus-hovered" : ""
                }`}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
            />
        </svg>
    );
};


/* =========================================================
   CORNER PLUS ICONS
========================================================= */

const CornerPlusIcons = ({
    isHovered,
}: {
    isHovered: boolean;
}) => {
    return (
        <>
            <div className="redesign-plus top-left">
                <PlusIcon isHovered={isHovered} />
            </div>

            <div className="redesign-plus top-right">
                <PlusIcon isHovered={isHovered} />
            </div>

            <div className="redesign-plus bottom-left">
                <PlusIcon isHovered={isHovered} />
            </div>

            <div className="redesign-plus bottom-right">
                <PlusIcon isHovered={isHovered} />
            </div>
        </>
    );
};


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function RedesignBenefitCard({
    image,
    title,
    description,
    icon,
}: RedesignBenefitCardProps) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`redesign-benefit-card ${isHovered ? "is-hovered" : ""
                }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            {/* =============================================
                IMAGE
            ============================================= */}

            <img
                src={image}
                alt={title}
                className="redesign-benefit-image"
            />


            {/* =============================================
                NORMAL DARK GRADIENT
            ============================================= */}

            <div className="redesign-image-gradient"></div>


            {/* =============================================
                CORNER PLUS ICONS
            ============================================= */}

            {/* <CornerPlusIcons
                isHovered={isHovered}
            /> */}


            {/* =============================================
                NORMAL TITLE
            ============================================= */}

            <div className="redesign-normal-content">

                <h3 className="text-tenor">
                    {title}
                </h3>

            </div>


            {/* =============================================
                HOVER OVERLAY
            ============================================= */}

            <div className="redesign-hover-overlay">

                {/* Icon */}

                <div className="redesign-hover-icon">
                    {icon}
                </div>


                {/* Content */}

                <div className="redesign-hover-content">

                    <h3 className="text-tenor">
                        {title}
                    </h3>

                    <p>
                        {description}
                    </p>

                </div>

            </div>

        </div>
    );
}