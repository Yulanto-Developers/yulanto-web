import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import Hero from "@/components/Social-Media-Creative-Design/header";
import Services from "@/components/Social-Media-Creative-Design/creative-design-services";
import Brand from "@/components/Social-Media-Creative-Design/your-brand";
import Industry from "@/components/Social-Media-Creative-Design/Industry";
import Cta from "@/components/Social-Media-Creative-Design/Cta";
import FaqSection from "@/components/Social-Media-Creative-Design/Faq";
import Banner from "@/components/Social-Media-Creative-Design/banner";

export default function Page() {
  return (
    <main>
      <Breadcrumbdata />
      <Banner />

      <Hero />
      <Services />
      <Brand />
      <Industry />
      <Cta />
      <FaqSection />
    </main>
  );
}