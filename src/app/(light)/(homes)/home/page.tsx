import { CreativeStudioService } from "@/components/home/creative-studio/sections";
import {
  DesignStudioAbout,
  DesignStudioAward,
  DesignStudioBanner,
  DesignStudioHero,
  DesignStudioPortfolio,
  DesignStudioService,
  DesignStudioTextMarquee,
} from "@/components/home/home/sections";
import { MinimalPortfolioAward, MinimalPortfolioTextSlider } from "@/components/home/minimal-portfolio/sections";
import { PersonalPortfolioAbout, PersonalPortfolioGallery } from "@/components/home/personal-portfolio/sections";
import { StartupAgencyAbout, StartupAgencyProject } from "@/components/home/startup-agency/sections";
import { Metadata } from "next";
import { } from "@/data/testimonial-data";
import Testimonial from "@/components/home/modern-agency/sections/ModernAgencyTestimonial";

export const metadata: Metadata = {
  title: "Yulanto - Home",
};
const page = () => {
  return (
    <main>
      <DesignStudioHero />
      <DesignStudioTextMarquee />
      <StartupAgencyAbout />
      <PersonalPortfolioAbout />

      {/* <DesignStudioBanner
        src="/assets/img/banner/banner-1.jpg"
        imageClass="w-100"
      /> */}
      {/* <DesignStudioAbout /> */}
      {/* <DesignStudioService /> */}
      <StartupAgencyProject />
      <PersonalPortfolioGallery />
      <DesignStudioPortfolio />
      <CreativeStudioService />
      {/* <MinimalPortfolioTextSlider/> */}
      <MinimalPortfolioAward />
      <Testimonial />

      <DesignStudioAward />
    </main>
  );
};

export default page;
