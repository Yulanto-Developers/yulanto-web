"use client";
import BlogSearchForm from "@/components/form/BlogSearchForm";
import BlogCard from "@/components/shared/components/BlogCard";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { blogs } from "@/data/blog-data";
import { useState } from "react";

const categories = [
    "All",
    "Design",
    "Motion design",
    "Branding",
    "AI Tools",
    "UX",
    "Web experience",
    "3d modeling",
];

const BlogMain = () => {

    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredBlogs = blogs.slice(0, 6).filter((blog) => {
        const matchCategory =
            activeCategory === "All" ||
            blog?.tags?.includes(activeCategory);

        const matchSearch =
            blog.title.toLowerCase().includes(searchQuery.toLowerCase());

        return matchCategory && matchSearch;
    });

    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                staggerChildren: 0.08
            }
        },
        exit: {
            opacity: 0,
            y: -40,
            transition: {
                duration: 0.4,
                ease: "easeIn"
            }
        }
    };

    return (
        <div className="in-blog-list-area px-orange-style pb-90">
            <div className="container container-1750">
                <div className="in-blog-list-category-wrap">
                    <div className="row align-items-center">
                        <div className="col-xl-10">
                            <div className="in-blog-list-category">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        type="button"
                                        onClick={() => setActiveCategory(cat)}
                                        className={activeCategory === cat ? "active" : ""}
                                        style={{ cursor: "pointer", marginRight: "5px" }}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="in-blog-list-search d-flex justify-content-xl-end">
                                <BlogSearchForm onSearch={setSearchQuery} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog Items with animation */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        className="tab-content p-relative"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="row gx-30">
                            {filteredBlogs.map((item) => (
                                <BlogCard key={item.id} {...item} />
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default BlogMain;