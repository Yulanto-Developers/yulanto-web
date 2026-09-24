"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HelpCircle, Network, ArrowRight, Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/assets/css/custome4.css";

interface StrategyPillar {
  id: string;
  topic: string;
  image: string;
  description: string;
  questions: string[];
}

export function AeoContentStrategy() {
  const [activeTopic, setActiveTopic] = useState<string>("all");

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  const pillars: StrategyPillar[] = [
    {
      id: "web-design",
      topic: "Website Design",
      image: "/assets/img/aeo/aeos1.jpg",
      description: "Addressing core fundamentals and cost transparency for prospective clients.",
      questions: [
        "What is AEO?",
        "Can AEO help my website appear in AI search results?",
        "Does schema markup guarantee AEO results?",
        "How long does AEO take to show results?",
      ],
    },
    {
      id: "corp-design",
      topic: "Corporate Website Design",
      image: "/assets/img/aeo/aeos2.jpg",
      description: "Structuring authoritative answers tailored to enterprise requirements.",
      questions: [
        "What is a corporate website?",
        "What pages should a corporate website have?",
        "How much does corporate website design cost?",
        "How long does corporate website development take?",
      ],
    },
    {
      id: "ecom-dev",
      topic: "Ecommerce Website Development",
      image: "/assets/img/aeo/aeos3.jpg",
      description: "Targeting transactional and platform-evaluation queries directly.",
      questions: [
        "How much does an ecommerce website cost?",
        "Which ecommerce platform should I choose?",
        "What features should an ecommerce website have?",
        "How long does ecommerce development take?",
      ],
    },
  ];

  const filteredPillars =
    activeTopic === "all"
      ? pillars
      : pillars.filter((p) => p.id === activeTopic);

  return (
    <section className="aeo-strategy-section py-5 bg-white overflow-hidden">
      <div className="container container-1550">

        {/* Header Section */}
        <div className="row mb-5" data-aos="fade-up">
          <div className="col-12">
            <span className="text-tenor text-uppercase text-primaryss fw-bold tracking-wider fs-6 d-block mb-2">
              Content Ecosystem
            </span>
            <h2 className="text-tenor fw-bold display-5 text-dark mb-3">
              AEO Content Strategy
            </h2>
            <div className="">
              <p className="text-figtree fs-5 text-dark mb-0 fw-medium">
                A successful AEO strategy is not about adding a large number of questions to a webpage. We develop content around meaningful topics and search intent.
              </p>
            </div>
            <p className="text-figtree fs-6">
              This creates a connected content ecosystem around your core services.
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        {/* <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-delay="100">
          <div className="col-auto">
            <div className="aeo-toggle-pill p-1 rounded-pill border d-inline-flex gap-2 bg-light">
              <button
                onClick={() => setActiveTopic("all")}
                className={`btn btn-sm rounded-pill px-4 text-tenor fw-bold ${activeTopic === "all" ? "btn-primaryss" : "btn-inactive"
                  }`}
              >
                <Network size={14} className="me-2" />
                All Pillars
              </button>
              {pillars.map((pillar) => (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTopic(pillar.id)}
                  className={`btn btn-sm rounded-pill px-4 text-tenor fw-bold ${activeTopic === pillar.id ? "btn-primaryss" : "btn-inactive"
                    }`}
                >
                  {pillar.topic}
                </button>
              ))}
            </div>
          </div>
        </div> */}

        {/* Visual Pillar Cards Grid */}
        <div className="row g-4 justify-content-center" data-aos="fade-up" data-aos-delay="200">
          {filteredPillars.map((pillar) => (
            <div
              key={pillar.id}
              className={`col-12 ${activeTopic === "all" ? "col-lg-4 col-md-6" : "col-lg-10"
                }`}
            >
              <div className="card h-100 border-0 rounded-4 shadow-sm overflow-hidden aeo-media-card">

                {/* Image Banner Container */}
                <div className="position-relative aeo-card-img-wrap">
                  <Image
                    src={pillar.image}
                    alt={pillar.topic}
                    fill
                    className="object-fit-cover aeo-card-img"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="aeo-card-overlay"></div>
                  {/* <div className="position-absolute top-0 start-0 m-3">
                    <span className="badge rounded-pill bg-accent-tag px-3 py-2 text-white text-figtree fs-7">
                      Intent Pillar
                    </span>
                  </div> */}
                  <div className="position-absolute bottom-0 start-0  p-4 text-white">
                    <h3 className="text-tenor fw-bold h4 mb-1 text-white">
                      {pillar.topic}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="card-body p-4 bg-white d-flex flex-column">
                  <p className="text-figtree text-muted fs-6">
                    {pillar.description}
                  </p>

                  <div className="aeo-question-stack d-flex flex-column gap-2 mb-4">
                    {pillar.questions.map((q, qIdx) => (
                      <div
                        key={qIdx}
                        className="d-flex align-items-center justify-content-between p-3 rounded-3 aeo-query-pill border"
                      >
                        <div className="d-flex align-items-center gap-2">
                          <HelpCircle size={16} className="text-accent-color flex-shrink-0" />
                          <span className="text-figtree text-dark fw-medium fs-6">
                            {q}
                          </span>
                        </div>
                        <Sparkles size={14} className="text-primaryss opacity-50 flex-shrink-0" />
                      </div>
                    ))}
                  </div>

                  {/* <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                    <span className="text-figtree fs-7 text-muted">
                      Connected Node Cluster
                    </span>
                    <span className="text-primaryss fw-bold fs-7 d-flex align-items-center gap-1">
                      Explore Cluster <ArrowRight size={14} />
                    </span>
                  </div> */}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Footer Banner */}
        <div className="row mt-5" data-aos="fade-up" data-aos-delay="300">
          <div className="col-lg-10 mx-auto text-center mt-4">
            <div className="p-4 rounded-4 bg-primaryss text-white shadow">
              <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3">
                <Network size={28} className="text-accent-color" />
                <p className="text-figtree mb-0 fw-medium text-center text-md-start text-white">
                  This creates a connected content ecosystem around your core services, establishing high entity authority for conversational AI engines.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AeoContentStrategy;