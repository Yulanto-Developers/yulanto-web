import { generateSeo } from "@/lib/seo";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";

export const metadata = generateSeo({
  title: "Portfolio | Web Design Services & Creative Work | Yulanto",
  description:
    "Discover Web Design Services & creative work in yulanto across website design, branding, business cards, brochures and flyers, crafted for businesses across different industries.",
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
            url: "https://yulanto.com/",
          },
          {
            name: "Our Mission & Vision",
            url: "https://yulanto.com/portfolio",
          },
        ]}
      />
          {children}
    </>
  );
}

