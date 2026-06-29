import { MenuItem } from "@/types/menu-dt";

export const darkMenu: MenuItem[] = [
  {
    id:1,
    type: "mega",
    label: "Home",
    href: "/dark",
    columns: [
      {
        title: "Light Version",
        links: [
          { label: "Startup Agency", href: "/" },
          { label: "Design Studio", href: "/design-studio" },
          { label: "Creative Studio", href: "/creative-studio" },
          { label: "Modern Agency", href: "/modern-agency" },
          { label: "Creative Agency", href: "/creative-agency" },
          { label: "Personal Portfolio", href: "/personal-portfolio" },
          { label: "Minimal Portfolio", href: "/minimal-portfolio" },
          { label: "Digital Studio", href: "/digital-studio" },
          { label: "Mix Slicer", href: "/portfolio-mix-slicer" },
        ],
      },
      {
        title: "Dark Version",
        links: [
          { label: "Startup Agency", href: "/dark" },
          { label: "Design Studio", href: "/dark/design-studio" },
          { label: "Creative Studio", href: "/dark/creative-studio" },
          { label: "Modern Agency", href: "/dark/modern-agency" },
          { label: "Creative Agency", href: "/dark/creative-agency" },
          { label: "Personal Portfolio", href: "/dark/personal-portfolio" },
          { label: "Minimal Portfolio", href: "/dark/minimal-portfolio" },
          { label: "Digital Studio", href: "/dark/digital-studio" },
          { label: "Interactive Scroll", href: "/dark/portfolio-interactive-scroll" },
        ],
      },
    ],
  },

  {
    id:2,
    type: "dropdown",
    label: "Pages",
    href: "#",
    links: [
      { label: "About", href: "/dark/about-us" },
      { label: "About Me", href: "/dark/about-me" },
      { label: "Service One", href: "/dark/service-1" },
      { label: "Service Two", href: "/dark/service-2" },
      { label: "Team", href: "/dark/team" },
      { label: "Team Details", href: "/dark/team-details" },
    ],
  },

  {
    id:3,
    type: "dropdown",
    label: "Project",
    href: "#",
    links: [
      { label: "Portfolio One", href: "/dark/portfolio-1" },
      { label: "Portfolio Two", href: "/dark/portfolio-2" },
      { label: "Portfolio Three", href: "/dark/portfolio-3" },
      { label: "Portfolio Four", href: "/dark/portfolio-4" },
      { label: "Portfolio Five", href: "/dark/portfolio-5" },
      { label: "Portfolio Six", href: "/dark/portfolio-6" },
      { label: "Portfolio Details One", href: "/dark/portfolio-details-1" },
      { label: "Portfolio Details Two", href: "/dark/portfolio-details-2" },
    ],
  },

  {
    id:4,
    type: "dropdown",
    label: "Blog",
    href: "#",
    links: [
      { label: "Blog", href: "/dark/blog" },
      { label: "Blog Standard", href: "/dark/blog-standard" },
      { label: "Blog Details", href: "/dark/blog-details" },
    ],
  },

  {
    id:5,
    type: "dropdown",
    isLastMenu: true,
    label: "Contact",
    href: "#",
    links: [
      { label: "Contact Us", href: "/dark/contact-us" },
      { label: "Get In Touch", href: "/dark/contact" },
      { label: "Contact Me", href: "/dark/contact-me" },
    ],
  },
];
