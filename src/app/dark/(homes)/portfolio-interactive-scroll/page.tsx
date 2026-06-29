import PortfolioInteractiveScroll from "@/components/home/portfolio-interactive-with-scroll/PortfolioInteractiveScroll";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio interactive scroll - Creative Portfolio Nextjs Template",
};

const page = () => {
    return (
        <main>
            <PortfolioInteractiveScroll />
        </main>
    );
};

export default page;