"use client";

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  CSSProperties
} from "react";
import {
  Atom,
  Box,
  Cloud,
  Code2,
  Cpu,
  Database,
  FileCode2,
  Flag,
  Gem,
  Globe2,
  Hexagon,
  Megaphone,
  Palette,
  BadgeCheck,
  Radio,
  Recycle,
  ShieldCheck,
  Star,
  TrendingUp,
  Trees,
  Users,
  XCircle,
  ArrowUp,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css"; India Private

import Image1 from '@/assets/img/usa/usafalg.png';


// ---- TYPES ------------------------------------------------------------
interface ClientItem {
  name: string;


  category: string;
  color: string;
  icon?: React.ElementType;
}

interface TechItem {
  name: string;
  icon: React.ElementType;
  color: string;
}

interface TestimonialItem {
  text: string;
  name: string;
  role: string;
  img?: string;
}

interface ServiceItem {
  icon: React.ElementType;
  color: string;
  label: string;
}



interface StatItem {
  icon: React.ElementType;
  color: string;
  bg: string;
  value: string;
  label: string;
}

// ---- DATA ---------------------------------------------------------------
const CLIENTS: ClientItem[] = [
  { name: "Spark10 AI", category: "AI & Technology", color: "#1a9b5c", icon: ShieldCheck },
  { name: "IncTune", category: "SaaS / Software", color: "#2f5bff", icon: Radio },
  { name: "iHotTech", category: "IT Services", color: "#111827" },
  { name: "Infinity Robotics AI", category: "AI & Robotics", color: "#1c1c8f", icon: Cpu },
  { name: "Solstice6", category: "Consulting", color: "#111827" },
  { name: "Star Ride", category: "Transport", color: "#1a9b5c", icon: Star },
  { name: "Xpress Auto Registration", category: "Automotive", color: "#e0355a", icon: XCircle },
  { name: "Bridge Green Upcycle", category: "Eco Solutions", color: "#2f9b4f", icon: Recycle },
  { name: "Yoma Enterprise", category: "Business Solutions", color: "#2f5bff" },
  { name: "Segreto DC", category: "Consulting", color: "#111827" },
  { name: "Natna Staffing Solutions", category: "Staffing", color: "#111827" },
  { name: "US Tree Cleaning", category: "Cleaning Services", color: "#1a9b5c", icon: Trees },
];

const TECHS: TechItem[] = [
  { name: "React", icon: Atom, color: "#2f5bff" },
  { name: "PHP", icon: FileCode2, color: "#6b7bd1" },
  { name: "Laravel", icon: Hexagon, color: "#e0555a" },
  { name: "MySQL", icon: Database, color: "#00758f" },
  { name: "JavaScript", icon: FileCode2, color: "#f0b90b" },
  { name: "Node.js", icon: Hexagon, color: "#3c873a" },
  { name: "HTML5", icon: FileCode2, color: "#e34c26" },
  { name: "CSS3", icon: FileCode2, color: "#2965f1" },
  { name: "jQuery", icon: Code2, color: "#0769ad" },
  { name: "REST API", icon: Globe2, color: "#111827" },
  { name: "Cloud", icon: Cloud, color: "#2f9bd6" },
];

const TESTIMONIALS: TestimonialItem[] = [
  { text: "Yulanto team delivered an exceptional AI platform that exceeded our expectations. Highly professional!", name: "John Davis", role: "CTO, Spark10 AI" },
  { text: "Their expertise in SaaS development is outstanding. Our platform runs perfectly!", name: "Michael Smith", role: "Founder, IncTune" },
  { text: "Amazing team! They understand business needs and deliver on time.", name: "David Wilson", role: "CEO, Infinity Robotics AI" },
];

const SERVICES: ServiceItem[] = [
  { icon: Code2, color: "#2f5bff", label: "Web Development" },
  { icon: Megaphone, color: "#1a9b5c", label: "Marketing" },
  { icon: Palette, color: "#e0555a", label: "UI/UX Design" },
  { icon: TrendingUp, color: "#e0a72f", label: "SEO & Digital Marketing" },
];



const HERO_STATS: StatItem[] = [
  { icon: Box, color: "#2f5bff", bg: "#e8edff", value: "120+", label: "Projects Delivered" },
  { icon: Gem, color: "#1a9b5c", bg: "#e6fbf0", value: "95%", label: "Client Satisfaction" },
  { icon: Users, color: "#e0555a", bg: "#fdeeee", value: "5+", label: "Countries Served" },
];

// ---- THEME ----------------------------------------------------------------
const colors = {
  brand: "#053456",
  ink: "#0f1626",
  muted: "#6b7280",
  line: "#eef0f4",
  bgSoft: "#f7f8fb",
} as const;

const styles: Record<string, CSSProperties> = {
  root: { background: "#fff", color: colors.ink, minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif", overflowX: "hidden" },
  btnBrand: { background: colors.brand, border: "none", color: "#fff", borderRadius: 999, padding: "10px 22px", fontWeight: 600, fontSize: ".9rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, cursor: "pointer", transition: "opacity 0.2s" },
  btnOutline: { background: "transparent", border: `1px solid ${colors.brand}`, color: colors.brand, borderRadius: 999, padding: "10px 22px", fontWeight: 600, fontSize: ".9rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, cursor: "pointer" },
  section: { padding: "60px 0", overflow: "hidden" },
  container: { maxWidth: 1200, margin: "0 auto", padding: "0 24px", overflow: "hidden" },
  heroBadge: { background: "#eef2ff", color: "#334155", borderRadius: 999, padding: "7px 16px", fontSize: ".82rem", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 6 },
  clientDomain: { color: colors.brand, fontSize: ".85rem", fontWeight: 500 },
  clientCategory: { color: colors.muted, fontSize: ".82rem", margin: "6px 0 12px" },
  badgeCompleted: { background: "#e9fbf1", color: "#1a9b5c", fontWeight: 600, fontSize: ".72rem", padding: "5px 14px", borderRadius: 10, display: "inline-block" },
  visitLink: { color: colors.brand, fontSize: ".85rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 4, textDecoration: "none" },
};

// ---- CTA ICONS (embedded SVGs, no external deps) ---------------------------
const GeminiIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
    <path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" fill="url(#gemini_grad)" />
    <defs>
      <linearGradient id="gemini_grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1A73E8" />
        <stop offset="1" stopColor="#A142F4" />
      </linearGradient>
    </defs>
  </svg>
);

const ReplitIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
    <path d="M3 4H10V10H3V4Z" fill="#F26207" />
    <path d="M10 10H17V16H10V10Z" fill="#F26207" />
    <path d="M3 10H10V16H3V10Z" fill="#F26207" opacity="0.8" />
    <path d="M10 16H17V22H10V16Z" fill="#F26207" opacity="0.6" />
  </svg>
);

const MagicUIIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
    <circle cx="12" cy="12" r="10" fill="url(#magic_grad)" />
    <path d="M12 6L13.5 10.5L18 12L13.5 13.5L12 18L10.5 13.5L6 12L10.5 10.5L12 6Z" fill="white" />
    <defs>
      <linearGradient id="magic_grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EC4899" />
        <stop offset="1" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
  </svg>
);

const CenterLogoIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
    <path d="M12 4L4 8V16L12 20L20 16V8L12 4Z" stroke="#09090b" strokeWidth="2" strokeLinejoin="round" />
    <path d="M12 4V20" stroke="#09090b" strokeWidth="1.5" />
    <path d="M4 8L20 16" stroke="#09090b" strokeWidth="1.5" />
    <path d="M20 8L4 16" stroke="#09090b" strokeWidth="1.5" />
  </svg>
);

const VSCodiumIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
    <path d="M17.5 2.5L22 6V18L17.5 21.5L2 14.5V9.5L17.5 2.5Z" fill="#29B6F6" />
    <path d="M17.5 2.5L7 12L17.5 21.5" stroke="#0288D1" strokeWidth="1.5" />
  </svg>
);

const MediaWikiIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
    <path d="M4 16C4 16 6 8 12 8C18 8 20 16 20 16" stroke="#36C" strokeWidth="3" strokeLinecap="round" />
    <circle cx="12" cy="16" r="2" fill="#36C" />
  </svg>
);

const GooglePaLMIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
    <path d="M12 22V10" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M12 10C8 6 4 8 4 8C4 8 6 12 12 10Z" fill="#10B981" />
    <path d="M12 10C16 6 20 8 20 8C20 8 18 12 12 10Z" fill="#F59E0B" />
    <path d="M12 14C7 12 5 15 5 15C5 15 8 17 12 14Z" fill="#EF4444" />
    <path d="M12 14C17 12 19 15 19 15C19 15 16 17 12 14Z" fill="#3B82F6" />
  </svg>
);

const IntegrationCard: React.FC<{ children: React.ReactNode; isCenter?: boolean }> = ({ children, isCenter = false }) => (
  <div
    style={{
      width: 72,
      height: 72,
      backgroundColor: "#ffffff",
      borderRadius: 16,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: isCenter ? "1px solid rgba(0, 0, 0, 0.15)" : "1px solid rgba(0, 0, 0, 0.06)",
      boxShadow: isCenter
        ? "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
        : "0 2px 6px rgba(0, 0, 0, 0.04)",
      position: "relative",
      zIndex: isCenter ? 2 : 1,
    }}
  >
    <div style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
      {children}
    </div>
  </div>
);

// ---- SCROLL TO TOP BUTTON COMPONENT ------------------------------------
const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: colors.brand,
        color: "#fff",
        border: "none",
        cursor: "pointer",
        display: isVisible ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(5, 52, 86, 0.3)",
        transition: "all 0.3s ease",
        zIndex: 999,
        fontSize: "20px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "0 6px 30px rgba(5, 52, 86, 0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(5, 52, 86, 0.3)";
      }}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

// ---- PAGE COMPONENT ------------------------------------------------------------
export default function USAClientsPage() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [testimonialIdx, setTestimonialIdx] = useState<number>(0);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [aosInitialized, setAosInitialized] = useState(false);

  useEffect(() => {
    // Initialize AOS with proper settings
    AOS.init({
      duration: 800,
      once: false, // Changed to false to allow animations on scroll up
      easing: 'ease-out-cubic',
      offset: 100,
      delay: 50,
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
    });

    // Force refresh after a small delay to ensure all elements are registered
    setTimeout(() => {
      AOS.refresh();
      setAosInitialized(true);
    }, 100);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  // Refresh AOS on any route changes or content changes
  useEffect(() => {
    if (aosInitialized) {
      AOS.refresh();
    }
  }, [aosInitialized]);

  useEffect(() => {
    const t = setInterval(() => {
      setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  // Handle scroll events to refresh AOS
  useEffect(() => {
    const handleScroll = () => {
      if (aosInitialized) {
        AOS.refresh();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [aosInitialized]);



  return (
    <div style={styles.root}>
      {/* CSS Rules for Grid, Cards, and Alternating Backgrounds */}
      <style>{`
        * { 
          box-sizing: border-box; 
          margin: 0;
          padding: 0;
        }
        a { text-decoration: none; }
        html {
          scroll-behavior: smooth;
          overflow-x: hidden;
        }
        body {
          overflow-x: hidden;
          max-width: 100vw;
        }
        
        .dx-grid-2 { display: grid; grid-template-columns: 1fr; gap: 40px; }
        .dx-grid-3 { display: grid; grid-template-columns: 1fr; gap: 24px; }
        .dx-grid-4 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .dx-grid-tech { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .dx-grid-rw { display: grid; grid-template-columns: 1fr; gap: 40px; }
        .dx-grid-cta { display: grid; grid-template-columns: 1fr; gap: 48px; align-items: center; }

        /* Alternating Background Colors */
        .section-bg-alt { background-color: #f1f1f1; }
        .section-bg-white { background-color: #fff; }

        /* Enhanced Card Styles */
        .dx-client-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 26px;
          height: 100%;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .dx-client-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);
          border-color: #cbd5e1;
        }

        .dx-tech-tile {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 20px 12px;
          text-align: center;
          font-size: 0.85rem;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .dx-tech-tile:hover {
          transform: translateY(-3px);
          border-color: #053456;
          box-shadow: 0 8px 20px rgba(5, 52, 86, 0.08);
        }

        .dx-service-tile {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 28px 20px;
          text-align: center;
          font-size: 1rem;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .dx-service-tile:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.07);
        }

        .dx-testimonial-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
        }

        /* AOS Animation Overrides */
        [data-aos] {
          pointer-events: none;
          opacity: 0;
          transition-property: opacity, transform;
        }
        [data-aos].aos-animate {
          pointer-events: auto;
          opacity: 1 !important;
        }

        /* Reset animations when scrolling up */
        [data-aos].aos-init:not(.aos-animate) {
          opacity: 0 !important;
        }

        @media (min-width: 640px) {
          .dx-grid-3 { grid-template-columns: repeat(2, 1fr); }
          .dx-grid-4 { grid-template-columns: repeat(4, 1fr); }
        }
        @media (min-width: 768px) {
          .dx-grid-tech { grid-template-columns: repeat(4, 1fr); }
        }
        @media (min-width: 992px) {
       
          .dx-grid-2 { grid-template-columns: 1fr 1fr; align-items: center; }
          .dx-grid-3 { grid-template-columns: repeat(3, 1fr); }
          .dx-grid-rw { grid-template-columns: 7fr 5fr; gap: 50px; align-items: start; }
          .dx-grid-cta { grid-template-columns: 1fr 1fr; gap: 64px; }
        }
      `}</style>

      {/* HERO / FIRST SECTION */}
      <section
        className="section-bg-alt"
        id="home"
        style={{
          ...styles.section,
          marginTop: "85px",
          position: "relative",
          overflow: "hidden",
          minHeight: "520px",
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(255,255,255,0.96) 0%,
              rgba(255,255,255,0.88) 35%,
              rgba(255,255,255,0.35) 65%,
              rgba(255,255,255,0.05) 100%
            ),
            url(${Image1.src})
          `,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            ...styles.container,
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ maxWidth: "720px" }}>
            <div data-aos="fade-up" data-aos-delay="0">
              <span style={styles.heroBadge}>
                <Flag size={14} style={{ color: colors.brand }} />
                Your Trusted Digital Partner for Web Design, Development & Digital Marketing
                <BadgeCheck size={14} style={{ color: colors.brand }} />
              </span>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">
                  Digital Solutions for{" "}
                </span>
                Businesses Across the USA
              </h4>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <p className="text-figtree text-black">
                At Yulanto Web Creations, we help businesses across the USA build a
                strong, professional, and results-driven digital presence. From website
                design and custom web development to eCommerce, SEO, digital marketing,
                graphic design, hosting, and ongoing website maintenance, we provide
                complete digital solutions under one roof.

                Whether you are a startup, small business, professional service
                provider, growing company, or established enterprise, our team creates
                customized solutions designed around your business goals, target
                audience, and growth plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="section-bg-white" id="about" style={styles.section}>
        <div style={styles.container}>
          <div style={{ maxWidth: 1200 }}>
            <div data-aos="fade-right" data-aos-delay="0">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">
                  Our Web Design Services{" "}
                </span>
                for USA Businesses
              </h4>
            </div>
           
            <div data-aos="fade-up" data-aos-delay="100">
              <p className="text-figtree text-black">
                We design modern, responsive, user-friendly, and SEO-friendly websites that represent your brand professionally and help turn visitors into customers. From corporate websites and business websites to custom web applications, we develop solutions tailored to your requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="section-bg-alt" id="why-choose" style={{ ...styles.section, padding: "60px 0" }}>
        <div style={styles.container}>
          {/* Heading Section at the Top */}
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div data-aos="fade-up" data-aos-delay="0">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">
                  Why Choose Yulanto for Your {" "}
                </span>
                Business in the USA
              </h4>
            </div>
          </div>

          {/* Content List Below Heading */}
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            {[
              {
                num: "01",
                title: "11+ Years of Experience",
                desc: "With more than a decade of experience in website design and digital solutions, we bring practical expertise to every project."
              },
              {
                num: "02",
                title: "Complete Digital Solutions",
                desc: "From your first website to SEO, digital marketing, eCommerce, hosting, and maintenance, you can manage your digital requirements with one experienced team."
              },
              {
                num: "03",
                title: "Customized Solutions",
                desc: "We don't believe in one-size-fits-all solutions. Every website and digital strategy is developed according to your business, industry, audience, and objectives."
              },
              {
                num: "04",
                title: "SEO-Friendly & Performance-Focused",
                desc: "We build websites with search engine visibility, mobile responsiveness, usability, security, and performance in mind."
              },
              {
                num: "05",
                title: "Affordable & Scalable",
                desc: "Our solutions are designed to provide value for startups, small businesses, and growing companies while allowing your digital presence to scale as your business grows."
              },
              {
                num: "06",
                title: "Business-Focused Approach",
                desc: "We don't simply create websites. We focus on building digital experiences that strengthen your brand, generate enquiries, improve customer engagement, and support business growth."
              },
              {
                num: "07",
                title: "Dedicated Support",
                desc: "Our support continues after your website goes live. From updates and maintenance to technical assistance and digital marketing, we are available to support your ongoing requirements."
              }
            ].map((item, index) => (
              <div
                key={item.num}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                style={{
                  display: "flex",
                  gap: "24px",
                  alignItems: "flex-start",
                  padding: "24px 0",
                  borderBottom: "1px solid #e0e0e0",
                  borderTop: index === 0 ? "1px solid #e0e0e0" : "none"
                }}
              >
                <span style={{ fontSize: "1.2rem", fontWeight: "700", color: "#053456", minWidth: "32px" }}>
                  {item.num}
                </span>
                <div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: "700", margin: "0 0 6px 0", color: "#053456" }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: "1.6", margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS SECTION */}
      <section className="section-bg-white" id="clients" style={styles.section}>
        <div style={styles.container}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div data-aos="fade-up" data-aos-delay="0">
              <span className="px-section-subtitle pt-40 blink-ball mb-20 text-tenor">OUR CLIENTS</span>
            </div>
           
            <div data-aos="fade-up" data-aos-delay="100">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">
                  Featured {" "}
                </span>
                USA Clients
              </h4>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <p className="text-figtree text-black">
                We are proud to work with businesses across the USA, delivering professional web design, website development, and digital solutions tailored to their unique needs. Here are some of the successful projects we have completed for our clients.
              </p>
            </div>
          </div>

          <div className="dx-grid-4">
            {CLIENTS.map((c, index) => {
              return (
                <div 
                  className="dx-client-card" 
                  key={c.name || index} 
                  style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <span style={styles.badgeCompleted}>Completed</span>
                    <a href="#" style={styles.visitLink}>
                      Visit Website <span aria-hidden>→</span>
                    </a>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "1.1rem", color: colors.ink }}>{c.name}</div>
                    <div style={styles.clientCategory}>{c.category}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RECENT WORK + TECHNOLOGIES SECTION */}
      <section className="section-bg-alt" id="technologies" style={styles.section}>
        <div style={styles.container} className="dx-grid-rw">
          <div>
            <div data-aos="fade-right" data-aos-delay="0">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">Serving Businesses </span> Across the USA
              </h4>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <p className="text-figtree text-black">
                We proudly provide web design, website development, eCommerce, SEO, digital marketing, graphic design, hosting, and website maintenance services to businesses across the USA. Our remote digital services allow us to work with businesses in different industries and locations while providing professional communication, customized solutions, and ongoing support.
                Whether you are launching a new business, redesigning an existing website, expanding your online store, improving search rankings, or looking for a complete digital marketing partner, Yulanto Web Creations can help you build and grow your online presence.
              </p>
            </div>
          </div>

          <div>
            <div data-aos="fade-left" data-aos-delay="0">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">TECHNOLOGIES WE </span> USE
              </h4>
            </div>

            <div className="dx-grid-tech">
              {TECHS.map((t, index) => {
                const Icon = t.icon;
                return (
                  <div 
                    key={t.name} 
                    className="dx-tech-tile"
                    data-aos="zoom-in"
                    data-aos-delay={index * 50}
                  >
                    <Icon size={24} style={{ color: t.color, marginBottom: 8, display: "block", marginLeft: "auto", marginRight: "auto" }} />
                    {t.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS + ACHIEVEMENTS SECTION */}
      <section className="section-bg-white" id="testimonials" style={styles.section}>
        <div style={styles.container} className="dx-grid-2">
          <div>
            <div data-aos="fade-right" data-aos-delay="0">
              <span className="px-section-subtitle pt-40 blink-ball mb-20 text-tenor">CLIENT TESTIMONIALS</span>
            </div>

            <div data-aos="fade-right" data-aos-delay="100">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">What Our</span> Clients Say
              </h4>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="dx-testimonial-card">
              <div style={{ color: "#f5a524", fontSize: "1rem", letterSpacing: 2, marginBottom: 4 }}>★★★★★</div>
              <p className="text-figtree text-black" style={{ margin: "16px 0" }}>
                &quot;{TESTIMONIALS[testimonialIdx].text}&quot;
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.98rem", color: colors.ink }}>{TESTIMONIALS[testimonialIdx].name}</div>
                  <div style={{ fontSize: ".82rem", color: colors.muted }}>{TESTIMONIALS[testimonialIdx].role}</div>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setTestimonialIdx(i)}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    background: i === testimonialIdx ? colors.brand : "#cbd5e1",
                    transition: "background 0.2s",
                  }}
                />
              ))}
            </div>
          </div>

          <div>
            <div data-aos="fade-left" data-aos-delay="0">
              <span className="px-section-subtitle pt-40 blink-ball mb-20 text-tenor">OUR ACHIEVEMENTS</span>
            </div>

            <div data-aos="fade-left" data-aos-delay="100">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">Delivering Successful </span> Digital Solutions
              </h4>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <p className="text-figtree text-black">
                Our achievements reflect years of creativity, innovation, and commitment to delivering successful digital solutions. We have helped businesses across the USA and beyond build powerful online experiences through professional web design, development, eCommerce, digital marketing, and ongoing technical support—from initial strategy and concept to design, development, deployment, and long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section-bg-alt" id="contact" style={{ padding: "64px 0", overflow: "hidden" }}>
        <div style={{ ...styles.container, maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
            <div data-aos="fade-up" data-aos-delay="0">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">Let's Build Your </span>Digital Presence
              </h4>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <p className="text-figtree text-black">
                Your website is more than an online brochure—it is an important part of your business growth. Let our team create a professional digital presence that helps your business stand out, connect with your customers, and achieve your online goals.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginTop: 8 }}>
              <a href="#contact" className="btn-primary">
                Get in touch with Yulanto Web Creations today and let's create your next digital success story.
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SCROLL TO TOP BUTTON */}
      <ScrollToTop />
    </div>
  );
}

// ---- HERO GLOBE SUBCOMPONENTS ---------------------------------------------
const HeroGlobe: React.FC = () => {
  return (
    <div style={{ position: "relative", height: 380, width: "100%", maxWidth: 420, margin: "0 auto" }}>
      <div
        style={{
          position: "absolute",
          border: "1.5px dashed rgba(47,91,255,.25)",
          borderRadius: "50%",
          width: 380,
          height: 380,
          top: 20,
          left: "calc(50% - 190px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          border: "1.5px dashed rgba(47,91,255,.25)",
          borderRadius: "50%",
          width: 440,
          height: 250,
          top: 85,
          left: "calc(50% - 220px)",
          transform: "rotate(-8deg)",
        }}
      />
      <div
        style={{
          width: 320,
          height: 320,
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle at 30% 30%, #6f8cff, #2f5bff 60%, #1c3fd6 100%)",
          boxShadow: "0 30px 60px rgba(47,91,255,.25)",
        }}
      />

      {HERO_STATS.map((s, i) => {
        const Icon = s.icon;
        const pos: CSSProperties =
          i === 0
            ? { top: 10, right: 0 }
            : i === 1
              ? { top: 150, left: -10 }
              : { bottom: 10, right: "5%" };
        return (
          <div
            key={s.label}
            style={{
              position: "absolute",
              background: "#fff",
              borderRadius: 14,
              padding: "13px 16px",
              minWidth: 170,
              boxShadow: "0 15px 35px rgba(15,22,38,.1)",
              zIndex: 2,
              ...pos,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: s.bg,
                  color: s.color,
                  flexShrink: 0,
                }}
              >
                <Icon size={18} />
              </div>
              <div>
                <div style={{ fontSize: ".72rem", color: colors.muted, fontWeight: 500 }}>{s.label}</div>
                <div style={{ fontWeight: 700, fontSize: "1.05rem", color: colors.ink }}>{s.value}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};