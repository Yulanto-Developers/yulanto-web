"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const highlights = [
  "Better search visibility",
  "Relevant organic traffic",
  "Quality leads",
  "Sustainable business growth",
];

export default function ChooseSeoAgencySection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
  }, []);

  return (
    <section
      className="px-about-6-area pt-50 pb-80 pb-lg-110"
      data-aos="fade-up"
      data-aos-duration="600"
      style={{
        overflow: "hidden",
      }}
    >
      <div className="container container-1550">
        {/* Header Block */}
        <div className="row align-items-center mb-5" data-aos="fade-up">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
              Why Partner With Us
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">Choose a Trusted SEO Agency </span>
                in Chennai
              </h4>
            </div>
          </div>
        </div>

        {/* Content & Feature Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2.5rem",
            marginTop: "2rem",
            alignItems: "start",
          }}
        >
          {/* Main Description */}
          <div data-aos="fade-up" data-aos-delay="300">
            <p className="text-figtree text-black mt-2">
              If you are searching for the <strong>best SEO company in Chennai</strong>,{" "}
              <strong>best SEO agency in Chennai</strong>, or <strong>professional SEO services in Chennai</strong>, 
              we can create a customized SEO strategy tailored precisely to your business goals and target audience.
            </p>
            <p className="text-figtree text-black mt-2">
              We skip shortcuts and focus entirely on sustainable, search-engine-compliant practices that deliver predictable results for startups, local businesses, and enterprise brands alike.
            </p>
          </div>

          {/* Core Focus Cards with FontAwesome Icons */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1rem",
            }}
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={400 + index * 100}
                style={{
                  backgroundColor: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#53ae7d";
                  e.currentTarget.style.backgroundColor = "#f8fdfa";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e5e7eb";
                  e.currentTarget.style.backgroundColor = "#f9fafb";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    fontSize: "24px",
                    color: "#53ae7d",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "#053456",
                    lineHeight: "1.4",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}