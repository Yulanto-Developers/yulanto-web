import PortfolioCard from "@/components/home/design-studio/components/PortfolioCard";
import { portfolioProjects } from "@/data/portfolio-projects";

const PortfolioSixMain = () => {
    // display portfolio items
    const displayPortfolioData = portfolioProjects.slice(4, 9);

    return (
        <div className="px-portfolio-area pb-80">
            <div className="container-fluid">
                <div className="px-portfolio-wrap">
                    <div className="px-project-inner-6-top d-flex justify-content-between align-items-center pb-40">
                        <div className="px-project-inner-6-text">
                            <span>Web & Digital Experiences <br /> Design, Development, Brand Identity</span>
                        </div>
                        <div className="px-project-inner-6-text text-md-end">
                            <span>Philadelphia, PA <br /> 2026</span>
                        </div>
                    </div>
                    {displayPortfolioData.map((item) => (
                        <PortfolioCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioSixMain;