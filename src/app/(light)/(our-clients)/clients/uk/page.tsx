
"use client";

import {
  ShieldCheck, Radio, Cpu, Star, XCircle, Recycle, Trees,
  Atom, FileCode2, Hexagon, Database, Code2, Globe2, Cloud,
  ShoppingCart,
} from "lucide-react";
import ClientsShowcasePage from "@/components/ourclients/ClientsShowcasePage";
import { UKFlagIcon } from "@/components/ourclients/UKFlagIcon";
import { CanadaFlagIcon } from "@/components/ourclients/CanadaFlagIcon";
import Image1 from "@/assets/img/usa/uk.png";
import Image2 from "@/assets/img/usa/about.png";
import GlobalComp from "@/components/ourclients/globalcomp";

export default function SingaporeMalaysiaClientsPage() {
  return (
    <>
      <ClientsShowcasePage
        heroImage={Image1}
        heroBadgeText="Empowering UK Businesses with Innovative Digital Solutions"
        heroTitleHighlight="Digital Solutions &"
        heroTitleRest=" Services in the UK"
        heroDescription={`At Yulanto Web Creations, we provide professional digital solutions to businesses across the United Kingdom, helping startups, SMEs, established companies, and organisations build a strong digital presence and achieve sustainable online growth. From website design and web development to SEO, digital marketing, eCommerce, branding, and ongoing website maintenance, we offer complete digital solutions tailored to your business goals.
Whether you are launching a new business, redesigning an existing website, expanding your online presence, or looking to generate more leads, our experienced team delivers reliable, user-focused, and result-oriented solutions for businesses across the UK.`}
        aboutImage={Image2}
        aboutTitleHighlight="Our Digital Services "
        aboutTitleRest="in the UK"
        aboutDescription="Yulanto create modern, responsive, SEO-friendly websites that provide an engaging experience across desktops, tablets, and mobile devices. Our UK website design services are suitable for businesses of all sizes and industries."
        whyChooseHeading="Why Choose Yulanto Web Creations for Your UK Business?"
        whyChooseItems={[
          { num: "01", title: "Complete Digital Solutions Under One Roof", desc: "" },
          { num: "02", title: "Professional & Responsive Website Design", desc: "" },
          { num: "03", title: "SEO-Friendly Development", desc: "" },
          { num: "04", title: "Mobile-First & User-Focused Experiences", desc: "" },
          { num: "05", title: "Custom Solutions for Different Business Requirements", desc: "" },
          { num: "06", title: "Transparent & Flexible Service Packages", desc: "" },
          { num: "07", title: "Ongoing Technical Support & Website Maintenance", desc: "" },
          { num: "08", title: "Solutions Designed for Business Growth", desc: "" },
        ]}
        clientsSubtitle="OUR CLIENTS"
        clientsTitleHighlight="Featured"
        clientsTitleRest="UK & Canada Clients"
        clientsDescription="We are proud to work with businesses across the UK and Canada, delivering professional web design, website development, and digital solutions tailored to their unique needs. Here are some of the successful projects we have completed for our clients."
        countryLabel="SG"
        countryFlag={<UKFlagIcon />}
        clientGroups={[
          {
            countryLabel: "UK",
            countryFlag: <UKFlagIcon />,
            clients: [
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
            ],
          },

          {
            countryLabel: "CA",
            countryFlag: <CanadaFlagIcon />,
            clients: [
              {
                name: "GTA Balloons Designers",
                category: "Event & Balloon Design",
                color: "#2563eb",
                website: "https://gtaballoonsdesigners.com/",
              },
              {
                name: "Quick Bright Cleaning",
                category: "Cleaning Services",
                color: "#0f766e",
                website: "https://quickbrightcleaning.com/",
              },
              {
                name: "Danforth Disability Services",
                category: "Disability Services",
                color: "#7c3aed",
                website: "https://danforthdisabilityservices.com/",
              },
              {
                name: "Spark Technologies",
                category: "Technology & IT Services",
                color: "#e0355a",
                website: "",
              },
            ],
          },
        ]}
        techSectionTitleHighlight="Serving Businesses "
        techSectionTitleRest="Across the United Kingdom"
        techDescription="We provide digital services to businesses across England, Scotland, Wales, and Northern Ireland, supporting companies in major UK cities and locations including London, Birmingham, Manchester, Liverpool, Leeds, Bristol, Glasgow, Edinburgh, Cardiff, Belfast, Sheffield, Nottingham, Leicester, Newcastle, and beyond.
Our remote digital service model allows us to work efficiently with businesses throughout the UK, regardless of location."
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
            text: "Yulanto Web Creations delivered a modern and professional website that perfectly represents our business. Their team understood our requirements and provided excellent support throughout the project.",
            name: "James Anderson",
            role: "Managing Director, UK",
          },
          {
            text: "The team created a clean, responsive, and user-friendly website for our business. Their technical expertise and attention to detail made the entire development process smooth and efficient.",
            name: "Matthew Wilson",
            role: "Business Owner, Canada",
          },
          {
            text: "Yulanto provided a complete digital solution that helped us strengthen our online presence. Their expertise in website development, SEO, and digital marketing has been excellent.",
            name: "Daniel Thompson",
            role: "Director, UK",
          },
          {
            text: "We were impressed by the quality of the website and the professionalism of the team. They delivered a solution that works well across desktop and mobile devices.",
            name: "Ethan Martin",
            role: "Founder, Canada",
          },
        ]}
        achievementsSubtitle="OUR ACHIEVEMENTS"
        achievementsTitleHighlight="Build Your Digital "
        achievementsTitleRest="Success with Us"
        achievementsDescription="Your website and digital presence are essential to how customers discover, trust, and engage with your business. At Yulanto Web Creations, we combine creative design, modern technology, SEO, and digital marketing to create solutions that support your long-term business objectives.
Whether you need a new website, eCommerce store, website redesign, SEO campaign, Google Ads management, social media marketing, branding, or complete digital marketing support, our team is ready to help."
        ctaTitleHighlight="Let's Build Your "
        ctaTitleRest=" Business Online"
        ctaDescription="Looking for a reliable web design and digital marketing company for your UK business? Let's discuss your requirements and create a digital solution that works for your business."
        ctaButtonText="Let's discuss your requirements and create a digital strategy that moves your business forward."
        ctaHref="#contact"
      />
      <GlobalComp />
    </>

  );
}