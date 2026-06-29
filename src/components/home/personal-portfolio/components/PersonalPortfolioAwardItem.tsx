import { awardDT } from "@/types";
import Image from "next/image";

const PersonalPortfolioAwardItem: React.FC<awardDT> = ({ id, image, delay, title, nomination, year }) => {
    return (
        <div className="px-award-item px-fade-anim" data-delay={delay}>
            <div className="row">
                <div className="col-xl-3 col-lg-2 col-md-1">
                    <div className="px-award-num">
                        <span>{id}</span>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-5">
                    <div className="px-award-category">
                        <Image width={20} height={20} src={image} alt="award category image" />
                        <span>{title}</span>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-5">
                    <div className="px-award-nomination">
                        <span>{nomination}</span>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-2 col-md-1">
                    <div className="px-award-year text-md-end">
                        <span>{year}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalPortfolioAwardItem;