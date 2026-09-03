"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Header: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110" 
style={{
        backgroundColor: "#ffffff",
      
      }}>
      <div className="container container-1550">
        <div className="row align-items-center">
          {/* Left Side: Image with AOS Zoom-In Effect */}
          <div className="col-lg-6 col-xl-6 mb-40 mb-lg-0" data-aos="fade-right" data-aos-delay="100">
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(5, 52, 86, 0.12)",
                border: "1px solid #eef2f5",
              }}
            >
              <img
                src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRAKZ4LLeFY8djT-MjbJOR5uE-XwwPdX2kXXRFxdVXJvJ3LNql4IIk8-xov7xOWoZOdgWaK51GPDMPgMec"
                alt="WordPress Development Workspace in Chennai"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          {/* Right Side: Content with Staggered AOS Fade-Up Effects */}
          <div className="col-lg-6 col-xl-6">
            <div className="px-project-title-box" style={{ paddingLeft: "15px" }}>
              {/* Heading */}
              <h4 className="px-about-title mb-20" data-aos="fade-up" data-aos-delay="200">
                <span className="text-blue-about">
                  WordPress Development 
                </span>Company in Chennai
              </h4>

              {/* Paragraph 1 */}
              <p
                className="text-figtree text-black mt-2"
                data-aos="fade-up"
                data-aos-delay="300"
               
              >
                Yulanto Web Creations provides professional WordPress website design and development services in Chennai for businesses looking to establish, improve, or expand their online presence.
              </p>

              {/* Paragraph 2 */}
              <p
                className="text-figtree text-black mt-2"
                data-aos="fade-up"
                data-aos-delay="400"
               
              >
                From WordPress website design and custom development to eCommerce, redesign, maintenance, and support, we provide a complete solution under one roof.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;