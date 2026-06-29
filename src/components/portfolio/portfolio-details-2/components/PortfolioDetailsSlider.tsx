"use client";
import { portfolio_slider_params } from "@/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const sliderImages = [
    "/assets/img/project/portfolio-details-2/portfolio-details-thumb-6.jpg",
    "/assets/img/project/portfolio-details-2/portfolio-details-thumb-7.jpg",
    "/assets/img/project/portfolio-details-2/portfolio-details-thumb-8.jpg",
];

const headingLines = [
    { text: "stay", className: "tp-text-right-scroll" },
    { text: "longer", className: "tp-text-left-scroll" },
    { text: "with smart", className: "tp-text-right-scroll" },
    { text: "ux.", className: "tp-text-left-scroll" },
];

const PortfolioDetailsSlider = () => {
    return (
        <section className="px-pd-4-slider-ptb px-pd-style pb-110">
            <div className="container container-1230">
                <div className="row justify-content-center">
                    <div className="col-xl-9">
                        <div className="px-pd-4-slider-heading design-social-title-box title-box text-center mb-120">
                            <h4 className="px-section-title ff-thunder fs-130">
                                {headingLines.map((item, index) => (
                                    <span
                                        key={`${item.text}-${index}`}
                                        className={`${item.className} tp_text_invert_2`}
                                    >
                                        {item.text}
                                        <br />
                                    </span>
                                ))}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slider */}
            <div className="px-pd-4-slider-wrapper">
                <div className="px-pd-4-slider-active">
                    <Swiper
                        modules={[Pagination]}
                        {...portfolio_slider_params}
                    >
                        {sliderImages.map((image, index) => (
                            <SwiperSlide key={`${image}-${index}`}>
                                <div className="px-pd-4-slider-thumb">
                                    <Image width={759} height={409} className="img-fluid"
                                        src={image}
                                        alt={`Portfolio slider preview ${index + 1}`}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default PortfolioDetailsSlider;