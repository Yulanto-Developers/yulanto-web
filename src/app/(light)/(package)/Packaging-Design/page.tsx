import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import { PulseFitHero } from "@/components/packageing/header";
import { CreativePackagingSection } from "@/components/packageing/box";
import BeautyCardContainer from "@/components/packageing/BeautyCardContainer"; 
import ServicesSection from "@/components/packageing/services";
import Why from "@/components/packageing/Whychoose";
import Industries from "@/components/packageing/DifferentIndustries";

import { PackagingProcessSection } from "@/components/packageing/process"; 
import Sells from "@/components/packageing/SellsYourProduct";

export default function Page() {
  return (
    <main>
      <Breadcrumbdata />
      <PulseFitHero />
      <CreativePackagingSection />
      <ServicesSection />
      <BeautyCardContainer />
      <Why />
      <PackagingProcessSection />
      <Industries />
      <Sells />
    </main>
  );
}