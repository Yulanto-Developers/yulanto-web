"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  Layout, 
  Code2, 
  RotateCw, 
  Building, 
  ShoppingCart, 
  BookOpen, 
  Wrench 
} from "lucide-react";

const rowOneServices = [
  {
    icon: Layout,
    title: "WordPress Website Design",
    description:
      "We create modern and engaging WordPress websites that represent your brand professionally and provide visitors with a clear and intuitive browsing experience.",
  },
  {
    icon: Code2,
    title: "Custom WordPress Development",
    description:
      "Need functionality beyond standard WordPress features? Our WordPress website developers can create customized solutions based on your specific business requirements.",
  },
  {
    icon: RotateCw,
    title: "WordPress Website Redesign",
    description:
      "An outdated website can affect your brand image and user experience. We redesign existing WordPress websites with modern layouts, responsive designs, improved navigation, and better performance.",
  },
  {
    icon: Building,
    title: "Business & Corporate Websites",
    description:
      "We develop professional WordPress websites for companies looking to establish a strong digital presence and showcase their services, products, projects, and achievements.",
  },
];

const rowTwoServices = [
  {
    icon: ShoppingCart,
    title: "WordPress eCommerce Development",
    description:
      "We can develop WordPress-powered online stores with product catalogues, shopping carts, payment gateway integration, order management, and other essential eCommerce features.",
  },
  {
    icon: BookOpen,
    title: "WordPress Blog Development",
    description:
      "Create an easy-to-manage blog with organized categories, search-friendly content structures, author sections, media integration, and social sharing features.",
  },
  {
    icon: Wrench,
    title: "WordPress Maintenance & Support",
    description:
      "Keep your website updated, secure, and performing efficiently with ongoing WordPress maintenance, updates, backups, troubleshooting, and technical support.",
  },
];

export function WordPressServicesGrid() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110" >
      <div className="container container-1550">
        <div className="row align-items-center">
          <div className="col-xl-12">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20 text-center">
                <span className="text-blue-about">Complete WordPress Website  </span>Development Services
              </h4>
              <p className="text-figtree text-center text-black mt-2 font-paragraph-cls">
Our WordPress website development services cover everything required to launch and manage a professional business website.              </p>
            </div>
          </div>
        </div>
        {/* Row 1: 4 Cards */}
        <div className="row g-4 mb-4">
          {rowOneServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="col-xl-3 col-lg-6 col-md-6" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div 
                  className="h-100 p-4 rounded-4 position-relative overflow-hidden d-flex flex-column justify-content-between"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(5, 52, 86, 0.12)",
                    boxShadow: "0 4px 20px rgba(5, 52, 86, 0.05)",
                    transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.borderColor = "#53ae7d";
                    e.currentTarget.style.boxShadow = "0 14px 30px rgba(5, 52, 86, 0.12)";
                    const iconBox = e.currentTarget.querySelector(".service-icon-box") as HTMLElement;
                    if (iconBox) {
                      iconBox.style.backgroundColor = "#53ae7d";
                      iconBox.style.color = "#ffffff";
                      iconBox.style.transform = "scale(1.1)";
                    }
                    const topBar = e.currentTarget.querySelector(".top-accent-bar") as HTMLElement;
                    if (topBar) {
                      topBar.style.width = "100%";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "rgba(5, 52, 86, 0.12)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(5, 52, 86, 0.05)";
                    const iconBox = e.currentTarget.querySelector(".service-icon-box") as HTMLElement;
                    if (iconBox) {
                      iconBox.style.backgroundColor = "rgba(5, 52, 86, 0.06)";
                      iconBox.style.color = "#053456";
                      iconBox.style.transform = "scale(1)";
                    }
                    const topBar = e.currentTarget.querySelector(".top-accent-bar") as HTMLElement;
                    if (topBar) {
                      topBar.style.width = "0%";
                    }
                  }}
                >
                  {/* Top Animated Color Bar */}
                  <div 
                    className="top-accent-bar position-absolute top-0 start-0"
                    style={{
                      height: "4px",
                      width: "0%",
                      backgroundColor: "#53ae7d",
                      transition: "width 0.35s ease",
                    }}
                  />

                  <div>
                    {/* Icon Container */}
                    <div 
                      className="service-icon-box rounded-3 d-flex align-items-center justify-content-center mb-4"
                      style={{ 
                        width: "56px", 
                        height: "56px", 
                        backgroundColor: "rgba(5, 52, 86, 0.06)",
                        color: "#053456",
                        transition: "all 0.35s ease",
                      }}
                    >
                      <IconComponent size={26} />
                    </div>

                    {/* Service Title */}
                    <h5 className="mb-3" style={{ color: "#053456", fontWeight: 700, fontSize: "20px" ,fontFamily: "Figtree, Figtree Fallback",}}>
                      {service.title}
                    </h5>

                    {/* Service Description */}
                    <p className="mb-0" style={{ color: "#053456", fontSize: "15px !important" ,fontFamily: "Figtree, Figtree Fallback", lineHeight: "1.6", opacity: 0.85 }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Row 2: 3 Cards */}
        <div className="row g-4 justify-content-center">
          {rowTwoServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="col-xl-4 col-lg-4 col-md-6" 
                data-aos="fade-up" 
                data-aos-delay={(index + 4) * 100}
              >
                <div 
                  className="h-100 p-4 rounded-4 position-relative overflow-hidden d-flex flex-column justify-content-between"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(5, 52, 86, 0.12)",
                    boxShadow: "0 4px 20px rgba(5, 52, 86, 0.05)",
                    transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.borderColor = "#53ae7d";
                    e.currentTarget.style.boxShadow = "0 14px 30px rgba(5, 52, 86, 0.12)";
                    const iconBox = e.currentTarget.querySelector(".service-icon-box") as HTMLElement;
                    if (iconBox) {
                      iconBox.style.backgroundColor = "#53ae7d";
                      iconBox.style.color = "#ffffff";
                      iconBox.style.transform = "scale(1.1)";
                    }
                    const topBar = e.currentTarget.querySelector(".top-accent-bar") as HTMLElement;
                    if (topBar) {
                      topBar.style.width = "100%";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "rgba(5, 52, 86, 0.12)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(5, 52, 86, 0.05)";
                    const iconBox = e.currentTarget.querySelector(".service-icon-box") as HTMLElement;
                    if (iconBox) {
                      iconBox.style.backgroundColor = "rgba(5, 52, 86, 0.06)";
                      iconBox.style.color = "#053456";
                      iconBox.style.transform = "scale(1)";
                    }
                    const topBar = e.currentTarget.querySelector(".top-accent-bar") as HTMLElement;
                    if (topBar) {
                      topBar.style.width = "0%";
                    }
                  }}
                >
                  {/* Top Animated Color Bar */}
                  <div 
                    className="top-accent-bar position-absolute top-0 start-0"
                    style={{
                      height: "4px",
                      width: "0%",
                      backgroundColor: "#53ae7d",
                      transition: "width 0.35s ease",
                    }}
                  />

                  <div>
                    {/* Icon Container */}
                    <div 
                      className="service-icon-box rounded-3 d-flex align-items-center justify-content-center mb-4"
                      style={{ 
                        width: "56px", 
                        height: "56px", 
                        backgroundColor: "rgba(5, 52, 86, 0.06)",
                        color: "#053456",
                        transition: "all 0.35s ease",
                      }}
                    >
                      <IconComponent size={26} />
                    </div>

                    {/* Service Title */}
                    <h5 className="mb-3" style={{ color: "#053456", fontWeight: 700, fontSize: "20px !important", fontFamily: "Figtree, Figtree Fallback",}}>
                      {service.title}
                    </h5>

                    {/* Service Description */}
                    <p className="mb-0" style={{ color: "#053456", fontSize: "15px !important", fontFamily: "Figtree, Figtree Fallback",lineHeight: "1.6", opacity: 0.85 }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WordPressServicesGrid;