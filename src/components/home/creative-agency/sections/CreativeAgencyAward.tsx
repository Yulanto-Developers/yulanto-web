import Image from "next/image";

const AWARDS = [
    {
        id: "001",
        image: "/assets/img/award/award-1.png",
        title: "Best web design agency",
        org: "Web Excellence Awards",
        year: "2023",
    },
    {
        id: "002",
        image: "/assets/img/award/award-2.png",
        title: "Top digital marketing firm",
        org: "Clutch Top Agencies",
        year: "2022",
    },
    {
        id: "003",
        image: "/assets/img/award/award-3.png",
        title: "Best web design agency",
        org: "Awwwards Honorable Mention",
        year: "2024",
    },
    {
        id: "004",
        image: "/assets/img/award/award-1.png",
        title: "Best web design agency",
        org: "CSS Design Awards",
        year: "2026",
    },
];

const CreativeAgencyAward = () => {
    return (
        <div className="px-award-area px-award-inner-ptb pt-140 pb-120">
            <div className="container">

                {/* TITLE */}
                <div className="px-award-title-wrap mb-50">
                    <div className="row align-items-center">

                        <div className="col-xl-4">
                            <h3 className="px-section-subtitle">Awards</h3>
                        </div>

                        <div className="col-xl-8">
                            <h3 className="px-section-title ff-thunder fs-100">
                                Awards & <br /> recognitions.
                            </h3>
                        </div>

                    </div>
                </div>

                {/* AWARDS LIST */}
                <div className="px-award-wrapper">
                    {AWARDS.map((award) => (
                        <div key={award.id} className="px-award-item px-fade-anim">
                            <div className="row align-items-center">

                                {/* NUMBER */}
                                <div className="col-xl-3 col-lg-2 col-md-1">
                                    <div className="px-award-num">
                                        <span>({award.id})</span>
                                    </div>
                                </div>

                                {/* CATEGORY */}
                                <div className="col-xl-3 col-lg-4 col-md-5">
                                    <div className="px-award-category">
                                        <Image width={20} height={20} src={award.image} alt={award.title} />
                                        <span>{award.title}</span>
                                    </div>
                                </div>

                                {/* ORGANIZATION */}
                                <div className="col-xl-3 col-lg-4 col-md-5">
                                    <div className="px-award-nomination">
                                        <span>{award.org}</span>
                                    </div>
                                </div>

                                {/* YEAR */}
                                <div className="col-xl-3 col-lg-2 col-md-1">
                                    <div className="px-award-year text-md-end">
                                        <span>{award.year}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default CreativeAgencyAward;