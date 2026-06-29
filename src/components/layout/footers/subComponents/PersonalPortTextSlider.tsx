"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { footer_text_slider_params } from "@/constant";

const sliderTexts = ["get in touch", "get in touch", "get in touch", "get in touch"];

const PersonalPortTextSlider = () => {
    return (
        <div className="px-hero-6-slider px-footer-3-slider-style mb-100">
            <div className="swiper-container px-footer-3-active">
                <div className="swiper-wrapper slide-transtion">
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        {...footer_text_slider_params}
                    >
                        {sliderTexts.map((text, index) => (
                            <SwiperSlide key={`${text}-${index}`}>
                                <div className="px-hero-6-text">
                                    <span>
                                        {text} <i>_</i>
                                    </span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default PersonalPortTextSlider;