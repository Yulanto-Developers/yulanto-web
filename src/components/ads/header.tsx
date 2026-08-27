"use client";

import React from "react";
import Image from "next/image";
import "./header.css";

export interface ImageCard {
  id: string;
  src: string;
  alt: string;
  rotation: number;
}

export interface ImageCarouselHeroProps {
  images?: ImageCard[];
}

const DEFAULT_ONLINE_IMAGES: ImageCard[] = [
  {
    id: "1",
    src: "assets/img/googleads/top-1.jpg",
    alt: "Abstract Fluid Art",
    rotation: -6,
  },
  {
    id: "2",
    src: "assets/img/googleads/top-2.jpg",
    alt: "Oil Painting",
    rotation: 4,
  },
  {
    id: "3",
    src: "assets/img/googleads/top-3.jpg",
    alt: "Colorful Splash",
    rotation: -3,
  },
  {
    id: "4",
    src: "assets/img/googleads/top-4.jpg",
    alt: "Neon Gradient",
    rotation: 5,
  },
  {
    id: "5",
    src: "assets/img/googleads/top-5.jpg",
    alt: "Neon Gradient",
    rotation: 6,
  },
];

export function ImageCarouselHero({
  images = DEFAULT_ONLINE_IMAGES,
}: ImageCarouselHeroProps) {
  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110  position-relative overflow-hidden">
      <div className="container container-1550">
        {/* Soft Background Accent Glows */}
        <div className="bg-blur-circle blur-top-right" />
        <div className="bg-blur-circle blur-bottom-left" />

        {/* Header Text Section */}
        <div className="row align-items-center mb-5" data-aos="fade-up">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
              Google Ads Agency in Chennai
            </span>
          </div>
          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">
                  Result-Driven Google Ads & PPC{" "}
                </span>
                Campaign Management Services
              </h4>
              <p className="text-figtree text-black mt-2" data-aos="fade-up">
                Looking for a Google Ads agency in Chennai to generate quality
                leads, increase website traffic, and improve your online sales?
                Our Google Ads and PPC management services are designed to help
                businesses reach the right customers at the right time. We
                create, manage, monitor, and optimize high-performing Google
                advertising campaigns based on your business goals, target
                audience, keywords, location, and budget.
              </p>
            </div>
          </div>
        </div>

        {/* Row-wise Image Cards Layout */}
        <div className="carousel-stage">
          <div className="carousel-3d-perspective">
            {images?.map((image, index) => {
              const rotationAngles = [-4, 3, -2, 5, -3];
              const rotation = rotationAngles[index % rotationAngles.length] || 0;

              return (
                <div
                  key={image.id || index}
                  className="carousel-card-slot"
                  style={{
                    transform: `rotateY(${index * 2}deg)`,
                  }}
                >
                  <div 
                    className="carousel-card-inner"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt || "Carousel image"}
                      fill
                      unoptimized
                      sizes="(max-width: 480px) 120px, (max-width: 768px) 140px, 180px"
                      className="carousel-card-img"
                      priority={index < 3}
                    />
                    <div className="carousel-card-shine" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-figtree text-black mt-2" data-aos="fade-up">
          As an experienced Google Ads management agency in Chennai, we help
          businesses make the most of Google Ads, Google AdWords, PPC campaigns,
          search advertising, display advertising, remarketing, and
          conversion-focused campaigns.
        </p>
      </div>
    </section>
  );
}

export default ImageCarouselHero;