import MinimalPortfolioBlogItem from "../components/MinimalPortfolioBlogItem";
import { SmartLink } from "@/components/common";
import { blogs } from "@/data/blog-data";

const MinimalPortfolioBlog = () => {
    //display items
    const displayBlogItems = blogs.slice(13, 16);

    return (
        <div className="tp-blog-area pt-150 pb-120">
            <div className="container container-1350">
                {/* Header */}
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-8">
                        <div className="tp-blog-tittle-wrap">
                            <h2 className="tp-section-tittle reveal-text mb-50">
                                Blog insight
                            </h2>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-4">
                        <div className="tp-blog-btn text-sm-end mb-45">
                            <SmartLink
                                href="/blog"
                                className="tp-btn d-inline-flex align-items-center"
                            >
                                <span>
                                    <span className="text-1">View All</span>
                                    <span className="text-2">View All</span>
                                </span>
                            </SmartLink>
                        </div>
                    </div>
                </div>

                {/* Blog Items */}
                <div className="row">
                    {displayBlogItems.map((blog) => (
                        <MinimalPortfolioBlogItem {...blog} key={blog.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MinimalPortfolioBlog;