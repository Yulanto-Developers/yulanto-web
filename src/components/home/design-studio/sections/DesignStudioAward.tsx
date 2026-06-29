
import AwardItem from "../components/AwardItem";
import { awardData } from "@/data/award-data";
import { PlusIcon } from "@/svg";

const Award = () => {
    // display award items
    const displayAwardData = awardData.slice(0, 4);
 
    return (
        <div className="px-award-2-area px-award-style-2 pt-120 pb-130">
            <div className="container container-1750">
                {/* title */}
                <div className="px-award-title-wrap mb-35">
                    <div className="row align-items-end">
                        <div className="col-xl-3">
                            <div className="px-award-subtitle-box">
                                <span className="px-section-subtitle pb-120">
                                    <i>
                                        <PlusIcon />
                                    </i>
                                    Our achievements
                                </span>
                            </div>
                        </div>

                        <div className="col-xl-9">
                            <div className="px-award-content">
                                <h3 className="px-section-title ff-thunder mb-0 text-effect">
                                    Awards.
                                </h3>
                                <span>& Recognitions</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* table header */}
                <div className="px-award-wrapper">
                    <div className="row">
                        <div className="offset-xl-3 col-xl-9">
                            <div className="px-award-item px-fade-anim" data-delay=".2">
                                <div className="row">
                                    <div className="offset-xl-3 col-xl-4 offset-lg-2 col-lg-4 offset-md-1 col-md-5">
                                        <div className="px-award-label">
                                            <label>Award</label>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4">
                                        <div className="px-award-label">
                                            <label>Nomination</label>
                                        </div>
                                    </div>
                                    <div className="col-xl-1 col-lg-2 col-md-2">
                                        <div className="px-award-label text-md-end">
                                            <label>Year</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* items */}
                            {displayAwardData.map((award, index) => (
                                <AwardItem
                                    key={award.id}
                                    index={index + 1}
                                    item={award}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Award;
