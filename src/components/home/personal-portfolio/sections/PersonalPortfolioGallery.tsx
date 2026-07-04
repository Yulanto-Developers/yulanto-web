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
    { type: "image", src: "/assets/img/sample/b1.jpg" },
    { type: "image", src: "/assets/img/sample/b2.jpg" },
    { type: "video", src: "https://html.aqlova.com/videos/pixora/banner-4-1.mp4" },
    { type: "image", src: "/assets/img/sample/b1.jpg" },
    { type: "image", src: "/assets/img/sample/b2.jpg" },
    { type: "image", src: "/assets/img/sample/b1.jpg" },
    { type: "image", src: "/assets/img/sample/b2.jpg" },
    { type: "video", src: "https://html.aqlova.com/videos/pixora/banner-4-1.mp4" },
];

const galleryTwo: GalleryItemType[] = [
    { type: "image", src: "/assets/img/gallery/gallery-4.jpg" },
    { type: "video", src: "https://html.aqlova.com/videos/pixora/banner-4-1.mp4" },
    { type: "image", src: "/assets/img/gallery/gallery-5.jpg" },
    { type: "image", src: "/assets/img/gallery/gallery-6.jpg" },
    { type: "image", src: "/assets/img/gallery/gallery-7.jpg" },
    { type: "image", src: "/assets/img/gallery/gallery-4.jpg" },
    { type: "video", src: "https://html.aqlova.com/videos/pixora/banner-4-1.mp4" },
    { type: "image", src: "/assets/img/gallery/gallery-5.jpg" },
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
                    <Image className="img-fluid" src={item.src} alt="gallery" width={520} height={400} />
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

                                    Our Works
                                </span>
                            </div>

                            <div className="col-xl-9">
                                <div className="px-project-title-box">
                                    <h3 className="px-section-title text-effect">
                                        <span>Recent </span>
                                        <span>Case</span>
                                    </h3>
                                    <p>
                                        We&apos;ve helped businesses across industries achieve their goals.
                                        <br />
                                        Here are some of our recent projects.
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