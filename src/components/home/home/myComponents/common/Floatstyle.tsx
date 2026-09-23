"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Code2,
  Atom,
  MonitorSmartphone,
  BriefcaseBusiness,
  Layout,
  AppWindow,
  Palette,
  RefreshCw,
  PlugZap,
  CreditCard,
  Gauge,
  Headset,
} from "lucide-react";

interface ServiceItem {
    title: string;
    icon: React.ElementType;
}

const featuresList: ServiceItem[] = [
    { title: "Custom React Website Development", icon: Code2 },
    { title: "React JS UI Development", icon: Atom },
    { title: "Responsive React Web Design", icon: MonitorSmartphone },
    { title: "React Business Website Development", icon: BriefcaseBusiness },
    { title: "React Single Page Applications (SPA)", icon: Layout },
    { title: "React Web Application Development", icon: AppWindow },
    { title: "React UI/UX Implementation", icon: Palette },
    { title: "React Website Redesign", icon: RefreshCw },
    { title: "API Integration with React", icon: PlugZap },
    { title: "Third-Party API & Payment Gateway Integration", icon: CreditCard },
    { title: "React Performance Optimization", icon: Gauge },
    { title: "Website Maintenance & Support", icon: Headset },
];

export default function ReactServicesHero() {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800,
        });
    }, []);

    return (
        <section
            className="px-about-6-area pt-40 pb-40 pb-lg-110"
            style={{ 
                backgroundColor: "#f5f5f5", 
            
            }}
        >
            <div className="container container-1550">
                {/* Header Title Section */}
                <div className="row align-items-center mb-30 gx-4" data-aos="fade-up">
                    <div className="col-xl-3">
                        <span className="tp-section-subtitle text-black blink-ball">
                            Our React Services
                        </span>
                    </div>

                    <div className="col-xl-9">
                        <div className="px-project-title-box">
                            <h4 className="px-about-title mb-2">
                                <span className="text-blue-about">Our React Website </span>Development Services
                            </h4>
                            <p className="text-figtree text-black mt-2">
                                React JS is a powerful JavaScript library for developing dynamic and interactive web experiences. Our development approach focuses on creating clean, reusable, and scalable components that make your website easier to maintain and expand.
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{ width: "100%", boxSizing: "border-box" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <div>
                            {/* Two-Column List on Left Side & Image on Right Side */}
                            <div className="row align-items-center gx-4" style={{ margin: 0 }}>
                                {/* Left Column: Two Columns List (Grid layout split over 8 grid columns) */}
                                <div className="col-lg-8 mb-30" style={{ padding: 0 }}>
                                    <div 
                                        style={{ 
                                            display: "grid", 
                                            gridTemplateColumns: "repeat(2, minmax(0, 1fr))", 
                                            gap: "16px",
                                            paddingRight: "15px"
                                        }}
                                    >
                                        {featuresList.map((item, index) => {
                                            const IconComponent = item.icon;
                                            return (
                                                <div
                                                    key={index}
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "14px",
                                                        padding: "14px 18px",
                                                        borderRadius: "12px",
                                                        backgroundColor: "#053456",
                                                        border: "1px solid rgba(105, 180, 129, 0.4)",
                                                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                                                        cursor: "pointer",
                                                    }}
                                                    data-aos="fade-up"
                                                    data-aos-delay={index * 30}
                                                >
                                                    <IconComponent 
                                                        style={{ 
                                                            width: "20px", 
                                                            height: "20px", 
                                                            flexShrink: 0, 
                                                            color: "#69b481" 
                                                        }} 
                                                    />
                                                    <span className="text-figtree" style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff" }}>
                                                        {item.title}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Right Column: Image Column (4 Grid columns) */}
                                <div className="col-lg-4 mb-30" data-aos="fade-left" style={{ padding: 0 }}>
                                    <div style={{ width: "100%", overflow: "hidden", borderRadius: "20px", boxShadow: "0 15px 40px rgba(0, 0, 0, 0.25)", border: "1px solid rgba(0, 0, 0, 0.05)", position: "relative", minHeight: "450px" }}>
                                        <Image
                                            src="/assets/images/website-development/custom-website-development/Your-Business-1.jpg"
                                            alt="React Website Development Services"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 40vw"
                                            style={{ objectFit: "cover", display: "block" }}
                                            quality={90}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}