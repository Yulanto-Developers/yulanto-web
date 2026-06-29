const steps = [
    {
        title: "01. Development",
    },
    {
        title: "02. Concept Design",
    },
    {
        title: "03. Implementation",
    },
];

const PortfolioDetailsStep = () => {
    return (
        <div className="px-pd-2-step-ptb px-pd-style pb-70">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-12">
                        <div
                            className="px-pd-2-step-heading pb-60 tp_fade_anim"
                            data-delay=".3"
                        >
                            <h3 className="px-pd-2-step-title">
                                Out of love for stylish & functional <br />
                                WP themes and for taking pride to <br />
                                support you.
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {steps.map((step) => (
                        <div className="col-lg-4 col-md-6" key={step.title}>
                            <div className="px-pd-2-step-item mb-30">
                                <h4 className="px-pd-2-step-item-title">{step.title}</h4>
                                <span>
                                    A wonderful serenity has taken possession <br />
                                    of my entire soul, like these sweet mornings <br />
                                    which I enjoy with my whole heart.
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsStep;