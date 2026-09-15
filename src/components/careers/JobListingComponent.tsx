"use client";

import { useEffect, useRef, useState } from "react";
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

  const ref = useRef<HTMLDivElement>(null!);

  useOnClickOutside(ref, () => setActiveItem(null));

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveItem(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const safeJobs = Array.isArray(jobs) ? jobs : [];

  return (
    <div
      className={`job-listing-wrapper ${className}`}
      style={{
        position: "relative",
        backgroundColor: "#ffffff",
        padding: "60px 24px",
        minHeight: "420px",
        overflow: "hidden",
      }}
    >
      {/* =========================
          SECTION HEADING
      ========================= */}
      <div className="text-center">
        <span className="tp-section-subtitle text-black blink-ball">
          We're Hiring
        </span>

        <h4 className="px-about-title mb-20 text-center">
          <span className="text-blue-about">Join Our&nbsp;</span>
          Team
        </h4>
      </div>

      {/* =========================
          OVERLAY BACKDROP
      ========================= */}
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

      {/* =========================
          EXPANDED JOB MODAL
      ========================= */}
      <AnimatePresence>
        {activeItem ? (
          <div
            className="job-modal-wrapper"
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
              ref={ref}
              layoutId={`workItem-${activeItem.company}`}
              className="job-modal"
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
                boxShadow:
                  "0 10px 25px -5px rgba(5, 52, 86, 0.2)",
                borderRadius: "12px",
                boxSizing: "border-box",
              }}
            >
              {/* =========================
                  MODAL HEADER
              ========================= */}
              <div
                className="job-modal-header"
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                {/* Logo */}
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

                {/* Company Details */}
                <div
                  style={{
                    display: "flex",
                    flexGrow: 1,
                    flexDirection: "column",
                    gap: "4px",
                    minWidth: 0,
                  }}
                >
                  <motion.div
                    layoutId={`workItemCompany-${activeItem.company}`}
                    style={{
                      color: "#053456",
                      fontSize: "18px",
                      fontWeight: 700,
                      wordBreak: "break-word",
                    }}
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
                      wordBreak: "break-word",
                    }}
                  >
                    {activeItem.title}
                  </motion.p>

                  <motion.div
                    layoutId={`workItemExtras-${activeItem.company}`}
                    style={{
                      color: "#053456",
                      fontSize: "13px",
                      opacity: 0.8,
                      wordBreak: "break-word",
                    }}
                  >
                    {activeItem.salary} &nbsp; | &nbsp;
                    {activeItem.location} &nbsp; | &nbsp;
                    {activeItem.job_time}
                  </motion.div>
                </div>
              </div>

              {/* =========================
                  JOB DESCRIPTION
              ========================= */}
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
                  width: "100%",
                  wordBreak: "break-word",
                }}
              >
                {activeItem.job_description}
              </motion.p>

              {/* =========================
                  ACTION BUTTONS
              ========================= */}
              <div
                className="job-modal-actions"
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "8px",
                  gap: "12px",
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
                    padding: "8px 0",
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

      {/* =========================
          JOB CARDS GRID
      ========================= */}
      <div
        className="job-listing-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
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

              if (onJobClick) {
                onJobClick(role);
              }
            }}
            className="job-card"
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
              minWidth: 0,
            }}
          >
            {/* =========================
                CARD LOGO
            ========================= */}
            <motion.div
              layoutId={`workItemLogo-${role.company}`}
              className="job-card-logo"
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

            {/* =========================
                CARD CONTENT
            ========================= */}
            <div
              className="job-card-content"
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "4px",
                minWidth: 0,
              }}
            >
              {/* Company */}
              <motion.div
                layoutId={`workItemCompany-${role.company}`}
                style={{
                  color: "#053456",
                  fontWeight: 700,
                  fontSize: "15px",
                  wordBreak: "break-word",
                  width: "100%",
                }}
              >
                {role.company}
              </motion.div>

              {/* Job Title + Salary */}
              <motion.div
                layoutId={`workItemTitle-${role.company}`}
                style={{
                  color: "#53ae7d",
                  fontSize: "13px",
                  fontWeight: 600,
                  wordBreak: "break-word",
                  width: "100%",
                }}
              >
                {role.title} / {role.salary}
              </motion.div>

              {/* Location + Job Time */}
              <motion.div
                layoutId={`workItemExtras-${role.company}`}
                style={{
                  color: "#053456",
                  display: "flex",
                  flexDirection: "row",
                  gap: "8px",
                  fontSize: "12px",
                  opacity: 0.85,
                  flexWrap: "wrap",
                  width: "100%",
                  wordBreak: "break-word",
                }}
              >
                {role.remote === "Yes" && ` ${role.location} `}

                {role.remote === "No" && ` ${role.location} `}

                {role.remote === "Hybrid" &&
                  ` ${role.remote} / ${role.location} `}

                | {role.job_time}
              </motion.div>

              {/* Read More */}
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

      {/* =========================
          RESPONSIVE CSS
      ========================= */}
      <style jsx>{`
        /* =================================
           TABLET
           768px - 991px
           2 CARDS PER ROW
        ================================= */
        @media (max-width: 991px) {
          .job-listing-wrapper {
            padding: 50px 20px !important;
          }

          .job-listing-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 16px !important;
          }

          .job-card {
            padding: 15px !important;
            gap: 14px !important;
          }

          .job-card-logo {
            font-size: 30px !important;
          }
        }

        /* =================================
           MOBILE
           767px AND BELOW
           1 CARD PER ROW
        ================================= */
        @media (max-width: 767px) {
          .job-listing-wrapper {
            padding: 40px 15px !important;
          }

          .job-listing-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 14px !important;
            width: 100% !important;
          }

          .job-card {
            width: 100% !important;
            padding: 15px !important;
            gap: 14px !important;
          }

          .job-card-logo {
            font-size: 28px !important;
          }

          .job-card-content {
            min-width: 0 !important;
          }

          .job-modal {
            width: 95% !important;
            max-width: 95% !important;
            padding: 18px !important;
          }

          .job-modal-header {
            gap: 12px !important;
          }
        }

        /* =================================
           SMALL MOBILE
           480px AND BELOW
        ================================= */
        @media (max-width: 480px) {
          .job-listing-wrapper {
            padding: 35px 12px !important;
          }

          .job-listing-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 12px !important;
          }

          .job-card {
            padding: 13px !important;
            gap: 12px !important;
          }

          .job-card-logo {
            font-size: 26px !important;
          }

          .job-modal {
            width: 96% !important;
            max-width: 96% !important;
            padding: 16px !important;
          }

          .job-modal-actions {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
  );
}