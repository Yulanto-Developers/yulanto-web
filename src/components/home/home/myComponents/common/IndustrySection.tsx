"use client";

import { useEffect, useState } from "react";
import { industryData, IndustryItem } from "../../custome-ecommerce/ecommerceData/shareData";
import "@/assets/css/industrySection.css";

interface IndustrySectionProps {
    data: IndustryItem[];
}

const IndustrySection = ({ data }: IndustrySectionProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isChanging, setIsChanging] = useState(false);

    const totalIndustries = data.length;

    const changeIndustry = (index: number) => {
        if (index === activeIndex || isChanging) return;

        setIsChanging(true);

        setTimeout(() => {
            setActiveIndex(index);
            setIsChanging(false);
        }, 300);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIsChanging(true);

            setTimeout(() => {
                setActiveIndex((currentIndex) => {
                    return (currentIndex + 1) % totalIndustries;
                });

                setIsChanging(false);
            }, 300);
        }, 3000);

        return () => clearInterval(interval);
    }, [totalIndustries]);

    const firstColumn = data.slice(0, 8);
    const secondColumn = data.slice(8);

    const activeIndustry = data[activeIndex];

    return (
        <section className="industry-section">

            <div className="row industry-main-row align-items-center">

                {/* SVG */}
                <div className="col-lg-4">
                    <div className="industry-visual">

                        <div
                            className={`industry-svg ${isChanging ? "industry-svg-changing" : ""
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
                                        width: `${((activeIndex + 1) /
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

                {/* First List */}
                <div className="col-lg-4">
                    <div className="industry-list">

                        {firstColumn.map((item, index) => (
                            <button
                                key={item.id}
                                type="button"
                                className={`industry-item ${activeIndex === index ? "active" : ""
                                    }`}
                                onClick={() => changeIndustry(index)}
                            >
                                <span className="industry-number text-figtree">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span className="industry-name text-figtree">
                                    {item.title}
                                </span>

                                <span className="industry-arrow">
                                    →
                                </span>
                            </button>
                        ))}

                    </div>
                </div>

                {/* Second List */}
                <div className="col-lg-4">
                    <div className="industry-list">

                        {secondColumn.map((item, index) => {

                            const actualIndex = index + 8;

                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    className={`industry-item ${activeIndex === actualIndex
                                        ? "active"
                                        : ""
                                        }`}
                                    onClick={() =>
                                        changeIndustry(actualIndex)
                                    }
                                >
                                    <span className="industry-number text-figtree">
                                        {String(actualIndex + 1).padStart(2, "0")}
                                    </span>

                                    <span className="industry-name text-figtree">
                                        {item.title}
                                    </span>

                                    <span className="industry-arrow">
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
};

export default IndustrySection;