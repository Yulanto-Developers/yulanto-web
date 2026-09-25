"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// Ensure Font Awesome CSS is imported globally in layout.tsx/App.tsx, or uncomment the line below:
// import "@fortawesome/fontawesome-free/css/all.min.css";

interface ServiceItem {
  title: string;
  icon: string;
}

const featuresList: ServiceItem[] = [
  { title: "Provide direct answers to customer questions", icon: "fa-solid fa-book-open" },
  { title: "Improve visibility for conversational searches", icon: "fa-solid fa-building" },
  { title: "Build topical authority", icon: "fa-solid fa-book-bookmark" },
  { title: "Make website content easier for search engines to understand", icon: "fa-solid fa-display" },
  { title: "Support AI-powered search experiences", icon: "fa-solid fa-boxes-stacked" },
  { title: "Capture long-tail and question-based searches", icon: "fa-solid fa-rectangle-ad" },
  { title: "Improve the quality of information available to potential customers", icon: "fa-solid fa-id-card" },
  { title: "Support organic traffic and lead generation", icon: "fa-solid fa-file-signature" },
];

export default function Hero() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
  }, []);

  const midIndex = 4;
  const column1Items = featuresList.slice(0, midIndex);
  const column2Items = featuresList.slice(midIndex);

  return (
    <section
      className="px-about-6-area pt-40 pb-40 pb-lg-110 overflow-hidden"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="container container-1550">
        {/* Header Title Section */}
        <div className="row align-items-center mb-30 gx-4" data-aos="fade-up">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
              The Business Benefits of AEO
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-2">
                <span className="text-blue-about">Why is AEO Important  </span>for Your Business?
              </h4>
              <p className="text-figtree text-black mt-2">
                People are increasingly using conversational and AI-powered search to research products, services and businesses.
              </p>
            </div>
          </div>
        </div>

        <div style={heroWrapperStyle}>
          <div style={textColumnStyle}>
            <div>
              <h5 className="mt-20 mb-20">
                AEO can help your website:
              </h5>

              {/* 3-Column Split Layout with standard grid gutter */}
              <div className="row align-items-center gx-4">
                {/* First Column (4 Cols) */}
                <div className="col-lg-4 col-md-6 mb-30">
                  <ul style={listStyle}>
                    {column1Items.map((item, index) => (
                      <li
                        key={index}
                        style={listItemStyle}
                        data-aos="fade-up"
                        data-aos-delay={index * 50}
                      >
                        <i className={`${item.icon} text-blue-about`} style={iconStyle} />
                        <span className="text-figtree text-black">
                          {item.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Second Column (4 Cols) */}
                <div className="col-lg-4 col-md-6 mb-30">
                  <ul style={listStyle}>
                    {column2Items.map((item, index) => (
                      <li
                        key={index + midIndex}
                        style={listItemStyle}
                        data-aos="fade-up"
                        data-aos-delay={(index + midIndex) * 50}
                      >
                        <i className={`${item.icon} text-blue-about`} style={iconStyle} />
                        <span className="text-figtree text-black">
                          {item.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Third Column (4 Cols) - Fixed Image */}
                <div className="col-lg-4 mb-30" data-aos="fade-left">
                  <div style={imageContainerStyle}>
                    <img
                      src="/assets/img/aeo/why-aeo.jpg" // Replace with your image path
                      alt="Answer Engine Optimization in Chennai"
                      style={imageStyle}
                    />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-figtree text-black mt-10" style={{ fontSize: "16px" }}>
              AEO does not replace SEO. Instead, AEO and SEO work together to create content that is useful for both users and modern search systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Inline Styles
const heroWrapperStyle: React.CSSProperties = {
  width: "100%",

  boxSizing: "border-box",
};

const textColumnStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

const listStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

const listItemStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  fontSize: "18px",
};

const iconStyle: React.CSSProperties = {
  fontSize: "18px",
  lineHeight: "1",
  width: "24px",
  textAlign: "center",
  flexShrink: 0,
};

const imageContainerStyle: React.CSSProperties = {
  width: "100%",
  overflow: "hidden",
  borderRadius: "12px",
};

const imageStyle: React.CSSProperties = {
  maxWidth: "100%",
  width: "100%",
  height: "auto",
  maxHeight: "350px",
  objectFit: "cover",
  borderRadius: "12px",
  display: "block",
};