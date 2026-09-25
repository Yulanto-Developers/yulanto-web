import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import Experience from "@/components/Shopify-E-commerce-Development/Experience-Shopify";
import { ShopifyDigitalCraft } from "@/components/Shopify-E-commerce-Development/shopify-digital-craft";
import Professional from "@/components/Shopify-E-commerce-Development/Professional-Shopify";
import  Experienced from "@/components/Shopify-E-commerce-Development/Build-Professional"
import Features from "@/components/Shopify-E-commerce-Development/Keyfeatures";
import Why from "@/components/Shopify-E-commerce-Development/whychoose";
import Stores from "@/components/Shopify-E-commerce-Development/Shopify-stores";
import Faq from "@/components/Shopify-E-commerce-Development/FAQ";
import Maintance from "@/components/Shopify-E-commerce-Development/Store-Maintenance";
import Last from "@/components/Shopify-E-commerce-Development/last"
import Header from "@/components/Shopify-E-commerce-Development/ShopifyHero"
export default function Page() {
  return (
    <main>
      <Breadcrumbdata />
       <Header />
      <Experience />
      <ShopifyDigitalCraft />
        <Professional />
        <Experienced />
        <Features />
        <Why />
        <Stores />
         <Maintance />
        <Faq />
        <Last />
       
    </main>
  );
}