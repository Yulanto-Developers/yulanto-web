import { PortfolioSixHero, PortfolioSixMain } from "@/components/portfolio/portfolio-6/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio 6 - Creative Portfolio Nextjs Template",
};
const page = () => {
    return (
        <main>
            <PortfolioSixHero />
            <PortfolioSixMain />
        </main>
    );
};

export default page;