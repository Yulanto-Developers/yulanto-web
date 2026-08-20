"use client";

import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import MEMBERS from "@/components/data/teammembers";
import SectionTitle from "@/components/sectiontitle/SectionTitle";

export default function TeamSlider() {
  return (
    <section className="tm-slider-section">
      <SectionTitle
        subtitle="Our Team"
        titleFirst="Meet Our Team"
        titleSecond=""
        description="Our talented team of designers, developers, strategists, and innovators works together to deliver exceptional digital solutions. With expertise, creativity, and a commitment to excellence, we transform ideas into impactful results."
        animationType="text-reveal-lines"
        delay={300}
      />
      <div className="container pt-3">
        <Swiper
          modules={[Autoplay]}
          className="teamSwiper tm-slider-swiper"
          loop={true}
          speed={3500}
          grabCursor={true}
          watchOverflow={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 35,
            },
          }}
        >
          {MEMBERS.map((member) => (
            <SwiperSlide key={member.id}>
              <div className={`tm-slider-wrapper ${member.id % 2 === 0 ? "down" : "up"}`}>
                <div className={`tm-slider-card ${member.shade}`}>
                  <div className="tm-slider-skill-bar">
                    {member.skills?.map((skill, index) => (
                      <div
                        className="tm-slider-skill"
                        key={`${member.id}-${index}`}
                      >
                        <img src={skill} alt="" />
                      </div>
                    ))}
                  </div>

                  <div className="tm-slider-content">
                    <h4>{member.name}</h4>
                    <span>{member.role}</span>
                  </div>

                  <img
                    className="tm-slider-profile"
                    src={member.image}
                    alt={member.name}
                  />
                </div>

                {/* Tooltip - only show description, no duplicate name/role */}
                <div className="tm-slider-tooltip">
                  <p className="text-white">{member.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}