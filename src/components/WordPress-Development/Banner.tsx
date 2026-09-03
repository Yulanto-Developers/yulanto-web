"use client";

import React from "react";
import { motion } from "motion/react";

// Added leading slashes to prevent relative route breaking in Next.js/React
const graphicDesignImages = [
  "/assets/img/logodesign/Logo-1.jpg",
  "/assets/img/logodesign/Logo-2.jpg",
  "/assets/img/logodesign/Logo-3.jpg",
  "/assets/img/logodesign/Logo-4.jpg",
  "/assets/img/logodesign/Logo-5.jpg",
  "/assets/img/logodesign/Logo-6.jpg",
  "/assets/img/logodesign/Logo-7.jpg",
  "/assets/img/logodesign/Logo-8.jpg",
  "/assets/img/logodesign/Logo-9.jpg",
  "/assets/img/logodesign/Logo-10.jpg",
  "/assets/img/logodesign/Logo-11.jpg",
];

export default function GraphicDesignSection() {
  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110"   >
     
 
  
      <div
        className="container container-1550"
       
      >
         {/* Top Title Row */}
                <div className="row align-items-center" data-aos="fade-up">
                    <div className="col-xl-3">
                        <span className="tp-section-subtitle text-black blink-ball">
                           WordPress Website Design & Development Company in Chennai
                        </span>
                    </div>

                    <div className="col-xl-9">
                        <div className="px-project-title-box">
                            <h4 className="px-about-title mb-20">
                                <span className="text-blue-about">Build a Powerful Website with </span>Expert WordPress Development 
                            </h4>
                            <p className="text-figtree text-black mt-2">
                            Looking for a reliable WordPress website development company in Chennai? Yulanto Web Creations helps businesses build professional, responsive, and SEO-friendly WordPress websites that support long-term online growth.
                            </p>
                        </div>
                    </div>
                </div>

        {/* 3D Marquee Container */}
        <div
          style={{
            marginTop: "30px",
          
         
            padding: "8px",
           
          }}
        >
          <ThreeDMarquee images={graphicDesignImages} />
        </div>
         <p className="text-figtree text-black mt-2" >From a simple business website to a feature-rich corporate portal or eCommerce store, our WordPress website design and development services are tailored to your business goals. We combine modern UI/UX, responsive design, performance optimization, and easy content management to create websites that look professional and work smoothly across devices.

Whether you need a new WordPress website, redesign an existing website, or require ongoing WordPress support, our experienced team can help.</p>
      </div>
    </section>
  );
}

/* --- Fixed 3D Marquee Component --- */

const ThreeDMarquee = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  // Split images into 4 columns
  const chunkSize = Math.ceil(images.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });

  return (
    <div
      className={className}
      style={{
        margin: "0 auto",
        display: "block",
        height: "550px",
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
              "translate(-50%, -50%) rotateX(45deg) rotateY(0deg) rotateZ(-35deg) scale(0.85)",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 260px)",
              gap: "24px",
            }}
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={{ y: colIndex % 2 === 0 ? [0, -250, 0] : [-250, 0, -250] }}
                transition={{
                  duration: colIndex % 2 === 0 ? 18 : 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
                key={colIndex + "marquee"}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <GridLineVertical offset="80px" style={{ left: "-12px" }} />
                {subarray.map((image, imageIndex) => (
                  <div
                    key={imageIndex + image}
                    style={{ position: "relative", width: "100%" }}
                  >
                    <GridLineHorizontal offset="20px" style={{ top: "-12px" }} />
                    <motion.img
                      whileHover={{ y: -10, scale: 1.03 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      src={image}
                      alt={`Graphic Design Sample ${imageIndex + 1}`}
                      style={{
                        width: "100%",
                        height: "180px",
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
          "linear-gradient(to right, rgba(0,0,0,0.15), rgba(0,0,0,0.15) 50%, transparent 0, transparent)",
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
          "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.15) 50%, transparent 0, transparent)",
        backgroundSize: "1px 6px",
        zIndex: 30,
        ...style,
      }}
    />
  );
};