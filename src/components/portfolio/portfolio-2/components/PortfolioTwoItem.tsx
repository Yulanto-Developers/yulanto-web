import { PortfolioProjectDT } from "@/types/portfolio-dt";
import { SmartLink } from "@/components/common";
import Image from "next/image";

interface PortfolioPropsItem extends PortfolioProjectDT {
    isFirstItem: boolean;
}

const PortfolioTwoItem: React.FC<PortfolioPropsItem> = ({ id, image, type, title, video, description, categories, isFirstItem }) => {
    return (
        <div className={isFirstItem ? "col-xl-12" : "col-lg-6"}>
            <div className={`px-project-3-item ${isFirstItem ? "mb-65" : "mb-75"}`}>
                <SmartLink href={`/portfolio-details-2/${id}`}>
                    {type === "video" ? (
                        <div className="px-video-4-wrap mb-25">
                            <video loop muted autoPlay playsInline>
                                <source src={video} type="video/mp4" />
                            </video>
                        </div>
                    ) : (
                        <div className="px-project-3-thumb">
                            <div className="ripple-image">
                                <Image
                                    className="img-fluid w-100 h-auto"
                                    width={905}
                                    height={680}
                                    src={image}
                                    alt={title}
                                />
                            </div>
                        </div>
                    )}
                </SmartLink>

                <div className="px-project-3-content d-flex justify-content-between align-items-start">
                    <div className="px-project-3-inner-box">
                        <h4 className="px-project-3-title">
                            <SmartLink href={`/portfolio-details-2/${id}`}>
                                {title}
                            </SmartLink>
                        </h4>
                        {!isFirstItem && (
                            <p>{description}</p>
                        )}
                    </div>
                    <div className="px-project-3-category">
                        {categories?.map((category: string, index: number) => (
                            <span key={`${category}-${index}`}>{category}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioTwoItem;