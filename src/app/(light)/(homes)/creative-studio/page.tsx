
import { BannerSection, CreativeStudioAbout, CreativeStudioBlog, CreativeStudioBrand, CreativeStudioHero, CreativeStudioProject, CreativeStudioService, CreativeStudioTextMarquee } from "@/components/home/creative-studio/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Creative Studio - Creative Portfolio Nextjs Template",
};
const page = () => {
    return (
        <main>
            <CreativeStudioHero />
            <CreativeStudioTextMarquee />
            <BannerSection src="/assets/img/banner/banner-3-1.jpg" wrapperClass="px-banner-3-wrap fix" />
            <CreativeStudioAbout />
            <CreativeStudioProject />
            <CreativeStudioService />
            <CreativeStudioBlog />
            <CreativeStudioBrand />
        </main>
    );
};

export default page;