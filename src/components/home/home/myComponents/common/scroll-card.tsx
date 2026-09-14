"use client";

import React, { forwardRef, useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "@/assets/css/scroll-card.css";

gsap.registerPlugin(ScrollTrigger);

export interface ProcessCardData {
  title: string;
  description: string;
  link?: string;
  bgImage: string;
  rotation?: string;
}

interface ScrollCardProps {
  cardsData: ProcessCardData[];
  sectionTitle?: React.ReactNode;
}

const ScrollCard = forwardRef<HTMLElement, ScrollCardProps>(
  ({ cardsData, sectionTitle }, ref) => {
    const sectionRef = useRef<HTMLElement | null>(null);

    useLayoutEffect(() => {
      const section = sectionRef.current;

      if (!section) return;

      const ctx = gsap.context(() => {
        /*
         * Only run the pin animation on desktop.
         */
        const mm = gsap.matchMedia();

        mm.add("(min-width: 992px)", () => {
          const cards = gsap.utils.toArray<HTMLElement>(".scroll-process-card");

          const heading = section.querySelector(
            ".scroll-process-heading-inner",
          ) as HTMLElement | null;

          if (!cards.length) return;

          /* =================================================
                       INITIAL CARD STACK
                    ================================================= */

          cards.forEach((card, index) => {
            gsap.set(card, {
              zIndex: index + 1,
            });
          });

          /* =================================================
                       PIN HEADING
                    ================================================= */

          if (heading) {
            ScrollTrigger.create({
              trigger: section,

              start: "top top",

              end: "bottom bottom",

              pin: heading,

              pinSpacing: false,

              anticipatePin: 1,

              invalidateOnRefresh: true,
            });
          }

          /* =================================================
                       PIN EACH CARD
                    ================================================= */

          cards.forEach((card) => {
            const wrapper = card.closest(
              ".scroll-process-card-wrapper",
            ) as HTMLElement | null;

            if (!wrapper) return;

            ScrollTrigger.create({
              trigger: wrapper,

              start: "top top+=100",

              end: "bottom top+=100",

              pin: card,

              pinSpacing: false,

              anticipatePin: 1,

              invalidateOnRefresh: true,
            });
          });

          /*
           * Refresh after all triggers are created.
           */
          ScrollTrigger.refresh();
        });

        return () => {
          mm.revert();
        };
      }, section);

      return () => {
        ctx.revert();
      };
    }, [cardsData]);

    return (
      <section
        ref={(node) => {
          sectionRef.current = node;

          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        className="scroll-process-section"
      >
        <div className="scroll-process-container">
          {/* =================================================
                       LEFT SIDE
                       HEADING
                    ================================================= */}

          <div className="scroll-process-heading">
            <div className="scroll-process-heading-inner text-tenor">
              {sectionTitle || (
                <>
                  <span className="scroll-process-small-title">
                    How We Work
                  </span>

                  <h2>
                    Our Landing Page
                    <br />
                    <span>Design Process</span>
                  </h2>
                </>
              )}
            </div>
          </div>

          {/* =================================================
                       RIGHT SIDE
                       CARDS
                    ================================================= */}

          <div className="scroll-process-cards">
            {cardsData.map((card, index) => (
              <div className="scroll-process-card-wrapper" key={index}>
                <article
                  className={`scroll-process-card ${card.rotation || ""}`}
                  style={{
                    backgroundImage: `url("${card.bgImage}")`,
                  }}
                >
                  <div className="scroll-process-overlay" />

                  <div className="scroll-process-card-content">
                    <span className="scroll-process-step">
                      Step {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-tenor">{card.title}</h3>

                    <p>{card.description}</p>

                    {card.link && (
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="scroll-process-link"
                      >
                        Learn More
                        <span> →</span>
                      </a>
                    )}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
);

ScrollCard.displayName = "ScrollCard";

export default ScrollCard;
