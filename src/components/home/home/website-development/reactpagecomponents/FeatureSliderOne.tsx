"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import image1 from "@/assets/images/ourstory/image-1.jpg";
import image2 from "@/assets/images/ourstory/image-2.jpg";
import image3 from "@/assets/images/ourstory/vector-1.png";
import image4 from "@/assets/images/ourstory/vector-2.png";
import image5 from "@/assets/images/ourstory/image-1.jpg";
import image6 from "@/assets/images/ourstory/image-2.jpg";

const features = [
  {
    image: image1,
    title: "Modern & Interactive Websites",
    content:
      "Create engaging interfaces with smooth interactions and dynamic content using React JS.",
  },
  {
    image: image2,
    title: "Responsive Across Devices",
    content:
      "Our websites are designed to provide a consistent browsing experience across desktops, tablets, and smartphones.",
  },
  {
    image: image3,
    title: "Fast & Optimized",
    content:
      "We focus on optimized code, efficient components, and performance-friendly development to provide a faster user experience.",
  },
  {
    image: image4,
    title: "Scalable Architecture",
    content:
      "React's reusable component-based approach makes it easier to add new features and expand your website as your business grows.",
  },
  {
    image: image5,
    title: "SEO-Friendly Development",
    content:
      "We follow SEO-conscious development practices, including clean structure, responsive design, performance optimization, and search-engine-friendly content implementation.",
  },
  {
    image: image6,
    title: "Business-Focused Solutions",
    content:
      "Every website is developed based on your brand, target audience, services, and business requirements rather than using a one-size-fits-all approach.",
  },
];

const FeatureSliderOne = () => {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  return (
    <section className="feature-slider-one">
      <div className="container">
        {/* Header with Navigation Controls */}
        <div
          className="row align-items-center feature-slider-one-header"
          data-aos="fade-up"
        >
          <div className="col-8 col-md-9">
            <h2 className="px-about-title">
              <span className="text-blue-about">Why Choose Our </span>
              React Development Services?
            </h2>
          </div>

          <div className="col-4 col-md-3">
            <div className="feature-slider-one-navigation">
              <button
                ref={(node) => setPrevEl(node)}
                type="button"
                className="feature-slider-one-prev"
                aria-label="Previous slide"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                ref={(node) => setNextEl(node)}
                type="button"
                className="feature-slider-one-next"
                aria-label="Next slide"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div
          className="feature-slider-one-wrapper"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl,
              nextEl,
            }}
            onBeforeInit={(swiper) => {
              if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
                swiper.params.navigation.prevEl = prevEl;
                swiper.params.navigation.nextEl = nextEl;
              }
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={700}
            spaceBetween={24}
            grabCursor={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              576: {
                slidesPerView: 1.2,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {features.map((item) => (
              <SwiperSlide key={item.title} className="swiper-slide-custom">
                <article className="feature-image-card">
                  {/* Image */}
                  <div className="feature-image-wrapper">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                    />
                  </div>

                  {/* High Contrast Gradient Overlay */}
                  <div className="feature-image-overlay" />

                  {/* Content */}
                  <div className="feature-image-content">
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        .feature-slider-one {
          padding: 40px 0;
          overflow: hidden;
        }

        .feature-slider-one-header {
          margin-bottom: 35px;
        }

        .px-about-title {
          font-size: 32px;
          font-weight: 700;
          line-height: 1.3;
          margin: 0;
        }

        /* Navigation Buttons Styling */
        .feature-slider-one-navigation {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 12px;
        }

        .feature-slider-one-navigation button {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(5, 52, 86, 0.2);
          border-radius: 50%;
          background: #ffffff;
          color: #053456;
          cursor: pointer;
          user-select: none;
          transition: all 0.3s ease;
        }

        .feature-slider-one-navigation button:hover {
          background: #053456;
          border-color: #053456;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(5, 52, 86, 0.2);
        }

        .feature-slider-one-navigation button:active {
          transform: translateY(0);
        }

        /* Equal-Height Cards Setup */
        :global(.swiper-slide-custom) {
          height: auto;
          display: flex;
        }

        .feature-image-card {
          position: relative;
          width: 100%;
          height: 380px;
          overflow: hidden;
          border-radius: 20px;
          background: #053456;
          box-shadow: 0 10px 30px rgba(5, 52, 86, 0.12);
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
                      box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .feature-image-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(5, 52, 86, 0.25);
        }

        /* Image & Hover Effects */
        .feature-image-wrapper {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .feature-image-wrapper :global(img) {
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .feature-image-card:hover .feature-image-wrapper :global(img) {
          transform: scale(1.08);
        }

        /* Dark Overlay for Readable Text */
        .feature-image-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to top,
            rgba(5, 52, 86, 0.96) 0%,
            rgba(5, 52, 86, 0.80) 50%,
            rgba(5, 52, 86, 0.25) 80%,
            rgba(5, 52, 86, 0.10) 100%
          );
          transition: background 0.4s ease;
        }

        .feature-image-card:hover .feature-image-overlay {
          background: linear-gradient(
            to top,
            rgba(5, 52, 86, 0.98) 0%,
            rgba(5, 52, 86, 0.88) 55%,
            rgba(5, 52, 86, 0.35) 85%,
            rgba(5, 52, 86, 0.15) 100%
          );
        }

        /* Text Content Styling */
        .feature-image-content {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 24px;
          z-index: 2;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .feature-image-content h2 {
          font-size: 22px !important;
          font-weight: 600;
          line-height: 1.3;
          margin: 0 0 8px 0;
          color: #ffffff;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .feature-image-content p {
          margin: 0;
          color: rgba(255, 255, 255, 0.92);
          font-size: 15px !important;
          line-height: 1.5;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
        }

        /* Responsive Breakpoints */
        @media (max-width: 991px) {
          .feature-image-card {
            height: 360px;
          }
        }

        @media (max-width: 767px) {
          .px-about-title {
            font-size: 24px;
          }

          .feature-image-card {
            height: 340px;
            border-radius: 16px;
          }

          .feature-image-content {
            padding: 20px;
          }

          .feature-slider-one-navigation button {
            width: 38px;
            height: 38px;
          }
        }
      `}</style>
    </section>
  );
};

export default FeatureSliderOne;