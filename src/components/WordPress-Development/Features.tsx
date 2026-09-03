"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  Smartphone, 
  Layout, 
  Mail, 
  FileText, 
  Newspaper, 
  Image, 
  Quote, 
  Users, 
  Briefcase, 
  Table, 
  HelpCircle, 
  Layers, 
  Share2, 
  Send, 
  MapPin, 
  MessageSquare, 
  Search, 
  ShoppingBag, 
  CreditCard, 
  Cpu, 
  BarChart3 
} from "lucide-react";

const features = [
  { icon: Smartphone, title: "Responsive design" },
  { icon: Layout, title: "Custom page layouts" },
  { icon: Mail, title: "Contact & enquiry forms" },
  { icon: FileText, title: "Advanced forms" },
  { icon: Newspaper, title: "Blog & news management" },
  { icon: Image, title: "Image & video galleries" },
  { icon: Quote, title: "Testimonials" },
  { icon: Users, title: "Team member sections" },
  { icon: Briefcase, title: "Portfolio & project showcases" },
  { icon: Table, title: "Pricing tables" },
  { icon: HelpCircle, title: "FAQs & accordions" },
  { icon: Layers, title: "Tabs & content sections" },
  { icon: Share2, title: "Social media integration" },
  { icon: Send, title: "Newsletter integration" },
  { icon: MapPin, title: "Google Maps integration" },
  { icon: MessageSquare, title: "WhatsApp integration" },
  { icon: Search, title: "Search & filtering" },
  { icon: ShoppingBag, title: "Product catalogues" },
  { icon: CreditCard, title: "Payment gateway integration" },
  { icon: Cpu, title: "Third-party API integration" },
  { icon: BarChart3, title: "Analytics & conversion tracking" }
];

export function WordPressFeaturesGrid() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110" style={{ backgroundColor: "#ffffff" }}>
      <div className="container container-1550">
        
        <div className="row align-items-center">
          <div className="col-xl-12">
            <div className="px-project-title-box text-center">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">WordPress Features We </span>Can Implement
              </h4>
              <p className="text-figtree text-black mt-2 font-paragraph-cls">
                We develop WordPress websites with the features your business actually needs.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Cards Per Row Grid */}
        <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className="col" 
                data-aos="fade-up" 
                data-aos-delay={(index % 6) * 80}
              >
                <div 
                  className="h-100 p-4 rounded-4 position-relative overflow-hidden d-flex flex-column align-items-center text-center justify-content-center"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1.5px solid rgba(5, 52, 86, 0.12)",
                    boxShadow: "0 4px 15px rgba(5, 52, 86, 0.04)",
                    transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                    minHeight: "170px"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.borderColor = "#53ae7d";
                    e.currentTarget.style.boxShadow = "0 12px 25px rgba(83, 174, 125, 0.2)";
                    const iconBox = e.currentTarget.querySelector(".feature-icon-box") as HTMLElement;
                    if (iconBox) {
                      iconBox.style.backgroundColor = "#53ae7d";
                      iconBox.style.color = "#ffffff";
                      iconBox.style.transform = "scale(1.1) rotate(5deg)";
                    }
                    const topBorder = e.currentTarget.querySelector(".hover-top-bar") as HTMLElement;
                    if (topBorder) {
                      topBorder.style.width = "100%";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "rgba(5, 52, 86, 0.12)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(5, 52, 86, 0.04)";
                    const iconBox = e.currentTarget.querySelector(".feature-icon-box") as HTMLElement;
                    if (iconBox) {
                      iconBox.style.backgroundColor = "rgba(5, 52, 86, 0.06)";
                      iconBox.style.color = "#053456";
                      iconBox.style.transform = "scale(1) rotate(0deg)";
                    }
                    const topBorder = e.currentTarget.querySelector(".hover-top-bar") as HTMLElement;
                    if (topBorder) {
                      topBorder.style.width = "0%";
                    }
                  }}
                >
                  {/* Top Animated Green Border Accent */}
                  <div 
                    className="hover-top-bar position-absolute top-0 start-0"
                    style={{
                      height: "3px",
                      width: "0%",
                      backgroundColor: "#53ae7d",
                      transition: "width 0.35s ease",
                    }}
                  />

                  {/* Icon Box */}
                  <div 
                    className="feature-icon-box rounded-circle d-flex align-items-center justify-content-center mb-3"
                    style={{ 
                      width: "52px", 
                      height: "52px", 
                      backgroundColor: "rgba(5, 52, 86, 0.06)",
                      color: "#053456",
                      transition: "all 0.35s ease",
                    }}
                  >
                    <IconComponent size={24} />
                  </div>

                  {/* Feature Title */}
                  <h6 
                    className="m-0 font-figtree" 
                    style={{ 
                      color: "#053456", 
                      fontWeight: 600, 
                      fontSize: "15px",
                      fontFamily: "Figtree, Figtree Fallback",
                      lineHeight: "1.4"
                    }}
                  >
                    {item.title}
                  </h6>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WordPressFeaturesGrid;