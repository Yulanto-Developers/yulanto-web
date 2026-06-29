"use client";
import { TextArrowIcon, HeroArrowIconTwo } from "@/svg";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import { hero_text_slider_params } from "@/constant";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { OrganicShape } from "@/svg/ShapeIcons";
import { SmartLink } from "@/components/common";
import Image from "next/image";
import Link from "next/link";

// Data
const socialLinks = [
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Twitter", href: "#" },
];

const sliderTexts = ["Branding", "Development", "Design", "Branding", "Development", "Design"];

const PersonalPortfolioHero = () => {
    const isDarkTheme = useIsDarkRoute();
    // Hero image configuration based on active theme (dark / light)
    const heroConfig = {
        src: isDarkTheme
            ? "/assets/img/hero/hero-6/hero-1-dark.png"
            : "/assets/img/hero/hero-6/hero-1.png",
        width: isDarkTheme ? 860 : 696,
        height: isDarkTheme ? 819 : 664
    };
    return (
        <div
            id="top"
            className="px-hero-6-area px-hero-6-bg pt-100"
            style={{
                backgroundImage: `url(/assets/img/hero/hero-6/hero-bg-shape.png)`,
            }}
        >
            <div className="container">
                <div className="row align-items-end">
                    {/* LEFT */}
                    <div className="col-xl-4 col-lg-5 order-1 order-lg-0">
                        <div className="px-hero-6-left">
                            <div className="px-hero-6-info">
                                <p>
                                    Hello! {`I'm`} Luca <br />
                                    Nardi. a digital designer <br />
                                    & creative developer <br />
                                    from Italy.
                                </p>

                                <div className="px-hero-6-signature">
                                    <Image className="img-fluid" width={111} height={60} src="/assets/img/signature/signature.svg" alt="signature" />
                                </div>
                            </div>

                            {/* SOCIAL */}
                            <div className="px-hero-6-social z-index-1 mb-50">
                                {socialLinks.map((item) => (
                                    <Link
                                        key={item.name}
                                        className="px-doubble-effect"
                                        href={item.href}
                                    >
                                        {item.name}
                                        <i>
                                            <TextArrowIcon />
                                            <TextArrowIcon />
                                        </i>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* IMAGE */}
                    <div className="col-xl-5 col-lg-7 order-0 order-lg-1">
                        <div className="px-hero-6-thumb">
                            <Image
                                className="img-fluid"
                                width={heroConfig.width}
                                height={heroConfig.height}
                                src={heroConfig.src}
                                alt="Hero image"
                            />
                        </div>
                    </div>

                    {/* CATEGORY */}
                    <div className="col-xl-3 order-lg-1">
                     <div className="px-hero-6-category text-xl-end mb-50">
                           <span >Web design</span><br/>
                           <span style={{marginRight:"5px"}}>Art Direction</span>
                           <span>HTML</span><br/>
                           <span style={{marginRight:"5px"}}>Branding</span> 
                           <span>Motion Design</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* SLIDER */}
            <div className="px-hero-6-slider p-relative">
                <div className="px-hero-6-btn-wrap">
                    <SmartLink
                        className="px-hero-6-btn px-btn-zikzak text-center p-relative"
                        href="/contact"
                    >
                        <span className="btn-text">
                            <i className="btn-icon">
                                <HeroArrowIconTwo />
                            </i>
                            Let&apos;s Talk
                        </span>
                        <i className="zikzak-bg">
                            <OrganicShape />
                        </i>
                    </SmartLink>
                </div>

                <div className="px-text-6-active tp-slider-transtion">
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        {...hero_text_slider_params}
                    >
                        {sliderTexts.map((text, index) => (
                            <SwiperSlide key={`${text}-${index}`}>
                                <div className="px-hero-6-text">
                                    <span>
                                        {text}
                                        <i className={text === "Development" ? "icon-left" : ""}>
                                            _
                                        </i>
                                    </span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default PersonalPortfolioHero;