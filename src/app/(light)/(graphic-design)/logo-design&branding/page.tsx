import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import Header from "@/components/logo-design/header"
import Thelogo from "@/components/logo-design/second"
import Logport from "@/components/logo-design/logoportfolio"
import Branding from "@/components/logo-design/branding"
import LogoServicesDemo from "@/components/logo-design/services";
import { ShuffleHero } from "@/components/logo-design/shuffle-grid";
// import FAQA1 from './components/index';
import faqa1Data from '@/components/home/home/website-development/components/faqa1data';
import FAQA1 from '@/components/home/home/website-development/components/FAQA1';

// const faqs: FAQItem[] = faqa1Data.slice(4,5);

export default function Page() {
  return (
    <main>
      <Breadcrumbdata />
      <Header />
      <Thelogo/>
      <Logport />
      <Branding />
      <LogoServicesDemo />
      <ShuffleHero />
      <FAQA1 num1={5} num2={13}
        highlightedText="Frequently Asked Questions" 
        titleSuffix="About Logo Design"
         />
    </main>
  );
}