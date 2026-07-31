"use client";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles in your global CSS file or here if your framework setup allows it:
import "swiper/css";

const brandLogosDark = [
    "/assets/img/brand/Logo-1.jpg",
    "/assets/img/brand/Logo-1.png",
    "/assets/img/brand/brand-1-3.png",
    "/assets/img/brand/brand-1-4.png",
    "/assets/img/brand/brand-1-5.png",
    "/assets/img/brand/brand-1-6.png",
    "/assets/img/brand/brand-1-6.png",
    "/assets/img/brand/brand-1-6.png",
    "/assets/img/brand/brand-1-6.png",
];
const brandLogosWhite = [
    "/assets/img/brand/image-1.jpg",
    "/assets/img/brand/brand-white/image-1.png",
    "/assets/img/brand/brand-white/brand-3.png",
    "/assets/img/brand/brand-white/brand-4.png",
    "/assets/img/brand/brand-white/brand-5.png",
    "/assets/img/brand/brand-white/brand-6.png",
    "/assets/img/brand/brand-white/brand-6.png",
    "/assets/img/brand/brand-white/brand-6.png",
    "/assets/img/brand/brand-white/brand-6.png",
];

const CreativeAgencyBrand = () => {
    const isDarkTheme = useIsDarkRoute();
    const brands = isDarkTheme ? brandLogosWhite : brandLogosDark;

    return (
        <div className="px-brand-area px-brand-style-5">
            <div className="container container-1550">
                <div className="row gx-0">
                    <div className="col-12">
                        <Swiper
                            modules={[Autoplay]}
                            loop={true}
                            speed={1000}
                            autoplay={{
                                delay: 250000,
                                disableOnInteraction: false,
                            }}
                            // Breakpoints match your original bootstrap layout grid flawlessly
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                576: {
                                    slidesPerView: 3,
                                    spaceBetween: 20
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 30
                                },
                                992: {
                                    slidesPerView: 5,
                                    spaceBetween: 40
                                },
                                1200: {
                                    slidesPerView: 4,
                                    spaceBetween: 40
                                }
                            }}
                            className="px-brand-active"
                        >
                            {brands.map((img, index) => (
                                <SwiperSlide key={img}>
                                    <div className="px-brand-item text-center">
                                        <Image
                                            className="img-fluid object-contain mx-auto"
                                            width={90}
                                            height={40}
                                            src={img}
                                            alt={`brand-${index + 1}`}
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

export default CreativeAgencyBrand;