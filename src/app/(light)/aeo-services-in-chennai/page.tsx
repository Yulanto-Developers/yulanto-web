import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import Bento from "@/components/aeo/bento-grid";
import CtaCard from "@/components/aeo/CtaCard";
import Benifit from "@/components/aeo/benifitsofsseo";
import Keyword from "@/components/aeo/keyword";
// import Faq from "@/components/aeo/Faq";
import Start from "@/components/aeo/start";
import Hero from "@/components/aeo/HeroCollage";
import { FAQA1 } from "@/components/home/home/website-development/components";
import Services from "@/components/aeo/services";
import Last from "@/components/aeo/last";

import type { Metadata } from "next";
import { generateSeo } from "@/lib/seo";
import { aeopageSeo } from "@/lib/seo-data";
import { faqDataaeoPage } from "@/lib/faq-data";
import ServiceSchema from "@/components/seo-sechama/ServiceSchema";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";
import FAQSchema from "@/components/seo-sechama/FAQSchema";

const SITE_URL = "https://yulanto-web.vercel.app";
const SLUG = "aeo";
const pageUrl = `${SITE_URL}/${SLUG}`;

export const metadata: Metadata = generateSeo({
  title: aeopageSeo.title,
  description: aeopageSeo.description,
  slug: SLUG,
  image: aeopageSeo.image,
  imageAlt: aeopageSeo.imageAlt,
});

export default function Page() {
  const seo = aeopageSeo;
  const faq = faqDataaeoPage;
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

      <Services />

      <FAQA1
        num1={77}
        num2={83}
        highlightedText="Frequently Asked Questions"
        titleSuffix=""
      />
      <Last />
    </main>
  );
}
