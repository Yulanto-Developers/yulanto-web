import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import Bento from "@/components/aeo/bento-grid";
import CtaCard from "@/components/aeo/CtaCard";
import Benifit from "@/components/aeo/benifitsofsseo";
import Keyword from "@/components/aeo/keyword";
// import Faq from "@/components/aeo/Faq";
import Start from "@/components/aeo/start";
import Hero from "@/components/aeo/HeroCollage";
import { FAQA1 } from "@/components/home/home/website-development/components";
import Services from "@/components/aeo/services"
import Last from "@/components/aeo/last"

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
     
      <Services />
     
      <FAQA1 num1={77} num2={83}
        highlightedText="Frequently Asked Questions"
        titleSuffix="" />
         <Last />
    </main>
  );
}