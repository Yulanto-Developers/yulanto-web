import { generateSeo } from "@/lib/seo";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";

export const metadata = generateSeo({
  title: "Recent Web Design Projects | Recent Web Design Works | Yulanto",
  description:
    "Explore Yulanto's recent web design and development projects in Chennai for our clients across the India, USA, UAE, Singapore, UK, and Europe.",
});

export default function DesignStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://yulanto-web.vercel.app/",
          },
          {
            name: "Our Mission & Vision",
            url: "https://yulanto-web.vercel.app/recent-project",
          },
        ]}
      />
          {children}
    </>
  );
}

