import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import { PulseFitHero } from "@/components/packageing/header";
import { CreativePackagingSection } from "@/components/packageing/box";
import BeautyCardContainer from "@/components/packageing/BeautyCardContainer";
import ServicesSection from "@/components/packageing/services";
import Why from "@/components/packageing/Whychoose";
import Industries from "@/components/packageing/DifferentIndustries";

import { PackagingProcessSection } from "@/components/packageing/process";
import Sells from "@/components/packageing/SellsYourProduct";

import type { Metadata } from "next";
import { generateSeo } from "@/lib/seo";
import { packagingpageSeo } from "@/lib/seo-data";
import ServiceSchema from "@/components/seo-sechama/ServiceSchema";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";

const SITE_URL = "https://yulanto-web.vercel.app";
const SLUG = "Packaging-Design";
const pageUrl = `${SITE_URL}/${SLUG}`;

export const metadata: Metadata = generateSeo({
  title: packagingpageSeo.title,
  description: packagingpageSeo.description,
  slug: SLUG,
  image: packagingpageSeo.image,
  imageAlt: packagingpageSeo.imageAlt,
});

export default function Page() {
  const seo = packagingpageSeo;
  return (
    <main>
      {/* Breadcrumb Schema */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: seo.serviceName, url: pageUrl },
        ]}
      />

      {/* Service Schema */}
      <ServiceSchema
        name={seo.serviceName}
        description={seo.serviceDescription}
        url={pageUrl}
        image={seo.image}
      />
      <Breadcrumbdata />
      <PulseFitHero />
      <CreativePackagingSection />
      <ServicesSection />
      <BeautyCardContainer />
      <Why />
      <PackagingProcessSection />
      <Industries />
      <Sells />
    </main>
  );
}
