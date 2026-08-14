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
                <div className="row mb-5">
                    <div className="col-lg-12 col-md-10">
                        <h2 className="display-5 text-tenor fw-bold mb-3 text-dark">
                            Showcasing Innovation &amp; Design Excellence
                        </h2>
                        <p className="text-muted text-figtree leading-relaxed fs-5">
                            Explore the vast range of our skills demonstrated in our extensive collection,
                            where every project serves as evidence of our commitment to outstanding design.
                            From captivating websites that redefine the online experience to meticulously
                            crafted logos that deeply connect with your target audience, our portfolio
                            embodies the core of creativity and innovation. </p>
                    </div>
                </div>

                <section className="container py-5">
                    <IndustryFilter />
                </section>
            </div>
        </>
    );
}

