import type { Metadata } from "next";
import BreadcurmbData from "@/components/breadcrum/sections/breadcrumbdata";
import Ecommerce from "@/components/home/home/custome-ecommerce/Ecommerce";

import { generateSeo } from "@/lib/seo";
import { customEcommerceSeo } from "@/lib/seo-data";
import { faqDataCustomeEcommerce } from "@/lib/faq-data";
import ServiceSchema from "@/components/seo-sechama/ServiceSchema";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";
import FAQSchema from "@/components/seo-sechama/FAQSchema";

const SITE_URL = "https://yulanto-web.vercel.app";
const SLUG = "custome-ecommerce-development";
const pageUrl = `${SITE_URL}/${SLUG}`;

export const metadata: Metadata = generateSeo({
  title: customEcommerceSeo.title,
  description: customEcommerceSeo.description,
  slug: SLUG,
  image: customEcommerceSeo.image,
  imageAlt: customEcommerceSeo.imageAlt,
});

const Page = () => {
  const seo = customEcommerceSeo;
  const faq = faqDataCustomeEcommerce;

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