import { MenuItem } from "@/types/menu-dt";

export const lightMenu: MenuItem[] = [
  {
    id: 1,
    type: "dropdown",
    sublinkTrue: true,
    label: "About Us",
    href: "#",
    links: [
      { label: "Our Story", href: "/our-story" },
      { label: "Vision & Mission", href: "/" },
      { label: "Our Philosophy", href: "/" },
      { label: "Why Choose Us", href: "/" },
      { label: "Meet Our Team", href: "/" },
    ],
  },
  {
    id: 2,
    type: "dropdown",
    sublinkTrue: true,
    label: "Services",
    href: "#",
    links: [
      {
        label: "Website Design",
        href: "#",
        subLinks: [
          { label: "Startup Website Design", href: "/" },
          { label: "Corporate Website Design", href: "/" },
          { label: "Website Redesign", href: "/" },
          { label: "Landing Page Design", href: "/" },
          { label: "UI/UX Design", href: "/" },
        ]
      },
      {
        label: "Website Development", href: "/",
        subLinks: [
          { label: "Dynamic Website Development", href: "/" },
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
          { label: "Search Engine Optimization (SEO)", href: "/" },
          { label: "Google Ads Management (PPC)", href: "/" },
          { label: "Social Media Marketing", href: "/" },
          { label: "OFF Page SEO", href: "/" },
        ]
      },
    ],
  },
  {
    id: 3,
    type: "dropdown",
    sublinkTrue: true,
    label: "Our Work",
    href: "#",
    links: [
      { label: "Recent Projects", href: "/recent-project" },
      { label: "Portfolio", href: "/" },
      { label: "Case Studies", href: "/" },
      { label: "Industries We Serve", href: "/" },
      // { label: "Industry Wise", href: "/" },
    ],
  },
  {
    id: 4,
    type: "none",
    sublinkTrue: false,
    label: "Our Clients",
    href: "/clients",
  },
  {
    id: 5,
    type: "none",
    label: "Careers",
    sublinkTrue: false,
    isLastMenu: true,
    href: "/careers",
  },
];