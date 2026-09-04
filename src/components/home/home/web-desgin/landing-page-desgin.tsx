'use client'
import BreadcurmbData from '@/components/breadcrum/sections/breadcrumbdata';
import React from 'react'
import { useQuoteModal } from "../myComponents/Content/QuoteContext";
import { useAOS } from "@/components/hooks/useAOS";
import IntroContent from '../myComponents/common/IntroContent';
import { PhotoGallery } from './gallery';
import {
    startupGalleryImages,
    galleryImages,
    landinglist,
    processCards,
    welcomePageBenefits,
    landingUiFeatures,
    posterIndustries,
    wayDate, landingPageBenefits, landingSalesPitch
} from './data/landingData';
import LandingUiFeatures from '../myComponents/common/LandingUiFeatures';
import PackagingProcessSection from '../myComponents/common/WayCard';
import ScrollCard from '../myComponents/common/scroll-card';
import { Floatstyle } from '../myComponents/common/Floatstyle';
import { FAQA1 } from '../website-development/components';

function Landingpagedesgin() {
    const { openModal } = useQuoteModal();
    useAOS();
    return (
        <div>
            <BreadcurmbData />
            <IntroContent
                leftTitle="Conversion-Focused Landing Page Design"
                rightTitle1="High-Converting Landing Pages "
                rightTitle2="Designed to Turn Visitors into Customers "
                description="Looking for professional landing page design services in Chennai? We create visually engaging, mobile-friendly and conversion-focused landing pages that help businesses generate leads, promote products, launch campaigns and increase enquiries.                Our website landing page design combines attractive UI, clear messaging, compelling call-to-action elements and a seamless user experience. Whether you need a campaign landing page, product page, lead-generation page or welcome page design, we build pages that are designed around your business goals."
            />
            <PhotoGallery images={startupGalleryImages} />
            <div data-aos="fade-right"
                data-aos-delay={400}
                data-aos-once={true}>
                <div className='container'>
                    <div className="row">
                        <div className="col-12">
                            <p className='text-center'>
                                From First Click to Final Conversion — We Design Landing Pages That Make an Impact.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right"
                data-aos-delay={400}
                data-aos-once={true}>
                <div className='container mt-30 mb-20'>
                    <div className="row">

                        <div className="col-12 mb-4">
                            <span className="tp-section-subtitle text-black blink-ball">
                                Professional Web Design
                            </span>

                            <h4 className="px-about-title mb-20">
                                <span className="text-blue-about">
                                    Professional Excellence{" "}
                                </span>
                                Best Web Designers in Chennai
                            </h4>

                        </div>

                        <div className="col-md-7">
                            <p>
                                A landing page is more than just a single webpage. It is a focused
                                digital experience created to guide visitors toward a specific action
                                — submitting an enquiry, making a purchase, booking a consultation,
                                downloading a resource or signing up for a service.

                                As a landing page design company in Chennai, we create customized
                                landing pages that combine attractive design with strategic content
                                and user-friendly navigation.
                            </p>

                            <div className="landing-list mt-25">
                                <div className="row">
                                    {landinglist.map((item, index) => {
                                        const Icon = item.icon;

                                        return (
                                            <div className="col-md-6 mb-15" key={index}>
                                                <div className="landing-list-item">
                                                    <div className="landing-list-icon">
                                                        <Icon />
                                                    </div>

                                                    <span className='text-figtree text-black'>{item.title}</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <div className="corporate-gallery">
                                {galleryImages.map((image, index) => (
                                    <div key={index} className={image.className}>
                                        <img src={image.src} alt={image.alt} />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div
                data-aos="fade-right"
                data-aos-delay={400}
                data-aos-once={true}
                className="landing-process-main-section"
                style={{ background: '#053456' }}
            >
                <div className="container pt-30">

                    <div className="row">

                        <div className="col-12 mb-4">

                            <span className="tp-section-subtitle text-white blink-ball">
                                Engage Visitors and Drive Conversions
                            </span>

                            <h4 className="px-about-title mb-20 text-white">

                                <span className="text-blue-about text-white">
                                    Creative Website Landing Page{" "}
                                </span>

                                Design for Your Business

                            </h4>

                            <p className="text-white">
                                Your landing page is often the first interaction a
                                potential customer has with your brand. We make that
                                first impression count.
                                <br />
                                Our website landing page design focuses on presenting
                                your offer clearly while keeping visitors engaged. From
                                the headline and visual hierarchy to forms and CTAs,
                                every element is planned to support your conversion goal.
                            </p>

                        </div>

                    </div>

                </div>

                {/* Scroll cards OUTSIDE Bootstrap row */}
                <ScrollCard
                    cardsData={processCards}
                    sectionTitle={
                        <>
                            <span className="scroll-process-small-title">
                                Our Approach
                            </span>

                            <h2 className='text-tenor'>
                                Turn Visitors into
                                <br />
                                <span>High-Converting Leads</span>
                            </h2>
                        </>
                    }
                />

            </div>
            <div data-aos="fade-right"
                data-aos-delay={400}
                data-aos-once={true}>
                <div className="container mt-80 mb-60">
                    <div className="row">
                        <div className="col-12">
                            <span className="tp-section-subtitle blink-ball">
                                Engaging Welcome Page Solutions
                            </span>

                            <h4 className="px-about-title mb-20">

                                <span className="text-blue-about">
                                    Welcome Page Design That {" "}
                                </span>
                                Creates a Strong First Impression
                            </h4>
                            <p>Need an attractive welcome page design for your website, campaign or business? We create customized welcome pages that introduce your brand, communicate your key message and guide visitors to the next step.</p>
                        </div>
                        <div className="col-12">
                            <h5 className="welcome-benefits-title text-figtree">
                                A well-designed welcome page can help:
                            </h5>

                            <div className="row g-4 mt-10">
                                {welcomePageBenefits.map((item, index) => (
                                    <div
                                        className="col-lg-4 col-md-6"
                                        key={item.id}
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                        data-aos-once={true}
                                    >
                                        <div className="welcome-benefit-card">

                                            <span className="welcome-benefit-number">
                                                {String(item.id).padStart(2, "0")}
                                            </span>

                                            <h3 className='text-tenor'>
                                                {item.title}
                                            </h3>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div
                data-aos="fade-right"
                data-aos-delay={400}
                data-aos-once={true}
            >
                <div className="container mt-50 mb-50">
                    <div className="row">
                        <div className="col-12 mb-2">
                            <span className="tp-section-subtitle text-black blink-ball">
                                User-Centric Landing Page UI Design
                            </span>

                            <h4 className="px-about-title mb-20">
                                <span className="text-blue-about">
                                    Landing Page UI Designed{" "}
                                </span>
                                for Better User Experience
                            </h4>
                            <p className="text-slate-600 max-w-2xl">
                                Great landing page UI should look attractive while remaining simple and easy to use.
                                Our landing page UI design focuses on driving maximum engagement and conversions.
                            </p>
                        </div>
                    </div>

                    {/* Feature Grid Component */}
                    <LandingUiFeatures features={landingUiFeatures} />
                </div>
            </div>

            <div data-aos="fade-down"
                data-aos-delay={400}
                data-aos-once={true}>
                <div className="container  mb-50">
                    <div className="row">
                        <div className="col-12">
                            <span className="tp-section-subtitle blink-ball">
                                Marketing-Focused Landing Page Design
                            </span>

                            <h4 className="px-about-title mb-20">

                                <span className="text-blue-about">
                                    Landing Pages Built  {" "}
                                </span>
                                for Marketing Campaigns
                            </h4>
                            <p>Running Google Ads, social media campaigns or a product promotion? A dedicated landing page can provide a focused destination for your advertising traffic. <br /> Instead of sending campaign visitors to a general website page, we create a dedicated landing page that matches your campaign message and encourages visitors to take the desired action.</p>
                        </div>
                        <Floatstyle
                            title="Our landing pages can be designed for"
                            subtitle=""
                            industries={posterIndustries}
                        />
                    </div>
                </div>
            </div>
            <div data-aos="fade-down"
                data-aos-delay={400}
                data-aos-once={true}>
                <div className="container mt-50 mb-50">
                    <div className="row">
                        <div className="col-12">
                            <span className="tp-section-subtitle blink-ball">
                                Built for Better Conversions
                            </span>

                            <h4 className="px-about-title mb-20">

                                <span className="text-blue-about">
                                    Why Choose Our Landing Page   {" "}
                                </span>
                                Design Services in Chennai?
                            </h4>
                            <p>We combine creative design with business-focused strategy to create landing pages that are attractive, functional and easy to use.</p>
                        </div>
                        <PackagingProcessSection
                            stepsData={wayDate}
                        />
                    </div>
                </div>
            </div>
            <div data-aos="fade-down"
                data-aos-delay={400}
                data-aos-once={true}
            >
                <div className="container mt-50 mb-50">

                    <div className="row">

                        <div className="col-12">

                            <span className="tp-section-subtitle blink-ball">
                                Key Benefits of Professional Landing Pages
                            </span>

                            <h4 className="px-about-title mb-20">
                                <span className="text-blue-about">
                                    Benefits of a Professionally{" "}
                                </span>
                                Designed Landing Page
                            </h4>

                            <p>
                                We combine creative design with business-focused strategy
                                to create landing pages that are attractive, functional
                                and easy to use.
                            </p>

                        </div>

                        <div className="col-12">

                            <div className="row g-4 mt-20">

                                {landingPageBenefits.map((item, index) => (
                                    <div
                                        className="col-lg-3 col-md-6"
                                        key={item.id}
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                        data-aos-once={true}
                                    >
                                        <div className="landing-page-benefit-card">

                                            <span className="landing-page-benefit-number">
                                                {String(item.id).padStart(2, "0")}
                                            </span>

                                            <h3 className='text-tenor'>
                                                {item.title}
                                            </h3>

                                            <span className="landing-page-benefit-arrow">
                                                →
                                            </span>

                                        </div>
                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                </div>
            </div>
            <div data-aos="fade-up"
                data-aos-delay={400}
                data-aos-once={true}
            >
                <div className="container mt-80 mb-80">

                    <div className="row">

                        <div className="col-12 text-center mb-40">

                            <span className="tp-section-subtitle blink-ball">
                                Your Landing Page Is Your Digital Sales Pitch
                            </span>

                            <h4 className="px-about-title mb-20">
                                <span className="text-blue-about">
                                    Your Landing Page{" "}
                                </span>
                                Is Your Digital Sales Pitch
                            </h4>

                            <p>
                                A good landing page should answer three important
                                questions quickly:
                            </p>

                        </div>

                        {landingSalesPitch.map((item, index) => (
                            <div
                                className="col-lg-4 col-md-6 mb-4"
                                key={item.id}
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                                data-aos-once={true}
                            >
                                <div className="sales-pitch-card">

                                    <div className="sales-pitch-number">
                                        0{item.id}
                                    </div>

                                    <h3>
                                        {item.question}
                                    </h3>

                                    <p>
                                        {item.description}
                                    </p>

                                </div>
                            </div>
                        ))}

                        <div className="col-12 mt-30">

                            <p className="text-center">
                                We bring these elements together to create a landing
                                page that communicates your message and encourages
                                visitors to take the next step.
                            </p>

                        </div>

                    </div>

                </div>
            </div>


            {/* CTA SECTION */}

            <div
                className="landing-cta-section"
                data-aos="fade-up"
                data-aos-once={true}
            >
                <div className="container">

                    <div className="row align-items-center">

                        {/* LEFT - IMAGE */}
                        <div className="col-lg-5 mb-4 mb-lg-0">

                            <div className="corporate-gallery">
                                {galleryImages.map((image, index) => (
                                    <div key={index} className={image.className}>
                                        <img src={image.src} alt={image.alt} />
                                    </div>
                                ))}
                            </div>

                        </div>


                        {/* RIGHT - CONTENT */}
                        <div className="col-lg-7">

                            <div className="landing-cta-content">

                                <span className="tp-section-subtitle blink-ball text-white">
                                    Get a Professional Landing Page Designed in Chennai
                                </span>

                                <h4 className="px-about-title mb-20 text-tenor text-white">
                                    <span className="text-blue-about text-white">
                                        Get a Professional Landing Page{" "}
                                    </span>
                                    Designed in Chennai
                                </h4>

                                <p>
                                    Ready to create a landing page that supports your
                                    marketing and business goals?
                                </p>

                                <p>
                                    Our <strong>landing page design services in Chennai</strong>
                                    are designed to help businesses create professional,
                                    responsive and conversion-focused web experiences.
                                </p>

                                <p>
                                    Whether you need a <strong>landing page design,
                                        website landing page design, welcome page design or
                                        landing page UI</strong>, we can create a customized
                                    solution that fits your brand and campaign.
                                </p>


                                {/* LANDING LIST */}
                                {/* <div className="landing-list mt-25">
                                    <div className="row">

                                        {landinglist.map((item, index) => {

                                            const Icon = item.icon;

                                            return (
                                                <div
                                                    className="col-md-6 mb-15"
                                                    key={index}
                                                >
                                                    <div className="landing-list-item">

                                                        <div className="landing-list-icon">
                                                            <Icon />
                                                        </div>

                                                        <span className="text-figtree">
                                                            {item.title}
                                                        </span>

                                                    </div>
                                                </div>
                                            );

                                        })}

                                    </div>
                                </div> */}


                                <h3>
                                    Let's Create a Landing Page That Turns Clicks into Customers.
                                </h3>

                                <button onClick={openModal}
                                    className="landing-cta-button"
                                >
                                    Get in Touch With Us Today
                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
            <div data-aos="fade-down"
                data-aos-delay={400}
                data-aos-once={true}
            >
                <div className="container mt-50 mb-50">

                    <div className="row">

                        <div className="col-12">

                            <span className="tp-section-subtitle blink-ball">
                                FAQs
                            </span>

                            <h4 className="px-about-title mb-20">
                                <span className="text-blue-about">
                                    Landing Page {" "}
                                </span>
                                Design
                            </h4>
                            <FAQA1 num1={32} num2={42} highlightedText="Frequently Asked Questions"
                                titleSuffix="" />


                        </div>



                    </div>

                </div>
            </div>







        </div>
    )
}

export default Landingpagedesgin;
//  data-aos="fade-right"
//         data-aos-delay={400}
//         data-aos-once={true}