
"use client";

import { useEffect, useState } from "react";
import type { IndustryItem } from "../../custome-ecommerce/ecommerceData/shareData";
import "@/assets/css/industrySection.css";

interface IndustrySectionProps {
    data: IndustryItem[];
}

const IndustrySection = ({ data }: IndustrySectionProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isChanging, setIsChanging] = useState(false);

    const totalIndustries = data.length;

    // Keep active index valid when data changes
    useEffect(() => {
        setActiveIndex(0);
    }, [data]);

    // Automatically change the active industry
    useEffect(() => {
        if (totalIndustries <= 1) return;

        const interval = setInterval(() => {
            setIsChanging(true);

            setTimeout(() => {
                setActiveIndex((currentIndex) =>
                    (currentIndex + 1) % totalIndustries
                );

                setIsChanging(false);
            }, 300);
        }, 3000);

        return () => clearInterval(interval);
    }, [totalIndustries]);

    // Split the same data into three columns
    const third = Math.ceil(totalIndustries / 3);

    const columns = [
        data.slice(0, third),
        data.slice(third, third * 2),
        data.slice(third * 2),
    ];

    const activeIndustry = data[activeIndex];

    const changeIndustry = (index: number) => {
        if (index === activeIndex) return;

        setIsChanging(true);

        setTimeout(() => {
            setActiveIndex(index);
            setIsChanging(false);
        }, 300);
    };

    return (
        <section className="industry-section">
            <div className="row industry-main-row align-items-center">

                {/* SVG / Visual Column */}
                <div className="col-lg-3">
                    <div className="industry-visual">

                        <div
                            className={`industry-svg ${
                                isChanging
                                    ? "industry-svg-changing"
                                    : ""
                            }`}
                        >
                            {activeIndustry?.icon}
                        </div>

                        <h3 className="industry-current-title text-tenor">
                            {activeIndustry?.title}
                        </h3>

                        <div className="industry-counter text-figtree">
                            <span>
                                {String(activeIndex + 1).padStart(2, "0")}
                            </span>

                            <div className="industry-counter-line">
                                <span
                                    style={{
                                        width: `${
                                            ((activeIndex + 1) /
                                                totalIndustries) *
                                            100
                                        }%`,
                                    }}
                                />
                            </div>

                            <span>
                                {String(totalIndustries).padStart(2, "0")}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Three Industry Columns */}
                {columns.map((column, columnIndex) => (
                    <div
                        className="col-lg-3"
                        key={columnIndex}
                    >
                        <div className="industry-list">
                            {column.map((item) => {
                                const globalIndex = data.findIndex(
                                    (industry) => industry.id === item.id
                                );

                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        className={`industry-item ${
                                            activeIndex === globalIndex
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            changeIndustry(globalIndex)
                                        }
                                    >
                                        <span className="industry-icon">
                                            <i
                                                className={
                                               
                                                    "fa-solid fa-store"
                                                }
                                            />
                                        </span>

                                        <span className="industry-name text-figtree">
                                            {item.title}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default IndustrySection;
