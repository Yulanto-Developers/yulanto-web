const services = [
    "UX/UI Design",
    "App Design",
    "Brand Development",
    "Copywriting",
    "Front-end Development",
    "Shopify Development",
];

const PortfolioDetailsAbout = () => {
    return (
        <section className="px-pd-4-about-ptb px-pd-style pt-160 pb-140">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-5">
                        <div
                            className="px-pd-4-about-heading tp_fade_anim"
                            data-delay=".3"
                        >
                            <h3 className="px-pd-4-about-sub">About Project</h3>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="px-portfolio-details-4-about-content">
                            <h3 className="px-pd-4-about-text">
                                From 2004, we have earned more than thirty awards,
                                delivering high-quality results and ensuring every
                                project meets the highest standards.
                            </h3>

                            <div className="px-pd-4-about-list">
                                <ul>
                                    {services.map((service, index) => (
                                        <li key={`${service}-${index}`}>{service}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioDetailsAbout;