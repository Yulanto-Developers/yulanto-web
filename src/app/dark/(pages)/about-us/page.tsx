import { AboutArea, AboutTwoArea, AboutUsAward, AboutUsFunfact, AboutUsService, AboutUsTeam, AboutUsTextSlide, BannerSection } from "@/components/pages/about-us/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us - Creative Portfolio Nextjs Template",
};
const page = () => {
    return (
        <main>
            <AboutArea />
            <BannerSection src="/assets/img/banner/banner-3-1.jpg" wrapperClass="px-banner-3-wrap fix" />
            <AboutTwoArea />
            <AboutUsFunfact />
            <AboutUsTextSlide />
            <AboutUsService />
            <AboutUsTeam />
            <AboutUsAward />
        </main>
    );
};

export default page;