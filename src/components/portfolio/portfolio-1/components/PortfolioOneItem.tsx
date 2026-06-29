import { PortfolioProjectDT } from "@/types/portfolio-dt";
import { SmartLink } from "@/components/common";
import Image from "next/image";

const PortfolioOneItem: React.FC<PortfolioProjectDT> = ({ id, type, video, image, title, categories }) => {
    return (
        <div className="col-lg-6">
            <div className="px-project-3-item mb-55">
                <SmartLink href={`/portfolio-details-1/${id}`}>
                    <div className="px-project-3-thumb">
                        {type === "video" ? (
                            <video loop muted autoPlay playsInline>
                                <source src={video} type="video/mp4" />
                            </video>
                        ) : (
                            <div className="ripple-image">
                                <Image
                                    className="img-fluid w-100 h-auto"
                                    width={905}
                                    height={680}
                                    src={image}
                                    alt={title}
                                />
                            </div>
                        )}
                    </div>
                </SmartLink>
                <div className="px-project-3-content d-flex justify-content-between align-items-center">
                    <h4 className="px-project-3-title">
                        <SmartLink href={`/portfolio-details-1/${id}`}>
                            {title}
                        </SmartLink>
                    </h4>
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

export default PortfolioOneItem;