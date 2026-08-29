"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

const squareData = [
  {
    id: 1,
    src: "assets/img/logodesign/Logo-1.jpg",
  },
  {
    id: 2,
    src: "assets/img/logodesign/Logo-2.jpg",
  },
  {
    id: 3,
    src: "assets/img/logodesign/Logo-3.jpg",
  },
  {
    id: 4,
    src: "assets/img/logodesign/Logo-4.jpg",
  },
  {
    id: 5,
    src: "assets/img/logodesign/Logo-5.jpg",
  },
  {
    id: 6,
    src: "assets/img/logodesign/Logo-6.jpg",
  },
  {
    id: 7,
    src: "assets/img/logodesign/Logo-7.jpg",
  },
  {
    id: 8,
    src: "assets/img/logodesign/Logo-8.jpg",
  },
  {
    id: 9,
    src: "assets/img/logodesign/Logo-9.jpg",
  },
  {
    id: 10,
    src: "assets/img/logodesign/Logo-10.jpg",
  },
  {
    id: 11,
    src: "assets/img/logodesign/Logo-11.jpg",
  },
  {
    id: 12,
    src: "assets/img/logodesign/Logo-12.jpg",
  },
  // {
  //   id: 13,
  //   src: "assets/img/logodesign/Logo-13.jpg",
  // },
  // {
  //   id: 14,
  //   src: "assets/img/logodesign/Logo-14.jpg",
  // },
  // {
  //   id: 15,
  //   src: "assets/img/logodesign/Logo-15.jpg",
  // },
  // {
  //   id: 16,
  //   src: "assets/img/logodesign/Logo-16.jpg",
  // },
];

const processSteps = [
  {
    title: "Requirement Understanding",
    description:
      "We learn about your business, industry, audience, competitors, and branding preferences.",
  },
  {
    title: "Research & Concept Development",
    description:
      "Our designers research relevant visual styles and develop creative concepts based on your requirements.",
  },
  {
    title: "Design Creation",
    description:
      "We transform the selected concept into a professional logo using appropriate typography, colors, shapes, and visual elements.",
  },
  {
    title: "Feedback & Refinement",
    description:
      "Your feedback helps us refine the design and create a final concept that matches your expectations.",
  },
  {
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
        height: "450px",
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <div>
            <span className="tp-section-subtitle text-black blink-ball">
              Our Logo Design Process
            </span>
            <h4 className="px-about-title mb-20">
              <span className="text-blue-about">From Your Idea </span>
              to a Professional Brand Identity
            </h4>
            <p className="text-figtree text-black mt-2 mb-20">
              We follow a structured design process to ensure your logo represents your business effectively.
            </p>
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
                  <div
                    style={{
                      height: "22px",
                      width: "22px",
                      borderRadius: "50%",
                      backgroundColor: "#53ae7d",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <Check
                      style={{
                        height: "14px",
                        width: "14px",
                        color: "#ffffff",
                        strokeWidth: 3,
                      }}
                    />
                  </div>
                  <div>
                    <h6
                      style={{
                        margin: 0,
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#053456",
                        fontFamily: "tex-figtree",
                      }}
                    >
                      {step.title}
                    </h6>
                    <p
                      style={{
                        margin: "4px 0 0 0",
                        fontSize: "20px !important",
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
          <ShuffleGrid />
        </div>
      </div>
    </section>
  );
};