import { PortfolioProjectDT } from "@/types/portfolio-dt";
import SmartLink from "@/components/common/SmartLink";
import Image from "next/image";

const ProjectSingleCard: React.FC<PortfolioProjectDT> = ({
    id,
    title,
    year,
    image,
    description,
    categories,
}) => {
    return (
        <div className="portfolio-project-card">
            <div className="px-project-item mb-20">

                <div className="px-project-content d-flex align-items-center justify-content-between">
                    <h4 className="px-project-title">
                        <SmartLink href={`/portfolio-details-1/${id}`}>
                            {title}
                        </SmartLink>
                    </h4>

                    <span>/ {year}</span>
                </div>

                <div className="px-project-thumb">
                    <SmartLink href={`/portfolio-details-1/${id}`}>
                        <div className="ripple-image project-hover-card">

                            <Image
                                src={image}
                                alt={title}
                                width={905}
                                height={680}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                }}
                            />

                            <div className="project-hover-overlay">
                                <div className="project-hover-content">

                                    {description && (
                                        <p>{description}</p>
                                    )}

                                </div>
                            </div>

                        </div>
                    </SmartLink>
                </div>

                {categories && (
                    <div className="project-categories">
                        {Array.isArray(categories)
                            ? categories.map((category, index) => (
                                <span
                                    key={index}
                                    className="project-category"
                                >
                                    #{category}
                                </span>
                            ))
                            : (
                                <span className="project-category">
                                    #{categories}
                                </span>
                            )}
                    </div>
                )}

            </div>
        </div>
    );
};

export default ProjectSingleCard;