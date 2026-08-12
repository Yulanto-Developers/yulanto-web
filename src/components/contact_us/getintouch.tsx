"use client";

import React from "react";

const GetInTouch = () => {
  const iconContainerStyle = (bgColor: string) => ({
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    backgroundColor: bgColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  });

  const contactTitleStyle = (textColor: string) => ({
    fontSize: "13px",
    fontWeight: "600",
    color: textColor,
    margin: 0,
  });

  const sectionStyles: React.CSSProperties = {
    fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    backgroundColor: "#ffffff",
    padding: "60px 20px",
    color: "#333333",
  };

  const containerStyles: React.CSSProperties = {
    maxWidth: "1230px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    alignItems: "center",
  };

  const leftStyles: React.CSSProperties = {
    flex: "1",
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const rightStyles: React.CSSProperties = {
    flex: "1",
    minWidth: "300px",
    position: "relative",
    height: "480px",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  };

  const headingStyles: React.CSSProperties = {
    fontSize: "36px",
    fontWeight: "700",
    lineHeight: "1.3",
    color: "#053456",
    margin: 0,
  };

  const cardStyles: React.CSSProperties = {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "15px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textDecoration: "none",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.06)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
    border: "1px solid #f0f0f0",
  };

  const mapOverlayStyles: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "radial-gradient(circle at center, transparent 30%, rgba(83, 174, 125, 0.7) 100%)",
    pointerEvents: "none",
    zIndex: 1,
  };

  const mapBadgeStyles: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70px",
    height: "70px",
    backgroundColor: "#79E0FF",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    zIndex: 2,
  };

  return (
    <section style={sectionStyles}>
      <div style={containerStyles}>
        {/* Left Side: Text and Contact Cards */}
        <div style={leftStyles}>
          <h4 className="px-about-title mb-20" >
            <span className="text-blue-about">
             Get In Touch
            </span>
           With Us
          </h4>

          {/* WhatsApp Card */}
          <a
            href="https://wa.me/919962157250"
            target="_blank"
            rel="noopener noreferrer"
            style={cardStyles}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <div style={iconContainerStyle("#53ae7d")}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={contactTitleStyle("#53ae7d")}>WhatsApp</p>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    margin: 0,
                    color: "#053456",
                  }}
                >
                  +91 99621 57250
                </p>
              </div>
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#53ae7d",
                marginLeft: "10px",
              }}
            >
              ❯
            </div>
          </a>

          {/* Email Card */}
          <a href="mailto:info@yulanto.com" style={cardStyles}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <div style={iconContainerStyle("#053456")}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={contactTitleStyle("#053456")}>Email</p>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    margin: 0,
                    color: "#053456",
                  }}
                >
                  info@yulanto.com
                </p>
              </div>
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#053456",
                marginLeft: "10px",
              }}
            >
              ❯
            </div>
          </a>
        </div>

        {/* Right Side: Google Map with Overlay */}
        <div style={rightStyles}>
          <iframe
            title="Yulanto Web Creations Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.989504987164!2d80.24926027412033!3d12.972522914860022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525df3d6bf9167%3A0xc1aae342aa473d1!2sYulanto%20Web%20Creations%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1786539836200!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>

          {/* Radial Overlay */}
          <div style={mapOverlayStyles}></div>

          {/* Location Center Badge */}
          <div style={mapBadgeStyles}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="4" />
              <path
                d="M35 35L65 50L35 65"
                stroke="white"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;