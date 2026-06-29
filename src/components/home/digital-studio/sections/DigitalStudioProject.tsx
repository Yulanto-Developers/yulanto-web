"use client";
import DigitalStudioProjectItem from "../components/DigitalStudioProjectItem";
import { portfolioProjects } from "@/data/portfolio-projects";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import { SmartLink } from "@/components/common";
import Image from "next/image";

const DigitalStudioProject = () => {
    // display portfolio items
    const displayPortfolioData = portfolioProjects.slice(30, 33);

    // Determine if the current route uses dark mode
    const isDarkTheme = useIsDarkRoute();

    // Apply conditional text color based on theme
    const textColor = isDarkTheme ? "text-white" : "";


    return (
        <div className="bf-portfolio-3-area pt-160 pb-75 title-box">
            <div className="container-fluid container-1650">
                <div className="bf-portfolio-3-title-wrap mb-120">
                    <div className="row">
                        <div className="col-xl-8 col-lg-9 col-md-9">
                            <div className="bf-portfolio-3-title-box">
                                <h2 className="bf-portfolio-3-sectitle mb-45">
                                    <span className="tp-text-right-scroll d-inline-block reveal-text">
                                        recent
                                    </span>{" "}
                                    <br />
                                    <span className="reveal-text">work</span>
                                </h2>
                                <p className={textColor}>
                                    In the creative wilderness,<br />
                                    our work becomes the beacon<br />
                                    clients grow to love.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-3 col-md-3">
                            <div className="bf-portfolio-3-shape mt-20">
                                <Image className="img-fluid" width={442} height={296} src="/assets/img/update/portfolio/port-3/cat.png" alt="cat" />
                                <div className="bf-portfolio-3-btn pt-90 text-start text-md-end">
                                    <SmartLink
                                        href="/portfolio-1"
                                        className="tp-btn tp-btn-border tp-btn-xl d-inline-flex align-items-center"
                                    >
                                        <span>
                                            <span className="text-1">Explore Work</span>
                                            <span className="text-2">Explore Work</span>
                                        </span>
                                    </SmartLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bf-portfolio-3-item-wrap">
                    {displayPortfolioData.map((project) => (
                        <DigitalStudioProjectItem key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DigitalStudioProject;