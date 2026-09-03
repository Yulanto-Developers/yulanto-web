"use client";

import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/breadcrum/sections/breadcrumb";


const data = [
  {
    path: "/our-story",
    title: "Our Story",
    currentPage: "Our Story",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: '/our-team',
    title: "Meet Our Team",
    currentPage: "Meet Our Team",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: '/our-mission-vision',
    title: "Our Vision & Mission",
    currentPage: "Our Vision & Mission",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  }
  ,
  {
    path: '/our-philosophy',
    title: "Our Philosophy",
    currentPage: "Our Philosophy",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: '/why-choose-us',
    title: "Why Choose Us",
    currentPage: "Why Choose Us",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/clients",
    title: "Our Clients",
    currentPage: "Our Clients",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/careers",
    title: "Our Career",
    currentPage: "Our Career",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/tocontact",
    title: "Contact Us",
    currentPage: "Contact Us",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/recent-project",
    title: "Recent Projects",
    currentPage: "Recent Projects",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg", // Change to your image

  },
  {
    path: "/portfolio",
    title: "Portfolio",
    currentPage: "Portfolio",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/industry-we-serve",
    title: "Industry We Serve",
    currentPage: "Industry We Serve",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/case-studies",
    title: "Case Studies",
    currentPage: "Case Studies",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/seo",
    title: "Search Engine Optimization",
    currentPage: "SEO",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },

  {
    path: "/offpageseo",
    title: "Off Page Seo",
    currentPage: "Off Page Seo",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/ads",
    title: "Google Ads Management",
    currentPage: "Google Ads Management",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/web-design/startup-website-design",
    title: "Startup Webiste Desgin",
    currentPage: "Startup Webiste Design",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/media_marketing",
    title: " Social Media Marketing",
    currentPage: " Social Media Marketing",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/website-development/dynamic-website-development",
    title: "Dynamic Website Development",
    currentPage: "Dynamic Website Development ",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/website-development/custom-website-development",
    title: "Custom Website Development",
    currentPage: "Custom Website Development",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },

  {
    path: "/website-development/php-website-development",
    title: "PHP Website Development",
    currentPage: "PHP Website Development",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },


  {

    path: "/web-design/corporate-website-design",
    title: " Corporate Website Design",
    currentPage: " Corporate Website Design ",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/web-design/landing-page-desgin",
    title: "Landing Page Design",
    currentPage: "Landing Page Design",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/web-design/website-redesign",
    title: " Website Redesign",
    currentPage: "Website Redesign ",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/logo-design&branding",
    title: " Logo Design & branding",

    currentPage: "Logo Design & branding",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/company-profile-design",
    title: "Brochure & Company Profile Design",

    currentPage: "Logo Design & branding",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/company-profile-design",
    title: "Brochure & Company Profile Design",

    currentPage: "Logo Design & branding",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/flyer-poster-design",
    title: "Flyer & Poster Design",

    currentPage: "Flyer & Poster Design",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },

  {
    path: "/Packaging-Design",
    title: " Packaging Design",

    currentPage: " Packaging Design",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },

   {
    path: "/Social-Media-Creative-Design",
    title: "Social Media Creative Designs",
    
    currentPage: "Social Media Creative Designs",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  
   {
    path: "/WordPress-Development",
    title: "WordPress Development",
    
    currentPage: "WordPress Development",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
                      


];

export default function BreadcurmbData() {
  const pathname = usePathname();

  const page = data.find((item) => item.path === pathname);
  // console.log('ez')

  if (!page) return null;

  return (
    <Breadcrumb
      title={page.title}
      currentPage={page.currentPage}
      backgroundImage={page.backgroundImage}
    />
  );
}