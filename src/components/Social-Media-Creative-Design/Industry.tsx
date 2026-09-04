"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faHardHat,
  faCouch,
  faUserNurse,
  faIndustry,
  faLaptopCode,
  faHeartPulse,
  faHotel,
  faRocket,
  faTruck,
  faDraftingCompass,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface IndustryItem {
  icon: any;
  name: string;
}

interface CreativeCard {
  image: string;
  alt: string;
}

const industriesList: IndustryItem[] = [
  { icon: faBuilding, name: "Real Estate" },
  { icon: faHardHat, name: "Construction" },
  { icon: faCouch, name: "Interior Design" },
  { icon: faUserNurse, name: "Healthcare" },
  { icon: faIndustry, name: "Manufacturing" },
  { icon: faLaptopCode, name: "IT & E-commerce" },
  { icon: faHeartPulse, name: "Healthology" },
  { icon: faHotel, name: "Hospitality" },
  { icon: faRocket, name: "Startups & Small Businesses" },
  { icon: faTruck, name: "Delivery" },
  { icon: "faDraftingCompass", name: "Architecture" },
  { icon: faUserTie, name: "Professional Services" },
];

const creativeCards: CreativeCard[] = [
  {
    image: "assets/img/SocialMediaCreativeDesigns/Social-Media-Creatives-1.jpg",
    alt: "Healthcare Creative",
  },
  {
    image: "assets/img/SocialMediaCreativeDesigns/Social-Media-Creatives-2.jpg",
    alt: "Real Estate Creative",
  },
  {
    image: "assets/img/SocialMediaCreativeDesigns/Social-Media-Creatives-3.jpg",
    alt: "Festival Creative",
  },
  {
    image: "assets/img/SocialMediaCreativeDesigns/Social-Media-Creatives-4.jpg",
    alt: "Fitness Creative",
  },
];

export function IndustryCreativesSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section 
      className="px-about-6-area pt-50 pb-80 pb-lg-110 overflow-hidden" 
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container container-1550">
        <h4 className="px-about-title mb-20">
          <span className="text-blue-about">Social Media Creatives </span>
          for Business Growth 
        </h4>
        <p className="text-figtree text-black mt-2 mb-4">
          Great social media design can help your business communicate faster and more effectively. From launching a new service to promoting a special offer, the right creative can capture attention and encourage your audience to take action. 
        </p>

        <div className="row g-4 align-items-center">
          
          {/* Left Column: Industry List */}
          <div className="col-xl-6 col-lg-6" data-aos="fade-right">
            {/* Industry Icons Grid (3 Columns) */}
            <div className="row g-3 mb-4">
              {industriesList.map((item, index) => (
               <div key={index} className="col-6 col-md-6">
                  <div className="d-flex align-items-center gap-2">
                    <FontAwesomeIcon
                      icon={item.icon === "faDraftingCompass" ? faDraftingCompass : item.icon}
                      style={{ color: "#053456", minWidth: "20px !important",fontSize: "20px !important" }}
                    />
                    <span className="text-figtree text-black mt-2 " style={{ fontSize: "20px!important" }}>
                      {item.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3-Card Swiper Slider */}
          <div className="col-xl-6 col-lg-6" data-aos="fade-left" data-aos-delay="200">
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
                        height: "280px",
                        objectFit: "cover",
                        borderRadius: "16px",
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
        {/* Swiper Pagination Dot Colors Only */}
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

export default IndustryCreativesSection;