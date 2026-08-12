// components/flags/CanadaFlagIcon.tsx
import React from "react";

export const CanadaFlagIcon: React.FC = () => (
  <svg
    width="16"
    height="12"
    viewBox="0 0 640 480"
    style={{
      borderRadius: "2px",
      display: "block",
    }}
  >
    {/* White background */}
    <rect width="640" height="480" fill="#fff" />

    {/* Red side panels */}
    <rect width="160" height="480" fill="#d52b1e" />
    <rect x="480" width="160" height="480" fill="#d52b1e" />

    {/* Maple Leaf */}
    <path
      fill="#d52b1e"
      d="
        M320 70
        L337 125
        L395 108
        L370 160
        L425 177
        L370 195
        L385 250
        L340 225
        L320 280
        L300 225
        L255 250
        L270 195
        L215 177
        L270 160
        L245 108
        L303 125
        Z

        M320 280
        L320 400
        L350 400
        L350 280
        Z
      "
    />
  </svg>
);