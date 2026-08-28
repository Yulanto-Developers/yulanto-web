import React from "react";
import { ScrollTiltedGrid, DEFAULT_GRID_IMAGES } from "./scroll-tilted-grid";

export default function DemoPage() {
  // Pass custom array of images (or use DEFAULT_GRID_IMAGES) directly
  const customImages = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
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

        {/* Renders exactly 16 images across 4 rows (4 per row) with no looping */}
        <ScrollTiltedGrid images={customImages} columns={4} loop={false} />
      </div>
    </section>
  );
}