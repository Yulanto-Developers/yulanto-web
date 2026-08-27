"use client";

import React, { useState, useMemo } from "react";
import { useAOS } from "@/components/hooks/useAOS";
import "@/assets/css/style.css";
import "@/assets/css/style1.css";
import SectionTitle from "@/components/sectiontitle/SectionTitle";
import coreValuesData from "@/components/data/corevalues";

const CoreValues = ({ values = coreValuesData, columns = 6 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Initialize AOS
  useAOS();

  const displayValues = useMemo(
    () => values.slice(0, columns),
    [values, columns]
  );

  return (
    <section 
      className="core-value-section" 
      id="core-values"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="200"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <div className="container">
        <SectionTitle
          subtitle="Core Values"
          titleFirst="Yulanto Core Values"
          titleSecond=""
          description="At Yulanto Web Creations, our core values guide every project, decision, and client relationship. We focus on understanding requirements accurately, maintaining strong professional ethics, delivering quality work on time, and continuously improving our services. These principles inspire our team to perform at their best and create meaningful digital experiences for every client."
          animationType="text-reveal-lines"
          delay={300}
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
                  <div className="title-container">
                    {/* Default vertical title */}
                    <h3 className="title-vertical">
                      {value.title}
                    </h3>

                    {/* Expanded horizontal title */}
                    <h3 className="title-horizontal">
                      {value.title}
                    </h3>
                  </div>

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