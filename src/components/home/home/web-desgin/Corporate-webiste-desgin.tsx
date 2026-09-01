"use client";

import React from "react";
import { motion } from "framer-motion";
import { useQuoteModal } from "../myComponents/Content/QuoteContext";
import BreadcrumbData from "@/components/breadcrum/sections/breadcrumbdata";
import IntroContent from "../myComponents/common/IntroContent";
import img from "@/assets/img/sample/Harithams.jpg";
import f1 from "@/assets/img/website/corporate/image-@.jpg";
import img1 from "@/assets/img/website/corporate/demo-0.jpg";
import img2 from "@/assets/img/website/corporate/demo-0.jpg";
import "./common.css";
import "./icon-design.css";
import a1 from "@/assets/img/website/corporate/Branding.jpg";
import a2 from "@/assets/img/website/corporate/Clear.jpg";
import a3 from "@/assets/img/website/corporate/Professional.jpg";
import a4 from "@/assets/img/website/corporate/Content.jpg";
import a5 from "@/assets/img/website/corporate/Security.jpg";
import a6 from "@/assets/img/website/corporate/SEO.jpg";
import bc from "@/assets/img/website/corporate/bc.jpg";
import br from "@/assets/img/website/corporate/br.jpg";
import bl from "@/assets/img/website/corporate/bl.jpg";
import img1_1 from "@/assets/img/website/corporate/1.1.jpg";
import img1_2 from "@/assets/img/website/corporate/1.2.jpg";
import img2_1 from "@/assets/img/website/corporate/2.1.jpg";
import img2_2 from "@/assets/img/website/corporate/2.2.jpg";
import img3_1 from "@/assets/img/website/corporate/3.1.jpg";
import img3_2 from "@/assets/img/website/corporate/3.2.jpg";
import img4_1 from "@/assets/img/website/corporate/4.1.jpg";
import img4_2 from "@/assets/img/website/corporate/4.2.jpg";
// import img2_2 from "@/assets/img/website/corporate/2.2.jpg";


import {
  FaShieldHalved,
  FaMagnifyingGlass,
  FaMobileScreenButton,
  FaGaugeHigh,
  FaUserCheck,
  FaChartLine,
  FaFileSignature,
  FaFileLines,
  FaUserShield,
  FaImages,
  FaClock,
  FaComments,
} from "react-icons/fa6";

import {
  FaPalette,
  FaBars,
  FaLaptop,
  FaFileAlt,
  FaShieldAlt,
  FaSearch,
} from "react-icons/fa";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaWordpress,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaShopify,
} from "react-icons/fa6";

import {
  FaObjectGroup,
  FaSliders,
  FaBarsStaggered,
  FaMagnifyingGlassChart,
  FaSitemap,
  FaGlobe,
  FaTabletScreenButton,
  FaFolderTree,
  FaServer,
  FaScrewdriverWrench,
} from "react-icons/fa6";

import { SiCodeigniter, SiWoocommerce, SiMysql } from "react-icons/si";
import AnimatedFeatureGrid from "../myComponents/common/AnimatedFeatureGrid";
import CorporateApproachGrid from "../myComponents/common/CorporateApproachGrid";
import { useAOS } from "@/components/hooks/useAOS";

interface WhyChooseUsProps {
  featuresList?: string[];
}

function CorporateWebsiteDesign({ featuresList }: WhyChooseUsProps) {
  const { openModal } = useQuoteModal();
  const stats = [
    { value: "50+", label: "Corporate Websites" },
    { value: "200+", label: "Active Clients" },
    { value: "150+", label: "Chennai Clients" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  const technologies = [
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "WordPress", icon: FaWordpress, color: "#21759B" },
    { name: "PHP", icon: FaPhp, color: "#777BB4" },
    { name: "CodeIgniter", icon: SiCodeigniter, color: "#EF4223" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Node Js", icon: FaNodeJs, color: "#339933" },
    { name: "WooCommerce", icon: SiWoocommerce, color: "#96588A" },
    { name: "Shopify", icon: FaShopify, color: "#95BF47" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  ];

  const corporate = [
    { text: "Professional and modern visual design", icon: <FaShieldHalved /> },
    {
      text: "Mobile-responsive and user-friendly layouts",
      icon: <FaMobileScreenButton />,
    },
    { text: "SEO-friendly website structure", icon: <FaMagnifyingGlass /> },
    {
      text: "Fast-loading and performance-focused development",
      icon: <FaGaugeHigh />,
    },
    {
      text: "Clear navigation and improved user experience",
      icon: <FaUserCheck />,
    },
    {
      text: "Scalable solutions that support business growth",
      icon: <FaChartLine />,
    },
  ];

  const features = [
    {
      icon: FaPalette,
      title: "Branding Consistency",
      description:
        "Your corporate website should represent your brand consistently across every page. We incorporate your logo, brand colors, typography, imagery, and communication style to create a unified visual identity.",
      image: a1,
    },
    {
      icon: FaBars,
      title: "Clear Navigation",
      description:
        "Visitors should be able to find the information they need quickly. We create logical page structures and intuitive navigation menus that make it easy for users to explore your website.",
      image: a2,
    },
    {
      icon: FaLaptop,
      title: "Professional Appearance",
      description:
        "A professional website creates a strong first impression. Our website designers in Chennai focus on clean layouts, quality visuals, balanced typography, attractive sections, and modern design elements.",
      image: a3,
    },
    {
      icon: FaFileAlt,
      title: "Content Strategy",
      description:
        "Good design works best when supported by relevant content. We organize your website content to clearly communicate your company profile, products, services, capabilities, achievements, and other important information.",
      image: a4,
    },
    {
      icon: FaShieldAlt,
      title: "Security and Reliability",
      description:
        "Website security is an important part of corporate website development. We consider SSL implementation, secure development practices, software updates, hosting requirements, and other appropriate security measures.",
      image: a5,
    },
    {
      icon: FaSearch,
      title: "SEO Optimization",
      description:
        "Search engine visibility is considered during the website creation process. We develop SEO-friendly page structures, headings, URLs, content sections, mobile responsiveness, and technical elements that provide a strong foundation for ongoing SEO.",
      image: a6,
    },
  ];

  const scopeOfWork = [
    {
      text: "Responsive Website Design",
      icon: FaMobileScreenButton,
      color: "#2563EB",
      bgColor: "#EFF6FF",
    },
    {
      text: "User Experience (UX) Design",
      icon: FaObjectGroup,
      color: "#7C3AED",
      bgColor: "#F5F3FF",
    },
    {
      text: "User Interface (UI) Design",
      icon: FaPalette,
      color: "#EC4899",
      bgColor: "#FDF2F8",
    },
    {
      text: "Slider and Banner Design",
      icon: FaSliders,
      color: "#F59E0B",
      bgColor: "#FFFBEB",
    },
    {
      text: "User-Friendly Navigation Menus",
      icon: FaBarsStaggered,
      color: "#10B981",
      bgColor: "#ECFDF5",
    },
    {
      text: "Website Usability Analysis",
      icon: FaMagnifyingGlassChart,
      color: "#06B6D4",
      bgColor: "#ECFEFF",
    },
    {
      text: "Website Performance Optimization",
      icon: FaGaugeHigh,
      color: "#EF4444",
      bgColor: "#FEF2F2",
    },
    {
      text: "Website Content Structure",
      icon: FaSitemap,
      color: "#8B5CF6",
      bgColor: "#F5F3FF",
    },
    {
      text: "Cross-Browser Testing",
      icon: FaGlobe,
      color: "#3B82F6",
      bgColor: "#EFF6FF",
    },
    {
      text: "Mobile and Tablet Compatibility",
      icon: FaTabletScreenButton,
      color: "#14B8A6",
      bgColor: "#F0FDFA",
    },
    {
      text: "Information Architecture",
      icon: FaFolderTree,
      color: "#6366F1",
      bgColor: "#EEF2FF",
    },
    {
      text: "Server Setup and Deployment",
      icon: FaServer,
      color: "#64748B",
      bgColor: "#F8FAFC",
    },
    {
      text: "Website Support and Maintenance",
      icon: FaScrewdriverWrench,
      color: "#D97706",
      bgColor: "#FFFBEB",
    },
    {
      text: "SEO-Friendly Website Structure",
      icon: FaMagnifyingGlass,
      color: "#059669",
      bgColor: "#ECFDF5",
    },
  ];

  const corporateApproach = [
    {
      id: 1,
      mainCategory: "1. Research",
      category: "1.1",
      title: "Discovery & Research",
      description:
        "The first stage is to understand your business requirements, target audience, competitors, industry, website objectives, and expected functionality. This information helps us establish a clear direction for the project.",
      image: img1_1,
      size: "large" as const,
    },
    {
      id: 2,
      mainCategory: "1. Research",
      category: "1.2",
      title: "Planning",
      description:
        "We define the website structure, sitemap, navigation, content requirements, functionality, technology, and development approach. A clear plan helps ensure that the website remains organized and aligned with your business goals.",
      image: img1_2,
      size: "small" as const,
    },
    {
      id: 3,
      mainCategory: "2. Design & Development",
      category: "2.1",
      title: "Design",
      description:
        "Our website designers in Chennai develop the visual concept of the website, including layouts, typography, colors, images, buttons, banners, and other UI elements. The design is created to reflect your brand identity and provide a positive user experience.",
      image: img2_1,
      size: "small" as const,
    },
    {
      id: 4,
      mainCategory: "2. Design & Development",
      category: "2.2",
      title: "Development",
      description:
        "Once the design is approved, our development team converts the design into a functional website using suitable web technologies. This may include front-end development, back-end development, CMS integration, database integration, forms, and other required functionality.",
      image: img2_2,
      size: "large" as const,
    },
    {
      id: 5,
      mainCategory: "3. Quality Assurance",
      category: "3.1",
      title: "Testing & Quality Assurance",
      description:
        "Before launching the website, we conduct functional and compatibility testing. We check responsiveness, navigation, forms, links, content display, browser compatibility, mobile compatibility, and other important website elements.",
      image: img3_1,
      size: "large" as const,
    },
    {
      id: 6,
      mainCategory: "3. Quality Assurance",
      category: "3.2",
      title: "Content Integration",
      description:
        "Website content such as text, images, videos, product information, service details, and other multimedia elements are organized and integrated into the website according to the approved structure.",
      image: img3_2,
      size: "small" as const,
    },
    {
      id: 7,
      mainCategory: "4. Deployment & Maintenance",
      category: "4.1",
      title: "Deployment",
      description:
        "After testing and client approval, the completed website is deployed to the live hosting server and made accessible to visitors.",
      image: img4_1,
      size: "small" as const,
    },
    {
      id: 8,
      mainCategory: "4. Deployment & Maintenance",
      category: "4.2",
      title: "Maintenance & Updates",
      description:
        "A website requires regular maintenance to remain secure, functional, and up to date. Depending on your requirements, we provide website maintenance, content updates, technical support, software updates, security assistance, and performance monitoring.",
      image: img4_2,
      size: "large" as const,
    },
  ];

  const whyChooseUs = [
    {
      number: "01",
      icon: FaFileSignature,
      title: "Defined Contracts",
      description:
        "Every project is clearly documented with agreed requirements, responsibilities, scope, and project terms.",
    },
    {
      number: "02",
      icon: FaFileLines,
      title: "Documented SoW",
      description:
        "We document the scope of work, deliverables, requirements, and project timelines to maintain clarity throughout the development process.",
    },
    {
      number: "03",
      icon: FaUserShield,
      title: "Complete Confidentiality",
      description:
        "We respect the confidentiality of your business information, project details, website content, and other sensitive project-related information.",
    },
    {
      number: "04",
      icon: FaImages,
      title: "Royalty Images",
      description:
        "Where applicable, we use royalty-free or appropriately licensed images to enhance the visual quality and professional appearance of your website.",
    },
    {
      number: "05",
      icon: FaClock,
      title: "On Time Delivery",
      description:
        "We follow a structured workflow to manage design, development, testing, and deployment efficiently and work toward delivering projects within the agreed timeline.",
    },
    {
      number: "06",
      icon: FaComments,
      title: "Meaningful Interactions",
      description:
        "We focus on understanding your actual business requirements and providing practical website solutions without unnecessary complexity.",
    },
  ];

  const galleryImages = [
    {
      src: bc.src,
      alt: "Corporate website design",
      className: "gallery-main",
    },
    {
      src: bl.src,
      alt: "Corporate website development",
      className: "gallery-small gallery-small-one",
    },
    {
      src: br.src,
      alt: "Corporate website",
      className: "gallery-small gallery-small-two",
    },
  ];

  const defaultFeatures = [
    "Defined Contracts: Every project is clearly documented with agreed requirements, responsibilities, scope, and project terms.",
    "Documented Scope of Work: We document the scope of work, deliverables, requirements, and project timelines to maintain clarity throughout the development process.",
    "Complete Confidentiality: We respect the confidentiality of your business information, project details, website content, and other sensitive project-related information.",
    "Royalty-Free / Licensed Images: Where applicable, we use royalty-free or appropriately licensed images to enhance the visual quality and professional appearance of your website.",
    "On-Time Delivery: We follow a structured workflow to manage design, development, testing, and deployment efficiently and work toward delivering projects within the agreed timeline.",
    "Meaningful Interactions: We focus on understanding your actual business requirements and providing practical website solutions without unnecessary complexity.",
  ];

  const activeFeatures =
    featuresList && featuresList.length > 0 ? featuresList : defaultFeatures;

  useAOS();

  return (
    <div>
      <BreadcrumbData />

      <IntroContent
        leftTitle="Website Creation Company in Chennai"
        rightTitle1="Professional Corporate "
        rightTitle2=" Website Design Services in Chennai"
        description="Yulanto is a professional website creation company in Chennai offering modern, responsive, and business-focused website design and development solutions for startups, small businesses, and established companies."
      />

      {/* About Section */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <span className="tp-section-subtitle text-black blink-ball">
              Start Your Design
            </span>
            <h4 className="px-about-title mb-20">
              <span className="text-blue-about">Company Website Design </span>
              in Chennai
            </h4>
          </div>

          <div className="col-md-7">
            <p className="text-figtree">
              Our corporate websites are designed to strengthen your online
              presence, communicate your brand effectively, and create
              meaningful interactions with your target audience.
              <br />
              <br />
              As an experienced website design agency in Chennai, we combine
              creative design, user-friendly navigation, responsive development,
              SEO-friendly structures, and reliable technology to create
              websites that support your business goals.
              <br />
              <br />
              Whether you need a new corporate website, a website redesign, or a
              customized business website, our team of experienced website
              designers in Chennai can create a professional digital platform
              tailored to your brand.
            </p>
          </div>

          <div className="col-md-5">
            <div className="stats-glass-card">
              <div className="stats-glow-bg" />

              <div className="stats-badge-tag">Startup Website Design</div>

              <div className="stats-grid-wrapper">
                {stats.map((item, index) => (
                  <div key={index} className="stat-box-item">
                    <div className="stat-value-num">{item.value}</div>
                    <div className="stat-label-text">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="professional-section">
        <div className="container py-5">
          <div className="row align-items-center pt-50">
            <div className="col-12 mb-4">
              <span className="tp-section-subtitle text-black blink-ball">
                Professional Web Design
              </span>

              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">
                  Professional Excellence{" "}
                </span>
                Best Web Designers in Chennai
              </h4>
            </div>

            <div className="col-lg-4 col-md-5 mb-4 mb-md-0">
              <div className="professional-image-wrapper">
                <img
                  src={f1.src}
                  alt="Corporate website design"
                  className="professional-image"
                />
              </div>
            </div>

            <div className="col-lg-8 col-md-7">
              <div className="professional-content">
                <p className="text-figtree">
                  A corporate website is more than an online presence — it is a
                  digital representation of your company. A professionally
                  designed website helps establish credibility, showcase your
                  products and services, communicate your expertise, and
                  generate valuable business enquiries.
                </p>

                <p className="professional-list-heading">
                  Our corporate website design services focus on:
                </p>

                <div className="corporate-features">
                  {corporate.map((item) => (
                    <div key={item.text} className="corporate-feature">
                      <div className="corporate-feature-icon">{item.icon}</div>

                      <div className="corporate-feature-content">
                        <span>{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-figtree mt-20">
                  As a trusted website design company in Chennai, we create
                  websites that balance attractive design with usability,
                  functionality, performance, and search engine visibility.
                </p>
              </div>
            </div>

            <div className="col-12">
              <div className="technologies-wrapper">
                <h4 className="text-center mt-3 text-tenor fw-bold">
                  Our <span className="text-blue-about">Technologies</span>
                </h4>
                <p>
                  We use modern and reliable web technologies to create
                  responsive, secure, scalable, and SEO-friendly websites.
                  Depending on your business requirements, our website
                  development solutions can be built using technologies and
                  platforms such as
                </p>

                <div className="tech-icons">
                  {technologies.map((tech) => {
                    const Icon = tech.icon;

                    return (
                      <div key={tech.name} className="tech-item">
                        <div className="tech-icon-wrapper">
                          <Icon
                            className="tech-icon"
                            style={{ color: tech.color }}
                          />
                        </div>

                        <span className="tech-name text-figtree">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-right"
        data-aos-delay={400}
        data-aos-once={true}
        style={{ backgroundColor: "#053456", margin: "100px auto" }}
      >
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-12">
              <span className="tp-section-subtitle text-white blink-ball">
                Expert Web Design Services
              </span>

              <h4 className="px-about-title mb-20 text-white">
                <span className="">Best Website </span>
                Designers in Chennai
              </h4>
            </div>

            <div className="row align-items-start">
              <div className="col-md-7">
                <p className="text-figtree text-white">
                  Your website is often the first point of interaction between
                  your business and potential customers. At Yulanto, we
                  understand the importance of creating a website that reflects
                  your company’s professionalism, values, products, services,
                  and brand identity.
                  <br />
                  Our team of experienced website designers in Chennai spends
                  considerable time understanding your business, target
                  audience, competitors, and objectives before beginning the
                  design process. This helps us create a website that is not
                  only visually appealing but also easy to navigate and
                  effective in generating enquiries.
                  <br />
                  <br />
                  As a dedicated website creation company in Chennai, we focus
                  on developing unique websites rather than relying on generic
                  designs. Every project is planned according to the client’s
                  business requirements, content, branding, functionality, and
                  future growth.
                  <br />
                  From corporate websites and business portals to customized
                  websites, our website creator in Chennai team provides
                  end-to-end design and development support.
                </p>
              </div>

              <div className="col-md-5">
                <div className="corporate-gallery">
                  {galleryImages.map((image, index) => (
                    <div key={index} className={image.className}>
                      <img src={image.src} alt={image.alt} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-start">
          {/* LEFT CONTENT */}
          <div className="col-md-7">
            <span className="tp-section-subtitle text-black blink-ball">
              Corporate Website Principles
            </span>

            <h4 className="px-about-title mb-20">
              <span className="text-blue-about">Best Website </span>
              Designers in Chennai
            </h4>
            <p className="text-figtree mb-0">
              A professionally developed corporate website can help improve your
              company’s online credibility, user engagement, brand visibility,
              and search engine presence. Our website design agency in Chennai
              considers every important aspect of the website before
              development.
            </p>
          </div>

          {/* RIGHT ANIMATED DESIGN */}
          <div className="col-md-5">
            <div className="corporate-design-animation">
              {/* Floating decorative circles */}
              <span className="design-orbit orbit-one"></span>
              <span className="design-orbit orbit-two"></span>

              {/* Browser Window */}
              <div className="design-browser">
                {/* Browser Header */}
                <div className="browser-header">
                  <div className="browser-dots">
                    <span className="bg-danger"></span>
                    <span className="bg-success"></span>
                    <span className="bg-warning"></span>
                  </div>

                  <div className="browser-address">www.yulanto.com</div>
                </div>

                {/* Website Preview */}
                <div className="browser-content">
                  <div className="preview-navbar">
                    <div className="preview-logo">YULANTO</div>

                    <div className="preview-nav-items">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>

                  <div className="preview-body">
                    <div className="preview-text">
                      <div className="preview-title">Corporate Website</div>

                      <p className="preview-description-text">
                        A professionally developed corporate website helps
                        improve online credibility, brand visibility, user
                        engagement, and search engine presence.
                      </p>

                      <div className="preview-button">Get Started</div>
                    </div>

                    <div className="preview-image">
                      <div className="preview-image-inner">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>

                  <div className="preview-loading"></div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="design-floating-card card-seo">
                <span className="floating-icon">⌕</span>

                <div>
                  <strong>SEO</strong>
                  <small>Optimized</small>
                </div>
              </div>

              <div className="design-floating-card card-mobile">
                <span className="floating-icon">✓</span>

                <div>
                  <strong>Responsive</strong>
                  <small>Mobile Ready</small>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE GRID */}
          <div className="col-12">
            <AnimatedFeatureGrid features={features} />
          </div>
        </div>
      </div>

      <div className="container mb-80">
        <div className="row justify-content-start mb-5">
          <div className="col-lg-8">
            <span className="tp-section-subtitle text-black blink-ball">
              Scope of Work
            </span>
            <h4 className="px-about-title mb-20">
              <span className="text-blue-about"> Our Corporate </span> Website
              Design & Development Services
            </h4>
          </div>
        </div>

        <div className="row g-4">
          {scopeOfWork.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="col-lg-4 col-md-6">
                <div
                  className="d-flex align-items-center p-3 rounded-4 border transition-all duration-300"
                  style={{
                    backgroundColor: "#ffffff",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.04)",
                    borderColor: "rgba(226, 232, 240, 0.8)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 14px 30px rgba(0, 0, 0, 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(0, 0, 0, 0.04)";
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 me-3 flex-shrink-0"
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: item.bgColor,
                      color: item.color,
                      fontSize: "20px",
                    }}
                  >
                    <Icon />
                  </div>
                  <span
                    className="fw-semibold text-dark text-figtree"
                    style={{ fontSize: "1rem" }}
                  >
                    {item.text}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container">
        <span className="tp-section-subtitle text-black blink-ball">
          Strategic Design Approach
        </span>

        <h4 className="px-about-title mb-20">
          <span className="text-blue-about">Our Approach to </span>
          Corporate Web Design
        </h4>

        <p className="text-figtree corporate-approach-intro">
          At Yulanto, we follow a structured website design and development
          process to ensure that every project is planned, designed, tested, and
          launched professionally.
        </p>

        <CorporateApproachGrid items={corporateApproach} />
      </div>

      <section className="why-corporate-section">
        <div className="container">
          <motion.div
            className="why-corporate-heading"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="col-12">
              <span className="tp-section-subtitle text-black blink-ball">
                Strategic Design Approach
              </span>
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">Why We are the top </span>
                choice for corporate web design
              </h4>
            </div>

            <p>
              Choosing the right website design company in Chennai can make a
              significant difference to your online presence. At Yulanto, we
              combine creative thinking, technical expertise, structured
              processes, and business understanding to deliver professional
              websites.
            </p>
          </motion.div>

          <div className="row g-4 mt-4">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.number} className="col-lg-4 col-md-6">
                  <motion.div
                    className="why-corporate-card"
                    initial={{ opacity: 0, y: 45 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{ y: -8 }}
                  >
                    <span className="why-card-number text-tenor">
                      {item.number}
                    </span>

                    <motion.div
                      className="why-card-icon"
                      whileHover={{ scale: 1.08, rotate: 3 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="why-card-icon-inner">
                        <Icon />
                      </div>
                    </motion.div>

                    <div className="why-card-content">
                      <h5 className="text-tenor">{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US & TRUSTED PARTNER (EXTENDED SECTION)
      ===================================================== */}
      {/* =====================================================
    WHY CHOOSE US & TRUSTED PARTNER (EXTENDED SECTION)
===================================================== */}
      <div
        className=""
        data-aos="fade-right"
        data-aos-delay={400}
        data-aos-once={true}
      >
        <div className="container" >
          {/* MAIN HEADING BLOCK */}
          <div className="row justify-content-start mb-5">
            <div className="col-lg-12">
              <span className="tp-section-subtitle text-black blink-ball">
                Complete Digital Excellence
              </span>

              <h2 className="px-about-title mb-20">
                Why Choose Us for{" "}
                <span className="text-blue-about">
                  Corporate Website Design?
                </span>
              </h2>

              <p className="text-figtree lead-text">
                Choosing the right website design company in Chennai can make a
                significant difference to your online presence. At Yulanto, we
                combine creative thinking, technical expertise, structured
                processes, and business understanding to deliver professional
                websites.
              </p>
            </div>
          </div>

          {/* 6-CARD GRID FOR HIGHLIGHTS WITH ICONS */}
          <div className="row g-4 mb-80">
            {[
              {
                icon: FaFileSignature,
                title: "Defined Contracts",
                desc: "Every project is clearly documented with agreed requirements, responsibilities, scope, and project terms.",
              },
              {
                icon: FaFileLines,
                title: "Documented Scope of Work",
                desc: "We document the scope of work, deliverables, requirements, and project timelines to maintain clarity throughout the development process.",
              },
              {
                icon: FaUserShield,
                title: "Complete Confidentiality",
                desc: "We respect the confidentiality of your business information, project details, website content, and other sensitive project-related information.",
              },
              {
                icon: FaImages,
                title: "Royalty-Free / Licensed Images",
                desc: "Where applicable, we use royalty-free or appropriately licensed images to enhance the visual quality and professional appearance of your website.",
              },
              {
                icon: FaClock,
                title: "On-Time Delivery",
                desc: "We follow a structured workflow to manage design, development, testing, and deployment efficiently and work toward delivering projects within the agreed timeline.",
              },
              {
                icon: FaComments,
                title: "Meaningful Interactions",
                desc: "We focus on understanding your actual business requirements and providing practical website solutions without unnecessary complexity.",
              },
            ].map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <div key={idx} className="col-lg-4 col-md-6">
                  <div className="extended-feature-card">
                    <div className="card-accent-bar" />
                    <div
                      className="card-icon-wrapper mb-3 d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: "45px",
                        height: "45px",
                        backgroundColor: "#eff6ff",
                        color: "#053456",
                        fontSize: "1.2rem",
                      }}
                    >
                      <IconComponent />
                    </div>
                    <h5>{card.title}</h5>
                    <p>{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* TRUSTED PARTNER & CTA BANNER */}
          <div className="trusted-partner-banner mb-80">
            <div className="row align-items-center">
              <div className="col-lg-8 mb-4 mb-lg-0">
                <span className="partner-badge">Your Trusted Partner</span>
                <h3>Your Trusted Website Design Partner in Chennai</h3>

                <p className="banner-desc">
                  A successful corporate website should look professional, work
                  smoothly, communicate your business clearly, and provide a
                  strong foundation for digital marketing and SEO.
                </p>

                <p className="banner-desc">
                  As a website creation company in Chennai, Yulanto provides
                  complete website design and development solutions focused on
                  quality, usability, performance, and business growth. Our
                  experienced website creator in Chennai team works closely with
                  clients to transform ideas into professional websites that
                  represent their brands effectively.
                </p>

                <p className="banner-footer-text">
                  If you are looking for a website design agency in Chennai, a
                  reliable website design company in Chennai, or experienced
                  website designers in Chennai, Yulanto can help you create a
                  professional online presence tailored to your business.
                </p>
              </div>

              <div className="col-lg-4  text-start">
                <div className="cta-box">
                  <h4>Let’s build something great together.</h4>
                  <p>
                    Let’s create a website that represents your brand, engages
                    your customers, and supports your business growth.
                  </p>
                  <button onClick={openModal} className="cta-button">
                    Talk to Our Experts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CorporateWebsiteDesign;
