"use client";
import { text_slider_active } from "@/constant";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const sliderItems = [
    "Award & recognitions",
    "Award & recognitions",
    "Award & recognitions",
];

const TextSlide = ({ items, dir }: { items: string[]; dir?: "rtl" | "ltr" }) => {
    return (
        <div className="tp-text-slide-active tp-slider-transtion" dir={dir}>
            <Swiper
                dir={dir}
                spaceBetween={40}
                modules={[Autoplay, FreeMode]}
                {...text_slider_active}
            >
                {items.map((text, index) => (
                    <SwiperSlide key={`${text}-${index}`}>
                        <div className="tp-text-content">
                            <span>{text}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

const DigitalStudioTextSlider = () => {
    const textSlideItems = [...sliderItems, ...sliderItems]
    return (
        <div className="tp-text-slider-area bf-text-slider-style">

            {/* Top Slider */}
            <div className="tp-text-slide-top">
                <div className="mb-10">
                    <TextSlide items={textSlideItems} />
                </div>
            </div>

            {/* Bottom Slider */}
            <div className="tp-text-slide-bottom">
                <TextSlide items={textSlideItems} dir="rtl" />
            </div>
        </div>
    );
};

export default DigitalStudioTextSlider;