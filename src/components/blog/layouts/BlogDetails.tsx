import { DribbleIcon, FacebookIcon, InstragramIconTwo, TwittorIcon } from "@/svg/SocialIcons";
import { BlogCommentIcon, BlogEditIcon, BlogQuoteIcon, BlogTimeIcon } from "@/svg";
import PostboxDetailsForm from "@/components/form/PostboxDetailsForm";
import PostboxDetailsAuthor from "../PostboxDetailsAuthor";
import BlogRelatedCard from "../BlogRelatedCard";
import { IdProps } from "@/types/custom-dt";
import BlogComments from "../BlogComments";
import BlogSidebar from "../BlogSidebar";
import { blogs } from "@/data/blog-data";
import Image from "next/image";
import Link from "next/link";

// data layer
const tags = [
    { id: "blog", name: "Blog" },
    { id: "creative", name: "Creative" },
    { id: "portfolio", name: "Portfolio" },
    { id: "theme", name: "Theme" },
];
const socialLinks = [
    { id: "facebook", icon: <FacebookIcon />, link: "#" },
    { id: "twitter", icon: <TwittorIcon />, link: "#" },
    { id: "dribbble", icon: <DribbleIcon />, link: "#" },
    { id: "instagram", icon: <InstragramIconTwo />, link: "#" },
];

const BlogDetailsArea = ({ id }: IdProps) => {
    // display blog related data
    const blogRelatedData = blogs.slice(10, 13);

     // Find the blog that matches the given ID
    const blog = blogs.find((blog) => blog.id === Number(id));

    return (
        <>
            {/* -- postbox area start -- */}
            <div className="tp-blog-details-without-ptb px-blog-details">
                <div className="container container-1230">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tp-blog-details-without-heading text-center">
                                <article className="postbox-details-item">
                                    <div className="postbox-details-info-wrap">
                                        <div className="postbox-tag postbox-details-tag justify-content-center">
                                            <span>
                                                <i>
                                                    <BlogEditIcon />
                                                </i>
                                                Inspiration
                                            </span>
                                            <span>4 min read</span>
                                        </div>
                                        <h4 className="postbox-title fs-80"> {blog?.title || "Lessons learned from professional challenges"}</h4>
                                        <div className="postbox-details-meta d-flex align-items-center justify-content-center">
                                            <div className="postbox-author-box d-flex align-items-center ">
                                                <div className="postbox-author-img">
                                                    <Image width={42} height={42} src={blog?.authorImg || "/assets/img/blog/blog-details/user-1.jpg"} alt="user image" />
                                                </div>
                                                <div className="postbox-author-info">
                                                    <h4 className="postbox-author-name">{blog?.authorName || "Phil Martinez"}</h4>
                                                </div>
                                            </div>
                                            <div className="postbox-meta">
                                                <i>
                                                    <BlogTimeIcon />
                                                </i>
                                                <span>{blog?.date || "April 15, 2026"}</span>
                                            </div>
                                            <div className="postbox-meta">
                                                <i>
                                                    <BlogCommentIcon />
                                                </i>
                                                <span>{blog?.comment || "0 comments"}</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* -- postbox area end -- */}
            {/* -- postbox area start -- */}
            <section id="postbox" className="postbox-area tp-blog-details-ptb pt-80 pb-120">
                <div className="tp-blog-details-banner fix mb-100">
                    <Image className="img-fluid" data-speed=".8" width={1905} height={1429} src="/assets/img/blog/blog-details/blog-details-banner.jpg" alt="blog banner" />
                </div>
                <div className="container container-1230">
                    <div className="row justify-content-center">
                        <div className="col-xxl-8 col-xl-8 col-lg-8">
                            <div className="postbox-wrapper">
                                <div className="postbox-details-text mb-45">
                                    <h4 className="postbox-title fs-34">Using a Query</h4>
                                    <p className="mb-25">
                                        We love to bring designs to life as a developer, and I aim to do this using whatever front end tools
                                        are necessary. My preferred tools are more modern javascript libraries like React.js but I like to use whatever is best for the websites needs. There are several reasons why a business would consider
                                        a rebrand and it doesn’t necessarily mean the business has been unsuccessful.
                                    </p>
                                    <p>
                                        But in order that you may see whence all this born error of those who accuse pleasure and praise pain, I will open the whole matter, and explain the very things which were said by that discoverer of truth and, as it were, the architect of a happy life.
                                    </p>
                                </div>
                                <div className="postbox-details-text mb-40">
                                    <h4 className="postbox-title fs-34">The Spark of an Idea</h4>
                                    <p>
                                        We love to bring designs to life as a developer, and I aim to do this using whatever front end tools are necessary. My preferred tools are more modern javascript libraries like React.js but I like to use whatever is best for the websites needs. There are several reasons why a business would consider a rebrand and it doesn’t necessarily mean the business has been unsuccessful.
                                    </p>
                                </div>
                                <div className="postbox-details-thumb d-flex align-items-center mb-50">
                                    <div>
                                        <Image className="img-fluid" width={382} height={397} src="/assets/img/blog/blog-details/blog-details-sm-1.jpg" alt="blog image" />
                                    </div>
                                    <div>
                                        <Image className="img-fluid" width={382} height={397} src="/assets/img/blog/blog-details/blog-details-sm-2.jpg" alt="blog image" />
                                    </div>
                                </div>
                                <div className="postbox-details-text mb-50">
                                    <p>
                                        faucibus enim. In aliquam tempus porta. Mauris vel finibus risus. Maecenas egestas mi sed neque finibus, nec faucibus ipsum aliquet. Duis scelerisque at odio vel tempus. Morbi a tincidunt nunc, id rutrum erat. Fusce egestas quam vel facilisis tempor.Morbi non orci elementum, sollicitudin mauris laoreet, luctus est. Donec in mi lorem.
                                    </p>
                                </div>
                                <div className="postbox-details-quote-box mb-45">
                                    <blockquote>
                                        <div className="postbox-details-quote-wrap d-flex align-items-start">
                                            <i>
                                                <BlogQuoteIcon />
                                            </i>
                                            <div className="postbox-details-quote">
                                                <p>
                                                    “Success is the result of perfection,
                                                    hard <br /> work, learning from failure, loyalty, &
                                                    persistence”
                                                </p>
                                                <span>Phil Martinez</span>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                                <div className="postbox-details-text mb-45">
                                    <p>
                                        faucibus enim. In aliquam tempus porta. Mauris vel finibus risus. Maecenas egestas mi sed neque finibus, nec faucibus ipsum aliquet. Duis scelerisque at odio vel tempus. Morbi a tincidunt nunc, id rutrum erat. Fusce egestas quam vel facilisis tempor.Morbi non orci elementum, sollicitudin mauris laoreet, luctus est. Donec in mi lorem.
                                    </p>
                                </div>
                                <div className="postbox-details-text mb-25">
                                    <h4 className="postbox-title fs-34">On the specificity of selectors</h4>
                                    <p>
                                        The specificity of the : <span>not()</span> pseudo-class is the specificity of its argument. The :not() pseudo-class does not add to the selector specificity, unlike other pseudo-classes.
                                    </p>
                                </div>
                                <div className="postbox-details-text mb-60">
                                    <p className="mb-30">
                                        The simple <span>selector that</span> : <span>not()</span> takes as an argument can be any of the following:
                                    </p>
                                    <div className="postbox-details-list">
                                        <ul>
                                            <li>Type selector (e.g <span>p, span,</span> etc.)</li>
                                            <li>Class selector (e.g <span>.element, .sidebar,</span> etc.)</li>
                                            <li>ID selector (e. #header)</li>
                                            <li>Pseudo-class selector (e.g <i>:first-child, :last-of-type</i>)</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="postbox-details-code mb-40">
                                    <pre>
                                        {`li:not(.old)::after {
  content: "New!";
  color: deepPink;
}`}
                                    </pre>
                                </div>
                                <div className="postbox-details-text mb-50">
                                    <p>
                                        The specificity of the <span>:not()</span> pseudo-class is the specificity of its argument. The :not() pseudo-class does not add to the selector specificity, unlike other pseudo-classes.
                                    </p>
                                </div>
                                <div className="postbox-details-tag-wrap d-flex justify-content-between align-items-center">
                                    <div className="postbox-details-tag d-flex align-items-center mb-0">
                                        <span>Tagged with :</span>
                                        <div className="tagcloud">
                                            {tags.map((tag) => (
                                                <Link key={tag.id} href="#">
                                                    {tag.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="postbox-details-social">
                                        {socialLinks.map((item) => (
                                            <Link key={item.id} href={item.link}>
                                                <span>{item.icon}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="postbox-details-author mt-30">
                                    <PostboxDetailsAuthor />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
                <div className="container container-1230">
                    <div className="row">
                        <div className="col-xl-8">
                            <BlogComments />
                            <PostboxDetailsForm />
                        </div>
                    </div>
                </div>
            </section>
            {/* -- postbox area end -- */}


            {/* -- related blog area start -- */}
            <div className="tp-blog-details-related-ptb pt-100 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h4 className="postbox-title fs-80 ff-thandar">
                                Related Posts
                            </h4>
                        </div>
                    </div>
                    <div className="row">
                        {blogRelatedData.map((blog) => (
                            <div key={blog.id} className="col-xl-4 col-lg-6">
                                <BlogRelatedCard {...blog} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* -- related blog area end -- */}
        </>
    );
};

export default BlogDetailsArea;