
import { DesignStudioAbout, DesignStudioAward, DesignStudioBanner, DesignStudioHero, DesignStudioPortfolio, DesignStudioService, DesignStudioTextMarquee } from "@/components/home/design-studio/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Design Studio - Creative Portfolio Nextjs Template",
};
const page = () => {
    return (
        <main>
            <DesignStudioHero />
            <DesignStudioTextMarquee />
            <DesignStudioBanner src="/assets/img/banner/banner-1.jpg" imageClass="w-100" />
            <DesignStudioAbout />
            <DesignStudioService />
            <DesignStudioPortfolio />
            <DesignStudioAward />
        </main>
    );
};

export default page;