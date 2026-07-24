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
                desTitle: "Define Goals and Objectives",
                descPara: "Understand the purpose of the website design in Chennai,target audience, and desired outcomes. This could include increasing sales, brand awareness, lead generation, etc.",
            },
            {
                desTitle: "Define Goals and Objectives",
                descPara: "Understand the purpose of the website design in Chennai,target audience, and desired outcomes. This could include increasing sales, brand awareness, lead generation, etc.",
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
                desTitle: "Information Architecture",
                descPara: "Understand the purpose of the website design in Chennai,target audience, and desired outcomes. This could include increasing sales, brand awareness, lead generation, etc.Develop a site map and organize content in a logical structure. This helps users navigate the website easily and findinformation quickly.",
            },
            {
                desTitle: "Visual Design",
                descPara: "Design the look and feel of the website, including colors, typography, imagery, and overall style.Ensure consistency with branding elements for a cohesive identity.",
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
                desTitle: "Responsive Design",
                descPara: "Ensure the website is optimized for various devices and screen sizes, including desktops, tablets, and smartphones. Responsive design improves user experience and accessibility.",
            },
            {
                desTitle: "Content Creation",
                descPara: "Develop high-quality, engaging content that aligns with the brand voice and resonates with the target audience. This includes text, images, videos, and other multimedia elements.",
            },
        ]
        // categories: ["UI/UX Design", "Product Design", "Motion Graphics"],
    },
    {
        id: "four",
        title: "Testing & Optimization",
        Icon: CreativeIcon,
        description: [
            {
                desTitle: "Testing and Optimization",
                descPara: "Conduct thorough testing to identify and fix any bugs or issues. Optimize performance, load times, and responsiveness. Gather feedback from real users and make iterative improvements.",
            },
            {
                desTitle: "Launch and Promotion",
                descPara: "Deploy the website to the live server and promote it through various channels, such as social media, email marketing, and search engine optimization (SEO).",
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
                desTitle: "Analytics and Monitoring",
                descPara: "Set up analytics tools like Google Analytics to track website traffic, user engagement, and other key metrics. Monitor performance regularly and make data-driven decisions for continuous improvement.",
            },
            {
                desTitle: "Maintenance and Updates",
                descPara: "Regularly update content, security patches, and software to keep the website running smoothly and secure against potential threats.",
            },
        ]
        // categories: ["Content Creation", "Marketing", "Visual Storytelling"],
    },
];

