import DigitalStudioServiceItem from "../components/DigitalStudioServiceItem";
import { servicesData } from "@/data/services-data";

const DigitalStudioService = () => {
    //service item
    const serviceItems = servicesData.slice(8, 13);

    return (
        <div
            className="bf-service-area bf-service-3-rounded pt-30 pb-50"
            style={{ backgroundColor: "#053456" }}
        >
            <div className="container container-1320">
                {/* <div
                    className="bf-service-heading mb-10 tp_fade_anim"
                    data-delay=".3"
                >
                    <span className="tp-section-subtitle text-white blink-ball">
                        Services We Offer
                    </span>
                </div> */}
                <div className="row">

                    <div className="col-lg-12">
                        <div className="bf-service-heading mb-60">
                            <h3
                                className="bf-section-title-3 text-white mb-20 tp_fade_anim"
                                data-delay=".3"
                            >
                                Empowering businesses with creative digital excellence.

                            </h3>
                            <div className="tp_text_anim">
                                <p className="bf-service-3-dec font-paragraph-cls" style={{ fontFamily: "var(--font-figtree) !important" }}>
                                    As a leading Web Design and Development Company in Chennai, our experienced team specializes in creating responsive, user-friendly, and high-performing websites tailored to your business needs. Our innovative digital solutions help businesses build a strong online presence, improve search engine visibility, generate quality leads, and achieve long-term business growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {serviceItems.map((service) => (
                <DigitalStudioServiceItem {...service} key={service.id} />
            ))}
        </div>
    );
};

export default DigitalStudioService;