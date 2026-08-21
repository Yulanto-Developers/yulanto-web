import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import Bento from "@/components/seo/bento-grid";
import CtaCard from "@/components/seo/CtaCard";
import Benifit from "@/components/seo/benifitsofsseo";
import Keyword from "@/components/seo/keyword";
import Faq from "@/components/seo/Faq";
import Start from "@/components/seo/start";
import Hero from "@/components/seo/HeroCollage";
import Services from "@/components/seo/services"

export default function Page() {
  return (
    <main>
      <Breadcrumbdata />
      <Hero />
      <Start />
      <Bento />
      <CtaCard />
      <Benifit />
      <Keyword />
      <Faq />
     <Services />
    </main>
  );
}