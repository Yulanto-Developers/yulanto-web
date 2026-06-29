import AboutServiceItem from "../components/AboutServiceItem";

const services = [
    {
        id: "01",
        title: "Design",
        desc: "Delivering strong, user-friendly designs exclusively paired with development.",
    },
    {
        id: "02",
        title: "Development",
        desc: "Delivering strong, user-friendly designs exclusively paired with development.",
    },
    {
        id: "03",
        title: "Digital advice",
        desc: "Delivering strong, user-friendly designs exclusively paired with development.",
    },
    {
        id: "04",
        title: "Branding",
        desc: "Delivering strong, user-friendly designs exclusively paired with development.",
    },
];

const AboutUsService = () => {
    return (
        <div className="aus-service-area pt-80 px-fade-anim">
            <div className="container container-1550">
                <div className="row">

                    {/* Left Title */}
                    <div className="col-lg-4">
                        <div className="aus-service-subtitle-box">
                            <span className="px-section-subtitle">OUR SOLUTIONS</span>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="col-lg-8">
                        <div className="aus-service-content-wrap">

                            {/* Header Row */}
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="aus-service-content">
                                        <label className="pl-20">Services</label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="aus-service-content">
                                        <label>Info</label>
                                    </div>
                                </div>
                            </div>

                            {/* Service Items */}
                            {services.map((item) => (
                                <AboutServiceItem key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsService;