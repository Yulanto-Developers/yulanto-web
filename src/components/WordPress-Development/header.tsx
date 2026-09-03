"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle2 } from "lucide-react";

const focusPoints = [
  "Responsive WordPress website design",
  "Modern UI/UX",
  "Mobile-friendly layouts",
  "SEO-friendly website structure",
  "Fast-loading pages",
  "Easy content management",
  "Secure WordPress development",
  "Conversion-focused page layouts",
  "Custom functionality and integrations",
  "Scalable website architecture",
];

export function FocusSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110 overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
      <div className="container container-1550">
        <div className="row align-items-center">
          <div className="col-xl-12">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">Professional WordPress </span>Web Design Services in Chennai
              </h4>
              <p className="text-figtree text-black mt-2 font-paragraph-cls">
                A successful website needs more than an attractive design. It should provide a smooth user experience, load quickly, work across devices, and make it easy for customers to find your products or services.
              </p>
            </div>
          </div>
        </div>

        <h5>
          As a WordPress web design company in Chennai, we create websites with a strong focus on:
        </h5>

        <div className="row align-items-center g-5">
          {/* Left Side: Detailed WordPress Interface Mockup */}
          <div className="col-lg-6" data-aos="fade-right">
            <div 
              className="position-relative rounded-4 p-4 d-flex align-items-center justify-content-center" 
              style={{ minHeight: "480px" }}
            >
              {/* Floating WordPress Top Logo Badge */}
              <div 
                className="position-absolute rounded-circle bg-white d-flex align-items-center justify-content-center shadow"
                style={{
                  width: "70px",
                  height: "70px",
                  top: "0px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 3,
                  border: "4px solid #ffffff",
                }}
              >
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" 
                  alt="WordPress Logo" 
                  style={{ width: "42px", height: "42px" }}
                />
              </div>

              {/* Full Detailed WordPress Web Browser Frame */}
              <div 
                className="w-100 bg-white rounded-3 shadow-lg overflow-hidden mt-4"
                style={{
                  zIndex: 1,
                  border: "1px solid #e2e8f0",
                }}
              >
                {/* Browser Header Bar */}
                <div 
                  className="d-flex align-items-center justify-content-between px-3 py-2"
                  style={{ backgroundColor: "#1e293b" }}
                >
                  <div className="d-flex align-items-center gap-2">
                    <span className="rounded-circle bg-danger opacity-75" style={{ width: "10px", height: "10px" }} />
                    <span className="rounded-circle bg-warning opacity-75" style={{ width: "10px", height: "10px" }} />
                    <span className="rounded-circle bg-success opacity-75" style={{ width: "10px", height: "10px" }} />
                  </div>
                  <div className="px-3 py-1 bg-dark rounded text-light opacity-75 font-monospace" style={{ fontSize: "10px" }}>
                    https://yourdomain.com/wp-admin
                  </div>
                  <div style={{ width: "30px" }} />
                </div>

                {/* Top WordPress Admin Toolbar */}
                <div 
                  className="d-flex align-items-center justify-content-between px-3 py-1 border-bottom"
                  style={{ backgroundColor: "#1d2327", color: "#f0f0f1", fontSize: "11px" }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <span>w</span>
                    <span>🏠 My WordPress Site</span>
                    <span className="text-success">♻️ 3 Updates</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span>Howdy, Admin</span>
                    <span className="rounded-circle bg-secondary d-inline-block" style={{ width: "16px", height: "16px" }} />
                  </div>
                </div>

                {/* Dashboard Layout: Sidebar + Main Content Grid */}
                <div className="d-flex" style={{ minHeight: "340px" }}>
                  {/* Left Sidebar Menu */}
                  <div 
                    className="text-white p-2"
                    style={{
                      backgroundColor: "#1d2327",
                      width: "150px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      flexShrink: 0,
                    }}
                  >
                    <div className="py-2 px-2 mb-1 d-flex align-items-center gap-2 opacity-75">
                      <span>⚙️</span> Dashboard
                    </div>
                    <div className="py-2 px-2 mb-1 d-flex align-items-center gap-2 opacity-75">
                      <span>📌</span> Posts
                    </div>
                    <div className="py-2 px-2 mb-1 d-flex align-items-center gap-2 opacity-75">
                      <span>🖼️</span> Media
                    </div>
                    <div 
                      className="py-2 px-2 mb-1 rounded d-flex align-items-center justify-content-between font-weight-bold"
                      style={{ backgroundColor: "#2271b1" }}
                    >
                      <span>📄 Pages</span>
                      <span style={{ fontSize: "9px" }}>◀</span>
                    </div>
                    <div className="py-2 px-2 mb-1 d-flex align-items-center gap-2 opacity-75">
                      <span>💬</span> Comments
                    </div>
                    <div className="py-2 px-2 mb-1 d-flex align-items-center gap-2 opacity-75">
                      <span>🎨</span> Appearance
                    </div>
                    <div className="py-2 px-2 mb-1 d-flex align-items-center gap-2 opacity-75">
                      <span>🔌</span> Plugins
                    </div>
                    <div className="py-2 px-2 opacity-75 d-flex align-items-center gap-2">
                      <span>🛠️</span> Tools
                    </div>
                  </div>

                  {/* Main Detailed Grid View */}
                  <div className="p-3 bg-light w-100">
                    {/* Header Action Bar */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h6 className="m-0 text-dark fw-bold" style={{ fontSize: "14px" }}>Pages List</h6>
                      <button className="btn btn-sm btn-primary py-0 px-2" style={{ fontSize: "11px", backgroundColor: "#2271b1" }}>
                        + Add New Page
                      </button>
                    </div>

                    {/* Media Preview Row */}
                    <div className="row g-2 mb-3">
                      <div className="col-6">
                        <img 
                          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80" 
                          alt="WordPress Design Media" 
                          className="img-fluid rounded border shadow-sm" 
                          style={{ height: "110px", objectFit: "cover", width: "100%" }}
                        />
                      </div>
                      <div className="col-6">
                        <img 
                          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80" 
                          alt="WordPress Design Team" 
                          className="img-fluid rounded border shadow-sm" 
                          style={{ height: "110px", objectFit: "cover", width: "100%" }}
                        />
                      </div>
                    </div>

                    {/* Content Table Lines Mockup */}
                    <div className="bg-white rounded p-2 border shadow-sm mb-2">
                      <div className="d-flex align-items-center justify-content-between mb-2 border-bottom pb-1">
                        <div className="bg-primary opacity-50 rounded" style={{ height: "8px", width: "45%" }} />
                        <span className="badge bg-success-subtle text-success border border-success" style={{ fontSize: "9px" }}>Published</span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-2 border-bottom pb-1">
                        <div className="bg-secondary opacity-25 rounded" style={{ height: "8px", width: "60%" }} />
                        <span className="badge bg-success-subtle text-success border border-success" style={{ fontSize: "9px" }}>Published</span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="bg-secondary opacity-25 rounded" style={{ height: "8px", width: "35%" }} />
                        <span className="badge bg-warning-subtle text-warning border border-warning" style={{ fontSize: "9px" }}>Draft</span>
                      </div>
                    </div>

                    {/* Performance Widget Row */}
                    <div className="row g-2">
                      <div className="col-6">
                        <div className="bg-white rounded p-2 border shadow-sm">
                          <span className="text-muted d-block" style={{ fontSize: "9px" }}>Page Speed</span>
                          <span className="fw-bold text-success" style={{ fontSize: "12px" }}>98 / 100 ⚡</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="bg-white rounded p-2 border shadow-sm">
                          <span className="text-muted d-block" style={{ fontSize: "9px" }}>SEO Score</span>
                          <span className="fw-bold text-primary" style={{ fontSize: "12px" }}>Optimized 🎯</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Exact Content */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="ps-lg-4">
              {/* Bulleted Points */}
              <div className="row g-3 my-3">
                {focusPoints.map((point, idx) => (
                  <div key={idx} className="col-md-6 d-flex align-items-start gap-2">
                    <CheckCircle2 size={18} style={{ color: "#53ae7d", flexShrink: 0, marginTop: "3px" }} />
                    <span className="text-dark" style={{ fontSize: "20px", fontFamily: "Figtree, Figtree Fallback" }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-figtree text-black mt-4 pt-3 border-top" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                Our WordPress website design agency works with startups, small businesses, established companies, institutions, and professional service providers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FocusSection;