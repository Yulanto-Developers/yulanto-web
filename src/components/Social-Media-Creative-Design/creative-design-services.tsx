"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface ServiceItem {
  icon: string;
  title: string;
  subtitle?: string;
}

const servicesList: ServiceItem[] = [
  { icon: "/assets/icons/instagram.png", title: "Instagram", subtitle: "Posts & Creatives" },
  { icon: "/assets/icons/facebook.png", title: "Facebook", subtitle: "Post Designs" },
  { icon: "/assets/icons/linkedin.png", title: "LinkedIn", subtitle: "Creative Designs" },
  { icon: "/assets/icons/instagram.png", title: "Instagram", subtitle: "Stories" },
  { icon: "/assets/icons/facebook.png", title: "Facebook", subtitle: "Stories" },
  { icon: "/assets/icons/megaphone.png", title: "Promotional", subtitle: "Campaign Creatives" },
  { icon: "/assets/icons/package.png", title: "Product & Service", subtitle: "Promotions" },
  { icon: "/assets/icons/gift.png", title: "Festival &", subtitle: "Seasonal Creatives" },
  { icon: "/assets/icons/tag.png", title: "Offer & Discount", subtitle: "Posts" },
  { icon: "/assets/icons/briefcase.png", title: "Corporate Social", subtitle: "Media Designs" },
  { icon: "/assets/icons/calendar.png", title: "Event & Announcement", subtitle: "Creatives" },
  { icon: "/assets/icons/target.png", title: "Brand Awareness", subtitle: "Posts" },
  { icon: "/assets/icons/chart.png", title: "Infographics &", subtitle: "Informative Posts" },
  { icon: "/assets/icons/chat.png", title: "Quote & Engagement", subtitle: "Posts" },
  { icon: "/assets/icons/ad.png", title: "Social Media Ad", subtitle: "Creatives" },
];

export function SocialMediaServicesSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110" style={{
        backgroundColor: "#ffffff",
      }}>
      <div className="container container-1550">
        {/* Header Block */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h4 className="px-about-title mb-20 text-center">
            <span className="text-blue-about">Our social media creative design</span>
           services are suitable for:
          </h4>
        </div>

        {/* Responsive Grid: 2 Cards per row on Mobile (col-6), 5 per row on Large Desktop (col-lg-2-5) */}
        <div className="row g-3 g-md-4 justify-content-center" data-aos="fade-up" data-aos-delay="200">
          {servicesList.map((item, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
              <div 
                className="card h-100 border-0 p-3 p-md-4 text-center d-flex flex-column align-items-center justify-content-center shadow-sm"
                style={{ 
                  backgroundColor: "#f5f5f5",
                  borderRadius: "32px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
              >
                {/* Circular Soft Glow Icon Container */}
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#f8f9fa",
                    boxShadow: "inset 0 0 10px rgba(0,0,0,0.03)"
                  }}
                >
                  <img 
                    src={item.icon} 
                    alt={item.title} 
                    style={{ width: "32px", height: "32px", objectFit: "contain" }} 
                  />
                </div>

                {/* Card Titles */}
                <h6 className="fw-bold text-dark mb-0 fs-6 lh-sm font-title">
                  {item.title}
                </h6>
                {item.subtitle && (
                  <span className="text-secondary small fw-medium mt-1 d-block lh-sm font-p" style={{ color: "#053456 !important" }}>
                    {item.subtitle}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialMediaServicesSection;