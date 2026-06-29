"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { SmartLink } from "@/components/common";
import { Autoplay } from "swiper/modules";
import { TextArrowIcon } from "@/svg";
import Image from "next/image";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";

// Data
const services = ["Branding", "Development", "Design", "Branding", "Development", "Design"];

const PersonalPortfolioAbout = () => {
    const isDarkTheme = useIsDarkRoute();
    // about configuration based on active theme (dark / light)
    const aboutConfig = {
        sectionBg: isDarkTheme ? "#1C1D20" : "#f9f9f9",
        textColor : isDarkTheme ? "text-white":"text-black"

    };

    return (
        <div
            className="px-about-6-area pt-110 pb-110"
            style={{ backgroundColor: aboutConfig.sectionBg }}
        >
            <div className="container">
                {/* TOP */}
                <div className="px-about-6-top mb-100">
                    <div className="row align-items-center">
                        {/* TITLE */}
                        <div className="col-xl-5 col-lg-6">
                            <div className="px-about-6-title-box">
                                <span className="px-section-subtitle mb-35">About me</span>
                                <h4 className="px-section-title ff-thunder fs-130">
                                    What i do
                                </h4>
                            </div>
                        </div>

                        {/* SLIDER */}

                        {/* SLIDER */}
                        <div className="offset-xl-1 col-xl-6 col-lg-6">
                            <div className="px-service-6-wrap pt-15">
                                <div className="px-service-6-slide-wrap fix">
                                    <Swiper
                                        className="px-service-6-active"
                                        direction="vertical"
                                        slidesPerView={3}
                                        loop={true}
                                        modules={[Autoplay]}
                                        autoplay={{
                                            delay: 1000,
                                            disableOnInteraction: false,
                                        }}
                                    >
                                        {[...services, ...services].map((item, index) => (
                                            <SwiperSlide key={`${item}-${index}`}>
                                                <div className="px-service-6-text">
                                                    <span>{item}</span>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="row">
                    {/* IMAGE */}
                    <div className="col-xl-5 col-lg-5">
                        <div className="px-about-6-thumb pt-25">
                            <Image
                                className="img-fluid"
                                width={440}
                                height={260}
                                src="/assets/img/about/about-6-1.jpg"
                                alt="about"
                            />
                        </div>
                    </div>

                    {/* TEXT */}
                    <div className="offset-xl-1 col-xl-6 col-lg-7">
                        <div className="px-about-6-content">
                        <p>
                              {`I'm`} a French digital designer and web
                              developer with over 10 years of experience.
                              At the crossroads of <span>design,</span> <span>motion</span> and <span>web
                              development,</span> the diversity of my skills allows
                              me to approach design
                           </p>
                            <SmartLink
                                className={`px-about-4-link ${aboutConfig.textColor} px-doubble-effect`}
                                href="/about-me"
                            >
                                <span>More about me</span>
                                <i>
                                    <TextArrowIcon />
                                    <TextArrowIcon />
                                </i>
                            </SmartLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalPortfolioAbout;