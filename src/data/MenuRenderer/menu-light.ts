import { MenuItem } from "@/types/menu-dt";

export const lightMenu: MenuItem[] = [
  {
    id: 1,
    type: "dropdown",
    mobileV: false,
    sublinkTrue: true,
    label: "About Us",
    href: "#",
    active: false,
    links: [
      { label: "Our Story", href: "/our-story" },
      { label: "Vision & Mission", href: "/our-mission-vision" },
      { label: "Our Philosophy", href: "/our-philosophy" },
      { label: "Why Choose Us", href: "/why-choose-us" },
      { label: "Meet Our Team", href: "/our-team" },
    ],
  },
  {
    id: 2,
    type: "dropdown",
    mobileV: false,
    sublinkTrue: true,
    label: "Services",
    href: "#",
    active: false,
    links: [
      {
        label: "Website Design",
        href: "#",
        subLinks: [
          // { label: "Startup Website Design", href: "/web-design/startup-website-design" },
          // { label: "Corporate Website Design", href: "/web-design/corporate-website-design" },
          // { label: "Website Redesign", href: "/web-design/website-redesign" },
          // { label: "Landing Page Design", href: "/web-design/landing-page-desgin" },
          // { label: "UI/UX Design", href: "/web-design/ui-ux-desgin" },
          // url change for seo
          { label: "Startup Website Design", href: "/web-design/Web-Designing-Company-in-Chennai" },
          { label: "Corporate Website Design", href: "/web-design/website-creation-company-in-Chennai" },
          { label: "Website Redesign", href: "/web-design/Website-Redesign-in-Chennai" },
          { label: "Landing Page Design", href: "/web-design/landing-page-design-chennai" },
          { label: "UI/UX Design", href: "/web-design/UI-UX-Companies-in-Chennai" },
        ]
      },
      {
        label: "Website Development", href: "/",
        subLinks: [
          { label: "Dynamic Website Development", href: "/website-development/dynamic-website-development" },
          { label: "Custom Website Development", href: "/website-development/custom-website-development" },
          { label: "PHP Website Development", href: "/website-development/php-website-development" },

          { label: "React Website Development", href: "/website-development/react-website-development" },
          { label: "API Integration", href: "/website-development/api-integration" },
          // {label: "AI Assisted Website Development", href: "/AI-assisted-website" }

        ]
      },
      {
        label: "CMS & E-commerce", href: "/",
        sublabel: 'CMS & E-commerce Development',
        subLinks: [
          { label: "WordPress Development", href: "/wordpress-development-company-in-Chennai" },
          { label: "WooCommerce Development", href: "/e-commerce-website-development-in-chennai" },
          { label: "Shopify E-commerce Development", href: "/shopify-development-company-in-chennai" },
          { label: "Portal Web Development", href: "/portal-development-services" },
          { label: "Custom E-commerce Development", href: "/ecommerce-website-development-company" },
        ]
      },
      {
        label: "Graphic Design", href: "/",
        subLinks: [
          { label: "Logo Design & Branding", href: "/logo-design-branding" },
          { label: "Brochure & Company Profile Design", href: "/Brochure-Design-Company" },
          { label: "Flyer & Poster Design", href: "/flyer-poster-design" },
          { label: "Packaging Design", href: "/Packaging-Design-Agency" },
          { label: "Social Media Creative Design", href: "/Creative-Social-Media-Post-Design-Company" },

        ]
      },
      {
        label: "Digital Marketing", href: "/",
        subLinks: [
          { label: "Search Engine Optimization (SEO)", href: "/seo-company-in-chennai" },
          { label: "Google Ads Management (PPC)", href: "/google-ads-agency-in-chennai" },
          { label: "Social Media Marketing", href: "/social-media-marketing-agency-in-chennai" },
          { label: "OFF Page SEO", href: "/seo-agencies-in-chennai" },
          { label: "Answer Engine Optimization (AEO)", href: "/answer-engine-optimization-services" },
        ]
      },
      {
        label: "AI-Enhanced Web Design", href: "/create-website-using-ai",
        // subLinks: [
        //   { label: "Search Engine Optimization (SEO)", href: "/seo" },
        //   { label: "Google Ads Management (PPC)", href: "/ads" },
        //   { label: "Social Media Marketing", href: "/media_marketing" },
        //   { label: "OFF Page SEO", href: "/offpageseo" },
        // ]
      },
    ],
  },
  {
    id: 3,
    type: "dropdown",
    mobileV: false,
    sublinkTrue: true,
    label: "Our Work",
    href: "#",
    active: false,
    links: [
      { label: "Recent Projects", href: "/recent-projects" },
      { label: "Portfolio", href: "/our-portfolio" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Industries We Serve", href: "/yulanto-works" },
      // { label: "Industry Wise", href: "/" },
    ],
  },
  {
    id: 4,
    type: "none",
    mobileV: false,
    sublinkTrue: false,
    label: "Our Clients",
    href: "/our-clients",
    active: true,
  },
  {
    id: 5,
    type: "none",
    mobileV: false,
    label: "Careers",
    sublinkTrue: false,
    isLastMenu: true,
    href: "/careers",
    active: true,
  },
  {
    id: 6,
    type: "none",
    mobileV: true,
    label: "Contact Us",
    sublinkTrue: false,
    isLastMenu: true,
    href: "/contact-us",
    active: true,
  },
];
