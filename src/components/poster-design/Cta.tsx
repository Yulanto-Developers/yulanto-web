"use client";

import React, { useEffect } from "react";
// Ensure AOS JS & CSS are imported if not initialized globally in app/layout
import AOS from "aos";
import "aos/dist/aos.css";

export default function PosterCTA() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110 overflow-hidden">
      <div className="container container-1550">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-12 col-lg-10">
            {/* Title Fade Up */}
            <h2 
              className="px-about-title mb-20" 
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              <span className="text-blue-about">Get Creative Flyer &amp; </span>
              Poster Designs in Chennai
            </h2>

            {/* Main Paragraph Fade Up */}
            <p 
              className="text-figtree text-black mb-30 fs-5" 
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              Give your brand a stronger visual presence with professionally designed
              flyers and posters. Partner with our graphic designers in Chennai to create
              marketing designs that are creative, engaging, and aligned with your
              business goals.
            </p>

            {/* Sub-paragraph Fade Up */}
            <p 
              className="text-figtree text-black font-semibold mb-4 fs-5" 
              data-aos="fade-up" 
              data-aos-delay="300"
            >
              Need a creative flyer or poster for your business? Get in touch with us
              today and let&apos;s create a design that gets noticed.
            </p>

            {/* Button Zoom In */}
            <div data-aos="zoom-in" data-aos-delay="400">
              <a
                href="#contact"
                className="btn btn-primary px-4 py-3 rounded-pill fw-bold"
                style={{ backgroundColor: "#053456", borderColor: "#053456" }}
              >
                Get in Touch Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}