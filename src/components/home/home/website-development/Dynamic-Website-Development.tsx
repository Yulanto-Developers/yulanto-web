'use client';
import React from 'react'
import BreadcurmbData from '@/components/breadcrum/sections/breadcrumbdata'
import { useAOS } from '@/components/hooks/useAOS';
import { WhyUsA1, Advantages, FAQA1 } from './components/index'
import '../aboutcomponents/ourStory.css';
import '@/assets/css/textAnimations.css';
import AbtServices from './components/AbtServices';
import WhyChooseDynamic from './components/WhyChooseDynamic';
import advantagesData from "./components/advantagesdata";
import ProcessSection from './components/ProcessSection';




function DynamicWebsiteDevelopment() {
    // Use the AOS hook
    useAOS();
    return (
        <>
            <BreadcurmbData />
            <AbtServices />
            <WhyChooseDynamic />
            <Advantages items={advantagesData.slice(0, 4)} />
            {/* <DynamicWebsiteSolutions /> */}
            <ProcessSection />
            <WhyUsA1 />
            <FAQA1 num1={0} num2={8}
                highlightedText="Frequently Asked Questions"
                titleSuffix="" />
        </>
    )
}

export default DynamicWebsiteDevelopment