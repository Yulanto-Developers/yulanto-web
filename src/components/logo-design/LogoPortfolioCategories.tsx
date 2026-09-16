"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Building2,
  Rocket,
  Briefcase,
  Package,
  Wrench,
  ShoppingBag,
  User,
  Home,
  Factory,
  Cpu,
  Utensils,
  Award,
} from "lucide-react";

const categories = [
  { name: "Corporate logos", icon: Building2 },
  { name: "Startup logos", icon: Rocket },
  { name: "Business logos", icon: Briefcase },
  { name: "Product logos", icon: Package },
  { name: "Service-based business logos", icon: Wrench },
  { name: "E-commerce logos", icon: ShoppingBag },
  { name: "Personal brand logos", icon: User },
  { name: "Real estate logos", icon: Home },
  { name: "Industrial logos", icon: Factory },
  { name: "Technology and IT logos", icon: Cpu },
  { name: "Restaurant and hospitality logos", icon: Utensils },
  { name: "Professional service logos", icon: Award },
];

export const LogoPortfolioCategories = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      className="px-about-6-area pt-40 pb-40 pb-lg-110"
      style={{
        backgroundColor: "#ffffff",overflowX:"hidden",overflowY:"hidden"
      }}
    >
      <div className="container container-1550">
        {/* Header */}
        <div data-aos="fade-down">
          <h4 className="px-about-title mb-20 text-center">
            Our Logo Portfolio <span className="text-blue-about">Includes</span>
          </h4>
        </div>

        {/* 3-Column Layout: Columns 1 & 2 for Category Grid, Column 3 for Multiple Logo Collage */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "24px",
            maxWidth: "1400px",
            margin: "0 auto",
            alignItems: "stretch",
          }}
          className="logo-portfolio-three-col"
        >
          {/* Categories Grid spanning across Column 1 and Column 2 (displayed as a 2-column subgrid) */}
          <div
            style={{
              gridColumn: "span 2",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "16px",
            }}
            className="categories-subgrid"
          >
            {categories.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.name}
                  data-aos="fade-up"
                  data-aos-delay={100 + (index % 2) * 50}
                  style={{
                    backgroundColor: "#f5f5f5",
                    padding: "20px 24px",
                    borderRadius: "12px",
                    border: "1px solid rgba(5, 52, 86, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    transition: "all 0.3s ease",
                  }}
                  className="portfolio-category-card"
                >
                  <IconComponent
                    size={20}
                    style={{
                      color: "#53ae7d",
                      flexShrink: 0,
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "1.0625rem",
                      fontWeight: 600,
                      color: "#053456",
                      fontFamily: "Figtree, Figtree Fallback",
                      margin: 0,
                    }}
                  >
                    {item.name}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Third Column: Multiple Logo Collage Showcase */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            style={{
              backgroundColor: "#f5f5f5",
              borderRadius: "16px",
              border: "1px solid rgba(5, 52, 86, 0.08)",
             
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              position: "relative",
            }}
            className="logo-collage-column"
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                minHeight: "420px",
                borderRadius: "12px",
                overflow: "hidden",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 20px rgba(5, 52, 86, 0.04)",
              }}
              className="collage-image-container"
            >
              <img
                src="assets/img/logodesign/logos/multiple-logos-grid.jpg"
                alt="Multiple Logo Designs Showcase"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
                }}
                className="collage-hover-img"
              />
            </div>
          </div>
        </div>

        <p className="text-figtree text-black mt-20 text-center">
          Every design is developed with a focus on brand recognition, simplicity, originality, and long-term usability.
        </p>
      </div>

      <style>{`
        .portfolio-category-card:hover {
          transform: translateY(-4px);
          background-color: #ffffff !important;
          box-shadow: 0 10px 25px -5px rgba(5, 52, 86, 0.1);
          border-color: rgba(83, 174, 125, 0.3) !important;
        }
        .portfolio-category-card:hover svg {
          transform: scale(1.15);
        }
        .collage-image-container:hover .collage-hover-img {
          transform: scale(1.05);
        }
        @media (max-width: 991px) {
          .logo-portfolio-three-col {
            grid-template-columns: 1fr !important;
          }
          .categories-subgrid {
            grid-column: span 1 !important;
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 576px) {
          .categories-subgrid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default LogoPortfolioCategories;