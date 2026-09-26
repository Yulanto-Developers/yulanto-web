"use client";

import React from "react";

interface IndustryItem {
    label: string;
    color: string;
    icon: string;
}

// Complete list mapped directly from the source text
const businessTypes: IndustryItem[] = [
    { label: "Retail businesses", color: "#ece0ee", icon: "🛍️" },
    { label: "Manufacturers", color: "#6366f1", icon: "🏭" },
    { label: "Fashion & lifestyle", color: "#eab308", icon: "👗" },
    { label: "Electronics stores", color: "#10b981", icon: "📱" },
    { label: "Food & groceries", color: "#06b6d4", icon: "🛒" },
    { label: "Service businesses", color: "#3b82f6", icon: "💼" },
    { label: "B2B businesses", color: "#8b5cf6", icon: "🏢" },
    { label: "Startups & SMEs", color: "#362d32", icon: "🚀" },
];

export default function WooCommerceIndustriesSection() {
    // Left side items (first 4)
    const leftItems = businessTypes.slice(0, 4);
    // Right side items (last 4)
    const rightItems = businessTypes.slice(4, 8);

    return (
        <section className="px-about-6-area pt-40 pb-40 pb-lg-110" style={{ overflowX: "hidden",width:"100%" }}>
            {/* Mobile Responsiveness & Overflow Fix Style */}
            <style jsx>{`
                @media (max-width: 768px) {
                    .hub-spoke-container {
                        height: auto !important;
                        min-height: auto !important;
                        padding: 20px 10px !important;
                        flex-direction: column !important;
                        gap: 12px !important;
                        width: 100% !important;
                        max-width: 100% !important;
                        box-sizing: border-box !important;
                    }
                    .hub-dashed-ring {
                        display: none !important;
                    }
                    .side-nodes-left, .side-nodes-right {
                        position: relative !important;
                        left: auto !important;
                        right: auto !important;
                        height: auto !important;
                        width: 100% !important;
                        flex-direction: row !important;
                        flex-wrap: wrap !important;
                        justify-content: center !important;
                        align-items: center !important;
                        gap: 8px !important;
                    }
                    .side-nodes-left div, .side-nodes-right div {
                        margin-right: 0px !important;
                        margin-left: 0px !important;
                        max-width: 100% !important;
                    }
                    .central-hub-node {
                        order: 5;
                        margin: 10px 0;
                        width: 160px !important;
                        height: 160px !important;
                    }
                }
            `}</style>

            <div className="container container-1550" style={{ overflowX: "hidden",overflowY: "hidden" }}>
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
                    <div className="col-lg-12 mb-5 mb-lg-0 px-0">
                        <div
                            className="hub-spoke-container"
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
                                className="hub-dashed-ring"
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
                                className="side-nodes-left"
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
                                            gap: "10px",
                                            backgroundColor: "#ffffff",
                                            padding: "6px 14px 6px 6px",
                                            borderRadius: "50px",
                                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.08)",
                                            border: "1px solid #f1f5f9",
                                            width: "fit-content",
                                            marginRight: idx === 0 || idx === 3 ? "40px" : "0px",
                                        }}
                                    >
                                        <span
                                            style={{
                                                width: "36px",
                                                height: "36px",
                                                borderRadius: "50%",
                                                backgroundColor: item.color,
                                                color: "#ffffff",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "16px",
                                                boxShadow: `0 4px 10px ${item.color}66`,
                                                flexShrink: 0,
                                            }}
                                        >
                                            {item.icon}
                                        </span>

                                        <span
                                            style={{
                                                fontSize: "13px",
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
                                className="central-hub-node"
                                style={{
                                    position: "relative",
                                    width: "220px",
                                    height: "220px",
                                    zIndex: 3,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <img
                                    src="/assets/img/WooCommerce-Development/wooo.png"
                                    alt="ecommerce website design company chennai"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                    }}
                                />
                            </div>

                            {/* RIGHT SIDE NODES (4 items) */}
                            <div
                                className="side-nodes-right"
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
                                            gap: "10px",
                                            backgroundColor: "#ffffff",
                                            padding: "6px 14px 6px 6px",
                                            borderRadius: "50px",
                                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.08)",
                                            border: "1px solid #f1f5f9",
                                            width: "fit-content",
                                            marginLeft: idx === 0 || idx === 3 ? "40px" : "0px",
                                        }}
                                    >
                                        <span
                                            style={{
                                                width: "36px",
                                                height: "36px",
                                                borderRadius: "50%",
                                                backgroundColor: item.color,
                                                color: "#ffffff",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "16px",
                                                boxShadow: `0 4px 10px ${item.color}66`,
                                                flexShrink: 0,
                                            }}
                                        >
                                            {item.icon}
                                        </span>

                                        <span
                                            style={{
                                                fontSize: "13px",
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