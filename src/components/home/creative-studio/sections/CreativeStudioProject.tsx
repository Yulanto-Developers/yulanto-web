import { portfolioProjects } from "@/data/portfolio-projects";
import SmartLink from "@/components/common/SmartLink";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
    // Get the last 4 projects from the portfolioProjects array
    const displayProjects = portfolioProjects.slice(9, 13);

    return (
        <div className="px-project-3-area pt-40 pb-80">
            <div className="container-fluid">
                <div className="row align-items-center mb-25">
                    <div className="col-lg-8">
                        <div className="px-project-3-title-box">
                            <h4 className="px-section-title ff-thunder fs-100 mb-0">
                                Featured Projects
                            </h4>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="px-project-3-top-btn text-lg-end">
                            <SmartLink className="px-btn-border" href="/portfolio-6">
                                View All Projects
                            </SmartLink>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/*  Render the last 4 projects using the CreativeSProjectSingle component */}
                    {displayProjects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;