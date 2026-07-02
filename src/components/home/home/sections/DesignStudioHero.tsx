"use client";
import HeroSlide from "../components/HeroSlide";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { text_slider_params } from "@/constant";
import { SLIDER_TEXTS } from "@/data/site-data";
import { StarIcon } from "@/svg/StarIcons";

const heroContent = [
    {
        col: "col-lg-2", img: "/assets/img/hero/s-1.jpg",
        title: "Boost Website Traffic to Your Business and Generate Revenue.",
        subtitle: "You Are In The Right Spot",
        spacingCls: "pl-10", alignCls: "justify-content-start"
    },
    {
        col: "col-lg-4", img: "/assets/img/hero/hero-2-2.jpg",
        title: " ", subtitle: " ",
        spacingCls: "pl-80", alignCls: "justify-content-start"
    },
    {
        col: "col-lg-4", img: "/assets/img/hero/hero-2-3.jpg",
        title: " ", subtitle: " ",
        spacingCls: "pr-10", alignCls: "justify-content-end"
    },
    {
        col: "col-lg-2", img: "/assets/img/hero/s-1.jpg",
        title: "A Professional Approach  in Every Aspect of Our Work.", subtitle: "Awesome Website Creation in Chennai For Your Business",
        spacingCls: "pl-10", alignCls: "justify-content-end"
    },
    {
        col: "col-lg-3", img: "/assets/img/hero/s-1.jpg",
        title: "Cultivate Your Business Brand and Reputation Worldwide.", subtitle: "Handle Your Business With Experienced Web Experts in Chennai",
        spacingCls: "pr-10", alignCls: "justify-content-end"
    },
    {
        col: "col-lg-3", img: "/assets/img/hero/s-1.jpg",
        title: "Enhance Your Business Presence and Reliability Online.", subtitle: "Transform Your Business Into The Next Level",
        spacingCls: "pl-10", alignCls: "justify-content-start"
    },
    {
        col: "col-lg-3", img: "/assets/img/hero/s-1.jpg",
        title: "Our web designers commit to take your business", subtitle: "innovative strategies, dedication and effort",
        spacingCls: "pl-10", alignCls: "justify-content-start"
    },
    {
        col: "col-lg-3", img: "/assets/img/hero/s-1.jpg",
        title: " We specialize in guiding you towards the right path", subtitle: "create websites in Chennai with a multitude features",
        spacingCls: "pl-10", alignCls: "justify-content-start"
    },
];

const Hero = () => {
    const defaultActive = 1;
    const [activeIndex, setActiveIndex] = useState<number>(defaultActive);

    // Auto-run slide interval every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => {
                let nextIndex = (prevIndex + 1) % heroContent.length;

                // Optional: If you want the auto-play to skip index 1 and 2 entirely 
                // because they have empty text, uncomment the lines below:

                while (nextIndex === 1 || nextIndex === 2) {
                    nextIndex = (nextIndex + 1) % heroContent.length;
                }


                return nextIndex;
            });
        }, 3000); // 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="px-hero-2-area pt-120 pb-20">
            <div className="px-hero-2-main d-none d-xl-block p-relative">
                <div className="container container-1630">
                    <div className="row pt-50">
                        {heroContent.map((item, index) => {
                            const isActive = activeIndex === index;
                            const shouldHideImage = index === 1 || index === 2;

                            return (
                                <div className={item.col} key={`${item.title}-${index}`}>
                                    <div
                                        className={`px-hero-2-item d-flex ${item.alignCls} mb-50 ${item.spacingCls} ${isActive ? "active" : ""}`}
                                    >
                                        <div
                                            className="px-fade-anim"
                                            data-delay=".3"
                                            onMouseEnter={() => setActiveIndex(index)}
                                        >
                                            {!shouldHideImage && (
                                                <div className="px-hero-2-thumb">
                                                    <Link href="/portfolio-details-1">
                                                        <Image width={130} height={168} src={item.img} alt={item.title} />
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                        <div className="px-hero-2-content text-center z-index-1">
                                            <div className="fix">
                                                <span dangerouslySetInnerHTML={{ __html: item.title }} />
                                            </div>
                                            <div className="fix">
                                                <span className="desc" dangerouslySetInnerHTML={{ __html: item.subtitle }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        <div className="text-center btn-partent">
                            <Link href='/' className="button-style">Ask Pricing</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-hero-2-slider d-xl-none">
                <div className="container">
                    <HeroSlide />
                </div>
            </div>
            <div
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

            </div>
            {/* <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="px-hero-2-bottom text-center p-relative px-fade-anim" data-delay=".3">
                            <h4 className="px-hero-2-text d-flex align-items-end justify-content-center">
                                design <i className="d-none d-xl-block"><span>©Pixora <br /> Live in a World <br /> of creative designs</span></i>Studio
                            </h4>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Hero;