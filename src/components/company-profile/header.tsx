/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ArrowDownRight } from "lucide-react"; 

export function HeroSection04() {
  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110">
      <div className="container container-1550">
        {/* Header Title Block */}
        <div className="row align-items-center mb-5">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
              1,996
            </span>
          </div>
          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">Result-Driven Social Media </span>
                Marketing Strategies for Business Growth
              </h4>
              <p className="text-figtree text-black mt-2">
                Our designers and strategists develop tailored social media concepts based on the unique requirements of each brand to build memorable online experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Core Services Section */}
        <div className="services-grid-wrapper">
          <div className="services-content-box">
            <div className="services-card">
              <div className="service-list-items">
                <div>/ ART DIRECTION</div>
                <div>/ WEB DESIGN (UX/UI)</div>
                <div>/ WEB DEVELOPMENT</div>
              </div>

              <div className="designer-badge-box">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                  alt="Designer portrait"
                  className="designer-portrait-img"
                />
                <div className="designer-location-text">
                  BASED IN BOKARO STEEL CITY
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="hero-description-wrapper">
          <p className="hero-description-text">
            I'M EXPERIENCED WEB AND UX/UI DESIGNER,
            <br />
            WHO DESIGN MEMORABLE WEB EXPERIENCES FOR
            <br />
            BRANDS OF ALL SIZES
          </p>
        </div>

        {/* Footer Portfolio & Work Callout */}
        <div className="recent-work-wrapper">
          <div className="portfolio-stack-container">
            <div className="portfolio-card card-bottom">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
                alt="Portfolio sample 1"
                className="portfolio-img"
              />
            </div>
            <div className="portfolio-card card-middle">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
                alt="Portfolio sample 2"
                className="portfolio-img"
              />
            </div>
            <div className="portfolio-card card-top">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                alt="Portfolio sample 3"
                className="portfolio-img"
              />
            </div>
          </div>

          <div className="work-callout-box">
            <div className="work-callout-header">
              <span className="recent-work-label">
                RECENT WORK
              </span>
              <ArrowDownRight className="work-arrow-icon" />
            </div>

            <div className="work-callout-title">
              <h2 className="section-heading-large">
                Design without Limits
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}