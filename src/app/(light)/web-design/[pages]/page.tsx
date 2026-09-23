import { notFound } from "next/navigation";

import Corporatewebistedesgin from "@/components/home/home/web-desgin/Corporate-webiste-desgin";
import Landingpagedesgin from "@/components/home/home/web-desgin/landing-page-desgin";
import Startupwebsitedesgin from "@/components/home/home/web-desgin/Startup-website-desgin";
import Uiuxdesgin from "@/components/home/home/web-desgin/ui-ux-desgin";
import Websiteredesign from "@/components/home/home/web-desgin/Website-redesign";

// seo
import { generateSeo } from "@/lib/seo";
import { websiteDesignSeo } from "@/lib/seo-data";
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

  const seoKey = pages as keyof typeof websiteDesignSeo;
  const seo = websiteDesignSeo[seoKey];

  if (!seo) {
    return {};
  }

  return generateSeo({
    title: seo.title,
    description: seo.description,
    slug: `web-design/${pages}`,
    image: seo.image,
    imageAlt: seo.imageAlt,
  });
}

// =============================
// PAGE
// =============================

export default async function Page({ params }: PageProps) {
  const { pages } = await params;

  const seoKey = pages as keyof typeof websiteDesignSeo;
  const seo = websiteDesignSeo[seoKey];

  if (!seo) {
    notFound();
  }

  // Get FAQ for current page
  const faq = faqData[pages as keyof typeof faqData];

  const pageUrl = `https://yulanto-web.vercel.app/web-design/${pages}`;

  let pageContent;

  switch (pages) {
    // startup-website-design
    case "Web-Designing-Company-in-Chennai":
      pageContent = <Startupwebsitedesgin />;
      break;
      // corporate-website-design
    case "website-creation-company-in-Chennai":
      pageContent = <Corporatewebistedesgin />;
      break;
      // website-redesign
    case "Website-Redesign-in-Chennai":
      pageContent = <Websiteredesign />;
      break;
      // landing-page-desgin
    case "landing-page-design-chennai":
      pageContent = <Landingpagedesgin />;
      break;
      // ui-ux-desgin
    case "UI-UX-Companies-in-Chennai":
      pageContent = <Uiuxdesgin />;
      break;
  }

  return (
    <>
      {/* Breadcrumb Schema */}
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://yulanto-web.vercel.app/",
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
