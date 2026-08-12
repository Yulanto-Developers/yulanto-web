// components/flags/EuropeFlagIcon.tsx
import React from "react";

export const EuropeFlagIcon: React.FC = () => (
  <svg
    width="16"
    height="12"
    viewBox="0 0 810 540"
    style={{
      borderRadius: "2px",
      display: "block",
    }}
  >
    {/* Blue background */}
    <rect width="810" height="540" fill="#003399" />

    {/* Stars */}
    <g fill="#FFCC00" transform="translate(405 270)">
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const x = Math.cos(angle) * 150;
        const y = Math.sin(angle) * 150;

        return (
          <polygon
            key={i}
            transform={`translate(${x} ${y}) rotate(${i * 30})`}
            points="0,-18 4.2,-5.8 17.1,-5.6 6.8,2.2 10.6,14.5 0,7.2 -10.6,14.5 -6.8,2.2 -17.1,-5.6 -4.2,-5.8"
          />
        );
      })}
    </g>
  </svg>
);