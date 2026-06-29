"use client";
import PortfolioDetailsThumbTwo from "../components/PortfolioDetailsThumbTwo";
import PortfolioBrandOverview from "../components/PortfolioBrandOverview";
import PortfolioDetailsBanner from "../components/PortfolioDetailsBanner";
import PortfolioDetailsStep from "../components/PortfolioDetailsStep";
import PortfolioDetailsThumb from "../components/PortfolioDetailsThumb";
import PortfolioNavigation from "../components/PortfolioNavigation";
import { portfolioProjects } from "@/data/portfolio-projects";
import { IdProps } from "@/types/custom-dt";
import { useEffect } from "react";

const PortfolioDetailsVarientOne = ({ id }: IdProps) => {
    const portfolio = portfolioProjects.find((item) => item.id === Number(id));

     useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="px-pd-2-ptb px-pd-style pt-200 pb-80">
                <div className="container container-1230">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            {/* Categories + Title */}
                            <div className="px-pd-2-top pb-70 text-center">
                                <div
                                    className="px-pd-2-categories mb-30 tp_fade_anim"
                                    data-delay=".3"
                                >
                                    {portfolio?.categories?.map((cat, i) => (
                                        <span key={`${cat}-${i}`}>{cat}</span>
                                    ))}
                                </div>

                                <h3 className="px-pd-2-title tp_fade_anim" data-delay=".5">
                                    {portfolio?.title}
                                </h3>
                            </div>
                            {/* Meta Info */}
                            <div
                                className="px-pd-2-bottom d-flex justify-content-between tp_fade_anim"
                                data-delay=".7"
                            >
                                <div className="px-pd-2-bottom-item text-center">
                                    <span>Client</span>
                                    <h6>{portfolio?.client}</h6>
                                </div>
                                <div className="px-pd-2-bottom-item text-center">
                                    <span>Role</span>
                                    <h6>{portfolio?.role}</h6>
                                </div>
                                <div className="px-pd-2-bottom-item text-center">
                                    <span>Duration</span>
                                    <h6>{portfolio?.duration}</h6>
                                </div>
                                <div className="px-pd-2-bottom-item text-center">
                                    <span>Designer</span>
                                    <h6>{portfolio?.designer}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PortfolioDetailsBanner />
            <PortfolioBrandOverview />
            <PortfolioDetailsThumb />
            <PortfolioDetailsStep />
            <PortfolioDetailsThumbTwo />
            <PortfolioNavigation />
        </>
    );
};

export default PortfolioDetailsVarientOne;