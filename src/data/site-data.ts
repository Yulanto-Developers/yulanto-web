import { BrandingIcon, CreativeIcon, DesignIcon, TechnologyIcon } from "@/svg/ServiceIcons";

export const SLIDER_TEXTS = [
    { id: 1, text: "Website Design" },
    { id: 2, text: "Web Development" },
    { id: 3, text: "UI/UX Design" },
    { id: 4, text: "Ecommerce Design" },
    { id: 5, text: "Dynamic Website" },
    { id: 6, text: "PHP Development" },
    { id: 7, text: "React Development" },
    { id: 8, text: "Logo Design" },
    { id: 9, text: "Branding & Identity" },
    { id: 10, text: "Digital Marketing" },
    { id: 11, text: "SEO & SMM" },
    // { id: 12, text: "Web Design & Development" },
];

//Creative Studio Service data
interface DescriptionItem {
    desTitle: string;
    descPara: string;
}

interface Service {
    id: string;
    title: string;
    Icon: React.ElementType;
    description: (string | DescriptionItem)[];
    categories?: string[];
}

export const services: Service[] = [
    {
        id: "one",
        title: "Research",
        Icon: BrandingIcon,
        description: [
            {
                desTitle: "Define Goals & Objectives",
                descPara: "We understand your business goals, target audience, and project objectives to create a website design in Chennai that supports brand awareness, lead generation, and business growth.",
            },
            {
                desTitle: "Research & Planning",
                descPara: "Our dedicated web designers and developers in Chennai team conducts market research, competitor analysis, and audience research to develop a strategic plan tailored to your business. As a trusted Web Design Company in Chennai, we create unique solutions that align with your vision.",
            },
        ]
        // categories: ["Brand Strategy", "Identity Design", "Creative Direction"],
    },
    {
        id: "two",
        title: "UI Design",
        Icon: TechnologyIcon,
        description: [
            {
                desTitle: "Information Architecturee",
                descPara: "We organize your website content with a clear sitemap and intuitive navigation, ensuring visitors can easily find the information they need.",
            },
            {
                desTitle: "Visual Design",
                descPara: "Our web designers in Chennai create modern, engaging, and brand-focused user interfaces using the latest web design Technologies to deliver an exceptional user experience.",
            },
        ]
        // categories: ["Web Development", "App Development", "SaaS Solutions"],
    },
    {
        id: "three",
        title: "Design & Development",
        Icon: DesignIcon,
        description: [
            {
                desTitle: "Responsive Website Development",
                descPara: "We build fast, secure, and fully responsive website design in Chennai that perform seamlessly across desktops, tablets, and mobile devices.",
            },
            {
                desTitle: "Content Integration",
                descPara: "We integrate high-quality content, images, videos, and interactive elements that reflect your brand and engage your target audience. Through prototyping and continuous refinement, we transform ideas into high-performing websites design in Chennai.",
            },
        ]
        // categories: ["UI/UX Design", "Product Design", "Motion Graphics"],
    },
    {
        id: "four",
        title: "Testing & Launch",
        Icon: CreativeIcon,
        description: [
            {
                desTitle: "Quality Assurance",
                descPara: "Every website design undergoes comprehensive testing for functionality, security, speed, responsiveness, and cross-browser compatibility before launch.",
            },
            {
                desTitle: "Website Launch",
                descPara: "Once approved, we deploy your website design to the live server and optimize it for search engines, ensuring a smooth and successful launch.",
            },
        ]
        // categories: ["Content Creation", "Marketing", "Visual Storytelling"],
    },
    {
        id: "five",
        title: "Monitoring & Support",
        Icon: CreativeIcon,
        description: [
            {
                desTitle: "Performance Monitoring",
                descPara: "We monitor website performance using analytics tools to track traffic, user behavior, and overall website design in Chennai performance for continuous improvement.",
            },
            {
                desTitle: "Website Maintenance",
                descPara: "Our dedicated web designers and developers in Chennai team provides ongoing website maintenance, security updates, backups, technical support, and performance optimization to keep your website secure, reliable, and up to date.",
            },
        ]
        // categories: ["Content Creation", "Marketing", "Visual Storytelling"],
    },
];

