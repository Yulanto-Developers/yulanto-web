"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Swiper imports for image scrolling/slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface CreativeCard {
  image: string;
  alt: string;
}

const creativeCards: CreativeCard[] = [
  {
    image: "assets/img/SocialMediaCreativeDesigns/Social-Media-Creatives-1.jpg",
    alt: "social media marketing in chennai",
  },
  {
    image: "assets/img/SocialMediaCreativeDesigns/Social-Media-Creatives-2.jpg",
    alt: "social media marketing agency",
  },
  {
    image: "assets/img/SocialMediaCreativeDesigns/Social-Media-Creatives-3.jpg",
    alt: "social media management companies",
  },
  {
    image: "assets/img/SocialMediaCreativeDesigns/Social-Media-Creatives-4.jpg",
    alt: "social media marketing companies",
  },
];

export function SocialMediaCreativeHeader() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section
      className="px-about-6-area pt-40 pb-40 pb-lg-110 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container container-1550">
        {/* Top Content Row */}
        <div className="row align-items-center mb-5" data-aos="fade-up">
          <div className="col-xl-3">
            <span
              className="tp-section-subtitle text-black blink-ball"
            >
              Social Media Creative Design in Chennai
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">
                  Creative Social Media Designs That{" "}
                </span>
                <span>
                  Make Your Brand Stand Out
                </span>
              </h4>
              <p
                className="text-figtree text-black mt-2"
              >
                In a fast-moving digital world, your social media visuals are
                often the first interaction customers have with your brand. At
                Yulanto Web Creations, we create engaging, professional, and
                brand-focused social media creatives that help businesses
                communicate their message, attract attention, and build a
                consistent online presence.
              </p>
            </div>
          </div>
        </div>

        {/* Image Scroll / Swiper Slider Display Replacing Orbit Graphic */}
        <div
          className="mb-4"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="pb-5"
          >
            {creativeCards.map((card, index) => (
              <SwiperSlide key={index}>
                <div
                  className="rounded-4 overflow-hidden shadow-sm h-100"
                  style={{
                    transition: "transform 0.3s ease",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="img-fluid w-100 d-block"
                    style={{
                      height: "380px",
                      objectFit: "cover",
                      borderRadius: "16px",
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <p
          className="text-figtree text-black mt-2 "
          data-aos="fade-up"
        
        >
          As a creative design company in Chennai, we design social media
          posts that combine compelling visuals, clear messaging, and your
          brand identity to create content that connects with your target
          audience.
        </p>
      </div>

      {/* Swiper Pagination Dot Colors */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #53ae7d !important;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          background: #53ae7d !important;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}

export default SocialMediaCreativeHeader;