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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
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
  "Harithams",
  "Vedaalayam",
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
    result: 'The redesigned Naturographers website delivers a premium, immersive, and SEO-friendly digital experience that combines wildlife photography, eco-tourism, safari adventures, and cinematic storytelling.',
    tech: [''],
    images: [
      "/assets/img/service/inner-service/service-1.jpg",
      "/assets/img/service/inner-service/service-2.jpg",
    ],
  },

  {
    id: 2,

    title: "CORE Energy Systems – Industrial & Engineering Website Design",

    descriptions: [
      "CORE Energy Systems is a specialised engineering and EPC company delivering advanced solutions across Nuclear, Defence & Aerospace, Clean Energy, Oil & Gas, and critical infrastructure sectors. The objective was to create a modern, high-performance corporate website that effectively communicates CORE’s engineering expertise, technical capabilities, landmark projects, innovation, and global presence.",

      "The website needed to present complex engineering information in a clear, engaging, and professional manner while establishing a strong digital presence for a technology-driven and mission-critical organisation.",
    ],

    challenges: [
      "Complex engineering services and technical information were difficult to present simply",
      "Large number of industries, capabilities, projects, and solutions required better organisation",
      "Need for a strong and credible corporate brand presentation",
      "Limited visual storytelling for complex engineering solutions",
      "Need to showcase global presence and landmark projects effectively",
      "Multiple business sectors required clear navigation and content hierarchy",
      "Important technical information needed to remain accessible without overwhelming visitors",
      "Requirement for a modern, responsive, and user-friendly digital experience",
    ],

    solutionIntro:
      "We developed a modern corporate website design focused on clarity, credibility, technical excellence, and user experience. The website architecture was structured around CORE’s key sectors and capabilities, allowing visitors to quickly explore its expertise in nuclear engineering, defence and aerospace, clean energy, oil & gas, EPC solutions, engineered systems, O&M, and innovation.",

    solutions: [
      "Modern and professional corporate website design",
      "Strong visual presentation of engineering capabilities",
      "Structured navigation for multiple business sectors",
      "Dedicated sections for Nuclear, Defence & Aerospace, Clean Energy, and Oil & Gas",
      "Clear presentation of EPC, EPS, O&M, and Innovation capabilities",
      "Interactive project showcase for landmark engineering projects",
      "Strong visual storytelling using project and industry imagery",
      "Dedicated global presence section",
      "Client and industry credibility showcase",
      "Responsive design for desktop, tablet, and mobile devices",
      "Clear call-to-action sections for improved user engagement",
      "Improved content hierarchy for technical and corporate information",
      "SEO-friendly website structure and content organisation",
    ],
    result: 'The redesigned CORE Energy Systems website delivers a professional, technically focused, responsive, and SEO-friendly digital experience. It makes CORE’s complex engineering capabilities easier to understand while providing a structured platform to showcase its projects, sectors, innovation, global operations, and industry expertise.',
    tech: [],
    images: [
      "/assets/img/service/inner-service/service-3.jpg",
      "/assets/img/service/inner-service/service-4.jpg",
    ],
  },

  {
    id: 3,

    title: "GRAYT – Technology & Consumer Electronics Website Design",

    descriptions: [
      "GRAYT, a technology brand from Grayeye IT Systems, offers a diverse range of innovative products including laptops, smart TVs, interactive flat panels, tablets, desktops, and all-in-one PCs. The objective was to create a modern, engaging, and scalable website that presents the complete product portfolio while strengthening GRAYT’s digital brand identity.",

      "The new website was designed to provide a seamless user experience for consumers, businesses, educational institutions, and technology buyers while making it easier to discover products, explore features, submit enquiries, and access customer support.",
    ],

    challenges: [
      "Large and diverse technology product portfolio",
      "Need to present multiple product categories clearly",
      "Complex product information required better content organisation",
      "Need for a stronger and more modern technology brand identity",
      "Product discovery and navigation needed improvement",
      "Requirement for clear product-focused call-to-action sections",
      "Need to connect product information with enquiry generation",
      "Customer support resources needed better accessibility",
      "Multiple support services required clear categorisation",
      "Website needed to deliver a consistent experience across desktop, tablet, and mobile devices",
    ],

    solutionIntro:
      "We created a modern technology website design with a clean interface, strong product presentation, intuitive navigation, and a structured content architecture. The website brings together GRAYT’s product categories, corporate information, client portfolio, enquiry system, and after-sales support within a unified digital experience.",

    solutions: [
      "Modern and responsive website design",
      "User-friendly UI/UX for technology products",
      "Structured product category navigation",
      "Dedicated product showcase sections",
      "Attractive product cards and promotional sections",
      "Clear product enquiry call-to-actions",
      "Product-focused visual storytelling",
      "Responsive design for mobile, tablet, and desktop",
      "Dedicated customer support section",
      "Manuals and downloads integration",
      "Remote technical support access",
      "Warranty verification functionality",
      "Online diagnostic tools",
      "Customer ticket and support access",
      "Client and brand showcase",
      "Downloadable brochure enquiry functionality",
      "WhatsApp and enquiry integration",
      "Clear corporate information architecture",
    ],
    reuslt: 'The new GRAYT website delivers a modern, responsive, SEO-friendly, and conversion-focused digital experience. It provides a structured platform for showcasing GRAYT\'s technology products while making product discovery, enquiries, customer support, and brand exploration more convenient.',
    tech: [],
    images: [
      "/assets/img/service/inner-service/service-5.jpg",
      "/assets/img/service/inner-service/service-6.jpg",
    ],
  },

  {
    id: 4,

    title: "Freight Digital FZC – Logistics & Freight Industry Website Design",

    descriptions: [
      "Freight Digital FZC is a specialised digital marketing and business promotion platform focused on the freight forwarding, logistics, shipping, customs clearance, NVOCC, transportation, and supply chain industries. The objective was to create a modern, professional, and SEO-friendly website that clearly communicates its specialised services and helps logistics companies build stronger digital visibility and generate qualified business opportunities globally.",
    ],

    challenges: [
      "Complex logistics and digital marketing services needed clearer presentation",
      "Multiple logistics industries and target audiences required better organisation",
      "Need for a stronger professional brand identity",
      "Technical marketing services needed to be explained in a simple and engaging way",
      "Global logistics services required a more structured website architecture",
      "Need to improve service discovery and user navigation",
      "Limited opportunities for clear lead-generation call-to-actions",
      "Industry-specific content needed stronger SEO structure",
      "Customer testimonials and credibility elements needed better presentation",
      "Website required a responsive experience across desktop, tablet, and mobile devices",
    ],

    solutionIntro:
      "We developed a modern logistics and freight industry website focused on professional branding, intuitive navigation, service visibility, lead generation, and SEO-friendly content architecture.The website was structured around Freight Digital\'s core offerings, including global logistics advertising, digital marketing campaigns, online business promotion, logistics industry listings, newsletter advertising, and analytics & reporting.",

    solutions: [
      "Modern corporate website design",
      "Industry-focused UI/UX design",
      "Responsive website development",
      "Clear logistics service categorisation",
      "Dedicated service showcase sections",
      "Strong visual presentation of freight and logistics industries",
      "Clear call-to-action buttons for lead generation",
      "Structured navigation and content hierarchy",
      "Global logistics and business promotion sections",
      "Client testimonial presentation",
      "Contact and enquiry-focused sections",
      "Mobile-friendly and responsive layouts",
      "Professional typography and visual hierarchy",
      "Optimised presentation of industry-specific content",
      "Scalable website architecture for future services and content",
    ],
    result: 'The new Freight Digital FZC website delivers a professional, modern, responsive, SEO-friendly, and conversion-focused digital experience specifically tailored to the global freight and logistics industry.',
    tech: [
      'Website Design | UI/UX Design | Responsive Web Development | Corporate Website Development | Logistics Website Design | Freight Forwarding Website | SEO-Friendly Website Structure | Digital Marketing Website | Lead Generation | Service Showcase | Content Architecture | Mobile Optimisation | Performance Optimisation | Conversion-Focused Design'
    ],
    images: [
      "/assets/img/service/inner-service/service-7.jpg",
      "/assets/img/service/inner-service/service-8.jpg",
    ],
  },
  {
    id: 5,

    title: "Harithams – Real Estate & Property Website Design",

    descriptions: [
      "Harithams Group of Companies is a growing real estate and construction brand focused on residential properties, villa plots, gated communities, apartments, individual villas, and strategic land development. The objective of the new website was to create a premium, modern, and trustworthy digital presence that effectively showcases Harithams' projects, expertise, experience, and customer-focused approach.",
    ],

    challenges: [
      "Real estate projects required a more engaging digital presentation",
      "Multiple property categories needed clear organisation",
      "Project information needed to be easier for prospective buyers to explore",
      "The brand required a stronger premium and trustworthy identity",
      "Property images and project details needed better visual storytelling",
      "Multiple business capabilities required a clear content hierarchy",
      "Users needed a simpler way to discover apartments, villas, and plots",
      "Stronger enquiry and lead-generation opportunities were required",
      "The website needed to communicate Harithams' experience and credibility effectively",
      "Content needed to be structured for better search engine visibility",
    ],

    solutionIntro:
      "We designed and developed a modern, responsive, and SEO-friendly real estate website focused on project discovery, brand credibility, visual presentation, and lead generation. The new website presents Harithams' core capabilities, including villa plot development, gated community layouts, apartments, individual villas, strategic land and infrastructure planning, and in-house sales and marketing.",

    solutions: [
      "Premium real estate website design",
      "Modern UI/UX design",
      "Responsive website development",
      "Project-focused website architecture",
      "Dedicated Apartments, Villas, and Plots categories",
      "Individual project showcase pages",
      "High-quality property and lifestyle imagery",
      "Clear project specifications and location information",
      "Strong call-to-action sections",
      "Contact and property enquiry integration",
      "Download brochure functionality",
      "Customer testimonials and trust-building sections",
      "Company experience and achievement highlights",
      "Group of Companies presentation",
    ],
    result: 'The new Harithams website delivers a premium, modern, responsive, SEO-friendly, and conversion-focused digital experience for a real estate and construction brand.',
    tech: [
      'Website Design | UI/UX Design | Responsive Web Development | Real Estate Website Design | Property Project Showcase | Real Estate SEO Structure | Lead Generation | Project Catalogue | Property Enquiry Integration | Brochure Integration | Mobile Optimisation | Performance Optimisation | Content Architecture | Conversion-Focused Design'
    ],
    images: [
      "/assets/img/service/inner-service/service-7.jpg",
      "/assets/img/service/inner-service/service-8.jpg",
    ],
  },
  {
    id: 6,

    title: "Vedaalayam – Education & Innovation Institute Website Design",

    descriptions: [
      "Vedaalayam – The Institute of Innovation is an education-focused initiative created to bring together the ancient Indian Gurukul system and modern scientific learning. The objective of the new website was to establish a modern, inspiring, and trustworthy digital presence that clearly communicates Vedaalayam’s educational philosophy, programs, vision, mission, and commitment to developing future innovators and leaders.",
    ],

    challenges: [
      "Complex educational philosophy needed to be communicated clearly",
      "Traditional Indian education concepts needed a modern digital presentation",
      "Multiple target audiences required better content organisation",
      "Educational programs needed clear categorisation",
      "Innovation, leadership, research, and career development needed stronger visual storytelling",
      "The brand required a credible and inspiring educational identity",
      "Important information needed to be presented without overwhelming visitors",
      "Stronger calls-to-action were required for applications, collaboration, and support",
      "The website needed to provide an engaging experience across desktop and mobile devices",
      "Educational content required an SEO-friendly structure for long-term organic visibility",
    ],

    solutionIntro:
      "We designed and developed a modern, responsive, and SEO-friendly real estate website focused on project discovery, brand credibility, visual presentation, and lead generation. The new website presents Harithams' core capabilities, including villa plot development, gated community layouts, apartments, individual villas, strategic land and infrastructure planning, and in-house sales and marketing.",

    solutions: [
      "Modern education website design",
      "Clean and professional UI / UX design",
      "Responsive website development",
      "Strong educational brand presentation",
      "Clear vision and mission sections",
      "Dedicated program categories",
      "Student-focused content presentation",
      "Innovation and creativity sections",
      "Leadership and entrepreneurship positioning",
      "Career guidance and skill development presentation",
      "Research and startup incubation content",
      "Educator and innovator program presentation",
      "Clear Apply Now, Collaborate, and Support call-to-action sections",
      "News and educational content sections",
      "Mobile-friendly website experience",
      "Structured navigation and content hierarchy",
      "Visual storytelling combining tradition and modern innovation",
    ],
    result: 'The new Vedaalayam website delivers a modern, inspiring, responsive, SEO-friendly, and education-focused digital experience.',
    tech: [
      'Website Design | UI/UX Design | Responsive Web Development | Education Website Design | Institute Website Development | SEO-Friendly Website Structure | Program Showcase | Content Architecture | Student-Focused UX | Lead Generation | Call-to-Action Optimisation | Mobile Optimisation | Performance Optimisation | Education SEO'
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
  result?: string;
  tech?: string[];
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
  result = "",
  tech = [],
  images,
  isLastItem = false,
}: InnerServiceItemProps) => {
  const [activeTab, setActiveTab] = useState<"challenges" | "solutions">(
    "challenges"
  );

  return (
    <div
      id={`major-service-${id}`}
      className={`major-inner-service-item ${!isLastItem ? "major-inner-service-spacing" : ""
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
                  className={`cs-tab-btn ${activeTab === "challenges" ? "active" : ""
                    }`}
                  onClick={() => setActiveTab("challenges")}
                >
                  Challenges ({challenges.length})
                </button>

                <button
                  type="button"
                  className={`cs-tab-btn ${activeTab === "solutions" ? "active" : ""
                    }`}
                  onClick={() => setActiveTab("solutions")}
                >
                  Solutions ({solutions.length})
                </button>
              </div>

              {/* Tab Content Cards */}
              <div className="cs-tab-body">
                <div key={activeTab} className="cs-list-container cs-fade-in">
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
                        className="cs-item"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <span className="cs-item-text">
                          {activeTab === "challenges" ? (
                            /* INLINE RED CROSS FONT ICON */
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#ff4d4d"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              style={{
                                display: "inline-block",
                                verticalAlign: "middle",
                                marginRight: "0.5rem",
                              }}
                            >
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                          ) : (
                            /* INLINE GREEN TICK FONT ICON */
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#22c55e"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              style={{
                                display: "inline-block",
                                verticalAlign: "middle",
                                marginRight: "0.5rem",
                              }}
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                          {item}
                        </span>
                      </div>
                    )
                  )}

                  {/* PROJECT RESULT SHOWS IN BOTH CHALLENGES & SOLUTIONS TABS */}
                  {result && (
                    <div
                      className="cs-result-container mt-4 p-3 rounded"
                      style={{
                        backgroundColor: "rgba(59, 130, 246, 0.08)",
                        borderLeft: "4px solid #3b82f6",
                      }}
                    >
                      <h6 className="cs-result-title fs-4 text-white text-tenor mb-2">
                        Project Result
                      </h6>
                      <p
                        className="cs-result-text mb-0 text-white text-figtree"
                        style={{ fontSize: "13px" }}
                      >
                        {result}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* =========================================
                TECH STACK BADGES (OUTSIDE BLUE BOX)
            ========================================= */}
            {/* =========================================
    TECH STACK SLIDER
========================================= */}
            {tech && tech.length > 0 && (
              <div className="cs-tech-stack mt-4 mb-4 text-figtree">
                <span
                  className="d-block mb-3 text-uppercase tracking-wider text-blue"
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "1px",
                  }}
                >
                  Technologies & Scope:
                </span>

                <Swiper
                  modules={[Autoplay]}
                  slidesPerView="auto"
                  spaceBetween={3}
                  freeMode={{
                    enabled: true,
                    momentum: true,
                  }}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  speed={6000}
                  loop={true}
                  className="cs-tech-swiper "
                >
                  {tech
                    .flatMap((techItem) => techItem.split("|"))
                    .map((item, idx) => {
                      const technology = item.trim();

                      if (!technology) return null;

                      return (
                        <SwiperSlide
                          key={`tech-${id}-${idx}`}
                          className="cs-tech-slide"
                        >
                          <span className="cs-tech-pill text-blue">
                            <span className="cs-tech-dot" />
                            {technology}
                          </span>
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
            )}
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
                Latest Case Studies
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

          <div className="col-lg-8 major-client-right-column">
            {innerClient.map((service, index) => (
              <MajorInnerItems
                key={service.id}
                id={service.id}
                title={service.title}
                descriptions={service.descriptions}
                challenges={service.challenges}
                solutionIntro={service.solutionIntro}
                solutions={service.solutions}
                result={service.result}
                tech={service.tech}
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