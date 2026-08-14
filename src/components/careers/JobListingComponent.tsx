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

export const Resend = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 600 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M186 447.471V154H318.062C336.788 154 353.697 158.053 368.79 166.158C384.163 174.263 396.181 185.443 404.845 199.698C413.51 213.672 417.842 229.604 417.842 247.491C417.842 265.938 413.51 282.568 404.845 297.381C396.181 311.915 384.302 323.375 369.209 331.759C354.117 340.144 337.067 344.337 318.062 344.337H253.917V447.471H186ZM348.667 447.471L274.041 314.99L346.99 304.509L430 447.471H348.667ZM253.917 289.835H311.773C319.04 289.835 325.329 288.298 330.639 285.223C336.229 281.869 340.421 277.258 343.216 271.388C346.291 265.519 347.828 258.811 347.828 251.265C347.828 243.718 346.151 237.15 342.797 231.56C339.443 225.691 334.552 221.219 328.124 218.144C321.975 215.07 314.428 213.533 305.484 213.533H253.917V289.835Z"
      fill="currentColor"
    />
  </svg>
);

export const Turso = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height="1em"
    viewBox="0 0 201 170"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m100.055 170c-2.1901 0-18.2001-12.8-21.3001-16.45-2.44 3.73-6.44 7.96-6.44 7.96-11.05-5.57-25.17-20.06-27.83-25.13-2.62-5-12.13-62.58-12.39-79.3-.34-9.41 5.85-28.49 67.9601-28.49 62.11 0 68.29 19.08 67.96 28.49-.25 16.72-9.76 74.3-12.39 79.3-2.66 5.07-16.78 19.56-27.83 25.13 0 0-4-4.23-6.44-7.96-3.1 3.65-19.11 16.45-21.3 16.45z"
      fill="#53ae7d"
    />
    <path
      d="m100.055 132.92c-20.7301 0-33.9601-10.95-33.9601-10.95l1.91-26.67-21.75-1.94-3.91-31.55h115.4301l-3.91 31.55-21.75 1.94 1.91 26.67s-13.23 10.95-33.96 10.95z"
      fill="#053456"
    />
    <path
      d="m121.535 75.79 78.52-27.18c-4.67-27.94-29.16-48.61-29.16-48.61v30.78l-14.54 3.75-9.11-10.97-7.8 15.34-39.38 10.16-39.3801-10.16-7.8-15.34-9.11 10.97-14.54-3.75v-30.78s-24.50997 20.67-29.1799684 48.61l78.5199684 27.18-2.8 37.39c6.7 1.7 13.75 3.39 24.2801 3.39 10.53 0 17.57-1.69 24.27-3.39l-2.8-37.39z"
      fill="#53ae7d"
    />
  </svg>
);

export const Supabase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 109 113"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
      fill="url(#paint0_linear)"
    />
    <path
      d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
      fill="url(#paint1_linear)"
      fillOpacity={0.2}
    />
    <path
      d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
      fill="#53ae7d"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1={53.9738}
        y1={54.974}
        x2={94.1635}
        y2={71.8295}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#053456" />
        <stop offset={1} stopColor="#53ae7d" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1={36.1558}
        y1={30.578}
        x2={54.4844}
        y2={65.0806}
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

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
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 10,
              backgroundColor: "rgba(5, 52, 86, 0.4)",
              backdropFilter: "blur(12px)",
            }}
          />
        ) : null}
      </AnimatePresence>

      {/* Expanded Modal */}
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

        {/* Send Resume Button */}
        <a
          className="px-btn-grey d-flex align-items-center gap-2"
          href={`mailto:hr@yulanto.com?subject=Application for ${encodeURIComponent(
            activeItem.company
          )}`}
          onClick={(e) => e.stopPropagation()}
        >
          Send Resume
        </a>
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
                gap: "2px",
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
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}