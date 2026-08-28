'use client';
import React from 'react'
import BreadcurmbData from '@/components/breadcrum/sections/breadcrumbdata'
import { useAOS } from '@/components/hooks/useAOS';
import {DynamicWebsiteSolutions, WhyUsA1, CreativeAgencyFunfact, Advantages, FAQA1} from './components/index'
import '../aboutcomponents/ourStory.css';
import '@/assets/css/textAnimations.css';
import image from "@/assets/images/webdev/Image.jpg";


function DynamicWebsiteDevelopment() {
    // Use the AOS hook
    useAOS();
    return (
        <div>
            <BreadcurmbData />
            <CreativeAgencyFunfact />
            <section className="yul-st">
                <section className="about-blue-section second-blue-section">
                    <div className="container-fulid">
                        <div className="row align-items-center">
                            <div className="col-lg-5 order-lg-2 mb-4 mb-lg-0">
                                <div
                                    className="about-img-wrap"
                                    data-aos="image-zoom"
                                    data-aos-delay="100"
                                    
                                >
                                    <img
                                        src={image.src}
                                        alt="Digital growth and web analytics strategies"
                                        className="about-small-img"
                                        
                                    />
                                </div>
                            </div>

                            <div className="col-lg-7 order-lg-1">
                                <div className="about-content-side">
                                    <span className="px-section-subtitle text-white our-development pt-40">
                                        We Are Creative Agency
                                    </span>

                                    <h4
                                        className="px-about-title"
                                        data-aos="text-reveal-flip"
                                        data-aos-delay="200"
                                    >
                                        <span className="text-white">Content Management Systems (CMS)  Dynamic Web Designing </span>
                                    </h4>

                                    <p
                                        className="text-figtree"
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                    >
                                        Dynamic websites commonly make use of content management system (CMS) platforms such as WordPress, Joomla, or Drupal to conveniently handle and update their content. CMS empowers website owners to effortlessly add, modify, or delete content without the need for coding expertise. Dynamic websites store various types of information, such as content and user data, in databases.
                                    </p>

                                    <p
                                        className="text-figtree mb-0"
                                        data-aos="fade-up"
                                        data-aos-delay="400"
                                    >
                                        These websites utilize server-side scripting to fetch data from databases and create web pages in real-time according to user interactions. Popular databases employed in dynamic websites are MySQL, PostgreSQL, and MongoDB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <DynamicWebsiteSolutions />
            <Advantages />
            <WhyUsA1/>
            <FAQA1 num1={0} num2={5}
        highlightedText="Frequently Asked " 
        titleSuffix="Questions"
            />
        </div>
    )
}

export default DynamicWebsiteDevelopment