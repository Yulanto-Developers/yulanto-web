
import { AwardList } from "@/components/shared/components";
import { awardData } from "@/data/award-data";
import { PlusIcon } from "@/svg";

const StartupAgencyAward = () => {
    // Get top 4 awards for display
    const awardItems = awardData.slice(0, 4);

    return (
        <section className="px-award-area pb-130">
            <div className="container">
                {/* Title Section */}
                <div className="px-award-title-wrap mb-45">
                    <div className="row">
                        <div className="col-xl-3">
                            <div className="px-award-subtitle-box">
                                <span className="px-section-subtitle pt-40">
                                    <i>
                                        <PlusIcon />
                                    </i>
                                    Our Projects
                                </span>
                            </div>
                        </div>

                        <div className="col-xl-9">
                            <div className="px-award-content">
                                <h3 className="px-section-title mb-25 text-effect words chars splitting">
                                    Awards.
                                </h3>
                                <span>(2016-25©)</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Award List */}
                <div className="px-award-wrapper">
                    {awardItems.map((award) => (
                        <AwardList key={award.id} {...award} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StartupAgencyAward;