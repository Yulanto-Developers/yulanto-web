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

import type { Metadata } from "next";
import { generateSeo } from "@/lib/seo";
import { logopageSeo } from "@/lib/seo-data";
import { faqDatalogoPage } from "@/lib/faq-data";
import ServiceSchema from "@/components/seo-sechama/ServiceSchema";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";
import FAQSchema from "@/components/seo-sechama/FAQSchema";

const SITE_URL = "https://yulanto-web.vercel.app";
const SLUG = "logo-design&branding";
const pageUrl = `${SITE_URL}/${SLUG}`;

export const metadata: Metadata = generateSeo({
  title: logopageSeo.title,
  description: logopageSeo.description,
  slug: SLUG,
  image: logopageSeo.image,
  imageAlt: logopageSeo.imageAlt,
});

export default function Page() {
    const seo = logopageSeo;
    const faq = faqDatalogoPage;
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