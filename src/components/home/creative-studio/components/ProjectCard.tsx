import { PortfolioProjectDT } from '@/types/portfolio-dt';
import SmartLink from '@/components/common/SmartLink';
import Image from 'next/image';
import React from 'react';

const ProjectCard: React.FC<PortfolioProjectDT> = ({ id, image, title, categories }) => {
    return (
        <div key={id} className="col-lg-6">
            <div className="px-project-3-item mb-55">
                <SmartLink href={`/portfolio-details-2/${id}`}>
                    <div className="px-project-3-thumb ripple-image">
                        <Image
                            style={{ width: "100%", height: "auto" }}
                            src={image}
                            alt={title}
                            width={905}
                            height={680}
                        />
                    </div>
                </SmartLink>
                <div className="px-project-3-content d-flex justify-content-between align-items-center">
                    <h4 className="px-project-3-title">
                        <SmartLink href={`/portfolio-details-2/${id}`}>{title}</SmartLink>
                    </h4>
                    <div className="px-project-3-category">
                        {categories.map((cat) => (
                            <span key={`${cat}-${id}`}>{cat}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;