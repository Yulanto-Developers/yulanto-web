import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import Header from "@/components/WooCommerce-Development/header";
import Second from "@/components/WooCommerce-Development/second";
import Bussiness from "@/components/WooCommerce-Development/Business";
import CustomDevelopment from "@/components/WooCommerce-Development/Custom-Development";
import WooCommerceSolutions from "@/components/WooCommerce-Development/WooCommerce-solutions";
import StoreFeaturesSection from "@/components/WooCommerce-Development/Ecommerce-Features";
import Why from "@/components/WooCommerce-Development/Why-Choose";
import Faq from "@/components/WooCommerce-Development/Faq";
import Last from "@/components/WooCommerce-Development/last";

import { generateSeo } from "@/lib/seo";
import { wocommercepageSeo } from "@/lib/seo-data";
import { faqDataWooCommercePage } from "@/lib/faq-data";
import ServiceSchema from "@/components/seo-sechama/ServiceSchema";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";
import FAQSchema from "@/components/seo-sechama/FAQSchema";
import type { Metadata } from "next";

const SITE_URL = "https://yulanto.com";
const SLUG = "e-commerce-website-development-in-chennai";
const pageUrl = `${SITE_URL}/${SLUG}`;

export const metadata: Metadata = generateSeo({
  title: wocommercepageSeo.title,
  description: wocommercepageSeo.description,
  slug: SLUG,
  image: wocommercepageSeo.image,
  imageAlt: wocommercepageSeo.imageAlt,
});

export default function Page() {
  const seo = wocommercepageSeo;
  const faq = faqDataWooCommercePage;
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
      <Bussiness />
      <CustomDevelopment />
      <WooCommerceSolutions />
      <StoreFeaturesSection />
      <Why />
      <Faq />
      <Last />
    </main>
  );
}
