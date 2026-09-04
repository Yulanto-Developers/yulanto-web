"use client";

import React from "react";

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

const featuresList: FeatureItem[] = [
  {
    id: 0,
    title: "Creative & Original Concepts",
    description:
      "We develop designs that are visually appealing while keeping your business objectives in focus.",
    icon: "fa-solid fa-lightbulb",
    image: "/assets/img/flyerposter/Flyers-&-Posters-1.jpg",
  },
  {
    id: 1,
    title: "Brand-Focused Designs",
    description:
      "Your logo, brand colors, typography, images, and messaging are incorporated consistently across every design.",
    icon: "fa-solid fa-palette",
    image: "/assets/img/flyerposter/Flyers-&-Posters-2.jpg",
  },
  {
    id: 2,
    title: "Clear & Effective Communication",
    description:
      "We organize content strategically so your audience can understand your message quickly.",
    icon: "fa-solid fa-bullhorn",
    image: "/assets/img/flyerposter/Flyers-&-Posters-3.jpg",
  },
  {
    id: 3,
    title: "Professional Quality",
    description:
      "Our designs are created with attention to layout, typography, imagery, spacing, and visual hierarchy.",
    icon: "fa-solid fa-award",
    image: "/assets/img/flyerposter/Flyers-&-Posters-3.jpg",
  },
  {
    id: 4,
    title: "Print & Digital Ready",
    description:
      "Get designs optimized for printing, websites, social media, WhatsApp, email campaigns, and other digital platforms.",
    icon: "fa-solid fa-layer-group",
    image: "/assets/img/flyerposter/Flyers-&-Posters-1.jpg",
  },
];

export default function WhyChooseFlyerPoster() {
  return (
    <section className="px-about-6-area pt-80 pb-80  " style={{ backgroundColor: "#ffffff" }}>
      <div className="container container-1550">
        <div className="row align-items-center g-5">
          {/* Left Side: Image Layout */}
          <div className="col-12 col-lg-6" data-aos="fade-right">
            <div className="row align-items-center g-3">
              {/* Left Large Image */}
              <div className="col-6">
                <div
                  className="overflow-hidden shadow-sm"
                  style={{
                    height: "360px",
                    borderRadius: "24px",
                  }}
                >
                  <img
                    src={featuresList[0].image}
                    alt={featuresList[0].title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                   
                      transition: "all 0.5s ease",
                    }}
                  />
                </div>
              </div>

              {/* Right Stacked Images */}
              <div className="col-6">
                <div className="d-flex flex-column gap-3">
                  {/* Top Image */}
                  <div
                    className="overflow-hidden shadow-sm"
                    style={{
                      height: "170px",
                      borderRadius: "24px 60px 24px 24px",
                    }}
                  >
                    <img
                      src={featuresList[1].image}
                      alt={featuresList[1].title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "all 0.5s ease",
                      }}
                    />
                  </div>

                  {/* Bottom Image */}
                  <div
                    className="overflow-hidden shadow-sm"
                    style={{
                      height: "170px",
                      borderRadius: "24px 24px 60px 24px",
                    }}
                  >
                    <img
                      src={featuresList[2].image}
                      alt={featuresList[2].title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "all 0.5s ease",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="col-12 col-lg-6" data-aos="fade-left">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">Flyers & Posters That </span>
                Support Your Marketing Goals
              </h4>
              <p className="text-figtree text-black mb-3">
                Whether you are launching a new product, announcing a special
                offer, promoting an event, or building brand awareness, the right
                visual communication can make a significant difference.
              </p>
              <p className="text-figtree text-black mb-0">
                Our flyer and poster design company in Chennai helps businesses
                create attractive marketing materials that grab attention,
                communicate value, and strengthen brand visibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}