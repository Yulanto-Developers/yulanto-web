// components/flags/SingaporeFlagIcon.tsx
import React from "react";

export const SingaporeFlagIcon: React.FC = () => (
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
      <rect width="640" height="240" fill="#ed2939" />
      <rect y="240" width="640" height="240" fill="#fff" />

      {/* Crescent */}
      <circle cx="200" cy="120" r="70" fill="#fff" />
      <circle cx="225" cy="105" r="60" fill="#ed2939" />

      {/* Five Stars */}
      <g fill="#fff">
        <circle cx="285" cy="65" r="9" />
        <circle cx="315" cy="85" r="9" />
        <circle cx="325" cy="120" r="9" />
        <circle cx="315" cy="155" r="9" />
        <circle cx="285" cy="175" r="9" />
      </g>
    </svg>
  </div>
);