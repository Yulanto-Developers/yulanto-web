"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/assets/css/custome4.css";

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  additionalText?: string;
  examples?: string[];
  imageUrl: string;
}

export function AeoProcessAlt() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  const featuredStep: ProcessStep = {
    id: "step-1",
    number: "01",
    title: "Question & Search Intent Research",
    description:
      "We identify questions related to your products, services, industry and target location.",
    examples: [
      "What is AEO?",
      "Can AEO help my website appear in AI search results?",
      "Does schema markup guarantee AEO results?",
      "How long does AEO take to show results?",
      
    ],
    imageUrl: "/assets/img/aeo/img-1.jpg",
  };

  const rowOneSteps: ProcessStep[] = [
    {
      id: "step-2",
      number: "02",
      title: "Content Optimization",
      description:
        "We restructure website content using clear headings, concise answers, supporting explanations, lists, tables and relevant internal links.",
      additionalText:
        "The goal is to make important information easy to understand for both visitors and search systems.",
       imageUrl: "/assets/img/aeo/img-2.jpg",
    },
    {
      id: "step-3",
      number: "03",
      title: "FAQ & Conversational Content",
      description:
        "We create useful FAQ sections based on genuine customer questions and search intent.",
      additionalText:
        "Each question is answered clearly without unnecessary marketing language.",
       imageUrl: "/assets/img/aeo/img-3.jpg",
    },
    {
      id: "step-4",
      number: "04",
      title: "Structured Data",
      description:
        "Where appropriate, we implement relevant structured data to help search engines understand information such as your organization, services, articles, breadcrumbs and other supported content types.",
       imageUrl: "/assets/img/aeo/img-4.jpg",
    },
  ];

  const rowTwoSteps: ProcessStep[] = [
    {
      id: "step-5",
      number: "05",
      title: "Internal Linking",
      description:
        "We connect related service pages, FAQs, blogs and supporting resources so that users and search engines can understand the relationship between different topics on your website.",
       imageUrl: "/assets/img/aeo/img-5.jpg",
    },
    {
      id: "step-6",
      number: "06",
      title: "Expertise & Trust Signals",
      description:
        "We strengthen important pages with genuine business information, service details, case studies, project examples, experience, author information and other relevant evidence.",
       imageUrl: "/assets/img/aeo/last-img.jpg",
    },
  ];

  return (
    <section className="aeo-alt-section py-5 bg-white">
      <div className="container container-1550">

        {/* Section Header */}
        <div className="row align-items-center" data-aos="fade-up">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
              Step-By-Step Methodology
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about"> How Does </span>AEO Work?
              </h4>
              <p className="text-figtree text-black mt-2">
                AEO focuses on understanding the questions your potential customers ask and creating useful content that directly addresses those questions.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Hero Box (Step 1) */}
        <div
          className="aeo-featured-card bg-light rounded-4 p-2 p-lg-3 mb-20 border overflow-hidden"
          data-aos="fade-up"
        >
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="text-tenor text-muted small fw-bold tracking-wide" style={{ color: '#053456' }}></span>
              </div>

              <h3 className="text-tenor fw-bold fs-3 text-dark mb-3">
                {featuredStep.title}
              </h3>

              <p className="text-figtree mb-4" style={{ fontSize: "15px !important" }}>
                {featuredStep.description}
              </p>

              <div className="aeo-examples-wrapper p-3 bg-white rounded-3 border">
                <p className="text-tenor fw-bold text-dark fs-6 mb-2">
                  Examples of Intent Questions We Target:
                </p>
                <div className="row g-2">
                  {featuredStep.examples?.map((q, idx) => (
                    <div key={idx} className="col-md-6 d-flex align-items-center">
                      <span className="aeo-q-dot me-2"></span>
                      <span className="text-figtree" style={{ color: '#053456' }}>{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="aeo-img-frame rounded-4 overflow-hidden shadow-sm">
                <img
                  src={featuredStep.imageUrl}
                  alt={featuredStep.title}
                  className="img-fluid w-100 object-fit-cover"
                  style={{ maxHeight: "360px" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Row 1: 3 Cards Grid (Steps 2, 3, 4) */}
        <div className="row g-4 mb-4">
          {rowOneSteps.map((step, index) => (
            <div
              key={step.id}
              className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="aeo-grid-card w-100 bg-white rounded-4 border overflow-hidden d-flex flex-column">
                
                {/* Image Top */}
                <div className="aeo-grid-img-wrap col-12" style={{ height: "200px" }}>
                  <img
                    src={step.imageUrl}
                    alt={step.title}
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>

                {/* Content Below */}
                <div className="p-4 col-12 d-flex flex-column justify-content-between flex-grow-1">
                  <div>
                    <h4 className="text-tenor fw-bold text-dark fs-5 mb-2">
                      {step.title}
                    </h4>

                    <p className="text-figtree text-muted mb-2" style={{ fontSize: '15px !important' }}>
                      {step.description}
                    </p>

                    {step.additionalText && (
                      <p className="text-figtree fs-6 mb-0" style={{ color: '#053456' }}>
                        {step.additionalText}
                      </p>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Row 2: 2 Cards Grid (Steps 5, 6) */}
        <div className="row g-4">
          {rowTwoSteps.map((step, index) => (
            <div
              key={step.id}
              className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 4)}
            >
              <div className="aeo-grid-card w-100 bg-white rounded-4 border overflow-hidden d-flex flex-column">
                
                {/* Image Top */}
                <div className="aeo-grid-img-wrap col-12" style={{ height: "220px" }}>
                  <img
                    src={step.imageUrl}
                    alt={step.title}
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>

                {/* Content Below */}
                <div className="p-4 col-12 d-flex flex-column justify-content-between flex-grow-1">
                  <div>
                    <h4 className="text-tenor fw-bold text-dark fs-5 mb-2">
                      {step.title}
                    </h4>

                    <p className="text-figtree text-muted mb-2" style={{ fontSize: '15px !important' }}>
                      {step.description}
                    </p>

                    {step.additionalText && (
                      <p className="text-figtree fs-6 mb-0" style={{ color: '#053456' }}>
                        {step.additionalText}
                      </p>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AeoProcessAlt;