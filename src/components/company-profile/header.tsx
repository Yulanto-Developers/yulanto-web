"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { ArrowDownRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper React components and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function HeroSection04() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    const portfolioImages = [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
    ];

    return (
        <section 
            className="px-about-6-area pt-50 pb-80 pb-lg-110"
            style={{ overflow: "hidden" }}
        >
            <div className="container container-1550">
                {/* Top Title Row */}
                <div className="row align-items-center" data-aos="fade-up">
                    <div className="col-xl-3">
                        <span className="tp-section-subtitle text-black blink-ball">
                            Graphic Design Company in Chennai
                        </span>
                    </div>

                    <div className="col-xl-9">
                        <div className="px-project-title-box">
                            <h4 className="px-about-title mb-20">
                                <span className="text-blue-about">Creative Graphic Design That </span>Makes Your Brand Stand Out
                            </h4>
                            <p className="text-figtree text-black mt-2">
                                At Yulanto Web Creations, we provide professional graphic design in Chennai to help businesses create a strong and consistent visual identity. From brochures and flyers to corporate marketing materials, our creative team develops designs that communicate your brand message clearly and professionally.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Middle Card Block (7-Column Content / 5-Column Image) */}
                <div style={{ position: "relative", margin: "20px 0" }} data-aos="fade-up" data-aos-delay="100">
                    <div
                        style={{
                            backgroundColor: "#F3F4F6",
                            padding: "20px",
                            borderRadius: "16px",
                            position: "relative",
                            overflow: "hidden"
                        }}
                    >
                        <div className="row align-items-center">
                            {/* 7 Column Content */}
                            <div className="col-lg-7 mb-4 mb-lg-0" data-aos="fade-right" data-aos-delay="200">
                                <div
                                    style={{
                                        fontWeight: 600,
                                        fontSize: "20px",
                                        lineHeight: "1.8",
                                        color: "#111"
                                    }}
                                >
                                    <p className="text-figtree text-black mt-2">
                                        As an experienced graphic design company in Chennai, we combine creativity, branding, typography, imagery, and strategic layouts to create visually engaging marketing materials for startups, small businesses, SMEs, and established companies.
                                    </p>
                                </div>
                            </div>

                            {/* 5 Column Image Container */}
                            <div className="col-lg-5" data-aos="fade-left" data-aos-delay="300">
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        backgroundColor: "#E5E7EB",
                                        borderRadius: "12px",
                                        overflow: "hidden",
                                        maxHeight: "220px",
                                        width: "100%"
                                    }}
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                                        alt="Designer portrait"
                                        style={{
                                            height: "220px",
                                            width: "100%",
                                            maxWidth: "220px",
                                            objectFit: "cover",
                                            filter: "grayscale(100%)"
                                        }}
                                    />
                                    <div
                                        style={{
                                            padding: "12px",
                                            writingMode: "vertical-rl",
                                            transform: "rotate(180deg)",
                                            fontSize: "11px",
                                            fontWeight: 600,
                                            letterSpacing: "2px",
                                            color: "#4B5563",
                                            flexGrow: 1,
                                            textAlign: "center"
                                        }}
                                    >
                                        BASED IN BOKARO STEEL CITY
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Portfolio Showcase Footer */}
                <div
                    className="row align-items-center g-4"
                    style={{ marginTop: "20px" }}
                >
                    {/* LEFT SIDE - AUTO SWIPER SLIDER / 5 COLUMNS */}
                    <div className="col-lg-5 col-md-5" data-aos="fade-right" data-aos-delay="200">
                        <div
                            style={{
                                width: "100%",
                                maxWidth: "280px",
                                height: "200px",
                                margin: "0 auto",
                                borderRadius: "12px",
                                overflow: "hidden",
                                boxShadow: "0 10px 20px rgba(0,0,0,0.15)"
                            }}
                        >
                            <Swiper
                                modules={[Autoplay, EffectFade, Pagination]}
                                effect="fade"
                                fadeEffect={{ crossFade: true }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false
                                }}
                                pagination={{ clickable: true }}
                                loop={true}
                                style={{ width: "100%", height: "100%" }}
                            >
                                {portfolioImages.map((src, idx) => (
                                    <SwiperSlide key={idx}>
                                        <img
                                            src={src}
                                            alt={`Portfolio sample ${idx + 1}`}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover"
                                            }}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    {/* RIGHT SIDE - CONTENT / 7 COLUMNS */}
                    <div className="col-lg-7 col-md-7" data-aos="fade-left" data-aos-delay="300">
                        <div style={{ textAlign: "left" }}>
                            <div
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    fontSize: "18px",
                                    fontWeight: 600,
                                    letterSpacing: "1px"
                                }}
                            >
                                <h4 className="px-about-title mb-20">
                                    <span className="text-blue-about">Creative Designs. Clear Communication. Stronger Brands. </span>
                                </h4>
                            </div>

                            <div style={{ marginTop: "12px" }}>
                                <p className="text-figtree text-black mt-2 mb-0">
                                    Your visual identity plays an important role in how
                                    customers recognize and remember your business. Our
                                    graphic designers in Chennai create purposeful designs
                                    that not only look attractive but also support your
                                    marketing and business objectives.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}