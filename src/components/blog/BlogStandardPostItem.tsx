"use client";
import { BlogBtnArrowIcon, BlogEditIcon, BlogTimeIcon, VideoPlayIcon } from "@/svg";
import { BlockQuoteIcon, BlogNextPrevIcon } from "@/svg/BlogIcons";
import { useVideoModal } from "@/providers/VideoProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import { postbox_slider_params } from "@/constant";
import { Navigation } from "swiper/modules";
import { blogDt } from "@/types/custom-dt";
import Image from "next/image";
import Link from "next/link";

interface blogPropsDt {
    post: blogDt;
}

const BlogStandardPostItem = ({ post }: blogPropsDt) => {
    const { playVideo } = useVideoModal();

    return (
        <article className="postbox-item mb-30">
            {/* IMAGE */}
            {post.type === "image" && (
                <>
                    <div className="postbox-author-wrap d-flex align-items-center justify-content-between mb-30">
                        <div className="postbox-author-box d-flex align-items-center ">
                            <div className="postbox-author-img">
                                <Image width={42} height={42} src="/assets/img/avater/avater-1.png" alt="author image" />
                            </div>
                            <div className="postbox-author-info">
                                <h4 className="postbox-author-name">{post.authorName}</h4>
                                <span>{post.designation}</span>
                            </div>
                        </div>
                        <div className="postbox-meta">
                            <i>
                                <BlogTimeIcon />
                            </i>
                            <span>{post.date}</span>
                        </div>
                    </div>
                    <div className="postbox-thumb mb-35">
                        <Link href={`/blog-details/${post.id}`}>
                            <Image className="img-fluid w-100 h-auto" width={704} height={402} src={post.image} alt="Blog Image" />
                        </Link>
                    </div>
                    <div className="postbox-content">
                        <span className="postbox-tag">
                            <i>
                                <BlogEditIcon />
                            </i>
                            Inspiration
                        </span>
                        <h3 className="postbox-title ff-thandermed"><Link href={`/blog-details/${post.id}`}>{post.title}</Link></h3>
                        <p>{post.desc}</p>
                        <Link className="tp-btn-px postbox-btn" href={`/blog-details/${post.id}`}>
                            <span>
                                <span className="text-1">View More</span>
                                <span className="text-2">View More</span>
                            </span>
                            <i>
                                <BlogBtnArrowIcon />
                                <BlogBtnArrowIcon />
                            </i>
                        </Link>
                    </div>
                </>
            )}

            {/* VIDEO */}
            {post.type === "video" && (
                <>
                    <div className="postbox-author-wrap d-flex align-items-center justify-content-between mb-30">
                        <div className="postbox-author-box d-flex align-items-center">
                            <div className="postbox-author-img">
                                <Image width={42} height={42} src="/assets/img/avater/avater-1.png" alt="author image" />
                            </div>
                            <div className="postbox-author-info">
                                <h4 className="postbox-author-name">Devon Lane</h4>
                                <span>Co-Founder of Pixora</span>
                            </div>
                        </div>
                        <div className="postbox-meta">
                            <i>
                                <BlogTimeIcon />
                            </i>
                            <span>April 15, 2026</span>
                        </div>
                    </div>
                    <div className="postbox-thumb postbox-thumb-overlay p-relative mb-35">
                        <Link href={`/blog-details/${post.id}`}>
                            <Image className="img-fluid" width={811} height={463} src={post.image} alt="Blog Image" />
                        </Link>
                        <div className="postbox-play-btn z-index-1" style={{ cursor: "pointer" }}>
                            <button type="button" aria-label="Play video" onClick={() => post?.videoId && playVideo(post.videoId)} className="popup-video">
                                <span aria-hidden="true">
                                    <VideoPlayIcon />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="postbox-content">
                        <span className="postbox-tag">
                            <i>
                                <BlogEditIcon />
                            </i>
                            Inspiration
                        </span>
                        <h3 className="postbox-title ff-thandermed"><Link href={`/blog-details/${post.id}`}>The role of social media in shaping society</Link></h3>
                        <p>
                            A journey of self-discovery and exploration that allows us to align our values, interests, <br />
                            and skills with our professional pursuitsplatea dictumst[…]
                        </p>
                        <Link className="tp-btn-px postbox-btn" href={`/blog-details/${post.id}`}>
                            <span>
                                <span className="text-1">View More</span>
                                <span className="text-2">View More</span>
                            </span>
                            <i>
                                <BlogBtnArrowIcon />
                                <BlogBtnArrowIcon />
                            </i>
                        </Link>
                    </div>
                </>
            )}

            {post.type === "quote" && (
                <>
                    <div className="postbox-author-wrap d-flex align-items-center justify-content-between mb-30">
                        <div className="postbox-author-box d-flex align-items-center">
                            <div className="postbox-author-img">
                                <Image width={42} height={42} src={post.authorImg} alt="Author Image" />
                            </div>
                            <div className="postbox-author-info">
                                <h4 className="postbox-author-name">{post.authorName}</h4>
                                <span>{post.designation}</span>
                            </div>
                        </div>
                        <div className="postbox-meta">
                            <i>
                                <BlogTimeIcon />
                            </i>
                            <span>{post.date}</span>
                        </div>
                    </div>
                    <div className="postbox-blockquote mb-35">
                        <blockquote>
                            <div className="postbox-blockquote-post">
                                <span className="postbox-blockquote-icon">
                                    <BlockQuoteIcon />
                                </span>
                                <div className="postbox-blockquote-paragraph">
                                    <p>
                                        {post.desc}
                                    </p>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                    <div className="postbox-content">
                        <span className="postbox-tag">
                            <i>
                                <BlogEditIcon />
                            </i>
                            Inspiration
                        </span>
                        <h3 className="postbox-title ff-thandermed mb-0"><Link href="#">{post.title}</Link></h3>
                    </div>
                </>
            )}

            {/* SLIDER */}
            {post.type === "slider" && (
                <>
                    <div className="postbox-author-wrap d-flex align-items-center justify-content-between mb-30">
                        <div className="postbox-author-box d-flex align-items-center ">
                            <div className="postbox-author-img">
                                <Image width={42} height={42} src="/assets/img/avater/avater-1.png" alt="author image" />
                            </div>
                            <div className="postbox-author-info">
                                <h4 className="postbox-author-name">{post.authorName}</h4>
                                <span>{post.designation}</span>
                            </div>
                        </div>
                        <div className="postbox-meta">
                            <i>
                                <BlogTimeIcon />
                            </i>
                            <span>{post.date}</span>
                        </div>
                    </div>
                    <div className="postbox-slider-thumb mb-35">
                        <div className="postbox-slider p-relative">
                            <div className="postbox-slider-active fix">
                                <Swiper
                                    modules={[Navigation]}
                                    {...postbox_slider_params}
                                >
                                    {post?.images?.map((img: string, i: number) => (
                                        <SwiperSlide key={`${img}-${i}`}>
                                            <div className="postbox-slider-item">
                                                <Image width={1137} height={668} className="img-fluid w-100" src={img} alt="image" />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className="postbox-arrow">
                                <button
                                    type="button"
                                    aria-label="Previous post"
                                    className="postbox-arrow-prev"
                                >
                                    <span aria-hidden="true">
                                        <BlogNextPrevIcon direction="prev" />
                                    </span>
                                </button>
                                <button
                                    type="button"
                                    aria-label="Next post"
                                    className="postbox-arrow-next"
                                >
                                    <span aria-hidden="true">
                                        <BlogNextPrevIcon direction="next" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="postbox-content">
                        <span className="postbox-tag">
                            <i>
                                <BlogEditIcon />
                            </i>
                            Inspiration
                        </span>
                        <h3 className="postbox-title ff-thandermed"><Link href={`/blog-details/${post.id}`}>{post.title}</Link></h3>
                        <p>{post.desc}</p>
                        <Link className="tp-btn-px postbox-btn" href={`/blog-details/${post.id}`}>
                            <span>
                                <span className="text-1">View More</span>
                                <span className="text-2">View More</span>
                            </span>
                            <i>
                                <BlogBtnArrowIcon />
                                <BlogBtnArrowIcon />
                            </i>
                        </Link>
                    </div>
                </>
            )}

        </article>
    );
};

export default BlogStandardPostItem;
