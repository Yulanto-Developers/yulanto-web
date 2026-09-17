import { generateSeo } from "@/lib/seo";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";

export const metadata = generateSeo({
  title: "Web Design Case Studies & Success Stories | Yulanto",
  description:
    "arun Yulanto's web design and development case studies, showcasing our approach, creative solutions and results for businesses across industries.",
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
            url: "https://yulanto-web.vercel.app/case-studies",
          },
        ]}
      />
          {children}
    </>
  );
}

