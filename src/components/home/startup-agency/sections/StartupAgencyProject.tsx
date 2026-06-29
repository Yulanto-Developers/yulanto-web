
import { portfolioProjects } from "@/data/portfolio-projects";
import ProjectSingleCard from "../components/ProjectSingleCard";
import { PlusIcon } from "@/svg";

const StartupAgencyProject = () => {
    // display project items
    const displayProjectData = portfolioProjects.slice(0,4);

    return (
        <section className="px-project-area pt-100 pb-130">
            <div className="container container-1550">
                {/* TITLE */}
                <div className="px-project-title-wrap mb-80">
                    <div className="row">
                        <div className="col-xl-3">
                            <span className="px-section-subtitle pt-40">
                                <i>
                                    <PlusIcon />
                                </i>
                                Our Projects
                            </span>
                        </div>

                        <div className="col-xl-9">
                            <div className="px-project-title-box">
                                <h3 className="px-section-title mb-25 text-effect">
                                    <span>Recent </span>
                                    <span>Case</span>
                                </h3>
                                <p>
                                    We&apos;ve helped businesses across industries achieve their goals.
                                    <br />
                                    Here are some of our recent projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PROJECT LIST */}
                <div className="row gx-20">
                    {displayProjectData.map((project) => (
                        <ProjectSingleCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StartupAgencyProject;
