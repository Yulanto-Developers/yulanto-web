"use client";
import { text_slider_active } from "@/constant";
import { GeometricFlowerIcon } from "@/svg/ShapeIcons";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SLIDES = [
    { id: 1, text: "We develop & create digital future" },
    { id: 2, text: "Infographic and other" },
    { id: 3, text: "We develop & create digital future" },
    { id: 4, text: "Web Design & Development" },
    { id: 5, text: "We develop & create digital future" },
    { id: 6, text: "Infographic and other" },
    { id: 7, text: "We develop & create digital future" },
    { id: 8, text: "Web Design & Development" },
    { id: 9, text: "We develop & create digital future" },
    { id: 10, text: "Infographic and other" },
    { id: 11, text: "We develop & create digital future" },
    { id: 12, text: "Web Design & Development" },
];

const CreativeAgencyTextSlider = () => {
    return (
        <div className="px-text-slider-area">
            <div
                className="px-text-slider-wrap px-text-slider-style-5 pt-30"
                style={{ backgroundColor: "#ff471d" }}
            >
                <div className="px-text-slider-active-2 tp-slider-transtion">
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        {...text_slider_active}
                    >
                        {SLIDES.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                <div className="px-text-slider-item d-flex align-items-center">
                                    <span>{slide.text}</span>
                                    <div className="px-btn-zikzak text-center p-relative ml-40">
                                        <span className="btn-text">
                                            let&apos;s <br /> talk
                                        </span>
                                        <i className="zikzak-bg">
                                            <GeometricFlowerIcon />
                                        </i>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* LINE SHAPE */}
            <div className="px-line-shape mt-10">
                {Array.from({ length: 5 }).map((_, i) => (
                    <span key={`line-shape-${i}`}></span>
                ))}
            </div>
        </div>
    );
};

export default CreativeAgencyTextSlider;