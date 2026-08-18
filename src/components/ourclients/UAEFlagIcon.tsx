import React from "react";

export const UAEFlagIcon: React.FC = () => (
  <svg
    width="16"
    height="12"
    viewBox="0 0 640 480"
    style={{
      borderRadius: "2px",
      display: "block",
    }}
  >
    {/* Red vertical stripe */}
    <rect
      x="0"
      y="0"
      width="160"
      height="480"
      fill="#CE1126"
    />

    {/* Green top */}
    <rect
      x="160"
      y="0"
      width="480"
      height="160"
      fill="#00732F"
    />

    {/* White middle */}
    <rect
      x="160"
      y="160"
      width="480"
      height="160"
      fill="#FFFFFF"
    />

    {/* Black bottom */}
    <rect
      x="160"
      y="320"
      width="480"
      height="160"
      fill="#000000"
    />
  </svg>
);