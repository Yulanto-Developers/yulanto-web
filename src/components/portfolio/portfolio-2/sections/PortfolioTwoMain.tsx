import { portfolioProjects } from "@/data/portfolio-projects";
import PortfolioTwoItem from "../components/PortfolioTwoItem";

const PortfolioTwoMain = () => {
    // Portfolio 2 projects
    const portfolios = portfolioProjects.slice(41, 46);

    return (
        <div
            id="project"
            className="px-project-4-area px-project-4-style px-orange-style pb-60"
        >
            <div className="container container-1870">
                <div className="row">
                    {portfolios.map((item, index) => (
                        <PortfolioTwoItem
                            key={item.id}
                            {...item}
                            isFirstItem={index === 0}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioTwoMain;