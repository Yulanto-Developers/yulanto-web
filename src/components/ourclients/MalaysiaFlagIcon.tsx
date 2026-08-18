// components/flags/MalaysiaFlagIcon.tsx
import React from "react";

export const MalaysiaFlagIcon: React.FC = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "3px",
    }}
  >
    <svg
      width="20"
      height="14"
      viewBox="0 0 640 480"
      style={{
        borderRadius: "2px",
        display: "block",
      }}
    >
      {/* White background */}
      <rect width="640" height="480" fill="#fff" />

      {/* Red stripes */}
      <path
        fill="#cc0001"
        d="
          M0 0h640v37H0z
          M0 74h640v37H0z
          M0 148h640v37H0z
          M0 222h640v37H0z
          M0 296h640v37H0z
          M0 370h640v37H0z
          M0 444h640v36H0z
        "
      />

      {/* Blue canton */}
      <rect width="320" height="259" fill="#010066" />

      {/* Crescent */}
      <circle cx="145" cy="130" r="72" fill="#ffcc00" />
      <circle cx="170" cy="115" r="62" fill="#010066" />

      {/* 14-point style star */}
      <polygon
        fill="#ffcc00"
        points="
          235,65
          250,108
          296,108
          259,135
          273,180
          235,153
          197,180
          211,135
          174,108
          220,108
        "
      />
    </svg>
  </div>
);