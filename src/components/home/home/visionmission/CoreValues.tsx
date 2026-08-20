"use client";

import React, { useState, useMemo } from "react";
import "@/assets/css/style.css";
import "@/assets/css/style1.css";
import SectionTitle from "@/components/sectiontitle/SectionTitle";
import coreValuesData from "@/components/data/corevalues";

const CoreValues = ({ values = coreValuesData, columns = 6 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const displayValues = useMemo(
    () => values.slice(0, columns),
    [values, columns]
  );

  return (
    <section className="core-value-section" id="core-values">
      <div className="container">
        <SectionTitle
          subtitle="Core Values"
          titleFirst="Yulanto Core Values"
          titleSecond=""
          description="At Yulanto Web Creations, our core values guide every project, decision, and client relationship. We focus on understanding requirements accurately, maintaining strong professional ethics, delivering quality work on time, and continuously improving our services. These principles inspire our team to perform at their best and create meaningful digital experiences for every client."
        />

        <div className="core-value-wrapper">
          {displayValues.map((value, index) => {
            const isActive = activeIndex === index;
            const imageUrl =
              typeof value.image === "string" ? value.image : value.image?.src;

            return (
              <div
                key={value.id || index}
                className={`core-value-card ${isActive ? "active" : ""}`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(0)}
                style={{
                  backgroundImage: `url(${imageUrl})`,
                }}
              >
                <div className="core-value-overlay">
                  <h3 className="core-value-card-title">{value.title}</h3>
                  <p className="core-value-card-description">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;