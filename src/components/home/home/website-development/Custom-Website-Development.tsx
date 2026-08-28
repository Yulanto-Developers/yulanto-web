'use client';
import React from 'react'
import BreadcurmbData from '@/components/breadcrum/sections/breadcrumbdata'
import { useAOS } from '@/components/hooks/useAOS';
import { DynamicWebsiteSolutions, WhyUsA1, CreativeAgencyFunfact, Advantages, FAQA1 } from './components/index'
import '../aboutcomponents/ourStory.css';
import '@/assets/css/textAnimations.css';
import creativestats from './components/creativestatsdata';


function CustomWebsiteDdevelopment() {
    // Use the AOS hook
    useAOS();

    // Define custom section title
    const customSectionTitle = {
        subtitle: "Website Development Company in Chennai",
        titleFirst: "Secure, Custom-Built Websites",
        titleSecond: " Designed Around Your Business",
        description: " ",
        animationType: "text-reveal-lines",
        delay: 200
    } as const;

    const customStatsData = creativestats.slice(0, 4)

    return (
        <div>
            <BreadcurmbData />
            <CreativeAgencyFunfact sectionTitle={customSectionTitle} statsData={customStatsData} />

        </div>
    )
}

export default CustomWebsiteDdevelopment;