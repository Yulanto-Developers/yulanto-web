"use client";

import React from "react";
import { motion } from "framer-motion";
import BreadcurmbData from "@/components/breadcrum/sections/breadcrumbdata";
import IntroContent from "../myComponents/common/IntroContent";
import img from "@/assets/img/sample/Harithams.jpg";
import "./common.css";
import "./icon-design.css";

import {
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaJs,
    FaReact,
    FaNodeJs,
    FaPhp,
    FaFileSignature,
    FaFileLines,
    FaUserShield,
    FaImages,
    FaClock,
    FaComments,
} from "react-icons/fa6";

import { SiJquery, SiMysql } from "react-icons/si";
import {
    FaPalette,
    FaBars,
    FaLaptop,
    FaFileAlt,
    FaShieldAlt,
    FaSearch,
} from "react-icons/fa";
import AnimatedFeatureGrid from "../myComponents/common/AnimatedFeatureGrid";
import { imageOptimizer } from "next/dist/server/image-optimizer";
import CorporateApproachGrid from "../myComponents/common/CorporateApproachGrid";

function Corporatewebistedesgin() {
    const stats = [
        { value: "50+", label: "Corporate Websites" },
        { value: "200+", label: "Happy Clients" },
        { value: "150+", label: "Chennai Clients" },
        { value: "100%", label: "Client Satisfaction" },
    ];

    const technologies = [
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "Bootstrap", icon: FaBootstrap },
        { name: "JavaScript", icon: FaJs },
        { name: "jQuery", icon: SiJquery },
        { name: "React.js", icon: FaReact },
        { name: "Node.js", icon: FaNodeJs },
        { name: "PHP", icon: FaPhp },
        { name: "MySQL", icon: SiMysql },
    ];

    const features = [
        {
            icon: FaPalette,
            title: "Branding Consistency",
            description:
                "Corporate websites should reflect the organization's brand identity, including its logo, color scheme, typography, and tone of voice. Consistency across all branding elements helps to reinforce brand recognition and trust.",
            image: img,
        },
        {
            icon: FaBars,
            title: "Clear Navigation",
            description:
                "A clear and intuitive navigation structure is essential for corporate websites, allowing visitors to easily find the information they're looking for.",
            image: img,
        },
        {
            icon: FaLaptop,
            title: "Professional Appearance",
            description:
                "Corporate websites should convey professionalism and credibility. This includes high-quality visuals, clean layout designs, and attention to detail in all aspects of the site's presentation.",
            image: img,
        },
        {
            icon: FaFileAlt,
            title: "Content Strategy",
            description:
                "Content should be carefully planned and crafted to align with the organization's goals and target audience.",
            image: img,
        },
        {
            icon: FaShieldAlt,
            title: "Security and Compliance",
            description:
                "Corporate websites often handle sensitive information, so security measures such as SSL certificates, data encryption, and compliance with relevant regulations are essential.",
            image: img,
        },
        {
            icon: FaSearch,
            title: "SEO Optimization",
            description:
                "Optimizing the website for search engines is important for improving visibility and driving organic traffic.",
            image: img,
        },
    ];

    const corporateApproach = [
        {
            id: 1,
            category: "Research",
            title: "Discovery and Research",
            description:
                "This phase involves understanding the client\'s requirements, target audience, and goals for the website.Research into competitors and industry trends also occurs during this stage. In this stage, you outline the site map, structure, and technologies to be used. Content strategy, such as what information will be presented and how it will be organized, is also defined.",
            image: img,
            size: "large" as const,
        },
        {
            id: 2,
            category: "Planning",
            title: "Planning",
            description:
                "This is where the visual aspects of the website start taking shape. Wireframes are created to outline the layout and structure, followed by the design of the user interface (UI) elements, including colors, typography, and imagery. ilding the website using HTML, CSS, JavaScript, and other relevant technologies. This stage involves both front-end development (client-side) and back-end  development (server-side).",
            image: img,
            size: "small" as const,
        },
        {
            id: 3,
            category: "Design",
            title: "Design & Development",
            description:
                "Before launch, the website undergoes thorough testing to ensure functionality,compatibility across different browsers and devices, and responsiveness. Bugs and issues are identified and resolved during this stage. >Content is created or gathered for  the website, including text, images, videos, and other multimedia elements. This content is then integrated into the  website during development",
            image: img,
            size: "small" as const,
        },
        {
            id: 4,
            category: "Quality",
            title: "Testing and Quality Assurance",
            description:
                "Once the website has been thoroughly tested and approved by the client, it is deployed to the live server where it becomes accessible to the public. After launch, the website requires  ongoing maintenance to ensure its performance, security, and  relevance. This includes regular updates to content, softwarepatches, and monitoring for any issues or improvements that may be needed.",
            image: img,
            size: "large" as const,
        },
    ];

    const whyChooseUs = [
        {
            number: "01",
            icon: FaFileSignature,
            title: "Defined Contracts",
            description:
                "Every project we undertake necessitates the signing of a Non-Disclosure Agreement (NDA).",
        },
        {
            number: "02",
            icon: FaFileLines,
            title: "Documented SoW",
            description:
                "We ensure that the scope of work and timelines are documented in writing.",
        },
        {
            number: "03",
            icon: FaUserShield,
            title: "Complete Confidentiality",
            description:
                "Customer confidentiality is guaranteed by us throughout the entire project.",
        },
        {
            number: "04",
            icon: FaImages,
            title: "Royalty Images",
            description:
                "We incorporate royalty images to elevate the enrichment and uniqueness of your website.",
        },
        {
            number: "05",
            icon: FaClock,
            title: "On Time Delivery",
            description:
                "Our dedication lies in consistently delivering on our promises and agreed timelines.",
        },
        {
            number: "06",
            icon: FaComments,
            title: "Meaningful Interactions",
            description:
                "We focus on the core matter without any unnecessary distractions.",
        },
    ];

    return (
        <div>
            <BreadcurmbData />

            <IntroContent
                leftTitle="From Vision to Reality"
                rightTitle1="Real Projects."
                rightTitle2=" Creative Solutions. Real Results."
                description="Explore our successful projects and discover how we transform ideas into engaging, innovative, and impactful digital experiences that help businesses grow and stand out online."
            />

            {/* About Section */}
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12">
                        <h4 className="px-about-title mb-20">
                            <span className="text-blue-about">
                                Company Website Design{" "}
                            </span>
                            in Chennai
                        </h4>
                    </div>

                    <div className="col-md-7">
                        <p className="text-figtree">
                            Corporate web design focuses on creating websites for
                            businesses or organizations that represent their brand
                            identity, communicate their message effectively, and serve
                            their business goals.
                            <br />
                            <br />
                            Corporate web design should prioritize functionality,
                            usability, and professionalism while effectively
                            communicating the organization's brand and value proposition
                            to its target audience.
                        </p>
                    </div>

                    <div className="col-md-5">
                        <div className="stats-glass-card">
                            <div className="stats-glow-bg" />

                            <div className="stats-badge-tag">
                                Startup Website Design
                            </div>

                            <div className="stats-grid-wrapper">
                                {stats.map((item, index) => (
                                    <div key={index} className="stat-box-item">
                                        <div className="stat-value-num">
                                            {item.value}
                                        </div>

                                        <div className="stat-label-text">
                                            {item.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Professional Excellence Section */}
            <div className="professional-section">
                <div className="container my-5">
                    <div className="row align-items-center pt-50">
                        <div className="col-12">
                            <h4 className="px-about-title mb-20">
                                <span className="text-blue-about">
                                    Professional Excellence
                                </span>{" "}
                                Best Web Designers in Chennai
                            </h4>
                        </div>

                        {/* Image */}
                        <div className="col-md-4">
                            <img
                                src={img.src}
                                alt="Corporate website design"
                                className="img-border-cls"
                            />
                        </div>

                        {/* Content */}
                        <div className="col-md-8">
                            <p className="text-figtree">
                                We recognize the importance of a Corporate website in
                                representing your business's brand identity to a
                                worldwide audience. Yulanto is equipped with the
                                essential expertise to guarantee that your website is
                                not only visually appealing but also delivers precise
                                information, functionality, and efficiency.
                                <br />
                                <br />
                                Our commitment extends beyond the mere development of a
                                Corporate website; we aim to provide your brand identity
                                with an unmatched level of quality and performance. Our
                                team invests substantial time and effort into
                                conceptualizing and designing each website, ensuring
                                its uniqueness and competitive edge.
                            </p>
                        </div>

                        {/* Technology Icons */}
                        <div className="col-12">

                            <div className="tech-icons">
                                {technologies.map((tech) => {
                                    const Icon = tech.icon;

                                    return (
                                        <div
                                            key={tech.name}
                                            className="tech-item"
                                        >
                                            <Icon className="tech-icon" />

                                            <span>{tech.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                            <h4 className="text-center pt-5 text-tenor fw-bold fs-5">Our Technologies</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12">
                        <h4 className="px-about-title mb-20">
                            <span className="text-blue-about">
                                Key Considerations are {" "}
                            </span>
                            Involved in Corporate Web Design
                        </h4>
                    </div>

                    <div className="col-md-12">
                        <p className="text-figtree">
                            A meticulously crafted and thoroughly constructed corporate website not only boosts your company
                            to a leading position on the Search engine but also enhances overall visibility and top ranking
                            in search engines.

                        </p>
                    </div>
                    <div>
                      
                        <AnimatedFeatureGrid features={features} />
                    </div>
                    <div className="container">
                          <h4 className="px-about-title mb-20">
                            <span className="text-blue-about">
                                Our Approach in  {" "}
                            </span>
                            Corporate
                            Web Design
                        </h4>
                        <CorporateApproachGrid items={corporateApproach} />
                    </div>
                    {/* =====================================================
    WHY CHOOSE US
===================================================== */}

                    <section className="why-corporate-section">

                        <div className="container">

                            {/* SECTION HEADING */}

                            <motion.div
                                className="why-corporate-heading"
                                initial={{
                                    opacity: 0,
                                    y: 35,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.3,
                                }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                            >

                                <div className="why-corporate-label">
                                    <span></span>
                                    WHY CHOOSE US
                                    <span></span>
                                </div>

                                <h2>
                                    Why We are the top
                                    <br />
                                    <span>choice for corporate web design</span>
                                </h2>

                                <div className="why-corporate-heading-line">
                                    <span></span>
                                </div>

                                <p>
                                    With the support of a top-notch, well-trained, and highly
                                    skilled team of professionals, we guarantee the highest
                                    quality corporate web design services that are unmatched
                                    in the industry.
                                </p>

                            </motion.div>


                            {/* =================================================
            CARDS
        ================================================= */}

                            <div className="row g-4 mt-4">

                                {whyChooseUs.map((item, index) => {

                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.number}
                                            className="col-lg-4 col-md-6"
                                        >

                                            <motion.div
                                                className="why-corporate-card"
                                                initial={{
                                                    opacity: 0,
                                                    y: 45,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                viewport={{
                                                    once: true,
                                                    amount: 0.2,
                                                }}
                                                transition={{
                                                    duration: 0.6,
                                                    delay: index * 0.08,
                                                    ease: [0.16, 1, 0.3, 1],
                                                }}
                                                whileHover={{
                                                    y: -8,
                                                }}
                                            >

                                                {/* NUMBER */}

                                                <span className="why-card-number">
                                                    {item.number}
                                                </span>


                                                {/* ICON */}

                                                <motion.div
                                                    className="why-card-icon"
                                                    whileHover={{
                                                        scale: 1.08,
                                                        rotate: 3,
                                                    }}
                                                    transition={{
                                                        duration: 0.25,
                                                    }}
                                                >

                                                    <div className="why-card-icon-inner">
                                                        <Icon />
                                                    </div>

                                                </motion.div>


                                                {/* CONTENT */}

                                                <div className="why-card-content">

                                                    <h3>
                                                        {item.title}
                                                    </h3>

                                                    <div className="why-card-line"></div>

                                                    <p>
                                                        {item.description}
                                                    </p>

                                                </div>


                                                {/* DECORATIVE DOT */}

                                                <span className="why-card-dot"></span>

                                            </motion.div>

                                        </div>
                                    );
                                })}

                            </div>

                        </div>

                    </section>
                </div>
            </div>
        </div>
    );
}

export default Corporatewebistedesgin;