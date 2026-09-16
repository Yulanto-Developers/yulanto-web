"use client";

import React from "react";
import { useQuoteModal } from "../home/home/myComponents/Content/QuoteContext";

export function SingleImagePackagingSection() {
  const { openModal } = useQuoteModal();
  
  return (
    <section 
      className="px-about-6-area pt-40 pb-40 pb-lg-110" 
      style={{ 
        backgroundColor: "#ffffff", 
        overflowX: "hidden", 
        width: "100%", 
        position: "relative" 
      }}
    >
      <style jsx>{`
        .content-card {
          background: #ffffff;
          border-left: 4px solid #53ae7d;
          padding: 32px;
        }

        .single-image-wrapper {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(5, 52, 86, 0.08);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .single-image-wrapper:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 45px rgba(5, 52, 86, 0.12);
        }

        .single-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 991px) {
          .content-card {
            padding: 20px;
          }
        }
      `}</style>

      {/* Section Title with AOS Animation */}
      <h4 
        className="px-about-title mb-20 text-center px-3" 
        data-aos="fade-up" 
        data-aos-duration="800"
      >
        <span className="text-blue-about">Build a Package That </span>
        Sells Your Product
      </h4>

      <div   className="container container-1550">
        <div className="row g-4 align-items-center justify-content-center">
          
          {/* LEFT SIDE: Your Content with AOS Animation */}
          <div 
            className="col-12 col-lg-6" 
            data-aos="fade-right" 
            data-aos-duration="1000"
          >
            <div className="content-card">
              <p className="text-figtree text-black mt-2">
                Your product deserves packaging that gets noticed. From the first concept to the final print file, we help transform your product packaging into a powerful brand and marketing asset.
              </p>

              <p className="text-figtree text-black mt-2">
                If you're looking for a packaging design company in Chennai, our creative team can develop professional packaging solutions that combine branding, creativity, functionality, and customer appeal.
              </p>

              <div 
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#e2e8f0",
                  margin: "24px 0"
                }}
              />

              <p className="text-figtree text-black mt-2">
                Have a new product to launch or an existing package that needs a fresh look? Talk to our packaging designers in Chennai and turn your product packaging into a memorable brand experience.
              </p>

              <button
                onClick={openModal}
                className="btn d-inline-flex align-items-center gap-2 py-3 px-4 rounded-3 fw-bold text-decoration-none mt-3"
                style={{
                  backgroundColor: '#053456',
                  color: '#ffffff',
                  fontSize: '15px',
                  transition: 'all 0.3s ease',
                  border: '1px solid #053456',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#053456';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#053456';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span style={{ fontFamily: "Figtree, Figtree Fallback" }}>Let’s Design Packaging That Gets Noticed</span>
                <i className="fa-solid fa-paper-plane" style={{ fontSize: '14px' }}></i>
              </button>

            </div>
          </div>

          {/* RIGHT SIDE: Single Showcase Image with AOS Animation */}
          <div 
            className="col-12 col-lg-6" 
            data-aos="fade-left" 
            data-aos-duration="1000"
          >
            <div className="single-image-wrapper">
              <img 
                src="assets/img/package/last-img.jpg" 
                alt="Package Design Showcase" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SingleImagePackagingSection;