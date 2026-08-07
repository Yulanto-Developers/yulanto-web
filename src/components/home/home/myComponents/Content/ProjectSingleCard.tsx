import { PortfolioProjectDT } from "@/types/portfolio-dt";
import SmartLink from "@/components/common/SmartLink";
import Image from "next/image";
import { moveItem } from "framer-motion";

const ProjectSingleCard: React.FC<PortfolioProjectDT> = ({
    id,
    title,
    year,
    image,
    description,
    categories,
    highlights
}) => {
    return (
        <div className="portfolio-project-card">
            <div className="px-project-item mb-lg-20">

                <div className="px-project-content d-flex align-items-center justify-content-between">
                    <h4 className="px-project-title">
                        <SmartLink href={`/`}>
                            {title}
                        </SmartLink>
                    </h4>

                    <span>/ {year}</span>
                </div>

                <div className="px-project-thumb">
                    <SmartLink href={`/`}>
                        <div className="ripple-image project-hover-card">

                            <Image
                                src={image}
                                alt={title}
                                width={905}
                                height={680}
                                style={{
                                    width: "100%",
                                    height: "450px",
                                    objectFit: "cover"
                                }}
                            />

                            <div className="project-hover-overlay">
                                <div className="project-hover-content">

                                    {description && (
                                        <p className="text-figtree ">{description}</p>
                                    )}
                                    {highlights && (
                                        <div className="project-highlights">
                                            <h6 className="key-cls">Key Highlights</h6>

                                            <ul className="list-style-cls">
                                                {highlights.map((item, index) => (
                                                    <li key={index} className="text-figtree">
                                                        <span className="highlight-icon">
                                                            <i className="fa-solid fa-check"></i>
                                                        </span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
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
                                    className="project-category text-figtree"
                                >
                                    {category}
                                </span>
                            ))
                            : (
                                <span className="project-category text-figtree">
                                    {categories}
                                </span>
                            )}
                    </div>
                )}

            </div>
        </div>
    );
};

export default ProjectSingleCard;