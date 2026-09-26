import type { Metadata } from "next";
import BreadcurmbData from "@/components/breadcrum/sections/breadcrumbdata";
import Ecommerce from "@/components/home/home/custome-ecommerce/Ecommerce";

import { generateSeo } from "@/lib/seo";
import { cusEcommerceswocpageSeo } from "@/lib/seo-data";
import { faqDataEcommerceDevelopmentPage } from "@/lib/faq-data";
import ServiceSchema from "@/components/seo-sechama/ServiceSchema";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";
import FAQSchema from "@/components/seo-sechama/FAQSchema";

const SITE_URL = "https://yulanto.com";
const SLUG = "ecommerce-website-development-company-in-chennai";
const pageUrl = `${SITE_URL}/${SLUG}`;

export const metadata: Metadata = generateSeo({
  title: cusEcommerceswocpageSeo.title,
  description: cusEcommerceswocpageSeo.description,
  slug: SLUG,
  image: cusEcommerceswocpageSeo.image,
  imageAlt: cusEcommerceswocpageSeo.imageAlt,
});

const Page = () => {
  const seo = cusEcommerceswocpageSeo;
  const faq = faqDataEcommerceDevelopmentPage;

  return (
    <>
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

      <BreadcurmbData />
      <Ecommerce />
    </>
  );
};

export default Page;