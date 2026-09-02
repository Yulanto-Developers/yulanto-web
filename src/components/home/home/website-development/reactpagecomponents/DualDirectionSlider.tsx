"use client";

import React from "react";
import Image from "next/image";

// Replace these imports with your actual image paths
import image1 from "@/assets/images/ourstory/image-1.jpg";
import image2 from "@/assets/images/ourstory/image-2.jpg";
import image3 from "@/assets/images/ourstory/vector-1.png";
import image4 from "@/assets/images/ourstory/vector-2.png";
import image5 from "@/assets/images/ourstory/image-1.jpg";

const rowOneItems = [
  { id: 1, title: "Corporate & Business Websites", image: image1 },
  { id: 2, title: "Startups & New Businesses", image: image2 },
  { id: 3, title: "Real Estate Companies", image: image3 },
  { id: 4, title: "Construction & Infrastructure", image: image4 },
  { id: 5, title: "Manufacturing & Industrial Businesses", image: image5 },
];

const rowTwoItems = [
  { id: 6, title: "Educational Institutions", image: image1 },
  { id: 7, title: "Professional Services", image: image2 },
  { id: 8, title: "Healthcare & Service Businesses", image: image3 },
  { id: 9, title: "E-commerce & Online Businesses", image: image4 },
  { id: 10, title: "Custom Web Applications", image: image5 },
];

const DualDirectionSlider = () => {
  return (
    <section className="dual-slider-section">
      <div className="container-fluid px-0">

        <h2 className="px-about-title mb-2 text-center">
          <span className="text-blue-about">React Website Design</span>
          for Different Businesses
        </h2>
        <p className="text-figtree text-black mt-2 mb-4 text-center">Our React website solutions can be customized for a wide range of industries and business requirements, including</p>

        {/* Row 1: Right to Left */}
        <div className="slider-row slider-row-left">
          <div className="slider-track">
            {/* Duplicated array for an infinite loop */}
            {[...rowOneItems, ...rowOneItems].map((item, index) => (
              <div key={`row1-${item.id}-${index}`} className="slider-card">
                <div className="card-image-wrapper">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 240px, 320px"
                  />
                  <div className="card-overlay" />
                </div>
                <div className="card-content">
                  <h3 className="text-tenor title-h3">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="slider-row slider-row-right">
          <div className="slider-track">
            {/* Duplicated array for an infinite loop */}
            {[...rowTwoItems, ...rowTwoItems].map((item, index) => (
              <div key={`row2-${item.id}-${index}`} className="slider-card">
                <div className="card-image-wrapper">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 240px, 320px"
                  />
                  <div className="card-overlay" />
                </div>
                <div className="card-content">
                  <h3 className="text-tenor title-h3">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        .dual-slider-section {
          padding: 20px 0 40px;
          overflow: hidden;
        }

        .slider-row {
          display: flex;
          width: 100%;
          overflow: hidden;
          margin-bottom: 24px;
          position: relative;
        }

        .slider-row:last-child {
          margin-bottom: 0;
        }

        .slider-track {
          display: flex;
          gap: 20px;
          width: max-content;
        }

        /* Continuous Left to Right Scrolling (Right-to-Left visually moving track) */
        .slider-row-left .slider-track {
          animation: scrollLeft 30s linear infinite;
        }

        /* Continuous Right to Left Scrolling (Left-to-Right visually moving track) */
        .slider-row-right .slider-track {
          animation: scrollRight 30s linear infinite;
        }

        /* Pause auto-scroll on mouse hover */
        .slider-row:hover .slider-track {
          animation-play-state: paused;
        }

        /* Card Container */
        .slider-card {
          position: relative;
          width: 320px;
          height: 220px;
          flex-shrink: 0;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(5, 52, 86, 0.08);
          cursor: pointer;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .slider-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(5, 52, 86, 0.18);
        }

        /* Image Wrapper */
        .card-image-wrapper {
          position: absolute;
          inset: 0;
        }

        .card-image-wrapper :global(img) {
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .slider-card:hover .card-image-wrapper :global(img) {
          transform: scale(1.08);
        }

        /* Contrast Overlay */
        .card-overlay {
          position: absolute;
          inset: 0;
         background: linear-gradient(rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.25) 40%, rgba(0, 0, 0, 0.65) 100%);
          transition: background 0.3s ease;
        }

        .slider-card:hover .card-overlay {
         background: linear-gradient(
           to top,
           rgba(0, 0, 0, 0.95) 0%,
           rgba(0, 0, 0, 0.5) 60%,
           rgba(0, 0, 0, 0.15) 100%
         );
        }

        /* Text Content */
        .card-content {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 20px;
          z-index: 2;
        }

        .title-h3 {
          color: #ffffff;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.3;
          margin: 0;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        /* Keyframe Animations */
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 10px));
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(calc(-50% - 10px));
          }
          100% {
            transform: translateX(0);
          }
        }

        /* Responsive Breakpoints */
        @media (max-width: 768px) {
          .slider-card {
            width: 250px;
            height: 180px;
            border-radius: 12px;
          }

          .title-h3 {
            font-size: 16px;
          }

          .card-content {
            padding: 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default DualDirectionSlider;