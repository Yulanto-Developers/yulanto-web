"use client";

import React, { useEffect, useRef, useState } from "react";
import { PageFlip } from "page-flip";

interface StepData {
  title: string;
  description: string;
  spreadImage: string;
}

const bookSteps: StepData[] = [
  {
    title: "Understand Your Requirement",
    description:
      "We begin by understanding your business, target audience, objectives, content, and design expectations.",
    spreadImage: "assets/img/logodesign/Logo-1.jpg",
  },
  {
    title: "Content & Brand Review",
    description:
      "We review your content, logo, brand guidelines, images, colors, and other materials required for the design.",
    spreadImage: "assets/img/logodesign/Logo-2.jpg",
  },
  {
    title: "Design Concept",
    description:
      "Our designers develop a creative concept and layout that reflects your brand and communicates your message effectively.",
    spreadImage: "assets/img/logodesign/Logo-3.jpg",
  },
  {
    title: "Review & Revisions",
    description:
      "We share the design for your feedback and make the required revisions to refine the final output.",
    spreadImage: "assets/img/logodesign/Logo-4.jpg",
  },
  {
    title: "Final Artwork",
    description:
      "After approval, we prepare the final files in suitable formats for digital use or professional printing.",
    spreadImage: "assets/img/logodesign/Logo-5.jpg",
  },
];

export default function StPageFlipBook() {
  const bookContainerRef = useRef<HTMLDivElement>(null);
  const pageFlipInstance = useRef<PageFlip | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (!bookContainerRef.current) return;

    const pf = new PageFlip(bookContainerRef.current, {
      width: 550,
      height: 500,
      size: "fixed",
      minWidth: 300,
      maxWidth: 600,
      minHeight: 400,
      maxHeight: 700,
      drawShadow: true,
      maxShadowOpacity: 0.6,
      showCover: false,
      usePortrait: false,
      startPage: 0,
    });

    const pages = bookContainerRef.current.querySelectorAll(".page-leaf");
    pf.loadFromHTML(pages as unknown as NodeListOf<HTMLElement>);
    pageFlipInstance.current = pf;

    pf.on("flip", (e) => {
      const stepIndex = Math.floor((e.data as number) / 2);
      setCurrentPage(stepIndex);
    });

    const interval = setInterval(() => {
      if (!pageFlipInstance.current) return;
      const totalLeafs = pf.getPageCount();
      const nextLeaf = (pf.getCurrentPageIndex() + 2) % totalLeafs;
      pf.flip(nextLeaf);
    }, 3000);

    return () => {
      clearInterval(interval);
      if (pageFlipInstance.current) {
        pageFlipInstance.current.destroy();
        pageFlipInstance.current = null;
      }
    };
  }, []);

  const goToStep = (index: number) => {
    if (pageFlipInstance.current) {
      pageFlipInstance.current.flip(index * 2);
    }
  };

  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110" style={{ overflow: "hidden" ,backgroundColor:"#fff" }} >
      <div className="container container-1550">
        {/* Top Title Row */}
        <div className="row align-items-center mb-50" data-aos="fade-up">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
             Our Graphic Design Process
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">From Concept to </span>
              Final Design
              </h4>
              <p className="text-figtree text-black mt-2">
               We follow a simple and transparent design process to turn your ideas into professional marketing materials.
              </p>
            </div>
          </div>
        </div>

        {/* FlipBook Section */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: "100%",
            }}
          >
            {/* LEFT STACKED PAGES */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                pointerEvents: "none",
                zIndex: 0,
              }}
            >
              {bookSteps.map((step, idx) => {
                if (idx >= currentPage) return null;
                const offset = (currentPage - idx) * 12;
                return (
                  <div
                    key={`left-stack-${idx}`}
                    style={{
                      position: "absolute",
                      right: `calc(100% + ${offset}px)`,
                      width: "50px",
                      height: "500px",
                      borderRadius: "16px 0 0 16px",
                      overflow: "hidden",
                      boxShadow: "-6px 0 12px rgba(0,0,0,0.3)",
                      transform: `scale(${1 - (currentPage - idx) * 0.02})`,
                      transformOrigin: "right center",
                      transition: "all 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <img
                      src={step.spreadImage}
                      alt="Previous Page Stack"
                      style={{
                        width: "550px",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "left center",
                        filter: "brightness(0.6)",
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* MAIN BOOK CONTAINER */}
            <div
              ref={bookContainerRef}
              style={{
                margin: "0 auto",
                boxShadow: "0 35px 70px -15px rgba(0, 0, 0, 0.5)",
                borderRadius: "16px",
                position: "relative",
                zIndex: 2,
              }}
            >
              {bookSteps.map((step, idx) => (
                <React.Fragment key={idx}>
                  {/* LEFT PAGE */}
                  <div
                    className="page-leaf"
                    style={{
                      backgroundColor: "#000000",
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "16px 0 0 16px",
                      boxSizing: "border-box",
                    }}
                  >
                    <img
                      src={step.spreadImage}
                      alt={step.title}
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: "200%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "left center",
                        display: "block",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        width: "35px",
                        background:
                          "linear-gradient(to left, rgba(0,0,0,0.4), transparent)",
                        pointerEvents: "none",
                      }}
                    />
                  </div>

                  {/* RIGHT PAGE */}
                  <div
                    className="page-leaf"
                    style={{
                      backgroundColor: "#000000",
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "0 16px 16px 0",
                      boxSizing: "border-box",
                    }}
                  >
                    <img
                      src={step.spreadImage}
                      alt={step.title}
                      style={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        width: "200%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "right center",
                        display: "block",
                      }}
                    />

                    {/* Content Box Over the Right Half */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "32px",
                        left: "24px",
                        right: "24px",
                        backgroundColor: "rgba(15, 23, 42, 0.75)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        padding: "24px",
                        borderRadius: "12px",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        color: "#ffffff",
                        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.35)",
                        zIndex: 3,
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "22px",
                          fontWeight: 700,
                          margin: "0 0 10px 0",
                          lineHeight: "1.3",
                          fontFamily: "Figtree, Figtree Fallback",
                          color: "#ffffff",
                        }}
                      >
                        {step.title}
                      </h2>
                      <p
                        style={{
                          fontSize: "15px",
                          fontFamily: "Figtree, Figtree Fallback",
                          lineHeight: "1.6",
                          color: "#e2e8f0",
                          margin: 0,
                        }}
                      >
                        {step.description}
                      </p>
                    </div>

                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        width: "35px",
                        background:
                          "linear-gradient(to right, rgba(0,0,0,0.4), transparent)",
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                </React.Fragment>
              ))}
            </div>

            {/* RIGHT STACKED PAGES */}
            <div
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                pointerEvents: "none",
                zIndex: 0,
              }}
            >
              {bookSteps.map((step, idx) => {
                if (idx <= currentPage) return null;
                const offset = (idx - currentPage) * 12;
                return (
                  <div
                    key={`right-stack-${idx}`}
                    style={{
                      position: "absolute",
                      left: `calc(100% + ${offset}px)`,
                      width: "50px",
                      height: "500px",
                      borderRadius: "0 16px 16px 0",
                      overflow: "hidden",
                      boxShadow: "6px 0 12px rgba(0,0,0,0.3)",
                      transform: `scale(${1 - (idx - currentPage) * 0.02})`,
                      transformOrigin: "left center",
                      transition: "all 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <img
                      src={step.spreadImage}
                      alt="Upcoming Page Stack"
                      style={{
                        width: "550px",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "right center",
                        filter: "brightness(0.6)",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* PAGINATION */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "32px",
              zIndex: 10,
            }}
          >
            {bookSteps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToStep(idx)}
                style={{
                  width: currentPage === idx ? "28px" : "10px",
                  height: "10px",
                  borderRadius: "5px",
                  border: "none",
                  backgroundColor: currentPage === idx ? "#053456" : "#cbd5e1",
                  cursor: "pointer",
                  transition: "all 300ms ease",
                  padding: 0,
                }}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}