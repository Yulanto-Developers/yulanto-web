"use client";

import React from "react";

interface IndustryItem {
    label: string;
    color: string;
    icon: string;
}

// Complete list mapped directly from the source text
const businessTypes: IndustryItem[] = [
    { label: "Retail businesses", color: "#d946ef", icon: "🛍️" },
    { label: "Manufacturers", color: "#6366f1", icon: "🏭" },
    { label: "Fashion & lifestyle", color: "#eab308", icon: "👗" },
    { label: "Electronics stores", color: "#10b981", icon: "📱" },
    { label: "Food & groceries", color: "#06b6d4", icon: "🛒" },
    { label: "Service businesses", color: "#3b82f6", icon: "💼" },
    { label: "B2B businesses", color: "#8b5cf6", icon: "🏢" },
    { label: "Startups & SMEs", color: "#ec4899", icon: "🚀" },
];

const industriesList: string[] = [
    "Retail businesses",
    "Manufacturers",
    "Fashion and lifestyle brands",
    "Electronics businesses",
    "Food and grocery businesses",
    "Service-based businesses",
    "B2B businesses",
    "Startups and entrepreneurs",
    "Subscription-based businesses",
    "Small and medium-sized enterprises",
];

export default function WooCommerceIndustriesSection() {
    // Left side items (first 4)
    const leftItems = businessTypes.slice(0, 4);
    // Right side items (last 4)
    const rightItems = businessTypes.slice(4, 8);

    return (
        <section className="px-about-6-area pt-50 pb-80 pb-lg-110">
            <div className="container container-1550">
                <div className="row align-items-center" data-aos="fade-up">
                    <div className="col-xl-12">
                        <span className="tp-section-subtitle text-black blink-ball">
                            WooCommerce Ecommerce Websites Designed for Business Growth
                        </span>
                        <div className="px-project-title-box">
                            <h4 className="px-about-title mb-20">
                                <span className="text-blue-about">Create a Better Shopping </span>Experience for Your Customers
                            </h4>
                            <p className="text-figtree text-black mt-2">
                                A successful ecommerce website needs more than attractive product images. It should make it easy for customers to discover products, compare options, add items to their cart, complete payments, and track their orders.
                                Our WooCommerce website development company creates streamlined ecommerce experiences with intuitive navigation, responsive layouts, optimized product pages, and simplified checkout processes.
                            </p>
                              <h5 className="mb-3 fw-bold" style={{ fontFamily: '"Tenor Sans", "Tenor Sans Fallback"' }}>

                                We can build WooCommerce stores for:
                            </h5>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center" data-aos="fade-up">
                    {/* WooCommerce Hub & Spoke Node Design */}
                    <div className="col-lg-12 mb-5 mb-lg-0">
                        <div
                            style={{
                                position: "relative",
                                width: "100%",
                                maxWidth: "700px",
                                height: "500px",
                                margin: "0 auto",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {/* Outer Circular Dashed Ring */}
                            <div
                                style={{
                                    position: "absolute",
                                    width: "380px",
                                    height: "380px",
                                    borderRadius: "50%",
                                    border: "2px dashed #cbd5e1",
                                    zIndex: 1,
                                }}
                            />

                            {/* LEFT SIDE NODES (4 items) */}
                            <div
                                style={{
                                    position: "absolute",
                                    left: "0",
                                    height: "80%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    alignItems: "flex-end",
                                    zIndex: 4,
                                }}
                            >
                                {leftItems.map((item: IndustryItem, idx: number) => (
                                    <div
                                        key={idx}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "12px",
                                            backgroundColor: "#ffffff",
                                            padding: "6px 16px 6px 6px",
                                            borderRadius: "50px",
                                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.08)",
                                            border: "1px solid #f1f5f9",
                                            width: "fit-content",
                                            marginRight: idx === 0 || idx === 3 ? "40px" : "0px",
                                        }}
                                    >
                                        <span
                                            style={{
                                                width: "38px",
                                                height: "38px",
                                                borderRadius: "50%",
                                                backgroundColor: item.color,
                                                color: "#ffffff",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "18px",
                                                boxShadow: `0 4px 10px ${item.color}66`,
                                                flexShrink: 0,
                                            }}
                                        >
                                            {item.icon}
                                        </span>

                                        <span
                                            style={{
                                                fontSize: "14px",
                                                fontWeight: "600",
                                                color: "#1e293b",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Central Hub with WordPress Logo + Woo */}
                            <div
                                style={{
                                    position: "relative",
                                    width: "220px",
                                    height: "220px",
                                    borderRadius: "50%",
                                    backgroundColor: "#ffffff",
                                    boxShadow: "0 20px 40px rgba(124, 58, 237, 0.2)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "10px",
                                    zIndex: 3,
                                    border: "10px solid #f3e8ff",
                                }}
                            >
                                {/* WordPress Logo SVG */}
                                <svg
                                    width="42"
                                    height="42"
                                    viewBox="0 0 24 24"
                                    fill="#21759b"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm0 1.163c5.98 0 10.837 4.857 10.837 10.837 0 2.29-.715 4.415-1.932 6.166l-4.103-11.838c.376-.021.734-.055.734-.055.352 0 .313-.509-.04-.509 0 0-1.056.086-1.741.086-.645 0-1.721-.086-1.721-.086-.352 0-.391.509-.039.509 0 0 .358.034.694.055l2.093 5.792-2.955 8.861L8.51 5.885c.376-.021.734-.055.734-.055.352 0 .313-.509-.04-.509 0 0-1.056.086-1.741.086-.645 0-1.721-.086-1.721-.086-.352 0-.391.509-.039.509 0 0 .358.034.694.055l3.966 11.432L8.27 18.06C6.883 16.51 6.037 14.364 6.037 12c0-2.31.815-4.432 2.167-6.002L4.015 17.84C2.261 16.223 1.163 13.918 1.163 11.999c0-5.98 4.857-10.836 10.837-10.836zm3.504 18.995c-.378.13-.77.23-1.173.298l2.91-8.435 2.137 6.166c-1.09 1.036-2.428 1.723-3.874 1.971z" />
                                </svg>

                                {/* Woo Badge */}
                                <div
                                    style={{
                                        backgroundColor: "#7c3aed",
                                        color: "#ffffff",
                                        fontWeight: "900",
                                        fontSize: "24px",
                                        padding: "8px 22px",
                                        borderRadius: "16px",
                                        boxShadow: "0 8px 16px rgba(124, 58, 237, 0.3)",
                                        letterSpacing: "-0.5px",
                                    }}
                                >
                                    woo
                                </div>
                            </div>

                            {/* RIGHT SIDE NODES (4 items) */}
                            <div
                                style={{
                                    position: "absolute",
                                    right: "0",
                                    height: "80%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    zIndex: 4,
                                }}
                            >
                                {rightItems.map((item: IndustryItem, idx: number) => (
                                    <div
                                        key={idx}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "12px",
                                            backgroundColor: "#ffffff",
                                            padding: "6px 16px 6px 6px",
                                            borderRadius: "50px",
                                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.08)",
                                            border: "1px solid #f1f5f9",
                                            width: "fit-content",
                                            marginLeft: idx === 0 || idx === 3 ? "40px" : "0px",
                                        }}
                                    >
                                        <span
                                            style={{
                                                width: "38px",
                                                height: "38px",
                                                borderRadius: "50%",
                                                backgroundColor: item.color,
                                                color: "#ffffff",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "18px",
                                                boxShadow: `0 4px 10px ${item.color}66`,
                                                flexShrink: 0,
                                            }}
                                        >
                                            {item.icon}
                                        </span>

                                        <span
                                            style={{
                                                fontSize: "14px",
                                                fontWeight: "600",
                                                color: "#1e293b",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-figtree text-black mt-4" data-aos="fade-up">
               For businesses that require a simple online presence, we can also develop a one page ecommerce website with essential product information, enquiry or purchase functionality, payment integration, and mobile-friendly design.
                </p>
            </div>
        </section>
    );
}