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
    { type: "image", src: "/assets/img/gallery/gallery-1.jpg" },
    { type: "image", src: "/assets/img/gallery/gallery-7.jpg" },
    { type: "video", src: "https://html.aqlova.com/videos/pixora/banner-4-1.mp4" },
    { type: "image", src: "/assets/img/gallery/gallery-2.jpg" },
    { type: "image", src: "/assets/img/gallery/gallery-3.jpg" },
    { type: "image", src: "/assets/img/gallery/gallery-1.jpg" },
    { type: "image", src: "/assets/img/gallery/gallery-7.jpg" },
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
        <div className="px-gallery-area pt-140 pb-140">
            <div className="px-gallery-slider-one mb-20">
                <div className="px-gallery-active tp-slider-transtion">
                    <Swiper
                        modules={[Autoplay, FreeMode]}
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
                        modules={[Autoplay, FreeMode]}
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
    );
};

export default PersonalPortfolioGallery;