import AnimatedCounter from "@/components/shared/MetricsCounter/AnimatedCounter";

const stats = [
    {
        id: 1,
        value: 120,
        label: "Increase in conversions",
    },
    {
        id: 2,
        value: 140,
        label: "Increase in website traffic",
    },
    {
        id: 3,
        value: 80,
        label: "Average daily signups",
    },
    {
        id: 4,
        value: 130,
        label: "Increase in conversions",
    },
];

const StatCard = ({ value, label }: { value: number, label: string }) => (
    <div className="px-pd-4-work-item mb-30">
        <h3 className="px-pd-4-work-item-title">
            <AnimatedCounter min={0} max={value} />
            %
        </h3>

        <div className="px-pd-4-work-item-text">
            <span>{label}</span>
        </div>
    </div>
);

const ArrowIcon = () => (
    <svg
        width="81"
        height="9"
        viewBox="0 0 81 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect y="4" width="80" height="1" fill="#1E1E1E" />
        <path
            d="M77 7.96366L80.5 4.48183L77 1"
            stroke="#1E1E1E"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const PortfolioDetailsWorkReview = () => {
    return (
        <section className="px-pd-4-work-ptb px-pd-style pb-130">
            <div className="container container-1230">
                {/* Top Section */}
                <div className="px-pd-4-work-top pb-70">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="px-pd-4-work-heading pb-60">
                                <h2 className="px-pd-4-work-title">Work Overview</h2>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="px-pd-4-work-heading">
                                <span className="px-pd-4-about-title">
                                    OUR <br /> APPROACH <ArrowIcon />
                                </span>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="px-pd-4-work-content pl-20">
                                <p>
                                    Our journey has been marked by countless successful
                                    projects that not only achieved but surpassed our
                                    clients&apos; goals, reinforcing their trust in us as a
                                    leading innovator in the digital industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="row">
                    {stats.map((stat) => (
                        <div className="col-lg-6" key={stat.id}>
                            <StatCard value={stat.value} label={stat.label} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioDetailsWorkReview;