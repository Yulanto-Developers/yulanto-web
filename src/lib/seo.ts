import type { Metadata } from "next";

const SITE_URL = "https://yulanto-web.vercel.app";
const SITE_NAME = "Yulanto Web Creations";

interface SEOProps {
  title: string;
  description: string;
  slug?: string;
  image?: string;
  imageAlt?: string;
}

export function generateSeo({
  title,
  description,
  slug = "",
  image = "/assets/img/sample/gallery/img- (1).jpg",
  imageAlt = title,
}: SEOProps): Metadata {
  // Remove / from beginning and ending
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");

  // Create canonical URL
  const canonical = cleanSlug
    ? `${SITE_URL}/${cleanSlug}`
    : SITE_URL;

  // Convert relative image path to absolute URL
  const ogImage = image.startsWith("http")
    ? image
    : `${SITE_URL}${image}`;

  return {
    title,

    description,

    authors: [
      {
        name: SITE_NAME,
      },
    ],

    publisher: SITE_NAME,

    alternates: {
      canonical,
    },

    openGraph: {
      type: "website",

      title,

      description,

      url: canonical,

      siteName: SITE_NAME,

      locale: "en_IN",

      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,

      images: [
        {
          url: ogImage,
          alt: imageAlt,
        },
      ],
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}