"use client";

import { useEffect } from "react";
import {
  Settings,
  Sliders,
  Search,
  Smartphone,
  DollarSign,
  TrendingUp,
  Layers,
  Building2,
  Briefcase,
  Rocket,
  Home,
  Compass,
  Palette,
  Factory,
  GraduationCap,
  HeartPulse,
  Award,
  Globe,
  FolderKanban,
  ShoppingBag,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WordpressBenefits() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const featureSections = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
      mainFeatures: [
        {
          icon: Settings,
          title: "Easy to Manage",
          description:
            "WordPress provides an intuitive content management system that makes it easier to update pages, images, blog posts, and other website content.",
        },
        {
          icon: Smartphone,
          title: "Mobile Responsive",
          description:
            "Modern WordPress websites can be designed to provide an optimized browsing experience across smartphones, tablets, laptops, and desktops.",
        },
      ],
      sideFeatures: [
        {
          icon: Sliders,
          title: "Flexible & Customizable",
          sub: "With thousands of themes, plugins, and development possibilities, WordPress can be adapted for different industries and business models.",
        },
        {
          icon: Search,
          title: "SEO-Friendly",
          sub: "WordPress provides a strong foundation for SEO when properly developed. Integrated tools manage titles, descriptions, sitemaps, and structured content.",
        },
      ],
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
      mainFeatures: [
        {
          icon: DollarSign,
          title: "Cost-Effective",
          description:
            "WordPress is a practical solution for businesses looking for a professional website with the flexibility to add features as requirements evolve.",
        },
        {
          icon: TrendingUp,
          title: "Scalable Growth",
          description:
            "Whether you need a small business website today or a larger platform with eCommerce and advanced functionality later, WordPress grows with you.",
        },
      ],
      sideFeatures: [
        {
          icon: Layers,
          title: "Easy Integration",
          sub: "Integrates smoothly with marketing, analytics, CRM, email platforms, payment gateways, and third-party services.",
        },
      ],
    },
  ];

  const industries = [
    { icon: Building2, label: "Corporate Websites" },
    { icon: Briefcase, label: "Small Business Websites" },
    { icon: Rocket, label: "Startup Websites" },
    { icon: Home, label: "Real Estate Websites" },
    { icon: Compass, label: "Builders & Architects" },
    { icon: Palette, label: "Interior Design Companies" },
    { icon: Factory, label: "Industrial Companies" },
    { icon: GraduationCap, label: "Educational Institutions" },
    { icon: Award, label: "Professional Services" },
    { icon: HeartPulse, label: "Healthcare Businesses" },
    { icon: Factory, label: "Manufacturing Companies" },
    { icon: Globe, label: "Service-Based Businesses" },
    { icon: FolderKanban, label: "Portfolio Websites" },
    { icon: ShoppingBag, label: "eCommerce Websites" },
    { icon: BookOpen, label: "Blogs & Publishing Websites" },
  ];

  return (
    <section
      className="px-about-6-area pt-50 pb-80 pb-lg-110 py-5 bg-light"
      aria-labelledby="wordpress-benefits-heading"
    >
      <div className="container container-1550">
        {/* Header */}
        <div
          className="d-flex flex-column gap-3 text-center mx-auto max-w-2xl mb-5"
          data-aos="fade-up"
        >
          <h2
            id="wordpress-benefits-heading"
            className="px-about-title fs-1 fw-bold text-dark"
          >
            <span className="text-blue-about">Key Benefits of WordPress </span>
            Website Development
          </h2>
      
        </div>

        {/* Feature Blocks (Alternating Layout) */}
        <div className="d-flex flex-column gap-5">
          {featureSections.map((section, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={section.id}
                className="row align-items-center border-bottom pb-5 g-4"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                {/* Main Content & Image Block */}
                <div
                  className={`col-12 col-lg-7 ${
                    isReversed
                      ? "order-lg-2 border-lg-start ps-lg-4"
                      : "border-lg-end pe-lg-4"
                  }`}
                >
                  <div className="d-flex flex-column flex-md-row gap-4 align-items-start">
                    <Image
                      src={section.image}
                      alt="WordPress Capability Illustration"
                      width={300}
                      height={400}
                      className="img-fluid rounded-4 object-fit-cover shadow-sm border flex-shrink-0"
                      style={{
                        maxWidth: "240px",
                        width: "100%",
                        aspectRatio: "29/35",
                      }}
                      loading="lazy"
                    />
                    <div className="d-flex flex-column gap-4 my-auto">
                      {section.mainFeatures.map((feat, fIdx) => {
                        const Icon = feat.icon;
                        return (
                          <div key={fIdx} className="text-start">
                            <div className="d-flex align-items-center gap-2 mb-2 text-blue-about">
                              <Icon size={24} />
                              <h4 className="fw-semibold text-blue font-p fs-6 mb-0">
                                {feat.title}
                              </h4>
                            </div>
                            <p className="text-secondary fs-6 mb-0">
                              {feat.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Side Metrics / Sub-features Block */}
                <div
                  className={`col-12 col-lg-5 ${
                    isReversed ? "order-lg-1" : ""
                  }`}
                >
                  <div className="d-flex flex-column gap-3">
                    {section.sideFeatures.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={i}
                          className="p-4 rounded-3 bg-white shadow-sm border text-start"
                        >
                          <div className="d-flex align-items-center gap-2 mb-2 text-blue-about">
                            <Icon size={20} />
                            <h4 className="fw-semibold text-blue font-p fs-6 mb-0">
                              {item.title}
                            </h4>
                          </div>
                          <p className="text-muted fs-6 mb-0">{item.sub}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industries Served Section */}
        <div className="mt-5 pt-4 text-center" data-aos="fade-up">
         <div className="row align-items-center">
          <div className="col-xl-12">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">WordPress Website Development for  </span>Different Businesses
              </h4>
              <p className="text-figtree text-black mt-2 font-paragraph-cls">
              Our WordPress web development services in Chennai can be customized for different industries and business requirements, including:
              </p>
            </div>
          </div>
        </div>
          <div className="row g-3 justify-content-center">
            {industries.map((ind, i) => {
              const IndIcon = ind.icon;
              return (
                <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="d-flex align-items-center gap-3 p-3 bg-white rounded-3 border shadow-sm h-100">
                    <div className="p-2 rounded bg-light text-blue-about">
                      <IndIcon size={20} />
                    </div>
                    <span className="fw-medium text-dark text-start fs-6">
                      {ind.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}