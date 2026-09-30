import type { MetadataRoute } from "next";

const baseUrl = "https://yulanto-web.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages = [
    "home",
    "our-story",
    "our-mission-vision",
    "our-philosophy",
    "why-choose-us",
    "our-team",
    "recent-projects",
    "our-portfolio",
    "case-studies",
    "yulanto-works",
    "careers",
    "contact-us",
    "our-clients",
    "thank-you",
  ];

  const clientPages = [
    "web-design-services-for-usa",
    "web-design-services-for-singapore-and-malaysia",
    "web-design-services-for-uae",
    "web-design-services-for-europe",
    "web-design-services-for-uk",
  ];

  const webDesignPages = [
    "web-designing-company-in-chennai",
    "website-creation-company-in-Chennai",
    "website-redesign-in-chennai",
    "landing-page-design-chennai",
    "ui-ux-companies-in-chennai",
  ];

  const websiteDevelopmentPages = [
    "web-development-company-in-chennai",
    "website-development-company-in-chennai",
    "web-design-and-development-companies-in-chennai",
    "web-development-services-in-chennai",
    "api-integration-services-in-chennai",
  ];

  const servicePages = [
    "wordpress-development-company-in-Chennai",
    "e-commerce-website-development-in-chennai",
    "shopify-development-company-in-chennai",
    "portal-development-services-in-chennai",
    "ecommerce-website-development-company-in-chennai",

    "logo-designers-in-chennai",
    "brochure-design-company-in-chennai",
    "flyer-poster-designers-in-chennai",
    "packaging-design-agency-in-chennai",
    "creative-social-media-post-design-company-in-chennai",

    "seo-company-in-chennai",
    "google-ads-agency-in-chennai",
    "social-media-marketing-agency-in-chennai",
    "seo-agencies-in-chennai",
    "aeo-services-in-chennai",

    "create-website-using-ai-in-chennai",
  ];

  const legalPages = [
    "terms-conditions",
    "license-copyright",
    "privacy-policy",
    "disclaimer",
  ];

  return [
    // Main pages
    ...mainPages.map((page) => ({
      url: `${baseUrl}/${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "home" ? 1 : 0.8,
    })),

    // Client pages
    ...clientPages.map((page) => ({
      url: `${baseUrl}/our-clients/${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // Web Design [pages]
    ...webDesignPages.map((page) => ({
      url: `${baseUrl}/web-design/${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),

    // Website Development [pages]
    ...websiteDevelopmentPages.map((page) => ({
      url: `${baseUrl}/website-development/${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),

    // Other services
    ...servicePages.map((page) => ({
      url: `${baseUrl}/${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // Legal
    ...legalPages.map((page) => ({
      url: `${baseUrl}/${page}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
