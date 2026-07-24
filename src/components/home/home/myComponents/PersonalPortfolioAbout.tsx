"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { SmartLink } from "@/components/common";
import { Autoplay } from "swiper/modules";
import { TextArrowIcon } from "@/svg";
import Image from "next/image";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import { DesignStudioService } from "../../home/sections";
import { DigitalStudioService } from "../../digital-studio/sections";

// Data
const services = ["Web Design", "Web Development", "Ecommerce Design", "Graphic Design", "Digital Marketing"];

const PersonalPortfolioAbout = () => {
    const isDarkTheme = useIsDarkRoute();
    // about configuration based on active theme (dark / light)
    const aboutConfig = {
        sectionBg: "#fff",
        textColor: isDarkTheme ? "text-white" : "text-black"

    };

    return (
        <div
            className="px-about-6-area pt-50 pb-110"
            style={{ backgroundColor: aboutConfig.sectionBg }}
        >
            <div className="container">
               
                {/* <div className="px-about-6-top mb-100">
                    <div className="row align-items-center">
                     
                        <div className="col-xl-5 col-lg-6">
                            <div className="px-about-6-title-box">
                                <span className="px-section-subtitle mb-35">Our Service</span>
                                <h4 className="px-section-title ff-thunder fs-130">
                                    What We do
                                </h4>

                            </div>
                        </div>

                       
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
                                            delay: 100000,
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
                </div> */}

              
                <DigitalStudioService />
            </div>
        </div>
    );
};

export default PersonalPortfolioAbout;