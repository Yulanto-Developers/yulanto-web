"use client";

import { text_slider_active } from "@/constant";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const MinimalPortfolioTextSlider = ({ sectionSpacing = "pt-150" }) => {

    const slides = [
        { id: 1, text: "Award & recognitions" },
        { id: 2, text: "Award & recognitions" },
        { id: 3, text: "Award & recognitions" },
    ];

    const duplicatedSlides = [...slides, ...slides];
    
    return (
        <div className={`tp-text-slider-area bf-text-slider-style ${sectionSpacing}`}>
            {/* Top Slider */}
            <div className="tp-text-slide-top">
                <div className="tp-text-slide-active mb-10 tp-slider-transtion">
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        spaceBetween={80}
                        {...text_slider_active}
                    >
                        {duplicatedSlides.map((slide, i) => (
                            <SwiperSlide key={`${slide.id}-${i}`}>
                                <div className="tp-text-content">
                                    <span>{slide.text}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Bottom Slider */}
            <div className="tp-text-slide-bottom">
                <div className="tp-text-slide-active tp-slider-transtion">
                    <Swiper
                        dir="rtl"
                        modules={[Autoplay, FreeMode]}
                        spaceBetween={80}
                        {...text_slider_active}
                    >
                        {duplicatedSlides.map((slide, i) => (
                            <SwiperSlide key={`${slide.id}-${i}`}>
                                <div className="tp-text-content">
                                    <span>{slide.text}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default MinimalPortfolioTextSlider;