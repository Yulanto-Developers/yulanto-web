'use client';
import React from 'react'
import BreadcurmbData from '@/components/breadcrum/sections/breadcrumbdata'
import { useAOS } from '@/components/hooks/useAOS';
import '../aboutcomponents/ourStory.css';
import '@/assets/css/textAnimations.css';
import CustomWebsiteDevelopmentSec1 from './components/CustomWebsiteDevelopmentSec1';
import WhyC1 from './components/WhyC1';
import Cardsixdesg1 from './components/Cardsixdesg1';
import FAQA1  from './components/FAQA1';
import CardTwoDes from './components/CardTwoDes';
import WhatWeDeliver from './components/WhatWeDeliver';
import { DynamicWebsiteSolutions } from './components';
import ContentImage from './components/ContentImage'

function CustomWebsiteDdevelopment() {
    // Use the AOS hook
    useAOS();
    return (
        <div>
            <BreadcurmbData />
            <CustomWebsiteDevelopmentSec1 />
            <WhyC1 />
            <Cardsixdesg1 />
            <CardTwoDes/>
            <WhatWeDeliver/>
            <DynamicWebsiteSolutions/>
            <FAQA1 num1={15} num2={22}
                            highlightedText="Frequently Asked Questions"
                            titleSuffix="" />
            <ContentImage/>
        </div>
    )
}

export default CustomWebsiteDdevelopment;