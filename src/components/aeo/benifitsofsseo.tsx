"use client";

import React, { useEffect, useState } from "react";
import { Search, Sparkles, ArrowRightLeft, CheckCircle2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/assets/css/custome4.css";

interface ComparisonItem {
  id: number;
  category: string;
  seo: string;
  aeo: string;
}

export function AeoVsSeoTable() {
  const [activeTab, setActiveTab] = useState<"all" | "seo" | "aeo">("all");

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  const comparisonData: ComparisonItem[] = [
    {
      id: 1,
      category: "Core Focus",
      seo: "Focuses on search visibility and rankings",
      aeo: "Focuses on answering questions clearly",
    },
    {
      id: 2,
      category: "Target Strategy",
      seo: "Targets keywords and search intent",
      aeo: "Targets questions and conversational queries",
    },
    {
      id: 3,
      category: "Content Goal",
      seo: "Optimizes pages for search engines",
      aeo: "Makes information easier to understand and extract",
    },
    {
      id: 4,
      category: "Optimization Tactics",
      seo: "Uses technical SEO, content and links",
      aeo: "Uses structured answers, FAQs, entities and supporting content",
    },
    {
      id: 5,
      category: "Search Output",
      seo: "Supports traditional search results",
      aeo: "Supports modern answer and AI-powered search experiences",
    },
  ];

  return (
    <section className="aeo-vs-seo-section py-5 overflow-hidden" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="container container-1550">
        <div className="row align-items-center" data-aos="fade-up">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
            Evolution of Search
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">SEO vs AEO: What's </span>the Difference?
              </h4>
               <h1 className="ft-23 mt-0 mb-3 text-tenor"
                  data-aos="text-reveal"
                  data-aos-delay="100"  style={{ lineHeight: "1.2" }}
                >
                Answer Engine Optimization Services
                </h1>
              <p className="text-figtree text-black mt-2">
               While traditional SEO drives website discoverability through rankings, Answer Engine Optimization (AEO) ensures your brand directly delivers exact answers across modern AI platforms and zero-click search systems.
              </p>
            </div>
          </div>
        </div>
        {/* Header Block */}
       

        {/* View Controls / Filter Tabs */}
        <div className="row justify-content-center mb-4" data-aos="fade-up" data-aos-delay="100">
          <div className="col-auto">
            <div className="aeo-toggle-pill bg-light p-1 rounded-pill border d-inline-flex gap-1">
              <button
                onClick={() => setActiveTab("all")}
                className={`btn btn-sm rounded-pill px-4 text-tenor fw-bold ${activeTab === "all" ? "btn-primaryss text-white shadow-sm" : "btn-inactive"
                  }`}
              >
                <ArrowRightLeft size={14} className="me-2" />
                Side-by-Side
              </button>
              <button
                onClick={() => setActiveTab("seo")}
                className={`btn btn-sm rounded-pill px-4 text-tenor fw-bold ${activeTab === "seo" ? "btn-primaryss text-white shadow-sm" : "btn-inactive"
                  }`}
              >
                <Search size={14} className="me-2" />
                SEO View
              </button>
              <button
                onClick={() => setActiveTab("aeo")}
                className={`btn btn-sm rounded-pill px-4 text-tenor fw-bold ${activeTab === "aeo" ? "btn-primaryss text-white shadow-sm" : "btn-inactive"
                  }`}
              >
                <Sparkles size={14} className="me-2" />
                AEO Focus
              </button>
            </div>
          </div>
        </div>

        {/* Comparison Table Container */}
        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
          <div className="col-12 col-xl-10">
            <div className="aeo-table-wrapper rounded-4 border overflow-hidden shadow-sm bg-white">
              <div className="table-responsive">
                <table className="table align-middle mb-0 custom-aeo-table">

                  {/* Table Header */}
                  <thead>
                    <tr>
                      <th scope="col" className="text-tenor fw-bold ps-4 py-3 bg-light text-muted col-3">
                        Dimension
                      </th>
                      {(activeTab === "all" || activeTab === "seo") && (
                        <th scope="col" className="text-tenor fw-bold py-3 bg-seo-head text-dark col-4">
                          <div className="d-flex align-items-center gap-2">
                            <div className="head-icon-box bg-slate-200 text-slate-700">
                              <Search size={16} />
                            </div>
                            <span>SEO (Search Engine Optimization)</span>
                          </div>
                        </th>
                      )}
                      {(activeTab === "all" || activeTab === "aeo") && (
                        <th scope="col" className="text-tenor fw-bold py-3 bg-aeo-head text-primaryss col-5">
                          <div className="d-flex align-items-center gap-2">
                            <div className="head-icon-box bg-primaryss text-white">
                              <Sparkles size={16} />
                            </div>
                            <span>AEO (Answer Engine Optimization)</span>
                          </div>
                        </th>
                      )}
                    </tr>
                  </thead>

                  {/* Table Body */}
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr
                        key={row.id}
                        className="aeo-table-row"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {/* Category Name */}
                        <td className="ps-4 py-4 text-tenor fw-bold text-dark border-end bg-light-subtle">
                          {row.category}
                        </td>

                        {/* Traditional SEO Column */}
                        {(activeTab === "all" || activeTab === "seo") && (
                          <td className="py-4 pe-4 text-figtree text-muted border-end seo-col-cell">
                            <div className="d-flex align-items-start gap-2">
                              <span className="dot-indicator bg-secondary-subtle mt-2"></span>
                              <span>{row.seo}</span>
                            </div>
                          </td>
                        )}

                        {/* Modern AEO Column */}
                        {(activeTab === "all" || activeTab === "aeo") && (
                          <td className="py-4 pe-4 text-figtree text-dark fw-medium aeo-col-cell">
                            <div className="d-flex align-items-start gap-2">
                              <CheckCircle2 size={18} className="text-primaryss mt-1 flex-shrink-0" />
                              <span>{row.aeo}</span>
                            </div>
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AeoVsSeoTable;