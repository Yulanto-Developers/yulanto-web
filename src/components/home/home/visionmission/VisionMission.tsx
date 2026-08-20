"use client";

import React, { useState } from "react";
import { visionMissionData } from "@/components/data/visionMissionData";
import { useAOS } from "@/components/hooks/useAOS";
import "@/assets/css/style.css";
import "@/assets/css/style1.css";

const VisionMission = () => {
  const { vision, mission } = visionMissionData;
  const [activeCard, setActiveCard] = useState("vision");

  useAOS();

  return (
    <div className="container py-5">
      <div 
        className="vision-mission-row"
        onMouseLeave={() => setActiveCard("vision")}
      >
        {/* Column 1: Vision */}
        <div
          className={`vision-mission-col border-right-col ${
            activeCard === "vision" ? "active" : ""
          }`}
          onMouseEnter={() => setActiveCard("vision")}
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="900"
          data-aos-offset="50"
          data-aos-easing="ease-out-cubic"
          data-aos-once="true"
        >
          <h3 data-aos="fade-up" data-aos-delay="200">{vision.title}</h3>
          <div className="accent-line" data-aos="fade-up" data-aos-delay="300"></div>
          <p data-aos="fade-up" data-aos-delay="400">{vision.content}</p>
        </div>

        {/* Column 2: Mission */}
        <div
          className={`vision-mission-col clr ${
            activeCard === "mission" ? "active" : ""
          }`}
          onMouseEnter={() => setActiveCard("mission")}
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="900"
          data-aos-offset="50"
          data-aos-easing="ease-out-cubic"
          data-aos-once="true"
        >
          <h3 data-aos="fade-up" data-aos-delay="400">{mission.title}</h3>
          <div className="accent-line" data-aos="fade-up" data-aos-delay="500"></div>
          <p data-aos="fade-up" data-aos-delay="600">{mission.content}</p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;