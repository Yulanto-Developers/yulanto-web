"use client";

import React, { useEffect, useMemo, useRef, useState, CSSProperties } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Badge,
  Button,
  Carousel,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

/**
 * DigitizeXPage
 * Single-component React + react-bootstrap (TypeScript) port of the DigitizeX landing page.
 *
 * Install first:
 *   npm install react-bootstrap bootstrap bootstrap-icons
 *   npm install -D @types/react @types/react-dom
 *
 * Usage:
 *   import DigitizeXPage from "./DigitizeXPage";
 *   <DigitizeXPage />
 */

// ---- TYPES --------------------------------------------------------------
interface ClientItem {
  name: string;
  brand: string;
  domain: string;
  category: string;
  color: string;
  icon?: string;
}

interface TechItem {
  name: string;
  icon: string;
  color: string;
}

interface TestimonialItem {
  text: string;
  name: string;
  role: string;
  img: string;
}

interface ServiceItem {
  icon: string;
  color: string;
  label: string;
}

interface NavItem {
  id: string;
  label: string;
}

// ---- DATA -----------------------------------------------------------------
const CLIENTS: ClientItem[] = [
  { name: "Spark10 AI", brand: "SPARK10", domain: "spark10.ai", category: "AI & Technology", color: "#e0355a" },
  { name: "IncTune", brand: "INCTUNE", domain: "inctune.com", category: "SaaS / Software", color: "#2f5bff", icon: "bi-broadcast" },
  { name: "iHotTech", brand: "iHOTTECH", domain: "ihottech.com", category: "IT Services", color: "#111827" },
  { name: "Infinity Robotics AI", brand: "INFINITY ROBOTICS", domain: "infinityrobotics.ai", category: "AI & Robotics", color: "#1c1c8f", icon: "bi-cpu" },
  { name: "Solstice6", brand: "SOLSTICE6", domain: "solstice6.com", category: "Consulting", color: "#111827" },
  { name: "Star Ride", brand: "STAR RIDE", domain: "staride.com", category: "Transport", color: "#1a9b5c", icon: "bi-star-fill" },
  { name: "Xpress Auto Registration", brand: "XPRESS", domain: "xpressautoregistration.com", category: "Automotive", color: "#e0355a", icon: "bi-x-circle-fill" },
  { name: "Bridge Green Upcycle", brand: "BRIDGE GREEN", domain: "bridgegreenupcycle.com", category: "Eco Solutions", color: "#2f9b4f", icon: "bi-recycle" },
  { name: "Yoma Enterprise", brand: "YOMA", domain: "yomaenterprise.com", category: "Business Solutions", color: "#2f5bff" },
  { name: "Segreto DC", brand: "SEGRETO", domain: "segretodc.com", category: "Consulting", color: "#111827", icon: "bi-currency-dollar" },
  { name: "Natna Staffing Solutions", brand: "NATNA", domain: "natnastaffingsolutions.com", category: "Staffing", color: "#111827" },
  { name: "US Tree Cleaning", brand: "U.S. TREE CLEANING", domain: "ustreetcleaning.com", category: "Cleaning Services", color: "#1a9b5c", icon: "bi-tree-fill" },
];

const TECHS: TechItem[] = [
  { name: "React", icon: "bi-atom", color: "#2f5bff" },
  { name: "Bootstrap", icon: "bi-bootstrap-fill", color: "#7b3fb0" },
  { name: "PHP", icon: "bi-filetype-php", color: "#6b7bd1" },
  { name: "Laravel", icon: "bi-hexagon-fill", color: "#e0555a" },
  { name: "MySQL", icon: "bi-database-fill", color: "#00758f" },
  { name: "JavaScript", icon: "bi-filetype-js", color: "#f0b90b" },
  { name: "Node.js", icon: "bi-hexagon", color: "#3c873a" },
  { name: "HTML5", icon: "bi-filetype-html", color: "#e34c26" },
  { name: "CSS3", icon: "bi-filetype-css", color: "#2965f1" },
  { name: "jQuery", icon: "bi-code-slash", color: "#0769ad" },
  { name: "REST API", icon: "bi-diagram-2-fill", color: "#111827" },
  { name: "Cloud", icon: "bi-cloud-fill", color: "#2f9bd6" },
];

const TESTIMONIALS: TestimonialItem[] = [
  { text: "DigitizeX team delivered an exceptional AI platform that exceeded our expectations. Highly professional!", name: "John Davis", role: "CTO, Spark10 AI", img: "https://i.pravatar.cc/80?img=13" },
  { text: "Their expertise in SaaS development is outstanding. Our platform runs perfectly!", name: "Michael Smith", role: "Founder, IncTune", img: "https://i.pravatar.cc/80?img=8" },
  { text: "Amazing team! They understand business needs and deliver on time.", name: "David Wilson", role: "CEO, Infinity Robotics AI", img: "https://i.pravatar.cc/80?img=51" },
];

const SERVICES: ServiceItem[] = [
  { icon: "bi-code-slash", color: "#2f5bff", label: "Web Development" },
  { icon: "bi-phone", color: "#1a9b5c", label: "Mobile App Development" },
  { icon: "bi-palette", color: "#e0555a", label: "UI/UX Design" },
  { icon: "bi-graph-up-arrow", color: "#e0a72f", label: "SEO & Digital Marketing" },
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

// ---- THEME / INLINE STYLES -------------------------------------------------
const colors = {
  brandBlue: "#053456",
  ink: "#0f1626",
  muted: "#6b7280",
  line: "#eef0f4",
  bgSoft: "#f7f8fb",
} as const;

const styles: Record<string, CSSProperties> = {
  root: { fontFamily: "'Inter', sans-serif", color: colors.ink, background: "#fff" },
  scrollSection: { scrollMarginTop: 90 },
  brandLogo: { fontWeight: 800, fontSize: "1.35rem", color: colors.ink },
  brandLogoAccent: { color: colors.brandBlue },
  navLink: { color: "#374151", fontWeight: 500, fontSize: ".95rem", margin: "0 .65rem", cursor: "pointer" },
  navLinkActive: { color: colors.brandBlue, fontWeight: 600 },
  btnBrand: { background: colors.brandBlue, border: "none", color: "#fff", borderRadius: 50, padding: ".55rem 1.3rem", fontWeight: 600, fontSize: ".9rem" },
  heroBadge: { background: "#eef2ff", color: "#334155", borderRadius: 50, padding: ".35rem .9rem", fontSize: ".8rem", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: ".4rem" },
  heroTitle: { fontWeight: 800, fontSize: "3rem", lineHeight: 1.15 },
  blue: { color: colors.brandBlue },
  heroSub: { color: colors.muted, fontSize: "1.02rem", maxWidth: 520 },
  eyebrow: { color: colors.brandBlue, fontWeight: 700, fontSize: ".78rem", letterSpacing: ".06em" },
  sectionTitle: { fontWeight: 800, fontSize: "2rem" },
  sectionSub: { color: colors.muted, maxWidth: 640, margin: "0 auto" },
  clientCard: { border: `1px solid ${colors.line}`, borderRadius: 14, padding: "1.2rem", height: "100%" },
  clientDomain: { color: colors.brandBlue, fontSize: ".82rem" },
  clientCategory: { color: colors.muted, fontSize: ".8rem", margin: ".15rem 0 .5rem" },
  badgeCompleted: { background: "#e9fbf1", color: "#1a9b5c", fontWeight: 600, fontSize: ".72rem", padding: ".3rem .7rem", borderRadius: 50 },
  visitLink: { color: colors.brandBlue, fontSize: ".85rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: ".25rem", marginTop: ".6rem" },
  techTile: { border: `1px solid ${colors.line}`, borderRadius: 12, padding: "1rem .5rem", textAlign: "center", fontSize: ".78rem", fontWeight: 600, color: colors.ink, height: "100%" },
  testimonialCard: { border: `1px solid ${colors.line}`, borderRadius: 14, padding: "1.4rem", background: "#fff", minHeight: 260 },
  ctaBanner: { background: colors.brandBlue, borderRadius: 22, color: "#fff", overflow: "hidden", position: "relative" },
  footer: { background: colors.brandBlue, color: "#c6cbdb" },
  footerHeading: { color: "#fff", fontWeight: 700, marginBottom: "1rem", fontSize: ".95rem" },
  footerLink: { color: "#f1f1f1", fontSize: ".88rem", display: "block", marginBottom: ".55rem", textDecoration: "none" },
  footerSocial: { width: 34, height: 34, borderRadius: "50%", background: "#1a2338", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", marginRight: ".5rem" },
};

// ---- COMPONENT ------------------------------------------------------------
const DigitizeXPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [expanded, setExpanded] = useState<boolean>(false);
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

  const handleNavClick =
    (id: string) =>
    (e: React.MouseEvent<HTMLElement>): void => {
      e.preventDefault();
      setExpanded(false);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <div style={styles.root}>
      {/* NAVBAR */}
      <Navbar
        bg="white"
        expand="lg"
        sticky="top"
        expanded={expanded}
        onToggle={(next: boolean) => setExpanded(next)}
        className="py-3"
        style={{ borderBottom: `1px solid ${colors.line}` }}
      >
        <Container>
          <Navbar.Brand href="#home" onClick={handleNavClick("home")} style={styles.brandLogo}>
            DigitizeX<span style={styles.brandLogoAccent}>X</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="mx-auto mb-2 mb-lg-0">
              {NAV_ITEMS.map((item) => (
                <Nav.Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={handleNavClick(item.id)}
                  style={{
                    ...styles.navLink,
                    ...(activeSection === item.id ? styles.navLinkActive : {}),
                  }}
                >
                  {item.label}
                </Nav.Link>
              ))}
            </Nav>
            <Button
              href="#contact"
              onClick={handleNavClick("contact")}
              style={styles.btnBrand}
              className="d-none d-lg-inline-flex align-items-center gap-1"
            >
              Let&apos;s Talk <i className="bi bi-arrow-right" />
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* HERO */}
      <section id="home" style={{ ...styles.scrollSection, padding: "3rem 0" }}>
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <span style={styles.heroBadge} className="mb-3">
                <i className="bi bi-flag-fill text-primary" /> Trusted by Businesses Across the USA{" "}
                <i className="bi bi-patch-check-fill text-primary" />
              </span>
              <h1 style={styles.heroTitle} className="mt-3 mb-3">
                Our Successful <span style={styles.blue}>USA Client</span> Projects
              </h1>
              <p style={styles.heroSub} className="mb-4">
                We build digital solutions that help businesses grow, scale, and succeed in the digital world. Here
                are some of our completed projects for amazing clients across the USA.
              </p>
            </Col>

            <Col lg={6}>
              <HeroGlobe />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ABOUT */}
      <section id="about" style={styles.scrollSection}>
        <Container className="py-4">
          <Row className="align-items-center g-4">
            <Col lg={12}>
              <div style={styles.eyebrow}>ABOUT US</div>
              <h2 style={{ ...styles.sectionTitle, fontSize: "1.8rem" }} className="mt-2 mb-3">
                Who We Are
              </h2>
              <p style={{ ...styles.sectionSub, margin: 0 }}>
                DigitizeX is a digital solutions agency helping businesses across the USA grow, scale, and succeed
                online. We combine creativity, technical expertise, and industry best practices to design and build
                websites, web apps, mobile apps, and enterprise software tailored to each client&apos;s goals.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SERVICES */}
      <section id="services" style={styles.scrollSection}>
        <Container className="py-4">
          <div className="text-center mb-4">
            <div style={styles.eyebrow}>WHAT WE DO</div>
            <h2 style={{ ...styles.sectionTitle, fontSize: "1.8rem" }} className="mt-2">
              Our Services
            </h2>
          </div>
          <Row className="g-3">
            {SERVICES.map((s) => (
              <Col md={3} xs={6} key={s.label}>
                <div style={styles.techTile}>
                  <i className={`bi ${s.icon}`} style={{ color: s.color, fontSize: "1.5rem", marginBottom: ".4rem", display: "block" }} />
                  {s.label}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* FEATURED CLIENTS */}
      <section id="work" style={styles.scrollSection}>
        <Container className="py-4">
          <div className="text-center mb-5">
            <div style={styles.eyebrow}>OUR CLIENTS</div>
            <h2 style={styles.sectionTitle} className="mt-2">
              Featured USA Clients
            </h2>
            <p style={styles.sectionSub} className="mt-2">
              We are proud to have worked with amazing businesses across the USA. Here are some of our successfully
              completed projects.
            </p>
          </div>

          <Row className="g-4">
            {CLIENTS.map((c) => (
              <Col md={4} sm={6} key={c.domain}>
                <Card style={styles.clientCard} className="border-0 h-100">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="fw-bold" style={{ color: c.color, fontSize: "1.05rem" }}>
                      {c.icon && <i className={`bi ${c.icon} me-1`} />}
                      {c.brand}
                    </div>
                    <span style={{ fontSize: "1.1rem" }}>🇺🇸</span>
                  </div>
                  <div className="fw-bold mt-2" style={{ fontSize: "1.05rem" }}>
                    {c.name}
                  </div>
                  <div style={styles.clientDomain}>{c.domain}</div>
                  <div style={styles.clientCategory}>{c.category}</div>
                  <Badge style={styles.badgeCompleted} bg="">
                    Completed
                  </Badge>
                  <div>
                    <a href="#" style={styles.visitLink}>
                      Visit Website <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* RECENT WORK + TECHNOLOGIES */}
      <section id="technologies" style={styles.scrollSection}>
        <Container className="py-4">
          <Row className="g-4">
            <Col lg={7}>
              <h3 style={{ ...styles.sectionTitle, fontSize: "1.5rem" }} className="mb-3">
                Our Recent Work
              </h3>
              <p style={styles.sectionSub} className="mt-2">
                We are proud to have worked with amazing businesses across the USA. We specialize in delivering
                innovative digital solutions that empower businesses to achieve sustainable growth and long-term
                success. Our team combines creativity, technical expertise, and industry best practices to develop
                high-quality websites, web applications, mobile apps, AI-powered platforms, and enterprise software
                tailored to each client&apos;s unique business goals. From the initial concept and strategic planning
                to design, development, testing, deployment, and ongoing support, we ensure every project is built
                with precision, performance, and scalability.
              </p>
            </Col>

            <Col lg={5}>
              <div style={styles.eyebrow}>TECHNOLOGIES WE USE</div>
              <h3 style={{ ...styles.sectionTitle, fontSize: "1.5rem" }} className="mb-3">
                Technologies We Work With
              </h3>
              <Row className="g-2">
                {TECHS.map((t) => (
                  <Col xs={4} key={t.name}>
                    <div style={styles.techTile}>
                      <i className={`bi ${t.icon}`} style={{ color: t.color, fontSize: "1.5rem", marginBottom: ".4rem", display: "block" }} />
                      {t.name}
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* TESTIMONIALS + ACHIEVEMENTS */}
      <section id="testimonials" style={{ ...styles.scrollSection, background: colors.bgSoft, padding: "3rem 0" }} className="mt-4">
        <Container>
          <Row className="g-4">
            <Col lg={6}>
              <div style={styles.eyebrow}>CLIENT TESTIMONIALS</div>
              <h3 style={{ ...styles.sectionTitle, fontSize: "1.5rem" }} className="mb-3">
                What Our Clients Say
              </h3>
              <Carousel indicators={false} interval={4000}>
                {TESTIMONIALS.map((t) => (
                  <Carousel.Item key={t.name}>
                    <div style={styles.testimonialCard}>
                      <div style={{ color: "#f5a524", fontSize: ".85rem" }}>★★★★★</div>
                      <p style={{ color: "#374151", fontSize: ".92rem", margin: ".8rem 0 1.2rem" }}>
                        &quot;{t.text}&quot;
                      </p>
                      <div className="d-flex align-items-center">
                        <img
                          src={t.img}
                          alt={t.name}
                          style={{ width: 42, height: 42, borderRadius: "50%", objectFit: "cover", marginRight: "1rem" }}
                        />
                        <div>
                          <h6 className="mb-0">{t.name}</h6>
                          <small>{t.role}</small>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>

            <Col lg={6}>
              <div style={styles.eyebrow}>OUR ACHIEVEMENTS</div>
              <h3 style={{ ...styles.sectionTitle, fontSize: "1.5rem" }} className="mb-3">
                Numbers That Define Us
              </h3>
              <p style={styles.sectionSub} className="mt-2">
                We are proud to have worked with amazing businesses across the USA. We specialize in delivering
                innovative digital solutions that empower businesses to achieve sustainable growth and long-term
                success, from initial concept and strategic planning to design, development, testing, deployment,
                and ongoing support.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section style={{ padding: "3rem 0" }}>
        <Container>
          <div style={styles.ctaBanner} className="p-5 text-center">
            <h3 className="fw-bold mb-1">Have a Project in Mind?</h3>
            <h3 className="fw-bold mb-4">Let&apos;s Build Something Amazing Together!</h3>
            <div className="d-flex justify-content-center gap-3 flex-wrap position-relative">
              <Button href="#contact" onClick={handleNavClick("contact")} variant="light" className="fw-semibold rounded-pill px-4">
                Get Free Consultation
              </Button>
              <Button href="#work" onClick={handleNavClick("work")} variant="outline-light" className="fw-semibold rounded-pill px-4">
                View Our Work
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer id="contact" style={{ ...styles.scrollSection, ...styles.footer }} className="pt-5 pb-3">
        <Container>
          <Row className="g-4">
            <Col lg={4} xs={6}>
              <div className="text-white mb-2" style={{ fontWeight: 800, fontSize: "1.35rem" }}>
                DigitizeX<span className="text-primary">X</span>
              </div>
              <p style={{ fontSize: ".88rem", color: "#f1f1f1" }}>
                We build digital solutions that help businesses grow, scale, and succeed in the digital world.
              </p>
              <div className="d-flex mt-3">
                {(["facebook", "twitter", "linkedin", "globe"] as const).map((icon) => (
                  <span style={styles.footerSocial} key={icon}>
                    <i className={`bi bi-${icon}`} />
                  </span>
                ))}
              </div>
            </Col>

            <Col lg={2} xs={6}>
              <h6 style={styles.footerHeading}>Quick Links</h6>
              {NAV_ITEMS.slice(0, 5).map((item) => (
                <a key={item.id} href={`#${item.id}`} onClick={handleNavClick(item.id)} style={styles.footerLink}>
                  {item.label}
                </a>
              ))}
            </Col>

            <Col lg={2} xs={6}>
              <h6 style={styles.footerHeading}>Services</h6>
              {["Web Development", "Mobile App Development", "UI/UX Design", "SEO Services", "Digital Marketing"].map((s) => (
                <a key={s} href="#services" onClick={handleNavClick("services")} style={styles.footerLink}>
                  {s}
                </a>
              ))}
            </Col>

            <Col lg={2} xs={6}>
              <h6 style={styles.footerHeading}>Technologies</h6>
              {["React Development", "PHP Development", "Laravel Development", "E-commerce Solutions", "CMS Development"].map((s) => (
                <a key={s} href="#technologies" onClick={handleNavClick("technologies")} style={styles.footerLink}>
                  {s}
                </a>
              ))}
            </Col>

            <Col lg={2} xs={6}>
              <h6 style={styles.footerHeading}>Contact Info</h6>
              <a href="mailto:hello@digitizex.com" style={styles.footerLink}>
                <i className="bi bi-envelope me-1" /> hello@digitizex.com
              </a>
              <a href="tel:+15551234567" style={styles.footerLink}>
                <i className="bi bi-telephone me-1" /> +1 (555) 123-4567
              </a>
              <a href="#" style={styles.footerLink}>
                <i className="bi bi-geo-alt me-1" /> 123 Business Ave, New York, NY 10001 USA
              </a>
            </Col>
          </Row>

          <div
            className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4 pt-3 gap-2"
            style={{ borderTop: "1px solid #1a2338", fontSize: ".82rem", color: "#8890a5" }}
          >
            <div style={{ color: "#f1f1f1" }}>© 2024 DigitizeX. All Rights Reserved.</div>
            <div className="d-flex gap-3">
              <a href="#" style={{ color: "#f1f1f1", marginBottom: 0 }}>Privacy Policy</a>
              <a href="#" style={{ color: "#f1f1f1", marginBottom: 0 }}>Terms of Service</a>
              <a href="#" style={{ color: "#f1f1f1", marginBottom: 0 }}>Sitemap</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default DigitizeXPage;

// ---- HERO GLOBE SUBCOMPONENTS ---------------------------------------------
const HeroGlobe: React.FC = () => {
  return (
    <div style={{ position: "relative", height: 420 }}>
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
          margin: "auto",
          background: "radial-gradient(circle at 30% 30%, #6f8cff, #2f5bff 60%, #1c3fd6 100%)",
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 30px 60px rgba(47,91,255,.25)",
        }}
      />

      <FloatCard style={{ top: 10, right: 0 }} bg="#e8edff" color="#2f5bff" icon="bi-box-seam-fill" label="Projects Delivered" value="120+" />
      <FloatCard style={{ top: 150, left: 0 }} bg="#e6fbf0" color="#1a9b5c" icon="bi-gem" label="Client Satisfaction" value="95%" />
      <FloatCard style={{ bottom: 10, right: "10%" }} bg="#fdeeee" color="#e0555a" icon="bi-people-fill" label="Countries Served" value="5+" />
    </div>
  );
};

interface FloatCardProps {
  style: CSSProperties;
  bg: string;
  color: string;
  icon: string;
  label: string;
  value: string;
}

const FloatCard: React.FC<FloatCardProps> = ({ style, bg, color, icon, label, value }) => {
  return (
    <div
      style={{
        position: "absolute",
        background: "#fff",
        borderRadius: 14,
        padding: ".8rem 1rem",
        boxShadow: "0 15px 35px rgba(15,22,38,.1)",
        minWidth: 170,
        ...style,
      }}
    >
      <div className="d-flex align-items-center gap-2">
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1rem",
            background: bg,
            color,
          }}
        >
          <i className={`bi ${icon}`} />
        </div>
        <div>
          <div style={{ fontSize: ".72rem", color: colors.muted }}>{label}</div>
          <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>{value}</div>
        </div>
      </div>
    </div>
  );
}; 