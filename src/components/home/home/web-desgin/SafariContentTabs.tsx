"use client";

import React, { useState } from "react";
import "./SafariContentTabs.css";

export interface SafariTabItem {
    title1: string;
    title2: string;
    description: string;
    points: string[];
    image?: string;
}

interface SafariContentTabsProps {
    data: SafariTabItem[];
}

export default function SafariContentTabs({
    data,
}: SafariContentTabsProps) {
    const [activeTab, setActiveTab] = useState(0);
    const [loading, setLoading] = useState(false);

    if (!data || data.length === 0) {
        return null;
    }

    const activeItem = data[activeTab];

    const handleTabChange = (index: number) => {
        if (index === activeTab) {
            return;
        }

        // Start loading
        setLoading(true);

        // Change tab
        setActiveTab(index);

        // Stop loading after animation
        setTimeout(() => {
            setLoading(false);
        }, 800);
    };

    return (
        <section className="safari-section">
            <div className="safari-browser">

                {/* =========================
                    MAC / SAFARI TOP BAR
                ========================= */}

                <div className="safari-topbar">

                    {/* Mac Window Buttons */}
                    <div className="safari-dots">
                        <span className="dot close"></span>
                        <span className="dot minimize"></span>
                        <span className="dot maximize"></span>
                    </div>

                    {/* Browser Navigation */}
                    <div className="safari-navigation">
                        <span className="nav-icon">
                            ‹
                        </span>

                        <span className="nav-icon disabled">
                            ›
                        </span>
                    </div>

                    {/* Address Bar */}
                    <div className="safari-address">
                        <span className="lock-icon">
                            🔒
                        </span>

                        <span>
                            yulanto.com
                        </span>
                    </div>

                    {/* Browser Actions */}
                    <div className="safari-actions">
                        <span>
                            ↻
                        </span>

                        <span>
                            •••
                        </span>
                    </div>
                </div>


                {/* =========================
                    TABS
                ========================= */}

                <div className="safari-tabs">

                    {data.map((item, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`safari-tab ${activeTab === index
                                ? "active"
                                : ""
                                }`}
                            onClick={() =>
                                handleTabChange(index)
                            }
                        >

                            {/* Favicon */}
                            <span className="tab-favicon">
                                ◉
                            </span>

                            {/* Tab Title */}
                            <span className="tab-title text-tenor">
                                {item.title1 + " " + item.title2}
                            </span>

                            {/* Close */}
                            <span className="tab-close">
                                ×
                            </span>

                        </button>
                    ))}

                    {/* New Tab */}
                    <button
                        type="button"
                        className="new-tab"
                    >
                        +
                    </button>

                </div>


                {/* =========================
                    LOADING BAR
                ========================= */}

                <div className="safari-loading-track">

                    {loading && (
                        <div
                            key={activeTab}
                            className="safari-loading-bar"
                        />
                    )}

                </div>


                {/* =========================
    BROWSER CONTENT
========================= */}

                <div className="safari-content">

                    {/* CONTENT */}
                    <div
                        key={`text-${activeTab}`}
                        className="safari-text safari-text-full"
                    >

                        <span className="safari-number">
                            {String(activeTab + 1).padStart(2, "0")}
                        </span>

                        <h4 className="px-about-title mb-20">
                            <span className="text-blue-about">
                                {activeItem.title1}{" "}
                            </span>

                            {activeItem.title2}
                        </h4>

                        <p>
                            {activeItem.description}
                        </p>

                        {/* POINTS */}
                        <div className="safari-points">

                            {activeItem.points.map(
                                (point, index) => (
                                    <div
                                        className="safari-point"
                                        key={index}
                                    >

                                        <span className="safari-point-number">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="safari-point-text">
                                            {point}
                                        </span>

                                    </div>
                                )
                            )}

                        </div>

                    </div>

                </div>


                {/* =========================
                    BROWSER STATUS BAR
                ========================= */}

                <div className="safari-status">

                    <span className="text-figtree">
                        {activeItem.title1 + " " + activeItem.title2}
                    </span>

                    <span className="text-figtree">
                        🔒 yulanto.com
                    </span>

                </div>

            </div>
        </section>
    );
}