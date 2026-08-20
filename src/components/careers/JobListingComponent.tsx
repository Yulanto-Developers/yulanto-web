"use client";

import { useEffect, useRef, useState, type JSX } from "react";
import type { SVGProps } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOnClickOutside } from "usehooks-ts";

export interface Job {
  company: string;
  title: string;
  logo: React.ReactNode;
  job_description: string;
  salary: string;
  location: string;
  remote: string;
  job_time: string;
}

export interface JobListingComponentProps {
  jobs?: Job[];
  className?: string;
  onJobClick?: (job: Job) => void;
}

export default function JobListingComponent({
  jobs = [],
  className = "",
  onJobClick,
}: JobListingComponentProps) {
  const [activeItem, setActiveItem] = useState<Job | null>(null);
  const ref = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  useOnClickOutside(ref, () => setActiveItem(null));

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveItem(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const safeJobs = Array.isArray(jobs) ? jobs : [];

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#ffffff",
        padding: "60px 24px",
        minHeight: "420px",
        overflow: "hidden",
      }}
      className={className}
    >
      <div className="text-center">
        <span className="tp-section-subtitle text-black blink-ball">
          We're Hiring
        </span>

        <h4 className="px-about-title mb-20 text-center">
          <span className="text-blue-about">Join Our&nbsp;</span>
          Team
        </h4>
      </div>

      {/* Overlay Backdrop */}
      <AnimatePresence>
        {activeItem ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 10,
              backdropFilter: "blur(12px)",
             
            }}
          />
        ) : null}
      </AnimatePresence>

      {/* Expanded Modal */}
      <AnimatePresence>
        {activeItem ? (
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 20,
              display: "grid",
              placeItems: "center",
              padding: "16px",
            }}
          >
            <motion.div
              style={{
                backgroundColor: "#ffffff",
                display: "flex",
                height: "fit-content",
                width: "90%",
                maxWidth: "600px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "16px",
                overflow: "hidden",
                border: "2px solid #53ae7d",
                padding: "24px",
                boxShadow: "0 10px 25px -5px rgba(5, 52, 86, 0.2)",
                borderRadius: "12px",
              }}
              ref={ref}
              layoutId={`workItem-${activeItem.company}`}
            >
              {/* Job Header */}
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <motion.div
                  layoutId={`workItemLogo-${activeItem.company}`}
                  style={{
                    fontSize: "36px",
                    color: "#053456",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {activeItem.logo}
                </motion.div>

                <div
                  style={{
                    display: "flex",
                    flexGrow: 1,
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <motion.div
                    style={{
                      color: "#053456",
                      fontSize: "18px",
                      fontWeight: 700,
                    }}
                    layoutId={`workItemCompany-${activeItem.company}`}
                  >
                    {activeItem.company}
                  </motion.div>

                  <motion.p
                    layoutId={`workItemTitle-${activeItem.company}`}
                    style={{
                      color: "#53ae7d",
                      fontSize: "14px",
                      fontWeight: 600,
                      margin: 0,
                    }}
                  >
                    {activeItem.title}
                  </motion.p>

                  <motion.div
                    style={{
                      color: "#053456",
                      fontSize: "13px",
                      opacity: 0.8,
                    }}
                    layoutId={`workItemExtras-${activeItem.company}`}
                  >
                    {activeItem.salary} &nbsp; | &nbsp;
                    {activeItem.location} &nbsp; | &nbsp;
                    {activeItem.job_time}
                  </motion.div>
                </div>
              </div>

              {/* Job Description */}
              <motion.p
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.05 },
                }}
                style={{
                  color: "#053456",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {activeItem.job_description}
              </motion.p>

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "8px",
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#4b5563",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  Close
                </button>

                <a
                  className="px-btn-grey d-flex align-items-center gap-2"
                  href={`mailto:hr@yulanto.com?subject=Application for ${encodeURIComponent(
                    activeItem.company
                  )}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  Send Resume
                </a>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Grid: 3 cards per row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {safeJobs.map((role) => (
          <motion.div
            layoutId={`workItem-${role.company}`}
            key={role.company}
            onClick={() => {
              setActiveItem(role);
              if (onJobClick) onJobClick(role);
            }}
            style={{
              backgroundColor: "#ffffff",
              display: "flex",
              width: "100%",
              cursor: "pointer",
              flexDirection: "row",
              alignItems: "center",
              gap: "16px",
              border: "1px solid #53ae7d",
              padding: "16px",
              boxShadow: "0 2px 8px rgba(5, 52, 86, 0.08)",
              borderRadius: "8px",
              boxSizing: "border-box",
            }}
          >
            <motion.div
              layoutId={`workItemLogo-${role.company}`}
              style={{
                fontSize: "32px",
                color: "#053456",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {role.logo}
            </motion.div>

            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "4px",
              }}
            >
              <motion.div
                style={{
                  color: "#053456",
                  fontWeight: 700,
                  fontSize: "15px",
                }}
                layoutId={`workItemCompany-${role.company}`}
              >
                {role.company}
              </motion.div>

              <motion.div
                style={{
                  color: "#53ae7d",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
                layoutId={`workItemTitle-${role.company}`}
              >
                {role.title} / {role.salary}
              </motion.div>

              <motion.div
                style={{
                  color: "#053456",
                  display: "flex",
                  flexDirection: "row",
                  gap: "8px",
                  fontSize: "12px",
                  opacity: 0.85,
                }}
                layoutId={`workItemExtras-${role.company}`}
              >
                {role.remote === "Yes" && ` ${role.location} `}
                {role.remote === "No" && ` ${role.location} `}
                {role.remote === "Hybrid" &&
                  ` ${role.remote} / ${role.location} `}
                | {role.job_time}
              </motion.div>

              {/* Read More Link */}
              <span
                style={{
                  color: "#53ae7d",
                  fontSize: "13px",
                  fontWeight: 700,
                  marginTop: "4px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  textDecoration: "none",
                }}
              >
                Read More →
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}