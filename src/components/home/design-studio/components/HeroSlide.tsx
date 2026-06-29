"use client";
import { Navigation, Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export const heroSlides = [
    { title: "©Pixora - Motion", subtitle: "Graphics, Visual Studio", img: "/assets/img/hero/hero-2-4.jpg" },
    { title: "©Pixora - Visual", subtitle: "Storytelling, Digital Agency", img: "/assets/img/hero/hero-2-2.jpg" },
    { title: "©Pixora - Brand", subtitle: "Identity, Media Studio", img: "/assets/img/hero/hero-2-1.jpg" },
    { title: "©Pixora - Digital", subtitle: "Branding, Creative Agency", img: "/assets/img/hero/hero-2-3.jpg" },
    { title: "©Pixora - Motion", subtitle: "Graphics, Visual Studio", img: "/assets/img/hero/hero-2-4.jpg" },
    { title: "©Pixora - Visual", subtitle: "Storytelling, Digital Agency", img: "/assets/img/hero/hero-2-2.jpg" },
    { title: "©Pixora - Brand", subtitle: "Identity, Media Studio", img: "/assets/img/hero/hero-2-1.jpg" },
    { title: "©Pixora - Digital", subtitle: "Branding, Creative Agency", img: "/assets/img/hero/hero-2-3.jpg" },
];

const HeroSlide = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const topSwiperRef = useRef<SwiperType | null>(null);
    const thumbsSwiperRef = useRef<SwiperType | null>(null);
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const [topSwiper, setTopSwiper] = useState<SwiperType | null>(null);

    return (
        <div className="px-hero-2-slider-wrap pb-100">

            {/* Top Slides */}
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <Swiper
                        modules={[Navigation, Controller]}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={false} 
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        onSwiper={(swiper) => {
                            topSwiperRef.current = swiper;
                            setTopSwiper(swiper);
                        }}
                        controller={{ control: thumbsSwiper }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        className="px-hero-2-top-active mb-40"
                    >
                        {heroSlides.map((slide, index) => (
                            <SwiperSlide key={`${slide.title}-${index}`}>
                                <div className="px-hero-2-contents text-center z-index-1">
                                    <div className="fix">
                                        <span>{slide.title}</span>
                                    </div>
                                    <div className="fix">
                                        <span>{slide.subtitle}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Bottom Thumbnails */}
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <Swiper
                        modules={[Controller]}
                        onSwiper={(swiper) => {
                            thumbsSwiperRef.current = swiper;
                            setThumbsSwiper(swiper);
                        }}
                        slidesPerView={3}
                        spaceBetween={10}
                        centeredSlides={true}
                        loop={false}
                        slideToClickedSlide={true}
                        controller={{ control: topSwiper }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        className="px-hero-2-bottom-active gallery-thumbs"
                    >
                        {heroSlides.map((slide, index) => (
                            <SwiperSlide key={`${slide.title}-${index}`}>
                                <div className={`px-hero-2-thumbs ${activeIndex === index ? "active" : ""}`}>
                                    <Link href="#">
                                        <Image width={130} height={168} src={slide.img} alt={slide.title} />
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default HeroSlide;
