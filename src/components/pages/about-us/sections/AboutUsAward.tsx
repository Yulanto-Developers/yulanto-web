import { AwardList } from "@/components/shared/components";
import { awardData } from "@/data/award-data";

const AboutUsAward = () => {
    // Get top 4 awards for display
    const awardItems = awardData.slice(0, 4);

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
                    {awardItems.map((award) => (
                        <AwardList key={award.id} {...award} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUsAward;