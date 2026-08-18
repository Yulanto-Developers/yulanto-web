"use client";

import { useEffect, useRef, useState } from "react";
import "./TimeLine.css";
import { timelineData } from "@/components/data/timelineData";
import SectionTitle from "@/components/sectiontitle/SectionTitle";

const CARD_WIDTH = 320;
const CARD_GAP = 40;

export default function TimelineSlider() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const drag = useRef({
    dragging: false,
    startX: 0,
    dragOffset: 0,
    prevTranslate: 0,
  });

  const intervalRef = useRef();

  const stepWidth = CARD_WIDTH + CARD_GAP;

  const updatePosition = (index) => {
    if (!viewportRef.current || !trackRef.current) return;

    const viewportWidth = viewportRef.current.offsetWidth;

    const offset = viewportWidth / 2 - CARD_WIDTH / 2 - index * stepWidth;

    drag.current.prevTranslate = offset;

    trackRef.current.style.transform = `translateX(${offset}px)`;
  };

  useEffect(() => {
    updatePosition(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    const resize = () => updatePosition(currentIndex);

    window.addEventListener("resize", resize);

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === timelineData.length - 1 ? 0 : prev + 1,
      );
    }, 3000);

    return () => {
      clearInterval(intervalRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const getX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);

  const dragStart = (e) => {
    clearInterval(intervalRef.current);

    drag.current.dragging = true;
    drag.current.startX = getX(e);

    trackRef.current.classList.add("dragging");
  };

  const dragMove = (e) => {
    if (!drag.current.dragging) return;

    const current = getX(e);

    drag.current.dragOffset = current - drag.current.startX;

    trackRef.current.style.transform = `translateX(${
      drag.current.prevTranslate + drag.current.dragOffset
    }px)`;
  };

  const dragEnd = () => {
    if (!drag.current.dragging) return;

    drag.current.dragging = false;

    trackRef.current.classList.remove("dragging");

    if (
      drag.current.dragOffset < -50 &&
      currentIndex < timelineData.length - 1
    ) {
      setCurrentIndex((prev) => prev + 1);
    } else if (drag.current.dragOffset > 50 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      updatePosition(currentIndex);
    }

    drag.current.dragOffset = 0;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === timelineData.length - 1 ? 0 : prev + 1,
      );
    }, 3000);
  };

  return (
    <div className="container py-5">
      <SectionTitle
        subtitle="Our Journey"
        titleFirst="Our Journey So Far"
        titleSecond=""
        description="Our journey is a story of continuous growth, innovation, and commitment. Since our establishment in 2015, we have evolved from a small team with a big vision into a growing digital solutions company serving clients across India and international markets. Every milestone reflects our dedication to technology, creativity, customer satisfaction, and long-term business relationships."
      />

      <div
        className="timeline-viewport"
        ref={viewportRef}
        onMouseDown={dragStart}
        onMouseMove={dragMove}
        onMouseUp={dragEnd}
        onMouseLeave={dragEnd}
        onTouchStart={dragStart}
        onTouchMove={dragMove}
        onTouchEnd={dragEnd}
      >
        <div className="timeline-line" />

        <div className="timeline-track" ref={trackRef}>
          {timelineData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.year}
                className={`timeline-item ${
                  currentIndex === index ? "active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="timeline-node">
                  <div className="node-circle">{item.year}</div>
                </div>

                <div className="timeline-card">
                  <Icon className="card-icon" />

                  <h4>{item.title}</h4>

                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
