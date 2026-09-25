import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import Bento from "@/components/seo/bento-grid";
import CtaCard from "@/components/seo/CtaCard";
import Benifit from "@/components/seo/benifitsofsseo";
import Keyword from "@/components/seo/keyword";
import Faq from "@/components/seo/Faq";
import Start from "@/components/seo/start";
import Hero from "@/components/seo/HeroCollage";
import Services from "@/components/seo/services"
import Last from "@/components/seo/last"

import { generateSeo } from "@/lib/seo";
import { DigitalMarketingSeo } from "@/lib/seo-data";
import { faqDataSearcheagine } from "@/lib/faq-data";
import ServiceSchema from "@/components/seo-sechama/ServiceSchema";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";
import FAQSchema from "@/components/seo-sechama/FAQSchema";
import type { Metadata } from "next";

const SITE_URL = "https://yulanto-web.vercel.app";
const SLUG = "seo";
const pageUrl = `${SITE_URL}/${SLUG}`;

export const metadata: Metadata = generateSeo({
  title: DigitalMarketingSeo.title,
  description: DigitalMarketingSeo.description,
  slug: SLUG,
  image: DigitalMarketingSeo.image,
  imageAlt: DigitalMarketingSeo.imageAlt,
});

export default function Page() {
  const seo = DigitalMarketingSeo;
    const faq = faqDataSearcheagine;
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
      <Hero />
      <Start />
      <Bento />
      <CtaCard />
      <Benifit />
      <Keyword />
      <Faq />
     <Services />
     <Last />
    </main>
  );
}