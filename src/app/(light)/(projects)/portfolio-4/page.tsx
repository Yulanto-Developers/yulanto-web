import { PortfolioFourHero, PortfolioFourMain } from "@/components/portfolio/portfolio-4/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio 4 - Creative Portfolio Nextjs Template",
};

const page = () => {
    return (
        <main>
            <PortfolioFourHero />
            <PortfolioFourMain />
        </main>
    );
};

export default page;