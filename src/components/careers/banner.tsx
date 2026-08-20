"use client";

import * as React from "react";
import {
    FaReact,
    FaAws,
    FaNodeJs,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaWordpress,
    FaShopify,
    FaLaravel,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiJavascript,
    SiWoocommerce,
} from "react-icons/si";
import { MdOutlineShoppingCart } from "react-icons/md";

// Exactly 14 orbit icons based on your requested tech stack
const iconConfigs = [
    { Icon: FaReact, color: "#61DAFB" },
    { Icon: SiTailwindcss, color: "#06B6D4" },
    { Icon: FaNodeJs, color: "#339933" },
    { Icon: FaAws, color: "#FF9900" },
    { Icon: SiJavascript, color: "#F7DF1E" },
    { Icon: SiWoocommerce, color: "#96588A" },
    { Icon: MdOutlineShoppingCart, color: "#111827" }, // Ecommerce
    { Icon: FaHtml5, color: "#E34F26" },
    { Icon: FaCss3Alt, color: "#1572B6" },
    { Icon: FaBootstrap, color: "#7952B3" },
    { Icon: FaGithub, color: "#181717" }, // Git
    { Icon: FaWordpress, color: "#21759B" },
    { Icon: FaShopify, color: "#7AB55C" },
    { Icon: FaLaravel, color: "#FF2D20" },
];

export default function CareerBreadcrumbSection() {
    const orbitCount = 3;
    const orbitGap = 7; // rem between orbits
    const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

    return (
        <section
            style={{
                position: "relative",
                margin: "40px 0 0",
                paddingLeft: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "550px",
                backgroundColor: "#f5f5f5",
                overflow: "hidden",
            }}
        >
            {/* Left side: Heading and Text Content */}
            <div
                className="container"
                style={{
                    width: "50%",
                    zIndex: 10,
                    paddingRight: "20px",
                }}
            >
                {/* Title Tag */}
                <span className="tp-section-subtitle text-black blink-ball mb-20">
                    Yulanto Careers
                </span>

                {/* Main Heading */}
                <h4
                    className="px-about-title"
                    style={{
                        fontSize: "32px",
                        fontWeight: "700",
                        lineHeight: "1.25",
                        marginBottom: "20px",
                        color: "#111827",
                    }}
                >
                    <span
                        className="text-blue-about"
                        style={{ color: "#53ae7d" }}
                    >
                        We Care About
                    </span>{" "}
                    Your Future
                </h4>

                {/* Content Paragraphs */}
                <div
                    className="tp-contact-us-text tp_fade_anim"
                    style={{
                        color: "#4b5563",
                        fontSize: "15px",
                        lineHeight: "1.6",
                    }}
                >
                    <p style={{ margin: "0 0 12px 0" }}>
                        At Yulanto, we believe in empowering talent, encouraging innovation, and creating opportunities for continuous growth. Join us in a dynamic work environment where you can learn, develop your skills, and build a rewarding career.
                    </p>

                    <p style={{ margin: "0 0 12px 0" }}>
                        We are committed to building a passionate team that values creativity, technical excellence, collaboration, and continuous learning. Bring your ideas, explore new opportunities, and showcase your potential as you contribute to meaningful projects and grow with Yulanto.
                        Join Yulanto and take the next step toward a successful future.
                    </p>
                </div>
            </div>

            {/* Right side: Orbit animation */}
            <div
                style={{
                    position: "relative",
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        width: "800px",
                        height: "800px",
                        transform: "translateX(0%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {/* Center Fixed Logo Image */}
                    <div
                        style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                            
                           
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 2,
                            padding: "12px",
                        }}
                    >
                        <img
                            src="assets/img/usa/preloader.gif" // Update with your logo path
                            alt="Center Logo"
                            style={{
                                width: "100%",
                                borderRadius: "50%",
                                height: "100%",
                                objectFit: "contain",
                            }}
                        />
                    </div>

                    {/* Generate Orbits */}
                    {[...Array(orbitCount)].map((_, orbitIdx) => {
                        const size = `${12 + orbitGap * (orbitIdx + 1)}rem`;
                        const angleStep = (2 * Math.PI) / iconsPerOrbit;

                        return (
                            <div
                                key={orbitIdx}
                                style={{
                                    position: "absolute",
                                    borderRadius: "50%",
                                    border: "2px dotted #d1d5db",
                                    width: size,
                                    height: size,
                                    animation: `spin ${12 + orbitIdx * 6}s linear infinite`,
                                }}
                            >
                                {iconConfigs
                                    .slice(
                                        orbitIdx * iconsPerOrbit,
                                        orbitIdx * iconsPerOrbit + iconsPerOrbit
                                    )
                                    .map((cfg, iconIdx) => {
                                        const angle = iconIdx * angleStep;
                                        const x = 50 + 50 * Math.cos(angle);
                                        const y = 50 + 50 * Math.sin(angle);

                                        return (
                                            <div
                                                key={iconIdx}
                                                style={{
                                                    position: "absolute",
                                                    backgroundColor: "#ffffff",
                                                    borderRadius: "50%",
                                                    padding: "4px",
                                                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                                    left: `${x}%`,
                                                    top: `${y}%`,
                                                    transform: "translate(-50%, -50%)",
                                                }}
                                            >
                                                <cfg.Icon
                                                    style={{
                                                        width: "32px",
                                                        height: "32px",
                                                        color: cfg.color,
                                                    }}
                                                />
                                            </div>
                                        );
                                    })}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Spin Animation Keyframes */}
            <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
        </section>
    );
}