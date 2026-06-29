"use client";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import { PhotoProviderWrapper } from "@/components/wrappers";
import { Swiper, SwiperSlide } from "swiper/react";
import { SmartLink } from "@/components/common";
import { PhotoView } from "react-photo-view";
import Image from "next/image";

const slides = [
    {
        id:1,
        img: "/assets/img/update/mix/thumb.jpg",
        text: "Greetings, Traveler",
        title: "Smart platform",
    },
    {
        id:2,
        img: "/assets/img/update/mix/thumb-2.jpg",
        text: "Interactive Mind",
        title: "World’s Relays",
    },
    {
        id:3,
        img: "/assets/img/update/mix/thumb-3.jpg",
        text: "Greetings, Traveler!",
        title: "Bright Captive",
    },
    {
        id:4,
        img: "/assets/img/update/mix/thumb-4.jpg",
        text: "[ UI, Web Design ]",
        title: "Top Paddock",
    },
    {
        id:5,
        img: "/assets/img/update/mix/thumb-5.jpg",
        text: "Digital platform",
        title: "Royal Benz",
    },
];

const PortfolioMixSlicerMain = () => {
    return (
        <div className="tp-portfolio-mix-slider-wrap mix p-relative">
            <PhotoProviderWrapper>
                <Swiper
                    className="tp-portfolio-mix-slider"
                    modules={[Navigation, Pagination, Mousewheel]}
                    speed={1200}
                    loop={false}
                    mousewheel={true}
                    navigation={{
                        nextEl: ".tp-portfolio-mix-button-next",
                        prevEl: ".tp-portfolio-mix-button-prev",
                    }}
                    pagination={{
                        el: ".tp-portfolio-mix-pagination",
                        clickable: true,
                    }}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="tp-portfolio-mix-slider-item">
                                {/* Image */}
                                <div className="tp-portfolio-mix-slider-image">
                                    <Image className="img-fluid w-100 h-auto" width={1920} height={1080} src={slide.img} alt={slide.title} />
                                    <PhotoView key={slide.id} src={slide.img}>
                                        <div className="popup-image">
                                            <i className="fa-regular fa-arrows-maximize"></i>
                                        </div>
                                    </PhotoView>
                                </div>

                                {/* Content */}
                                <div className="tp-portfolio-mix-slider-content">
                                    <span className="tp-portfolio-mix-slide-text">
                                        {slide.text}
                                    </span>
                                    <h2 className="tp-portfolio-mix-slide-heading">
                                        <SmartLink href="/portfolio-1">{slide.title}</SmartLink>
                                    </h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </PhotoProviderWrapper>
            {/* Navigation */}
            <div className="tp-portfolio-mix-slider-navigation overflow-hidden">
                <div className="container-fluid container-1750">
                    <div className="slider-nav">
                        <div className="tp-portfolio-mix-button-prev nav-icon">
                            <i className="fa-solid fa-angle-left"></i>Prev
                        </div>
                        <div className="tp-portfolio-mix-button-next nav-icon">
                            Next<i className="fa-solid fa-angle-right"></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div className="tp-portfolio-mix-pagination"></div>
        </div>
    );
};

export default PortfolioMixSlicerMain;