"use client";

import { useMemo, useState } from "react";
import PortfolioCards from "@/components/home/home/workComponents/PortfolioCards";
import { portfolioItems } from "@/components/home/home/workComponents/portfolio-items";
import type { PortfolioCategory } from "@/components/home/home/workComponents/portfolio";
import BreadcurmbData from "@/components/breadcrum/sections/breadcrumbdata";
import StarBorder from "@/components/home/home/workComponents/StarBorder";
// import MajorClient from "@/components/home/home/workComponents/major-client";
import MajorClientSection from "@/components/pages/service-2/sections/InnerServiceSection";
import { InnerServiceSection } from "@/components/pages/service-2/sections";
import MajorClientService from "@/components/home/home/workComponents/majorclient";

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

            {/* <InnerServiceSection/> */}
            <MajorClientService />

        </>
    );
}

