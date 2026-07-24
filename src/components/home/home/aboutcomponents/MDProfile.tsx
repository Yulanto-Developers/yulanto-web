import React from "react";

const MDProfile = () => {
  return (
    <section className="md-profile">
      <div className="bg-text">PORTFOLIO</div>

      <div className="container">
        {/* Left */}
        <div className="left">
          <h3>
            Hi <span>I'm</span>
          </h3>
          <h1>Aaryan</h1>
          <h2>Ningdhalli</h2>
          <p>
            I blend structured engineering with visual storytelling to build
            immersive, responsive web experiences. Specializing in AI
            integration and minimal UI/UX design.
          </p>
          <div className="buttons">
            <a href="#" className="btn">
              ⬇ Download Resume
            </a>
            <a href="#" className="btn outline">
              🔒 View Projects
            </a>
          </div>
        </div>

        {/* Center */}
        <div className="center">
          <div className="circle"></div>
          <img src="image(41).png" alt="Profile" />
        </div>

        {/* Right */}
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