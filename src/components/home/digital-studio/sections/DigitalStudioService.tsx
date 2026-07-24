import DigitalStudioServiceItem from "../components/DigitalStudioServiceItem";
import { servicesData } from "@/data/services-data";

const DigitalStudioService = () => {
    //service item
    const serviceItems = servicesData.slice(8, 12);

    return (
        <div
            className="bf-service-area bf-service-3-rounded pt-30 pb-50"
            style={{ backgroundColor: "#053456" }}
        >
            <div className="container container-1320">
                <div
                    className="bf-service-heading mb-10 tp_fade_anim"
                    data-delay=".3"
                >
                    <span className="tp-section-subtitle text-white blink-ball">
                        Services We Offer
                    </span>
                </div>
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
                                    Our dedicated team of web designers in Chennai specializes in website design, web development, eCommerce website development, logo design, custom web development, SEO, and social media marketing (SMM). We deliver innovative, high-quality digital solutions that help businesses build a strong online presence and achieve lasting success.
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