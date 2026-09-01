"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface CreativePackagingSectionProps {
    className?: string;
    imageSrc?: string;
    imageAlt?: string;
}

export function CreativePackagingSection({
    className = "",
    imageSrc = "/assets/img/packaging/packaging-design.jpg", // Replace with your image path
    imageAlt = "Creative Packaging Design Showcase",
}: CreativePackagingSectionProps) {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <section
            className={`px-about-6-area pt-50 pb-80 pb-lg-110 overflow-hidden ${className}`}
            style={{ backgroundColor: "#ffffff" }}
        >
            <div className="container container-1550">
                <div className="row align-items-center gy-5">

                    {/* Left Column: Text Content */}
                    <div className="col-12 col-lg-6" data-aos="fade-right" data-aos-delay="100">
                        <div className="px-project-title-box pe-lg-4">
                            
                            <h4 className="px-about-title mb-20">
                                <span className="text-blue-about"> Creative Packaging Design </span>
                                for Stronger Brands
                            </h4>


                            <p
                                className="text-figtree text-black mt-3"
                              
                            >
                                Great packaging does more than protect a product—it helps build recognition and influence buying decisions. Our packaging design services in Chennai are tailored to your product, target audience, industry, and brand personality.
                            </p>

                            <p
                                className="text-figtree text-black mt-2"
                            >
                                From concept development to print-ready artwork, our designers create packaging that is visually engaging, professionally structured, and ready for production.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Static Image Display */}
                    <div className="col-12 col-lg-6" data-aos="fade-left" data-aos-delay="200">
                        <div className="px-about-img-wrap position-relative text-center">
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                className="img-fluid rounded-4 shadow-lg w-100"
                                style={{
                                    maxHeight: "520px",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}