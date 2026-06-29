"use client";
import HeroSlide from "../components/HeroSlide";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const heroContent = [
    { col: "col-lg-2", img: "/assets/img/hero/hero-2-1.jpg", title: "©Pixora - Video", subtitle: "Branding, Digital Studio", spacingCls: "", alignCls: "justify-content-start" },
    { col: "col-lg-4", img: "/assets/img/hero/hero-2-2.jpg", title: "©Pixora - Motion", subtitle: "Graphics, Visual Studio", spacingCls: "pl-80", alignCls: "justify-content-start" },
    { col: "col-lg-4", img: "/assets/img/hero/hero-2-3.jpg", title: "©Pixora - Brand", subtitle: "Identity, Media Studio", spacingCls: "pr-80", alignCls: "justify-content-end" },
    { col: "col-lg-2", img: "/assets/img/hero/hero-2-4.jpg", title: "©Pixora - Digital", subtitle: "Branding, Creative Agency", spacingCls: "", alignCls: "justify-content-end" },
    { col: "col-lg-3", img: "/assets/img/hero/hero-2-5.jpg", title: "©Pixora - Video", subtitle: "Production, Design Studio", spacingCls: "pr-85", alignCls: "justify-content-end" },
    { col: "col-lg-3", img: "/assets/img/hero/hero-2-6.jpg", title: "©Pixora - Visual", subtitle: "Storytelling, Digital Agency", spacingCls: "pl-105", alignCls: "justify-content-start" },
    { col: "col-lg-3", img: "/assets/img/hero/hero-2-7.jpg", title: "©Pixora - Creative", subtitle: "Media, Branding Studio", spacingCls: "pl-100", alignCls: "justify-content-start" },
    { col: "col-lg-3", img: "/assets/img/hero/hero-2-8.jpg", title: "©Pixora - Motion", subtitle: "Design, Creative Studio", spacingCls: "pl-100", alignCls: "justify-content-start" },
];


const Hero = () => {
    const defaultActive = 1;
    const [activeIndex, setActiveIndex] = useState<number>(defaultActive);

    return (
        <div className="px-hero-2-area pt-120 pb-20">
            <div className="px-hero-2-main d-none d-xl-block mb-110 p-relative">
                <div className="container container-1630">
                    <div className="row">
                        {heroContent.map((item, index) => {
                            const isActive = activeIndex === index;
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
                                            <div className="px-hero-2-thumb">
                                                <Link href="/portfolio-details-1">
                                                    <Image width={130} height={168} src={item.img} alt={item.title} />
                                                </Link>
                                            </div>
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