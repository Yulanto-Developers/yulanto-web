"use client";

import { useMemo, useState } from "react";
import PortfolioCards from "@/components/home/home/workComponents/PortfolioCards";
import { portfolioItems } from "@/components/home/home/workComponents/portfolio-items";
import type { PortfolioCategory } from "@/components/home/home/workComponents/portfolio";
import BreadcurmbData from "@/components/breadcrum/sections/breadcrumbdata";
import StarBorder from "@/components/home/home/workComponents/StarBorder";

interface NavItem {
    label: string;
    category: PortfolioCategory | "all";
}

const navItems: NavItem[] = [
    { label: "All", category: "all" },
    { label: "Website", category: "website" },
    { label: "Logo", category: "logo" },
    { label: "Business card", category: "business-card" },
    { label: "Brochure", category: "brochure" },
    { label: "Flyers", category: "flyers" },
];

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] =
        useState<PortfolioCategory | "all">("all");

    const filteredItems = useMemo(() => {
        if (activeCategory === "all") {
            return portfolioItems;
        }
        return portfolioItems.filter((item) => item.category === activeCategory);
    }, [activeCategory]);

    return (
        <>
            <BreadcurmbData />
            <style>{`
        @keyframes fadeInText {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeInText 0.35s ease-out forwards;
        }
      `}</style>

            <div className="container my-5">
                {/* Section Header */}
                <div className="row mb-70 align-items-center">
                    <div className="col-xl-3">
                        <span className="tp-section-subtitle text-black blink-ball">
                           Design Showcase
                        </span>
                    </div>

                    <div className="col-xl-9">
                        <div className="px-project-title-box">

                            <h4 className="px-about-title mb-20">
                                <span className="text-blue-about">Turning Ideas  {' '}</span>  into Powerful Digital Experiences.
                            </h4>

                            <p className="text-figtree text-dark mt-2 font-paragraph-cls">
                               Explore our portfolio, showcasing the perfect blend of creativity, functionality, and innovation. From modern website designs and distinctive logos to engaging brochures, impactful advertisements, and professional business cards, every project reflects our commitment to quality and attention to detail. Our work is crafted to strengthen brands, create meaningful digital experiences, and deliver solutions that exceed client expectations.
 
                            </p>
                        </div>
                    </div>
                </div>

                <section className="container">
                    {/* Outer Pill Container around all buttons */}
                    <div className="portfolio-category-nav-wrapper">
                        <div className="portfolio-category-nav">
                            {navItems.map((item) => {
                                const isActive = activeCategory === item.category;

                                return (
                                    <div key={item.category} className="btn-container-cls">
                                        <StarBorder
                                            as="button"
                                            color={isActive ? "#53ae7d" : "#ffffff"}
                                            speed={isActive ? "3s" : "6s"}
                                            thickness={1}
                                            className={isActive ? "active-category" : ""}
                                            onClick={() => setActiveCategory(item.category)}
                                        >
                                            {item.label}
                                        </StarBorder>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Portfolio Cards */}
                    <div className="mt-5">
                        <PortfolioCards
                            items={filteredItems}
                            activeCategory={activeCategory}
                        />
                    </div>
                </section>
            </div>
        </>
    );
}

