import {
  DesignStudioAbout,
  DesignStudioAward,
  DesignStudioBanner,
  DesignStudioHero,
  DesignStudioPortfolio,
  DesignStudioService,
  DesignStudioTextMarquee,
} from "@/components/home/home/sections";
import { PersonalPortfolioAbout } from "@/components/home/personal-portfolio/sections";
import { StartupAgencyAbout } from "@/components/home/startup-agency/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yulanto - Home",
};
const page = () => {
  return (
    <main>
      <DesignStudioHero />
      <DesignStudioTextMarquee />
      <StartupAgencyAbout />
      {/* <PersonalPortfolioAbout/> */}
      {/* <DesignStudioBanner
        src="/assets/img/banner/banner-1.jpg"
        imageClass="w-100"
      /> */}
      <DesignStudioAbout />
      <DesignStudioService />
      <DesignStudioPortfolio />
      <DesignStudioAward />
    </main>
  );
};

export default page;
