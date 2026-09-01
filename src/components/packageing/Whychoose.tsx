"use client";

import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  badgeColor: string;
  iconClass: string;
  imageUrl: string;
}

const featuresData: FeatureCardProps[] = [
  {
    title: "Brand-Focused Design",
    description: "We create packaging that reflects your brand identity and helps customers instantly recognize your products.",
    badgeColor: "#53ae7d", // Forest Green
    iconClass: "fa-solid fa-copyright",
    imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Creative & Modern Concepts",
    description: "Our designers develop fresh concepts based on current design trends while keeping your brand unique.",
    badgeColor: "#053456", // Warm Amber
    iconClass: "fa-solid fa-lightbulb",
    imageUrl: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Customer-Centric Approach",
    description: "We design with your target customers in mind, ensuring that the packaging communicates your product benefits effectively.",
    badgeColor: "#53ae7d", // Deep Blue
    iconClass: "fa-solid fa-users",
    imageUrl: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Print-Ready Artwork",
    description: "Our packaging designs are prepared with production requirements in mind, making them suitable for professional printing.",
    badgeColor: "#053456", // Purple
    iconClass: "fa-solid fa-print",
    imageUrl: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Multiple Packaging Formats",
    description: "Whether you need a box, bottle label, pouch, carton, sticker, or retail package, we can create designs for different product formats.",
    badgeColor: "#53ae7d", // Custom Brand Green
    iconClass: "fa-solid fa-boxes-stacked",
    imageUrl: "https://images.unsplash.com/photo-1608248597263-0057e57b4524?q=80&w=600&auto=format&fit=crop",
  },
];

export function PackagingFeaturesSection() {
  const row1Cards = featuresData.slice(0, 3);
  const row2Cards = featuresData.slice(3, 5);

  const renderCard = (item: FeatureCardProps, index: number) => (
    <div
      key={index}
      className="rounded-4 overflow-hidden h-100 d-flex flex-column shadow-sm"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={`${(index % 3) * 150}`}
      style={{
        backgroundColor: "#fffdf9", // Soft warm background matching reference image
        border: "1px solid #eae5d9",
        padding: "16px",
        fontFamily: "Figtree, Figtree Fallback",
      }}
    >
      {/* Top Rounded Header Badge */}
      <div
        className="text-center py-2 px-3 rounded-pill mb-3"
        style={{
          backgroundColor: item.badgeColor,
          color: "#ffffff",
          fontWeight: 700,
          fontSize: "14px",
          letterSpacing: "0.5px",
          textTransform: "uppercase",
        }}
      >
        {item.title}
      </div>

      {/* Image Preview Container */}
      <div
        className="rounded-3 overflow-hidden mb-3"
        style={{
          height: "190px",
          backgroundColor: "#fff",
          position: "relative",
        }}
      >
        <img
          src={item.imageUrl}
          alt={item.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Card Content Block */}
      <div
        className="p-3 rounded-3 flex-grow-1 d-flex gap-3 align-items-start"
        style={{
          backgroundColor: "#f5f5f5",
          border: "1px solid #f5f5f5",
        }}
      >
        {/* Circle Icon Badge */}
        <div
          className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
          style={{
            width: "38px",
            height: "38px",
            backgroundColor: item.badgeColor,
            color: "#ffffff",
            fontSize: "16px",
          }}
        >
          <i className={item.iconClass}></i>
        </div>

        {/* Text Content */}
        <div>
          <span
            className="fw-bold d-block"
            style={{
              color: item.badgeColor,
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Key Benefit
          </span>
          <p
            className="text-figtree text-black mt-2 mb-0"
            style={{
              fontSize: "15px !important",
              lineHeight: "1.5",
              fontFamily: "Figtree, Figtree Fallback",
            }}
          >
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110">
      <div className="container container-1550">
        
        {/* Section Title Header */}
        <div 
          className="mb-40"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h4 className="px-about-title mb-20 text-center">
            <span className="text-blue-about">Why Choose Our Packaging </span>
            Design Services?
          </h4>
        </div>

        {/* Card Grid Layout */}
        <div className="d-flex flex-column gap-4">
          
          {/* First Row: 3 Cards */}
          <div className="row g-4">
            {row1Cards.map((item, idx) => (
              <div key={idx} className="col-12 col-md-4">
                {renderCard(item, idx)}
              </div>
            ))}
          </div>

          {/* Second Row: 2 Cards Centered */}
          <div className="row g-4 justify-content-center">
            {row2Cards.map((item, idx) => (
              <div key={idx} className="col-12 col-md-4">
                {renderCard(item, idx + 3)}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default PackagingFeaturesSection;