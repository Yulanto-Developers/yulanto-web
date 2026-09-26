import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import Header from "@/components/ads/header";
import Google from "@/components/ads/google";
import Business from "@/components/ads/Business";
import Campaign from "@/components/ads/Campaign";
import Process from "@/components/ads/Process";
import Why from "@/components/ads/WhyChoose";
import Digital from "@/components/ads/digital";
import Faq from "@/components/ads/Faq";
import Last from "@/components/ads/lastGoogleAds";

import { generateSeo } from "@/lib/seo";
import { googleadsSeo } from "@/lib/seo-data";
import { faqDataGoogleAds } from "@/lib/faq-data";
import ServiceSchema from "@/components/seo-sechama/ServiceSchema";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";
import FAQSchema from "@/components/seo-sechama/FAQSchema";
import type { Metadata } from "next";

const SITE_URL = "https://yulanto.com";
const SLUG = "ads";
const pageUrl = `${SITE_URL}/${SLUG}`;

export const metadata: Metadata = generateSeo({
  title: googleadsSeo.title,
  description: googleadsSeo.description,
  slug: SLUG,
  image: googleadsSeo.image,
  imageAlt: googleadsSeo.imageAlt,
});

export default function Page() {
  const seo = googleadsSeo;
  const faq = faqDataGoogleAds;
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
      <Google />
      <Business />
      <Campaign />
      <Process />
      <Why />
      <Digital />
      <Faq />
      <Last />
    </main>
  );
}
