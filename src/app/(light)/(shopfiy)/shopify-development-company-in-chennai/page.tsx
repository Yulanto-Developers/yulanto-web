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

import { generateSeo } from "@/lib/seo";
import { shopfypageSeo } from "@/lib/seo-data";
import { faqDataShopifyPage } from "@/lib/faq-data";
import ServiceSchema from "@/components/seo-sechama/ServiceSchema";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";
import FAQSchema from "@/components/seo-sechama/FAQSchema";
import type { Metadata } from "next";

const SITE_URL = "https://yulanto.com";
const SLUG = "wordpress-development-company-in-Chennai";
const pageUrl = `${SITE_URL}/${SLUG}`;

export const metadata: Metadata = generateSeo({
  title: shopfypageSeo.title,
  description: shopfypageSeo.description,
  slug: SLUG,
  image: shopfypageSeo.image,
  imageAlt: shopfypageSeo.imageAlt,
});

export default function Page() {
  const seo = shopfypageSeo;
  const faq = faqDataShopifyPage;
  return (
 
    <main>
      {/* Breadcrumb Schema */}
            <BreadcrumbSchema
              items={[
                { name: "Home", url: `${SITE_URL}/` },
                { name: seo.serviceName, url: pageUrl },
              ]}
            />
      
            {/* FAQ Schema */}
            {faq && faq.length > 0 && <FAQSchema items={[...faq]} />}
      
            {/* Service Schema */}
            <ServiceSchema
              name={seo.serviceName}
              description={seo.serviceDescription}
              url={pageUrl}
              image={seo.image}
            />
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