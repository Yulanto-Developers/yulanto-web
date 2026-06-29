import DigitalStudioServiceItem from "../components/DigitalStudioServiceItem";
import { servicesData } from "@/data/services-data";

const DigitalStudioService = () => {
    //service item
    const serviceItems = servicesData.slice(8, 12);

    return (
        <div
            className="bf-service-area bf-service-3-rounded pt-150 pb-160"
            style={{ backgroundColor: "#151515" }}
        >
            <div className="container container-1320">
                <div className="row">
                    <div className="col-lg-5">
                        <div
                            className="bf-service-heading mb-60 tp_fade_anim"
                            data-delay=".3"
                        >
                            <span className="tp-section-subtitle text-white">
                                OUR SERVICES
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="bf-service-heading mb-60">
                            <h3
                                className="bf-section-title-3 text-white mb-20 tp_fade_anim"
                                data-delay=".3"
                            >
                                Service we&apos;re
                                <br /> always provides
                            </h3>
                            <div className="tp_text_anim">
                                <p className="bf-service-3-dec">
                                    Pixora power of our 8+ years of experience. We build excellence
                                    works. <br />
                                    That will help you to grow your business products.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {serviceItems.map((service) => (
                    <DigitalStudioServiceItem {...service} key={service.id} />
                ))}
            </div>
        </div>
    );
};

export default DigitalStudioService;