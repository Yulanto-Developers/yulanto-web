
"use client";

import {
  ShieldCheck, Radio, Cpu, Star, XCircle, Recycle, Trees,
  Atom, FileCode2, Hexagon, Database, Code2, Globe2, Cloud,
  ShoppingCart,
} from "lucide-react";

import ClientsShowcasePage from "@/components/ourclients/ClientsShowcasePage";
import { USAFlagIcon } from "@/components/ourclients/USAFlagIcon";
import Image1 from "@/assets/img/usa/usafalg.png";
import Image2 from "@/assets/img/usa/about.png";
import GlobalComp from "@/components/ourclients/globalcomp";

import AOS from "aos";
import "aos/dist/aos.css";


export default function USAClientsPage() {
  return (
     <>
    <ClientsShowcasePage
      heroImage={Image1}
      heroBadgeText="Your Trusted Digital Partner for Web Design, Development & Digital Marketing"
      heroTitleHighlight="Digital Solutions for"
      heroTitleRest="Businesses Across the USA"
      heroDescription={`At Yulanto Web Creations, we help businesses across the USA build a strong, professional, and results-driven digital presence. From website design and custom web development to eCommerce, SEO, digital marketing, graphic design, hosting, and ongoing website maintenance, we provide complete digital solutions under one roof. Whether you are a startup, small business, professional service provider, growing company, or established enterprise, our team creates customized solutions designed around your business goals, target audience, and growth plans.`}
      aboutImage={Image2}
      aboutTitleHighlight="Our Web Design Services"
      aboutTitleRest="for USA Businesses"
      aboutDescription="We design modern, responsive, user-friendly, and SEO-friendly websites that represent your brand professionally and help turn visitors into customers. From corporate websites and business websites to custom web applications, we develop solutions tailored to your requirements."
      whyChooseHeading="Why Choose Yulanto for Your Business in the USA"
      whyChooseItems={[
        { num: "01", title: "11+ Years of Experience", desc: "With more than a decade of experience in website design and digital solutions, we bring practical expertise to every project." },
        { num: "02", title: "Complete Digital Solutions", desc: "From your first website to SEO, digital marketing, eCommerce, hosting, and maintenance, you can manage your digital requirements with one experienced team." },
        { num: "03", title: "Customized Solutions", desc: "We don't believe in one-size-fits-all solutions. Every website and digital strategy is developed according to your business, industry, audience, and objectives." },
        { num: "04", title: "SEO-Friendly & Performance-Focused", desc: "We build websites with search engine visibility, mobile responsiveness, usability, security, and performance in mind." },
        { num: "05", title: "Affordable & Scalable", desc: "Our solutions are designed to provide value for startups, small businesses, and growing companies while allowing your digital presence to scale as your business grows." },
        { num: "06", title: "Business-Focused Approach", desc: "We don't simply create websites. We focus on building digital experiences that strengthen your brand, generate enquiries, improve customer engagement, and support business growth." },
        { num: "07", title: "Dedicated Support", desc: "Our support continues after your website goes live. From updates and maintenance to technical assistance and digital marketing, we are available to support your ongoing requirements." },
      ]}
      clientsSubtitle="OUR CLIENTS"
      clientsTitleHighlight="Featured"
      clientsTitleRest="USA Clients"
      clientsDescription="We are proud to work with businesses across the USA, delivering professional web design, website development, and digital solutions tailored to their unique needs. Here are some of the successful projects we have completed for our clients."
      countryLabel="USA"
      countryFlag={<USAFlagIcon />}
      clients={[
  {
    name: "Spark10 AI",
    category: "AI & Technology",
    color: "#1a9b5c",
    icon: ShieldCheck,
    website: "https://spark10.ai/",
  },
  {
    name: "IncTune",
    category: "SaaS / Software",
    color: "#2f5bff",
    icon: Radio,
    website: "https://inctune.com/",
  },
  {
    name: "iHotTech",
    category: "IT Services",
    color: "#111827",
    website: "https://ihottech.com/",
  },
  {
    name: "Infinity Robotics AI",
    category: "AI & Robotics",
    color: "#1c1c8f",
    icon: Cpu,
    website: "https://infinityrobotics.ai/",
  },
  {
    name: "Solstice6",
    category: "Consulting",
    color: "#111827",
    website: "https://solstice6.com/",
  },
  {
    name: "Star Ride",
    category: "Transport",
    color: "#1a9b5c",
    icon: Star,
    website: "https://staride.com/",
  },
  {
    name: "Xpress Auto Registration",
    category: "Automotive",
    color: "#e0355a",
    icon: XCircle,
    website: "https://xpressautoregistration.com/",
  },
  {
    name: "Bridge Green Upcycle",
    category: "Eco Solutions",
    color: "#2f9b4f",
    icon: Recycle,
    website: "https://bridgegreenupcycle.com/",
  },
  {
    name: "Yoma Enterprise",
    category: "Business Solutions",
    color: "#2f5bff",
    website: "https://yomaenterprise.com/",
  },
  {
    name: "Segreto DC",
    category: "Consulting",
    color: "#111827",
    website: "https://segretodc.com/",
  },
  {
    name: "Natna Staffing Solutions",
    category: "Staffing",
    color: "#111827",
    website: "https://natnastaffingsolutions.com/",
  },
  {
    name: "US Tree Cleaning",
    category: "Cleaning Services",
    color: "#1a9b5c",
    icon: Trees,
    website: "https://ustreetcleaning.com/",
  },
]}
      techSectionTitleHighlight="Serving Businesses"
      techSectionTitleRest="Across the USA"
      techDescription="We proudly provide web design, website development, eCommerce, SEO, digital marketing, graphic design, hosting, and website maintenance services to businesses across the USA. Our remote digital services allow us to work with businesses in different industries and locations while providing professional communication, customized solutions, and ongoing support. Whether you are launching a new business, redesigning an existing website, expanding your online store, improving search rankings, or looking for a complete digital marketing partner, Yulanto Web Creations can help you build and grow your online presence."
      techHeading="TECHNOLOGIES WE USE"
      techs={[
               { name: "React", icon: Atom, color: "#61dafb" },
               { name: "Node.js", icon: Hexagon, color: "#3c873a" },
               { name: "Tailwind CSS", icon: Code2, color: "#06b6d4" },
               { name: "PHP", icon: FileCode2, color: "#777bb4" },
               { name: "CodeIgniter", icon: Code2, color: "#ef4223" },
               { name: "WordPress", icon: Globe2, color: "#21759b" },
               { name: "Shopify", icon: ShoppingCart, color: "#8b5cf6" },
               { name: "MySQL", icon: Database, color: "#00758f" },
               { name: "JavaScript", icon: FileCode2, color: "#f7df1e" },
               { name: "HTML5", icon: FileCode2, color: "#e34c26" },
               { name: "CSS3", icon: FileCode2, color: "#2965f1" },
               { name: "jQuery", icon: Code2, color: "#0769ad" },
             ]}
      testimonialsSubtitle="CLIENT TESTIMONIALS"
      testimonialsTitleHighlight="What Our"
      testimonialsTitleRest="Clients Say"
      testimonials={[
        { text: "Yulanto team delivered an exceptional AI platform that exceeded our expectations. Highly professional!", name: "John Davis", role: "CTO, Spark10 AI" },
        { text: "Their expertise in SaaS development is outstanding. Our platform runs perfectly!", name: "Michael Smith", role: "Founder, IncTune" },
        { text: "Amazing team! They understand business needs and deliver on time.", name: "David Wilson", role: "CEO, Infinity Robotics AI" },
      ]}
      achievementsSubtitle="OUR ACHIEVEMENTS"
      achievementsTitleHighlight="Delivering Successful"
      achievementsTitleRest="Digital Solutions"
      achievementsDescription="Our achievements reflect years of creativity, innovation, and commitment to delivering successful digital solutions. We have helped businesses across the USA and beyond build powerful online experiences through professional web design, development, eCommerce, digital marketing, and ongoing technical support—from initial strategy and concept to design, development, deployment, and long-term growth."
      ctaTitleHighlight="Let's Build Your"
      ctaTitleRest="Digital Presence"
      ctaDescription="Your website is more than an online brochure—it is an important part of your business growth. Let our team create a professional digital presence that helps your business stand out, connect with your customers, and achieve your online goals."
      ctaButtonText="Get in touch with Yulanto Web Creations today and let's create your next digital success story."
      ctaHref="#contact"
    />
     <GlobalComp />
   </>

  );

}
const HERO_STATS=[
  { label: "Years of Experience", value: "11+", icon: ShieldCheck, bg: "#e0f2ff", color: "#2f5bff" },
  { label: "Projects Completed", value: "250+", icon: Star, bg: "#e0f2ff", color: "#2f5bff" },
  { label: "Satisfied Clients", value: "100+", icon: Recycle, bg: "#e0f2ff", color: "#2f5bff" },  
]
// ---- HERO GLOBE SUBCOMPONENTS ---------------------------------------------
const colors = {
  muted: "#6b7280",
  ink: "#111827",
};

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
        const pos:any =
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

