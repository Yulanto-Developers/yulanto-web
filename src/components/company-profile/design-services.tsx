"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Ensure Font Awesome CSS is imported globally in layout.tsx/App.tsx, or uncomment the line below:
// import "@fortawesome/fontawesome-free/css/all.min.css";

interface ServiceItem {
    title: string;
    icon: string;
}

const featuresList: ServiceItem[] = [
    { title: "Brochure Design", icon: "fa-solid fa-book-open" },
    { title: "Company Profile Design", icon: "fa-solid fa-building" },
    { title: "Catalogue Design", icon: "fa-solid fa-book-bookmark" },
    { title: "Corporate Presentation Design", icon: "fa-solid fa-display" },
    { title: "Product Catalogue Design", icon: "fa-solid fa-boxes-stacked" },
    { title: "Advertisement Design", icon: "fa-solid fa-rectangle-ad" },
    { title: "Business Card Design", icon: "fa-solid fa-id-card" },
    { title: "Letterhead Design", icon: "fa-solid fa-file-signature" },
    { title: "Branding & Marketing Collateral", icon: "fa-solid fa-bullhorn" },
    { title: "Digital Marketing Creatives", icon: "fa-solid fa-palette" },
    { title: "Promotional Material Design", icon: "fa-solid fa-award" },
];

export default function Hero() {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800,
        });
    }, []);

    // Split list evenly into two columns (6 items left, 5 items right)
    const halfLength = Math.ceil(featuresList.length / 2);
    const leftColumnItems = featuresList.slice(0, halfLength);
    const rightColumnItems = featuresList.slice(halfLength);

    return (
        <section
            className="px-about-6-area pt-50 pb-80 pb-lg-110"
            style={{ backgroundColor: "#ffffff" }}
        >
            <div className="container container-1550">
                {/* Header Title Section */}
                <div className="row align-items-center mb-30" data-aos="fade-up">
                    <div className="col-xl-3">
                        <span className="tp-section-subtitle text-black blink-ball">
                            Our Graphic Design Services
                        </span>
                    </div>

                    <div className="col-xl-9">
                        <div className="px-project-title-box">
                            <h4 className="px-about-title mb-2">
                                <span className="text-blue-about">Creative Visual Solutions </span>for Your Business 
                            </h4>
                            <p className="text-figtree text-black mt-2">
                                Our graphic design services go beyond brochure creation. We develop a wide range of marketing and branding materials designed to maintain consistency across your business communication.
                            </p>
                        </div>
                    </div>
                </div>

                <div style={heroWrapperStyle}>
                    <div style={textColumnStyle}>
                        <div>
                            <h5 className="mt-20 mb-20" >
                                Our services include:
                            </h5>

                            {/* 2-Column Split Layout */}
                            <div className="row">
                                {/* Left Column (6 Cols) */}
                                <div className="col-md-6">
                                    <ul style={listStyle}>
                                        {leftColumnItems.map((item, index) => (
                                            <li
                                                key={index}
                                                style={listItemStyle}
                                                data-aos="fade-up"
                                                data-aos-delay={index * 50}
                                            >
                                                {/* Matching Font Awesome Icon */}
                                                <i className={`${item.icon} text-blue-about`} style={iconStyle} />
                                                <span className="text-figtree text-black">
                                                    {item.title}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right Column (6 Cols) */}
                                <div className="col-md-6">
                                    <ul style={listStyle}>
                                        {rightColumnItems.map((item, index) => (
                                            <li
                                                key={index + halfLength}
                                                style={listItemStyle}
                                                data-aos="fade-up"
                                                data-aos-delay={(index + halfLength) * 50}
                                            >
                                                {/* Matching Font Awesome Icon */}
                                                <i className={`${item.icon} text-blue-about`} style={iconStyle} />
                                                <span className="text-figtree text-black">
                                                    {item.title}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <p className="text-figtree text-black mt-30" style={{ fontSize: "16px" }}>
                            Whether you need a single marketing creative or a complete set of business collateral, our graphic designers in Chennai can create designs that align with your brand identity.
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
    padding: "10px 0 40px 0",
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