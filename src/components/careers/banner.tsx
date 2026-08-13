"use client";

import * as React from "react";
import {
    FaReact,
    FaAws,
    FaDocker,
    FaNodeJs,
    FaGithub,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaGoogle,
    FaApple,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiVercel,
    SiRedux,
    SiTypescript,
    SiFacebook,
} from "react-icons/si";

const fallbackUrls = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Among_Us_icon.png",
];

const iconConfigs = [
    { Icon: FaReact, color: "#61DAFB" },
    { Icon: FaAws, color: "#FF9900" },
    { Icon: FaDocker, color: "#2496ED" },
    { Icon: FaNodeJs, color: "#339933" },
    { Icon: SiNextdotjs, color: "#000000" },
    { Icon: SiVercel, color: "#000000" },
    { Icon: SiRedux, color: "#764ABC" },
    { Icon: SiTypescript, color: "#3178C6" },
    { Icon: FaGithub, color: "#181717" },
    { Icon: FaTwitter, color: "#1DA1F2" },
    { Icon: FaLinkedin, color: "#0077B5" },
    { Icon: FaInstagram, color: "#E1306C" },
    { Icon: FaGoogle, color: "#DB4437" },
    { Icon: FaApple, color: "#000000" },
    { Icon: SiFacebook, color: "#1877F2" },
    { Icon: null, img: fallbackUrls[0] },
    { Icon: null, img: fallbackUrls[1] },
];

export default function CareerBreadcrumbSection() {
    const orbitCount = 3;
    const orbitGap = 8; // rem between orbits
    const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

    return (
        <section
            style={{
                position: "relative",
                maxWidth: "1200px",
                margin: "40px auto",
                paddingLeft: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "480px",
                border: "1px solid #e5e7eb",
                backgroundColor: "#ffffff",
                overflow: "hidden",
                borderRadius: "24px",
            }}
        >
            {/* Left side: Heading and Text Content */}
            <div
                style={{
                    width: "50%",
                    zIndex: 10,
                    paddingRight: "20px",
                }}
            >
                {/* Title Tag */}
                <h2
                    style={{
                        fontSize: "14px",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        color: "#053456",
                        marginBottom: "12px",
                    }}
                >
                    Yulanto Careers
                </h2>

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
                        We care
                    </span>{" "}
                    your Future
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
                        Progress towards empowering and cultivating innovation within your talent by engaging
                        with Yulanto. Yulanto offers a dynamic learning platform that is crucial for
                        achieving success. 
                    </p>

                    <p style={{ margin: "0 0 12px 0" }}>
                       We strive to build a team of skilled individuals who excel in a
                        work environment that emphasizes technical proficiency. Share your ideas and
                        showcase your passion by contributing to our team.
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
                    {/* Center Circle */}
                    <div
                        style={{
                            width: "96px",
                            height: "96px",
                            borderRadius: "50%",
                            backgroundColor: "#f9fafb",
                            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <FaReact style={{ width: "48px", height: "48px", color: "#61DAFB" }} />
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
                                                {cfg.Icon ? (
                                                    <cfg.Icon
                                                        style={{
                                                            width: "32px",
                                                            height: "32px",
                                                            color: cfg.color,
                                                        }}
                                                    />
                                                ) : (
                                                    <img
                                                        src={cfg.img}
                                                        alt="icon"
                                                        style={{
                                                            width: "32px",
                                                            height: "32px",
                                                            objectFit: "contain",
                                                        }}
                                                    />
                                                )}
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