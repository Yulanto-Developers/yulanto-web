interface OffcanvasMenuItem {
    id: number;
    title: string;
    link: string;
    submenu?: OffcanvasMenuItem[];
}

export const offcanvasMenu: OffcanvasMenuItem[] = [
    {
        id: 1,
        title: "Home",
        link: "#",
        submenu: [
            {
                id: 11,
                title: "Startup Agency",
                link: "/",
            },
            {
                id: 12,
                title: "Design Studio",
                link: "/design-studio",
            },
            {
                id: 13,
                title: "Creative Studio",
                link: "/creative-studio",
            },
            {
                id: 14,
                title: "Modern Agency",
                link: "/modern-agency",
            },
            {
                id: 15,
                title: "Creative Agency",
                link: "/creative-agency",
            },
            {
                id: 16,
                title: "Personal Portfolio",
                link: "/personal-portfolio",
            },
            {
                id: 17,
                title: "Minimal Portfolio",
                link: "/minimal-portfolio",
            },
            {
                id: 18,
                title: "Digital Studio",
                link: "/digital-studio",
            },
            {
                id: 19,
                title: "Mix Slicer",
                link: "/portfolio-mix-slicer",
            },
        ],
    },

    {
        id: 2,
        title: "Pages",
        link: "#",
        submenu: [
            {
                id: 21,
                title: "About",
                link: "/about-us",
            },
            {
                id: 22,
                title: "About Me",
                link: "/about-me",
            },
            {
                id: 23,
                title: "Service One",
                link: "/service-1",
            },
            {
                id: 24,
                title: "Service Two",
                link: "/service-2",
            },
            {
                id: 25,
                title: "Team",
                link: "/team",
            },
            {
                id: 26,
                title: "Team Details",
                link: "/team-details",
            },
        ],
    },

    {
        id: 3,
        title: "Project",
        link: "#",
        submenu: [
            {
                id: 31,
                title: "Portfolio One",
                link: "/portfolio-1",
            },
            {
                id: 32,
                title: "Portfolio Two",
                link: "/portfolio-2",
            },
            {
                id: 33,
                title: "Portfolio Three",
                link: "/portfolio-3",
            },
            {
                id: 34,
                title: "Portfolio Four",
                link: "/portfolio-4",
            },
            {
                id: 35,
                title: "Portfolio Five",
                link: "/portfolio-5",
            },
            {
                id: 36,
                title: "Portfolio Six",
                link: "/portfolio-6",
            },
            {
                id: 37,
                title: "Portfolio Details One",
                link: "/portfolio-details-1",
            },
            {
                id: 38,
                title: "Portfolio Details Two",
                link: "/portfolio-details-2",
            },
        ],
    },

    {
        id: 4,
        title: "Blog",
        link: "#",
        submenu: [
            {
                id: 41,
                title: "Blog",
                link: "/blog",
            },
            {
                id: 42,
                title: "Blog Standard",
                link: "/blog-standard",
            },
            {
                id: 43,
                title: "Blog Details",
                link: "/blog-details",
            },
        ],
    },

    {
        id: 5,
        title: "Contact",
        link: "#",
        submenu: [
            {
                id: 51,
                title: "Contact Us",
                link: "/contact-us",
            },
            {
                id: 52,
                title: "Get In Touch",
                link: "/contact",
            },
            {
                id: 53,
                title: "Contact Me",
                link: "/contact-me",
            },
        ],
    },
];