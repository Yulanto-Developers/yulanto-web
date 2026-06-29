"use client";

import PortfolioFourItem from "../components/PortfolioFourItem";
import { portfolioProjects } from "@/data/portfolio-projects";
import { useMemo, useState } from "react";

const filterButtons = [
    {
        title: "All",
        filter: "*",
    },
    {
        title: "Design",
        filter: "cat1",
    },
    {
        title: "Motion",
        filter: "cat2",
    },
    {
        title: "Web dev",
        filter: "cat3",
    },
    {
        title: "AI Tools",
        filter: "cat4",
    },
];

const PortfolioFourMain = () => {
    const portfolioItems = portfolioProjects.slice(46, 52);
    const [activeFilter, setActiveFilter] = useState("*");

    const filteredItems = useMemo(() => {
        if (activeFilter === "*") {
            return portfolioItems;
        }
        return portfolioItems.filter(
            (item) =>
                item.filters &&
                item.filters.includes(activeFilter)
        );
    }, [activeFilter, portfolioItems]);

    return (
        <div className="px-project-inner-4-ptb pb-90">
            <div className="container-fluid">
                <div className="px-project-inner-4-box">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* FILTER BUTTONS */}
                            <div className="px-project-inner-4-tab-wrap mb-60">
                                <div className="masonary-menu filter-button-group text-center">
                                    {filterButtons.map((button) => (
                                        <button
                                            key={button.filter}
                                            type="button"
                                            className={activeFilter === button.filter ? "active" : undefined}
                                            onClick={() => setActiveFilter(button.filter)}
                                            aria-pressed={activeFilter === button.filter}
                                        >
                                            {button.title}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* PROJECT ITEMS */}
                            <div className="row grid" data-show="6">
                                {filteredItems.map((item) => (
                                    <PortfolioFourItem
                                        key={item.id}
                                        {...item}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioFourMain;