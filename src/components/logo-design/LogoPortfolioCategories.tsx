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
      className="px-about-6-area pt-50 pb-80 pb-lg-110" style={{
        backgroundColor: "#ffffff",
      
      }}
     
    >
      <div   className="container container-1550">
        {/* Header */}
        <div
         
          data-aos="fade-down"
        >
          <h4
            className="px-about-title mb-20 text-center" 
           
          >
            Our Logo Portfolio <span className="text-blue-about">Includes</span>
          </h4>

         
        </div>

        {/* 2-Column Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "16px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {categories.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.name}
                data-aos="fade-up"
                data-aos-delay={100 + (index % 2) * 50}
                style={{
                  backgroundColor: "#f8fafc",
                  padding: "20px 24px",
                  borderRadius: "12px",
                  border: "1px solid rgba(5, 52, 86, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <IconComponent
                  size={20}
                  style={{
                    color: "#53ae7d",
                    flexShrink: 0,
                  }}
                />
                <h3
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 600,
                    color: "#053456",
                    margin: 0,
                  }}
                >
                  {item.name}
                </h3>
              </div>
            );
          })}
        </div>
         <p className="text-figtree text-black mt-20 text-center">Every design is developed with a focus on brand recognition, simplicity, originality, and long-term usability.</p>
      </div>
    </section>
  );
};

export default LogoPortfolioCategories;