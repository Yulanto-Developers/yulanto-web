import { services } from "@/data/site-data";

const Service = () => {
    return (
        <div
            className="px-service-area px-service-3-style pt-120 z-index-1"
            style={{ backgroundColor: "#000000" }}
        >
            <div className="container container-1750">
                {/* Title */}
                <div className="row">
                    <div className="col-xl-12">
                        <div
                            className="px-service-text text-center mb-50 px-fade-anim"
                            data-delay=".3"
                        >
                            <h2 className="px-about-3-bigtext text-white">
                                Our Services
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="row align-items-start">
                    {/* Video */}
                    <div className="col-xl-6 d-none d-xl-block">
                        <div className="px-service-3-video">
                            <video width={650} loop muted autoPlay playsInline>
                                <source
                                    src="https://html.aqlova.com/videos/pixora/service-video.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                    </div>

                    {/* Accordion */}
                    <div className="col-xl-6">
                        <div className="px-service-accordion-wrap">
                            <div className="accordion" id="accordionExample1">
                                {services.map((service, index) => {
                                    const collapseId = `collapse${service.id}`;
                                    const headingId = `heading${service.id}`;
                                    const isFirst = index === 0;

                                    return (
                                        <div key={service.id} className="accordion-items">
                                            <h2 className="accordion-header" id={headingId}>
                                                <button
                                                    className={`accordion-buttons ${!isFirst ? "collapsed" : ""
                                                        }`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#${collapseId}`}
                                                    aria-expanded={isFirst}
                                                    aria-controls={collapseId}
                                                >
                                                    <i>
                                                        <service.Icon />
                                                    </i>
                                                    {service.title}
                                                    <span className="accordion-icon"></span>
                                                </button>
                                            </h2>

                                            <div
                                                id={collapseId}
                                                className={`accordion-collapse collapse ${isFirst ? "show" : ""
                                                    }`}
                                                data-bs-parent="#accordionExample1"
                                            >
                                                <div className="accordion-body">
                                                    <p>{service.description}</p>

                                                    <div className="px-service-accordion-category">
                                                        {service.categories.map((cat) => (
                                                            <span key={`${service.id}-${cat}`}>{cat}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;