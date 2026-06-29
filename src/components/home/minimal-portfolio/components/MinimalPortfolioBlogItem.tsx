import { SmartLink } from "@/components/common";
import { blogDt } from "@/types/custom-dt";
import { BlogTimeIcon } from "@/svg";
import Image from "next/image";

const MinimalPortfolioBlogItem: React.FC<blogDt> = ({ id, image, title, category, date }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="tp-blog-item mb-30">
                <div className="tp-blog-thumb fix mb-25">
                    <Image width={426} height={446}
                        className="w-100 img-fluid"
                        src={image}
                        alt={title}
                    />
                </div>

                <div className="tp-blog-content">
                    <div className="tp-blog-tag-inner d-flex align-items-center mb-20">
                        <span className="tp-blog-tag mr-20">
                            {category}
                        </span>

                        <span className="tp-blog-date">
                            <BlogTimeIcon />
                            {date}
                        </span>
                    </div>

                    <h2 className="tp-blog-tittle">
                        <SmartLink
                            className="common-underline"
                            href={`/blog-details/${id}`}
                        >
                            {title}
                        </SmartLink>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default MinimalPortfolioBlogItem;