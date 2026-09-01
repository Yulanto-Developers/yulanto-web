"use client";

import React from "react";

interface ServiceItem {
  title: string;
  iconClass: string;
}

const servicesList: ServiceItem[] = [
  { title: "Business Flyer Design", iconClass: "fa-solid fa-briefcase" },
  { title: "Promotional Flyer Design", iconClass: "fa-solid fa-rectangle-ad" },
  { title: "Corporate Flyer Design", iconClass: "fa-solid fa-building" },
  { title: "Product Flyer Design", iconClass: "fa-solid fa-box-open" },
  { title: "Event Flyer Design", iconClass: "fa-solid fa-calendar-check" },
  { title: "Festival & Offer Flyers", iconClass: "fa-solid fa-tags" },
  { title: "Real Estate Flyer Design", iconClass: "fa-solid fa-city"},
  { title: "Digital Flyer Design", iconClass: "fa-solid fa-laptop" },
  { title: "Social Media Flyer Design", iconClass: "fa-solid fa-share-nodes" },
  { title: "Advertising Poster Design", iconClass: "fa-solid fa-bullhorn" },
  { title: "Event Poster Design", iconClass: "fa-solid fa-ticket" },
  { title: "Promotional Poster Design", iconClass: "fa-solid fa-percent" },
  { title: "Product Launch Posters", iconClass: "fa-solid fa-rocket" },
  { title: "Corporate Poster Design", iconClass: "fa-solid fa-id-card" },
  { title: "Festival & Campaign Posters", iconClass: "fa-solid fa-wand-magic-sparkles" },
];

export default function FlyerPosterServices() {
  return (
    <div className="flyer-poster-wrapper">

      {/* SECTION 1: Left Content | Right Image */}
      <section className="px-about-6-area pt-50 pb-80 pb-lg-110">
        <div className="container container-1550">
          <div className="row g-5 align-items-center">

            {/* Left Side Content */}
            <div className="col-12 col-lg-7" data-aos="fade-up">
              <div className="px-project-title-box">
                <span className="tp-section-subtitle text-black blink-ball">
                  Our Flyer &amp; Poster Design Services
                </span>
                <h4 className="px-about-title mb-20">
                  <span className="text-blue-about">Creative Flyer Design </span>
                  for Powerful Promotions
                </h4>
                <p className="text-figtree mt-2 ">
                  A well-designed flyer can communicate your offer quickly and effectively. Our flyer designers in Chennai create customized designs for digital promotions, print campaigns, product launches, business offers, events, and marketing campaigns.
                  <br /><br />
                  From simple promotional flyers to premium corporate designs, we make sure your flyer reflects your brand identity and communicates your message clearly.
                </p>
              </div>
            </div>

            {/* Right Side Image */}
            <div className="col-12 col-lg-5" data-aos="fade-up" data-aos-delay="100">
              <div className="position-relative">
                <div
                  className="position-absolute w-100 h-100 rounded-4"
                  style={{
                    border: "2px solid #53ae7d",
                    top: "15px",
                    left: "15px",
                    zIndex: 0,
                  }}
                />
                <div
                  className="position-relative rounded-4 overflow-hidden shadow-lg"
                  style={{ zIndex: 1, height: "380px" }}
                >
                  <img
                    src="/assets/img/logodesign/Logo-1.jpg"
                    alt="Creative Flyer Design Showcase"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div
                    className="position-absolute bottom-0 start-0 p-3 m-3 rounded-3 shadow-sm"
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #53ae7d",
                    }}
                  >
                    <h6 className="mb-0 fw-bold" style={{ color: "#053456",fontFamily: "Figtree, Figtree Fallback",
 }}>
                      <i className="fa-solid fa-circle-check me-2" style={{ color: "#53ae7d" }}></i>
                      Promotional Print Ready
                    </h6>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: Left Image | Right Content & Services Tiles */}
      <section className="px-about-6-area pt-50 pb-80 pb-lg-110" style={{
        backgroundColor: "#ffffff",
      
      }}>
        <div className="container container-1550">
          {/* Title Section */}
          <div className="row align-items-center mb-5" data-aos="fade-up">

            <div className="col-xl-12">
              <div className="px-project-title-box">
                <h4 className="px-about-title mb-20 text-center">
                  <span className="text-blue-about">Professional Poster</span>
                  Design in Chennai
                </h4>
                <p className="text-figtree text-black mt-2">
                  Make your marketing message impossible to ignore with professionally designed posters. Our poster designers in Chennai create visually engaging posters for advertisements, events, promotions, product launches, educational campaigns, social media, and business announcements.

                  Every poster is designed with the right balance of typography, images, colors, branding, and content to create maximum visual impact.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-5 align-items-center">

            {/* Left Side Image */}
            <div className="col-12 col-lg-5 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
              <div className="position-relative">
                <div
                  className="position-absolute w-100 h-100 rounded-4"
                  style={{
                    border: "2px solid #53ae7d",
                    top: "15px",
                    left: "-15px",
                    zIndex: 0,
                  }}
                />
                <div
                  className="position-relative rounded-4 overflow-hidden shadow-lg"
                  style={{ zIndex: 1, height: "550px" }}
                >
                  <img
                    src="/assets/img/logodesign/Logo-2.jpg"
                    alt="Professional Poster Design Showcase"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div
                    className="position-absolute bottom-0 start-0 p-3 m-3 rounded-3 shadow-sm"
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #53ae7d",
                    }}
                  >
                    <h6 className="mb-0 fw-bold" style={{ color: "#053456", fontFamily: "Figtree, Figtree Fallback",  }}>
                      <i className="fa-solid fa-circle-check me-2" style={{ color: "#53ae7d", }}></i>
                      High-Impact Posters
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Content & Service Grid */}

            <div className="col-12 col-lg-7 order-1 order-lg-2">


              {/* Service Tiles Grid */}
              <div className="row g-3">
                {servicesList.map((service, index) => (
                  <div key={index} className="col-12 col-md-6" data-aos="fade-up" data-aos-delay={index * 50}>
                    <div
                      className="p-3 rounded-3 d-flex align-items-center gap-3 h-100"
                      style={{
                        border: "1px solid rgba(5, 52, 86, 0.15)",
                        backgroundColor: "#ffffff",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(83, 174, 125, 0.1)";
                        e.currentTarget.style.borderColor = "#53ae7d";
                        e.currentTarget.style.transform = "translateX(5px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#ffffff";
                        e.currentTarget.style.borderColor = "rgba(5, 52, 86, 0.15)";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}
                    >
                      <div
                        className="d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"
                        style={{
                          width: "36px",
                          height: "36px",
                          backgroundColor: "rgba(83, 174, 125, 0.15)",
                          color: "#53ae7d",
                          fontSize: "15px!important",
                          fontFamily: "Figtree, Figtree Fallback",

                        }}
                      >
                        <i className={service.iconClass}></i>
                      </div>
                      <span className="fw-semibold" style={{ color: "#053456", fontSize: "15px!important",fontFamily: "Figtree, Figtree Fallback",
 }}>
                        {service.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}