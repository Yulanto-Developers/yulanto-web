import { DribbleIcon, FacebookIcon, TwittorIcon } from "@/svg/SocialIcons";
import TeamContactForm from "@/components/form/TeamContactForm";
import { team_members } from "@/data/team-data";
import { EmailIcon, PhoneIcon } from "@/svg";
import { IdProps } from "@/types/custom-dt";
import Link from "next/link";
import Image from "next/image";

const TeamDetailsMainContent = ({ id }: IdProps) => {
    const team = team_members.find((item) => item.id === Number(id));

    return (
        <section className="tp-team-details-area px-team-details-style tp-team-details-ptb pt-100 pb-70">
            <div className="container container-1230">
                <div className="row">

                    {/* Left Side */}
                    <div className="col-lg-6">
                        <div className="tp-team-details-wrap">

                            {/* image */}
                            <div className="tp-team-details-thumb mb-40">
                                <div className="ripple-image">
                                    {team?.image && <Image className="img-fluid" width={540} height={600}
                                        src={team?.image}
                                        alt={team?.name}
                                    />}
                                </div>
                            </div>

                            {/* contact + social */}
                            <div className="tp-team-details-info d-flex justify-content-between align-items-center flex-wrap gap-20">

                                <div className="tp-team-details-info-contact">

                                    {team?.phone && (
                                        <Link href={`tel:${team?.phone}`}>
                                            <PhoneIcon />
                                            {team?.phone}
                                        </Link>
                                    )}

                                    {team?.email && (
                                        <Link href={`mailto:${team?.email}`}>
                                            <EmailIcon fillColor="#FF5722" />
                                            {team?.email}
                                        </Link>
                                    )}
                                </div>

                                <div className="tp-team-details-info-social">
                                    <div className="px-footer-widget-social">

                                        {team?.social_links?.facebook && (
                                            <Link href={team?.social_links.facebook}>
                                                <span>
                                                    <FacebookIcon />
                                                </span>
                                            </Link>
                                        )}

                                        {team?.social_links?.twitter && (
                                            <Link href={team?.social_links.twitter}>
                                                <span>
                                                    <TwittorIcon />
                                                </span>
                                            </Link>
                                        )}

                                        {(team?.social_links?.dribbble || team?.social_links?.behance) && (
                                            <Link
                                                href={
                                                    team?.social_links?.dribbble ||
                                                    team?.social_links?.behance ||
                                                    "#"
                                                }
                                            >
                                                <span>
                                                    <DribbleIcon />
                                                </span>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="col-lg-6">

                        <div className="tp-team-details-wrapper">

                            {/* heading */}
                            <div className="tp-team-details-text mb-50">

                                <span className="tp-team-details-text-sub mb-10">
                                    {team?.role}
                                </span>

                                <h4 className="tp-team-details-text-title">
                                    {team?.name}
                                </h4>

                                {team?.bio && (
                                    <p>
                                        {team?.bio}
                                    </p>
                                )}
                            </div>

                            {/* more details */}
                            <div className="tp-team-details-more mb-50">

                                <h4 className="tp-team-details-more-title">
                                    More details
                                </h4>

                                <ul>

                                    {team?.location && (
                                        <li>
                                            <span>Location:</span>
                                            {team?.location}
                                        </li>
                                    )}

                                    {team?.role && (
                                        <li>
                                            <span>Position:</span>
                                            {team?.role}
                                        </li>
                                    )}

                                    {team?.email && (
                                        <li>
                                            <span>Email:</span>
                                            {team?.email}
                                        </li>
                                    )}

                                    {team?.phone && (
                                        <li>
                                            <span>Phone:</span>
                                            {team?.phone}
                                        </li>
                                    )}

                                    {team?.age && (
                                        <li>
                                            <span>Age:</span>
                                            {team?.age}
                                        </li>
                                    )}

                                    {team?.qualification && (
                                        <li>
                                            <span>Qualification:</span>
                                            {team?.qualification}
                                        </li>
                                    )}

                                    {team?.gender && (
                                        <li>
                                            <span>Gender:</span>
                                            {team?.gender}
                                        </li>
                                    )}

                                    {team?.experience_years && (
                                        <li>
                                            <span>Experience:</span>
                                            {team?.experience_years}
                                        </li>
                                    )}

                                </ul>
                            </div>

                            {/* experience */}
                            {team?.experiences && team?.experiences.length > 0 && (
                                <div className="tp-team-details-more mb-50">

                                    <h4 className="tp-team-details-more-title">
                                        Experience
                                    </h4>

                                    <ul>
                                        {team?.experiences.map((experience, index) => (
                                            <li key={`${experience}-${index}`}>
                                                {experience}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* skills */}
                            {team?.skills && team?.skills.length > 0 && (
                                <div className="tp-team-details-progress mb-50">

                                    <h4 className="tp-team-details-more-title mb-35">
                                        My Skills
                                    </h4>

                                    {team?.skills.map((skill, index) => (
                                        <div
                                            key={`${skill.title}-${index}`}
                                            className="tp-team-details-progress mb-35"
                                        >

                                            <h6 className="tp-team-details-progress-title">
                                                {skill.title}
                                            </h6>

                                            <div className="tp-team-details-progress-inner">

                                                <div
                                                    className="tp-team-details-progress-bar"
                                                    role="progressbar"
                                                    style={{
                                                        width: `${skill.value}%`,
                                                    }}
                                                    aria-valuenow={skill.value}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                >

                                                    <h6 className="tp-team-details-progress-counter">
                                                        {skill.value}%
                                                    </h6>

                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {/* contact form */}
                            <TeamContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamDetailsMainContent;