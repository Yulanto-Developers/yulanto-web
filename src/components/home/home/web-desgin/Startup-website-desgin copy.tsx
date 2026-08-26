import React from 'react'
import BreadcurmbData from '@/components/breadcrum/sections/breadcrumbdata'
import IntroContent from '../myComponents/common/IntroContent'
import img from '@/assets/img/sample/Harithams.jpg'
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
} from "lucide-react";
import "./status-badge.css";
import Badge from './Badge';


function Startupwebsitedesign() {
    const stats = [
        { value: '250+', label: 'Startup Websites' },
        { value: '200+', label: 'Happy Clients' },
        { value: '150+', label: 'Chennai Clients' },
        { value: '100%', label: 'Client Satisfaction' },
    ];

    const industries = [
        { name: 'Retail and eCommerce', icon: <FaCartShopping /> },
        { name: 'Clothing and fashion', icon: <FaShirt /> },
        { name: 'FMCG and consumer products', icon: <FaBoxOpen /> },
        { name: 'Automotive', icon: <FaCar /> },
        { name: 'Beauty and lifestyle', icon: <FaStar /> },
        { name: 'Real estate', icon: <FaBuilding /> },
        { name: 'Interior design', icon: <FaCouch /> },
        { name: 'Engineering', icon: <FaGears /> },
        { name: 'Import and export', icon: <FaGlobe /> },
        { name: 'Travel and tourism', icon: <FaPlane /> },
        { name: 'Professional services', icon: <FaBriefcase /> },
        { name: 'Education and institutions', icon: <FaGraduationCap /> },
        { name: 'Manufacturing & industrial', icon: <FaIndustry /> },
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
            content:
                "Your website should communicate your startup's personality and values. We use consistent typography, colors, imagery, layouts, and visual elements to create a recognizable digital identity.",
        },

        {
            type: "section",
            number: "02",
            title: "Improve User Experience",
            icon: UsersRound,
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
            content:
                "Strategic page structures, clear calls-to-action, enquiry forms, contact options, and conversion-focused layouts help turn website visitors into potential customers.",
        },

        {
            type: "section",
            number: "04",
            title: "Support Search Engine Visibility",
            icon: SearchCheck,
            content:
                "Our websites are developed with SEO considerations in mind, providing a strong technical foundation for future search engine optimization and digital marketing campaigns.",
        },

        {
            type: "heading",
            icon: WalletCards,
            title: "Budget-Friendly Web Design for Startups",
        },

        {
            type: "",
            title: "Affordable Website Design Without Compromising Quality",
            content: (
                <>

                </>
            ),
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

    return (
        <div>
            <BreadcurmbData />
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

        /* Glassmorphism Stats Card Styles */
        .stats-glass-card {
          position: relative;
          padding: 2rem 1.5rem;
        //   background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.85));
          border-radius: 1.25rem;
        //   border: 1px solid #053456;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(12px);
          overflow: hidden;
        }
        .stats-glow-bg {
          position: absolute;
          top: -30px;
          right: -30px;
          width: 160px;
          height: 160px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.35) 0%, rgba(37, 99, 235, 0) 70%);
          border-radius: 50%;
          animation: ambientGlow 5s infinite ease-in-out;
          pointer-events: none;
        }
        .stats-badge-tag {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #053456;
          background: rgba(37, 99, 235, 0.15);
          border: 1px solid #053456;
          padding: 0.35rem 0.85rem;
          border-radius: 50px;
          margin-bottom: 1.25rem;
        }
        .stats-grid-wrapper {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          position: relative;
          z-index: 1;
        }
        .stat-box-item {
          background: #053456;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 0.85rem;
          padding: 1.1rem 0.75rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        .stat-box-item:hover {
          transform: translateY(-4px);
          background: #53ae7d;
          border-color: #fff;
          
          box-shadow: 0 10px 20px rgba(37, 99, 235, 0.15);
        }
        .stat-value-num {
          font-size: 1.75rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff 40%, #60a5fa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.1;
        }
        .stat-label-text {
          font-size: 0.8rem;
          font-weight: 500;
          color: #fff;
          margin-top: 0.35rem;
        }
          .img-border-cls{
          border-radius:20px;
          }
      `}</style>

            <IntroContent
                leftTitle={'From Vision to Reality'}
                rightTitle1={'Real Projects.'}
                rightTitle2={' Creative Solutions. Real Results.'}
                description={'Explore our successful projects and discover how we transform ideas into engaging, innovative, and impactful digital experiences that help businesses grow and stand out online.'}
            />

            <div className='container my-4'>
                <div className='row align-items-center'>
                    <div className='col-12'>
                        <h4 className="px-about-title mb-20">
                            <span className="text-blue-about">Web Designing Company </span> in Chennai for Startups
                        </h4>
                    </div>

                    <div className='col-md-7'>
                        <p className='text-figtree'>
                            Launch your business with a professional, high-performing website designed to build credibility, attract customers, and support long-term growth. As an experienced web designing company in Chennai, Yulanto Web Creations creates tailor-made websites for startups and emerging businesses across different industries.
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
            <div style={{ backgroundColor: 'rgb(245 245 245)', margin: '100px 0px 100px 0px !important' }}>
                <div className='container my-5' >
                    <div className='row align-items-center pt-50'>
                        {/* <div className='col-3'>

                        <span className="tp-section-subtitle text-black blink-ball">
                            Startup Web Design Services
                        </span>
                    </div> */}
                        <div className='col-12'>
                            <h4 className="px-about-title mb-20">
                                <span className="text-blue-about">Special Focus on</span> Startup Web Designing
                            </h4>
                        </div>
                        <div className='col-md-4'>

                            <img src={img.src} alt='img' className='img-border-cls' />
                        </div>
                        <div className='col-md-8'>
                            <p className='text-figtree'>
                                Our experienced web designers in Chennai specialize in creating innovative, attractive, responsive, and user-friendly websites for startups. We combine creative design, intuitive navigation, mobile responsiveness, SEO-friendly development, and conversion-focused layouts to help new businesses establish a strong digital presence.
                                <br /><br />
                                Whether you are launching a new product, introducing a service, or building a completely new brand, our team develops website solutions aligned with your business objectives and target audience.
                            </p>
                        </div>



                        {/* In your JSX */}
                        <div className='col-12 d-flex justify-content-center align-items-center my-4'>
                            <p className='startup-quote-box'>
                                From a startup idea to a professional online presence, we design websites that help your business move forward.
                            </p>
                        </div>

                        {/* In your <style> tag */}
                        <style>{`
  .startup-quote-box {
   border: 1px solid #053456;     
  border-left: 4px solid #053456; 
  color: #053456;
  text-align: center;
  background: #53ae7d66;
  margin: 0 auto;
  padding: 12px 20px;
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 4px;
    
  }
`}</style>
                    </div>
                </div>
            </div>
            <div className='container my-5'>
                <style>{`
        .industry-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          height: 100%;
        }

        .industry-card:hover {
          transform: translateY(-4px);
          border-color: #053456;
          box-shadow: 0 10px 20px rgba(5, 52, 86, 0.1);
          background: #f8fafc;
        }

        .industry-icon-wrapper {
          width: 44px;
          height: 44px;
          min-width: 44px;
          border-radius: 10px;
          background: rgba(5, 52, 86, 0.08);
          color: #053456;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .industry-card:hover .industry-icon-wrapper {
          background: #053456;
          color: #ffffff;
        }

        .industry-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: #1e293b;
          margin: 0;
          line-height: 1.3;
        }
      `}</style>

                <div className='row'>
                    <div className='col-12'>
                        <h4 className="px-about-title mb-20">
                            <span className="text-blue-about">Enhance Your Startup </span>Growth with a Cutting-Edge Website
                        </h4>
                    </div>

                    <div className='col-12 d-flex flex-column align-items-start mb-4'>
                        <p className='text-figtree'>
                            Choosing the right web design agency in Chennai can make a significant difference to your startup's online growth. Every business has a unique identity, target audience, and business objective. Therefore, we create customized website designs rather than relying on one-size-fits-all solutions.
                        </p>

                        <p className='fw-bold text-dark mt-2 mb-3' style={{ fontSize: '1.05rem' }}>
                            Our startup website design services can support businesses across a wide range of industries, including:
                        </p>
                    </div>

                    {/* Industry Cards Grid */}
                    <div className='row g-3'>
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
                    </div>
                    <div className='mt-50'>
                        <p>As a professional Chennai design company, we focus on creating websites that are visually appealing while also supporting usability, search engine visibility, and business growth.</p>
                    </div>

                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
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

                        <h4 className="px-about-title mb-20">
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

                            if (item.type === "section") {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={index}
                                        className="startup-benefit-item"
                                    >

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

                                        <div className="startup-benefit-content">

                                            <h5>
                                                {item.title}
                                            </h5>

                                            <p>
                                                {item.content}
                                            </p>

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

                                        <span>
                                            BUDGET-FRIENDLY
                                        </span>

                                    </div>

                                    <h4>
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
        </div>
    )
}

export default Startupwebsitedesign