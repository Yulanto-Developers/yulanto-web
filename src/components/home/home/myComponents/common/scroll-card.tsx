"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "@/assets/css/scroll-card.css";

export interface ProcessCardData {
  title: string;
  description: string;
  bgImage: string;
  rotation?: string;
}

interface ScrollCardProps {
  cardsData: ProcessCardData[];
  sectionTitle?: React.ReactNode;
}

const rotationClassMap: Record<string, string> = {
  "rotate-3": "scroll-card-rotate-3",
  "-rotate-2": "scroll-card-rotate-minus-2",
  "rotate-2": "scroll-card-rotate-2",
  "-rotate-3": "scroll-card-rotate-minus-3",
  "rotate-0": "scroll-card-rotate-0",
};

const ScrollCard: React.FC<ScrollCardProps> = ({
  cardsData,
  sectionTitle,
}) => {
  return (
    <section className="scroll-card-section">

      <div className="scroll-card-container">

        {/* =====================================
                    SECTION TITLE
                ===================================== */}

        {sectionTitle && (
          <div className="scroll-card-heading">
            {sectionTitle}
          </div>
        )}

        {/* =====================================
                    CAROUSEL
                ===================================== */}

        <div className="scroll-card-slider">

          <Swiper
            modules={[
              Navigation,
              Pagination,
              Autoplay,
              Keyboard,
            ]}
            loop={true}
            speed={800}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".scroll-card-next",
              prevEl: ".scroll-card-prev",
            }}
            pagination={{
              el: ".scroll-card-pagination",
              clickable: true,
            }}
            keyboard={{
              enabled: true,
            }}
            slidesPerView={1}
            spaceBetween={30}
            className="scroll-card-swiper"
          >

            {cardsData.map((card, index) => (
              <SwiperSlide key={`${card.title}-${index}`}>

                <article
                  className={`scroll-card ${rotationClassMap[
                    card.rotation || "rotate-0"
                    ]
                    }`}
                >

                  {/* =================================
                                        IMAGE
                                    ================================= */}

                  <div className="scroll-card-image">

                    <img
                      src={card.bgImage}
                      alt={card.title}
                      draggable={false}
                    />

                  </div>


                  {/* =================================
                                        CONTENT CARD
                                    ================================= */}

                  <div className="scroll-card-content">

                    {/* Number */}

                    <div className="scroll-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>


                    <div className="scroll-card-content-inner">

                      <h3 className="text-tenor">
                        {card.title}
                      </h3>

                      <p>
                        {card.description}
                      </p>

                    </div>

                  </div>

                </article>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>


        {/* =====================================
                    NAVIGATION
                ===================================== */}

        {/* <div className="scroll-card-navigation">

                    <button
                        type="button"
                        className="scroll-card-nav scroll-card-prev"
                        aria-label="Previous"
                    >
                        <span>←</span>
                    </button>


                    <div className="scroll-card-pagination" />


                    <button
                        type="button"
                        className="scroll-card-nav scroll-card-next"
                        aria-label="Next"
                    >
                        <span>→</span>
                    </button>

                </div> */}

      </div>

    </section>
  );
};

export default ScrollCard;