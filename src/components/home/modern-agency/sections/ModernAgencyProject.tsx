import { portfolioProjects } from "@/data/portfolio-projects";
import SmartLink from "@/components/common/SmartLink";
import Image from "next/image";

const Project = () => {
    //display only 5 projects for modern agency portfolio
    const displayProjects = portfolioProjects.slice(13, 18);

    return (
        <div className="px-project-4-area px-project-4-style pb-50">
            <div className="container container-1870">
                <div className="row">
                    {displayProjects.map((project) => (
                        <div
                            key={project.id}
                            className={project.large ? "col-xl-12" : "col-lg-6"}
                        >
                            <div
                                className={`px-project-3-item ${project.large ? "mb-65" : "mb-75"
                                    }`}
                            >
                                <SmartLink href={`/portfolio-details-1/${project.id}`}>
                                    {project.video ? (
                                        <div className="px-video-4-wrap fix mb-25">
                                            <video
                                                data-speed="0.1"
                                                loop
                                                muted
                                                autoPlay
                                                playsInline
                                            >
                                                <source
                                                    src={project.video}
                                                    type="video/mp4"
                                                />
                                            </video>
                                        </div>
                                    ) : (
                                        <div className="px-project-3-thumb ripple-image">
                                            <Image
                                                src={project.image!}
                                                alt={project.title}
                                                width={905}
                                                height={680}
                                                className="w-100"
                                            />
                                        </div>
                                    )}
                                </SmartLink>

                                <div className="px-project-3-content d-flex justify-content-between align-items-start">
                                    <div className="px-project-3-inner-box">
                                        <h4 className="px-project-3-title">
                                            <SmartLink href={`/portfolio-details-1/${project.id}`}>
                                                <span>{project.title}</span>
                                            </SmartLink>
                                        </h4>
                                        {project.description && (
                                            <p>{project.description}</p>
                                        )}
                                    </div>

                                    <div className="px-project-3-category">
                                        {project.categories.map((cat) => (
                                            <span key={`${project.id}-${cat}`}>{cat}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;