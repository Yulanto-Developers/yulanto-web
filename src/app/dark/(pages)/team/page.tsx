import { TeamHeroSection, TeamMembersSection } from "@/components/pages/team/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Team - Creative Portfolio Nextjs Template",
};
const page = () => {
    return (
        <main>
            <TeamHeroSection />
            <TeamMembersSection />
        </main>
    );
};

export default page;