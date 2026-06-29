"use client";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const AboutUsTextSlide = () => {

    return (
        <div className="px-text-inner-slider px-fade-anim">
            <div className="px-text-7-active tp-slider-transtion">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    loop={true}
                    freeMode={true}
                    slidesPerView={'auto'}
                    spaceBetween={0}
                    centeredSlides={true}
                    allowTouchMove={false}
                    speed={20000}
                    autoplay={{
                        delay: 1,
                        disableOnInteraction: true,
                    }}
                >
                    <SwiperSlide>
                        <div className="px-hero-6-text">
                            <span>a new generation of digital creators</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="px-hero-6-text">
                            <span>a new generation of digital creators</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="px-hero-6-text">
                            <span>a new generation of digital creators</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="px-hero-6-text">
                            <span>a new generation of digital creators</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="px-hero-6-text">
                            <span>a new generation of digital creators</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="px-hero-6-text">
                            <span>a new generation of digital creators</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default AboutUsTextSlide;