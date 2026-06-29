import { portfolioProjects } from "@/data/portfolio-projects";
import { GeometricFlowerTwoIcon } from "@/svg/ShapeIcons";
import CAProjectItem from "../components/CAProjectItem";
import { SmartLink } from "@/components/common";

const CreativeAgencyProject = () => {
    //display projects items
    const projectItems = portfolioProjects.slice(18, 26);

    return (
        <div className="px-project-5-area pt-150 pb-70">
            <div className="container container-1870">

                {/* TITLE */}
                <div className="row">
                    <div className="col-xl-12">
                        <div className="px-project-5-title-box p-relative mb-65">
                            <h2 className="px-project-5-title text-center text-effect">
                                Recent <span>projects</span>
                            </h2>

                            <div className="px-project-5-btn">
                                <SmartLink
                                    className="px-btn-zikzak text-center p-relative"
                                    href="/portfolio-4"
                                >
                                    <span className="btn-text">
                                        All <br /> project
                                    </span>
                                    <i className="zikzak-bg">
                                        <GeometricFlowerTwoIcon />
                                    </i>
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PROJECT GRID */}
                <div className="row">
                    {projectItems.map((project) => (
                        <CAProjectItem key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CreativeAgencyProject;