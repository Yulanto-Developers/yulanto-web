"use client";

import React, { useRef, useEffect } from "react";

const FuturisticRobotCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 1000);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    let time = 0;

    const render = () => {
      time += 0.025;
      ctx.clearRect(0, 0, width, height);

      const baseFloorY = height * 0.88;

      // --- 1. WORKSTATION & LAPTOP SETUP ---
      const deskX = width * 0.42;
      const deskW = width * 0.54;
      const deskY = baseFloorY - 110;

      // Desk Surface Shadow & Board
      ctx.fillStyle = "rgba(15, 23, 42, 0.08)";
      ctx.fillRect(deskX - 10, deskY + 12, deskW + 20, 15);

      ctx.fillStyle = "#e2e8f0";
      ctx.fillRect(deskX, deskY, deskW, 12);
      ctx.fillStyle = "#cbd5e1";
      ctx.fillRect(deskX, deskY + 9, deskW, 3);

      // Desk Legs
      ctx.fillStyle = "#64748b";
      ctx.fillRect(deskX + 25, deskY + 12, 10, 98);
      ctx.fillRect(deskX + deskW - 35, deskY + 12, 10, 98);

      // Laptop Details
      const laptopX = deskX + 95;
      const laptopY = deskY - 2;

      ctx.fillStyle = "#334155";
      ctx.fillRect(laptopX - 40, laptopY - 4, 80, 6); // Keyboard base

      // Laptop Screen Shell
      ctx.fillStyle = "#0f172a";
      ctx.beginPath();
      ctx.moveTo(laptopX - 35, laptopY - 4);
      ctx.lineTo(laptopX - 30, laptopY - 55);
      ctx.lineTo(laptopX + 30, laptopY - 55);
      ctx.lineTo(laptopX + 35, laptopY - 4);
      ctx.closePath();
      ctx.fill();

      // Screen Display Glow & Lines
      ctx.fillStyle = "#1e293b";
      ctx.fillRect(laptopX - 27, laptopY - 50, 54, 42);
      ctx.fillStyle = "#38bdf8";
      ctx.shadowColor = "#38bdf8";
      ctx.shadowBlur = 8;
      ctx.fillRect(laptopX - 22, laptopY - 44, 25, 4);
      ctx.fillRect(laptopX - 22, laptopY - 36, 40, 3);
      ctx.fillRect(laptopX - 22, laptopY - 30, 32, 3);
      ctx.fillStyle = "#818cf8";
      ctx.fillRect(laptopX - 22, laptopY - 22, 20, 3);
      ctx.shadowBlur = 0;

      // --- 2. HUMAN DEVELOPER / USER ---
      const humanX = deskX + 230;
      const humanY = deskY + 10;

      // Office Chair
      ctx.fillStyle = "#1e293b";
      ctx.beginPath();
      ctx.roundRect(humanX + 25, humanY - 120, 48, 160, 14);
      ctx.fill();
      ctx.fillRect(humanX - 35, humanY + 20, 95, 14);
      ctx.fillStyle = "#475569";
      ctx.fillRect(humanX + 5, humanY + 34, 12, 60);

      // Developer Body
      ctx.fillStyle = "#1d4ed8"; // Royal Blue Sweater
      ctx.beginPath();
      ctx.roundRect(humanX - 18, humanY - 65, 48, 85, [18, 18, 0, 0]);
      ctx.fill();

      // Neck & Head
      ctx.fillStyle = "#fbcfe8";
      ctx.fillRect(humanX + 2, humanY - 78, 14, 16);
      ctx.beginPath();
      ctx.arc(humanX + 9, humanY - 88, 18, 0, Math.PI * 2);
      ctx.fill();

      // Hair
      ctx.fillStyle = "#0f172a";
      ctx.beginPath();
      ctx.arc(humanX + 11, humanY - 94, 19, Math.PI * 0.75, Math.PI * 2.15);
      ctx.fill();

      // Headphones Detail
      ctx.fillStyle = "#38bdf8";
      ctx.beginPath();
      ctx.arc(humanX + 9, humanY - 88, 6, 0, Math.PI * 2);
      ctx.fill();

      // Arm Operating Laptop
      ctx.strokeStyle = "#1d4ed8";
      ctx.lineWidth = 14;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(humanX - 8, humanY - 45);
      ctx.lineTo(humanX - 45, humanY - 22);
      ctx.stroke();

      ctx.strokeStyle = "#fbcfe8";
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(humanX - 45, humanY - 22);
      ctx.lineTo(laptopX + 22, laptopY - 8);
      ctx.stroke();

      // --- 3. HIGH-DETAIL STANDING AI ROBOT ---
      const robotX = width * 0.22;
      const robotY = baseFloorY - 10;
      const floatY = Math.sin(time * 2.5) * 5;

      // Feet & Base
      ctx.fillStyle = "#334155";
      ctx.beginPath();
      ctx.ellipse(robotX - 25, robotY, 18, 6, 0, 0, Math.PI * 2);
      ctx.ellipse(robotX + 25, robotY, 18, 6, 0, 0, Math.PI * 2);
      ctx.fill();

      // Legs (Armor Plated)
      ctx.strokeStyle = "#e2e8f0";
      ctx.lineWidth = 20;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(robotX - 22, robotY - 100);
      ctx.lineTo(robotX - 25, robotY - 5);
      ctx.moveTo(robotX + 22, robotY - 100);
      ctx.lineTo(robotX + 25, robotY - 5);
      ctx.stroke();

      // Knee Joint Accents
      ctx.fillStyle = "#0284c7";
      ctx.beginPath();
      ctx.arc(robotX - 23, robotY - 50, 9, 0, Math.PI * 2);
      ctx.arc(robotX + 23, robotY - 50, 9, 0, Math.PI * 2);
      ctx.fill();

      // Pelvis Plate
      ctx.fillStyle = "#94a3b8";
      ctx.beginPath();
      ctx.roundRect(robotX - 38, robotY - 130 + floatY, 76, 38, 12);
      ctx.fill();

      // Waist Segmented Cables
      ctx.strokeStyle = "#334155";
      ctx.lineWidth = 4;
      for (let c = -20; c <= 20; c += 10) {
        ctx.beginPath();
        ctx.moveTo(robotX + c, robotY - 130 + floatY);
        ctx.lineTo(robotX + c, robotY - 150 + floatY);
        ctx.stroke();
      }

      // Main Torso Shell (White Armor)
      ctx.fillStyle = "#f8fafc";
      ctx.shadowColor = "rgba(56, 189, 248, 0.25)";
      ctx.shadowBlur = 18;
      ctx.beginPath();
      ctx.roundRect(robotX - 48, robotY - 240 + floatY, 96, 115, 22);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Outer Torso Blue Panel Trim
      ctx.strokeStyle = "#0284c7";
      ctx.lineWidth = 2.5;
      ctx.strokeRect(robotX - 42, robotY - 234 + floatY, 84, 103);

      // Chest Integrated Display Screen
      const chestX = robotX - 34;
      const chestY = robotY - 222 + floatY;
      ctx.fillStyle = "#090d16";
      ctx.beginPath();
      ctx.roundRect(chestX, chestY, 68, 52, 10);
      ctx.fill();
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Chest Screen HUD Visuals
      ctx.fillStyle = "rgba(56, 189, 248, 0.15)";
      ctx.fillRect(chestX + 5, chestY + 5, 58, 42);

      // Animated Diagnostic Signal Lines
      for (let i = 0; i < 3; i++) {
        ctx.fillStyle = i % 2 === 0 ? "#38bdf8" : "#a855f7";
        ctx.fillRect(
          chestX + 8,
          chestY + 12 + i * 11,
          22 + Math.sin(time * 5 + i) * 16,
          4
        );
      }
      ctx.fillStyle = "#22c55e";
      ctx.beginPath();
      ctx.arc(chestX + 54, chestY + 20, 5, 0, Math.PI * 2);
      ctx.fill();

      // Robot Neck (Segmented Mechanics)
      ctx.fillStyle = "#1e293b";
      ctx.fillRect(robotX - 14, robotY - 262 + floatY, 28, 24);
      ctx.fillStyle = "#38bdf8";
      ctx.fillRect(robotX - 10, robotY - 252 + floatY, 20, 3);

      // Robot Head Structure
      const headY = robotY - 288 + floatY;
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.ellipse(robotX, headY, 35, 30, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#cbd5e1";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Head Side Ear Nodes
      ctx.fillStyle = "#0284c7";
      ctx.beginPath();
      ctx.arc(robotX - 35, headY, 7, 0, Math.PI * 2);
      ctx.arc(robotX + 35, headY, 7, 0, Math.PI * 2);
      ctx.fill();

      // Face Visor Display
      ctx.fillStyle = "#090d16";
      ctx.beginPath();
      ctx.ellipse(robotX + 5, headY, 24, 18, 0, 0, Math.PI * 2);
      ctx.fill();

      // Expressive Visor Glowing Eyes
      ctx.fillStyle = "#38bdf8";
      ctx.shadowColor = "#38bdf8";
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.ellipse(robotX - 2, headY - 2, 4.5, 7, -0.1, 0, Math.PI * 2);
      ctx.ellipse(robotX + 12, headY - 2, 4.5, 7, 0.1, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Shoulder Joints
      ctx.fillStyle = "#64748b";
      ctx.beginPath();
      ctx.arc(robotX - 52, robotY - 220 + floatY, 12, 0, Math.PI * 2);
      ctx.arc(robotX + 52, robotY - 220 + floatY, 12, 0, Math.PI * 2);
      ctx.fill();

      // Left Arm (Rests at side)
      ctx.strokeStyle = "#e2e8f0";
      ctx.lineWidth = 14;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(robotX - 52, robotY - 220 + floatY);
      ctx.lineTo(robotX - 66, robotY - 140 + floatY);
      ctx.lineTo(robotX - 60, robotY - 75 + floatY);
      ctx.stroke();

      // Right Arm (Presenting Hologram toward User)
      const handX = robotX + 75 + Math.sin(time * 3) * 6;
      const handY = robotY - 150 + floatY + Math.cos(time * 3) * 4;

      ctx.strokeStyle = "#e2e8f0";
      ctx.lineWidth = 14;
      ctx.beginPath();
      ctx.moveTo(robotX + 52, robotY - 220 + floatY);
      ctx.lineTo(robotX + 72, robotY - 175 + floatY);
      ctx.lineTo(handX, handY);
      ctx.stroke();

      // Palm Emitter Lens
      ctx.fillStyle = "#38bdf8";
      ctx.shadowColor = "#38bdf8";
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(handX, handY, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // --- 4. HOLOGRAPHIC PROJECTION BEAMS & DATA UI ---
      const holoX = width * 0.48;
      const holoY = baseFloorY - 240;

      // Beam Rays projecting from Palm to Holo Screen
      ctx.fillStyle = "rgba(56, 189, 248, 0.08)";
      ctx.beginPath();
      ctx.moveTo(handX, handY);
      ctx.lineTo(holoX - 45, holoY - 40 + floatY);
      ctx.lineTo(holoX - 45, holoY + 60 + floatY);
      ctx.closePath();
      ctx.fill();

      // Main Glass Hologram Window
      ctx.fillStyle = "rgba(15, 23, 42, 0.75)";
      ctx.beginPath();
      ctx.roundRect(holoX - 45, holoY - 40 + floatY, 140, 95, 12);
      ctx.fill();
      ctx.strokeStyle = "rgba(56, 189, 248, 0.7)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Holo Window Header Bar
      ctx.fillStyle = "rgba(56, 189, 248, 0.25)";
      ctx.fillRect(holoX - 35, holoY - 30 + floatY, 120, 14);

      // Holo Screen Line Chart
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(holoX - 30, holoY + 35 + floatY);
      ctx.lineTo(holoX - 10, holoY + 12 + floatY);
      ctx.lineTo(holoX + 10, holoY + 25 + floatY);
      ctx.lineTo(holoX + 35, holoY - 10 + floatY);
      ctx.lineTo(holoX + 70, holoY + 10 + floatY);
      ctx.stroke();

      // Floating Data Bubbles (Upper Right)
      const b1Y = holoY - 95 + Math.sin(time * 3) * 6;
      ctx.fillStyle = "rgba(59, 130, 246, 0.9)";
      ctx.beginPath();
      ctx.roundRect(holoX + 80, b1Y, 75, 48, 10);
      ctx.fill();

      // Cloud Graphic inside Bubble
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(holoX + 105, b1Y + 24, 9, 0, Math.PI * 2);
      ctx.arc(holoX + 118, b1Y + 20, 12, 0, Math.PI * 2);
      ctx.arc(holoX + 130, b1Y + 25, 8, 0, Math.PI * 2);
      ctx.fill();

      // Lower Floating Pie Chart Card
      const b2Y = holoY + 65 + Math.cos(time * 2.5) * 5;
      ctx.fillStyle = "rgba(14, 165, 233, 0.9)";
      ctx.beginPath();
      ctx.roundRect(holoX + 90, b2Y, 70, 42, 8);
      ctx.fill();

      // Pie Chart Graphic
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.moveTo(holoX + 112, b2Y + 21);
      ctx.arc(holoX + 112, b2Y + 21, 11, 0, Math.PI * 1.3);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "#38bdf8";
      ctx.beginPath();
      ctx.moveTo(holoX + 112, b2Y + 21);
      ctx.arc(holoX + 112, b2Y + 21, 11, Math.PI * 1.3, Math.PI * 2);
      ctx.closePath();
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
      }}
    />
  );
};

export const ShopifyExperience: React.FC = () => {
  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110">
      <div className="container container-1550">
        {/* Title Section */}
        <div className="row align-items-center mb-50" data-aos="fade-up">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
              AI-Assisted Website Design
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">Build Better Websites. </span>
                Faster With AI.
              </h4>
              <p className="text-figtree text-black mt-2">
                We combine AI-powered design and development tools with human
                creativity and experience to create modern, responsive,
                high-performing websites in less time.
              </p>
            </div>
          </div>
        </div>

        {/* Robot Canvas Container */}
        <div
          style={{
            position: "sticky",
            top: "100px",
            width: "100%",
            height: "450px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
            }}
          >
            <FuturisticRobotCanvas />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopifyExperience;