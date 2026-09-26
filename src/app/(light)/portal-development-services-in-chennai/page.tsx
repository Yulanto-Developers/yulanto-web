import Breadcrumb from "@/components/breadcrum/sections/breadcrumb";
import breadcrumbimg from "../../../../../public/assets/images/breadcrumb/Company-Overview.jpg";
import { RecentProject } from "@/components/home/home/workComponents";
import BreadcurmbData from "@/components/breadcrum/sections/breadcrumbdata";
import Ecommerce from "@/components/home/home/custome-ecommerce/Ecommerce";
import PortalWeb from "@/components/home/home/portal-web/PortalWeb";

import { generateSeo } from "@/lib/seo";
import { portalpageSeo } from "@/lib/seo-data";
import { faqDataPortalDevelopmentPage } from "@/lib/faq-data";
import ServiceSchema from "@/components/seo-sechama/ServiceSchema";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";
import FAQSchema from "@/components/seo-sechama/FAQSchema";
import type { Metadata } from "next";

const SITE_URL = "https://yulanto.com";
const SLUG = "portal-development-services-in-Chennai";
const pageUrl = `${SITE_URL}/${SLUG}`;

export const metadata: Metadata = generateSeo({
  title: portalpageSeo.title,
  description: portalpageSeo.description,
  slug: SLUG,
  image: portalpageSeo.image,
  imageAlt: portalpageSeo.imageAlt,
});

const page = () => {
  const seo = portalpageSeo;
  const faq = faqDataPortalDevelopmentPage;
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
      <PortalWeb />
    </>
  );
};

export default page;
