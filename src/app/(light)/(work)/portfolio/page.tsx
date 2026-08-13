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
                <div className="row mb-5">
                    <div className="col-lg-12 col-md-10">
                        <h2 className="display-5 text-tenor fw-bold mb-3 text-dark">
                            Our Portfolio
                        </h2>
                        <p className="text-muted text-figtree leading-relaxed fs-5">
                            Step into our portfolio showcase, where the fusion of creativity and
                            functionality is brought to life. Explore our awe-inspiring website designs,
                            eye-catching logos, engaging brochures, compelling advertisements, and
                            unforgettable business cards. Every project exemplifies our unwavering
                            commitment to delivering excellence, driving innovation, and guaranteeing client
                            satisfaction.
                        </p>
                    </div>
                </div>

                <section className="container py-5">
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

