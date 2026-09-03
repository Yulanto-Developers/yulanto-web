"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle2 } from "lucide-react";

const whyChooseItems = [
  {
    title: "Business-Focused Website Solutions",
    description:
      "We don't simply create websites; we build WordPress solutions around your business objectives, target audience, services, and brand identity.",
  },
  {
    title: "Custom WordPress Development",
    description:
      "Every business is different. Our developers can customize WordPress themes, layouts, plugins, and functionality to meet your specific requirements.",
  },
  {
    title: "Responsive & Mobile-Friendly",
    description:
      "Your website should provide a consistent experience across desktops, tablets, and smartphones. Our WordPress websites are designed for different screen sizes.",
  },
  {
    title: "SEO-Friendly Structure",
    description:
      "We follow SEO-friendly development practices, including clean page structures, optimized content areas, mobile responsiveness, proper heading hierarchy, and search-engine-friendly URLs.",
  },
  {
    title: "Easy Content Management",
    description:
      "WordPress allows your team to manage website content without depending on a developer for every small update. Pages, blogs, images, products, and other content can be managed through an easy-to-use dashboard.",
  },
  {
    title: "Scalable WordPress Solutions",
    description:
      "Start with the features you need today and expand your website as your business grows. WordPress provides flexibility to add new pages, functionality, integrations, and eCommerce capabilities later.",
  },
];

export function WhyChooseWordPress() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section 
      className="px-about-6-area pt-50 pb-80 pb-lg-110" 
      style={{ backgroundColor: "#053456", color: "#ffffff" }}
    >
      <div className="container container-1550">
        
        {/* Header Section */}
        <div className="row mb-5">
          <div className="col-xl-12" data-aos="fade-up">
            <h4 className="px-about-title mb-20 text-white" >
              <span className="text-light" >
                Why Choose Yulanto for 
              </span>{" "}
              WordPress Development in Chennai?
            </h4>
            <p className="text-figtree text-white mt-2" >
              Choosing the right WordPress agency in Chennai can make a significant difference to your digital growth. We combine strategy, technical expertise, creative design, and scalable architecture to deliver high-performing websites.
            </p>
          </div>
        </div>

        {/* Feature List Grid matching image style */}
        <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
          {whyChooseItems.map((item, index) => (
            <div 
              key={index} 
              className="col" 
              data-aos="fade-up" 
              data-aos-delay={(index % 3) * 100}
            >
              <div 
                className="d-flex align-items-start gap-3 p-3 rounded-3"
                style={{
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  borderRadius: "8px"
                }}
                onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.transform = "translateX(0)";
                }}
                onMouseLeave={(e) => {
                
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.transform = "translateX(5px)";
                }}
              >
                {/* Green Check Icon */}
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 size={24} style={{ color: "#53ae7d" }} />
                </div>

                {/* Content */}
                <div>
                  <h5 className="fw-bold mb-2" style={{ color: "#ffffff", fontSize: "17px!important",fontFamily: "Figtree, Figtree Fallback", lineHeight: "1.4" }}>
                    {item.title}
                  </h5>
                  <p className="m-0 mb-5"  style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "15px !important",fontFamily: "Figtree, Figtree Fallback", lineHeight: "1.6" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseWordPress;