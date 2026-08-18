
"use client";

import {
  ShieldCheck, Radio, Cpu, Star, XCircle, Recycle, Trees,
  Atom, FileCode2, Hexagon, Database, Code2, Globe2, Cloud,
  ShoppingCart,
} from "lucide-react";
import ClientsShowcasePage from "@/components/ourclients/ClientsShowcasePage";
import { UAEFlagIcon } from "@/components/ourclients/UAEFlagIcon";
import Image1 from "@/assets/img/usa/banner-uae.jpg";
import Image2 from "@/assets/img/usa/image-uae.jpg";
import GlobalComp from "@/components/ourclients/globalcomp";
import { IndustryCloud } from "@/components/ourclients/IndustryCloud";

export default function USAClientsPage() {
  return (
    <>
      <ClientsShowcasePage
        heroImage={Image1}
        heroBadgeText="Transform Your Business with Digital Solutions in UAE"
        heroTitleHighlight="Digital Solutions"
        heroTitleRest=" Company in UAE"
        heroDescription={`Yulanto Web Creations provides professional web design, website development, e-commerce, digital marketing, SEO, and custom digital solutions in UAE. We help startups, SMEs, established businesses, and organizations build a strong digital presence, attract the right audience, generate quality leads, and achieve sustainable business growth.
From a modern corporate website to a powerful e-commerce platform or a complete digital marketing strategy, our team delivers end-to-end digital solutions tailored to your business goals and the UAE market.`}
        aboutImage={Image2}
        aboutTitleHighlight="Our Digital"

        aboutTitleRest=" Services in UAE"
        aboutDescription="Create a professional and high-performing online presence with our web design and website development services in UAE. We develop responsive, user-friendly, mobile-friendly, and SEO-ready websites that represent your brand and convert visitors into customers"
        whyChooseHeading="Why Choose Yulanto Web Creations?"
        whyChooseDescription="Choosing the right digital partner can make a significant difference to your online success. At Yulanto Web Creations, we combine creative design, reliable technology, SEO best practices, and digital marketing expertise to deliver solutions that support measurable business growth."
        whyChooseItems={[
          { num: "01", title: "Customized digital solutions", desc: "" },
          { num: "02", title: "Modern and responsive designs", desc: "" },
          { num: "03", title: "SEO-friendly development", desc: "" },
          { num: "04", title: "User-focused website experiences", desc: "" },
          { num: "05", title: "Scalable technology solutions", desc: "" },
          { num: "06", title: "Digital marketing expertise", desc: "" },
        ]}
        middleComponent={<IndustryCloud />}
        clientsSubtitle="OUR CLIENTS"
        clientsTitleHighlight="Digital Solutions"
        clientsTitleRest=" for Businesses Across UAE"
        clientsDescription="We work with businesses across the UAE, including companies in Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain."
        countryLabel="UAE"
        countryFlag={<UAEFlagIcon />}
        clients={[
                 
          {
            name: "DDC Maritime",
            category: "Maritime Services",
            color: "#2563eb",
            website: "https://www.ddcmaritime.com/",
          },
          {
            name: "Black Storm Energy",
            category: "Energy Services",
            color: "#111827",
            website: "http://www.blackstormenergy.com/",
          },
          {
            name: "Hitco Kuwait",
            category: "Business Services",
            color: "#d97706",
            website: "http://hitcokuwait.com/",
          },
          {
            name: "Blue Anchor",
            category: "Business Services",
            color: "#2563eb",
            website: "https://blueanchor.llc/",
          },
          {
            name: "MBA London",
            category: "Education & Business",
            color: "#7c3aed",
            website: "https://mbalondon.org.uk/",
          },
          {
            name: "Hali Consult",
            category: "Consulting Services",
            color: "#0f766e",
            website: "https://www.haliconsult.com/",
          },
          {
            name: "Shammah Al Nissi",
            category: "Business Services",
            color: "#be123c",
            website: "https://www.shammahalnissi.com/",
          },
          {
            name: "BQAB",
            category: "Business Services",
            color: "#0369a1",
            website: "https://www.bqab.qa/",
          },
          {
            name: "Adhelant",
            category: "Business Services",
            color: "#4f46e5",
            website: "https://www.adhelant.com/",
          },
          {
            name: "Terrapulse",
            category: "Technology & Energy",
            color: "#15803d",
            website: "https://terrapulse.com.sa/",
          },
        ]}
        techSectionTitleHighlight="Your Trusted Digital  "
        techSectionTitleRest="Partner in UAE"
        techDescription="Whether you are launching a new business, redesigning an existing website, starting an online store, or looking to improve your search rankings and online visibility, Yulanto Web Creations can help.
We provide complete digital solutions in UAE, from strategy and design to development, marketing, optimization, and ongoing support. Our goal is to help your business build a stronger digital presence, connect with the right customers, and achieve sustainable online growth."
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
            text: "Yulanto Web Creations helped us build a professional and modern website that represents our business perfectly. Their team was responsive, creative, and delivered exactly what we needed.",
            name: "Ahmed Al Mansoori",
            role: "Managing Director, UAE Business",
          },
          {
            text: "We were impressed with the quality of their web development and digital marketing services. They understood our requirements quickly and delivered a smooth, user-friendly website.",
            name: "Mohammed Rahman",
            role: "Founder, UAE Startup",
          },
          {
            text: "The Yulanto team provided excellent digital solutions for our business. From website design to SEO, their support has helped us improve our online presence and generate more enquiries.",
            name: "Omar Khalid",
            role: "CEO, UAE Professional Services",
          },
        ]}
        achievementsSubtitle="OUR ACHIEVEMENTS"
        achievementsTitleHighlight="Delivering Successful"
        achievementsTitleRest="Digital Solutions"
        achievementsDescription="Our achievements reflect years of creativity, innovation, and commitment to delivering successful digital solutions. We have helped businesses across the Singapore & Malaysia  and beyond build powerful online experiences through professional web design, development, eCommerce, digital marketing, and ongoing technical support—from initial strategy and concept to design, development, deployment, and long-term growth."
        ctaTitleHighlight="Let's Grow Your "
        ctaTitleRest="Business in UAE"
        ctaDescription="Ready to strengthen your digital presence? Talk to our team today and share your requirements. We will understand your business objectives and recommend the right website, technology, SEO, and digital marketing solutions for your UAE market"
        ctaButtonText="Whether you need a website, e-commerce store, custom web application, SEO, Google Ads, social media marketing, website redesign, or ongoing website maintenance, send us your requirements. Our team will get back to you with a suitable solution for your business."
        ctaHref="#contact"
      />
      <GlobalComp />
    </>

  );
}