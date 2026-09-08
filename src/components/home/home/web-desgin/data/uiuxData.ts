import bc from "@/assets/img/website/ui/Creative-UI-UX-Design.jpg";
import br from "@/assets/img/website/ui/Creative-UI-UX-Design-right.jpg";
import bl from "@/assets/img/website/ui/Creative-UI-UX-Design-left.jpg";
import { CoverflowSlide } from "@/components/offpageseo/header";

import t1 from '@/assets/img/website/ui/top-1.jpg'
import t2 from '@/assets/img/website/ui/top-2.jpg'
import t3 from '@/assets/img/website/ui/top-3.jpg'
import t4 from '@/assets/img/website/ui/top-4.jpg'
import t5 from '@/assets/img/website/ui/top-5.jpg'

import u1 from '@/assets/img/website/ui/User-Experience-Design-1.jpg'
import u2 from '@/assets/img/website/ui/User-Experience-Design-2.jpg'
import u3 from '@/assets/img/website/ui/User-Interface-Design-1.jpg'
import u4 from '@/assets/img/website/ui/User-Interface-Design-2.jpg'
import u5 from '@/assets/img/website/ui/Website-UI-UX-Design-1.jpg'
import u6 from '@/assets/img/website/ui/Website-UI-UX-Design-2.jpg'
import u7 from '@/assets/img/website/ui/Mobile-App-UI-UX-Design-1.jpg'
import u8 from '@/assets/img/website/ui/Mobile-App-UI-UX-Design-2.jpg'
import u9 from '@/assets/img/website/ui/Wireframing-&-Prototyping-1.jpg'
import u10 from '@/assets/img/website/ui/Wireframing-&-Prototyping-1.jpg'
import u11 from '@/assets/img/website/ui/UX-Research-&-User-Flows-1.jpg'
import u12 from '@/assets/img/website/ui/UX-Research-&-User-Flows-2.jpg'
import u13 from '@/assets/img/website/ui/design-systems-1.jpg'
import u14 from '@/assets/img/website/ui/design-systems-2.jpg'

import understand from '@/assets/img/website/ui/1.Understand.jpg';
import Research from '@/assets/img/website/ui/2.Research.jpg';
import Plan from '@/assets/img/website/ui/3.Plan.jpg';
import Design from '@/assets/img/website/ui/4.Design.jpg';
import Prototype from '@/assets/img/website/ui/5.Prototype.jpg';
import Refine from '@/assets/img/website/ui/6.Refine.jpg';


export const seoTopText = `A great digital product should be easy to understand, simple to navigate, and enjoyable to use. Our UI/UX design services in Chennai combine creative visual design with thoughtful user experiences to create websites and digital products that users love to interact with.`;

export const seoBottomText = `From user research and information architecture to wireframes, prototypes, and final user interface design, we create experiences that balance usability, aesthetics, and business objectives.`;
export const seoSlides: CoverflowSlide[] = [
    { src: "/assets/img/website/ui/top-1.jpg", alt: "Off-Page Link Building Strategy" },
    { src: "/assets/img/website/ui/top-2.jpg", alt: "Local Citation & Directory Submission" },
    { src: "/assets/img/website/ui/top-3.jpg", alt: "Content Marketing & Guest Posting" },
    { src: "/assets/img/website/ui/top-4.jpg", alt: "Brand Mention & Authority Building" },
    { src: "/assets/img/website/ui/top-5.jpg", alt: "Social Signals & Digital PR" },
];
export const galleryImages = [
    {
        src: bc.src,
        alt: "Corporate website design",
        className: "gallery-main",
    },
    {
        src: bl.src,
        alt: "Corporate website development",
        className: "gallery-small gallery-small-one",
    },
    {
        src: br.src,
        alt: "Corporate website",
        className: "gallery-small gallery-small-two",
    },
];




export const uiUxProcessData = [
    {
        stepNumber: "Step 1",
        title: "User Experience Design",
        description:
            "We plan user journeys, navigation structures, and interactions that make digital products easier and more enjoyable to use.",
        annotation: "Getting to know your users ➔",
        badgeColor: "#FFF3E9",
        textColor: "#DD6B20",
        imageSrc: [u1.src, u2.src],
    },

    {
        stepNumber: "Step 2",
        title: "User Interface Design",
        description:
            "Our user interface design focuses on creating visually appealing, consistent, and responsive interfaces that represent your brand effectively.",
        annotation: "➔ Creating the right visual direction",
        badgeColor: "#EBF8FF",
        textColor: "#3182CE",
        imageSrc: [u3.src, u4.src],
    },

    {
        stepNumber: "Step 3",
        title: "Website UI/UX Design",
        description:
            "We design modern website experiences with clear layouts, intuitive navigation, strong visual hierarchy, and conversion-focused user flows.",
        annotation: "Building experiences that connect ➔",
        badgeColor: "#F3E8FF",
        textColor: "#805AD5",
        imageSrc: [u5.src, u6.src],
    },

    {
        stepNumber: "Step 4",
        title: "Mobile App UI/UX Design",
        description:
            "We create mobile experiences that are easy to navigate and optimized for different screen sizes and user behaviors.",
        annotation: "➔ Designed for every screen",
        badgeColor: "#FFF5F5",
        textColor: "#E53E3E",
        imageSrc: [u7.src, u8.src],
    },

    {
        stepNumber: "Step 5",
        title: "Wireframing & Prototyping",
        description:
            "We create wireframes and interactive prototypes to visualize user flows and validate ideas before development begins.",
        annotation: "Testing ideas before development ➔",
        badgeColor: "#F0FDF4",
        textColor: "#16A34A",
        imageSrc: [u9.src, u10.src],
    },

    {
        stepNumber: "Step 6",
        title: "UX Research & User Flows",
        description:
            "We analyze user requirements and develop logical user flows that reduce friction and help users reach their goals faster.",
        annotation: "➔ Understanding every user journey",
        badgeColor: "#FFF7ED",
        textColor: "#EA580C",
        imageSrc: [u11.src, u12.src],
    },

    {
        stepNumber: "Step 7",
        title: "Design Systems",
        description:
            "We establish reusable UI components, typography, colors, spacing, and design guidelines to maintain consistency across your digital product.",
        annotation: "Creating consistency at every level ➔",
        badgeColor: "#F5F3FF",
        textColor: "#7C3AED",
        imageSrc: [u13.src, u14.src],
    },
];

import {
    FaMagnifyingGlass,
    FaLightbulb,
    FaLayerGroup,
    FaPalette,
    FaPlay,
    FaPenRuler,
} from "react-icons/fa6";

export const uisteps = [
    {
        stepNumber: "01",
        title: "Understand",
        description:
            "We learn about your business, audience, objectives, competitors, and product requirements.",
        imageSrc: understand.src,
        icon: FaMagnifyingGlass,
    },

    {
        stepNumber: "02",
        title: "Research",
        description:
            "Our team studies user expectations and identifies opportunities to improve the overall experience.",
        imageSrc: Research.src,
        icon: FaLightbulb,
    },

    {
        stepNumber: "03",
        title: "Plan",
        description:
            "We develop information architecture, user flows, and wireframes to establish a strong foundation.",
        imageSrc: Plan.src,
        icon: FaLayerGroup,
    },

    {
        stepNumber: "04",
        title: "Design",
        description:
            "Our UI/UX designers transform the structure into a visually engaging and user-friendly interface.",
        imageSrc: Design.src,
        icon: FaPalette,
    },

    {
        stepNumber: "05",
        title: "Prototype",
        description:
            "Interactive prototypes help you experience the product flow before development.",
        imageSrc: Prototype.src,
        icon: FaPlay,
    },

    {
        stepNumber: "06",
        title: "Refine",
        description:
            "We review feedback, improve usability, and prepare polished designs for development.",
        imageSrc: Refine.src,
        icon: FaPenRuler,
    },
];

export const whyChooseItems = [
    "User-focused design approach",
    "Clean and modern interface design",
    "Mobile-responsive design solutions",
    "Conversion-oriented user experiences",
    "Consistent brand-based visual systems",
    "Wireframes and interactive prototypes",
    "Design solutions tailored to your business",
    "Collaboration with development teams",
];