import { ToastContainer } from "react-toastify";
import { Inter, Tenor_Sans, Figtree } from "next/font/google";

import "swiper/css/bundle";
import "./globals.scss";

import type { Metadata } from "next";
import { company } from "@/lib/company";
import Script from "next/script";
import favicon from "@/assets/img/logo/favicon.png"

// ===============================
// FONTS
// ===============================

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   display: "swap",
// });

const figTree = Figtree({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-figtree",
  display: "swap",
});

const tenor = Tenor_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-tenor",
  display: "swap",
});

// ===============================
// SITE URL
// ===============================

const SITE_URL = "https://yulanto-web.vercel.app";

// ===============================
// GLOBAL SEO METADATA
// ===============================

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: favicon.src,

  // Default title.
  // Individual pages can override this.
  title: "Yulanto Web Creations",

  // Default description.
  // Individual pages can override this.
  description:
    "Yulanto Web Creations provides professional website design, web development and digital solutions in Chennai.",

  authors: [
    {
      name: company.name,
    },
  ],

  publisher: company.name,

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

  other: {
    language: "English",
    "geo.region": "IN-TN",
    "geo.placename": "Chennai",
  },
};

// ===============================
// ORGANIZATION SCHEMA
// ===============================

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  "@id": `${SITE_URL}/#organization`,

  name: company.name,

  url: SITE_URL,

  logo: {
    "@type": "ImageObject",
    url: company.logo,
  },

  sameAs: company.social,

  address: {
    "@type": "PostalAddress",
    streetAddress: company.office.streetAddress,
    addressLocality: company.office.city,
    addressRegion: company.office.state,
    postalCode: company.office.postalCode,
    addressCountry: "IN",
  },

  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+919962157250",
      contactType: "customer service",
    },
    {
      "@type": "ContactPoint",
      telephone: "+914431000651",
      contactType: "customer service",
    },
  ],

  email: company.email,
};

// ===============================
// WEBSITE SCHEMA
// ===============================

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",

  "@id": `${SITE_URL}/#website`,

  name: company.name,

  url: SITE_URL,

  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },

  inLanguage: "en-IN",
};

// ===============================
// ROOT LAYOUT
// ===============================

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${tenor.variable} ${figTree.variable}`}>
        {children}

        <ToastContainer />

        {/* ===============================
            GLOBAL ORGANIZATION SCHEMA
        =============================== */}

        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(organizationSchema)}
        </Script>

        {/* ===============================
            GLOBAL WEBSITE SCHEMA
        =============================== */}

        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(websiteSchema)}
        </Script>
      </body>
    </html>
  );
}