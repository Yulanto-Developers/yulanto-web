"use client";

import { portfolioProjects } from "@/data/portfolio-projects";
// import ProjectSingleCard from "../../components/ProjectSingleCard";
import ProjectSingleCard from "./Content/ProjectSingleCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const StartupAgencyProject = () => {
    const displayProjectData = portfolioProjects.slice(0, 5);

    return (
        <section className="px-project-area pt-50 pb-30 pb-lg-130">
            <div className="container container-1550">

                {/* TITLE */}
                <div className="px-project-title-wrap mb-80">
                    <div className="row">

                        <div className="col-xl-3">
                            <span className="px-section-subtitle pt-40 blink-ball text-tenor">
                                Client Success Stories
                            </span>
                        </div>

                        <div className="col-xl-9">
                            <div className="px-project-title-box">
                                <h3 className="px-section-title mb-25 text-effect">
                                    <span className="word">Recent </span>
                                    <span>Case Studies </span>
                                </h3>

                                <p className="text-figtree font-paragraph-cls text-black">
                                    We partner with businesses across industries to deliver impactful digital solutions and measurable results. Discover our recent success stories.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* SWIPER */}
                <div className="portfolio-project-swiper-wrapper">

                    <div className="portfolio-project-prev">
                        &#10094;
                    </div>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        className="portfolio-project-swiper"
                        navigation={{
                            prevEl: ".portfolio-project-prev",
                            nextEl: ".portfolio-project-next",
                        }}
                        spaceBetween={20}
                        slidesPerView={2}
                        loop={true}
                        autoplay={{
                            delay: 300000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed={700}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 1,
                            },
                            992: {
                                slidesPerView: 2,
                            },
                        }}
                    >
                        {displayProjectData.map((project) => (
                            <SwiperSlide key={project.id}>
                                <ProjectSingleCard {...project} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="portfolio-project-next">
                        &#10095;
                    </div>

                </div>

            </div>
        </section>
    );
};

export default StartupAgencyProject;