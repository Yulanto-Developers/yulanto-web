import { CreativeStudioBrand, CreativeStudioService } from "@/components/home/creative-studio/sections";
import {
  DesignStudioAbout,
  DesignStudioAward,
  DesignStudioBanner,
  // DesignStudioHero,
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
import { DesignStudioHero, Marquee, Abouthome, Portfolio, Gallery, Projects, Mantra } from "@/components/home/home/myComponents";

export const metadata: Metadata = {
  title: "Yulanto - Home",
};
const page = () => {
  return (
    <main>
      <DesignStudioHero />
      <Marquee />
      <Abouthome />
      <Portfolio />

      {/* <DesignStudioBanner
        src="/assets/img/banner/banner-1.jpg"
        imageClass="w-100"
      /> */}
      {/* <DesignStudioAbout /> */}
      {/* <DesignStudioService /> */}
      <Projects />
      <Gallery />
      <Mantra />
      <CreativeStudioService />
      {/* <MinimalPortfolioTextSlider/> */}
      {/* <MinimalPortfolioAward /> */}
      <Testimonial />

      {/* <DesignStudioAward /> */}
      {/* <CreativeAgencyBrand/> */}
      <CreativeStudioBrand />
    </main>
  );
};

export default page;
