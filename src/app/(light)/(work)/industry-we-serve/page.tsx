"use client";

import { useMemo, useState } from "react";
import PortfolioCards from "@/components/home/home/workComponents/PortfolioCards";
import { portfolioItems } from "@/components/home/home/workComponents/portfolio-items";
import type { PortfolioCategory } from "@/components/home/home/workComponents/portfolio";
import BreadcurmbData from "@/components/breadcrum/sections/breadcrumbdata";
import StarBorder from "@/components/home/home/workComponents/StarBorder";
import IndustryFilter from "@/components/home/home/workComponents/IndustryFilter";

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
                <div className="row mb-10 align-items-center">
                    <div className="col-xl-3">
                        <span className="tp-section-subtitle text-black blink-ball">
                            Industries We Specialize In
                        </span>
                    </div>

                    <div className="col-xl-9">
                        <div className="px-project-title-box">

                            <h4 className="px-about-title mb-20">
                                <span className="text-blue-about">Building Digital Experiences  {' '}</span>   Across Industries.
                            </h4>

                            <p className="text-figtree text-dark mt-2 font-paragraph-cls">
                                We deliver innovative web and digital solutions for businesses across diverse industries. From startups to established enterprises, our industry-focused approach creates impactful digital experiences that drive growth and deliver results.

                            </p>
                        </div>
                    </div>
                </div>

                <section className="container ">
                    <IndustryFilter />
                </section>
            </div>
        </>
    );
}

