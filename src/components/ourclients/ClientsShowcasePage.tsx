"use client";

import React, {
  useEffect,
  useRef,
  useState,
  CSSProperties,
} from "react";
import { Flag, BadgeCheck, ArrowUp } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import type { StaticImageData } from "next/image";


// ---- SHARED TYPES ---------------------------------------------------------
export interface ClientItem {
  name: string;
  category: string;
  color: string;
  website: string;
  icon?: React.ElementType;
}

export interface ClientGroup {
  countryLabel: string;
  countryFlag: React.ReactNode;
  clients: ClientItem[];
}

export interface TechItem {
  name: string;
  icon: React.ElementType;
  color: string;
}

export interface TestimonialItem {
  text: string;
  name: string;
  role: string;
  img?: string;
}

export interface WhyChooseItem {
  num: string;
  title: string;
  desc: string;
}

export interface ClientsShowcasePageProps {
  heroImage: StaticImageData;
  heroBadgeText: string;
  heroTitleHighlight: string;
  heroTitleRest: string;
  heroDescription: string;

  middleComponent?: React.ReactNode;

  aboutImage: StaticImageData;
  aboutTitleHighlight: string;
  aboutTitleRest: string;
  aboutDescription: string;

  whyChooseHeading: string;
  whyChooseDescription?: string;
  whyChooseItems: WhyChooseItem[];

  clientsSubtitle: string;
  clientsTitleHighlight: string;
  clientsTitleRest: string;
  clientsDescription: string;
  clients?: ClientItem[];
  clientGroups?: ClientGroup[];
  countryLabel?: string;
  countryFlag?: React.ReactNode;

  techSectionTitleHighlight: string;
  techSectionTitleRest: string;
  techDescription: string;
  techHeading: string;
  techs: TechItem[];

  testimonialsSubtitle: string;
  testimonialsTitleHighlight: string;
  testimonialsTitleRest: string;
  testimonials: TestimonialItem[];

  achievementsSubtitle: string;
  achievementsTitleHighlight: string;
  achievementsTitleRest: string;
  achievementsDescription: string;

  ctaTitleHighlight: string;
  ctaTitleRest: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaHref ?: string;
}

const colors = {
  brand: "#053456",
  ink: "#0f1626",
  muted: "#6b7280",
  line: "#eef0f4",
  bgSoft: "#f7f8fb",
} as const;

const styles: Record<string, CSSProperties> = {
  root: { background: "#fff", color: colors.ink, minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif", overflowX: "hidden" },
  section: { padding: "60px 0", overflow: "hidden" },
  container: { maxWidth: 1200, margin: "0 auto", padding: "0 24px", overflow: "hidden" },
  heroBadge: { background: "#eef2ff", color: "#334155", borderRadius: 999, padding: "7px 16px", fontSize: ".82rem", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 6 },
  clientCategory: { color: colors.muted, fontSize: ".82rem", margin: "6px 0 12px" },
  badgeCompleted: { background: "#e9fbf1", color: "#1a9b5c", fontWeight: 600, fontSize: ".72rem", padding: "5px 14px", borderRadius: 10, display: "inline-block" },
  visitLink: { color: colors.brand, fontSize: "1rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 4, textDecoration: "none" },
};

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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

export default function ClientsShowcasePage(props: ClientsShowcasePageProps) {
  const {
    heroImage,
    heroBadgeText,
    heroTitleHighlight,
    heroTitleRest,
    heroDescription,
    aboutImage,
    aboutTitleHighlight,
    aboutTitleRest,
    aboutDescription,
    whyChooseHeading,
    whyChooseDescription,
    whyChooseItems,
    middleComponent,
    clientsSubtitle,
    clientsTitleHighlight,
    clientsTitleRest,
    clientsDescription,
    clients,
    clientGroups,
    countryLabel,
    countryFlag,
    techSectionTitleHighlight,
    techSectionTitleRest,
    techDescription,
    techHeading,
    techs,
    testimonialsSubtitle,
    testimonialsTitleHighlight,
    testimonialsTitleRest,
    testimonials,
    achievementsSubtitle,
    achievementsTitleHighlight,
    achievementsTitleRest,
    achievementsDescription,
    ctaTitleHighlight,
    ctaTitleRest,
    ctaDescription,
    ctaButtonText,
    ctaHref,
  } = props;

  const [testimonialIdx, setTestimonialIdx] = useState<number>(0);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [aosInitialized, setAosInitialized] = useState(false);

  const flatClients: (ClientItem & { _countryLabel: string; _countryFlag: React.ReactNode })[] =
    clientGroups && clientGroups.length > 0
      ? clientGroups.flatMap((g) =>
        g.clients.map((c) => ({
          ...c,
          _countryLabel: g.countryLabel,
          _countryFlag: g.countryFlag,
        }))
      )
      : (clients || []).map((c) => ({
        ...c,
        _countryLabel: countryLabel || "",
        _countryFlag: countryFlag,
      }));

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-out-cubic",
      offset: 100,
      delay: 50,
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
    });

    setTimeout(() => {
      AOS.refresh();
      setAosInitialized(true);
    }, 100);

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    if (aosInitialized) AOS.refresh();
  }, [aosInitialized]);

  useEffect(() => {
    if (!testimonials.length) return;
    const t = setInterval(() => {
      setTestimonialIdx((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(t);
  }, [testimonials.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (aosInitialized) AOS.refresh();
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [aosInitialized]);

  const activeTestimonial = testimonials[testimonialIdx];

  return (
    <div style={styles.root}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; }
        html { scroll-behavior: smooth; overflow-x: hidden; }
        body { overflow-x: hidden; max-width: 100vw; }

        .dx-grid-2 { display: grid; grid-template-columns: 1fr; gap: 40px; }
        .dx-grid-3 { display: grid; grid-template-columns: 1fr; gap: 24px; }
        .dx-grid-4 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .dx-grid-tech { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .dx-grid-rw { display: grid; grid-template-columns: 1fr; gap: 40px; }
        .dx-grid-cta { display: grid; grid-template-columns: 1fr; gap: 48px; align-items: center; }

        .section-bg-alt { background-color: #f1f1f1; }
        .section-bg-white { background-color: #fff; }
        

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
         

        .dx-testimonial-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
        }

        [data-aos] {
          pointer-events: none;
          opacity: 0;
          transition-property: opacity, transform;
        }
        [data-aos].aos-animate {
          pointer-events: auto;
          opacity: 1 !important;
        }
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

      <section
        className="section-bg-alt"
        id="home"
        style={{
          ...styles.section,
          marginTop: "85px",
          position: "relative",
          overflow: "hidden",
          minHeight: "550px",
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(255,255,255,0.96) 0%,
              rgba(255,255,255,0.88) 35%,
              rgba(255,255,255,0.35) 65%,
              rgba(255,255,255,0.05) 100%
            ),
            url(${heroImage.src})
          `,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div style={{ ...styles.container, position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: "720px" }}>
            <div data-aos="fade-up" data-aos-delay="0">
              <span style={styles.heroBadge}>
                <Flag size={14} style={{ color: colors.brand }} />
                {heroBadgeText}
                <BadgeCheck size={14} style={{ color: colors.brand }} />
              </span>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">{heroTitleHighlight} </span>
                {heroTitleRest}
              </h4>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <p className="text-figtree text-black">{heroDescription}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bg-white" id="about" style={styles.section}>
        <div style={styles.container}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 40,
              alignItems: "center",
            }}
          >
            <div data-aos="fade-right" data-aos-delay="0">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">{aboutTitleHighlight} </span>
                {aboutTitleRest}
              </h4>
              <p className="text-figtree text-black" style={{ marginTop: 16 }}>
                {aboutDescription}
              </p>
            </div>

            <div data-aos="fade-left" data-aos-delay="100" style={{ textAlign: "center" }}>
              <img
                src={aboutImage.src}
                alt="Web Design Services Showcase"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 12,
                  objectFit: "cover",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container bf-service-area pt-50 pb-80" style={{ backgroundColor: "#053456", borderRadius: "20px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bf-service-heading mb-60 text-center">
                <h3
                  className="bf-section-title-3 text-white mb-20"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  {whyChooseHeading}
                  <p
                    data-aos="fade-up"
                    data-aos-delay="100"
                    style={{
                      color: "rgba(255, 255, 255, 0.85)",
                      fontSize: "16px",
                      lineHeight: "1.8",
                      margin: "0 auto",

                      marginTop: "20px",
                      fontFamily: "var(--font-figtree)",
                    }}
                  >
                    {whyChooseDescription}
                  </p>
                </h3>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              {whyChooseItems.map((item, index) => (
                <div
                  key={item.num}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                  style={{
                    display: "flex",
                    gap: "32px",
                    alignItems: "flex-start",
                    padding: "28px 0",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
                    borderTop: index === 0 ? "1px solid rgba(255, 255, 255, 0.15)" : "none",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "700",
                      color: "#53ae7d",
                      minWidth: "40px",
                    }}
                  >
                    {item.num}
                  </span>
                  <div>
                    <h4 className="text-white mb-10" style={{ fontSize: "1.25rem", fontWeight: "600" }}>
                      {item.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "rgba(255, 255, 255, 0.8)",
                        lineHeight: "1.7",
                        margin: 0,
                        fontFamily: "var(--font-figtree) !important",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {middleComponent && (
        <section
          style={{
            width: "100%",
            padding: "60px 0",
            background: "#fff",
            overflow: "hidden",
          }}
        >
          {middleComponent}
        </section>
      )}
      <section className="section-bg-white" id="clients" style={styles.section}>
        <div style={styles.container}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div data-aos="fade-up" data-aos-delay="0">
              <span className="px-section-subtitle  blink-ball mb-20 text-tenor">
                {clientsSubtitle}
              </span>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">{clientsTitleHighlight} </span>
                {clientsTitleRest}
              </h4>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <p className="text-figtree text-black">{clientsDescription}</p>
            </div>
          </div>

          <div className="dx-grid-4">
            {flatClients.map((c, index) => (
              <div
                className="dx-client-card"
                key={`${c.name}-${index}`}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    backgroundColor: "#f3f4f6",
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    padding: "3px 8px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "#374151",
                  }}
                >
                  {c._countryFlag}
                  <span>{c._countryLabel}</span>
                </div>

                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: colors.ink,
                      paddingRight: "65px",
                    }}
                  >
                    {c.name}
                  </div>
                  <div style={styles.clientCategory}>{c.category}</div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "16px",
                    marginBottom: 12,
                  }}
                >
                  <span style={styles.badgeCompleted}>Completed</span>
                  <a
                    href={c.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.visitLink}
                  >
                    Visit Website <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-bg-alt" id="technologies" style={styles.section}>
        <div style={styles.container} className="dx-grid-rw">
          <div>
            <div data-aos="fade-right" data-aos-delay="0">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">{techSectionTitleHighlight} </span>
                {techSectionTitleRest}
              </h4>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <p className="text-figtree text-black">{techDescription}</p>
            </div>
          </div>

          <div>
            <div data-aos="fade-left" data-aos-delay="0">
              <h4 className="px-about-title mb-20">{techHeading}</h4>
            </div>

            <div className="dx-grid-tech">
              {techs.map((t, index) => {
                const Icon = t.icon;
                return (
                  <div key={t.name} className="dx-tech-tile" data-aos="zoom-in" data-aos-delay={index * 50}>
                    <Icon
                      size={24}
                      style={{
                        color: t.color,
                        marginBottom: 8,
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                    {t.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bg-white" id="testimonials" style={styles.section}>
        <div style={styles.container} className="dx-grid-2">
          <div>
            <div data-aos="fade-right" data-aos-delay="0">
              <span className="px-section-subtitle pt-40 blink-ball mb-20 text-tenor">
                {testimonialsSubtitle}
              </span>
            </div>

            <div data-aos="fade-right" data-aos-delay="100">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">{testimonialsTitleHighlight} </span>
                {testimonialsTitleRest}
              </h4>
            </div>

            {activeTestimonial && (
              <div data-aos="fade-up" data-aos-delay="200" className="dx-testimonial-card">
                <div style={{ color: "#f5a524", fontSize: "1rem", letterSpacing: 2, marginBottom: 4 }}>
                  ★★★★★
                </div>
                <p className="text-figtree text-black" style={{ margin: "16px 0" }}>
                  &quot;{activeTestimonial.text}&quot;
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.98rem", color: colors.ink }}>
                      {activeTestimonial.name}
                    </div>
                    <div style={{ fontSize: ".82rem", color: colors.muted }}>{activeTestimonial.role}</div>
                  </div>
                </div>
              </div>
            )}

            <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
              {testimonials.map((_, i) => (
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
              <span className="px-section-subtitle pt-40 blink-ball mb-20 text-tenor">
                {achievementsSubtitle}
              </span>
            </div>

            <div data-aos="fade-left" data-aos-delay="100">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">{achievementsTitleHighlight} </span>
                {achievementsTitleRest}
              </h4>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <p className="text-figtree text-black">{achievementsDescription}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bg-alt" id="contact" style={{ padding: "64px 0", overflow: "hidden" }}>
        <div style={{ ...styles.container, maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
            <div data-aos="fade-up" data-aos-delay="0">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">{ctaTitleHighlight} </span>
                {ctaTitleRest}
              </h4>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <p className="text-figtree text-black">{ctaDescription}</p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginTop: 8 }}
            >
              <a href={ctaHref} className="btn-primary" style={{ fontSize: "18px" }}>
                {ctaButtonText}
              </a>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}