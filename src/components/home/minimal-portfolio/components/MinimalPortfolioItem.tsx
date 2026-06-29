import { PortfolioProjectDT } from '@/types/portfolio-dt';
import { SmartLink } from '@/components/common';
import Image from 'next/image';

const MinimalPortfolioItem: React.FC<PortfolioProjectDT> = ({ id, title, year, image }) => {
    return (
        <div className="grid-item">
            <div className="project-item project-style-3 hover-play">
                <div className="project-item-inner">

                    <div className="bf-portfolio-post-thumbnail">
                        <div className="video-container">
                            <SmartLink href={`/portfolio-details-1/${id}`}>
                                <Image width={1350} height={720}
                                    className="w-100 img-fluid"
                                    src={image}
                                    alt={title}
                                />
                            </SmartLink>
                        </div>
                    </div>

                    <div className="bf-portfolio-content">
                        <span className="bf-portfolio-vp-text-top">
                            <SmartLink href={`/portfolio-details-1/${id}`}>
                                {title}
                            </SmartLink>
                        </span>
                        <span className="bf-portfolio-vp-text-middle">
                            /{year}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MinimalPortfolioItem;