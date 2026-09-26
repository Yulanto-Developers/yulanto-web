"use client";

import React, { useEffect } from "react";
import { motion } from "motion/react";
import AOS from "aos";
import "aos/dist/aos.css";

// Sample WordPress website design mockup/thumbnail images
const graphicDesignImages = [
  "/assets/img/WordPress-Development/top-1.jpg",
  "/assets/img/WordPress-Development/top-2.jpg",
  "/assets/img/WordPress-Development/top-3.jpg",
  "/assets/img/WordPress-Development/top-4.jpg",
  "/assets/img/WordPress-Development/top-5.jpg",
  "/assets/img/WordPress-Development/top-6.jpg",
  "/assets/img/WordPress-Development/top-7.jpg",
  "/assets/img/WordPress-Development/top-8.jpg",
  "/assets/img/WordPress-Development/top-9.jpg",
  "/assets/img/WordPress-Development/top-10.jpg",
  "/assets/img/WordPress-Development/top-11.jpg",
];

export default function GraphicDesignSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="px-about-6-area pt-40 pb-40 pb-lg-110 overflow-hidden">
      <div className="container container-1550">
        {/* Top Title Row with AOS Animation */}
        <div className="row align-items-center" data-aos="fade-up">
          <div className="col-xl-3 mb-3 mb-xl-0">
            <span className="tp-section-subtitle text-black blink-ball">
              WordPress Website Design & Development Company in Chennai
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">
                  Build a Powerful Website with{" "}
                </span>
                Expert WordPress Development
              </h4>

              <h1
                className="ft-23 mt-0 mb-3 text-tenor"
                data-aos="text-reveal"
                data-aos-delay="100"
                style={{ lineHeight: "1.2" }}
              >
                wordpress development company in Chennai
              </h1>

              <p className="text-figtree text-black mt-2">
                Looking for a reliable WordPress website development company in
                Chennai? Yulanto Web Creations helps businesses build
                professional, responsive, and SEO-friendly WordPress websites
                that support long-term online growth.
              </p>
            </div>
          </div>
        </div>

        {/* 3D Vertical Marquee Container */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          style={{
            marginTop: "30px",
            padding: "8px",
          }}
        >
          <ThreeDMarquee images={graphicDesignImages} />
        </div>

        {/* Bottom Description Paragraph */}
        <div data-aos="fade-up" data-aos-delay="300">
          <p className="text-figtree text-black mt-4">
            From a simple business website to a feature-rich corporate portal or
            eCommerce store, our WordPress website design and development
            services are tailored to your business goals. We combine modern
            UI/UX, responsive design, performance optimization, and easy content
            management to create websites that look professional and work
            smoothly across devices. Whether you need a new WordPress website,
            redesign an existing website, or require ongoing WordPress support,
            our experienced team can help.
          </p>
        </div>
      </div>
    </section>
  );
}

/* --- Fixed Vertical Marquee Component with Staggered Columns --- */

const ThreeDMarquee = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  // Calculate chunk size and offset each column by 3 items so the 4th column starts 3 images further down
  const baseChunkSize = Math.ceil(images.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const startIndex = (colIndex * 3) % images.length;
    const slice: string[] = [];

    // Gather baseChunkSize items wrapping around the array seamlessly if needed
    for (let i = 0; i < baseChunkSize; i++) {
      slice.push(images[(startIndex + i) % images.length]);
    }

    // Triple them for seamless continuous loop animation
    return [...slice, ...slice, ...slice];
  });

  // Balanced durations for each column so they scroll smoothly and consistently without lag
  const columnDurations = [20, 22, 21, 20];

  return (
    <div
      className={className}
      style={{
        margin: "0 auto",
        display: "block",
        height: "520px",
        overflow: "hidden",
        borderRadius: "16px",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform:
              "translate(-50%, -50%) rotateX(15deg) rotateY(0deg) rotateZ(-10deg) scale(0.92)",
            transformStyle: "preserve-3d",
            width: "100%",
            maxWidth: "1150px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(200px, 1fr))",
              gap: "20px",
              padding: "0 15px",
            }}
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={{
                  y: colIndex % 2 === 0 ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
                }}
                transition={{
                  duration: columnDurations[colIndex],
                  repeat: Infinity,
                  ease: "linear",
                }}
                key={colIndex + "marquee"}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <GridLineVertical offset="80px" style={{ left: "-10px" }} />
                {subarray.map((image, imageIndex) => (
                  <div
                    key={imageIndex + image + colIndex}
                    style={{ position: "relative", width: "100%" }}
                  >
                    <GridLineHorizontal
                      offset="20px"
                      style={{ top: "-10px" }}
                    />
                    <motion.img
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      src={image}
                      alt={`web development company in chennai ${imageIndex + 1}`}
                      style={{
                        width: "100%",
                        height: "175px",
                        borderRadius: "12px",
                        objectFit: "cover",
                        boxShadow: "0 10px 25px -5px rgba(0,0,0,0.15)",
                        backgroundColor: "#ffffff",
                        border: "1px solid rgba(0,0,0,0.08)",
                      }}
                    />
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GridLineHorizontal = ({
  style,
  offset,
}: {
  style?: React.CSSProperties;
  offset?: string;
}) => {
  return (
    <div
      style={{
        position: "absolute",
        left: `calc(${offset || "200px"} / 2 * -1)`,
        height: "1px",
        width: `calc(100% + ${offset || "200px"})`,
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.12), rgba(0,0,0,0.12) 50%, transparent 0, transparent)",
        backgroundSize: "6px 1px",
        zIndex: 30,
        ...style,
      }}
    />
  );
};

const GridLineVertical = ({
  style,
  offset,
}: {
  style?: React.CSSProperties;
  offset?: string;
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: `calc(${offset || "150px"} / 2 * -1)`,
        height: `calc(100% + ${offset || "150px"})`,
        width: "1px",
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.12), rgba(0,0,0,0.12) 50%, transparent 0, transparent)",
        backgroundSize: "1px 6px",
        zIndex: 30,
        ...style,
      }}
    />
  );
};
