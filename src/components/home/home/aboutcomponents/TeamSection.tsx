"use client";

import "swiper/css";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const MEMBERS = [
  {
    id: 1,
    name: "Anna Dean",
    role: "React Developer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    shade: "tm-slider-shade-pink",
    skills: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    ],
  },
  {
    id: 2,
    name: "John Smith",
    role: "Backend Developer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    shade: "tm-slider-shade-yellow",
    skills: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    ],
  },
  {
    id: 3,
    name: "Emma Watson",
    role: "UI / UX Designer",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    shade: "tm-slider-shade-slate",
    skills: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    ],
  },
  {
    id: 4,
    name: "David Miller",
    role: "WordPress Developer",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    shade: "tm-slider-shade-cream",
    skills: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elementor/elementor-original.svg",
    ],
  },{
    id: 5,
    name: "David Miller",
    role: "WordPress Developer",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    shade: "tm-slider-shade-cream",
    skills: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elementor/elementor-original.svg",
    ],
  },{
    id: 6,
    name: "David Miller",
    role: "WordPress Developer",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    shade: "tm-slider-shade-cream",
    skills: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elementor/elementor-original.svg",
    ],
  },
];

export default function TeamSlider() {
  return (
    <section className="tm-slider-section">
      <div className="tm-slider-container">

        <Swiper
          modules={[Autoplay]}
          className="teamSwiper"
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
              slidesPerView: 4,
              spaceBetween: 35,
            },
          }}
        >
          {MEMBERS.map((member) => (
            <SwiperSlide key={member.id}>
               <div
                    className={`tm-slider-card ${member.shade} ${
                      member.id % 2 === 0 ? "down" : "up"
                    }`}
                >

                <div className="tm-slider-skill-bar">
                  {member.skills.map((skill, index) => (
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
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}