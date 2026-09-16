"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPalette } from "@fortawesome/free-solid-svg-icons";
import { useQuoteModal } from "../home/home/myComponents/Content/QuoteContext";

export function BuildPresenceSection() {
    const { openModal } = useQuoteModal();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="px-about-6-area pt-40 pb-40 pb-lg-110 overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
      <div className="container container-1550">
        <div 
          className="rounded-4 p-4 p-md-5 position-relative overflow-hidden shadow-sm"
          style={{ backgroundColor: "#053456" }}
          data-aos="fade-up"
        >
          <div className="row g-4 align-items-center">
            
            {/* Left Content Area (Text + Button Below) */}
            <div className="col-lg-7" data-aos="fade-right" data-aos-delay="100">
              {/* Top Tag Badge */}
             

              {/* Section Heading */}
              <h4 className="px-about-title text-white mb-20">
                <span style={{ color: "#53ae7d" }}>Build a Stronger </span>
                Social Media Presence
              </h4>

              {/* Main Content Paragraphs */}
              <p className="text-figtree text-white mt-2 mb-3 lh-base" style={{ fontSize: "16px", opacity: "0.9" }}>
                Your social media page is an extension of your brand. Make every post count with professionally designed creatives that communicate your message clearly and represent your business with confidence.
              </p>

              <p className="text-figtree text-white mt-2 mb-4 lh-base" style={{ fontSize: "16px", opacity: "0.9" }}>
                Looking for professional social media creative design services in Chennai? Let our creative team turn your ideas into scroll-stopping social media designs that support your brand and marketing goals.
              </p>

              {/* CTA Button directly below content */}
              <div>
              
                {/* Left Aligned CTA Button */}
            <button
             onClick={openModal}
              className="btn d-inline-flex align-items-center gap-2 py-3 px-4 rounded-3 fw-bold text-decoration-none"
              style={{
                backgroundColor: '#53ae7d',
                color: '#ffffff',
                fontSize: '15px',
                transition: 'all 0.3s ease',
                border: '1px solid #53ae7d',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#53ae7d';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#53ae7d';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
            <span style={{fontFamily: "Figtree, Figtree Fallback"}}>Get Started Today</span>
              <i className="fa-solid fa-paper-plane" style={{ fontSize: '14px'}}></i>
            </button>

              </div>
            </div>

            {/* Right Side Image */}
            <div className="col-lg-5 text-center" data-aos="fade-left" data-aos-delay="200">
              <div className="position-relative d-inline-block">
                <img
                  src="assets/img/SocialMediaCreativeDesigns/last.jpg"
                  alt="Build Social Media Presence"
                  className="img-fluid rounded-4 shadow"
                  style={{
                    maxHeight: "360px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default BuildPresenceSection;