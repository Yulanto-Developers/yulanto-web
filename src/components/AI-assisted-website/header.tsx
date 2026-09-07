"use client";

import React, { useRef, useEffect } from "react";

// --- High-Detail Canvas Animated Robot & Workstation Scene ---
const FuturisticRobotCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 1000);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    let time = 0;

    const render = () => {
      time += 0.03;
      ctx.clearRect(0, 0, width, height);

      // Positioning anchors
      const centerY = height / 2 + 20;

      // Robot Position (Right Side)
      const robotX = width * 0.60;

      // Workstation System brought closer to robot for realistic reach
      const systemX = width * 0.44;

      // 1. Sleek Desk Surface
      const deskGrad = ctx.createLinearGradient(
        systemX - 200,
        centerY + 100,
        robotX + 150,
        centerY + 100
      );
      deskGrad.addColorStop(0, "rgba(30, 41, 59, 0.4)");
      deskGrad.addColorStop(0.5, "rgba(51, 65, 85, 0.9)");
      deskGrad.addColorStop(1, "rgba(30, 41, 59, 0.4)");

      ctx.fillStyle = deskGrad;
      ctx.beginPath();
      ctx.ellipse(
        (systemX + robotX) / 2,
        centerY + 105,
        380,
        35,
        0,
        0,
        Math.PI * 2
      );
      ctx.fill();
      ctx.strokeStyle = "rgba(56, 189, 248, 0.5)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Desk Legs
      ctx.strokeStyle = "rgba(71, 85, 105, 0.8)";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(systemX - 180, centerY + 115);
      ctx.lineTo(systemX - 180, centerY + 280);
      ctx.moveTo(robotX + 100, centerY + 115);
      ctx.lineTo(robotX + 100, centerY + 280);
      ctx.stroke();

      // 2. ERGONOMIC CHAIR
      const chairX = robotX;
      const chairY = centerY + 10;

      // Chair Base & Wheels
      ctx.strokeStyle = "#334155";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(chairX - 45, chairY + 220);
      ctx.lineTo(chairX + 45, chairY + 220);
      ctx.moveTo(chairX, chairY + 120);
      ctx.lineTo(chairX, chairY + 220);
      ctx.stroke();

      // Chair Wheels
      ctx.fillStyle = "#1e293b";
      ctx.beginPath();
      ctx.arc(chairX - 45, chairY + 225, 7, 0, Math.PI * 2);
      ctx.arc(chairX + 45, chairY + 225, 7, 0, Math.PI * 2);
      ctx.arc(chairX, chairY + 225, 7, 0, Math.PI * 2);
      ctx.fill();

      // Chair Seat Cushion
      ctx.fillStyle = "#1e293b";
      ctx.beginPath();
      ctx.roundRect(chairX - 55, chairY + 95, 110, 25, 8);
      ctx.fill();
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Chair Backrest
      ctx.fillStyle = "#0f172a";
      ctx.beginPath();
      ctx.roundRect(chairX + 35, chairY - 110, 24, 210, 12);
      ctx.fill();
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // 3. SYSTEM / MONITOR SETUP
      const monWidth = 340;
      const monHeight = 200;
      const monX = systemX - monWidth / 2;
      const monY = centerY - 140;

      // Monitor Stand
      ctx.fillStyle = "#475569";
      ctx.fillRect(systemX - 12, monY + monHeight, 24, 45);
      ctx.beginPath();
      ctx.ellipse(systemX, monY + monHeight + 45, 50, 10, 0, 0, Math.PI * 2);
      ctx.fill();

      // Holographic Monitor Screen Body
      ctx.shadowColor = "#38bdf8";
      ctx.shadowBlur = 15;
      ctx.fillStyle = "rgba(15, 23, 42, 0.95)";
      ctx.beginPath();
      ctx.roundRect(monX, monY, monWidth, monHeight, 14);
      ctx.fill();
      ctx.strokeStyle = "rgba(56, 189, 248, 0.8)";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Monitor Top Bar
      ctx.fillStyle = "rgba(56, 189, 248, 0.15)";
      ctx.fillRect(monX + 15, monY + 15, monWidth - 30, 24);

      // Screen Code Lines
      for (let l = 0; l < 8; l++) {
        ctx.fillStyle =
          l % 2 === 0 ? "rgba(56, 189, 248, 0.8)" : "rgba(168, 85, 247, 0.8)";
        ctx.fillRect(
          monX + 20,
          monY + 50 + l * 16,
          (monWidth - 60) * (0.4 + (l % 4) * 0.15),
          8
        );
      }

      // Keyboard (Placed close to robot)
      const kbX = systemX - 20;
      const kbY = centerY + 75;
      ctx.fillStyle = "#0f172a";
      ctx.beginPath();
      ctx.roundRect(kbX - 80, kbY, 180, 24, 6);
      ctx.fill();
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Keyboard Keys with typing animation
      const keysGlow = Math.sin(time * 12) * 0.5 + 0.5;
      for (let r = 0; r < 2; r++) {
        for (let k = 0; k < 11; k++) {
          const keyActive = (k + r) % 3 === Math.floor(time * 6) % 3;
          ctx.fillStyle = keyActive
            ? `rgba(56, 189, 248, ${0.4 + keysGlow * 0.6})`
            : "#1e293b";
          ctx.fillRect(kbX - 72 + k * 14, kbY + 4 + r * 9, 10, 6);
        }
      }

      // 4. HUMANOID AI ROBOT (Humanlike Proportions & Curved Jointed Arms)
      const torsoX = chairX - 10;
      const torsoY = centerY - 20;

      // Seated Legs
      ctx.strokeStyle = "#cbd5e1";
      ctx.lineWidth = 18;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(torsoX, torsoY + 70);
      ctx.lineTo(torsoX - 55, torsoY + 80);
      ctx.lineTo(torsoX - 55, torsoY + 160);
      ctx.stroke();

      // Torso Shell
      ctx.fillStyle = "#f8fafc";
      ctx.shadowColor = "rgba(0,0,0,0.3)";
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.roundRect(torsoX - 35, torsoY - 80, 70, 130, [20, 20, 10, 10]);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Chest Arc Reactor
      ctx.fillStyle = "#0f172a";
      ctx.beginPath();
      ctx.arc(torsoX - 10, torsoY - 35, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = `rgba(56, 189, 248, ${0.7 + Math.sin(time * 5) * 0.3})`;
      ctx.beginPath();
      ctx.arc(torsoX - 10, torsoY - 35, 8, 0, Math.PI * 2);
      ctx.fill();

      // Neck
      ctx.fillStyle = "#334155";
      ctx.fillRect(torsoX - 12, torsoY - 102, 16, 24);

      // Head
      const headX = torsoX - 12;
      const headY = torsoY - 125;

      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.ellipse(headX, headY, 28, 24, -0.1, 0, Math.PI * 2);
      ctx.fill();

      // Visor
      ctx.fillStyle = "#090d16";
      ctx.beginPath();
      ctx.ellipse(headX - 10, headY, 18, 14, -0.1, 0, Math.PI * 2);
      ctx.fill();

      // Visor Eye Glow
      ctx.shadowColor = "#38bdf8";
      ctx.shadowBlur = 10;
      ctx.fillStyle = "#38bdf8";
      ctx.beginPath();
      ctx.arc(headX - 16, headY, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Shoulder Joint
      const shoulderX = torsoX - 22;
      const shoulderY = torsoY - 60;
      ctx.fillStyle = "#94a3b8";
      ctx.beginPath();
      ctx.arc(shoulderX, shoulderY, 9, 0, Math.PI * 2);
      ctx.fill();

      // --- Left Arm (Proportional Upper Arm + Forearm + Typing Motion) ---
      const hand1X = kbX + 25 + Math.sin(time * 14) * 5;
      const hand1Y = kbY + 8 + Math.cos(time * 14) * 2;
      const elbow1X = torsoX - 38;
      const elbow1Y = torsoY + 5; // Bent elbow dropping naturally

      ctx.strokeStyle = "#e2e8f0";
      ctx.lineWidth = 7;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(shoulderX, shoulderY);
      ctx.lineTo(elbow1X, elbow1Y);
      ctx.lineTo(hand1X, hand1Y);
      ctx.stroke();

      // --- Right Arm (Proportional Upper Arm + Forearm + Typing Motion) ---
      const hand2X = kbX - 25 + Math.cos(time * 12) * 5;
      const hand2Y = kbY + 8 + Math.sin(time * 12) * 2;
      const elbow2X = torsoX - 30;
      const elbow2Y = torsoY + 2;

      ctx.strokeStyle = "#cbd5e1";
      ctx.lineWidth = 6;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(shoulderX + 5, shoulderY + 5);
      ctx.lineTo(elbow2X, elbow2Y);
      ctx.lineTo(hand2X, hand2Y);
      ctx.stroke();

      // Joint Accents
      ctx.fillStyle = "";
      ctx.beginPath();
      ctx.arc(elbow1X, elbow1Y, 3.5, 0, Math.PI * 2);
      ctx.arc(elbow2X, elbow2Y, 3.5, 0, Math.PI * 2);
      ctx.arc(hand1X, hand1Y, 5, 0, Math.PI * 2);
      ctx.arc(hand2X, hand2Y, 6, 0, Math.PI * 2);
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

// --- Main Interactive Section ---
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
            height: "350px",
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