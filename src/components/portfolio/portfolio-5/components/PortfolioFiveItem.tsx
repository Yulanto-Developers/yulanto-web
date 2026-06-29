import { PortfolioProjectDT } from "@/types/portfolio-dt";
import { SmartLink } from "@/components/common";
import Image from "next/image";

const PortfolioFiveItem: React.FC<PortfolioProjectDT> = ({ id, filters, title, year, image }) => {
    return (
        <div className={`col-lg-6 grid-item ${filters?.join(" ")}`}>
            <div className="px-project-item mb-20">
                <div className="px-project-content d-flex align-items-center justify-content-between">
                    <h4 className="px-project-title">
                        <SmartLink href={`/portfolio-details-2/${id}`}>
                            {title}
                        </SmartLink>
                    </h4>
                    <span>/ {year}</span>
                </div>
                <div className="px-project-thumb">
                    <SmartLink href={`/portfolio-details-2/${id}`}>
                        <div className="ripple-image">
                            <Image width={905} height={680} className="img-fluid"
                                src={image}
                                alt={title}
                            />
                        </div>
                    </SmartLink>
                </div>
            </div>
        </div>
    );
};

export default PortfolioFiveItem;