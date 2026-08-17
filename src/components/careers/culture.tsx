"use client";

import React from "react";

// ==========================================
// TYPES
// ==========================================
export interface CultureItem {
  title: string;
  description: string;
  imgSrc: string;
  sideImgSrc?: string;
  colorTheme?: "orange" | "blue" | "purple";
  colors?: {
    bg: string;
    text: string;
    border: string;
  };
}

export interface CardPosition {
  top: number;
  left?: string;
  right?: string;
  rotate: number;
}

// ==========================================
// PIN SVG COMPONENT
// ==========================================
const Pin = ({ color }: { color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{
      color: color,
      display: "block",
      margin: "0 auto 12px auto",
      zIndex: 20,
    }}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
  </svg>
);

// ==========================================
// COLOR PALETTES
// ==========================================
const THEME_COLORS = {
  orange: {
    bg: "#fff7ed",
    text: "#f97316",
    border: "#ffedd5",
  },
  blue: {
    bg: "#eff6ff",
    text: "#2563eb",
    border: "#dbeafe",
  },
  purple: {
    bg: "#faf5ff",
    text: "#9333ea",
    border: "#f3e8ff",
  },
};

// ==========================================
// PINNED CARD COMPONENT
// ==========================================
const CultureCard = ({
  title,
  description,
  imgSrc,
  sideImgSrc,
  colorTheme = "blue",
  rotate,
  position,
  colors: customColors,
}: CultureItem & {
  rotate: number;
  position: CardPosition;
}) => {
  const theme = customColors || THEME_COLORS[colorTheme];

  const isLeft = !!position.left;

  return (
    <div
      style={{
        position: "absolute",
        top: `${position.top}px`,
        left: position.left || "auto",
        right: position.right || "auto",
        width: "280px",
        transform: `rotate(${rotate}deg)`,
        transition: "transform 0.3s ease, z-index 0.3s ease",
        zIndex: 10,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = `rotate(${rotate}deg) scale(1.05)`;
        e.currentTarget.style.zIndex = "30";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `rotate(${rotate}deg) scale(1)`;
        e.currentTarget.style.zIndex = "10";
      }}
    >
      {/* SIDE DECORATIVE IMAGE */}

      {sideImgSrc && (
        <img
          src={sideImgSrc}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            width: "110px",
            height: "110px",
            objectFit: "contain",
            transform: "translateY(-50%)",
            zIndex: 1,
            pointerEvents: "none",

            // LEFT cards → image on far left
            // RIGHT cards → image on far right
            ...(isLeft
              ? {
                left: "-170px",
              }
              : {
                right: "-170px",
              }),
          }}
        />
      )}

      {/* CARD */}
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "8px",
          borderRadius: "25px",
          boxShadow: "0px 10px 20px 0px #D3D3D3",
          border: "1px solid #f5f5f5",
        }}
      >
        <Pin color={theme.text} />

        <div
          style={{
            backgroundColor: theme.bg,
            border: `1px solid ${theme.border}`,
            borderRadius: "15px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* CARD IMAGE */}
          <div style={{ marginBottom: "12px" }}>
            <img
              src={imgSrc}
              alt={title}
              style={{
                width: "48px",
                height: "48px",
                objectFit: "contain",
              }}
            />
          </div>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#1f2937",
              lineHeight: "1.3",
              margin: "0 0 8px 0",
            }}
          >
            {title}
          </h3>

          <p
            style={{
              color: "#6b7280",
              fontSize: "13px",
              lineHeight: "1.5",
              margin: 0,
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// DEFAULT POSITIONS FOR 8 CARDS
// ==========================================
const DEFAULT_CARD_POSITIONS: CardPosition[] = [
  { top: 0, left: "12%", rotate: 6 },
  { top: 120, right: "12%", rotate: -6 },
  { top: 420, left: "12%", rotate: 6 },
  { top: 540, right: "12%", rotate: -6 },
  { top: 840, left: "12%", rotate: 6 },
  { top: 960, right: "12%", rotate: -6 },
  { top: 1260, left: "12%", rotate: 6 },
  { top: 1380, right: "12%", rotate: -6 },
];

// ==========================================
// MAIN WORK CULTURE SECTION
// ==========================================
export default function WorkCultureSection() {
  const data: CultureItem[] = [
    {
      title: "Values and Beliefs",
      description:
        "The core principles and beliefs that guide decision-making and behavior within the organization.",
      imgSrc: "/assets/img/careers/1.png",
      sideImgSrc: "/assets/img/cms-ecom-icons/side-values.png",
      colorTheme: "orange",
    },

    {
      title: "Communication",
      description:
        "The openness, transparency, and effectiveness of communication channels between employees and management.",
      imgSrc: "/assets/img/careers/2.png",
      sideImgSrc: "/assets/img/cms-ecom-icons/side-communication.png",
      colorTheme: "blue",
    },

    {
      title: "Collaboration",
      description:
        "The degree to which employees work together, share ideas, and support each other to achieve common goals.",
      imgSrc: "/assets/img/careers/3.png",
      sideImgSrc: "/assets/img/cms-ecom-icons/side-collaboration.png",
      colorTheme: "purple",
    },

    {
      title: "Leadership Style",
      description:
        "The approach and behavior of leaders in the organization, which sets the tone for the rest of the workforce.",
      imgSrc: "/assets/img/careers/4.png",
      sideImgSrc: "/assets/img/cms-ecom-icons/side-leadership.png",
      colorTheme: "orange",
    },

    {
      title: "Employee Engagement",
      description:
        "The level of involvement, enthusiasm, and commitment employees have towards their work and the organization.",
      imgSrc: "/assets/img/careers/5.png",
      sideImgSrc: "/assets/img/cms-ecom-icons/side-engagement.png",
      colorTheme: "blue",
    },

    {
      title: "Work-Life Balance",
      description:
        "The emphasis placed on maintaining a healthy balance between work responsibilities and personal life.",
      imgSrc: "/assets/img/careers/6.png",
      sideImgSrc: "/assets/img/cms-ecom-icons/side-worklife.png",
      colorTheme: "purple",
    },

    {
      title: "Recognition & Reward",
      description:
        "The acknowledgment and appreciation of employee contributions through rewards, incentives, and advancement.",
      imgSrc: "/assets/img/careers/7.png",
      sideImgSrc: "/assets/img/cms-ecom-icons/side-reward.png",
      colorTheme: "orange",
    },

    {
      title: "Adaptability",
      description:
        "The organization's ability to embrace change, learn from failures, and adapt to new opportunities.",
      imgSrc: "/assets/img/careers/8.png",
      sideImgSrc: "/assets/img/cms-ecom-icons/side-adaptability.png",
      colorTheme: "blue",
    },
  ];

  const height = 1800;

  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "40px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* RULE LINES BACKGROUND */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.06,
          // backgroundImage: "linear-gradient(#000 1px, transparent 1px)",
          backgroundSize: "100% 32px",
          marginTop: "4px",
        }}
      />

      {/* SECTION HEADER */}
      <div
        style={{
          maxWidth: "1150px",
          margin: "0 auto 60px auto",
          textAlign: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        <h4
          className="px-about-title mb-20"
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#1f2937",
            margin: "0 0 20px 0",
          }}
        >
          <span
            className="text-blue-about"
            style={{ color: "#2563eb" }}
          >
            Work{" "}
          </span>{" "}
          Culture
        </h4>
      </div>

      {/* CARDS CONTAINER */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: `${height}px`,
          }}
        >
          {/* SVG DASHED CONNECTING LINE */}
          <svg
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 0,
            }}
            viewBox={`0 0 1000 ${height}`}
            preserveAspectRatio="none"
          >
            <path
              d="M 280 120 C 500 120, 550 240, 720 240 C 850 240, 500 540, 280 540 C 500 540, 550 660, 720 660 C 850 660, 500 960, 280 960 C 500 960, 550 1080, 720 1080 C 850 1080, 500 1380, 280 1380 C 500 1380, 550 1500, 720 1500"
              stroke="#d1d5db"
              strokeWidth="2"
              strokeDasharray="8 6"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* MAPPED CARDS */}
          {data.map((item, index) => {
            const pos = DEFAULT_CARD_POSITIONS[index];
            return (
              <CultureCard
                key={item.title}
                title={item.title}
                description={item.description}
                imgSrc={item.imgSrc}
                sideImgSrc={item.sideImgSrc}
                colorTheme={item.colorTheme}
                rotate={pos.rotate}
                position={pos}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}