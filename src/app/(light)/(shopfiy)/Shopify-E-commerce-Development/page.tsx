import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import Experience from "@/components/Shopify-E-commerce-Development/Experience-Shopify";
import { ShopifyDigitalCraft } from "@/components/Shopify-E-commerce-Development/shopify-digital-craft";
import Professional from "@/components/Shopify-E-commerce-Development/Professional-Shopify";
import Features from "@/components/Shopify-E-commerce-Development/Keyfeatures";
import Why from "@/components/Shopify-E-commerce-Development/whychoose";
import Stores from "@/components/Shopify-E-commerce-Development/Shopify-stores";
import Faq from "@/components/Shopify-E-commerce-Development/FAQ";
// import Maintance from "@/components/Shopify-E-commerce-Development/Store-Maintenance";
export default function Page() {
  return (
    <main>
      <Breadcrumbdata />
      <Experience />
      <ShopifyDigitalCraft />
        <Professional />
        <Features />
        <Why />
        <Stores />
        <Faq />
        {/* <Maintance /> */}
    </main>
  );
}