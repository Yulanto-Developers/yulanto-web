"use client";

import React from "react";
import { useAOS } from "../../../../hooks/useAOS";
import SectionTitle from "../../../../sectiontitle/SectionTitle";
import whyusData from "./whyusdata";
import "./dynamicwebdesign.css";

const listdt = whyusData.slice(0,8)

const WhyUsA1 = () => {
    useAOS();

    return (
        <section className="whyus-a1 pb-30">
            <SectionTitle
                subtitle="Why Choose Us"
                titleFirst="Benefits of choosing dynamic"
                titleSecond="website design services"
                description=""
                delay={300}
            />

            <div className="container">
                <div className="whyus-a3-grid">
                    {listdt.map((item, index) => (
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
            </div>
        </section>
    );
};

export default WhyUsA1;