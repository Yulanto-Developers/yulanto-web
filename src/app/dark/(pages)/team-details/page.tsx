import { TeamDetailsHero,TeamDetailsMainContent} from "@/components/pages/team-details/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Team Details - Creative Portfolio Nextjs Template",
};
const page = () => {
    return (
        <main>
            <TeamDetailsHero />
            <TeamDetailsMainContent id={1}/>
        </main>
    );
};

export default page;