"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import "./TimeLine.css";
import { timelineData } from "@/components/data/timelineData";
import SectionTitle from "@/components/sectiontitle/SectionTitle";

export default function TimelineSlider() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const drag = useRef({
    dragging: false,
    startX: 0,
    dragOffset: 0,
    prevTranslate: 0,
  });

  const getStepWidth = useCallback(() => {
    if (!viewportRef.current || !trackRef.current) return 360;
    const item = viewportRef.current.querySelector(".timeline-item");
    if (!item) return 360;
    const style = window.getComputedStyle(trackRef.current);
    const gap = parseFloat(style.gap) || 32;
    return item.offsetWidth + gap;
  }, []);

  const updatePosition = useCallback(
    (index) => {
      if (!trackRef.current) return;
      const stepWidth = getStepWidth();
      const offset = -index * stepWidth;

      drag.current.prevTranslate = offset;
      trackRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;
    },
    [getStepWidth],
  );

  const startAutoplay = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % timelineData.length);
    }, 3500);
  }, []);

  useEffect(() => {
    updatePosition(currentIndex);
  }, [currentIndex, updatePosition]);

  useEffect(() => {
    const handleResize = () => updatePosition(currentIndex);
    window.addEventListener("resize", handleResize);
    startAutoplay();

    return () => {
      clearInterval(intervalRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentIndex, startAutoplay, updatePosition]);

  const getX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);

  const dragStart = (e) => {
    clearInterval(intervalRef.current);
    drag.current.dragging = true;
    drag.current.startX = getX(e);

    if (trackRef.current) {
      trackRef.current.classList.add("dragging");
    }
  };

  const dragMove = (e) => {
    if (!drag.current.dragging) return;
    const current = getX(e);
    drag.current.dragOffset = current - drag.current.startX;

    if (trackRef.current) {
      const translate = drag.current.prevTranslate + drag.current.dragOffset;
      trackRef.current.style.transform = `translate3d(${translate}px, 0, 0)`;
    }
  };

  const dragEnd = () => {
    if (!drag.current.dragging) return;
    drag.current.dragging = false;

    if (trackRef.current) {
      trackRef.current.classList.remove("dragging");
    }

    const threshold = 50;
    if (drag.current.dragOffset < -threshold) {
      setCurrentIndex((prev) => (prev + 1) % timelineData.length);
    } else if (drag.current.dragOffset > threshold) {
      setCurrentIndex((prev) =>
        prev === 0 ? timelineData.length - 1 : prev - 1,
      );
    } else {
      updatePosition(currentIndex);
    }

    drag.current.dragOffset = 0;
    startAutoplay();
  };

  // Helper function to split title words in half and wrap second half in span
  const renderFormattedTitle = (title) => {
    if (!title) return null;
    const words = title.trim().split(" ");
    if (words.length === 1) return title;

    const midIndex = Math.ceil(words.length / 2);
    const firstHalf = words.slice(0, midIndex).join(" ");
    const secondHalf = words.slice(midIndex).join(" ");

    return (
      <>
        {firstHalf} <span className="text-blue-about">{secondHalf}</span>
      </>
    );
  };

  return (
    <div className="container-fluid container-xxl py-4 px-3 px-md-4">
      <SectionTitle
        subtitle="Our Journey"
        titleFirst=" Our Journey "
        titleSecond=" So Far"
        description="Our journey is a story of continuous growth, innovation, and commitment. Since our establishment in 2015, we have evolved from a small team with a big vision into a growing digital solutions company."
        animationType="text-reveal-lines"
        delay={300}
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
          {timelineData.map((item, index) => (
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
                <h4 className="px-about-title text-effect timeline-card-heading">
                  {renderFormattedTitle(item.title)}
                </h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
