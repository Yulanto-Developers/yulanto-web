import { ServiceItemDT } from "@/types/service-dt";

export const servicesData: ServiceItemDT[] = [
    {
        id: 1,
        keyValue: "01",
        title: "Brand Identity Design",
        image: "/assets/img/service/service-1.jpg",
        description: `Strategic, data-driven social media campaigns
designed to build brand awareness & connect
with your target audience.`,
        categories: [
            "Content strategy",
            "Analytics & reporting",
            "Community management",
            "4+",
        ],
    },
    {
        id: 2,
        keyValue: "02",
        title: "Web design & development",
        image: "/assets/img/service/service-2.jpg",
        description: `Strategic, data-driven social media campaigns
designed to build brand awareness & connect
with your target audience.`,
        categories: [
            "Content strategy",
            "Analytics & reporting",
            "Community management",
            "4+",
        ],
    },
    {
        id: 3,
        keyValue: "03",
        title: "SEO Optimization",
        image: "/assets/img/service/service-3.jpg",
        description: `Strategic, data-driven social media campaigns
designed to build brand awareness & connect
with your target audience.`,
        categories: [
            "Content strategy",
            "Analytics & reporting",
            "Community management",
            "4+",
        ],
    },
    {
        id: 4,
        keyValue: "04",
        title: "Creative Web Solutions",
        image: "/assets/img/service/service-4.jpg",
        description: `Strategic, data-driven social media campaigns
designed to build brand awareness & connect
with your target audience.`,
        categories: [
            "Content strategy",
            "Analytics & reporting",
            "Community management",
            "4+",
        ],
    },

    //design studio service data start
    {
        id: 5,
        title: "Branding",
        image: "/assets/img/service/service-2-1.jpg",
        description: `We create impactful brand
identities that differentiate your
business and connect with
your audience.`,
        active: false,
    },
    {
        id: 6,
        title: "Development",
        image: "/assets/img/project/project-1.jpg",
        description: `We create impactful brand
identities that differentiate your
business and connect with
your audience.`,
        active: true,
    },
    {
        id: 7,
        title: "Design support",
        image: "/assets/img/project/project-2.jpg",
        description: `We create impactful brand
identities that differentiate your
business and connect with
your audience.`,
        active: false,
    },
    {
        id: 8,
        title: "Websites",
        image: "/assets/img/project/project-3.jpg",
        description: `We create impactful brand
identities that differentiate your
business and connect with
your audience.`,
        active: false,
    },
    //design studio service data end
    //digital studio service data start
    {
        id: 9,
        title: "Development",
        image: "/assets/img/update/service/service-3/st-service-1.jpg",
        description: "Building scalable, high-performance web and mobile applications.",
        categories: [
            "UX Design",
            "User Testing",
            "Product Prototype",
            "Mobile UI",
            "Web app design",
        ],
    },
    {
        id: 10,
        title: "Marketing",
        image: "/assets/img/update/service/service-3/st-service-2.jpg",
        description: "Driving growth through strategic digital marketing and branding.",
        categories: [
            "UX Design",
            "User Testing",
            "Product Prototype",
            "Mobile UI",
            "Web app design",
        ],
    },
    {
        id: 11,
        title: "Graphics",
        image: "/assets/img/update/service/service-3/st-service-3.jpg",
        description: "Creating visually compelling designs that elevate brand identity.",
        categories: [
            "UX Design",
            "User Testing",
            "Product Prototype",
            "Mobile UI",
            "Web app design",
        ],
    },
    {
        id: 12,
        title: "Technology",
        image: "/assets/img/update/service/service-3/st-service-4.jpg",
        description: "Leveraging modern technologies to deliver innovative solutions.",
        categories: [
            "UX Design",
            "User Testing",
            "Product Prototype",
            "Mobile UI",
            "Web app design",
        ],
    },
    //digital studio service data end
];

// service-2 inner service data start
export const servicesNavItems = [
    "Branding",
    "Digital Design",
    "Marketing Assets",
    "Development",
];

export const innerServices = [
    {
        id: 1,
        title: "Branding",
        descriptions: [
            "Strong branding sets your startup apart, signaling quality and professionalism. It builds trust with your audience, making you stand out in a crowded market.",
        ],
        categories: [
            "Brand Naming",
            "Creative Direction",
            "Brand Strategy",
            "Graphic charter",
            "Logo Design",
        ],
        images: [
            "/assets/img/service/inner-service/service-1.jpg",
            "/assets/img/service/inner-service/service-2.jpg",
        ],
    },
    {
        id: 2,
        title: "Digital Design",
        descriptions: [
            "A process of assumption & validation with a goal of taking into account all the necessary variables, which are always custom and are to be uncovered.",
            "Every business has digital potential, and we are here to help you leverage that potential.",
        ],
        categories: [
            "Wireframe",
            "UI design",
            "Prototyping",
            "Design system",
            "UI & UX audit",
            "Design System",
            "Interactive Experiences",
        ],
        images: [
            "/assets/img/service/inner-service/service-3.jpg",
            "/assets/img/service/inner-service/service-4.jpg",
        ],
    },
    {
        id: 3,
        title: "Marketing Assets",
        descriptions: [
            "Marketing strategy is proudly responsible for the half of a campaign's success, another half relies solely on its implementation.",
            "We focus on creating visuals that communicate your value and engage your audience.",
        ],
        categories: [
            "Animated logos",
            "Product Illustrations",
            "Launch Videos",
            "Illustrations",
            "Visual Effects",
            "Illustration 3D",
        ],
        images: [
            "/assets/img/service/inner-service/service-5.jpg",
            "/assets/img/service/inner-service/service-6.jpg",
        ],
    },
    {
        id: 4,
        title: "Development",
        descriptions: [
            "Efficiency and scalability. The two factors which any decision gets filtered out with - programming language, framework, library, each line of code, and server side.",
        ],
        categories: [
            "Integration",
            "Front-end",
            "Back-end",
            "Webflow",
        ],
        images: [
            "/assets/img/service/inner-service/service-7.jpg",
            "/assets/img/service/inner-service/service-8.jpg",
        ],
    },
];