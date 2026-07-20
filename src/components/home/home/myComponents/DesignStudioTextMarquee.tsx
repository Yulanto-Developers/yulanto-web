"use client";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { text_slider_params } from "@/constant";
import { SLIDER_TEXTS } from "@/data/site-data";
import { StarIcon } from "@/svg/StarIcons";

const TextMarquee = () => {
    return (
        <>
        {/* <div
            className="px-text-slider-wrap pt-25 pb-25"
            style={{ backgroundColor: "#053456" }}>
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
            
        </div> */}
         <div className="container-fluid mt-50">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="px-hero-2-bottom text-center p-relative px-fade-anim" data-delay=".3">
                            <h4 className="px-hero-2-text d-flex align-items-end justify-content-center">
                                design <i className="d-none d-xl-block"><span>©Yulanto <br /> Live in a World <br /> of creative designs</span></i>Studio
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TextMarquee;
