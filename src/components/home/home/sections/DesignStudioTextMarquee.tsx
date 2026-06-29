"use client";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { text_slider_params } from "@/constant";
import { SLIDER_TEXTS } from "@/data/site-data";
import { StarIcon } from "@/svg/StarIcons";

const TextMarquee = () => {
    return (
        <div
            className="px-text-slider-wrap pt-25 pb-25"
            style={{ backgroundColor: "#F11111" }}>
            <div className="px-text-slider-active tp-slider-transtion">
                <Swiper
                    modules={[FreeMode, Autoplay]}
                    {...text_slider_params}
                >
                    {SLIDER_TEXTS.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="px-text-slider-item d-flex align-items-center">
                                <span>{item.text}</span>
                                <span className="pl-40">
                                    <StarIcon />
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default TextMarquee;
