/* eslint-disable @next/next/no-img-element */
"use client";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import { brand_slider_two_params } from "@/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

const lightBrandLogos = [
    { id: 1, logo: "/assets/img/brand/brand-1-1.png", alt: "Brand 1" },
    { id: 2, logo: "/assets/img/brand/brand-1-2.png", alt: "Brand 2" },
    { id: 3, logo: "/assets/img/brand/brand-1-3.png", alt: "Brand 3" },
    { id: 4, logo: "/assets/img/brand/brand-1-4.png", alt: "Brand 4" },
    { id: 5, logo: "/assets/img/brand/brand-1-5.png", alt: "Brand 5" },
    { id: 6, logo: "/assets/img/brand/brand-1-6.png", alt: "Brand 6" },
    { id: 7, logo: "/assets/img/brand/brand-1-1.png", alt: "Brand 7" },
    { id: 8, logo: "/assets/img/brand/brand-1-2.png", alt: "Brand 8" },
    { id: 9, logo: "/assets/img/brand/brand-1-3.png", alt: "Brand 9" },
    { id: 10, logo: "/assets/img/brand/brand-1-4.png", alt: "Brand 10" },
    { id: 11, logo: "/assets/img/brand/brand-1-5.png", alt: "Brand 11" },
    { id: 12, logo: "/assets/img/brand/brand-1-6.png", alt: "Brand 12" },
];
const darkBrandLogos = [
    { id: 1, logo: "/assets/img/brand/brand-white/brand-1.png", alt: "Brand 1" },
    { id: 2, logo: "/assets/img/brand/brand-white/brand-2.png", alt: "Brand 2" },
    { id: 3, logo: "/assets/img/brand/brand-white/brand-3.png", alt: "Brand 3" },
    { id: 4, logo: "/assets/img/brand/brand-white/brand-4.png", alt: "Brand 4" },
    { id: 5, logo: "/assets/img/brand/brand-white/brand-5.png", alt: "Brand 5" },
    { id: 6, logo: "/assets/img/brand/brand-white/brand-6.png", alt: "Brand 6" },
    { id: 7, logo: "/assets/img/brand/brand-white/brand-4.png", alt: "Brand 7", },
    { id: 8, logo: "/assets/img/brand/brand-white/brand-1.png", alt: "Brand 1" },
    { id: 9, logo: "/assets/img/brand/brand-white/brand-2.png", alt: "Brand 2" },
    { id: 10, logo: "/assets/img/brand/brand-white/brand-3.png", alt: "Brand 3" },
    { id: 11, logo: "/assets/img/brand/brand-white/brand-5.png", alt: "Brand 5" },
    { id: 12, logo: "/assets/img/brand/brand-white/brand-6.png", alt: "Brand 6" },
];

const Brand = () => {
    const isDark = useIsDarkRoute();
    const brands = isDark ? darkBrandLogos : lightBrandLogos;

    return (
        <div className="px-brand-area px-brand-style-3 pb-110 px-fade-anim">
            <div className="container container-1750">
                {/* Subtitle */}
                <div className="row">
                    <div className="col-xl-3">
                        <div className="px-brand-subtitle-box mb-20">
                            <span className="px-section-subtitle">Our Clients</span>
                        </div>
                    </div>
                </div>
                {/* Slider */}
                <div className={`px-brand-slider-wrap mb-10 tp ${!isDark ? "brand-light-bg" : ""}`}>
                    <div className="px-brand-3-active tp-slider-transtion">
                        <Swiper modules={[FreeMode, Autoplay]} {...brand_slider_two_params}>
                            {brands.map((brand) => (
                                <SwiperSlide key={brand.id}>
                                    <div className="px-brand-item">
                                        <img
                                            src={brand.logo}
                                            alt={brand.alt}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;