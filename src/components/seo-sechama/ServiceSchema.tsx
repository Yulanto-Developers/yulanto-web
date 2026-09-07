import Script from "next/script";

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
}

export default function ServiceSchema({
  name,
  description,
  url,
  image,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",

    "@id": `${url}#service`,

    name,

    description,

    url,

    provider: {
      "@type": "Organization",
      "@id": "https://yulanto-web.vercel.app/#organization",
      name: "Yulanto Web Creations",
      url: "https://yulanto-web.vercel.app",
    },

    areaServed: {
      "@type": "City",
      name: "Chennai",
    },

    ...(image
      ? {
          image: image.startsWith("http")
            ? image
            : `https://yulanto-web.vercel.app${image}`,
        }
      : {}),
  };

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify(schema)}
    </Script>
  );
}