"use client";

import React, { useState } from "react";

interface ServiceItem {
  id: string;
  title: string;
  iconClass: string;
  image: string;
}

const servicesList: ServiceItem[] = [
  {
    id: "product",
    title: "Product Packaging Design",
    iconClass: "fa-solid fa-box-open",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "box",
    title: "Box Packaging Design",
    iconClass: "fa-solid fa-cart-flatbed",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "label",
    title: "Label Design",
    iconClass: "fa-solid fa-tag",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "pouch",
    title: "Pouch Packaging Design",
    iconClass: "fa-solid fa-bag-shopping",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "bottle",
    title: "Bottle & Container Label Design",
    iconClass: "fa-solid fa-wine-bottle",
    image: "https://images.unsplash.com/photo-1608248597263-0057e57b4524?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "food",
    title: "Food Packaging Design",
    iconClass: "fa-solid fa-utensils",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "cosmetic",
    title: "Cosmetic Packaging Design",
    iconClass: "fa-solid fa-pump-soap",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "pharma",
    title: "Pharmaceutical Packaging Design",
    iconClass: "fa-solid fa-pills",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "retail",
    title: "Retail Packaging Design",
    iconClass: "fa-solid fa-store",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "corporate",
    title: "Corporate & Promotional Packaging",
    iconClass: "fa-solid fa-gift",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "sticker",
    title: "Sticker & Product Label Design",
    iconClass: "fa-solid fa-note-sticky",
    image: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "print",
    title: "Print-Ready Packaging Artwork",
    iconClass: "fa-solid fa-print",
    image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "redesign",
    title: "Packaging Redesign",
    iconClass: "fa-solid fa-arrows-rotate",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop",
  },
];

export function PackagingServicesSection() {
  const [activeService, setActiveService] = useState<ServiceItem>(servicesList[0]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110" >
      <div className="container container-1550">
        
        {/* Section Header */}
        <div className="mb-40">
          <h4 className="px-about-title mb-20 text-center" >
            <span className="text-blue-about" >
            Our Packaging{" "}
            </span>
           Design Services
          </h4>

         
        </div>

        {/* Services Grid Layout */}
        <div className="row gy-4">
          
          {/* Left Column: Interactive Pure-Image Showcase Card */}
          <div className="col-12 col-lg-5">
            <div 
              className="rounded-4 overflow-hidden shadow-sm"
              style={{
                position: "sticky",
                top: "100px",
                height: "450px",
              
              
              }}
            >
              {/* Dynamic Image Display */}
              <div 
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  backgroundImage: `url(${activeService.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "background-image 0.4s ease-in-out",
                }}
              >
                {/* Overlay Label with Active Font Awesome Icon */}
                <div 
                  className="position-absolute bottom-0 start-0 w-100 p-3"
                  style={{
                    background: "linear-gradient(to top, #053456 0%, rgba(5, 52, 86, 0.4) 70%, transparent 100%)",
                  }}
                >
                  <span 
                    className="badge mb-2 d-inline-flex align-items-center gap-2" 
                    style={{ backgroundColor: "#53ae7d", color: "#ffffff", fontSize: "12px",fontFamily: "Figtree, Figtree Fallback", padding: "6px 12px" }}
                  >
                    <i className={activeService.iconClass}></i>
                    Featured Design
                  </span>
                  <h5 className="m-0 text-white fw-bold">{activeService.title}</h5>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Grid List of Services with Icons */}
          <div className="col-12 col-lg-7">
            <div className="row g-3">
              {servicesList.map((service, index) => {
                const isActive = activeService.id === service.id;
                const isHovered = hoveredIndex === index;

                return (
                  <div key={service.id} className="col-12 col-sm-6">
                    <div
                      onMouseEnter={() => {
                        setActiveService(service);
                        setHoveredIndex(index);
                      }}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="p-3 rounded-3 d-flex align-items-center justify-content-between"
                      style={{
                        backgroundColor: isActive 
                          ? "#053456" 
                          : isHovered 
                          ? "rgba(83, 174, 125, 0.1)" 
                          : "#ffffff",
                       
                        cursor: "pointer",
                        transition: "all 0.2s ease-in-out",
                        transform: isHovered ? "translateY(-2px)" : "translateY(0px)"
                      }}
                    >
                      <div className="d-flex align-items-center gap-3">
                        {/* Font Awesome Icon */}
                        <i 
                          className={service.iconClass}
                          style={{
                            fontSize: "18px",
                            color: isActive ? "#53ae7d" : "#053456",
                            width: "20px",
                            textAlign: "center"
                          }}
                        />
                        
                        <span 
                          className="text-figtree"
                          style={{ 
                            fontSize: "15px", 
                            fontFamily: "Figtree, Figtree Fallback",
                            fontWeight: isActive ? 700 : 500, 
                            color: isActive ? "#ffffff" : "#053456" 
                          }}
                        >
                          {service.title}
                        </span>
                      </div>

                      {/* Accent Bullet Pointer */}
                      <div 
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: isActive ? "#53ae7d" : "#053456",
                          flexShrink: 0
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PackagingServicesSection;