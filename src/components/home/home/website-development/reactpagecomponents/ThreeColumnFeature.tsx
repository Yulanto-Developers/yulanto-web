"use client";

import React from "react";
import Image from "next/image";

// Replace these with your actual image paths
import centerFeatureImage from "@/assets/images/ourstory/image-1.jpg";

const ThreeColumnFeature = () => {
  return (
    <section className="three-column-feature-section">
      <div className="container">
        <div className="row g-4 g-xl-5 align-items-stretch">
          {/* Column 1: Left Heading & Secondary Content */}
          <div className="col-12 col-lg-4 d-flex flex-column justify-content-between">
            <div className="content-box">
              <h3 className="text-tenor mb-3">
                Your Trusted <span className="text-blue-about"> Website Builders </span> in Chennai
              </h3>
              <p className="text-figtree text-black mt-2">
                Choosing the right development partner is important when building your online presence. As professional website builders in Chennai, we focus on creating websites that combine modern technology, professional design, usability, and performance.
              </p>
              <p className="text-figtree text-black mt-3">
                From a simple corporate website to a feature-rich React web application, our team can develop a solution that fits your business requirements and future growth plans.
              </p>
            </div>
          </div>

          {/* Column 2: Center Main Hero Image & Floating Badge */}
          <div className="col-12 col-lg-4 text-center d-flex flex-column justify-content-center">
            <div 
              className="main-image-container my-3 my-lg-0"
              style={{ position: "relative" }}
            >
              {/* 
                Adding position: relative inline guarantees the absolute 
                fill-image is bounded immediately on SSR before styled-jsx hydrates.
              */}
              <div 
                className="main-image-wrapper"
                style={{ position: "relative", width: "100%" }}
              >
                <Image
                  src={centerFeatureImage}
                  alt="Creative Website Design and React Development"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Floating Counter Box */}
              <div className="floating-stat-box">
                <span className="stat-number">100+</span>
                <span className="stat-label">PROJECTS DONE</span>
              </div>
            </div>
          </div>

          {/* Column 3: Right Content */}
          <div className="col-12 col-lg-4 d-flex flex-column justify-content-between">
            <div className="content-box">
              <h3 className="text-tenor mb-3">
                Upgrade Your <span className="text-blue-about"> Online Presence </span> with React JS
              </h3>
              <p className="text-figtree text-black mt-2">
                A modern website should be more than an online brochure. It should communicate your brand, engage your visitors, support your marketing efforts, and help generate business opportunities.
              </p>
              <p className="text-figtree text-black mt-2">
                With our React website design and development expertise, you can get a modern digital platform that is designed for performance, scalability, and a better user experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .three-column-feature-section {
          padding: 80px 0;
          background-color: #ffffff;
          overflow: hidden;
        }

        .content-box {
          padding: 0;
        }

        .main-image-container {
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
        }

        .main-image-wrapper {
          aspect-ratio: 4 / 5.2;
          max-height: 520px;
          border-radius: 8px;
          overflow: hidden;
        }

        .floating-stat-box {
          position: absolute;
          bottom: 24px;
          left: -16px;
          background: #053456;
          color: #ffffff;
          padding: 14px 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          z-index: 3;
          border-radius: 4px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }

        .stat-number {
          font-size: 28px;
          font-weight: 800;
          line-height: 1;
        }

        .stat-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-top: 4px;
        }

        @media (max-width: 1199px) {
          .floating-stat-box {
            left: 10px;
            bottom: 20px;
            padding: 10px 16px;
          }

          .stat-number {
            font-size: 22px;
          }
        }

        @media (max-width: 991px) {
          .three-column-feature-section {
            padding: 50px 0;
          }

          .main-image-container {
            max-width: 100%;
          }

          .main-image-wrapper {
            aspect-ratio: 16 / 10;
            max-height: 380px;
          }

          .floating-stat-box {
            left: 16px;
            bottom: 16px;
          }
        }

        @media (max-width: 576px) {
          .main-image-wrapper {
            aspect-ratio: 4 / 3;
          }
        }
      `}</style>
    </section>
  );
};

export default ThreeColumnFeature;