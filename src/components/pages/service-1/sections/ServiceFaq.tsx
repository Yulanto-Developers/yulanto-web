"use client";
import { useState } from "react";
import ServiceFaqItem from "../components/ServiceFaqItem";

const FAQ_ITEMS = [
    {
        id: 1,
        title: "How long does it take to build a website?",
    },
    {
        id: 2,
        title: "Website Development Timeline: What to Expect",
    },
    {
        id: 3,
        title: "How Should Building a Website Really Take?",
    },
    {
        id: 4,
        title: "The Time It Takes to Build a Website?",
    },
];

const FAQ_DESCRIPTION =
    "Timelines depend on the spec of the website project, but here are some guidelines...";

const FAQ_LIST = [
    "Shopify projects usually take around four weeks.",
    "Craft CMS projects usually take a minimum of five weeks.",
    "Craft Commerce projects usually take a minimum of eight weeks.",
];

const ServiceFaq = () => {
    const [activeId, setActiveId] = useState<number>(1);
    return (
        <div className="px-inner-service-2-faq-ptb pt-190 pb-140">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-5">
                        <div className="px-inner-service-2-heading mb-40">
                            <span className="px-capsule-subtitle">
                                Digital Services
                            </span>

                            <h3 className="px-section-title ff-thunder fs-100 mb-30">
                                The answers <br /> to your questions.
                            </h3>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-7">
                        <div className="px-inner-service-2-faq">
                            <div className="px-service-accordion-wrap">
                                <div
                                    className="accordion"
                                    id="serviceFaqAccordion"
                                >
                                    {FAQ_ITEMS.map((item) => (
                                        <ServiceFaqItem
                                            key={item.id}
                                            id={item.id}
                                            title={item.title}
                                            description={FAQ_DESCRIPTION}
                                            items={FAQ_LIST}
                                            isActive={activeId === item.id}
                                            onClick={() =>
                                                setActiveId(activeId === item.id ? 0 : item.id)
                                            }
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceFaq;