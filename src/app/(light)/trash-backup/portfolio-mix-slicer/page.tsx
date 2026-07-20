import PortfolioMixSlicerMain from "@/components/home/portfolio-mix-slicer/PortfolioMixSlicerMain";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio Mix Slicer - Creative Portfolio Nextjs Template",
};
const page = () => {
    return (
        <main>
            <PortfolioMixSlicerMain />
        </main>
    );
};

export default page;