import BlogCard from "../../../shared/components/BlogCard";
import { blogs } from "@/data/blog-data";

const Blog = () => {
    //blog data
    const displayBlogs = blogs.slice(0, 3); // Display only the first 3 blogs

    return (
        <div className="px-blog-area pt-120 pb-80 px-fade-anim">
            <div className="container container-1750">
                {/* Title */}
                <div className="row">
                    <div className="col-xl-6">
                        <div className="px-blog-title-box">
                            <h4 className="px-section-title ff-thunder fs-100 mb-40">
                                Latest Blog
                            </h4>
                        </div>
                    </div>
                </div>

                {/* Blog Items */}
                <div className="row">
                    {displayBlogs.map((blog) => (
                        <BlogCard key={blog.id} {...blog} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;