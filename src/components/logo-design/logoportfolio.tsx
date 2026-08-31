import React from "react";
import { ScrollTiltedGrid } from "./scroll-tilted-grid";

export default function DemoPage() {
  // Keep only 6 images in the array
  const customImages = [
    "assets/img/logodesign/logos/Design-portfolio-1.jpg",
    "assets/img/logodesign/logos/Design-portfolio-2.jpg",
    "assets/img/logodesign/logos/Design-portfolio-3.jpg",
    "assets/img/logodesign/logos/Design-portfolio-4.jpg",
    "assets/img/logodesign/logos/Design-portfolio-5.jpg",
    "assets/img/logodesign/logos/Design-portfolio-6.jpg",
  ];

  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110">
      <div className="container container-1550">
        {/* Title Section */}
        <div className="row align-items-center mb-5">
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
              <p className="text-figtree text-black mt-2">
                Our designers have experience creating logos for startups, small businesses, established companies, professionals, institutions, and various industries.

                From simple and elegant wordmarks to modern abstract symbols, we develop logo concepts based on the unique requirements of each brand.
              </p>
            </div>
          </div>
        </div>

        {/* Change columns={3} for a 2-row x 3-column grid of 6 images */}
        <ScrollTiltedGrid images={customImages} columns={2} loop={false} />
      </div>
    </section>
  );
}