"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ScrollTiltedGrid } from "./scroll-tilted-grid";

export default function DemoPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);

  const customImages = [
    "assets/img/logodesign/logos/Design-portfolio-1.jpg",
    "assets/img/logodesign/logos/Design-portfolio-2.jpg",
    "assets/img/logodesign/logos/Design-portfolio-3.jpg",
    "assets/img/logodesign/logos/Design-portfolio-4.jpg",
    "assets/img/logodesign/logos/Design-portfolio-5.jpg",
    "assets/img/logodesign/logos/Design-portfolio-6.jpg",
  ];

  return (
    <section 
      className="px-about-6-area pt-40 pb-40 pb-lg-110" 
      style={{ position: "relative" }}
    >
      <div style={{ width: "100%", overflowX: "hidden",  overflowY: "hidden",position: "relative" }}>
        <div className="container container-1550">
          {/* Title Section with AOS */}
          <div className="row align-items-center mb-5" data-aos="fade-up">
            <div className="col-xl-3">
              <span className="tp-section-subtitle text-black blink-ball">
                Our Logo Design Portfolio
              </span>
            </div>
            <div className="col-xl-9">
              <div className="px-project-title-box">
                <h4 className="px-about-title mb-20">
                  <span className="text-blue-about">Creative Logo Concepts </span>for Different Industries
                </h4>
                <p className="text-figtree text-black mt-2" style={{ fontFamily: "Figtree, sans-serif", lineHeight: "1.6" }}>
                  Our designers have experience creating logos for startups, small businesses, established companies, professionals, institutions, and various industries.
                  
                  From simple and elegant wordmarks to modern abstract symbols, we develop logo concepts based on the unique requirements of each brand.
                </p>
              </div>
            </div>
          </div>

          {/* Grid Section with AOS */}
          <div data-aos="fade-up" data-aos-delay="200">
            <ScrollTiltedGrid images={customImages} columns={2} loop={false} />
          </div>
        </div>
      </div>
    </section>
  );
}