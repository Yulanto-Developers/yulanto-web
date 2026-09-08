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
import { DesignStudioHero, Marquee, Abouthome, Portfolio, Gallery, Projects, Mantra, OurPartner, Services, ClientTestimonial } from "@/components/home/home/myComponents";
import "@/assets/css/style1.css";

// export const metadata: Metadata = {
//   title: "Yulanto - Home",
// };
import { generateSeo } from "@/lib/seo";

export const metadata = generateSeo({
  title: "Best Web Design and Development Company in Chennai | Yulanto Web Creations",
  description:
    "Yulanto is one of the best web design and website development company in Chennai, with experienced web designers in Chennai delivering professional websites.",
});
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
      <Services />
      {/* <MinimalPortfolioTextSlider/> */}
      {/* <MinimalPortfolioAward /> */}
      <ClientTestimonial />

      {/* <DesignStudioAward /> */}
      {/* <CreativeAgencyBrand/> */}
      
    </main>
  );
};

export default page;
