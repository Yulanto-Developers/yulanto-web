"use client";

import React from "react";
import { useAOS } from "../../../../hooks/useAOS";
import SectionTitle from "../../../../sectiontitle/SectionTitle";
import whyusData from "./whyusdata";
import "./dynamicwebdesign.css";


const WhyUsA1 = () => {
    useAOS();

    return (
        <section className="whyus-a1 pb-30">

            <div className="container">

                <div className="text-center py-3">
                    {/* <span className="tp-section-subtitle text-black blink-ball">
                        We're Hiring
                    </span> */}

                    <h4 className="px-about-title mb-20 text-center">
                        <span className="text-blue-about">Why Choose Us for </span>
                        Web Development in Chennai?
                    </h4>

                    <p
                        className="mb-2 text-center"
                        data-aos="text-reveal-lines"
                        data-aos-delay="200"
                    >
                        Choosing the right development partner is important for building a website that delivers long-term value. At Yulanto Web Creations, we focus on creating websites that combine attractive design, functionality, usability, and business objectives.
                    </p>
                </div>



                <div className="whyus-a3-grid">
                    {whyusData.map((item, index) => (
                        <div
                            className="whyus-a3-card text-figtree"
                            key={item.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <span className="whyus-a3-badge">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <span>{item.list}</span>
                        </div>
                    ))}
                </div>

                <p
                        className="mt-4 text-center"
                        data-aos="text-reveal-lines"
                        data-aos-delay="200"
                    >Whether you are a startup, small business, established company, or growing enterprise, our web developers in Chennai can help transform your ideas into a functional and professional website.</p>
            </div>
        </section>
    );
};

export default WhyUsA1;