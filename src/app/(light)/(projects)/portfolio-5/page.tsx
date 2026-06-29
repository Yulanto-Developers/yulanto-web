import { PortfolioFiveHero,PortfolioFiveMain } from "@/components/portfolio/portfolio-5/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio 5 - Creative Portfolio Nextjs Template",
};
const page = () => {
    return (
        <main>
            <PortfolioFiveHero />
            <PortfolioFiveMain />
        </main>
    );
};

export default page;