import { ServiceItemDT } from "@/types/service-dt";

export const servicesData: ServiceItemDT[] = [
    {
        id: 1,
        keyValue: "01",
        title: "Quality Design",
        image: "/assets/img/service/service-1.jpg",
        description: `Our motto is centered around quality, and each project we undertake showcases our dedication to prioritizing excellence.`,
        subDesc: "",
        // categories: [
        //     "Content strategy",
        //     "Analytics & reporting",
        //     "Community management",
        //     "4+",
        // ],
    },
    {
        id: 2,
        keyValue: "02",
        title: "Innovative Attitude",
        image: "/assets/img/service/service-2.jpg",
        description: `We constantly seek fresh ideas and embrace innovation throughout every phase of development, valuing their uniqueness.`,
        subDesc: "",
        // categories: [
        //     "Content strategy",
        //     "Analytics & reporting",
        //     "Community management",
        //     "4+",
        // ],
    },
    {
        id: 3,
        keyValue: "03",
        title: "Excellent Customizations",
        image: "/assets/img/service/service-3.jpg",
        description: `We are able to gain a thorough understanding of the requirements and provide uniquely customized solutions that set us apart from the competition.`,
        subDesc: "",
        // categories: [
        //     "Content strategy",
        //     "Analytics & reporting",
        //     "Community management",
        //     "4+",
        // ],
    },
   {
        id: 4,
        keyValue: "04",
        title: "Professional Team",
        image: "/assets/img/service/service-4.jpg",
        description: `Our team consists of highly skilled and experienced professionals in the field of web design, ensuring the creation of exceptional websites.`,
        subDesc: "",
        // categories: [
        //     "Content strategy",
        //     "Analytics & reporting",
        //     "Community management",
        //     "4+",
        // ],
    },{
        id: 5,
        keyValue: "05",
        title: "On Time Delivery",
        image: "/assets/img/service/service-4.jpg",
        description: `At our core, we prioritize meeting delivery timelines and acknowledge the importance of finishing projects on schedule. This is why we aim to promise less and deliver more.`,
        subDesc: "",
        // categories: [
        //     "Content strategy",
        //     "Analytics & reporting",
        //     "Community management",
        //     "4+",
        // ],
    },
    {
        id: 6,
        keyValue: "06",
        title: "Customer Support",
        image: "/assets/img/service/service-4.jpg",
        description: `With Yulanto, post-implementation support is something you never need to worry about, given our reliable and expert technical support team that is prepared to assist you.`,
        subDesc: "",
        // categories: [
        //     "Content strategy",
        //     "Analytics & reporting",
        //     "Community management",
        //     "4+",
        // ],
    },

    //design studio service data start
    {
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
        id: 11,
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
        title: "Marketing",
        image: "/assets/img/project/d1.png",
        description: "Driving growth through strategic digital marketing and branding.",
        subDesc: "Our team of skilled graphic designers in Chennai specializes in producing visual content to effectively convey messages. We offer services such as logo design in Chennai, brochure creationin Chennai, poster design, company profile, and more.",
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
        title: "Graphics",
        image: "/assets/img/project/d1.png",
        description: "Creating visually compelling designs that elevate brand identity.",
        subDesc: "Our team of skilled graphic designers in Chennai specializes in producing visual content to effectively convey messages. We offer services such as logo design in Chennai, brochure creationin Chennai, poster design, company profile, and more.",
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
        title: "Technology",
        image: "/assets/img/project/d1.png",
        description: "Leveraging modern technologies to deliver innovative solutions.",
        subDesc: "Our team of skilled graphic designers in Chennai specializes in producing visual content to effectively convey messages. We offer services such as logo design in Chennai, brochure creationin Chennai, poster design, company profile, and more.",
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