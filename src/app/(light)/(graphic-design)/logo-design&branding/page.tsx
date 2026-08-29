import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import Header from "@/components/logo-design/header"
import Thelogo from "@/components/logo-design/second"
import Logport from "@/components/logo-design/logoportfolio"
import Branding from "@/components/logo-design/branding"
import LogoServicesDemo from "@/components/logo-design/services";
import { ShuffleHero } from "@/components/logo-design/shuffle-grid";

import faqa1Data from '@/components/home/home/website-development/components/faqa1data';
import FAQA1 from '@/components/home/home/website-development/components/FAQA1';
import Categories from '@/components/logo-design/LogoPortfolioCategories'
import Design from '@/components/logo-design/Design'
import Last from '@/components/logo-design/last'


export default function Page() {
  return (
    <main>
      <Breadcrumbdata />
      <Header />
      <Thelogo/>
    
      <Logport />
        <Categories />
        <Design />

      <Branding />
      <LogoServicesDemo />
      <ShuffleHero />
      <FAQA1 num1={7} num2={15}
        highlightedText="Frequently Asked Questions" 
        titleSuffix="About Logo Design"
         />
         <Last />  
      
    </main>
  );
}