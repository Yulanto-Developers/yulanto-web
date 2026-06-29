import TeamCard from "@/components/shared/components/TeamCard";
import { team_members } from "@/data/team-data";

const TeamMembersSection = () => {
     // display team members data
    const teamItems = team_members.slice(0, 8);

    return (
        <div className="px-team-area px-about-5-style pb-90">
            <div className="container container-1550">
                <div className="row">
                  {teamItems.map((member) => (
                       <TeamCard key={member.id} {...member}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamMembersSection;