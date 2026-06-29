import { MenuItem } from "@/types/menu-dt";

export const lightMenu: MenuItem[] = [
  {
    id:1,
    type: "mega",
    label: "Home",
    href: "#",
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
      { label: "About", href: "/about-us" },
      { label: "About Me", href: "/about-me" },
      { label: "Service One", href: "/service-1" },
      { label: "Service Two", href: "/service-2" },
      { label: "Team", href: "/team" },
      { label: "Team Details", href: "/team-details" },
    ],
  },

  {
    id:3,
    type: "dropdown",
    label: "Project",
    href: "#",
    links: [
      { label: "Portfolio One", href: "/portfolio-1" },
      { label: "Portfolio Two", href: "/portfolio-2" },
      { label: "Portfolio Three", href: "/portfolio-3" },
      { label: "Portfolio Four", href: "/portfolio-4" },
      { label: "Portfolio Five", href: "/portfolio-5" },
      { label: "Portfolio Six", href: "/portfolio-6" },
      { label: "Portfolio Details One", href: "/portfolio-details-1" },
      { label: "Portfolio Details Two", href: "/portfolio-details-2" },
    ],
  },

  {
    id:4,
    type: "dropdown",
    label: "Blog",
    href: "#",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Blog Standard", href: "/blog-standard" },
      { label: "Blog Details", href: "/blog-details" },
    ],
  },

  {
    id:5,
    type: "dropdown",
    label: "Contact",
    isLastMenu: true,
    href: "#",
    links: [
      { label: "Contact Us", href: "/contact-us" },
      { label: "Get In Touch", href: "/contact" },
      { label: "Contact Me", href: "/contact-me" },
    ],
  },
];
