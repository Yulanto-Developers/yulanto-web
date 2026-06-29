import { portfolioProjects } from "@/data/portfolio-projects";
import PortfolioCard from "../components/PortfolioCard";

const Portfolio = () => {
    // display portfolio items
    const displayPortfolioData = portfolioProjects.slice(4, 9);

    return (
        <div className="px-portfolio-area pt-75">
            <div className="container-fluid">
                <div className="px-portfolio-wrap">
                    {displayPortfolioData.map((item) => (
                        <PortfolioCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
