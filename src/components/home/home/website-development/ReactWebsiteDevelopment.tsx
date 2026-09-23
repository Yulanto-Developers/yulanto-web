'use client';
import React from 'react'
import BreadcurmbData from '@/components/breadcrum/sections/breadcrumbdata'
import { useAOS } from '@/components/hooks/useAOS';
import '@/assets/css/textAnimations.css';
import './components/dynamicwebdesign.css';
import ReactPageIntro from './reactpagecomponents/ReactPageIntro'
import  ReactServicesHero  from './reactpagecomponents/ReactServicesHero'

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






function ReactWebsiteDevelopment() {
    // Use the AOS hook
    useAOS();
    return (
        <div>
            <BreadcurmbData />
            <ReactPageIntro />
            <ReactServicesHero
                
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