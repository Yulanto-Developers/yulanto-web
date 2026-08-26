import { MenuItem } from "@/types/menu-dt";

export const lightMenu: MenuItem[] = [
  {
    id: 1,
    type: "dropdown",
    mobileV: false,
    sublinkTrue: true,
    label: "About Us",
    href: "#",
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
    links: [
      {
        label: "Website Design",
        href: "#",
        subLinks: [
          { label: "Startup Website Design", href: "/web-design/startup-webiste-design" },
          { label: "Corporate Website Design", href: "/" },
          { label: "Website Redesign", href: "/" },
          { label: "Landing Page Design", href: "/" },
          { label: "UI/UX Design", href: "/" },
        ]
      },
      {
        label: "Website Development", href: "/",
        subLinks: [
          { label: "Dynamic Website Development", href: "/website-development/dynamic-website-development" },
          { label: "Custom Website Development", href: "/" },
          { label: "PHP Website Development", href: "/" },
          { label: "React Website Development", href: "/" },
          { label: "API Integration", href: "/" },
        ]
      },
      {
        label: "CMS & E-commerce", href: "/",
        sublabel: 'CMS & E-commerce Development',
        subLinks: [
          { label: "WordPress Development", href: "/" },
          { label: "WooCommerce Development", href: "/" },
          { label: "Shopify E-commerce Development", href: "/" },
          { label: "Portal Web Development", href: "/" },
          { label: "Custom E-commerce Development", href: "/" },
        ]
      },
      {
        label: "Graphic Design", href: "/",
        subLinks: [
          { label: "Logo Design & Branding", href: "/" },
          { label: "Brochure & Company Profile Design", href: "/" },
          { label: "Flyer & Poster Design", href: "/" },
          { label: "Packaging Design", href: "/" },
          { label: "Social Media Creative Design", href: "/" },

        ]
      },
      {
        label: "Digital Marketing", href: "/",
        subLinks: [
          { label: "Search Engine Optimization (SEO)", href: "/seo" },
          { label: "Google Ads Management (PPC)", href: "/ads" },
          { label: "Social Media Marketing", href: "/" },
          { label: "OFF Page SEO", href: "/offpageseo" },
        ]
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
    links: [
      { label: "Recent Projects", href: "/recent-project" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Industries We Serve", href: "/industry-we-serve" },
      // { label: "Industry Wise", href: "/" },
    ],
  },
  {
    id: 4,
    type: "none",
    mobileV: false,
    sublinkTrue: false,
    label: "Our Clients",
    href: "/clients",
  },
  {
    id: 5,
    type: "none",
    mobileV: false,
    label: "Careers",
    sublinkTrue: false,
    isLastMenu: true,
    href: "/careers",
  },
  {
    id: 6,
    type: "none",
    mobileV: true,
    label: "Contact Us",
    sublinkTrue: false,
    isLastMenu: true,
    href: "/contact",
  },
];
