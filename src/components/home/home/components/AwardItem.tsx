import { awardDT } from "@/types";
import Image from "next/image";

interface AwardItemProps {
    index: number;
    item: awardDT;
}

const AwardItem = ({ item, index, }: AwardItemProps) => {
    return (
        <div className="px-award-item px-fade-anim" data-delay={item.delay}>
            <div className="row">
                <div className="col-xl-3 col-lg-2 col-md-1">
                    <div className="px-award-num">
                        <span>({String(index).padStart(3, "0")})</span>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-5">
                    <div className="px-award-category">
                        <Image width={20} height={20} src={item.image} alt={item.title} />
                        <span>{item.title}</span>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-5">
                    <div className="px-award-nomination">
                        <span>{item.nomination}</span>
                    </div>
                </div>

                <div className="col-xl-1 col-lg-2 col-md-1">
                    <div className="px-award-year text-md-end">
                        <span>{item.year}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AwardItem;
