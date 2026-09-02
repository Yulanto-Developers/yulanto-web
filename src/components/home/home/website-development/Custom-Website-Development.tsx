'use client';
import React from 'react'
import BreadcurmbData from '@/components/breadcrum/sections/breadcrumbdata'
import { useAOS } from '@/components/hooks/useAOS';
import '../aboutcomponents/ourStory.css';
import '@/assets/css/textAnimations.css';
import './components/dynamicwebdesign.css';
// import CustomWebsiteDevelopmentSec1 from './components/CustomWebsiteDevelopmentSec1';
import WhyC1 from './components/WhyC1';
import Cardsixdesg1 from './components/Cardsixdesg1';
import FAQA1 from './components/FAQA1';
import CardTwoDes from './components/CardTwoDes';
import WhatWeDeliver from './components/WhatWeDeliver';
import { DynamicWebsiteSolutions } from './components';
import ContentImage from './components/ContentImage'
import SeoCoverflowSection, { CoverflowSlide } from "@/components/offpageseo/header";
import CreativeAgencyFunfact from './components/CreativeAgencyFunfact';

const seoTopText = `Looking for a reliable website development company in Chennai to build a website that truly represents your brand? At Yulanto Web Creations, we create secure, responsive, scalable, and custom-built websites designed around your business objectives.`;

const seoBottomText = `As an experienced website development company in Chennai, we combine creative design, modern technologies, intuitive navigation, and search-engine-friendly development to deliver websites that provide an engaging experience across desktops, tablets, and mobile devices.

Our team of professional website developers in Chennai develops websites from the ground up based on your business requirements rather than relying entirely on generic templates. From corporate websites and business portals to customized web applications and eCommerce platforms, we create digital solutions tailored to your goals.`;


// Dynamic Data Definition
const seoSlides: CoverflowSlide[] = [
    { src: "/assets/images/website-development/custom-website-development/top-1.jpg", alt: "Off-Page Link Building Strategy" },
    { src: "/assets/images/website-development/custom-website-development/top-2.jpg", alt: "Local Citation & Directory Submission" },
    { src: "/assets/images/website-development/custom-website-development/top-3.jpg", alt: "Content Marketing & Guest Posting" },
    { src: "/assets/images/website-development/custom-website-development/top-4.jpg", alt: "Brand Mention & Authority Building" },
    { src: "/assets/images/website-development/custom-website-development/top-5.jpg", alt: "Social Signals & Digital PR" },
];
function CustomWebsiteDdevelopment() {
    // Use the AOS hook
    useAOS();
    return (
        <div>
            <BreadcurmbData />
            <SeoCoverflowSection
                subtitle="Website Development Company in Chennai"
                titlePrefix="Secure, Custom-Built Websites Designed "
                titleSuffix="Around Your Business"
                topDescription={seoTopText}
                bottomDescription={seoBottomText}
                slides={seoSlides}
                autoScrollSpeed={1200}
                className="akone"
            />
            <CreativeAgencyFunfact num1={4} num2={8} titleFirst="Custom " titleHighlight="Website" titleSecond="" className="aktwo" />
            {/* <CustomWebsiteDevelopmentSec1 /> */}
            <WhyC1 />
            <Cardsixdesg1 />
            <CardTwoDes />
            <WhatWeDeliver />
            <DynamicWebsiteSolutions />
            <FAQA1 num1={15} num2={22}
                highlightedText="Frequently Asked Questions"
                titleSuffix="" />
            {/* <ContentImage /> */}
            <ContentImage
                subtitle="Build a Website That Works for Your Business"
                titlefirst="Choose a Professional Website Development "
                titlesecond="Company in Chennai"
                paragraphs={[
                    "Your website is more than an online brochure—it is an important part of your brand, marketing, customer communication, and business growth.",
                    "Partner with a professional website development company in Chennai to build a website that combines attractive design, reliable technology, strong performance, security, responsive usability, and SEO-friendly development.",
                    "Whether you are launching a new business website, upgrading an existing website, or developing a completely customized web solution, our experienced website developers in Chennai can help turn your ideas into a professional digital experience."
                ]}
                quoteText="Looking for website development in Chennai? Let us create a secure, customized, and business-focused website designed for your growth."
                quoteAccentColor="#053456"
                imageSrc="/assets/images/website-development/custom-website-development/last-img.jpg"
                imageAlt="Website Development Company in Chennai"
            />
        </div>
    )
}

export default CustomWebsiteDdevelopment;