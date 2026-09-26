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
    path: "/our-clients",
    title: "Our Clients",
    currentPage: "Our Clients",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/careers",
    title: "Our Careers",
    currentPage: "Our Careers",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/contact-us",
    title: "Contact Us",
    currentPage: "Contact Us",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/recent-projects",
    title: "Recent Projects",
    currentPage: "Recent Projects",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg", // Change to your image
 
  },
  {
    path: "/our-portfolio",
    title: "Portfolio",
    currentPage: "Portfolio",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/yulanto-works",
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
    path: "/seo-company-in-chennai",
    title: "Search Engine Optimization",
    currentPage: "SEO",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
 
  {
    path: "/seo-agencies-in-chennai",
    title: "Off Page Seo",
    currentPage: "Off Page Seo",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/google-ads-agency-in-chennai",
    title: "Google Ads Management",
    currentPage: "Google Ads Management",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  // {
  //   path: "/web-design/startup-website-design",
  //   title: "Startup Website Design",
  //   currentPage: "Startup Website Design",
  //   backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  // },
   {
    path: "/web-design/web-designing-company-in-chennai",
    title: "Startup Website Design",
    currentPage: "Startup Website Design",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/social-media-marketing-agency-in-chennai",
    title: " Social Media Marketing",
    currentPage: " Social Media Marketing",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/website-development/web-development-company-in-chennai",
    title: "Dynamic Website Development",
    currentPage: "Dynamic Website Development ",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/website-development/website-development-company-in-chennai",
    title: "Custom Website Development",
    currentPage: "Custom Website Development",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
 
  {
    path: "/website-development/web-design-and-development-companies-in-chennai",
    title: "PHP Website Development",
    currentPage: "PHP Website Development",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
 
  {
    path: "/website-development/web-development-services-in-chennai",
    title: "React Website Development",
    currentPage: "React Website Development",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/website-development/api-integration-services",
    title: "API Integration",
    currentPage: "API Integration",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  // {
 
  //   path: "/web-design/corporate-website-design",
  //   title: " Corporate Website Design",
  //   currentPage: " Corporate Website Design ",
  //   backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  // },
  // {
  //   path: "/web-design/landing-page-desgin",
  //   title: "Landing Page Design",
  //   currentPage: "Landing Page Design",
  //   backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  // },
  // {
  //   path: "/web-design/website-redesign",
  //   title: " Website Redesign",
  //   currentPage: "Website Redesign ",
  //   backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  // },
  // {
  //   path: "/web-design/ui-ux-desgin",
  //   title: " UI/UX Design",
  //   currentPage: "UI/UX Design",
  //   backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  // },
   {
 
    path: "/web-design/website-creation-company-in-Chennai",
    title: " Corporate Website Design",
    currentPage: " Corporate Website Design ",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/web-design/landing-page-design-chennai",
    title: "Landing Page Design",
    currentPage: "Landing Page Design",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/web-design/website-redesign-in-chennai",
    title: "Website Redesign",
    currentPage: "Website Redesign ",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/web-design/UI-UX-Companies-in-Chennai",
    title: " UI/UX Design",
    currentPage: "UI/UX Design",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/logo-designers-in-chennai",
    title: " Logo Design & Branding",
 
    currentPage: "Logo Design & Branding",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/brochure-design-company-in-chennai",
    title: "Brochure & Company Profile Design",
 
    currentPage: "Brochure & Company Profile Design",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/company-profile-design",
    title: "Brochure & Company Profile Design",
 
    currentPage: "Logo Design & branding",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/flyer-poster-designers-in-chennai",
    title: "Flyer & Poster Design",
 
    currentPage: "Flyer & Poster Design",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
 
  {
    path: "/packaging-design-agency-in-chennai",
    title: " Packaging Design",
 
    currentPage: " Packaging Design",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
 
  {
    path: "/creative-social-media-post-design-company-in-chennai",
    title: "Social Media Creative Designs",
 
    currentPage: "Social Media Creative Designs",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
 
 
  {
    path: "/wordpress-development-company-in-Chennai",
    title: "WordPress Development",
 
    currentPage: "WordPress Development",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/e-commerce-website-development-in-chennai",
 
    title: "WooCommerce Development",
 
    currentPage: "WooCommerce Development",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
 
  {
    path: "/ecommerce-website-development-company",
    title: "Custome Ecommerce Development",
    currentPage: "Custome Ecommerce Development",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
 
    path: "/portal-development-services",
    title: "Portal Web Development",
    currentPage: "Portal Web Development",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/shopify-development-company-in-chennai",
    title: "Shopify E-commerce Development",
 
    currentPage: "Shopify E-commerce Development",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/create-website-using-ai-in-chennai",
    title: "AI-Enhanced Web Design",
 
    currentPage: "AI-Enhanced Web Design",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy",
 
    currentPage: "Privacy Policy",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
    {
    path: "/disclaimer",
    title: "Disclaimer",
 
    currentPage: "Disclaimer",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
    {
    path: "/terms-conditions",
    title: "Terms & Conditions",
 
    currentPage: "Terms Conditions",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/license-copyright",
    title: "License & Copyright",
 
    currentPage: "License & Copyright",
    backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
  },
  {
    path: "/aeo-services-in-chennai",
    title: "Answer Engine Optimization (AEO)",
 
    currentPage: "Answer Engine Optimization (AEO)",
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