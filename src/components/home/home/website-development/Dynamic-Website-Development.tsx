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
            <WhyUsA1
                num1={0}
                num2={12}
                titlefirst="Why Choose Us for"
                titlesecond="Web Development in Chennai?"
                description="Choosing the right development partner is important for building a website that delivers long-term value. At Yulanto Web Creations, we focus on creating websites that combine attractive design, functionality, usability, and business objectives."
                footerText="Whether you are a startup, small business, established company, or growing enterprise, our web developers in Chennai can help transform your ideas into a functional and professional website."
            />
            <FAQA1 num1={0} num2={7}
                highlightedText="Frequently Asked Questions"
                titleSuffix="" />
        </>
    )
}

export default DynamicWebsiteDevelopment