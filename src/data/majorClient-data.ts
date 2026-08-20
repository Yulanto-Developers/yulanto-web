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
        subDesc: "",
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
        subDesc: "",
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
        subDesc: "",
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
        subDesc: "",
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
        title: "Web Design",
        image: "/assets/img/service/service-2-1.jpg",
        description: `We create impactful brand
identities that differentiate your
business and connect with
your audience.`,
        subDesc: "",
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
        subDesc: "",
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
        subDesc: "",
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
        subDesc: "",
        active: false,
    },
    //design studio service data end
    //digital studio service data start
    {
        id: 9,
        title: "Web Design",
        image: "/assets/img/project/Web-Design.jpg",
        description: "Create a powerful online presence with our professional web design services in Chennai. We design responsive, SEO-friendly, and user-focused websites that help businesses attract more customers and grow online.",
        subDesc: "As a trusted web design company in Chennai, we combine creativity, user experience (UX), and the latest web technologies to create websites that are visually appealing, mobile-friendly, fast-loading, and optimized for search engines. Every website we build is designed to deliver an exceptional user experience while increasing engagement, leads, and conversions.",
        categories: [
            "Website Designers",
            "Responsive Web Design",
            "Static Web Design",
            "UX Design",
            "Landing Page Design",
            "Startup Web Design",
            "Corporate Web Design",
            "SEO-Friendly Web Design",
        ],
        //in here in descrition comes as hover text subDesc comes as not hover text
    },
    {
        id: 10,
        title: "Web Development",
        image: "/assets/img/project/Web-Developement.jpg",
        description: "As experienced web developers in Chennai, we build fast, secure, and scalable websites with custom web development solutions and responsive web applications tailored to achieve your business goals.",
        subDesc: "At Yulanto Web Creations, we provide reliable and result-driven web development services in Chennai to help businesses establish a strong online presence. As an experienced Web Development Company in Chennai, we develop responsive, secure, and high-performance websites tailored to your business requirements.",
        categories: [
            "Web Developers",
            "Custom Website Development",
            "PHP Development",
            "Dynamic Website",
            "React Development",
            "Web Applications",
            "Website Development Services",
        ],
    },
    {
        id: 11,
        title: "Ecommerce",
        image: "/assets/img/project/E-commerce.jpg",
        description: "As a trusted eCommerce Website Development Company in Chennai, we build secure, scalable, and mobile-friendly online stores using WooCommerce, Shopify, and custom eCommerce solutions.",
        subDesc: "We specialize in building powerful, user-friendly eCommerce websites in Chennai that help businesses grow their online sales. As a trusted eCommerce Website Development Company in Chennai, we create secure, scalable, and feature-rich online stores that deliver seamless shopping experiences, boost conversions, and improve customer satisfaction.",
        categories: [
            "eCommerce Website",
            "Commerce Website Development",
            "Online Store Development",
            "WooCommerce Development",
            "Shopify Development",
            "Custom eCommerce Development",
            "Shopping Cart Development",
            "Payment Gateway Integration",
            "Online Shopping Website Development",
        ],
    },
    {
        id: 12,
        title: "Graphic Design",
        image: "/assets/img/project/Graphic-Design.jpg",
        description: "Create a powerful brand identity with our professional graphic design services in Chennai. We design eye-catching logos, brochures, business cards, social media creatives, flyers, banners, and marketing materials that reflect your brand.",
        subDesc: "we offer creative and impactful graphic design services in Chennai that help businesses establish a strong and memorable brand identity. As a trusted Graphic Design Company in Chennai, we create visually appealing designs that communicate your brand message effectively and leave a lasting impression on your audience.",
        categories: [
            "logo design",
            "brochure design",
            "business card design",
            "flyer design",
            "banner design",
            "social media post design",
            "corporate branding",
            "packaging design",
            "marketing collateral",
            "promotional materials",
        ],
    },
    {
        id: 13,
        title: "Digital Marketing",
        image: "/assets/img/project/Digital-Marketing.jpg",
        description: "Grow your business online with our professional Digital Marketing Services in Chennai. We provide SEO, Google Ads, Social Media Marketing (SMM), Meta Ads to increase your website traffic, generate quality leads, and improve online visibility.",
        subDesc: "we provide result-oriented Digital Marketing Services in Chennai to help businesses increase their online visibility, attract qualified leads, and achieve sustainable growth. As a trusted Digital Marketing Company in Chennai, we create customized marketing strategies tailored to your business goals and target audience.",
        categories: [
            "Digital Marketing",
            "Search Engine Optimization (SEO)",
            "Google Ads (PPC)",
            "Social Media Marketing (SMM)",
            "Meta Ads",
            "Remarketing",
            "Local SEO",
            "SEO Services",
            "Online Marketing",
            "OFF-Page SEO",
        ],
    },
    //digital studio service data end
];

// service-2 inner service data start
export const majorCItems = [
    "Branding",
    "Digital Design",
    "Marketing Assets",
    "Development",
];

export const majorClientinner = [
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