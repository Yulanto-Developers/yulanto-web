"use client";

import React from "react";
import { useAOS } from "../../../../hooks/useAOS";
import whyusData from "./whyusdata";
import "./dynamicwebdesign.css";

interface WhyUsA1Props {
  num1?: number;
  num2?: number;
  subtitle?: string;
  titlefirst?: string;
  titlesecond?: string;
  description?: string;
  footerText?: string;
}

const WhyUsA1: React.FC<WhyUsA1Props> = ({
  num1,
  num2,
  subtitle,
  titlefirst,
  titlesecond,
  description,
  footerText,
}) => {
  useAOS();

  // Dynamic slicing using num1 and num2
  const displayedData = whyusData.slice(num1, num2);

  return (
    <section className="whyus-a1 pb-30">
      <div className="container">
        <div className="text-center py-3">
          {subtitle && (
            <span className="tp-section-subtitle text-black blink-ball">
              {subtitle}
            </span>
          )}

          <h4 className="px-about-title mb-20 text-center">
            {titlefirst && (
              <span className="text-blue-about">{titlefirst} </span>
            )}
            {titlesecond}
          </h4>

          {description && (
            <p
              className="mb-2 text-center"
              data-aos="text-reveal-lines"
              data-aos-delay="200"
            >
              {description}
            </p>
          )}
        </div>

        <div className="whyus-a3-grid">
          {displayedData.map((item, index) => (
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

        {footerText && (
          <p
            className="mt-4 text-center"
            data-aos="text-reveal-lines"
            data-aos-delay="200"
          >
            {footerText}
          </p>
        )}
      </div>
    </section>
  );
};

export default WhyUsA1;