"use client";
import HeroSlide from "../components/HeroSlide";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const heroContent = [
    {
        col: "col-lg-2", img: "/assets/img/hero/s-1.jpg",
        title: "Yulanto", subtitle: "Branding, Digital Studio",
        spacingCls: "", alignCls: "justify-content-start"
    },
    {
        col: "col-lg-4", img: "/assets/img/hero/hero-2-2.jpg",
        title: " ", subtitle: " ",
        spacingCls: "pl-80", alignCls: "justify-content-start"
    },
    {
        col: "col-lg-4", img: "/assets/img/hero/hero-2-3.jpg",
        title: " ", subtitle: " ",
        spacingCls: "pr-80", alignCls: "justify-content-end"
    },
    {
        col: "col-lg-2", img: "/assets/img/hero/hero-2-4.jpg",
        title: "Yulanto", subtitle: "Branding, Creative Agency",
        spacingCls: "", alignCls: "justify-content-end"
    },
    {
        col: "col-lg-3", img: "/assets/img/hero/hero-2-5.jpg",
        title: "Yulanto", subtitle: "Production, Design Studio",
        spacingCls: "pr-85", alignCls: "justify-content-end"
    },
    {
        col: "col-lg-3", img: "/assets/img/hero/hero-2-6.jpg",
        title: "Yulanto", subtitle: "Storytelling, Digital Agency",
        spacingCls: "pl-105", alignCls: "justify-content-start"
    },
    {
        col: "col-lg-3", img: "/assets/img/hero/hero-2-7.jpg",
        title: "Yulanto", subtitle: "Media, Branding Studio",
        spacingCls: "pl-100", alignCls: "justify-content-start"
    },
    {
        col: "col-lg-3", img: "/assets/img/hero/hero-2-8.jpg",
        title: "Yulanto", subtitle: "Design, Creative Studio",
        spacingCls: "pl-100", alignCls: "justify-content-start"
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
            <div className="px-hero-2-main d-none d-xl-block mb-110 p-relative">
                <div className="container container-1630">
                    <div className="row">
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
                                                <span>{item.title}</span>
                                            </div>
                                            <div className="fix">
                                                <span>{item.subtitle}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="px-hero-2-slider d-xl-none">
                <div className="container">
                    <HeroSlide />
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="px-hero-2-bottom text-center p-relative px-fade-anim" data-delay=".3">
                            <h4 className="px-hero-2-text d-flex align-items-end justify-content-center">
                                design <i className="d-none d-xl-block"><span>©Pixora <br /> Live in a World <br /> of creative designs</span></i>Studio
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;