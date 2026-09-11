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

// Exactly 14 orbit icons
const iconConfigs = [
    { Icon: FaReact, color: "#61DAFB" },
    { Icon: SiTailwindcss, color: "#06B6D4" },
    { Icon: FaNodeJs, color: "#339933" },
    { Icon: FaAws, color: "#FF9900" },
    { Icon: SiJavascript, color: "#F7DF1E" },
    { Icon: SiWoocommerce, color: "#96588A" },
    { Icon: MdOutlineShoppingCart, color: "#111827" },
    { Icon: FaHtml5, color: "#E34F26" },
    { Icon: FaCss3Alt, color: "#1572B6" },
    { Icon: FaBootstrap, color: "#7952B3" },
    { Icon: FaGithub, color: "#181717" },
    { Icon: FaWordpress, color: "#21759B" },
    { Icon: FaShopify, color: "#7AB55C" },
    { Icon: FaLaravel, color: "#FF2D20" },
];

export default function CareerBreadcrumbSection() {
    const orbitCount = 3;
    const orbitGap = 7;
    const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

    return (
        <section
            className="career-breadcrumb-section"
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
            {/* LEFT SIDE */}
            <div
                className="career-content"
                style={{
                    width: "50%",
                    zIndex: 10,
                    paddingRight: "20px",
                }}
            >
                <span className="tp-section-subtitle text-black blink-ball mb-20">
                    Yulanto Careers
                </span>

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

                <div
                    className="tp-contact-us-text tp_fade_anim"
                    style={{
                        color: "#4b5563",
                        fontSize: "15px",
                        lineHeight: "1.6",
                    }}
                >
                    <p style={{ margin: "0 0 12px 0" }}>
                        At Yulanto, we believe in empowering talent,
                        encouraging innovation, and creating opportunities for
                        continuous growth. Join us in a dynamic work environment
                        where you can learn, develop your skills, and build a
                        rewarding career.
                    </p>

                    <p style={{ margin: "0 0 12px 0" }}>
                        We are committed to building a passionate team that
                        values creativity, technical excellence, collaboration,
                        and continuous learning. Bring your ideas, explore new
                        opportunities, and showcase your potential as you
                        contribute to meaningful projects and grow with Yulanto.
                        Join Yulanto and take the next step toward a successful
                        future.
                    </p>
                </div>
            </div>

            {/* RIGHT SIDE - ORBIT */}
            <div
                className="career-orbit-wrapper"
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
                    className="career-orbit-container"
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
                    {/* CENTER LOGO */}
                    <div
                        className="career-center-logo"
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
                            src="/assets/img/usa/preloader.gif"
                            alt="Center Logo"
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "50%",
                                objectFit: "contain",
                            }}
                        />
                    </div>

                    {/* ORBITS */}
                    {[...Array(orbitCount)].map((_, orbitIdx) => {
                        const size = `${12 + orbitGap * (orbitIdx + 1)}rem`;
                        const angleStep = (2 * Math.PI) / iconsPerOrbit;

                        return (
                            <div
                                key={orbitIdx}
                                className="career-orbit"
                                style={{
                                    position: "absolute",
                                    borderRadius: "50%",
                                    border: "2px dotted #d1d5db",
                                    width: size,
                                    height: size,
                                    animation: `spin ${
                                        12 + orbitIdx * 6
                                    }s linear infinite`,
                                }}
                            >
                                {iconConfigs
                                    .slice(
                                        orbitIdx * iconsPerOrbit,
                                        orbitIdx * iconsPerOrbit + iconsPerOrbit
                                    )
                                    .map((cfg, iconIdx) => {
                                        const angle = iconIdx * angleStep;

                                        const x =
                                            50 + 50 * Math.cos(angle);

                                        const y =
                                            50 + 50 * Math.sin(angle);

                                        return (
                                            <div
                                                key={iconIdx}
                                                className="career-orbit-icon"
                                                style={{
                                                    position: "absolute",
                                                    backgroundColor: "#ffffff",
                                                    borderRadius: "50%",
                                                    padding: "4px",
                                                    boxShadow:
                                                        "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                                    left: `${x}%`,
                                                    top: `${y}%`,
                                                    transform:
                                                        "translate(-50%, -50%)",
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

            {/* ANIMATION + RESPONSIVE CSS */}
            <style jsx>{`
                @keyframes spin {
                    from {
                        transform: rotate(0deg);
                    }

                    to {
                        transform: rotate(360deg);
                    }
                }

                /* =========================
                   TABLET
                ========================= */
                @media (max-width: 991px) {
                    .career-breadcrumb-section {
                        padding-left: 25px !important;
                        padding-right: 25px !important;
                    }

                    .career-content {
                        width: 50% !important;
                    }

                    .career-orbit-wrapper {
                        width: 50% !important;
                    }

                    .career-orbit-container {
                        width: 650px !important;
                        height: 650px !important;
                    }
                }

                /* =========================
                   MOBILE
                ========================= */
                @media (max-width: 767px) {
                    .career-breadcrumb-section {
                        width: 100% !important;
                        height: auto !important;
                        min-height: auto !important;

                        display: flex !important;
                        flex-direction: column !important;

                        align-items: stretch !important;
                        justify-content: flex-start !important;

                        padding: 40px 20px !important;
                        margin: 30px 0 0 !important;

                        overflow: hidden !important;
                    }

                    /* LEFT CONTENT FULL WIDTH */
                    .career-content {
                        width: 100% !important;
                        max-width: 100% !important;

                        padding: 0 !important;
                        margin: 0 0 30px 0 !important;

                        flex: none !important;
                    }

                    .career-content .px-about-title {
                        font-size: 28px !important;
                        line-height: 1.25 !important;
                        margin-bottom: 18px !important;
                    }

                    .career-content .tp-contact-us-text {
                        width: 100% !important;
                        font-size: 14px !important;
                        line-height: 1.6 !important;
                    }

                    .career-content .tp-contact-us-text p {
                        margin-bottom: 12px !important;
                    }

                    /* ORBIT FULL WIDTH */
                    .career-orbit-wrapper {
                        width: 100% !important;
                        max-width: 100% !important;

                        height: 420px !important;

                        display: flex !important;
                        align-items: center !important;
                        justify-content: center !important;

                        overflow: hidden !important;

                        flex: none !important;
                    }

                    /* ORBIT CONTAINER */
                    .career-orbit-container {
                        width: 500px !important;
                        height: 500px !important;

                        flex-shrink: 0 !important;

                        transform: translateX(0) !important;
                    }

                    /* CENTER LOGO */
                    .career-center-logo {
                        width: 80px !important;
                        height: 80px !important;
                        padding: 8px !important;
                    }

                    /* ICON SIZE */
                    .career-orbit-icon {
                        padding: 4px !important;
                    }

                    .career-orbit-icon svg {
                        width: 28px !important;
                        height: 28px !important;
                    }
                }

                /* =========================
                   SMALL MOBILE
                ========================= */
                @media (max-width: 480px) {
                    .career-breadcrumb-section {
                        padding: 35px 15px !important;
                    }

                    .career-content .px-about-title {
                        font-size: 25px !important;
                    }

                    .career-orbit-wrapper {
                        height: 350px !important;
                    }

                    .career-orbit-container {
                        width: 420px !important;
                        height: 420px !important;
                    }

                    .career-center-logo {
                        width: 70px !important;
                        height: 70px !important;
                    }

                    .career-orbit-icon svg {
                        width: 24px !important;
                        height: 24px !important;
                    }
                }
            `}</style>
        </section>
    );
}