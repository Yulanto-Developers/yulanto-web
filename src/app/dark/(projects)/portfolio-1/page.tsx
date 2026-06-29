import { PortfolioOneHero, PortfolioOneMain } from "@/components/portfolio/portfolio-1/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio 1 - Creative Portfolio Nextjs Template",
};
const page = () => {
    return (
        <main>
            <PortfolioOneHero />
            <PortfolioOneMain/>
        </main>
    );
};

export default page;