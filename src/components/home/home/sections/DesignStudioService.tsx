"use client";
import { servicesData } from "@/data/services-data";
import ServiceCard from "../components/ServiceCard";
import { useState } from "react";

const Service = () => {
    // display service items
    const displayServiceData = servicesData.slice(4, 8);
    const [activeIndex, setActiveIndex] = useState(1); // default first active

    return (
        <div className="px-service-2-area pb-75">
            <div className="container container-1750">
                {/* top */}
                <div className="px-service-2-top mb-50">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-4 col-4">
                            <div className="px-service-2-subtitle-box">
                                <span className="px-section-subtitle">[ Services ]</span>
                            </div>
                        </div>

                        <div className="offset-xl-3 col-xl-6 offset-lg-3 col-lg-6 col-md-8 col-8">
                            <div className="px-service-2-wrap text-end">
                                <label>Solutions That We Deliver</label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* services */}
                <div className="px-service-2-main p-relative">
                    {displayServiceData.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            {...service}
                            index={index + 1}
                            isActive={activeIndex === index + 1}
                            onHover={() => setActiveIndex(index + 1)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;
