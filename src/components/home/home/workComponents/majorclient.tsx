"use client";

import { useState } from "react";
import AnimatedCounterTree from "@/components/shared/MetricsCounter/AnimatedCounterThree";
import { SmartLink } from "@/components/common";
import { TextArrowIcon } from "@/svg";
import Image from "next/image";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { gsap } from "gsap";

import "./majorclient.css";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/* =========================================================
   LEFT NAVIGATION DATA
========================================================= */

export const majorCItems = [
  "Naturographer",
  "Core",
  "Grayt",
  "Freight Digital",
];

/* =========================================================
   SERVICE DATA (WITH SOLUTIONS INTRO PARAGRAPH)
========================================================= */

export const innerClient = [
  {
    id: 1,

    title: "Naturographers – Wildlife Photography & Eco-Tourism Website Design",

    descriptions: [
      "Naturographers is a wildlife photography and eco-tourism website designed to showcase immersive safari experiences, wildlife photography workshops, and cinematic storytelling for nature enthusiasts. Our goal was to create a visually engaging and user-friendly website that reflects the brand’s passion for wildlife, adventure, nature, and photography.",
    ],

    challenges: [
      "Outdated website design and user interface",
      "Weak wildlife photography presentation",
      "Poor visual storytelling",
      "Low user engagement",
      "Inconsistent UI elements",
      "Lack of a premium brand identity",
      "Limited focus on safari and photography experiences",
      "Poor overall user experience across devices",
    ],

    solutionIntro:
      "We redesigned Naturographers as a modern wildlife photography and eco-tourism website with a strong focus on visual storytelling, user experience, and brand presentation.",

    solutions: [
      "High-quality wildlife and nature photography",
      "Cinematic visual storytelling",
      "Nature-inspired color palette",
      "Modern and responsive website design",
      "Smooth and intuitive navigation",
      "Interactive safari and tour sections",
      "Dedicated photography workshop presentation",
      "Clear and engaging call-to-action sections",
      "Consistent UI design and visual hierarchy",
      "Premium typography and modern layouts",
      "Mobile-friendly and responsive experience",
      "Optimized presentation of wildlife photography and eco-tourism services",
    ],

    images: [
      "/assets/img/service/inner-service/service-1.jpg",
      "/assets/img/service/inner-service/service-2.jpg",
    ],
  },

  {
    id: 2,

    title: "Core",

    descriptions: [
      "A process of assumption & validation with a goal of taking into account all the necessary variables, which are always custom and are to be uncovered.",

      "Every business has digital potential, and we are here to help you leverage that potential.",
    ],

    challenges: [
      "Unclear digital product positioning",
      "Complex user flows slowing down conversions",
      "Lack of scalable visual component architecture",
    ],

    solutionIntro:
      "We transformed Core into an agile design framework built for modern digital products.",

    solutions: [
      "End-to-end UI & UX audit and rapid wireframing",
      "Custom interactive prototyping and user validation",
      "Comprehensive design system implementation",
    ],

    images: [
      "/assets/img/service/inner-service/service-3.jpg",
      "/assets/img/service/inner-service/service-4.jpg",
    ],
  },

  {
    id: 3,

    title: "Grayt",

    descriptions: [
      "Marketing strategy is proudly responsible for half of a campaign's success; the other half relies solely on its implementation.",

      "We focus on creating visuals that communicate your value and engage your audience.",
    ],

    challenges: [
      "Low visual engagement on key marketing campaigns",
      "Static branding failing to resonate with modern audiences",
    ],

    solutionIntro:
      "We revitalized Grayt's visual presence through high-impact motion design and storytelling assets.",

    solutions: [
      "Custom 3D visual assets and animated logo identities",
      "High-conversion launch videos and product illustrations",
    ],

    images: [
      "/assets/img/service/inner-service/service-5.jpg",
      "/assets/img/service/inner-service/service-6.jpg",
    ],
  },

  {
    id: 4,

    title: "Freight Digital",

    descriptions: [
      "Efficiency and scalability are the two factors through which every decision gets filtered—programming language, framework, library, line of code, and server architecture.",
    ],

    challenges: [
      "Legacy software integration bottlenecks in logistics",
      "Slow front-end load times impacting client retention",
    ],

    solutionIntro:
      "We architected a streamlined Webflow and modern frontend strategy tailored for logistics scalability.",

    solutions: [
      "Scalable front-end & back-end web application architecture",
      "Seamless API integrations and high-performance Webflow workflows",
    ],

    images: [
      "/assets/img/service/inner-service/service-7.jpg",
      "/assets/img/service/inner-service/service-8.jpg",
    ],
  },
];

/* =========================================================
   TYPES
========================================================= */

interface InnerServiceItemProps {
  id: number;
  title: string;
  descriptions: string[];
  challenges?: string[];
  solutionIntro?: string;
  solutions?: string[];
  images: string[];
  isLastItem?: boolean;
}

/* =========================================================
   RIGHT SIDE SERVICE ITEM
========================================================= */

const MajorInnerItems = ({
  id,
  title,
  descriptions,
  challenges = [],
  solutionIntro,
  solutions = [],
  images,
  isLastItem = false,
}: InnerServiceItemProps) => {
  const [activeTab, setActiveTab] = useState<"challenges" | "solutions">("challenges");

  return (
    <div
      id={`major-service-${id}`}
      className={`major-inner-service-item ${
        !isLastItem ? "major-inner-service-spacing" : ""
      }`}
    >
      {/* =========================================
          NUMBER + CONTENT
      ========================================= */}

      <div className="major-inner-service-right">
        <div className="major-service-content-grid">
          {/* NUMBER */}

          <div className="major-inner-service-number">
            <h2>
              <AnimatedCounterTree end={id} duration={0.2} />
            </h2>
          </div>

          {/* CONTENT */}

          <div className="major-inner-service-content">
            <div className="major-inner-service-text text-tenor">
              <span>{title}</span>

              {descriptions.map((description, index) => (
                <p
                  className="text-figtree"
                  key={`description-${id}-${index}`}
                >
                  {description}
                </p>
              ))}
            </div>

            {/* =========================================
                CHALLENGES & SOLUTIONS ANIMATED BOX
            ========================================= */}

            <div className="cs-box-wrapper text-figtree">
              {/* Tab Header Controls */}

              <div className="cs-tab-header">
                <button
                  type="button"
                  className={`cs-tab-btn ${
                    activeTab === "challenges" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("challenges")}
                >
                  Challenges ({challenges.length})
                </button>

                <button
                  type="button"
                  className={`cs-tab-btn ${
                    activeTab === "solutions" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("solutions")}
                >
                  Solutions ({solutions.length})
                </button>
              </div>

              {/* Tab Content Cards */}

              <div className="cs-tab-body">
                <div
                  key={activeTab}
                  className="cs-list-container cs-fade-in"
                >
                  {/* Solution Overview Paragraph */}
                  {activeTab === "solutions" && solutionIntro && (
                    <p className="cs-solution-intro-text mb-3">
                      {solutionIntro}
                    </p>
                  )}

                  {(activeTab === "challenges" ? challenges : solutions).map(
                    (item, index) => (
                      <div
                        key={`${activeTab}-${index}`}
                        className="cs-item d-flex justify-content-between align-items-center"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <span className="cs-item-text">{item}</span>

                        <i className="cs-item-icon">
                          <TextArrowIcon />
                        </i>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          IMAGES
      ========================================= */}

      <div className="row gx-10 major-inner-service-images-row">
        <div className="major-inner-service-thumb-text">
          <span className="text-tenor">
            (Our Recent Work in {title})
          </span>
        </div>

        {images.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="col-xl-6 col-lg-6"
          >
            <div className="major-inner-service-thumb">
              <div className="major-inner-service-ripple-image">
                <Image
                  className="w-100 img-fluid"
                  width={643}
                  height={720}
                  src={image}
                  alt={`${title} ${index + 1}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const MajorClientService = () => {
  useGSAP(() => {
    if (window.innerWidth <= 991) {
      return;
    }

    const section = document.querySelector(".major-client-service-area");
    const leftColumn = document.querySelector(".major-client-left-column");
    const serviceItems = gsap.utils.toArray<HTMLElement>(
      ".major-inner-service-item"
    );
    const navItems = gsap.utils.toArray<HTMLElement>(
      ".major-client-service-nav li"
    );

    if (
      !section ||
      !leftColumn ||
      serviceItems.length === 0 ||
      navItems.length === 0
    ) {
      return;
    }

    const setActiveService = (activeIndex: number) => {
      navItems.forEach((item, index) => {
        item.classList.toggle(
          "major-service-nav-active",
          index === activeIndex
        );
      });
    };

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top+=100",
        end: "bottom bottom",
        pin: leftColumn,
        pinSpacing: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });

      serviceItems.forEach((service, index) => {
        ScrollTrigger.create({
          trigger: service,
          start: "top 45%",
          end: "bottom 45%",
          onEnter: () => setActiveService(index),
          onEnterBack: () => setActiveService(index),
        });
      });

      setActiveService(0);
      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert();
    };
  });

  return (
    <section
      id="major-client-services"
      className="major-client-service-area"
    >
      <div className="container container-1830">
        <div className="row major-client-service-row">
          {/* LEFT SIDE */}

          <div className="col-lg-3 major-client-left-column">
            <div className="major-client-left">
              <span className="major-client-left-title text-tenor">
                Services
              </span>

              <ul className="major-client-service-nav text-figtree">
                {majorCItems.map((item, index) => (
                  <li key={item}>
                    <a
                      href={`#major-service-${index + 1}`}
                      onClick={(e) => {
                        e.preventDefault();

                        const target = document.getElementById(
                          `major-service-${index + 1}`
                        );

                        if (!target) {
                          return;
                        }

                        const smoother = ScrollSmoother.get();

                        if (smoother) {
                          smoother.scrollTo(target, true, "top top+=100");
                        } else {
                          target.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }
                      }}
                    >
                      <span className="nav-num">
                        {String(index + 1).padStart(2, "0")}.
                      </span>

                      <span className="nav-label">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="col-lg-7 major-client-right-column">
            {innerClient.map((service, index) => (
              <MajorInnerItems
                key={service.id}
                id={service.id}
                title={service.title}
                descriptions={service.descriptions}
                challenges={service.challenges}
                solutionIntro={service.solutionIntro}
                solutions={service.solutions}
                images={service.images}
                isLastItem={index === innerClient.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MajorClientService;