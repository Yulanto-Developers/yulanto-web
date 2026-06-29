/* eslint-disable @next/next/no-img-element */
"use client";
import { brand_slider_two_params } from "@/constant";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { brands } from "@/data/brand-data";

const Brand = () => {
    return (
        <section className="px-brand-area px-brand-style-4 pt-90">
            <div className="container">
                <div className="px-brand-slider-wrap">
                    <div className="px-brand-3-active tp-slider-transtion">
                        <Swiper
                            modules={[FreeMode, Autoplay]}
                            {...brand_slider_two_params}
                        >
                            {brands.map((brand) => (
                                <SwiperSlide key={brand.id}>
                                    <div className="px-brand-item">
                                        <img
                                            src={brand.image}
                                            alt={brand.alt}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brand;