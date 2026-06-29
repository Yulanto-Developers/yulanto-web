import BlogStandardPostItem from "../BlogStandardPostItem";
import BlogPagination from "../BlogPagination";
import BlogSidebar from "../BlogSidebar";
import { blogs } from "@/data/blog-data";

const BlogStandard = () => {
    // display blog items
    const displayBlogData = blogs.slice(6, 10);

    return (
        // --postbox area start-- 
        <section id="postbox" className="postbox-ptb pt-110 pb-120">
            <div className="container container-1330">
                <div className="row">
                    <div className="col-xxl-8 col-xl-8 col-lg-8">
                        <div className="postbox-wrapper">

                            {displayBlogData.map((post) => (
                                <BlogStandardPostItem key={post.id} post={post} />
                            ))}
                            <div className="basic-pagination-wrap">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <BlogPagination />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogStandard;