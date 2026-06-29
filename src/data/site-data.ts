import { BrandingIcon, CreativeIcon, DesignIcon, TechnologyIcon } from "@/svg/ServiceIcons";

export const SLIDER_TEXTS = [
    { id: 1, text: "Brand Identity Design" },
    { id: 2, text: "Infographic and other" },
    { id: 3, text: "Branding & Identity" },
    { id: 4, text: "Web Design & Development" },
    { id: 5, text: "UI / UX Design" },
    { id: 6, text: "Complex brand design" },
    { id: 7, text: "Complex brand design" },
    { id: 8, text: "Brand Identity Design" },
    { id: 9, text: "Brand Identity Design" },
    { id: 10, text: "Infographic and other" },
    { id: 11, text: "Branding & Identity" },
    { id: 12, text: "Web Design & Development" },
];

//Creative Studio Service data
interface Service {
    id: string;
    title: string;
    Icon: React.ElementType;
    description: string;
    categories: string[];
};

export const services: Service[] = [
    {
        id: "one",
        title: "Branding",
        Icon: BrandingIcon,
        description:
            "We create impactful brand identities that differentiate your business and connect with your audience.",
        categories: ["Brand Strategy", "Identity Design", "Creative Direction"],
    },
    {
        id: "two",
        title: "Technology",
        Icon: TechnologyIcon,
        description:
            "We build scalable digital solutions that enhance user experience and drive business growth.",
        categories: ["Web Development", "App Development", "SaaS Solutions"],
    },
    {
        id: "three",
        title: "Design",
        Icon: DesignIcon,
        description:
            "We craft modern, user-focused designs that communicate clearly and inspire engagement.",
        categories: ["UI/UX Design", "Product Design", "Motion Graphics"],
    },
    {
        id: "four",
        title: "Creative",
        Icon: CreativeIcon,
        description:
            "We deliver creative campaigns that tell compelling stories and elevate your brand presence.",
        categories: ["Content Creation", "Marketing", "Visual Storytelling"],
    },
];

