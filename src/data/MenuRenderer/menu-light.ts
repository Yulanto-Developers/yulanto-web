import { MenuItem } from "@/types/menu-dt";

export const lightMenu: MenuItem[] = [
  {
    id:1,
    type: "dropdown",
    label: "About Us",
    href: "#",
    // columns: [
    //   {
    //     title: "Light Version",
    //     links: [
    //       // { label: "Startup Agency", href: "/" },
    //       { label: "home", href: "/home" },
    //       // { label: "Creative Studio", href: "/creative-studio" },
    //       // { label: "Modern Agency", href: "/modern-agency" },
    //       // { label: "Creative Agency", href: "/creative-agency" },
    //       // { label: "Personal Portfolio", href: "/personal-portfolio" },
    //       // { label: "Minimal Portfolio", href: "/minimal-portfolio" },
    //       // { label: "Digital Studio", href: "/digital-studio" },
    //       // { label: "Mix Slicer", href: "/portfolio-mix-slicer" },
    //     ],
    //   },
    //   {
    //     title: "Dark Version",
    //     links: [
    //       { label: "Startup Agency", href: "/dark" },
    //       { label: "Design Studio", href: "/dark/design-studio" },
    //       { label: "Creative Studio", href: "/dark/creative-studio" },
    //       { label: "Modern Agency", href: "/dark/modern-agency" },
    //       { label: "Creative Agency", href: "/dark/creative-agency" },
    //       { label: "Personal Portfolio", href: "/dark/personal-portfolio" },
    //       { label: "Minimal Portfolio", href: "/dark/minimal-portfolio" },
    //       { label: "Digital Studio", href: "/dark/digital-studio" },
    //       { label: "Interactive Scroll", href: "/dark/portfolio-interactive-scroll" },
    //     ],
    //   },
    // ],
    links: [
      { label: "Company Overview", href: "/" },
      { label: "Vision & Mission", href: "/" },
      { label: "Our Philosophy & Focus", href: "/" },
      { label: "Why Choose Us", href: "/" },
    ],
  },

  {
    id:2,
    type: "dropdown",
    label: "Services",
    href: "#",
    links: [
      { label: "Web Designing", href: "/" },
      { label: "Web Development", href: "/" },
      { label: "CMS & Ecommerce", href: "/" },
      { label: "Branding Design", href: "/" },
      { label: "Digital Marketing", href: "/" },
      // { label: "Team Details", href: "/" },
    ],
  },

  {
    id:3,
    type: "dropdown",
    label: "Our Work",
    href: "#",
    links: [
      { label: "Latest Work", href: "/" },
      { label: "Major Client Work", href: "/" },
      { label: "Our Portfolio", href: "/" },
      { label: "All Works", href: "/" },
      // { label: "", href: "/" },
      // { label: "", href: "/" },
      // { label: "", href: "/" },
      // { label: "", href: "/" },
    ],
  },

  {
    id:4,
    type: "none",
    label: "Our Clients",
    href: "#",
    // links: [
    //   { label: "Blog", href: "/blog" },
    //   { label: "Blog Standard", href: "/blog-standard" },
    //   { label: "Blog Details", href: "/blog-details" },
    // ],
  },

  // {
  //   id:5,
  //   type: "none",
  //   label: "Pricing",
  //   isLastMenu: true,
  //   href: "#",
  //   // links: [
  //   //   { label: "Contact Us", href: "/contact-us" },
  //   //   { label: "Get In Touch", href: "/contact" },
  //   //   { label: "Contact Me", href: "/contact-me" },
  //   // ],
  // },
  {
    id:5,
    type: "none",
    label: "Careers",
    isLastMenu: true,
    href: "#",
    // links: [
    //   { label: "Contact Us", href: "/contact-us" },
    //   { label: "Get In Touch", href: "/contact" },
    //   { label: "Contact Me", href: "/contact-me" },
    // ],
  },
];