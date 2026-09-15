import { DesignStudioHeader, MainFooter } from "@/components/layout";
import PersonalPortfolioHeader from "@/components/layout/headers/PersonalPortfolioHeader";
import { ClientProviders } from "@/providers";
// CHANGED: Imported directly from FloatingIcon where our wrapper now lives safely
import FloatingActionsWrapper from "@/components/home/home/components/FloatingIcon";
import "@/assets/css/style.css";

import { generateSeo } from "@/lib/seo";
export const metadata = generateSeo({
  title: "Web Design & Development from Chennai for USA Companies | Yulanto",
  description:
    "Yulanto partners with USA companies to create professional web design, development and digital experiences designed to support business growth.",
});
export default function DesignStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
