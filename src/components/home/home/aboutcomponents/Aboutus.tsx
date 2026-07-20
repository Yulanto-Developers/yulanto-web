"use client";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import Image from "next/image";

const MinimalPortfolioAbout = () => {
    // Check if current route is a dark-themed page 
    const isDarkTheme = useIsDarkRoute();
    const aboutClasses = {
        // Dynamically set background color based on theme
        sectionBg: isDarkTheme ? "#000" : "#f8f8f9",
    }
    
    return (
        <div className="bf-about-area pt-60 pb-60" style={{ backgroundColor: aboutClasses.sectionBg }}>
            <div className="container container-1350">
                <div className="row">
                    
                    <div className="col-lg-7">
                        <div className="bf-about-title-wrap">
                            <h2 className="bf-section-title reveal-text mb-50">COMPANY OVERVIEW</h2>
                        </div>
                        <div className="bf-about-video">
                            <video loop muted autoPlay playsInline>
                                <source src="https://html.aqlova.com/videos/bfolio/about-video.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="bf-about-content">
                             <h3 className="bf-section-title reveal-text mb-3">
                                About Yulanto</h3>
                            <p className="bf-about-dec mb-3">a comprehensive web design company that provides a wide range of website solutions. Yulanto web creations is a reputable web design company based in Chennai, known for its professionalism, uniqueness, and exceptional creativity since 2015.</p>
                            <p className="bf-about-dec mb-3">Our team of experts specializes in various areas including web design, web development, ecommerce websites, logo design, custom development, SEO, and SMM.</p>
                            <div className="row gx-20">
                                <div className="col-lg-6 col-md-6">
                                    <div className="bf-about-thumb mb-20">
                                        <Image className="w-100 img-fluid" width={259} height={269} src="/assets/img/update/about/thumb.jpg" alt="About image" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="bf-about-thumb mb-20">
                                        <Image className="w-100 img-fluid" width={259} height={269} src="/assets/img/update/about/thumb-2.jpg" alt="About image 2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MinimalPortfolioAbout;

