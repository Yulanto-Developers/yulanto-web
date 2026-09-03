import t1 from '@/assets/img/website/landing/top-1.jpg'
import t2 from '@/assets/img/website/landing/top-2.jpg'
import t3 from '@/assets/img/website/landing/top-3.jpg'
import t4 from '@/assets/img/website/landing/top-4.jpg'
import t5 from '@/assets/img/website/landing/top-5.jpg'
import bc from "@/assets/img/website/landing/Get-a-Professional-1.jpg";
import br from "@/assets/img/website/landing/Get-a-Professional-left.jpg";
import bl from "@/assets/img/website/landing/Get-a-Professional-right.jpg";
import p1 from "@/assets/img/website/landing/Our-Approach-1.jpg";
import p2 from "@/assets/img/website/landing/Our-Approach-2.jpg";
import p3 from "@/assets/img/website/landing/Our-Approach-3.jpg";
import p4 from "@/assets/img/website/landing/Our-Approach-4.jpg";
import p5 from "@/assets/img/website/landing/Our-Approach-5.jpg";
import l1 from "@/assets/img/website/landing/Landing-Page-1.jpg";
import l2 from "@/assets/img/website/landing/Landing-Page-2.jpg";
import l3 from "@/assets/img/website/landing/Landing-Page-3.jpg";
import l4 from "@/assets/img/website/landing/Landing-Page-4.jpg";
import l5 from "@/assets/img/website/landing/Landing-Page-5.jpg";
import l6 from "@/assets/img/website/landing/Landing-Page-6.jpg";
import {
    FaGoogle,
    FaFacebookF,
    FaInstagram,
    FaBullhorn,
    FaUserPlus,
    FaCalendarCheck,
    FaRocket,
    FaTags,
    FaEnvelope,
    FaMobileAlt,
} from "react-icons/fa";
export interface ProcessCardData {
    title: string;
    description: string;
    link?: string;
    bgImage: string;
    rotation: string;
}
export const startupGalleryImages = [
    {
        id: 1,
        src: t1.src,
        alt: "Startup website design",
        x: -320,
        y: 15,
        order: 0,
        zIndex: 50,
        direction: "left" as const,
    },
    {
        id: 2,
        src: t2.src,
        alt: "Business website design",
        x: -160,
        y: 32,
        order: 1,
        zIndex: 40,
        direction: "left" as const,
    },
    {
        id: 3,
        src: t3.src,
        alt: "Modern website design",
        x: 0,
        y: 8,
        order: 2,
        zIndex: 30,
        direction: "right" as const,
    },
    {
        id: 4,
        src: t4.src,
        alt: "Corporate website design",
        x: 160,
        y: 22,
        order: 3,
        zIndex: 20,
        direction: "right" as const,
    },
    {
        id: 5,
        src: t5.src,
        alt: "Startup web design",
        x: 320,
        y: 44,
        order: 4,
        zIndex: 10,
        direction: "left" as const,
    },
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

export const landinglist = [
    {
        title: "Google Ads and PPC campaigns",
        icon: FaGoogle,
    },
    {
        title: "Facebook and Instagram advertising",
        icon: FaFacebookF,
    },
    {
        title: "Product and service promotions",
        icon: FaBullhorn,
    },
    {
        title: "Lead generation campaigns",
        icon: FaUserPlus,
    },
    {
        title: "Event registrations",
        icon: FaCalendarCheck,
    },
    {
        title: "New product launches",
        icon: FaRocket,
    },
    {
        title: "Special offers and promotions",
        icon: FaTags,
    },
    {
        title: "Business enquiries",
        icon: FaUserPlus,
    },
    {
        title: "Email marketing campaigns",
        icon: FaEnvelope,
    },
    {
        title: "App and software promotions",
        icon: FaMobileAlt,
    },
];
export const processCards: ProcessCardData[] = [
    {
        title: 'Research & Planning',
        description:
            'We understand your business, target audience, campaign objective and competitors before planning the page structure.',
        bgImage:
            p1.src,
        rotation: 'rotate-3',
    },
    {
        title: 'UI & Visual Design',
        description:
            'Our designers create a clean and professional landing page UI that matches your brand identity.',
        bgImage:
            p2.src,
        rotation: '-rotate-2',
    },
    {
        title: 'Conversion-Focused Layout',
        description:
            'We strategically place headlines, benefits, visuals, testimonials, forms and CTAs to encourage visitors to take action.',
        bgImage:
            p3.src,
        rotation: 'rotate-2',
    },
    {
        title: 'Mobile-Friendly Design',
        description:
            'Your landing page is designed to provide a smooth experience across desktops, tablets and smartphones.',
        bgImage:
            p4.src,
        rotation: '-rotate-3',
    },
    {
        title: 'Performance & User Experience',
        description:
            'We focus on a clean interface, easy navigation and an engaging experience that helps reduce distractions.',
        bgImage:
            p5.src,
        rotation: 'rotate-0',
    },
];


export const welcomePageBenefits = [
    {
        id: 1,
        title: "Introduce your brand professionally",
    },
    {
        id: 2,
        title: "Highlight your products or services",
    },
    {
        id: 3,
        title: "Direct visitors to important sections",
    },
    {
        id: 4,
        title: "Promote special offers",
    },
    {
        id: 5,
        title: "Generate enquiries",
    },
    {
        id: 6,
        title: "Strengthen brand credibility",
    },
];
import {
    Type,
    Image as ImageIcon,
    MousePointerClick,
    Layout,
    ShieldCheck,
    Smartphone
} from 'lucide-react';

export interface UiFeature {
    icon: any;
    title: string;
    description: string;
    bgImage: string;
}

export const landingUiFeatures: UiFeature[] = [
    {
        icon: Type,
        title: "Clear & Powerful Headlines",
        description: "We create attention-grabbing headlines that immediately communicate your core offer and value proposition.",
        bgImage: l1.src
    },
    {
        icon: ImageIcon,
        title: "Engaging Visuals",
        description: "Relevant images, graphics, icons and videos help communicate your message and keep visitors interested.",
        bgImage: l2.src
    },
    {
        icon: MousePointerClick,
        title: "Strong Call-to-Action",
        description: "Strategically positioned CTA buttons guide visitors toward actions such as Get a Quote, Contact Us, or Book Now.",
        bgImage: l3.src
    },
    {
        icon: Layout,
        title: "Clean Layout",
        description: "We eliminate unnecessary distractions and create a focused page experience.",
        bgImage: l4.src
    },
    {
        icon: ShieldCheck,
        title: "Trust-Building Elements",
        description: "Testimonials, reviews, certifications, client logos and trust badges can be incorporated to improve credibility.",
        bgImage: l5.src
    },
    {
        icon: Smartphone,
        title: "Mobile Responsive Design",
        description: "Your landing page will adapt smoothly to smartphones, tablets and desktops.",
        bgImage: l6.src
    }
];

import {
    Palette,
    Megaphone,
    Calendar,
    Sparkles,
    ShoppingBag,
    Award,
    Layers,
    FileText,
    Building2,
    Rocket,
    Image as ImageIcons,
    BadgePercent,
    PenTool,
    Printer,
} from "lucide-react";

export const posterIndustries = [
    { id: 1, name: "Lead Generation", icon: FileText, position: { top: "10%", left: "35%" } },
    { id: 2, name: "Google Ads", icon: Palette, position: { top: "15%", right: "25%" } },
    { id: 3, name: "Social Media Ads", icon: Sparkles, position: { top: "30%", left: "18%" } },
    { id: 4, name: "Product Launches", icon: Award, position: { top: "30%", right: "18%" } },
    { id: 5, name: "Service Promotions", icon: PenTool, position: { top: "50%", left: "4%" } },
    { id: 6, name: "Event Registration", icon: Calendar, position: { top: "50%", right: "5%" } },
    { id: 7, name: "Offers & Discounts", icon: Printer, position: { bottom: "35%", left: "45%" } },
];

export interface wayStep {
    stepNumber: string;
    title: string;
    description: string;
    iconClass: string;
}

export const wayDate: wayStep[] = [
    {
        stepNumber: "01",
        title: "Customized Design",
        description: "Every landing page is designed around your brand, audience and campaign objective.",
        iconClass: "fa-solid fa-paintbrush",
    },
    {
        stepNumber: "02",
        title: "Conversion-Focused Approach",
        description: "We structure the page to guide visitors naturally toward your desired action.",
        iconClass: "fa-solid fa-bullseye",
    },
    {
        stepNumber: "03",
        title: "Responsive Design",
        description: "Your page will deliver a consistent experience across different screen sizes.",
        iconClass: "fa-solid fa-mobile-screen-button",
    },
    {
        stepNumber: "04",
        title: "Modern UI",
        description: "We follow contemporary design trends to create professional and visually appealing landing pages.",
        iconClass: "fa-solid fa-wand-magic-sparkles",
    },
    {
        stepNumber: "05",
        title: "Brand Consistency",
        description: "Colors, typography, imagery and visual elements are aligned with your existing brand identity.",
        iconClass: "fa-solid fa-swatchbook",
    },
    {
        stepNumber: "06",
        title: "Easy Handover",
        description: "After completion, we provide the required files and assets for your future use and maintenance.",
        iconClass: "fa-solid fa-handshake-angle",
    },
];



export const landingPageBenefits = [
    {
        id: 1,
        title: "Generate more qualified enquiries",
    },
    {
        id: 2,
        title: "Improve campaign performance",
    },
    {
        id: 3,
        title: "Present your offer more clearly",
    },
    {
        id: 4,
        title: "Build trust with potential customers",
    },
    {
        id: 5,
        title: "Create a stronger first impression",
    },
    {
        id: 6,
        title: "Improve the user experience",
    },
    {
        id: 7,
        title: "Support Google Ads and digital marketing campaigns",
    },
    {
        id: 8,
        title: "Increase opportunities for conversions",
    },
];

export const landingSalesPitch = [
    {
        id: 1,
        question: "What are you offering?",
        description:
            "Clearly communicate your product, service or promotion.",
    },
    {
        id: 2,
        question: "Why should customers choose you?",
        description:
            "Highlight your benefits, expertise, credibility and unique value.",
    },
    {
        id: 3,
        question: "What should visitors do next?",
        description:
            "Provide a clear and compelling call-to-action.",
    },
];