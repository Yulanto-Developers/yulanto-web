'use client';
import React from 'react'
import BreadcurmbData from '@/components/breadcrum/sections/breadcrumbdata'
import { useAOS } from '@/components/hooks/useAOS';
import {DynamicWebsiteSolutions, WhyUsA1, CreativeAgencyFunfact, Advantages, FAQA1} from './components/index';
import '../aboutcomponents/ourStory.css';
import '@/assets/css/textAnimations.css';


function CustomWebsiteDdevelopment() {
    // Use the AOS hook
    useAOS();
    return (
        <div>
            <BreadcurmbData />
            <CreativeAgencyFunfact num1={0} num2={4}/>
           
        </div>
    )
}

export default CustomWebsiteDdevelopment;