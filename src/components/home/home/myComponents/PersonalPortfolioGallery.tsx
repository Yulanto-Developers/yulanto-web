"use client";
import { gallery_image_slider_params } from "@/constant";
import Image from "next/image";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Type define
type GalleryItemType = {
    type: "image" | "video";
    src: string;
};

// Data with type
const galleryOne: GalleryItemType[] = [
    { type: "image", src: "/assets/img/sample/gallery/img- (1).jpg" },
    { type: "image", src: "/assets/img/sample/gallery/img- (2).jpg" },
    { type: "video", src: "/assets/img/videos/Video-1.mp4" },
    { type: "image", src: "/assets/img/sample/gallery/img- (3).jpg" },
    { type: "image", src: "/assets/img/sample/gallery/img- (7).jpg" },
    { type: "image", src: "/assets/img/sample/gallery/img- (9).jpg" },
    // { type: "video", src: "/assets/img/videos/video-2.mp4" },
];

const galleryTwo: GalleryItemType[] = [
    { type: "image", src: "/assets/img/sample/gallery/img- (6).jpg" },
    { type: "image", src: "/assets/img/sample/gallery/img- (4).jpg" },
    // { type: "video", src: "/assets/img/videos/video-1.mp4" },
    { type: "image", src: "/assets/img/sample/gallery/img- (8).jpg" },
    { type: "image", src: "/assets/img/sample/gallery/img- (5).jpg" },
    { type: "image", src: "/assets/img/sample/gallery/img- (10).jpg" },
    { type: "video", src: "/assets/img/videos/Video-2.mp4" },
];

// Props type
type GalleryItemProps = {
    item: GalleryItemType;
};

// Reusable Slide Item
const GalleryItem = ({ item }: GalleryItemProps) => {
    return (
        <div className="swiper-slide">
            <div className="px-gallery-item">
                {item.type === "video" ? (
                    <video loop muted autoPlay playsInline>
                        <source src={item.src} type="video/mp4" />
                    </video>
                ) : (
                    <img className="img-fluid" src={item.src} alt="gallery" style={{ width: '100%', height: '100%' }} />
                )}
            </div>
        </div>
    );
};

const PersonalPortfolioGallery = () => {

    return (
        <>
            <div className="px-project-area pt-0">
                <div className="container container-1550">
                    <div className="px-project-title-wrap">
                        <div className="row">
                            <div className="col-xl-3">
                                <span className="px-section-subtitle pt-40 blink-ball">

                                    Project Showcase
                                </span>
                            </div>

                            <div className="col-xl-9">
                                <div className="px-project-title-box">
                                    <h3 className="px-section-title text-tenor font-title-cls text-effect">
                                        <span className="word">Featured  </span>
                                        <span>Projects</span>
                                    </h3>
                                    <p className="text-figtree">
                                        From startups to established brands, we've delivered successful website solutions that help businesses grow. Explore our recent web design and development projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="px-gallery-area pt-40 pb-140">
                <div className="px-gallery-slider-one mb-20">

                    <div className="px-gallery-active tp-slider-transtion">
                        <Swiper
                            modules={[Autoplay]}
                            {...gallery_image_slider_params}
                        >
                            {galleryOne.map((item, index) => (
                                <SwiperSlide key={`${item.src}-${index}`}>
                                    <GalleryItem item={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className="px-gallery-slider-two">
                    <div className="px-gallery-active tp-slider-transtion">
                        <Swiper
                            modules={[Autoplay]}
                            dir="rtl"
                            {...gallery_image_slider_params}
                        >
                            {galleryTwo.map((item, index) => (
                                <SwiperSlide key={`${item.src}-${index}`}>
                                    <GalleryItem item={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PersonalPortfolioGallery;