import { TeamDetailsHero,TeamDetailsMainContent } from '@/components/pages/team-details/sections';
import { PageParamsProps } from '@/types/custom-dt';
import { team_members } from '@/data/team-data';

export async function generateMetadata(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;
    const team = team_members.find((item) => item.id === Number(id));
    return {
        title: team?.name ? team.name : "Team Details",
    };
}

export default async function TeamDetails(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;

    return (
        <main>
            <TeamDetailsHero />
            <TeamDetailsMainContent id={id}/>
        </main>
    );
}