"use client";
import { SERVICE_CAPSULE_ITEMS } from "@/data/service-capsule-data";
import { useThrowable } from "@/hooks/useThrowable";

const CreativeAgencyCapsule = () => {
    const sceneRef = useThrowable({ scrollGravity: false });

    return (
        <div className="px-capsule-area">
            <div className="container container-1550">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="px-capsule-inner p-relative">
                            <div
                                className="px-capsule-top-wrapper p-relative"
                                data-px-throwable-scene="true" ref={sceneRef}
                            >
                                <div className="px-capsule-title-wrapper mb-70">
                                    {/* <span className="px-capsule-subtitle">
                                        Digital Services
                                    </span> */}

                                    <h3 className="px-capsule-title">
                                        Our <br /> <span style={{ color: '#053456' }}>Technologies</span>
                                    </h3>
                                    <p>We use modern and reliable web technologies to create responsive, secure, scalable, and SEO-friendly websites. Depending on your business requirements, our website development solutions can be built using technologies and platforms such as</p>
                                </div>

                                <div className="px-capsule-item-wrapper">
                                    {SERVICE_CAPSULE_ITEMS.map((item) => {
                                        const IconComponent = item.icon;
                                        return (
                                            <p data-px-throwable-el="" key={item.id}>
                                                <span
                                                    className="px-capsule-item"
                                                    style={{
                                                        width: item.width,
                                                        height: item.height,
                                                        backgroundColor: item.bg,
                                                        color: "#FFFFFF",
                                                        display: "inline-flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        gap: "8px",
                                                    }}
                                                >
                                                    {IconComponent && <IconComponent className="px-capsule-icon" />}
                                                    {item.label}
                                                </span>
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* <div className="px-line-shape px-line-bg-black m-2-top">
                            {[...Array(5)].map((_, index) => (
                                 <span key={`line-${index}`}></span>
                            ))}
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreativeAgencyCapsule;