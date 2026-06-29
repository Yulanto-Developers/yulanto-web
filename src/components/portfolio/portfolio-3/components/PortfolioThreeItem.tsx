import { SmartLink } from "@/components/common";

interface portfolioIDatatem {
    id: number,
    title: string,
    service: string,
    year: string,
}
interface portfolioIDatatemProps extends portfolioIDatatem {
    index: number,
}


const PortfolioThreeItem: React.FC<portfolioIDatatemProps> = ({ id, title, service, year, index }) => {
    return (
        <SmartLink href="/portfolio-details-1">
            <div
                className="px-project-6-item is-active"
                data-index-number={index}
            >
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-xl-9">
                            <div className="px-project-inner-wrapper">
                                <div className="row align-items-center">
                                    <div className="col-lg-7">
                                        <div className="px-project-6-content d-flex">
                                            <h4 className="px-project-6-title">
                                                {title}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="px-project-inner-wrap-content d-flex justify-content-between">
                                            <span>{service}</span>
                                            <span>{year}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SmartLink>
    );
};

export default PortfolioThreeItem;