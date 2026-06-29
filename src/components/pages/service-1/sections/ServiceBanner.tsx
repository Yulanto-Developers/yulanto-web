"use client";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import Image from "next/image";

const ServiceBanner = () => {
    const isDarkTheme = useIsDarkRoute();

    // Light theme background for service banner section
    const sectionBackground = isDarkTheme ? "" : "#FFF5F3";

    return (
        <div id="top" className="px-inner-service-2-ptb pt-200 pb-80" style={{ backgroundColor: sectionBackground }}>
            <div className="container container-1870">
                <div className="row align-items-end">
                    <div className="col-xl-10 col-lg-9">
                        <div className="px-inner-service-2-heading">
                            <h3 className="px-inner-service-2-title">
                                Shine in <br /> the <span>digital <br /> world</span>
                            </h3>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3">
                        <div className="px-hero-4-video-wrap d-flex justify-content-end">
                            <div className="px-hero-4-video">
                                <div className="text-end d-none d-xl-block mb-20">
                                    <Image src="/assets/img/shape/shape-1.png" alt="shape" width={171} height={60} />
                                </div>
                                <video loop muted autoPlay playsInline>
                                    <source src="https://html.aqlova.com/videos/pixora/banner-4-1.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;