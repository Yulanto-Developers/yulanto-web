import { DesignStudioHeader, MainFooter } from "@/components/layout";
import PersonalPortfolioHeader from "@/components/layout/headers/PersonalPortfolioHeader";
import { ClientProviders } from "@/providers";
// CHANGED: Imported directly from FloatingIcon where our wrapper now lives safely
import FloatingActionsWrapper from "@/components/home/home/components/FloatingIcon";
import "@/assets/css/style.css";

import { generateSeo } from "@/lib/seo";
export const metadata = generateSeo({
  title:
    "best web design firms from Chennai for Europe & East Windsor | Yulanto",
  description:
    "best web design firms for Europe & East Windsor, delivering modern website design, custom development and digital solutions for growth.",
});
export default function DesignStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
