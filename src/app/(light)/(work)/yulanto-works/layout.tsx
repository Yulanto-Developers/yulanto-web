import { generateSeo } from "@/lib/seo";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";

export const metadata = generateSeo({
  title: "Web Design & Development Companies in Chennai for All Industries | Yulanto",
  description:
    "Explore Yulanto’s web design, development and digital solutions for companies across diverse industries, from IT and real estate to healthcare, engineering, electronics and more.",
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
            url: "https://yulanto.com/industry-we-serve",
          },
        ]}
      />
          {children}
    </>
  );
}

