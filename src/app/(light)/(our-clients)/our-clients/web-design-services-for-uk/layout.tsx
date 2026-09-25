import { DesignStudioHeader, MainFooter } from "@/components/layout";
import PersonalPortfolioHeader from "@/components/layout/headers/PersonalPortfolioHeader";
import { ClientProviders } from "@/providers";
// CHANGED: Imported directly from FloatingIcon where our wrapper now lives safely
import FloatingActionsWrapper from "@/components/home/home/components/FloatingIcon"; 
import "@/assets/css/style.css";

import { generateSeo } from "@/lib/seo";
export const metadata = generateSeo({
  title: "Web Designing & Development from Chennai for UK Companies | Yulanto",
  description:
    "Yulanto provides professional Web Designing & Develop solutions for UK companies, with custom websites and reliable digital solutions built around business needs.",
});
export default function DesignStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}