import React from "react";
import MDImg from "@/assets/images/port-2.png";

const MDProfile = () => {
  return (
    <section className="md-profile">
      <div className="bg-text">PORTFOLIO</div>

      <div className="container">
        {/* Left Column */}
        <div className="left">
          <h3>
            Hi <span>I &apos; m</span>
          </h3>
          <h1>Aaryan</h1>
          <h2>Ningdhalli</h2>
          <p>
            I blend structured engineering with visual storytelling to build
            immersive, responsive web experiences. Specializing in AI
            integration and minimal UI/UX design.
          </p>
        </div>

        {/* Center Image */}
        <div className="center">
          <img src={MDImg.src} alt="Aaryan Ningdhalli Profile" />
        </div>

        {/* Right Column */}
        <div className="right">
          <span>UI/UX DESIGNER</span>
          <h2>
            WEB<br />
            DEVELOPER
          </h2>
        </div>
      </div>
    </section>
  );
};

export default MDProfile;