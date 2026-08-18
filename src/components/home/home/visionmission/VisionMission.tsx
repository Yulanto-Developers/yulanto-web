
import React from "react";
import { visionMissionData } from "@/components/data/visionMissionData";
import "@/assets/css/style.css";

const VisionMission = () => {
  const { vision, mission } = visionMissionData;

  return (
    <div className="container py-5">
      <div className="vision-mission-row">
        {/* Column 1: Vision */}
        <div className="vision-mission-col border-right-col">
          {/* <div className="section-badge">{vision.label}</div> */}
          <h3>{vision.title}</h3>
          <div className="accent-line"></div>
          <p>{vision.content}</p>
        </div>

        {/* Column 2: Mission */}
        <div className="vision-mission-col clr">
          {/* <div className="section-badge">{mission.label}</div> */}
          <h3>{mission.title}</h3>
          <div className="accent-line"></div>
          <p>{mission.content}</p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;