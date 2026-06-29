import { PortfolioProjectDT } from "@/types/portfolio-dt";
import SmartLink from "@/components/common/SmartLink";
import Image from "next/image";

const ProjectSingleCard:React.FC<PortfolioProjectDT> = ({ id, title, year, image }) => {
    return (
        <div className="col-lg-6">
            <div className="px-project-item mb-20">
                <div className="px-project-content d-flex align-items-center justify-content-between">
                    <h4 className="px-project-title">
                        <SmartLink href={`/portfolio-details-1/${id}`}>{title}</SmartLink>
                    </h4>
                    <span>/ {year}</span>
                </div>

                <div className="px-project-thumb">
                    <SmartLink href={`/portfolio-details-1/${id}`}>
                        <div className="ripple-image">
                            <Image style={{ width: "100%", height: "auto" }} width={905} height={680} src={image} alt={title} />
                        </div>
                    </SmartLink>
                </div>
            </div>
        </div>
    );
};

export default ProjectSingleCard;