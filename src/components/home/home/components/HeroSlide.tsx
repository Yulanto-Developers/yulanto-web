"use client";
import { Navigation, Controller, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export const heroSlides = [
    { title: "We start by listening closely to your goals, ensuring you feel understood from day one.", subtitle: "Leading Web Design Company in Chennai for Business Growth.", img: "/assets/img/banner/hero-img-1.webp", head: "Make an Enquiry" },
    { title: "Every detail is noted and aligned with your vision, so nothing important is ever missed.", subtitle: "Awesome Website Creation in Chennai For Your Business", img: "/assets/img/banner/hero-img-2.webp", head: "Increase Sales" },
    { title: "Our experts turn your ideas into seamless web solutions that drive your business success.", subtitle: "Website Development Company in Chennai for Startups, SMEs & Corporates.", img: "/assets/img/banner/hero-img-3.webp", head: "Gather Requirements" },
    { title: "We craft a web presence that reflects your brand’s strength and professionalism.", subtitle: "Top-Rated Web Design Company in Chennai for Every Business.", img: "/assets/img/banner/hero-img-4.webp", head: "Write the code" },
    { title: "The result is a platform built to attract opportunities and drive your business forward.", subtitle: "Build a Powerful Business Website design with Experts in Chennai.", img: "/assets/img/banner/hero-img-5.webp", head: "Design the website" },
    { title: "Our commitment is to a long-term partnership that supports your business growth.", subtitle: "Custom Website creations company for Growing Businesses in Chennai", img: "/assets/img/banner/hero-img-6.webp", head: "Continuous Success" },
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
                        modules={[Navigation, Controller, Autoplay]}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={false}
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
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
                                        <span className="text-green-color">{slide.title}</span>
                                    </div>
                                    <div className="fix">
                                        <span style={{ fontWeight: 300, fontSize: '18px' }}>{slide.subtitle}</span>
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
                                    <Link href="#" style={{ position: "relative", display: "block", overflow: "hidden", borderRadius: "8px" }}>
                                        <Image width={130} height={168} src={slide.img} alt={slide.title} />

                                        {/* Centered Overlay Head - Active Slide Only */}
                                        {activeIndex === index && slide.head && (
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    width: "100%",
                                                    height: "100%",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    background: "#053456a1",
                                                    padding: "10px",
                                                    zIndex: 2
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        color: "#ffffff",
                                                        fontSize: "13px",
                                                        fontWeight: "700",
                                                        textAlign: "center",
                                                        lineHeight: "1.3",
                                                        textTransform: "uppercase",
                                                        letterSpacing: "0.5px",
                                                        textShadow: "0 2px 4px rgba(0,0,0,0.6)"
                                                    }}
                                                >
                                                    {slide.head}
                                                </span>
                                            </div>
                                        )}
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