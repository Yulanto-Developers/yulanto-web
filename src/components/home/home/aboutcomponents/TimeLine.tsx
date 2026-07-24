"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import "./TimeLine.css";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="timeline-container" ref={containerRef}>
      <div className="timeline-header">
        <h2 className="timeline-title">Changelog from my journey</h2>
        <p className="timeline-subtitle">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div>

      <div ref={ref} className="timeline-wrapper">
        {data.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-left">
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot" />
              </div>
              <h3 className="timeline-year-desktop">{item.title}</h3>
            </div>

            <div className="timeline-content">
              <h3 className="timeline-year-mobile">{item.title}</h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          className="timeline-line"
          style={{
            height: height + "px",
          }}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="timeline-progress"
          />
        </div>
      </div>
    </div>
  );
};

// Default export
export default Timeline;