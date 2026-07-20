import { StartupAgencyAward, StartupAgencyBrand, StartupAgencyHero, StartupAgencyProject, StartupAgencyService, StartupAgencyAbout } from "@/components/home/startup-agency/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Startup Agency - Creative Portfolio Nextjs Template",
};
const page = () => {
    return (
        <main>
            <StartupAgencyHero />
            <StartupAgencyAbout />
            <StartupAgencyProject />
            <StartupAgencyService />
            <StartupAgencyBrand />
            <StartupAgencyAward />
        </main>
    );
};

export default page;