
"use client";

import {
  ShieldCheck, Radio, Cpu, Star, XCircle, Recycle, Trees,
  Atom, FileCode2, Hexagon, Database, Code2, Globe2, Cloud,
  ShoppingCart,
} from "lucide-react";
import ClientsShowcasePage from "@/components/ourclients/ClientsShowcasePage";
import { SingaporeFlagIcon } from "@/components/ourclients/SingaporeFlagIcon";
import { MalaysiaFlagIcon } from "@/components/ourclients/MalaysiaFlagIcon";
import Image1 from "@/assets/img/usa/banner-singapore.jpg";
import Image2 from "@/assets/img/usa/image-singapore.jpg";
import GlobalComp from "@/components/ourclients/globalcomp";

export default function SingaporeMalaysiaClientsPage() {
  return (
    <>
      <ClientsShowcasePage
        heroImage={Image1}
        heroBadgeText="Your Trusted Digital Partner for Growth in Singapore & Malaysia"
        heroTitleHighlight="Digital Solutions for "
        heroTitleRest="Businesses in Singapore & Malaysia"
        heroDescription={`At Yulanto Web Creations, we provide comprehensive digital solutions to businesses across Singapore and Malaysia, helping startups, SMEs, established companies, and organizations build a strong digital presence and achieve sustainable growth.
From professional website design and custom web development to e-commerce, digital marketing, SEO, graphic design, hosting, and ongoing website maintenance, our team delivers reliable, scalable, and cost-effective solutions tailored to your business requirements.`}
        aboutImage={Image2}
        aboutTitleHighlight="Our Web Design Services for"
        aboutTitleRest="Singapore and Malaysia Businesses"
        aboutDescription="We combine creative design, modern technology, and strategic digital marketing to help businesses connect with their customers, strengthen their brand, generate quality leads, and grow online."
        whyChooseHeading="Why Choose Yulanto for Your Business in the Singapore and Malaysia?"
        whyChooseItems={[
          { num: "01", title: "Complete Digital Solutions", desc: "From website development to digital marketing and ongoing support, we provide all your essential digital services under one roof." },
          { num: "02", title: "Singapore & Malaysia Focuseds", desc: "We understand the importance of creating professional digital experiences for businesses targeting customers in Singapore and Malaysia." },
          { num: "03", title: "Customized Solutions", desc: "Every business is different. We tailor our solutions according to your objectives, industry, audience, and budget." },
          { num: "04", title: "Responsive & Modern Technology", desc: "We create mobile-friendly, performance-focused, and scalable digital solutions using modern technologies and proven development practices." },
          { num: "05", title: "Cost-Effective Services", desc: "Our solutions are designed to provide practical value and long-term benefits while keeping your digital investment cost-effective." },
          { num: "06", title: "Long-Term Support", desc: "Our relationship does not end after your website goes live. We provide ongoing maintenance, technical assistance, updates, and digital support." },
        ]}
        clientsSubtitle="OUR CLIENTS"
        clientsTitleHighlight="Featured"
        clientsTitleRest="Singapore & Malaysia Clients"
        clientsDescription="We are proud to work with businesses across the Singapore and Malaysia, delivering professional web design, website development, and digital solutions tailored to their unique needs. Here are some of the successful projects we have completed for our clients."
        countryLabel="SG"
        countryFlag={<SingaporeFlagIcon />}
        clientGroups={[
          {
            countryLabel: "SG",
            countryFlag: <SingaporeFlagIcon />,
            clients: [
              {
                name: "Altis Calserv",
                category: "Business Services",
                color: "#1a9b5c",
                website: "https://altiscalserv.com/",
              },
              {
                name: "Preserve Metals",
                category: "Metal Recycling",
                color: "#2f5bff",
                website: "https://preservemetals.com/",
              },
              {
                name: "Parkad",
                category: "Parking Services",
                color: "#111827",
                website: "https://www.parkad.com.sg/",
              },
              {
                name: "HUB Electrical",
                category: "Electrical Services",
                color: "#e0355a",
                website: "https://www.hub-electrical.com/",
              },
              {
                name: "Sparky Anim",
                category: "Animation & Creative",
                color: "#2f9b4f",
                website: "https://sparkyanim.com/",
              },
              {
                name: "Asianic",
                category: "Technology & Services",
                color: "#1c1c8f",
                website: "http://asianic.sg/",
              },
              {
                name: "SG Event Rental",
                category: "Event Rental",
                color: "#1a9b5c",
                website: "https://www.sgeventrental.com.sg/",
              },
              {
                name: "TallyPrime",
                category: "Business Software",
                color: "#2563eb",
                website: "https://www.tally.com.sg/",
              },
            ],
          },

          {
            countryLabel: "MY",
            countryFlag: <MalaysiaFlagIcon />,
            clients: [
              {
                name: "Johor Event Rental",
                category: "Event Rental",
                color: "#2563eb",
                website: "https://johoreventrental.com/",
              },
              {
                name: "KL Event Rental",
                category: "Event Rental",
                color: "#e0355a",
                website: "https://www.kleventrental.com.my/",
              },
            ],
          },
        ]}
        techSectionTitleHighlight="Serving Businesses "
        techSectionTitleRest="Across Singapore & Malaysia"
        techDescription="Whether you are a startup, SME, corporate company, professional service provider, retailer, manufacturer, real estate company, educational institution, or organization, we can help you establish and strengthen your digital presence.
We work with businesses across major markets in Singapore and Malaysia, delivering professional digital solutions that help brands attract customers, generate enquiries, improve visibility, and grow their business online."
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
            text: "Yulanto delivered a professional website that perfectly represents our business. Great communication and excellent support throughout the project!",
            name: "Daniel Tan",
            role: "Managing Director, Singapore",
          },
          {
            text: "Their web development expertise is excellent. Our new website is fast, responsive, and much easier for our customers to use!",
            name: "Aaron Lim",
            role: "Business Owner, Malaysia",
          },
          {
            text: "Amazing team! They understood our business requirements and delivered a reliable digital solution that helped strengthen our online presence.",
            name: "Michael Wong",
            role: "Founder, Singapore",
          },
        ]}
        achievementsSubtitle="OUR ACHIEVEMENTS"
        achievementsTitleHighlight="Delivering Successful"
        achievementsTitleRest="Digital Solutions"
        achievementsDescription="Our achievements reflect years of creativity, innovation, and commitment to delivering successful digital solutions. We have helped businesses across the Singapore & Malaysia  and beyond build powerful online experiences through professional web design, development, eCommerce, digital marketing, and ongoing technical support—from initial strategy and concept to design, development, deployment, and long-term growth."
        ctaTitleHighlight="Let's Build Your "
        ctaTitleRest="Digital Success"
        ctaDescription="Looking for a reliable web design, web development, e-commerce, SEO, or digital marketing partner in Singapore or Malaysia? Yulanto Web Creations is ready to turn your ideas into powerful digital solutions."
        ctaButtonText="Let's discuss your requirements and create a digital strategy that moves your business forward."
      
      />
      <GlobalComp />
    </>

  );
}