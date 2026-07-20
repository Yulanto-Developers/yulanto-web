import { PersonalPortfolioAbout, PersonalPortfolioAward, PersonalPortfolioGallery, PersonalPortfolioHero, PersonalPortfolioProject, PersonalPortfolioVideo } from "@/components/home/personal-portfolio/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Personal Portfolio - Creative Portfolio Nextjs Template",
};
const page = () => {
    return (
        <main>
            <PersonalPortfolioHero />
            <PersonalPortfolioVideo />
            <PersonalPortfolioAbout/>
            <PersonalPortfolioProject/>
            <PersonalPortfolioGallery/>
            <PersonalPortfolioAward/>
        </main>
    );
};

export default page;