"use client";
import StartupAgencyServiceItem from "../../startup-agency/components/StartupAgencyServiceItem";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import { servicesData } from "@/data/services-data";
import { SmartLink } from "@/components/common";

const MinimalPortfolioService = () => {
    // display service data
    const displayServiceItem = servicesData.slice(0, 4);

    // Check if current route is a dark-themed page 
    const isDarkThme = useIsDarkRoute();
    const serviceClasses = {
        // Dynamically set background color based on theme
        sectionBg: isDarkThme ? "#1d1d1f" : "#000"
    }

    return (
        <div className="bf-service-area pt-155 pb-160" style={{ backgroundColor: serviceClasses.sectionBg }}>
            <div className="container container-1350">
                <div className="bf-service-title-wrap mb-45">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="bf-service-subtitle-box mb-40">
                                <h2 className="bf-section-title fs-75 text-white">Let&apos;s create a brand that do defies Gravity</h2>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="bf-service-title-box pt-200 mb-40">
                                <p className="bf-service-dec mb-45">We transform complex digital challenges into elegant, functional solutions
                                    by prioritizing clarity and purpose. Exceptional digital experiences start
                                    with understanding your unique business</p>
                                <SmartLink href="/service-1" className="tp-btn tp-btn-xl bf-btn-white-border d-inline-flex align-items-center">
                                    <span>
                                        <span className="text-1">View all Services</span>
                                        <span className="text-2">View all Services</span>
                                    </span>
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bf-service-accordion-wrap">
                    <div className="bf-accordion accordion" id="accordionExample">
                        {displayServiceItem.map((service, index) => (
                            <StartupAgencyServiceItem key={service.id} {...service} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MinimalPortfolioService;