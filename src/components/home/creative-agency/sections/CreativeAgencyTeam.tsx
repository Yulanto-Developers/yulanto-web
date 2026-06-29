import TeamCard from "@/components/shared/components/TeamCard";
import { SmartLink } from "@/components/common";
import { team_members } from "@/data/team-data";
import { TextArrowIcon } from "@/svg";

const CreativeAgencyTeam = () => {
    // display team members data
    const teamItems = team_members.slice(0, 4);

    return (
        <div className="px-team-area px-about-5-style px-team-6-pt">
            <div className="container container-1550">

                {/* TOP SECTION */}
                <div className="px-team-top mb-60">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3">
                            <div className="px-team-subtitle-box">
                                <span className="px-section-subtitle">Who we are</span>
                            </div>
                        </div>

                        <div className="col-xl-9 col-lg-9 col-md-9">
                            <div className="row align-items-end">
                                <div className="col-xl-8 col-lg-8 col-md-9">
                                    <div className="px-team-title-box">
                                        <h3 className="px-section-title ff-thunder fs-100 mb-0">
                                            Meet the <br /> talented team
                                        </h3>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-3">
                                    <div className="px-team-link-wrap text-md-end pb-15">
                                        <SmartLink
                                            className="px-about-4-link px-doubble-effect"
                                            href="/team"
                                        >
                                            <span>Discover All</span>
                                            <i>
                                                <TextArrowIcon />
                                                <TextArrowIcon />
                                            </i>
                                        </SmartLink>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* TEAM GRID */}
                <div className="row">
                    {teamItems.map((member) => (
                       <TeamCard key={member.id} {...member}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CreativeAgencyTeam;