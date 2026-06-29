import {
    BlogDribbleIcon,
    BlogInstragramIcon,
    BlogTwittorIcon,
} from "@/svg/BlogIcons";
import BlogStandardSearchForm from "../form/BlogStandardSearchForm";
import Link from "next/link";
import Image from "next/image";

//  data separated
const categories = [
    { id: "articles", name: "Articles", count: 8 },
    { id: "business", name: "Business", count: 4 },
    { id: "family-divorce", name: "Family & Divorce", count: 12 },
    { id: "web-design", name: "Web Design", count: 16 },
];

const latestPosts = [
    {
        id: 1,
        img: "/assets/img/avater/sidebar-1.jpg",
        category: "Design",
        title: "Fueling ambition & Achieving your goals",
        date: "July 15, 2023",
    },
    {
        id: 2,
        img: "/assets/img/avater/sidebar-2.jpg",
        category: "Design",
        title: "Behind the scenes of creative processes",
        date: "July 15, 2023",
    },
    {
        id: 3,
        img: "/assets/img/avater/sidebar-3.jpg",
        category: "Design",
        title: "Starting seo as your home business",
        date: "July 15, 2023",
    },
];

const tags = [
  { id: "creative", name: "Creative" },
  { id: "design-trends", name: "Design Trends" },
  { id: "development", name: "Development" },
  { id: "lifestyle", name: "Lifestyle" },
  { id: "pixora", name: "Pixora" },
];

const socialLinks = [
    { id: "twitter", icon: <BlogTwittorIcon />, link: "#" },
    { id: "dribbble", icon: <BlogDribbleIcon />, link: "#" },
    { id: "instagram", icon: <BlogInstragramIcon />, link: "#" },
];

const BlogSidebar = () => {
    return (
        <div className="sidebar-wrapper">

            {/* Search */}
            <div className="sidebar-widget mb-30">
                <div className="sidebar-search">
                    <BlogStandardSearchForm />
                </div>
            </div>

            {/* Author */}
            <div className="sidebar-widget mb-55">
                <div className="sidebar-widget-author text-center">
                    <div className="sidebar-widget-author-img">
                        <Image width={60} height={60} src="/assets/img/avater/avater-2.png" alt="author" />
                    </div>

                    <div className="sidebar-widget-author-content">
                        <h4 className="sidebar-widget-author-name">Richard Scott</h4>
                        <span>Content writer at Kanik</span>
                        <p>
                            Crafting Digital Experiences <br /> with Purpose!
                        </p>
                    </div>

                    <div className="sidebar-widget-author-social mb-30">
                        {socialLinks.map((item) => (
                            <Link key={item.id} href={item.link}>
                                <span>{item.icon}</span>
                            </Link>
                        ))}
                    </div>

                    <div className="sidebar-widget-author-btn">
                        <Link className="tp-btn-px sidebar-btn w-100" href="#">
                            <span>
                                <span className="text-1">Pixora Theme</span>
                                <span className="text-2">Pixora Theme</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="sidebar-widget mb-55">
                <h3 className="sidebar-widget-title">Category</h3>

                <div className="sidebar-widget-category">
                    <ul>
                        {categories.map((item) => (
                            <li key={item.id}>
                                <Link
                                    className="d-flex align-items-center justify-content-between"
                                    href="#"
                                >
                                    {item.name}
                                    <span>{item.count}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Latest Posts */}
            <div className="sidebar-widget mb-55">
                <h3 className="sidebar-widget-title">Latest Posts</h3>
                <div className="rc-post-wrap">
                    {latestPosts.map((post) => (
                        <div key={post.id} className="rc-post d-flex align-items-center">
                            <div className="rc-post-thumb">
                                <Link href="#">
                                    <Image className="img-fluid w-100 h-auto" width={140} height={140} src={post.img} alt="post" />
                                </Link>
                            </div>

                            <div className="rc-post-content">
                                <div className="rc-post-category">
                                    <Link href="#">{post.category}</Link>
                                </div>

                                <h3 className="rc-post-title">
                                    <Link href="#">{post.title}</Link>
                                </h3>

                                <div className="rc-post-meta">
                                    <span>{post.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 🏷 Tags */}
            <div className="sidebar-widget">
                <h3 className="sidebar-widget-title">Tags</h3>
                <div className="sidebar-widget-content">
                    <div className="tagcloud">
                        {tags.map((tag) => (
                            <Link key={tag.id} href="#">
                                {tag.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSidebar;