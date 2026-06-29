"use client";
import PersonalPortfolioAwardItem from "../components/PersonalPortfolioAwardItem";
import { awardData } from "@/data/award-data";

const PersonalPortfolioAward = () => {
    const displayAwardItems = awardData.slice(4, 8);

    return (
        <div className="px-award-area pb-120">
            <div className="container">
                <div className="px-award-title-wrap mb-45">
                    <div className="row">
                        <div className="col-xl-9">
                            <div className="px-award-content">
                                <h3 className="px-section-title ff-thunder fs-130 mb-25">
                                    Awards & <br /> recognitions.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-award-wrapper">
                    {displayAwardItems.map((item) => (
                        <PersonalPortfolioAwardItem key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PersonalPortfolioAward;