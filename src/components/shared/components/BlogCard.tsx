import { SmartLink } from '@/components/common';
import { blogDt } from '@/types/custom-dt';
import Image from 'next/image';
import React from 'react';

const BlogCard: React.FC<blogDt> = ({ id, title, image, date }) => {
    return (
        <div key={id} className="col-xl-4 col-lg-6">
            <div className="px-blog-item mb-40">
                <SmartLink href={`/blog-details/${id}`}>
                    <div className="px-blog-thumb ripple-image">
                        <Image
                            src={image}
                            alt={title}
                            width={800}
                            height={600}
                            className="img-fluid"
                        />
                    </div>
                </SmartLink>

                <div className="px-blog-content">
                    <span className="px-blog-category">
                        Studio News
                    </span>

                    <h4 className="px-blog-title">
                        <SmartLink href={`/blog-details/${id}`}>{title}</SmartLink>
                    </h4>

                    <span className="px-blog-meta">
                        Published on {date}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;