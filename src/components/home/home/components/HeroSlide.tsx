"use client";
import { Navigation, Controller, Autoplay } from "swiper/modules"; // Added Autoplay import
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export const heroSlides = [
    { title: "@Yulanto", subtitle: "Leading Web Design Company in Chennai for Business Growth.", img: "/assets/img/banner/hero-img-1.webp" },
    { title: "@Yulanto", subtitle: "Awesome Website Creation in Chennai For Your Business", img: "/assets/img/banner/hero-img-2.webp" },
    { title: "@Yulanto", subtitle: "Website Development Company in Chennai for Startups, SMEs & Corporates.", img: "/assets/img/banner/hero-img-3.webp" },
    { title: "@Yulanto", subtitle: "Top-Rated Web Design Company in Chennai for Every Business.", img: "/assets/img/banner/hero-img-4.webp" },
    { title: "@Yulanto", subtitle: "Build a Powerful Business Website design with Experts in Chennai.", img: "/assets/img/banner/hero-img-5.webp" },
    { title: "@Yulanto", subtitle: "Custom Website creations company for Growing Businesses in Chennai", img: "/assets/img/banner/hero-img-6.webp" },
    // { title: "@Yulanto", subtitle: "Elevate Your Business with Chennai's Best Web Design Company", img: "/assets/img/banner/hero-img-7.webp" },
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
                        modules={[Navigation, Controller, Autoplay]} // Added Autoplay module here
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={false} 
                        autoplay={{
                            delay: 5000, // 5 seconds interval
                            disableOnInteraction: false, // Keeps autoplay running even after manual swipes
                        }}
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