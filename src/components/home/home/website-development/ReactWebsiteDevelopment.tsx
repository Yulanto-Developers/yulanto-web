'use client';
import React from 'react'
import BreadcurmbData from '@/components/breadcrum/sections/breadcrumbdata'
import { useAOS } from '@/components/hooks/useAOS';
import '@/assets/css/textAnimations.css';
import './components/dynamicwebdesign.css';
import ReactPageIntro from './reactpagecomponents/ReactPageIntro'
import { Floatstyle } from '../myComponents/common/Floatstyle'
import CtaOne from './reactpagecomponents/CtaOne';
import ProcessOne from './reactpagecomponents/ProcessOne';
import ThreeColumnFeature from './reactpagecomponents/ThreeColumnFeature';
import {
    Code2,
    Atom,
    MonitorSmartphone,
    BriefcaseBusiness,
    Layout,
    AppWindow,
    Palette,
    RefreshCw,
    PlugZap,
    CreditCard,
    Gauge,
    Headset,
} from "lucide-react";
import CreativeReactSection from './reactpagecomponents/CreativeReactSection';
import FeatureSliderOne from './reactpagecomponents/FeatureSliderOne';
import DualDirectionSlider from './reactpagecomponents/DualDirectionSlider';



export const reactlables = [
    {
        id: 1,
        name: "Custom React Website Development",
        icon: Code2,
        position: { top: "6%", left: "25%" },
    },
    {
        id: 2,
        name: "React JS UI Development",
        icon: Atom,
        position: { top: "12%", right: "25%" },
    },
    {
        id: 3,
        name: "Responsive React Web Design",
        icon: MonitorSmartphone,
        position: { top: "30%", left: "10%" },
    },
    {
        id: 4,
        name: "React Business Website Development",
        icon: BriefcaseBusiness,
        position: { top: "30%", right: "10%" },
    },
    {
        id: 5,
        name: "React Single Page Applications (SPA)",
        icon: Layout,
        position: { top: "50%", left: "4%" },
    },
    {
        id: 6,
        name: "React Web Application Development",
        icon: AppWindow,
        position: { top: "50%", right: "5%" },
    },
    {
        id: 7,
        name: "React UI/UX Implementation",
        icon: Palette,
        position: { bottom: "25%", left: "45%" },
    },
    {
        id: 8,
        name: "React Website Redesign",
        icon: RefreshCw,
        position: { bottom: "20%", left: "20%" },
    },
    {
        id: 9,
        name: "API Integration with React",
        icon: PlugZap,
        position: { bottom: "20%", right: "20%" },
    },
    {
        id: 10,
        name: "Third-Party API & Payment Gateway Integration",
        icon: CreditCard,
        position: { bottom: "8%", left: "35%" },
    },
    {
        id: 11,
        name: "React Performance Optimization",
        icon: Gauge,
        position: { bottom: "8%", right: "10%" },
    },
    {
        id: 12,
        name: "Website Maintenance & Support",
        icon: Headset,
        position: { bottom: "8%", left: "8%" },
    },
];



function ReactWebsiteDevelopment() {
    // Use the AOS hook
    useAOS();
    return (
        <div>
            <BreadcurmbData />
            <ReactPageIntro />
            <Floatstyle
                title="Our React Website Development Services"
                subtitle="React JS is a powerful JavaScript library for developing dynamic and interactive web experiences. Our development approach focuses on creating clean, reusable, and scalable components that make your website easier to maintain and expand."
                industries={reactlables}
            />
            <CreativeReactSection />
            <FeatureSliderOne/>
            <DualDirectionSlider/>
            <ProcessOne />
            <ThreeColumnFeature />
            <CtaOne />
             
        </div>
    )
}

export default ReactWebsiteDevelopment;