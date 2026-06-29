"use client";
import { SERVICE_CAPSULE_ITEMS } from "@/data/service-capsule-data";
import { useThrowable } from "@/hooks/useThrowable";

const ServiceCapsule = () => {
    const sceneRef = useThrowable({ scrollGravity: false });

    return (
        <div className="px-capsule-area">
            <div className="container container-1550">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="px-capsule-inner p-relative">
                            <div className="px-capsule-top-wrapper p-relative" data-px-throwable-scene="true" ref={sceneRef}>
                                <div className="px-capsule-title-wrapper">
                                    <span className="px-capsule-subtitle">Digital Services</span>
                                    <h3 className="px-capsule-title">We can <br /> help with...</h3>
                                </div>
                                <div className="px-capsule-item-wrapper">
                                    {SERVICE_CAPSULE_ITEMS.map((item) => (
                                        <p data-px-throwable-el="" key={item.id}>
                                            <span
                                                className="px-capsule-item"
                                                style={{ width: item.width, height: item.height, backgroundColor: item.bg }}>
                                                {item.label}
                                            </span>
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="px-line-shape px-line-bg-black m-2-top">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCapsule;