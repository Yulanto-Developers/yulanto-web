import { PortfolioDetailsVarientTwo } from "@/components/portfolio/portfolio-details-2/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio Details 2 - Creative Portfolio Nextjs Template",
};
const page = () => {
    return (
        <main>
            <PortfolioDetailsVarientTwo id={1}/>
        </main>
    );
};

export default page;