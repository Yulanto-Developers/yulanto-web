"use client";

import React from "react";

export default function ShopifyServicesSection() {
  const services = [
    {
      title: "Shopify Store Development",
      icon: "fa-solid fa-store",
    },
    {
      title: "Shopify Theme Development & Customization",
      icon: "fa-solid fa-palette",
    },
    {
      title: "Custom Shopify Development",
      icon: "fa-solid fa-code",
    },
    {
      title: "Shopify App Integration",
      icon: "fa-solid fa-puzzle-piece",
    },
    {
      title: "API & Third-Party Integrations",
      icon: "fa-solid fa-network-wired",
    },
    {
      title: "Ecommerce Payment Integration",
      icon: "fa-solid fa-credit-card",
    },
    {
      title: "Product & Inventory Configuration",
      icon: "fa-solid fa-boxes-stacked",
    },
    {
      title: "Shopify SEO-Friendly Development",
      icon: "fa-solid fa-chart-pie",
    },
    {
      title: "Store Migration & Redesign",
      icon: "fa-solid fa-arrows-rotate",
    },
    {
      title: "Ongoing Shopify Support",
      icon: "fa-solid fa-headset",
    },
  ];

  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110">
      <div className="container container-1550">
        {/* Main Title Section */}
        <h4 className="px-about-title mb-20" data-aos="fade-up">
          <span className="text-blue-about">
            Experienced Shopify Developers{" "}
          </span>
          in Chennai
        </h4>

        {/* Subtitle / Primary Paragraph */}
        <p
          className="text-figtree text-black mt-2"
          style={{ fontSize: "1.125rem", lineHeight: "1.7" }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Build a Professional Shopify Store for Your Business
        </p>

        {/* Content Paragraphs */}
        <p
          className="text-figtree text-black mt-2"
          style={{ lineHeight: "1.6" }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Choosing the right Shopify development partner can make a significant
          difference to your ecommerce business. Our experienced Shopify
          developers in Chennai understand the platform and its capabilities,
          enabling us to develop Shopify stores for different business
          requirements.
        </p>

        <p
          className="text-figtree text-black mt-2"
          style={{ lineHeight: "1.6" }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          We can customize Shopify themes, integrate applications and
          third-party services, configure ecommerce functionality, and develop
          solutions that align with your brand identity.
        </p>

        <p
          className="text-figtree text-black mt-2"
          style={{ lineHeight: "1.6" }}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Whether you need a simple online store, a growing ecommerce website,
          or a customized Shopify solution, our team can help you select and
          implement the right approach.
        </p>

        {/* Section Heading for Expertise */}
        <h5
          className="mb-3 fw-bold mt-5"
          style={{ fontFamily: '"Tenor Sans", "Tenor Sans Fallback"' }}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Our Shopify Development Expertise
        </h5>

        {/* Modern Minimalist List Layout with FontAwesome Icons */}
        <ul
          className="shopify-expertise-list mt-4"
          style={{
            listStyle: "none",
            paddingLeft: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {services.map((item, index) => (
            <li
              key={index}
              className="text-figtree text-black d-flex align-items-center"
              style={{
                fontSize: "1rem",
                borderBottom: "1px solid #e5e7eb",
                paddingBottom: "0.85rem",
              }}
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <i
                className={item.icon}
                style={{
                  color: "#53ae7d",
                  marginRight: "0.85rem",
                  fontSize: "1.2rem",
                  width: "24px",
                  textAlign: "center",
                }}
              ></i>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}