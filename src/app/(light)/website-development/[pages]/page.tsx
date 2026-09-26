import { notFound } from "next/navigation";
 
import {
  DynamicWebsiteDevelopment,
  CustomWebsiteDevelopment,
  PHPWebsiteDevelopment,
  ReactWebsiteDevelopment,
  ApiIntegration,
} from "@/components/home/home/website-development/index";
 
import { generateSeo } from "@/lib/seo";
import { websiteDevelopmentSeo } from "@/lib/seo-data";
 
import ServiceSchema from "@/components/seo-sechama/ServiceSchema";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";
import FAQSchema from "@/components/seo-sechama/FAQSchema";
 
import { faqData } from "@/lib/faq-data";
 
interface PageProps {
  params: Promise<{
    pages: string;
  }>;
}
 
// =============================
// SEO METADATA
// =============================
 
export async function generateMetadata({ params }: PageProps) {
  const { pages } = await params;
 
  const seoKey = pages as keyof typeof websiteDevelopmentSeo;
  const seo = websiteDevelopmentSeo[seoKey];
 
  if (!seo) {
    return {};
  }
 
  return generateSeo({
    title: seo.title,
    description: seo.description,
    slug: `website-development/${pages}`,
    image: seo.image,
    imageAlt: seo.imageAlt,
  });
}
 
// =============================
// PAGE
// =============================
 
export default async function Page({
  params,
}: PageProps) {
  const { pages } = await params;
 
  const seoKey = pages as keyof typeof websiteDevelopmentSeo;
  const seo = websiteDevelopmentSeo[seoKey];
 
  if (!seo) {
    notFound();
  }
 
  // Get FAQ for current page
  const faq = faqData[pages as keyof typeof faqData];
 
  const pageUrl =
    `https://yulanto.com/website-development/${pages}`;
 
  let pageContent;
 
  switch (pages) {
    case "web-development-company-in-chennai":
      pageContent = <DynamicWebsiteDevelopment />;
      break;
 
    case "website-development-company-in-chennai":
      pageContent = <CustomWebsiteDevelopment />;
      break;
 
    case "web-design-and-development-companies-in-chennai":
      pageContent = <PHPWebsiteDevelopment />;
      break;
 
    case "web-development-services-in-chennai":
      pageContent = <ReactWebsiteDevelopment />;
      break;
 
    case "api-integration-services-in-chennai":
      pageContent = <ApiIntegration />;
      break;
 
    default:
      notFound();
  }
 
  return (
    <>
      {/* Breadcrumb Schema */}
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://yulanto.com/",
          },
          {
            name: seo.serviceName,
            url: pageUrl,
          },
        ]}
      />
 
      {/* FAQ Schema */}
      {faq && <FAQSchema items={[...faq]} />}
 
      {/* Service Schema */}
      <ServiceSchema
        name={seo.serviceName}
        description={seo.serviceDescription}
        url={pageUrl}
        image={seo.image}
      />
 
      {/* Page Content */}
      {pageContent}
    </>
  );
}
 