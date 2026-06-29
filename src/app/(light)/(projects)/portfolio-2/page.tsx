import { PortfolioTwoHero, PortfolioTwoMain } from "@/components/portfolio/portfolio-2/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio 2 - Creative Portfolio Nextjs Template",
};
const page = () => {
    return (
        <main>
            <PortfolioTwoHero/>
            <PortfolioTwoMain/>
        </main>
    );
};

export default page;