'use client';
import React from 'react'
import BreadcurmbData from '@/components/breadcrum/sections/breadcrumbdata'
import { useAOS } from '@/components/hooks/useAOS';
import '../aboutcomponents/ourStory.css';
import '@/assets/css/textAnimations.css';
import './components/dynamicwebdesign.css';
import ContentImage from './components/ContentImage'
import CreativeAgencyFunfact from './components/CreativeAgencyFunfact';
import PhpDevelopmentSection from './components/PhpDevelopmentSection';
import PhpServicesSection from './components/PhpServicesSection';
import PhpLaravelSection from './components/PhpLaravelSection';
import PhpServicesSuitableFor from "./components/PhpServicesSuitableFor"
import PhpFeaturesSection from "./components/PhpFeaturesSection"
import WhyUsA1 from "./components/whycChooseDynamicList";

function CustomWebsiteDdevelopment() {
    // Use the AOS hook
    useAOS();
    return (
        <div>
            <BreadcurmbData />
            <PhpDevelopmentSection />
            <CreativeAgencyFunfact num1={8} num2={13} titleFirst="PHP " titleHighlight="Websites" titleSecond="" className="aktwo" />
            <PhpServicesSection />
            <PhpLaravelSection />
            <PhpServicesSuitableFor />
            <PhpFeaturesSection />
            <WhyUsA1
                num1={12}
                num2={22}
                titlefirst="Why Choose Our "
                titlesecond="PHP Web Development Services?"
                description="Choosing the right development partner can make a significant difference to your website's performance and long-term success. Our team combines PHP development expertise, creative design capabilities, and business understanding to deliver practical digital solutions."
            />
            <ContentImage
                            subtitle=""
                            titlefirst="Your Trusted PHP Development "
                            titlesecond="Partner in Chennai"
                            paragraphs={[
                                "Whether you need a professional business website, custom web application, eCommerce platform, or Laravel-based solution, Yulanto Web Creations provides reliable PHP web development services in Chennai tailored to your business needs.",
                                "Partner with our experienced PHP development company in Chennai to build a professional, secure, scalable, and high-performing website that supports your digital growth."
                            ]}
                            quoteText="Looking for a PHP website development company in Chennai? Let's build your next web project with the right technology, strategy, and development expertise."
                            quoteAccentColor="#053456"
                            imageSrc="/assets/images/ourstory/image-1.jpg"
                            imageAlt="Website Development Company in Chennai"
                        />
        </div>
    )
}

export default CustomWebsiteDdevelopment;