"use client";

import React, { useState } from "react";
import { visionMissionData } from "@/components/data/visionMissionData";
import "@/assets/css/style.css";
import "@/assets/css/style1.css";

const VisionMission = () => {
  const { vision, mission } = visionMissionData;
  // Track active card: 'vision' by default
  const [activeCard, setActiveCard] = useState("vision");

  return (
    <div className="container py-5">
      <div 
        className="vision-mission-row"
        onMouseLeave={() => setActiveCard("vision")} // Reset to default on container leave
      >
        {/* Column 1: Vision */}
        <div
          className={`vision-mission-col border-right-col ${
            activeCard === "vision" ? "active" : ""
          }`}
          onMouseEnter={() => setActiveCard("vision")}
        >
          <h3>{vision.title}</h3>
          <div className="accent-line"></div>
          <p>{vision.content}</p>
        </div>

        {/* Column 2: Mission */}
        <div
          className={`vision-mission-col clr ${
            activeCard === "mission" ? "active" : ""
          }`}
          onMouseEnter={() => setActiveCard("mission")}
        >
          <h3>{mission.title}</h3>
          <div className="accent-line"></div>
          <p>{mission.content}</p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;