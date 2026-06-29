"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { StarIcon } from "@/svg/StarIcons";
import { text_slider_params } from "@/constant";
import { Autoplay, FreeMode } from "swiper/modules";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";

const marqueeItems = [
    "Brand Identity Design",
    "Infographic and other",
    "Branding & Identity",
    "Web Design & Development",
    "UI / UX Design",
    "Complex brand design",
    "Complex brand design",
    "Brand Identity Design",
    "Brand Identity Design",
    "Infographic and other",
    "Branding & Identity",
    "Web Design & Development",
    "UI / UX Design",
];

const MarqueeItem = ({ text }: { text: string }) => (
    <div className="px-text-slider-item d-flex align-items-center">
        <span>{text}</span>
        <span className="pl-40">
            <StarIcon fillColor="currentcolor" />
        </span>
    </div>
);

const CreativeStudioTextMarquee = () => {
    const isDarkTheme = useIsDarkRoute();
    const sectionBackground = isDarkTheme ? "#1D1D1F" : "#FEFFF8";

    return (
        <section
            className="px-text-slider-wrap px-text-slider-style-3 pt-15 pb-15"
            style={{ backgroundColor: sectionBackground }}
        >
            <div className="px-text-slider-active tp-slider-transtion">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    {...text_slider_params}
                >
                    {marqueeItems.map((item, idx) => (
                        <SwiperSlide key={`${item}-${idx}`}>
                            <MarqueeItem text={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default CreativeStudioTextMarquee;