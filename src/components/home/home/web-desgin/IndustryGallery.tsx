"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface IndustryItem {
    id: number;
    name: string;
    icon: React.ReactNode;
    image?: string;
    description?: string;
}

interface IndustryGalleryProps {
    title?: React.ReactNode;
    description?: string;
    industries: IndustryItem[];
}

export default function IndustryGallery({
    title,
    description,
    industries,
}: IndustryGalleryProps) {

    const [activeIndex, setActiveIndex] = useState(0);

    const activeIndustry =
        industries[activeIndex] || industries[0];


    /* =========================================
       FIRST 7 ITEMS
    ========================================= */

    const leftIndustries =
        industries.slice(0, 7);


    /* =========================================
       LAST 6 ITEMS
    ========================================= */

    const rightIndustries =
        industries.slice(7, 13);


    /* =========================================
       AUTO CHANGE
    ========================================= */

    useEffect(() => {

        if (!industries.length) {
            return;
        }

        const timer = setTimeout(() => {

            setActiveIndex((currentIndex) => {

                return (
                    (currentIndex + 1) %
                    industries.length
                );

            });

        }, 3000);

        return () => {
            clearTimeout(timer);
        };

    }, [
        activeIndex,
        industries.length,
    ]);


    /* =========================================
       CLICK HANDLER
    ========================================= */

    const handleIndustryClick = (
        index: number
    ) => {

        setActiveIndex(index);

    };


    /* =========================================
       RETURN
    ========================================= */

    return (

        <section className="industry-gallery-section">

            <div className="container">

                {/* =================================
                    TITLE
                ================================= */}

                {title && (

                    <div className="row mb-50">

                        <div className="col-12">

                            <h4 className="px-about-title mb-20">
                                {title}
                            </h4>

                        </div>

                    </div>

                )}


                {/* =================================
                    GALLERY
                ================================= */}

                <div className="industry-gallery">


                    {/* =================================
                        FIRST 7 BUTTONS
                        
                        DESKTOP = LEFT
                        MOBILE = FIRST
                    ================================= */}

                    <div className="industry-list industry-list-left">

                        {leftIndustries.map(
                            (item, index) => (

                                <button
                                    key={item.id}
                                    type="button"
                                    className={`industry-item ${
                                        activeIndex === index
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        handleIndustryClick(
                                            index
                                        )
                                    }
                                >

                                    {/* ICON */}

                                    <span className="industry-item-icon">

                                        {item.icon}

                                    </span>


                                    {/* NAME */}

                                    <span className="industry-item-name text-tenor">

                                        {item.name}

                                    </span>


                                    {/* ARROW */}

                                    <span className="industry-item-arrow">

                                        →

                                    </span>

                                </button>

                            )
                        )}

                    </div>


                    {/* =================================
                        CENTER IMAGE
                        
                        DESKTOP = CENTER
                        MOBILE = BETWEEN 7 AND 6
                    ================================= */}

                    <div className="industry-center">

                        <div className="industry-center-glow" />


                        <div className="industry-center-content">

                            {/* ROUND IMAGE */}

                            <div className="industry-center-image">

                                {activeIndustry?.image ? (

                                    <Image
                                        src={
                                            activeIndustry.image
                                        }
                                        alt={
                                            activeIndustry.name
                                        }
                                        fill
                                        sizes="(max-width: 767px) 200px, 320px"
                                        className="industry-vector-image"
                                        priority
                                    />

                                ) : (

                                    <div className="industry-center-icon">

                                        {
                                            activeIndustry?.icon
                                        }

                                    </div>

                                )}

                            </div>


                            {/* ACTIVE NAME */}

                            <div className="industry-center-info">

                                <h5 className="text-tenor">

                                    {
                                        activeIndustry?.name
                                    }

                                </h5>

                            </div>

                        </div>

                    </div>


                    {/* =================================
                        LAST 6 BUTTONS
                        
                        DESKTOP = RIGHT
                        MOBILE = LAST
                    ================================= */}

                    <div className="industry-list industry-list-right">

                        {rightIndustries.map(
                            (item, index) => {

                                /*
                                 * IMPORTANT
                                 *
                                 * First 7 items:
                                 * 0 - 6
                                 *
                                 * Last 6:
                                 * 7 - 12
                                 *
                                 * Therefore +7.
                                 */

                                const actualIndex =
                                    index + 7;


                                return (

                                    <button
                                        key={item.id}
                                        type="button"
                                        className={`industry-item ${
                                            activeIndex ===
                                            actualIndex
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleIndustryClick(
                                                actualIndex
                                            )
                                        }
                                    >

                                        {/* ICON */}

                                        <span className="industry-item-icon">

                                            {item.icon}

                                        </span>


                                        {/* NAME */}

                                        <span className="industry-item-name text-tenor">

                                            {item.name}

                                        </span>


                                        {/* ARROW */}

                                        <span className="industry-item-arrow">

                                            →

                                        </span>

                                    </button>

                                );

                            }
                        )}

                    </div>

                </div>

            </div>

        </section>

    );
}