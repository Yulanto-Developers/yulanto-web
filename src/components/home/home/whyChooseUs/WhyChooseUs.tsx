// import StartupAgencyServiceItem from "./components/StartupAgencyServiceItem";
// import SmartLink from "@/components/common/SmartLink";
// import { servicesData } from "@/data/services-data";
// import { bgColorPropsDt } from "@/types/custom-dt";
// import { PlusIcon } from "@/svg";
// import "./whychoose.css";

// const Service: React.FC<bgColorPropsDt> = () => {
//     // display service data
//     const displayServiceItem = servicesData.slice(13, 19);

//     return (
//         <div className="px-service-area service-skew-anim py-60 z-index-2">
//             <div className="container container-1550">

//                 {/* title */}
//                 <div className="px-service-title-wrap mb-60">
//                     <div className="row">
//                         <div className="col-xl-3">
//                             <div className="px-service-subtitle-box pt-40">
//                                 <span className="px-section-subtitle ">
//                                     <i><PlusIcon strokeColor="currentcolor" /></i>
//                                     Why Choose Yulanto
//                                 </span>
//                             </div>
//                         </div>
//                         <div className="col-xl-9">
//                             <div className="px-service-title-box d-flex justify-content-between align-items-center">
//                                 <h3 className="px-section-title ft-30 text-tenor mb-0 text-effect" style={{ lineHeight: "1.2"}}>
//                                     WE CREATE MEANINGFUL WEBSITES
//                                 </h3>
//                                 <p style={{ width: "100%", maxWidth: "400px" }}>Our high-performance web solutions are designed to bring added value to your products and services, ultimately boosting your business's market share. </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* accordion */}
//             <div className="px-service-accordion-wrap">
//                 <div className="accordion" id="accordionExample">
//                     {displayServiceItem.map((service, index) => (
//                         <StartupAgencyServiceItem key={service.id} {...service} index={index} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//         </div >
//     );
// };

// export default Service;
"use client";
import StartupAgencyServiceItem from "./components/StartupAgencyServiceItem";
import { servicesData } from "@/data/services-data";
import { bgColorPropsDt } from "@/types/custom-dt";
import { PlusIcon } from "@/svg";
import "./whychoose.css";
import { useAOS } from '@/components/hooks/useAOS';

const Service: React.FC<bgColorPropsDt> = () => {
    useAOS();
    // Display service data
    const displayServiceItem = servicesData.slice(13, 19);

    return (
        <div
            className="px-service-area service-skew-anim pt-30 pb-60 z-index-2"
        >
            <div className="container container-1550">
                {/* Title */}
                <div className="px-service-title-wrap mb-40">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="px-service-subtitle-box pt-40">
                                <span className="px-section-subtitle mb-3">
                                    <i>
                                        <PlusIcon strokeColor="currentcolor" />
                                    </i>
                                    Why Choose Yulanto?
                                </span>
                            </div>

                            <div className="px-service-title-box">
                                <h3
                                    className="px-about-title ft-30 text-tenor mb-0 text-effect"
                                    style={{ lineHeight: "1.2" }}
                                >
                                    We Create{" "}
                                    <span className="text-blue-about">
                                        Meaningful Websites
                                    </span>
                                </h3>
                            </div>

                            <p className="mt-3">
                                At Yulanto, we create high-performance websites and digital
                                solutions that add real value to your products and services.
                                Our goal is to strengthen your online presence, engage your
                                audience, and support sustainable business growth.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Accordion */}
                <div className="px-service-accordion-wrap">
                    <div className="accordion" id="accordionExample">
                        {displayServiceItem.map((service, index) => (
                            <StartupAgencyServiceItem
                                key={service.id}
                                {...service}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;