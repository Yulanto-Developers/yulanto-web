
import { ModernAgencyAward, ModernAgencyHero, ModernAgencyMultipleArea, ModernAgencyProject } from "@/components/home/modern-agency/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Modern Agency - Creative Portfolio Nextjs Template",
};
const page = () => {
    return (
        <main>
            <ModernAgencyHero />
            <ModernAgencyProject />
            <ModernAgencyMultipleArea />
            <ModernAgencyAward />
        </main>
    );
};

export default page;