'use client'
import React, { useEffect, useState } from 'react'
import BreadcurmbData from '@/components/breadcrum/sections/breadcrumbdata'
import IntroContent from '../myComponents/common/IntroContent'
import StickyScrollReveal from './StickyScrollReveal'
import img from '@/assets/img/sample/Harithams.jpg'
import img2 from '@/assets/img/sample/Naturographers.jpg';
import { PhotoGallery } from './gallery';
import IndustryGallery from './IndustryGallery';
import './industry-gallery.css';
import './gallery-card.css';
import './common.css';
import img1 from '@/assets/img/website/startup/image-@.jpg'
import {
    FaCartShopping,
    FaShirt,
    FaBoxOpen,
    FaCar,
    FaStar,
    FaBuilding,
    FaCouch,
    FaGears,
    FaGlobe,
    FaPlane,
    FaBriefcase,
    FaGraduationCap,
    FaIndustry,
} from 'react-icons/fa6';
import {
    CheckCircle2,
    Smartphone,
    Navigation,
    Search,
    Gauge,
    TrendingUp,
    Layers3,
    Palette,
    UsersRound,

    SearchCheck,
    WalletCards,

    FileSearch,

    ListTree,

    Image as ImageIcon,

    Link2,
    Link as LinkIcon,
    Target,
    BadgeCheck,
    Cpu,
    Handshake,
} from "lucide-react";
import "./status-badge.css";
import Badge from './Badge';
import { useAOS } from "@/components/hooks/useAOS";
import v1 from '@/assets/img/website/startup/vector/vec-1.png'
import v2 from '@/assets/img/website/startup/vector/vec-2.png'
import v3 from '@/assets/img/website/startup/vector/vec-3.png'
import v4 from '@/assets/img/website/startup/vector/vec-4.png'
import v5 from '@/assets/img/website/startup/vector/vec-5.png'
import v6 from '@/assets/img/website/startup/vector/vec-6.png'
import v7 from '@/assets/img/website/startup/vector/vec-7.png'
import v8 from '@/assets/img/website/startup/vector/vec-8.png'
import v9 from '@/assets/img/website/startup/vector/vec-9.png'
import v10 from '@/assets/img/website/startup/vector/vec-10.png'
import v11 from '@/assets/img/website/startup/vector/vec-11.png'
import v12 from '@/assets/img/website/startup/vector/vec-12.png'
import v13 from '@/assets/img/website/startup/vector/vec-13.png'
import en1 from '@/assets/img/website/startup/image-1.jpg'
import en2 from '@/assets/img/website/startup/image-2.jpg'
import en3 from '@/assets/img/website/startup/image-3.jpg'
import en4 from '@/assets/img/website/startup/image-4.jpg'
import sc1 from '@/assets/img/website/startup/Step-by-Step-1.jpg'
import sc2 from '@/assets/img/website/startup/Step-by-Step-2.jpg'
import sc3 from '@/assets/img/website/startup/Step-by-Step-3.jpg'
import sc4 from '@/assets/img/website/startup/Step-by-Step-4.jpg'
import sc5 from '@/assets/img/website/startup/Step-by-Step-5.jpg'
import sc7 from '@/assets/img/website/startup/Step-by-Step-7.jpg'
import sc6 from '@/assets/img/website/startup/Step-by-Step-6.jpg'

function Startupwebsitedesign() {
    const consultationText = " Let's build your website and create your online success story."
    const [typedConsultationText, setTypedConsultationText] = useState('')

    useEffect(() => {
        let characterIndex = 0
        const typingTimer = window.setInterval(() => {
            if (characterIndex >= consultationText.length) {
                characterIndex = 0
                setTypedConsultationText('')
            }

            characterIndex += 1
            setTypedConsultationText(consultationText.slice(0, characterIndex))
        }, 8)

        return () => window.clearInterval(typingTimer)
    }, [])

    const stats = [
        { value: '250+', label: 'Startup Websites' },
        { value: '200+', label: 'Active Clients' },
        { value: '150+', label: 'Chennai Clients' },
        { value: '100%', label: 'Client Satisfaction' },
    ];

    const industries = [
        {
            id: 1,
            name: "Retail and eCommerce",
            icon: <FaCartShopping />,
            image: v1.src,
            description:
                "High-converting websites designed for modern retail and eCommerce businesses.",
        },
        {
            id: 2,
            name: "Clothing and fashion",
            icon: <FaShirt />,
            image: v2.src,
            description:
                "Modern digital experiences for fashion and clothing brands.",
        },
        {
            id: 3,
            name: "FMCG and consumer products",
            icon: <FaBoxOpen />,
            image: v3.src,
            description:
                "Professional websites for consumer product businesses.",
        },
        {
            id: 4,
            name: "Automotive",
            icon: <FaCar />,
            image: v4.src,
            description:
                "Powerful websites for automotive businesses and brands.",
        },
        {
            id: 5,
            name: "Beauty and lifestyle",
            icon: <FaStar />,
            image: v5.src,
            description:
                "Elegant websites for beauty and lifestyle businesses.",
        },
        {
            id: 6,
            name: "Real estate",
            icon: <FaBuilding />,
            image: v6.src,
            description:
                "Property-focused websites built to generate quality leads.",
        },
        {
            id: 7,
            name: "Interior design",
            icon: <FaCouch />,
            image: v7.src,
            description:
                "Visual-first websites for interior designers and studios.",
        },
        {
            id: 8,
            name: "Engineering",
            icon: <FaGears />,
            image: v8.src,
            description:
                "Professional digital platforms for engineering businesses.",
        },
        {
            id: 9,
            name: "Import and export",
            icon: <FaGlobe />,
            image: v9.src,
            description:
                "Global-facing websites for import and export companies.",
        },
        {
            id: 10,
            name: "Travel and tourism",
            icon: <FaPlane />,
            image: v10.src,
            description:
                "Engaging websites designed for travel and tourism businesses.",
        },
        {
            id: 11,
            name: "Professional services",
            icon: <FaBriefcase />,
            image: v11.src,
            description:
                "Credibility-focused websites for professional service providers.",
        },
        {
            id: 12,
            name: "Education and institutions",
            icon: <FaGraduationCap />,
            image: v12.src,
            description:
                "Informative and accessible websites for educational institutions.",
        },
        {
            id: 13,
            name: "Manufacturing & industrial",
            icon: <FaIndustry />,
            image: v13.src,
            description:
                "Strong digital presence for manufacturing and industrial companies.",
        },
    ];

    const websiteBenefits = [
        {
            label: "Professional and modern",
            icon: CheckCircle2,
            variant: "professional" as const,
        },
        {
            label: "Mobile-friendly and responsive",
            icon: Smartphone,
            variant: "responsive" as const,
        },
        {
            label: "Easy to navigate",
            icon: Navigation,
            variant: "navigation" as const,
        },
        {
            label: "SEO-friendly",
            icon: Search,
            variant: "seo" as const,
        },
        {
            label: "Fast and performance-focused",
            icon: Gauge,
            variant: "performance" as const,
        },
        {
            label: "Conversion-oriented",
            icon: TrendingUp,
            variant: "conversion" as const,
        },
        {
            label: "Scalable for future business growth",
            icon: Layers3,
            variant: "scalable" as const,
        },
    ];


    const startupBenefitsContent = [
        {
            type: "intro",
            content:
                "A professionally designed website acts as your startup's digital storefront. It gives customers a clear understanding of your business and creates a strong foundation for your online marketing activities.",
        },

        {
            type: "section",
            number: "01",
            title: "Build a Strong Brand Identity",
            icon: Palette,
            image: en1.src,
            content:
                "Your website should communicate your startup's personality and values. We use consistent typography, colors, imagery, layouts, and visual elements to create a recognizable digital identity.",
        },

        {
            type: "section",
            number: "02",
            title: "Improve User Experience",
            icon: UsersRound,
            image: en2.src,
            content: (
                <>
                    Our <strong>web designers in Chennai</strong> create clean and
                    intuitive interfaces that make it easier for visitors to find
                    information, explore your services, and take action.
                </>
            ),
        },

        {
            type: "section",
            number: "03",
            title: "Generate More Business Opportunities",
            icon: TrendingUp,
            image: en3.src,
            content:
                "Strategic page structures, clear calls-to-action, enquiry forms, contact options, and conversion-focused layouts help turn website visitors into potential customers.",
        },

        {
            type: "section",
            number: "04",
            title: "Support Search Engine Visibility",
            icon: SearchCheck,
            image: en4.src,
            content:
                "Our websites are developed with SEO considerations in mind, providing a strong technical foundation for future search engine optimization and digital marketing campaigns.",
        },

        {
            type: "heading",
            icon: WalletCards,
            title: "Budget-Friendly Web Design for Startups",
        },



        {
            type: "paragraph",
            content:
                "We create cost-effective website solutions based on your business requirements while maintaining professional design, functionality, usability, and performance.",
        },

        {
            type: "paragraph",
            content:
                "Whether you need a simple corporate website, a startup business website, WordPress website, eCommerce website, or a customized web solution, we can create a package suitable for your requirements.",
        },
    ];

    const seoApproach = [
        {
            name: "SEO-friendly website structure",
            icon: SearchCheck,
        },
        {
            name: "Search-friendly page content",
            icon: FileSearch,
        },
        {
            name: "Mobile-responsive design",
            icon: Smartphone,
        },
        {
            name: "Optimized headings and page hierarchy",
            icon: ListTree,
        },
        {
            name: "Fast-loading pages",
            icon: Gauge,
        },
        {
            name: "Image optimization",
            icon: ImageIcon,
        },
        {
            name: "Clean navigation",
            icon: Navigation,
        },
        {
            name: "Internal linking opportunities",
            icon: Link2,
        },
        {
            name: "SEO-friendly URLs",
            icon: LinkIcon,
        },
        {
            name: "Conversion-focused landing pages",
            icon: Target,
        },
    ];

    const startupProcessContent = [
        {
            title: "Understand Your Business",

            description:
                "We begin by understanding your startup, products or services, target audience, competitors, business objectives, and long-term goals.",

            image: sc1.src,
        },

        {
            title: "Develop Your Brand Story",

            description:
                "Your website should clearly communicate who you are, what you offer, and why customers should choose you. We structure your content to communicate your startup's story and value proposition effectively.",

            image: sc2.src,
        },

        {
            title: "Create a Strong Visual Identity",

            description:
                "We design the website around your brand identity using appropriate colors, typography, imagery, icons, graphics, and layouts to create a consistent visual experience.",

            image: sc3.src,
        },

        {
            title: "Prioritize User Experience",

            description: (
                <>
                    Our <strong>web designers in Chennai</strong> focus on
                    intuitive navigation, responsive layouts, readable
                    content, clear information architecture, and
                    user-friendly interfaces.
                </>
            ),

            image: sc4.src,
        },

        {
            title: "Create Conversion-Focused Pages",

            description:
                "We strategically structure website pages with clear calls-to-action to encourage visitors to enquire, call, submit a form, request a quotation, or purchase a product.",

            image: sc5.src,
        },

        {
            title: "Develop an SEO-Friendly Website",

            description:
                "We consider technical and on-page SEO requirements during the website design and development process to create a solid foundation for future search engine optimization.",

            image: sc6.src,
        },

        {
            title: "Test, Launch and Improve",

            description:
                "Before launch, we review the website across devices and screen sizes, check functionality, and make necessary improvements. After launch, the website can be continuously enhanced based on business requirements and user behavior.",

            image: sc7.src,
        },
    ];

    const whyChooseUs = [
        {
            number: "01",
            title: "In-House Team",
            description:
                "Your project is handled by our in-house team rather than being routinely delegated to external sources, helping us maintain better communication and quality control.",
            icon: UsersRound,
        },
        {
            number: "02",
            title: "Trusted by Satisfied Customers",
            description:
                "Our experience comes from successfully delivering websites for businesses across different industries and building long-term client relationships.",
            icon: BadgeCheck,
        },
        {
            number: "03",
            title: "Technical Competency",
            description:
                "Our team continuously develops its technical and creative skills to deliver modern website solutions using relevant technologies and platforms.",
            icon: Cpu,
        },
        {
            number: "04",
            title: "Friendly and Approachable",
            description:
                "We believe website development should be a collaborative process. Our team maintains clear communication and provides practical support throughout the project.",
            icon: Handshake,
        },
        {
            number: "05",
            title: "Budget Friendly",
            description:
                "We understand startup budgets and focus on delivering the right combination of design, functionality, performance, and value.",
            icon: WalletCards,
        },
    ];

    const ambassadorCard = {
        default: {
            title: "Our Work. Our Ambassador.",
            content: (
                <>
                    Our completed projects and long-term client relationships
                    demonstrate the quality of our work.{" "}
                    <strong>
                        Our success speaks for us—not just our sales pitch.
                    </strong>
                </>
            ),
        },

        hover: {
            title: "Start Your Website Project Today",
            content: (
                <>
                    Looking for the{" "}
                    <strong>best web design in Chennai</strong> for your startup?
                    Talk to our team today and take the first step towards
                    building a professional, credible, and growth-focused
                    online presence.
                </>
            ),
        },
    };

    const startupGalleryImages = [
        {
            id: 1,
            src: img.src,
            alt: "Startup website design",
            x: -320,
            y: 15,
            order: 0,
            zIndex: 50,
            direction: "left" as const,
        },
        {
            id: 2,
            src: img.src,
            alt: "Business website design",
            x: -160,
            y: 32,
            order: 1,
            zIndex: 40,
            direction: "left" as const,
        },
        {
            id: 3,
            src: img.src,
            alt: "Modern website design",
            x: 0,
            y: 8,
            order: 2,
            zIndex: 30,
            direction: "right" as const,
        },
        {
            id: 4,
            src: img.src,
            alt: "Corporate website design",
            x: 160,
            y: 22,
            order: 3,
            zIndex: 20,
            direction: "right" as const,
        },
        {
            id: 5,
            src: img.src,
            alt: "Startup web design",
            x: 320,
            y: 44,
            order: 4,
            zIndex: 10,
            direction: "left" as const,
        },
    ];
    useAOS();
    return (

        <div>
            <div className='mb-50' >
                <BreadcurmbData />
            </div>
            <style>{`
        @keyframes fadeInText {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ambientGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.15); }
        }
        .animate-fade-in {
          animation: fadeInText 0.35s ease-out forwards;
        }
        .text-tenor-large {
          font-size: 25px !important;
        }

        
      `}</style>

            <IntroContent data-aos='fade-up'
                leftTitle={'Startup Website Design'}
                rightTitle1={'Web Designing Company'}
                rightTitle2={' in Chennai for Startups.'}
                description={'Launch your business with a professional, high-performing website designed to build credibility, attract customers, and support long-term growth. '}
                css='mt-5'
            />

            {/* <PhotoGallery
                images={[
                    {
                        id: 1,
                        src: "/assets/img/gallery/startup-1.jpg",
                        alt: "Startup website design",
                        x: -320,
                        y: 15,
                        order: 0,
                        zIndex: 50,
                        direction: "left",
                    },
                    {
                        id: 2,
                        src: "/assets/img/gallery/startup-2.jpg",
                        alt: "Business website design",
                        x: -160,
                        y: 32,
                        order: 1,
                        zIndex: 40,
                        direction: "left",
                    },
                    {
                        id: 3,
                        src: "/assets/img/gallery/startup-3.jpg",
                        alt: "Modern website design",
                        x: 0,
                        y: 8,
                        order: 2,
                        zIndex: 30,
                        direction: "right",
                    },
                    {
                        id: 4,
                        src: "/assets/img/gallery/startup-4.jpg",
                        alt: "Corporate website design",
                        x: 160,
                        y: 22,
                        order: 3,
                        zIndex: 20,
                        direction: "right",
                    },
                    {
                        id: 5,
                        src: "/assets/img/gallery/startup-5.jpg",
                        alt: "Startup web design",
                        x: 320,
                        y: 44,
                        order: 4,
                        zIndex: 10,
                        direction: "left",
                    },
                ]}
            /> */}
            <PhotoGallery images={startupGalleryImages} />

            <div className='container mt-5' data-aos='fade-up' data-aos-delay={400} data-aos-once={true}>
                <div className='row align-items-center'>
                    <div className="col-xl-12">
                        <div className="px-project-title-box">
                            <span className="tp-section-subtitle text-black blink-ball">
                                Start Your Design
                            </span>
                            <h4 className="px-about-title mb-20">
                                <span className="text-blue-about">Web Designing Company </span> in Chennai for Startups
                            </h4>


                        </div>
                    </div>

                    <div className='col-md-7'>
                        <p className='text-figtree'>
                            As an experienced web designing company in Chennai, Yulanto Web Creations creates tailor-made websites for startups and emerging businesses across different industries.
                            <br /><br />
                            Your website is often the first interaction a potential customer has with your brand. A well-planned web design in Chennai can help you establish a strong online presence, showcase your products or services, communicate your brand values, and convert visitors into customers.
                        </p>
                    </div>

                    <div className='col-md-5'>
                        <div className='stats-glass-card'>
                            <div className='stats-glow-bg' />
                            <div className='stats-badge-tag'>Startup Website Design</div>

                            <div className='stats-grid-wrapper'>
                                {stats.map((item, index) => (
                                    <div key={index} className='stat-box-item'>
                                        <div className='stat-value-num'>{item.value}</div>
                                        <div className='stat-label-text'>{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div  data-aos-delay={400} data-aos-once={true} style={{ backgroundColor: 'rgb(245 245 245)', }}>
                <div className='container' >
                    <div className='row align-items-center pt-100 pb-100'>


                        <div className='col-12'>
                            <span className="tp-section-subtitle text-black blink-ball">
                                Startup Web Design Services
                            </span>
                            <h4 className="px-about-title mb-20">
                                <span className="text-blue-about">Special Focus on</span> Startup Web Designing
                            </h4>
                        </div>
                        <div className='col-md-4'>

                            <img src={img1.src} alt='img' className='img-border-cls' />
                        </div>
                        <div className='col-md-8'>
                            <p className='text-figtree  '>
                                Our experienced web designers in Chennai specialize in creating innovative, attractive, responsive, and user-friendly websites for startups. We combine creative design, intuitive navigation, mobile responsiveness, SEO-friendly development, and conversion-focused layouts to help new businesses establish a strong digital presence.

                                Whether you are launching a new product, introducing a service, or building a completely new brand, our team develops website solutions aligned with your business objectives and target audience. From a startup idea to a professional online presence, we design websites that help your business move forward.
                            </p>
                        </div>




                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#053456', margin: '100px 0px  !important' }}>
   <div className='container py-5' data-aos='fade-right' data-aos-delay={400} data-aos-once={true} >


                <div className='row'>
                    <div className="col-xl-12">
                        <div className="px-project-title-box">
                            <span className="tp-section-subtitle text-white blink-ball">
                                Start Your Design
                            </span>
                            <h4 className="px-about-title mb-20 text-white">
                                <span className="">Enhance Your Startup </span>Growth with a Cutting-Edge Website
                            </h4>


                        </div>
                    </div>


                    <div className='col-12 d-flex flex-column align-items-start mb-4'>
                        <p className='text-figtree text-white'>
                            Choosing the right web design agency in Chennai can make a significant difference to your startup's online growth. Every business has a unique identity, target audience, and business objective. Therefore, we create customized website designs rather than relying on one-size-fits-all solutions.
                        </p>

                        <p className='text-figtree text-white mt-2 mb-3' style={{ fontSize: '1.05rem' }}>
                            Our startup website design services can support businesses across a wide range of industries, including:
                        </p>
                    </div>

                    {/* Industry Cards Grid */}
                    {/* <div className='row g-3'>
                        {industries.map((item, index) => (
                            <div key={index} className='col-12 col-sm-6 col-md-4 col-lg-3'>
                                <div className='industry-card'>
                                    <div className='industry-icon-wrapper'>
                                        {item.icon}
                                    </div>
                                    <h6 className='industry-title'>{item.name}</h6>
                                </div>
                            </div>
                        ))}
                    </div> */}
                    <IndustryGallery
                        industries={industries}
                    />
                    <div className='mt-50'>
                        <p className='text-white'>As a professional Chennai design company, we focus on creating websites that are visually appealing while also supporting usability, search engine visibility, and business growth.</p>
                    </div>

                </div>
            </div>
            </div>
         

            <div className='container pt-50 mb-100' data-aos='fade-up' data-aos-delay={400} data-aos-once={true}>
                <div className='row align-items-center'>

                    <div className='col-12'>
                        <span className="tp-section-subtitle text-black blink-ball">
                            Start Your Design
                        </span>
                        <h4 className="px-about-title mb-20">

                            <span className="text-blue-about">Why Startup Website Design </span> Requires the Right Approach
                        </h4>
                    </div>
                    <div>
                        <p>Designing a website for a startup can be challenging because the website needs to establish credibility while clearly communicating a new brand's products, services, and unique value proposition.

                            At Yulanto, our team combines web designing, UI/UX design, website development, SEO, and digital marketing expertise to provide startups with a complete digital solution.</p>
                        <p>As a trusted design company in Chennai, we focus on creating websites that are:</p>
                        <div className="website-benefits">

                            {/* Row 1 */}
                            <div className="website-benefits-row">
                                {websiteBenefits.slice(0, 2).map((item) => (
                                    <Badge
                                        key={item.label}
                                        label={item.label}
                                        icon={item.icon}
                                        variant={item.variant}
                                    />
                                ))}
                            </div>

                            {/* Row 2 */}
                            <div className="website-benefits-row">
                                {websiteBenefits.slice(2, 5).map((item) => (
                                    <Badge
                                        key={item.label}
                                        label={item.label}
                                        icon={item.icon}
                                        variant={item.variant}
                                    />
                                ))}
                            </div>

                            {/* Row 3 */}
                            <div className="website-benefits-row">
                                {websiteBenefits.slice(5, 7).map((item) => (
                                    <Badge
                                        key={item.label}
                                        label={item.label}
                                        icon={item.icon}
                                        variant={item.variant}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container mt-50 mb-20">
                <div className="startup-benefits">

                    {/* Header */}
                    <div className="startup-benefits-header">
                        <span className="tp-section-subtitle text-black blink-ball">
                            Startup Web Design Services
                        </span>
                        <h4 className="px-about-title">
                            <span className="text-blue-about">
                                Benefits You Get from{" "}
                            </span>
                            Our Startup Web Design Services
                        </h4>

                        {startupBenefitsContent
                            .filter((item) => item.type === "intro")
                            .map((item, index) => (
                                <p key={index} className="startup-benefits-intro">
                                    {item.content}
                                </p>
                            ))}

                    </div>



                    {/* Benefits */}
                    <div className="startup-benefits-list">

                        {startupBenefitsContent.map((item, index) => {
                            if (item.type === "section" && item.image) {
                                const Icon = item.icon;

                                const isReverse = Number(item.number) % 2 === 0;

                                return (
                                    <div
                                        key={index}
                                        className={`startup-benefit-item  ${isReverse
                                            ? "startup-benefit-item-reverse"
                                            : ""
                                            }`}
                                    >

                                        {/* Content */}
                                        <div className="startup-benefit-content-wrapper">

                                            <div className="startup-benefit-meta">

                                                <div className="startup-benefit-number">
                                                    {item.number}
                                                </div>

                                                <div className="startup-benefit-icon">
                                                    {Icon && (
                                                        <Icon
                                                            size={22}
                                                            strokeWidth={2}
                                                        />
                                                    )}
                                                </div>

                                                <div className="startup-benefit-content text-tenor">
                                                    <h5 className='text-tenor'>{item.title}</h5>
                                                </div>

                                            </div>

                                            <div className="startup-benefit-content">
                                                <p>{item.content}</p>
                                            </div>

                                        </div>


                                        {/* Image */}
                                        <div className="startup-benefit-image">

                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                loading="lazy"
                                            />

                                        </div>

                                    </div>
                                );
                            }

                            return null;
                        })}

                    </div>


                    {/* Budget Section */}
                    {startupBenefitsContent
                        .filter((item) => item.type === "heading")
                        .map((item, index) => {
                            const Icon = item.icon;

                            const budgetSections =
                                startupBenefitsContent.filter(
                                    (content) =>
                                        content.type === "section" &&
                                        !content.number
                                );

                            return (
                                <div
                                    key={index}
                                    className="startup-budget-card"
                                >

                                    <div className="startup-budget-top">

                                        <div className="startup-budget-icon">
                                            {Icon && (
                                                <Icon
                                                    size={24}
                                                    strokeWidth={2}
                                                />
                                            )}
                                        </div>

                                        <span className='text-tenor'>
                                            BUDGET-FRIENDLY
                                        </span>

                                    </div>

                                    <h4 className='text-tenor'>
                                        {item.title}
                                    </h4>

                                    {budgetSections.map(
                                        (section, sectionIndex) => (
                                            <div
                                                key={sectionIndex}
                                                className="startup-budget-content"
                                            >

                                                {section.title && (
                                                    <h5>
                                                        {section.title}
                                                    </h5>
                                                )}

                                                <p>
                                                    {section.content}
                                                </p>

                                            </div>
                                        )
                                    )}

                                    {startupBenefitsContent
                                        .filter(
                                            (content) =>
                                                content.type === "paragraph"
                                        )
                                        .map((paragraph, paragraphIndex) => (
                                            <p
                                                key={paragraphIndex}
                                                className="startup-budget-paragraph"
                                            >
                                                {paragraph.content}
                                            </p>
                                        ))}

                                </div>
                            );
                        })}

                </div>
            </div>
            <div>
                <div className='container mt-50 mb-20'>
                    <h4 className="px-about-title mb-20">
                        <span className="text-blue-about">
                            Affordable Website Design {" "}
                        </span>
                        Without Compromising Quality
                    </h4>
                    <p>We understand that startups often operate with limited budgets. Our
                        approach combines efficient project planning, practical technology
                        selection, and streamlined development to deliver{" "}
                        affordable web design in Chennai.</p>
                </div>

            </div>
            <div
                className="seo-friendly-section"
                style={{
                    backgroundColor: "rgb(245 245 245)",
                }}
                data-aos='fade-right' data-aos-delay={400} data-aos-once={true}
            >
                <div className="container" >

                    <div className="row align-items-center pt-50">


                        {/* Main content */}
                        <div className="col-12">
                            <span className="tp-section-subtitle text-black blink-ball">
                                SEO-Friendly Website Design
                            </span>
                            <h4 className="px-about-title mb-20">

                                <span className="text-blue-about">
                                    Build a Website That Supports {" "}
                                </span>

                                Your Digital Marketing

                            </h4>

                            <p>
                                A visually attractive website needs to be
                                discoverable by your target audience. That's why
                                SEO considerations are incorporated into our
                                website planning and development process.

                                As a best web design company in Chennai for
                                businesses looking for design and digital growth
                                solutions, we focus on creating SEO-friendly
                                website structures that can support search engine
                                optimization.
                            </p>

                        </div>

                    </div>


                    {/* SEO approach */}
                    <div className="seo-approach-wrapper">

                        <div className="seo-approach-heading">

                            <h5 className="fw-bold text-tenor">
                                Our approach can include:
                            </h5>

                            <p>
                                We focus on the technical and structural elements
                                that help create a strong foundation for your SEO
                                and digital marketing efforts.
                            </p>

                        </div>


                        <div className="row g-3">

                            {seoApproach.map((item, index) => {

                                const Icon = item.icon;

                                return (
                                    <div
                                        key={index}
                                        className="col-12 col-sm-6 col-lg-4 col-xl-3"
                                    >

                                        <div className="seo-approach-card">

                                            <div className="seo-approach-icon">
                                                <Icon
                                                    size={21}
                                                    strokeWidth={2}
                                                />
                                            </div>

                                            <div className="seo-approach-number">
                                                {String(index + 1).padStart(2, "0")}
                                            </div>

                                            <h6 className="seo-approach-title text-figtree">
                                                {item.name}
                                            </h6>

                                        </div>

                                    </div>
                                );
                            })}

                        </div>
                        <div className='py-5'>
                            <h5 className='text-tenor fw-bold' style={{ color: '#053456' }}>Looking for a Website Design Agency in Chennai?</h5>
                            <p>If you are searching for a reliable web design agency in Chennai to create your startup website, Yulanto Web Creations can help turn your business idea into a professional digital presence.
                                From planning and UI/UX design to website development and SEO-ready implementation, our team works closely with you throughout the project. Have a startup idea?
                                <span style={{ color: '#053456' }}> {typedConsultationText}
                                    <span aria-hidden="true" style={{ display: 'inline-block', marginLeft: '2px', animation: 'startup-typing-cursor 0.8s step-end infinite', color: '#053456' }}>|</span></span>
                            </p>

                        </div>
                    </div>

                </div>
            </div>
            <div className='container mt-20 mb-20'>
                <span className="tp-section-subtitle text-black blink-ball">
                    SEO-Friendly Website Design
                </span>

                <h4 className="px-about-title mb-20">
                    <span className="text-blue-about">
                        Our Step-by-Step  {" "}
                    </span>
                    Approach to Startup Web Design
                </h4>
                <p>We begin by understanding your startup, products or services, target audience, competitors, business objectives, and long-term goals.</p>
                <StickyScrollReveal
                    content={startupProcessContent}
                />
            </div>
            <div style={{ backgroundColor: '#053456', margin: '100px 0px 100px 0px !important' }}>
                <div className='container my-5' >
                    <div className='row align-items-center pb-50 pt-100'>


                        <div className='col-12' data-ao='fade-right' data-aos-delay={400} data-aos-once={true} >
                            <span className="tp-section-subtitle text-white blink-ball">
                                Analyze and Adapt
                            </span>
                            <h4 className="px-about-title mb-20 text-white">
                                <span className="text-blue-about text-white">
                                    A Productive   {" "}
                                </span>
                                Consultation
                            </h4>
                        </div>
                        <div className='col-md-4'>

                            <img src={img1.src} alt='img' className='img-border-cls' />
                        </div>
                        <div className='col-md-8'>
                            <p className='text-figtree text-white '>
                                Choosing the right technology and website structure is important for startup businesses. Our team explains the available technologies, features, functionalities, and digital opportunities so that you can make informed decisions.
                                {/* <br /> */}
                                As an experienced web designing company in Chennai, we provide practical recommendations based on your business goals, target audience, budget, and future growth plans.
                            </p>
                        </div>




                    </div>
                    <div className='row align-items-start pt-20 pb-100'>
                        <div className='col-12' data-ao='fade-right' data-aos-delay={400} data-aos-once={true} >
                            <span className="tp-section-subtitle text-white blink-ball">
                                We Are a Creative Web Design Agency
                            </span>
                            <h4 className="px-about-title mb-20 text-white">
                                <span className="text-blue-about text-white">
                                    Aligning Business   {" "}
                                </span>
                                Objectives with Digital Presence
                            </h4>
                        </div>

                        <div className='col-md-8'>
                            <p className='text-figtree text-white '>
                                Choosing the right technology and website structure is important for startup businesses. Our team explains the available technologies, features, functionalities, and digital opportunities so that you can make informed decisions.

                                As an experienced web designing company in Chennai, we provide practical recommendations based on your business goals, target audience, budget, and future growth plans.

                                <br /> <br />
                                Our experience across different industries enables us to develop websites using appropriate technologies and platforms. We continually evaluate modern web design practices and technologies to improve usability, performance, functionality, and scalability.
                            </p>
                        </div>

                        <div className='col-md-4'>

                            <img src={img1.src} alt='img' className='img-border-cls' />
                        </div>


                    </div>
                </div>
            </div>

            <div className="why-choose-section">

                <div className="container mt-20 mb-20">

                    {/* Heading */}
                    <div className="why-choose-header">
                        <span className="tp-section-subtitle text-black blink-ball">
                            We Are a Creative Web Design Agency
                        </span>
                        <h4 className="px-about-title mb-20">

                            <span className="text-blue-about">
                                Why Choose Us for{" "}
                            </span>

                            Startup Web Design?

                        </h4>

                        <p>
                            Choosing the right technology and website structure is
                            important for startup businesses. Our team explains the
                            available technologies, features, functionalities, and
                            digital opportunities so that you can make informed
                            decisions.
                        </p>

                        <p>
                            As an experienced web designing company in Chennai,
                            we provide practical recommendations based on your
                            business goals, target audience, budget, and future
                            growth plans.
                        </p>

                    </div>


                    {/* Cards */}
                    <div className="row g-4 mt-20">

                        {whyChooseUs.map((item, index) => {

                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="col-12 col-md-6 col-lg-4"
                                >

                                    <div className="why-choose-card">

                                        {/* Top */}
                                        <div className="why-choose-card-top">

                                            <span className="why-choose-number text-tenor">
                                                {item.number}
                                            </span>

                                            <div className="why-choose-icon">
                                                <Icon
                                                    size={24}
                                                    strokeWidth={2}
                                                />
                                            </div>

                                        </div>


                                        {/* Content */}
                                        <div className="why-choose-card-content">

                                            <h5 className='text-tenor'>
                                                {item.title}
                                            </h5>

                                            <p>
                                                {item.description}
                                            </p>

                                        </div>


                                        {/* Bottom line */}
                                        <div className="why-choose-card-line" />

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </div>
            <div style={{ background: '#f5f5f5' }}>
                <div className='container mt-50 pt-30 pb-30'>
                    <h4 className="px-about-title mb-20">
                        <span className="text-blue-about">
                            Why  {" "}
                        </span>
                        Yulanto?
                    </h4>
                    <p>As a web design company in Chennai, we bring together creative design, technical development, SEO, and digital marketing expertise to help startups build a strong online presence.

                        {/* <br /> */}
                        Whether you are looking for webdesign Chennai, startup website design, responsive web design, WordPress website design, or a complete digital presence, our team can develop a solution around your business requirements.
                    </p>
                    <div className="ambassador-card">

                        {/* Default Content */}
                        <div className="ambassador-card-content ambassador-card-default">

                            <span className="ambassador-card-label">
                                OUR WORK
                            </span>

                            <h4>
                                {ambassadorCard.default.title}
                            </h4>

                            <p>
                                {ambassadorCard.default.content}
                            </p>

                            <div className="ambassador-card-hint">
                                <span>Hover to explore</span>
                                <span className="ambassador-card-arrow">
                                    →
                                </span>
                            </div>

                        </div>


                        {/* Hover Content */}
                        <div className="ambassador-card-content ambassador-card-hover">

                            <span className="ambassador-card-label">
                                GET STARTED
                            </span>

                            <h4>
                                {ambassadorCard.hover.title}
                            </h4>

                            <p>
                                {ambassadorCard.hover.content}
                            </p>

                            {/* <div className="ambassador-card-cta">
                            Start Your Project
                            <span>→</span>
                        </div> */}

                        </div>

                    </div>
                    {/* <div>
                    <h4 className="px-about-title mb-20">
                        <span className="text-blue-about">
                            Contact  {" "}
                        </span>
                        Yulanto?
                    </h4>
                    <p>Get in touch with our team to discuss your startup website requirements and discover the right web design solution for your business.</p>
                </div> */}

                </div>
            </div>

        </div>
        // Our Step-by-Step Approach to Startup Web Design
    )
}

export default Startupwebsitedesign






// Contact Us

// Get in touch with our team to discuss your startup website requirements and discover the right web design solution for your business.