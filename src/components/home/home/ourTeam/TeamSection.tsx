"use client";

import { useRef } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import MEMBERS from "@/components/data/teammembers";
import SectionTitle from "@/components/sectiontitle/SectionTitle";

export default function TeamSlider() {
  const MAX_VISIBLE_SKILLS = 5;

  // Helper to check if skill is an image URL
  const isImageUrl = (skill: string) => {
    return typeof skill === 'string';
  };

  // Get skill display name
  const getSkillDisplay = (skill: string) => {
    if (isImageUrl(skill)) return skill;
    return skill.trim();
  };

  // Get skills in chunks of 5
  const getSkillChunks = (skills: string[] | undefined): string[][] => {
    if (!skills || skills.length === 0) return [];

    const chunks: string[][] = [];
    for (let i = 0; i < skills.length; i += MAX_VISIBLE_SKILLS) {
      chunks.push(skills.slice(i, i + MAX_VISIBLE_SKILLS));
    }
    return chunks;
  };

  // Check if loop mode should be enabled
  const shouldEnableLoop = (chunks: string[][]) => {
    return chunks.length > 1;
  };

  return (
    <section className="tm-slider-section">
      <SectionTitle
        subtitle="Our Team"
        titleFirst="Meet Our Team"
        titleSecond=""
        description="Our talented team of designers, developers, strategists, and innovators works together to deliver exceptional digital solutions. With expertise, creativity, and a commitment to excellence, we transform ideas into impactful results."/>
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
          {MEMBERS.map((member) => {
            const skillChunks = getSkillChunks(member.skills);
            const enableLoop = shouldEnableLoop(skillChunks);

            return (
              <SwiperSlide key={member.id}>
                <div className={`tm-slider-wrapper ${member.id % 2 === 0 ? "down" : "up"}`}>
                  <div className={`tm-slider-card ${member.shade}`}>
                    {/* Skills Swiper */}
                    {skillChunks.length > 0 && (
                      <div className="tm-slider-skill-bar">
                        <Swiper
                          modules={[Autoplay]}
                          className="tm-skill-swiper"
                          direction="vertical"
                          loop={enableLoop} // Only enable loop if there are multiple chunks
                          speed={800}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                            stopOnLastSlide: !enableLoop, // Stop if no loop
                          }}
                          slidesPerView={1}
                          spaceBetween={0}
                          watchOverflow={true}
                          touchRatio={0}
                        >
                          {skillChunks.map((chunk, chunkIndex) => (
                            <SwiperSlide key={`${member.id}-chunk-${chunkIndex}`}>
                              <div className="tm-skill-slide">
                                {chunk.map((skill, index) => (
                                  <div
                                    className="tm-slider-skill"
                                    key={`${member.id}-${chunkIndex}-${index}`}
                                    style={{
                                      transitionDelay: `${index * 0.07}s`
                                    }}
                                  >
                                    {isImageUrl(skill) ? (
                                      <img src={skill} alt="skill" />
                                    ) : (
                                      <span className="skill-text">{getSkillDisplay(skill)}</span>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    )}

                    <div className="tm-slider-content">
                      <h4 className="text-tenor">{member.name}</h4>
                      <span className="text-figtree">{member.role}</span>
                    </div>

                    <img
                      className="tm-slider-profile"
                      src={member.image}
                      alt={member.name}
                    />
                  </div>

                  <div className="tm-slider-tooltip">
                    <p className="text-white">{member.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}