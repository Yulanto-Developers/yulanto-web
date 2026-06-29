
import { FacebookIconTwo, InstragramIconThree, TwittorIconTwo } from "@/svg/SocialIcons";
import { SmartLink } from "@/components/common";
import { TeamItemDT } from "@/types";
import Image from "next/image";
import Link from "next/link";

const SocialLinks = () => {
    return (
        <div className="px-team-social-icon">
            <Link href="#">
                <span>
                    <FacebookIconTwo />
                </span>
            </Link>
            <Link href="#">
                <span>
                    <TwittorIconTwo />
                </span>
            </Link>
            <Link href="#">
                <span>
                    <InstragramIconThree />
                </span>
            </Link>
        </div>
    );
};

const TeamCard: React.FC<TeamItemDT> = ({ id, image, name, role, animation }) => {

    return (
        <div className={`col-xxl-3 col-lg-4 col-md-6 col-sm-6 ${animation}`}>
            <div className="px-team-item mb-30">
                <div className="px-team-thumb p-relative">
                    <div className="ripple-image">
                        {/* SOCIAL */}
                        <div className="px-team-social">
                            <SocialLinks />
                        </div>
                        <Image className="img-fluid w-100 h-auto" width={362} height={420} src={image} alt={name} />
                    </div>
                </div>

                <div className="px-team-content">
                    <h4 className="px-team-title">
                        <SmartLink className="px-line-lr" href={`/team-details/${id}`}>
                            {name}
                        </SmartLink>
                    </h4>
                    <span>{role}</span>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;