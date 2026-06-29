import { BreadcrumbArrowIcon } from "@/svg";
import { ScrollLink } from "../common";
import Link from "next/link";

const BlogBreadcurmb = () => {
    return (
        <div className="px-breadcrumb-area px-breadcrumb-ptb ">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-12">
                        <div className="px-breadcrumb-content text-center">
                            <h3 className="px-breadcrumb-title">Expert Insights</h3>
                            <div className="px-breadcrumb-list mb-5">
                                <span><Link href="/">Home</Link></span>
                                <span className="dvdr"><i>|</i></span>
                                <span>Blog Classic</span>
                            </div>
                            <div className="px-breadcrumb-scrolldown smooth">
                                <ScrollLink target="#postbox">
                                    <span>
                                        <BreadcrumbArrowIcon />
                                    </span>
                                </ScrollLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogBreadcurmb;