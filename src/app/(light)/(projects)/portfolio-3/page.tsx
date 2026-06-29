import { PortfolioThreeHero,PortfolioThreeMain} from "@/components/portfolio/portfolio-3/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio 3 - Creative Portfolio Nextjs Template",
};
const page = () => {
    return (
        <main>
            <PortfolioThreeHero />
            <PortfolioThreeMain />
        </main>
    );
};

export default page;