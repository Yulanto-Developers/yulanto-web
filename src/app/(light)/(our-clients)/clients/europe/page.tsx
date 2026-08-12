
"use client";

import {
  ShieldCheck, Radio, Cpu, Star, XCircle, Recycle, Trees,
  Atom, FileCode2, Hexagon, Database, Code2, Globe2, Cloud,
  ShoppingCart,
} from "lucide-react";
import ClientsShowcasePage from "@/components/ourclients/ClientsShowcasePage";
import { EuropeFlagIcon } from "@/components/ourclients/EuropeFlagIcon";
import Image1 from "@/assets/img/usa/europe.png";
import Image2 from "@/assets/img/usa/about.png";
import GlobalComp from "@/components/ourclients/globalcomp";

export default function USAClientsPage() {
  return (
    <>
      <ClientsShowcasePage
        heroImage={Image1}
        heroBadgeText="Your Trusted Global Digital Solutions Partner"
        heroTitleHighlight="Digital Solutions Across Europe, "
        heroTitleRest=" North America, the Middle East & Asia"
        heroDescription={`At Yulanto Web Creations, we provide comprehensive digital solutions to businesses across Europe, North America, the Middle East, and Asia. From innovative website design and custom web development to SEO, digital marketing, eCommerce, branding, and ongoing website support, we help businesses build a strong digital presence and achieve sustainable online growth.
Whether you are a startup, small business, growing company, professional organization, or established enterprise, our experienced team delivers scalable, user-friendly, and results-driven digital solutions tailored to your business goals and target market.`}
        aboutImage={Image2}
        aboutTitleHighlight="Our Global Digital Services Across "

        aboutTitleRest=" Europe, North America, the Middle East & Asia"
        aboutDescription="Create a professional online presence with responsive, modern, and conversion-focused websites. Transform an outdated website into a modern, mobile-friendly, and SEO-ready digital experience. Our website maintenance and support services help keep your website secure, updated, optimized, and performing smoothly."
        whyChooseHeading="Why Choose Yulanto Web Creations?"

        whyChooseItems={[
          { num: "01", title: "Global digital services for businesses across multiple regions", desc: "" },
          { num: "02", title: "Customized solutions based on your business requirements", desc: "" },
          { num: "03", title: "Responsive and mobile-friendly website development", desc: "" },
          { num: "04", title: "SEO-friendly and performance-focused solutions", desc: "" },
          { num: "05", title: "Experienced web design and digital marketing team", desc: "" },
          { num: "06", title: "Scalable solutions for startups, SMEs, and enterprises", desc: "" },
          { num: "07", title: "Transparent communication and project coordination", desc: "" },
          { num: "08", title: "Ongoing website maintenance and technical support", desc: "" },
          { num: "09", title: "Cost-effective digital solutions with long-term value", desc: "" },

        ]}
        // middleComponent={<IndustryCloud />}
        clientsSubtitle="OUR CLIENTS"
        clientsTitleHighlight="Featured Across Europe,
 "
        clientsTitleRest="North America, the Middle East & Asias Clients"
        clientsDescription="We are proud to work with businesses across the Singapore and Malaysia, delivering professional web design, website development, and digital solutions tailored to their unique needs. Here are some of the successful projects we have completed for our clients."
        countryLabel="EU"
        countryFlag={<EuropeFlagIcon />}
        clients={[
          {
            name: "Altis Marine",
            category: "Marine Services",
            color: "#1a9b5c",
            website: "https://altismarine.eu/",
          },
          {
            name: "Intrahop Technologies",
            category: "Technology & IT Services",
            color: "#2563eb",
            website: "https://www.intrahoptechnologies.com/",
          },
          {
            name: "Amendry Cleaners",
            category: "Cleaning Services",
            color: "#0f766e",
            website: "https://amendrycleaners.co.uk/",
          },
          {
            name: "LDF Kormesic",
            category: "Professional Services",
            color: "#7c3aed",
            website: "https://www.ldfkormesic.com/",
          },
          {
            name: "DHH Group",
            category: "Business Services",
            color: "#0369a1",
            website: "https://dhhgroup.dk/",
          },
        ]}
        techSectionTitleHighlight="Serving Businesses "
        techSectionTitleRest="Across Global Markets "
        techDescription="Our digital services are available to businesses and organizations across:
Europe – UK, Germany, France, Italy, Netherlands, Spain, Switzerland, Ireland, and other European markets.
North America – USA, Canada, and businesses across the wider North American market.
Middle East – UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain, and other GCC markets.
Asia – Singapore, Malaysia, India, and businesses across the wider Asian region.
We understand that every market has different customer expectations, business environments, and digital trends. Our team combines global digital best practices with customized strategies to create solutions that align with your market, audience, and business objectives."
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
          {
            text: "Great experience working with Yulanto Web Creations. Their team understood our requirements clearly and delivered a professional digital solution that reflects our business and helps us connect better with our customers.",
            name: "Michael Anderson",
            role: "Managing Director, United Kingdom",
          },
          {
            text: "Pleasure working with the Yulanto team. They were professional, responsive, and creative throughout the project. The final website provides our business with a modern and strong digital presence.",
            name: "Daniel Roberts",
            role: "Founder, United States",
          },
          {
            text: "Wonderful experience from start to finish. Yulanto Web Creations understood our business objectives and delivered a user-friendly website that works smoothly across devices and supports our growing business.",
            name: "James Wilson",
            role: "Business Owner, Canada",
          },
          {
            text: "Great connecting with the Yulanto team. They transformed our ideas into a professional online experience and provided excellent guidance throughout the design and development process.",
            name: "Oliver Martin",
            role: "Director, Australia",
          },
          {
            text: "Honoured to work with a team that takes the time to understand the client's vision. Yulanto Web Creations delivered a reliable and modern digital solution that exceeded our expectations.",
            name: "Ahmed Al Mansoori",
            role: "Managing Director, Middle East",
          },
          {
            text: "We were impressed with the quality of the website development and digital services. The team was knowledgeable, responsive, and focused on delivering a solution that matched our business requirements.",
            name: "Khalid Rahman",
            role: "Founder, Qatar",
          },
          {
            text: "Great working experience with Yulanto Web Creations. Their attention to detail and technical expertise helped us establish a stronger online presence and present our services professionally.",
            name: "Arjun Kumar",
            role: "Business Owner, India",
          },
          {
            text: "Pleasure working with the Yulanto team. They provided excellent communication and delivered a scalable digital solution that gives our company a stronger foundation for future growth.",
            name: "Daniel Tan",
            role: "Director, Singapore",
          },
        ]}
        achievementsSubtitle="OUR ACHIEVEMENTS"
        achievementsTitleHighlight="Delivering Successful"
        achievementsTitleRest="Digital Solutions"
        achievementsDescription="Our achievements reflect years of creativity, innovation, and commitment to delivering successful digital solutions. We have helped businesses across the Singapore & Malaysia  and beyond build powerful online experiences through professional web design, development, eCommerce, digital marketing, and ongoing technical support—from initial strategy and concept to design, development, deployment, and long-term growth."
        ctaTitleHighlight="Build Your Digital  "
        ctaTitleRest="Success Globally"
        ctaDescription="Your customers are online—make sure your business stands out. Whether you need a website, eCommerce store, custom web application, SEO campaign, digital marketing strategy, branding solution, or ongoing website support, Yulanto Web Creations is ready to help you turn your ideas into powerful digital experiences."
        ctaButtonText="Let’s build, grow, and strengthen your digital presence across global markets."
        ctaHref="#contact"
      />
      <GlobalComp />
    </>

  );
}