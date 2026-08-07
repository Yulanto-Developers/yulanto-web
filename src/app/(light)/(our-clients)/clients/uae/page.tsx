"use client";

import React, { useEffect, useMemo, useRef, useState, CSSProperties } from "react";
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
  Zap,
  Building2,
  Video,
  PartyPopper,
  Flame,
  Compass,
  Ship,
  Droplet,
  Anchor,
  Sparkles,
} from "lucide-react";

/**
 * DigitizeXPage - Regional Edition
 * Single-file React (TypeScript) landing page for DigitizeX.
 */

// ---- TYPES ------------------------------------------------------------
interface ClientItem {
  name: string;
  brand: string;
  domain: string;
  category: string;
  color: string;
  flag: string;
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
  img: string;
}

interface ServiceItem {
  icon: React.ElementType;
  color: string;
  label: string;
}

interface NavItem {
  id: string;
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
  {
    name: "TerraPulse",
    brand: "TERRAPULSE",
    domain: "terrapulse.com.sa",
    category: "Geospatial & Tech Solutions",
    color: "#2e7d32",
    flag: "🇸🇦",
    icon: Compass,
  },
  {
    name: "DDC Maritime",
    brand: "DDC MARITIME",
    domain: "ddcmaritime.com",
    category: "Maritime & Offshore Services",
    color: "#0284c7",
    flag: "🇦🇪",
    icon: Ship,
  },
  {
    name: "Blackstorm Energy",
    brand: "BLACKSTORM ENERGY",
    domain: "blackstormenergy.com",
    category: "Oil, Gas & Energy Services",
    color: "#d97706",
    flag: "🇦🇪",
    icon: Droplet,
  },
  {
    name: "Hitco Kuwait",
    brand: "HITCO KUWAIT",
    domain: "hitcokuwait.com",
    category: "Industrial & Technical Trading",
    color: "#059669",
    flag: "🇰🇼",
    icon: Building2,
  },
  {
    name: "Blue Anchor LLC",
    brand: "BLUE ANCHOR",
    domain: "blueanchor.llc",
    category: "Shipping & Maritime Logistics",
    color: "#2563eb",
    flag: "🇦🇪",
    icon: Anchor,
  },
  {
    name: "MBA London",
    brand: "MBA LONDON",
    domain: "mbalondon.org.uk",
    category: "Education & Academy Consultancy",
    color: "#7c3aed",
    flag: "🇬🇧",
    icon: Sparkles,
  },
  {
    name: "Hali Consult",
    brand: "HALI CONSULT",
    domain: "haliconsult.com",
    category: "Business & Management Advisory",
    color: "#4f46e5",
    flag: "🇦🇪",
    icon: ShieldCheck,
  },
  {
    name: "Shammah Al Nissi",
    brand: "SHAMMAH AL NISSI",
    domain: "shammahalnissi.com",
    category: "General Contracting & Trading",
    color: "#9333ea",
    flag: "🇦🇪",
    icon: Building2,
  },
  {
    name: "BQAB Qatar",
    brand: "BQAB QATAR",
    domain: "bqab.qa",
    category: "Quality Assurance & Advisory",
    color: "#b91c1c",
    flag: "🇶🇦",
    icon: BadgeCheck,
  },
  {
    name: "Adhelant",
    brand: "ADHELANT",
    domain: "adhelant.com",
    category: "Digital Transformation & Services",
    color: "#0891b2",
    flag: "🇦🇪",
    icon: Globe2,
  },
  {
    name: "Altis CalServ",
    brand: "ALTIS CALSERV",
    domain: "altiscalserv.com",
    category: "Calibration & Servicing",
    color: "#2f5bff",
    flag: "🇸🇬",
    icon: ShieldCheck,
  },
  {
    name: "Preserve Metals",
    brand: "PRESERVE METALS",
    domain: "preservemetals.com",
    category: "Metal Recycling & Solutions",
    color: "#1a9b5c",
    flag: "🇸🇬",
    icon: Recycle,
  },
  {
    name: "Parkad Singapore",
    brand: "PARKAD",
    domain: "parkad.com.sg",
    category: "Outdoor & Media Advertising",
    color: "#e0355a",
    flag: "🇸🇬",
    icon: Megaphone,
  },
  {
    name: "HUB Electrical Engineering",
    brand: "HUB ELECTRICAL",
    domain: "hub-electrical.com",
    category: "Electrical Engineering",
    color: "#e0a72f",
    flag: "🇸🇬",
    icon: Zap,
  },
  {
    name: "SparkyAnim",
    brand: "SPARKYANIM",
    domain: "sparkyanim.com",
    category: "Animation & Creative Studio",
    color: "#8b5cf6",
    flag: "🇲🇾",
    icon: Video,
  },
  {
    name: "Asianic",
    brand: "ASIANIC",
    domain: "asianic.sg",
    category: "Corporate & Technical Solutions",
    color: "#0769ad",
    flag: "🇸🇬",
    icon: Building2,
  },
  {
    name: "SG Event Rental",
    brand: "SG EVENT RENTAL",
    domain: "sgeventrental.com.sg",
    category: "Event Logistics & Equipment",
    color: "#2f9b4f",
    flag: "🇸🇬",
    icon: PartyPopper,
  },
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
  {
    text: "DigitizeX transformed our digital web portal with seamless engineering precision. Their turnaround time and responsiveness in Singapore were outstanding!",
    name: "Tan Min-Wei",
    role: "Operations Director, Altis CalServ",
    img: "https://i.pravatar.cc/80?img=12",
  },
  {
    text: "Working with DigitizeX to scale our event logistics booking platform was smooth and efficient. Excellent understanding of our market needs.",
    name: "Rachel Lim",
    role: "Marketing Manager, SG Event Rental",
    img: "https://i.pravatar.cc/80?img=47",
  },
  {
    text: "The web and platform architecture delivered by DigitizeX gave our brand the modern digital footprint we needed.",
    name: "Ahmad Rizal",
    role: "Creative Director, SparkyAnim",
    img: "https://i.pravatar.cc/80?img=33",
  },
];

const SERVICES: ServiceItem[] = [
  { icon: Code2, color: "#2f5bff", label: "Web & Software Development" },
  { icon: Megaphone, color: "#1a9b5c", label: "Digital Growth & Marketing" },
  { icon: Palette, color: "#e0555a", label: "UI/UX & Brand Design" },
  { icon: TrendingUp, color: "#e0a72f", label: "SEO & Regional Optimization" },
];

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "work", label: "Our Work" },
  { id: "technologies", label: "Technologies" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact Us" },
];

const HERO_STATS: StatItem[] = [
  { icon: Box, color: "#2f5bff", bg: "#e8edff", value: "150+", label: "Projects Delivered" },
  { icon: Gem, color: "#1a9b5c", bg: "#e6fbf0", value: "98%", label: "Client Satisfaction" },
  { icon: Users, color: "#e0555a", bg: "#fdeeee", value: "Global", label: "Client Base" },
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
  root: { background: "#fff", color: colors.ink, minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" },
  btnBrand: { background: colors.brand, border: "none", color: "#fff", borderRadius: 999, padding: "10px 22px", fontWeight: 600, fontSize: ".9rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, cursor: "pointer", transition: "opacity 0.2s" },
  btnOutline: { background: "transparent", border: `1px solid ${colors.brand}`, color: colors.brand, borderRadius: 999, padding: "10px 22px", fontWeight: 600, fontSize: ".9rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, cursor: "pointer" },
  section: { scrollMarginTop: 90, padding: "64px 0" },
  container: { maxWidth: 1200, margin: "0 auto", padding: "0 24px" },
  heroBadge: { background: "#eef2ff", color: "#334155", borderRadius: 999, padding: "7px 16px", fontSize: ".82rem", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 6 },
  clientDomain: { color: colors.brand, fontSize: ".85rem", fontWeight: 500 },
  clientCategory: { color: colors.muted, fontSize: ".82rem", margin: "6px 0 12px" },
  badgeCompleted: { background: "#e9fbf1", color: "#1a9b5c", fontWeight: 600, fontSize: ".72rem", padding: "5px 14px", borderRadius: 999, display: "inline-block" },
  visitLink: { color: colors.brand, fontSize: ".85rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 4, marginTop: 14, textDecoration: "none" },
};

// ---- INTEGRATION CARDS SVGS ------------------------------------------------
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

// ---- MAIN COMPONENT -------------------------------------------------------
const DigitizeXPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [testimonialIdx, setTestimonialIdx] = useState<number>(0);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const sectionIds = useMemo<string[]>(() => NAV_ITEMS.map((n) => n.id), []);

  useEffect(() => {
    sectionIds.forEach((id) => {
      sectionRefs.current[id] = document.getElementById(id);
    });

    function onScroll() {
      let current = sectionIds[0];
      sectionIds.forEach((id) => {
        const el = sectionRefs.current[id];
        if (el && el.getBoundingClientRect().top <= 100) current = id;
      });
      setActiveSection(current);
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);

  useEffect(() => {
    const t = setInterval(() => {
      setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const handleNavClick = (id: string) => (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={styles.root}>
      {/* CSS Rules for Grid, Cards, and Alternating Backgrounds */}
      <style>{`
        * { box-sizing: border-box; }
        a { text-decoration: none; }
        
        .dx-nav { display: none; }
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
          transition: transform 0.22s ease, box-shadow 0.2s ease, border-color 0.2s ease;
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

        @media (min-width: 640px) {
          .dx-grid-3 { grid-template-columns: repeat(2, 1fr); }
          .dx-grid-4 { grid-template-columns: repeat(4, 1fr); }
        }
        @media (min-width: 768px) {
          .dx-grid-tech { grid-template-columns: repeat(4, 1fr); }
        }
        @media (min-width: 992px) {
          .dx-nav { display: flex; align-items: center; gap: 2px; }
          .dx-grid-2 { grid-template-columns: 1fr 1fr; align-items: center; }
          .dx-grid-3 { grid-template-columns: repeat(3, 1fr); }
          .dx-grid-rw { grid-template-columns: 7fr 5fr; gap: 50px; align-items: start; }
          .dx-grid-cta { grid-template-columns: 1fr 1fr; gap: 64px; }
        }
      `}</style>

      {/* HERO / FIRST SECTION (#f1f1f1) */}
      <section id="home" className="section-bg-alt" style={{ ...styles.section, marginTop: "90px" }}>
        <div style={styles.container} className="dx-grid-2">
          <div>
            <span style={styles.heroBadge}>
              <Flag size={14} style={{ color: colors.brand }} /> Trusted by Businesses Across Middle East & Asia
              <BadgeCheck size={14} style={{ color: colors.brand }} />
            </span>

            <h4 className="px-about-title mb-20">
              <span className="text-blue-about">Our Successful</span> Global Client Projects
            </h4>
            <p className="text-figtree font-paragraph-cls text-black">
              We build high-performance digital solutions that empower enterprises and SMEs to grow, scale, and lead. Discover our completed platforms and solutions delivered for premier clients worldwide.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
              <a href="#work" onClick={handleNavClick("work")} style={styles.btnBrand}>
                Explore Featured Work
              </a>
              <a href="#contact" onClick={handleNavClick("contact")} style={styles.btnOutline}>
                Talk to Our Experts
              </a>
            </div>
          </div>

          <HeroGlobe />
        </div>
      </section>

      {/* ABOUT SECTION (#fff) */}
      <section id="about" className="section-bg-white" style={styles.section}>
        <div style={styles.container}>
          <div style={{ maxWidth: 800 }}>
            <span style={{ color: colors.brand, fontSize: ".85rem", fontWeight: 700, letterSpacing: 1.5, display: "block", marginBottom: 12 }}>
              ABOUT US
            </span>
            <h3 className="px-section-title text-tenor font-title-cls text-effect mb-20">
              <span className="word">Who We Are</span>
            </h3>
            <p className="text-figtree font-paragraph-cls text-black">
              DigitizeX is a premier digital engineering and tech consultancy enabling organizations worldwide to thrive online. We unite creative UX strategy, robust cloud technologies, and industry-standard development practices to construct high-performing websites, web apps, enterprise web applications, and custom digital portals.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION (#f1f1f1) */}
      <section id="services" className="section-bg-alt" style={styles.section}>
        <div style={styles.container}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span style={{ color: colors.brand, fontSize: ".85rem", fontWeight: 700, letterSpacing: 1.5, display: "block", marginBottom: 8 }}>
              WHAT WE DO
            </span>
            <h3 className="px-section-title text-tenor font-title-cls text-effect mb-20">
              <span className="word">Our Services</span>
            </h3>
          </div>
          <div className="dx-grid-4">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="dx-service-tile">
                  <Icon size={28} style={{ color: s.color, marginBottom: 12, display: "block", marginLeft: "auto", marginRight: "auto" }} />
                  {s.label}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED CLIENTS SECTION (#fff) */}
      <section id="work" className="section-bg-white" style={styles.section}>
        <div style={styles.container}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span style={{ color: colors.brand, fontSize: ".85rem", fontWeight: 700, letterSpacing: 1.5, display: "block", marginBottom: 8 }}>
              OUR CLIENT PORTFOLIO
            </span>
            <h3 className="px-section-title text-tenor font-title-cls text-effect mb-20">
              <span className="word">Featured Global Clients</span>
            </h3>
            <p className="text-figtree font-paragraph-cls text-black" style={{ maxWidth: 680, margin: "0 auto" }}>
              We take pride in building tailored digital experiences for leading enterprises, engineering firms, creative agencies, and service leaders across the region.
            </p>
          </div>

          <div className="dx-grid-3">
            {CLIENTS.map((c) => {
              const Icon = c.icon;
              const formattedUrl = c.domain.startsWith("http") ? c.domain : `https://${c.domain}`;
              return (
                <div key={c.domain} className="dx-client-card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{ fontWeight: 700, fontSize: "1.1rem", color: c.color, display: "flex", alignItems: "center", gap: 6 }}>
                      {Icon && <Icon size={18} />}
                      {c.brand}
                    </div>
                    <span style={{ fontSize: "1.2rem" }}>{c.flag}</span>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: "1.1rem", marginTop: 10, color: colors.ink }}>{c.name}</div>
                  <div style={styles.clientDomain}>{c.domain}</div>
                  <div style={styles.clientCategory}>{c.category}</div>
                  <span style={styles.badgeCompleted}>Completed</span>
                  <div>
                    <a href={formattedUrl} target="_blank" rel="noopener noreferrer" style={styles.visitLink}>
                      Visit Website <span aria-hidden>→</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RECENT WORK + TECHNOLOGIES SECTION (#f1f1f1) */}
      <section id="technologies" className="section-bg-alt" style={styles.section}>
        <div style={styles.container} className="dx-grid-rw">
          <div>
            <h4 className="px-about-title mb-20">
              <span className="text-blue-about">Our Recent</span> Regional Work
            </h4>
            <p className="text-figtree font-paragraph-cls text-black">
              We are proud to collaborate with esteemed market leaders globally. We specialize in delivering end-to-end digital engineering and interactive platforms designed for high scalability, cloud security, and search visibility.
            </p>
            <p className="text-figtree font-paragraph-cls text-black" style={{ marginTop: 12 }}>
              From initial architecture planning to UI/UX design, custom frontend and backend integration, continuous deployment, and ongoing optimization, our engineering team ensures precision execution every step of the way.
            </p>
          </div>

          <div>
            <h4 className="px-about-title mb-20">
              <span className="text-blue-about">TECHNOLOGIES WE</span> USE
            </h4>
            <div className="dx-grid-tech">
              {TECHS.map((t) => {
                const Icon = t.icon;
                return (
                  <div key={t.name} className="dx-tech-tile">
                    <Icon size={24} style={{ color: t.color, marginBottom: 8, display: "block", marginLeft: "auto", marginRight: "auto" }} />
                    {t.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS + ACHIEVEMENTS SECTION (#fff) */}
      <section id="testimonials" className="section-bg-white" style={styles.section}>
        <div style={styles.container} className="dx-grid-2">
          <div>
            <span style={{ color: colors.brand, fontSize: ".85rem", fontWeight: 700, letterSpacing: 1.5, display: "block", marginBottom: 8 }}>
              CLIENT TESTIMONIALS
            </span>
            <h4 className="px-about-title mb-20">
              <span className="text-blue-about">What Our</span> Clients Say
            </h4>

            <div className="dx-testimonial-card">
              <div style={{ color: "#f5a524", fontSize: "1rem", letterSpacing: 2, marginBottom: 4 }}>★★★★★</div>
              <p className="text-figtree font-paragraph-cls text-black" style={{ fontStyle: "italic", margin: "16px 0" }}>
                &quot;{TESTIMONIALS[testimonialIdx].text}&quot;
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={TESTIMONIALS[testimonialIdx].img}
                  alt={TESTIMONIALS[testimonialIdx].name}
                  style={{ width: 48, height: 48, borderRadius: "50%", objectFit: "cover", marginRight: 16 }}
                />
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
            <span style={{ color: colors.brand, fontSize: ".85rem", fontWeight: 700, letterSpacing: 1.5, display: "block", marginBottom: 8 }}>
              OUR ACHIEVEMENTS
            </span>
            <h4 className="px-about-title mb-20">
              <span className="text-blue-about">Numbers That</span> Define Us
            </h4>
            <p className="text-figtree font-paragraph-cls text-black">
              Our committed regional delivery team has supported brands in industrial engineering, eco-tech solutions, maritime logistics, energy, event management, media, and tech studios globally.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginTop: 20 }}>
              <div style={{ background: colors.bgSoft, padding: 18, borderRadius: 12, border: "1px solid #eef0f4" }}>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, color: colors.brand }}>150+</div>
                <div style={{ fontSize: ".85rem", color: colors.muted, marginTop: 4 }}>Web Platforms Built</div>
              </div>
              <div style={{ background: colors.bgSoft, padding: 18, borderRadius: 12, border: "1px solid #eef0f4" }}>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#1a9b5c" }}>98%</div>
                <div style={{ fontSize: ".85rem", color: colors.muted, marginTop: 4 }}>Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION (#f1f1f1) */}
      <section id="contact" className="section-bg-alt" style={{ padding: "64px 0" }}>
        <div style={styles.container} className="dx-grid-cta">
          {/* Left Column - Icon Cluster */}
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "-20px",
                background: "radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(241, 241, 241, 0) 70%)",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
                <IntegrationCard><GeminiIcon /></IntegrationCard>
                <IntegrationCard><ReplitIcon /></IntegrationCard>
              </div>
              <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
                <IntegrationCard><MagicUIIcon /></IntegrationCard>
                <IntegrationCard isCenter><CenterLogoIcon /></IntegrationCard>
                <IntegrationCard><VSCodiumIcon /></IntegrationCard>
              </div>
              <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
                <IntegrationCard><MediaWikiIcon /></IntegrationCard>
                <IntegrationCard><GooglePaLMIcon /></IntegrationCard>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 20 }}>
            <h4 className="px-about-title mb-20">
              <span className="text-blue-about">Have a Project</span> in Mind?
            </h4>

            <p className="text-figtree font-paragraph-cls text-black">
              Let&apos;s Build Something Extraordinary Together!
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 8 }}>
              <a href="#contact" onClick={handleNavClick("contact")} style={styles.btnBrand}>
                Get Free Consultation
              </a>
              <a href="#work" onClick={handleNavClick("work")} style={styles.btnOutline}>
                View Our Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitizeXPage;

// ---- HERO GLOBE SUBCOMPONENT ---------------------------------------------
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