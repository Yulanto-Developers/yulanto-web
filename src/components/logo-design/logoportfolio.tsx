import React from "react";
import { ScrollTiltedGrid } from "./scroll-tilted-grid";

export default function DemoPage() {
  // Keep only 6 images in the array
  const customImages = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
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