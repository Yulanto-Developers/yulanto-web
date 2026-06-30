export const lightMenu: MenuItem[] = [
  {
    id: 1,
    type: "dropdown",
    label: "About Us",
    href: "#",
    links: [
      { label: "Company Overview", href: "/" },
      { label: "Vision & Mission", href: "/" },
      { label: "Our Philosophy & Focus", href: "/" },
      { label: "Why Choose Us", href: "/" },
    ],
  },
  {
    id: 2,
    type: "dropdown",
    label: "Services",
    href: "#",
    links: [
      {
        label: "Web Designing",
        href: "#",
        subLinks: [
          { label: "Corporate Web Designing", href: "/" },
          { label: "Web Desiging for Startups", href: "/" },
          { label: "Web Redesiging", href: "/" },
          { label: "Landing Page Design", href: "/" },
        ]
      },
      {
        label: "Web Development", href: "/",
        subLinks: [
          { label: "Dynamic Webiste Design", href: "/" },
          { label: "Custom Web Development", href: "/" },
          { label: "PHP Development", href: "/" },
        ]
      },
      {
        label: "CMS & Ecommerce", href: "/",
        subLinks: [
          { label: " WordPress Development", href: "/" },
          { label: "Portal Development", href: "/" },
          { label: "Ecommerce Development", href: "/" },
          { label: "Shopify Development", href: "/" },
        ]
      },
      {
        label: "Branding Design", href: "/",
        subLinks: [
          { label: "Logo Design", href: "/" },
          { label: "Brochure Design", href: "/" },

        ]
      },
      {
        label: "Digital Marketing", href: "/",
        subLinks: [
          { label: "SEO", href: "/" },
          { label: "Social Media Marketing", href: "/" },
          { label: "Google Ad Words", href: "/" },
        ]
      },
    ],
  },
  {
    id: 3,
    type: "dropdown",
    label: "Our Works",
    href: "#",
    links: [
      { label: "Latest Work", href: "/" },
      { label: "Major Client Work", href: "/" },
      { label: "Our Portfolio", href: "/" },
      { label: "All Works", href: "/" },
    ],
  },
  {
    id: 4,
    type: "none",
    label: "Our Clients",
    href: "#",
  },
  {
    id: 5,
    type: "none",
    label: "Careers",
    isLastMenu: true,
    href: "#",
  },
];