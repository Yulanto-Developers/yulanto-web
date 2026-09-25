import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import Header from "@/components/AI-assisted-website/header";
import Second from "@/components/AI-assisted-website/second";
import Work from "@/components/AI-assisted-website/workflow";
import AIcard from "@/components/AI-assisted-website/AI-helps";
import Idea from "@/components/AI-assisted-website/Idea-to-Launch";
import AIAssited from "@/components/AI-assisted-website/AI-Assisted-Websites";
import Tools from "@/components/AI-assisted-website/Tools";
import Faq from "@/components/AI-assisted-website/Faq";

import type { Metadata } from "next";
import { generateSeo } from "@/lib/seo";
import { AIwebsitepageSeo } from "@/lib/seo-data";
import { faqDataAIAssPage } from "@/lib/faq-data";
import ServiceSchema from "@/components/seo-sechama/ServiceSchema";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";
import FAQSchema from "@/components/seo-sechama/FAQSchema";

const SITE_URL = "https://yulanto-web.vercel.app";
const SLUG = "AI-assisted-website";
const pageUrl = `${SITE_URL}/${SLUG}`;

export const metadata: Metadata = generateSeo({
  title: AIwebsitepageSeo.title,
  description: AIwebsitepageSeo.description,
  slug: SLUG,
  image: AIwebsitepageSeo.image,
  imageAlt: AIwebsitepageSeo.imageAlt,
});

export default function Page() {
  const seo = AIwebsitepageSeo;
  const faq = faqDataAIAssPage;
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
      <Second />
      <Work />
      <AIcard />
      <Idea />
      <AIAssited />
      <Tools />
      <Faq />
    </main>
  );
}
