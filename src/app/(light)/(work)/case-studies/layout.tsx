import { generateSeo } from "@/lib/seo";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";

export const metadata = generateSeo({
  title: "Web Design Case Studies & Success Stories | Yulanto",
  description:
    "Explore Yulanto's web design and development case studies, showcasing our approach, creative solutions and results for businesses across industries.",
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
            url: "https://yulanto.com/case-studies",
          },
        ]}
      />
          {children}
    </>
  );
}

