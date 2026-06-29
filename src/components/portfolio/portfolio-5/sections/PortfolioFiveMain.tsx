"use client";

import { portfolioProjects } from "@/data/portfolio-projects";
import PortfolioFiveItem from "../components/PortfolioFiveItem";
import { useMemo, useState } from "react";

const filterButtons = [
    {
        title: "All",
        filter: "*",
    },
    {
        title: "Web design",
        filter: "cat1",
    },
    {
        title: "Branding",
        filter: "cat2",
    },
    {
        title: "Development",
        filter: "cat3",
    },
    {
        title: "Motion",
        filter: "cat4",
    },
];

const PortfolioFiveMain = () => {
    const portfolioItems = portfolioProjects.slice(52, 58);
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
        <div className="px-project-inner-5-ptb px-orange-style pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="px-project-inner-5-top d-flex justify-content-between align-items-center">
                            {/* FILTER BUTTONS */}
                            <div className="px-project-inner-5-tab">
                                <div className="masonary-menu filter-button-group">
                                    {filterButtons.map((button) => (
                                        <button
                                            key={button.filter}
                                            type="button"
                                            className={activeFilter === button.filter ? "active" : ""}
                                            onClick={() => setActiveFilter(button.filter)}
                                            aria-pressed={activeFilter === button.filter}
                                        >
                                            {button.title}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            {/* COUNT */}
                            <div className="px-project-inner-5-count">
                                <span>
                                    ●ST/0{filteredItems.length}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PROJECT ITEMS */}
                <div className="row gx-20 grid" data-show="6">
                    {filteredItems.map((item) => (
                        <PortfolioFiveItem key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioFiveMain;