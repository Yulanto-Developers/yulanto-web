"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const squareData = [
  { id: 1, src: "assets/img/logodesign/Logo-1.jpg" },
  { id: 2, src: "assets/img/logodesign/Logo-2.jpg" },
  { id: 3, src: "assets/img/logodesign/Logo-3.jpg" },
  { id: 4, src: "assets/img/logodesign/Logo-4.jpg" },
  { id: 5, src: "assets/img/logodesign/Logo-5.jpg" },
  { id: 6, src: "assets/img/logodesign/Logo-6.jpg" },
  { id: 7, src: "assets/img/logodesign/Logo-7.jpg" },
  { id: 8, src: "assets/img/logodesign/Logo-8.jpg" },
  { id: 9, src: "assets/img/logodesign/Logo-9.jpg" },
  { id: 10, src: "assets/img/logodesign/Logo-10.jpg" },
  { id: 11, src: "assets/img/logodesign/Logo-11.jpg" },
  { id: 12, src: "assets/img/logodesign/Logo-12.jpg" },
  { id: 13, src: "assets/img/logodesign/logo-13.jpg" },
  { id: 14, src: "assets/img/logodesign/logo-14.jpg" },
  { id: 15, src: "assets/img/logodesign/logo-15.jpg" },
  { id: 16, src: "assets/img/logodesign/logo-16.jpg" },
];

const processSteps = [
  {
    iconClass: "fa-solid fa-lightbulb",
    title: "Requirement Understanding",
    description:
      "We learn about your business, industry, audience, competitors, and branding preferences.",
  },
  {
    iconClass: "fa-solid fa-magnifying-glass",
    title: "Research & Concept Development",
    description:
      "Our designers research relevant visual styles and develop creative concepts based on your requirements.",
  },
  {
    iconClass: "fa-solid fa-pen-nib",
    title: "Design Creation",
    description:
      "We transform the selected concept into a professional logo using appropriate typography, colors, shapes, and visual elements.",
  },
  {
    iconClass: "fa-solid fa-comments",
    title: "Feedback & Refinement",
    description:
      "Your feedback helps us refine the design and create a final concept that matches your expectations.",
  },
  {
    iconClass: "fa-solid fa-paper-plane",
    title: "Final Delivery",
    description:
      "The approved logo is prepared in suitable formats for your website, social media, print materials, and other branding requirements.",
  },
];

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const generateSquares = () => {
  return shuffle([...squareData]).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    setSquares(generateSquares());

    const shuffleLoop = () => {
      setSquares(generateSquares());
      timeoutRef.current = setTimeout(shuffleLoop, 3000);
    };

    timeoutRef.current = setTimeout(shuffleLoop, 3000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(4, 1fr)",
        height: "100%",
        minHeight: "450px",
        gap: "8px",
      }}
    >
      {squares.map((sq) => sq)}
    </div>
  );
};

export const ShuffleHero = () => {
  return (
    <section
      className="px-about-6-area pt-50 pb-80 pb-lg-110"
      style={{
        backgroundColor: "#ffffff",
      }}
    >
      <div className="container container-1550">
        {/* Title Section */}
        <div className="row align-items-center mb-5">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
              Our Logo Design Process
            </span>
          </div>
          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">From Your Idea </span>
                to a Professional Brand Identity
              </h4>
              <p className="text-figtree text-black mt-2">
                We follow a structured design process to ensure your logo represents your business effectively.
              </p>
            </div>
          </div>
        </div>

        {/* Content Section: Split into 6 and 6 */}
        <div className="row align-items-center g-4">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {processSteps.map((step, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    color: "#1a1a1a",
                    fontFamily: "Figtree, Figtree Fallback",
                  }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <i
                    className={step.iconClass}
                    style={{
                      fontSize: "20px",
                      color: "#53ae7d",
                      flexShrink: 0,
                      marginTop: "6px",
                    }}
                  ></i>
                  <div>
                    <h6
                      style={{
                        margin: 0,
                        fontSize: "20px",
                        color: "#053456",
                        fontFamily: "Figtree, Figtree Fallback",
                        fontWeight:"400",
                      }}
                    >
                      {step.title}
                    </h6>
                    <p
                      style={{
                        margin: "4px 0 0 0",
                        fontSize: "16px",
                        color: "#000",
                        lineHeight: "1.5",
                        fontFamily: "Figtree, Figtree Fallback",
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-6 d-flex flex-column h-100">
            <ShuffleGrid />
          </div>
        </div>
      </div>
    </section>
  );
};