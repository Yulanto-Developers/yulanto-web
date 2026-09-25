import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import Header from "@/components/media/header";
import Traffic from "@/components/media/traffic";
import Social from "@/components/media/social";
import Benift from "@/components/media/benefits";
import  Card  from "@/components/media/promote";
import Faq from "@/components/media/faq"
import Last from "@/components/media/last"

import { generateSeo } from "@/lib/seo";
import { SocialmediaSeo } from "@/lib/seo-data";
import { faqDataSocialMedia } from "@/lib/faq-data";
import ServiceSchema from "@/components/seo-sechama/ServiceSchema";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";
import FAQSchema from "@/components/seo-sechama/FAQSchema";
import type { Metadata } from "next";

const SITE_URL = "https://yulanto-web.vercel.app";
const SLUG = "media_marketing";
const pageUrl = `${SITE_URL}/${SLUG}`;

export const metadata: Metadata = generateSeo({
  title: SocialmediaSeo.title,
  description: SocialmediaSeo.description,
  slug: SLUG,
  image: SocialmediaSeo.image,
  imageAlt: SocialmediaSeo.imageAlt,
});

export default function Page() {
  const seo = SocialmediaSeo;
  const faq = faqDataSocialMedia;
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
      <Traffic />
      <Social />
      <Benift/>
      <Card />
       <Faq/>
       <Last/>

    </main>
  );
}