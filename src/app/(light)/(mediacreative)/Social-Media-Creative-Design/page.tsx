import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import Hero from "@/components/Social-Media-Creative-Design/header";
import Services from "@/components/Social-Media-Creative-Design/creative-design-services";
import Brand from "@/components/Social-Media-Creative-Design/your-brand";
import Industry from "@/components/Social-Media-Creative-Design/Industry";
import Cta from "@/components/Social-Media-Creative-Design/Cta";
import FaqSection from "@/components/Social-Media-Creative-Design/Faq";
import Banner from "@/components/Social-Media-Creative-Design/banner";


import type { Metadata } from "next";
import { generateSeo } from "@/lib/seo";
import { socialmediacerpageSeo } from "@/lib/seo-data";
import { faqDataSocialMediaPage } from "@/lib/faq-data";
import ServiceSchema from "@/components/seo-sechama/ServiceSchema";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";
import FAQSchema from "@/components/seo-sechama/FAQSchema";

const SITE_URL = "https://yulanto-web.vercel.app";
const SLUG = "Social-Media-Creative-Design";
const pageUrl = `${SITE_URL}/${SLUG}`;

export const metadata: Metadata = generateSeo({
  title: socialmediacerpageSeo.title,
  description: socialmediacerpageSeo.description,
  slug: SLUG,
  image: socialmediacerpageSeo.image,
  imageAlt: socialmediacerpageSeo.imageAlt,
});


export default function Page() {
    const seo = socialmediacerpageSeo;
    const faq = faqDataSocialMediaPage;
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
      <Banner />
      <Hero />
      <Services />
      <Brand />
      <Industry />
      <Cta />
      <FaqSection />
    </main>
  );
}
