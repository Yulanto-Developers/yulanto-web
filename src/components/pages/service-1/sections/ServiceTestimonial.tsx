"use client";

import ServiceTestimonialItem from "../components/ServiceTestimonialItem";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { serviceTestimonials } from "@/data/testimonial-data";
import { TestimonialArrowIcon } from "@/svg/ArrowIcons";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { useRef } from "react";

const ServiceTestimonial = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className="ar-testimonial-area pt-120 pb-120">
            <div className="container container-1330">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="ar-testimonial-slider-wrap p-relative">
                            <div className="ar-testimonial-active fix">
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]}
                                    slidesPerView={1}
                                    loop
                                    speed={1000}
                                    spaceBetween={0}
                                    autoplay={{ delay: 3000 }}
                                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                                    pagination={{
                                        el: ".swiper-pagination-progress",
                                        type: "progressbar",
                                    }}
                                    onInit={(swiper) => {
                                        updateFraction(swiper);
                                    }}
                                    onSlideChange={(swiper) => {
                                        updateFraction(swiper);
                                    }}
                                >
                                    {serviceTestimonials.map((item, index) => (
                                        <SwiperSlide key={`${item.name}-${index}`}>
                                            <ServiceTestimonialItem {...item} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* PAGINATION */}
                                <div className="ar-testimonial-fraction-wrap">
                                    <div className="swiper-pagination-progress"></div>
                                    <div className="swiper-pagination-fraction"></div>
                                </div>
                            </div>

                            {/* NAVIGATION */}
                            <div className="ar-testimonial-arrow">
                                <button
                                    type="button"
                                    className="ar-testimonial-prev"
                                    onClick={() => swiperRef.current?.slidePrev()}
                                    aria-label="Previous testimonial"
                                >
                                    <TestimonialArrowIcon direction="prev" />
                                </button>

                                <button
                                    type="button"
                                    className="ar-testimonial-next"
                                    onClick={() => swiperRef.current?.slideNext()}
                                    aria-label="Next testimonial"
                                >
                                    <TestimonialArrowIcon direction="next" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceTestimonial;

/* helper function */
const updateFraction = (swiper: SwiperType) => {
    const fraction = document.querySelector(".swiper-pagination-fraction");

    if (!fraction) return;

    const totalSlides = swiper.slides.length - (swiper.loopedSlides ?? 0) * 2;

    fraction.innerHTML = `
		<span class="current">${swiper.realIndex + 1}</span>
		<span class="total">${totalSlides}</span>
	`;
};