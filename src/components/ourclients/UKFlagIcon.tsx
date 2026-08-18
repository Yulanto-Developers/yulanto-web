import React from "react";

export const UKFlagIcon: React.FC = () => (
  <svg
    width="16"
    height="12"
    viewBox="0 0 640 480"
    style={{
      borderRadius: "2px",
      display: "block",
    }}
  >
    {/* Blue background */}
    <rect width="640" height="480" fill="#012169" />

    {/* White diagonal stripes */}
    <path
      fill="#FFFFFF"
      d="
        M0 0h85l235 176V0h0v176L555 0h85L390 240l250 240h-85L320 304v176h-85V304L85 480H0l250-240L0 0z
      "
    />

    {/* Red diagonal stripes */}
    <path
      fill="#C8102E"
      d="
        M0 0h42l278 208L598 0h42L320 240 0 0z
        M640 480h-42L320 272 42 480H0l320-240 320 240z
      "
    />

    {/* White central cross */}
    <path
      fill="#FFFFFF"
      d="
        M267 0h106v160h267v160H373v160H267V320H0V160h267V0z
      "
    />

    {/* Red central cross */}
    <path
      fill="#C8102E"
      d="
        M288 0h64v181h288v118H352v181h-64V299H0V181h288V0z
      "
    />
  </svg>
);