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

    const activeIndustry = industries[activeIndex];

    // First 6 → left
    const leftIndustries = industries.slice(0, 6);

    // Remaining 7 → right
    const rightIndustries = industries.slice(6, 13);


    /*
    |--------------------------------------------------------------------------
    | AUTO SWIPER
    |--------------------------------------------------------------------------
    | Changes the active industry every 6 seconds.
    |
    | If user clicks an item, this effect runs again because activeIndex
    | changes, so the 6-second timer starts again from zero.
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        if (!industries.length) return;

        const timer = setTimeout(() => {
            setActiveIndex((currentIndex) => {
                return (currentIndex + 1) % industries.length;
            });
        }, 6000);

        return () => {
            clearTimeout(timer);
        };
    }, [activeIndex, industries.length]);


    /*
    |--------------------------------------------------------------------------
    | CLICK HANDLER
    |--------------------------------------------------------------------------
    */

    const handleIndustryClick = (index: number) => {
        setActiveIndex(index);
    };


    return (
        <section className="industry-gallery-section">

            <div className="container">

                {/* Heading */}
                {title && (
                    <div className="row mb-50">

                        <div className="col-12">
                            <h4 className="px-about-title mb-20">
                                {title}
                            </h4>
                        </div>

                    </div>
                )}


                {/* Main Gallery */}
                <div className="industry-gallery">

                    {/* =====================================================
                        LEFT 6
                    ===================================================== */}

                    <div className="industry-list industry-list-left">

                        {leftIndustries.map((item, index) => (

                            <button
                                key={item.id}
                                type="button"
                                className={`industry-item ${
                                    activeIndex === index
                                        ? "active"
                                        : ""
                                }`}
                                onClick={() =>
                                    handleIndustryClick(index)
                                }
                            >

                                <span className="industry-item-icon">
                                    {item.icon}
                                </span>

                                <span className="industry-item-name text-tenor">
                                    {item.name}
                                </span>

                                <span className="industry-item-arrow">
                                    →
                                </span>

                            </button>

                        ))}

                    </div>


                    {/* =====================================================
                        CENTER
                    ===================================================== */}

                    <div className="industry-center">

                        <div className="industry-center-glow" />

                        <div className="industry-center-content">

                            <div
                                className="industry-center-image"
                                key={activeIndustry?.id}
                            >

                                {activeIndustry?.image ? (

                                    <Image
                                        src={activeIndustry.image}
                                        alt={activeIndustry.name}
                                        fill
                                        sizes="400px"
                                        className="industry-vector-image"
                                    />

                                ) : (

                                    <div className="industry-center-icon">
                                        {activeIndustry?.icon}
                                    </div>

                                )}

                            </div>


                            <div className="industry-center-info">

                                <h5 className="text-tenor">
                                    {activeIndustry?.name}
                                </h5>

                            </div>

                        </div>

                    </div>


                    {/* =====================================================
                        RIGHT 7
                    ===================================================== */}

                    <div className="industry-list industry-list-right">

                        {rightIndustries.map((item, index) => {

                            const actualIndex = index + 6;

                            return (

                                <button
                                    key={item.id}
                                    type="button"
                                    className={`industry-item ${
                                        activeIndex === actualIndex
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        handleIndustryClick(
                                            actualIndex
                                        )
                                    }
                                >

                                    <span className="industry-item-icon">
                                        {item.icon}
                                    </span>

                                    <span className="industry-item-name text-tenor">
                                        {item.name}
                                    </span>

                                    <span className="industry-item-arrow">
                                        →
                                    </span>

                                </button>

                            );
                        })}

                    </div>

                </div>

            </div>

        </section>
    );
}