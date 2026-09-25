import { DesignStudioHeader, MainFooter } from "@/components/layout";
import PersonalPortfolioHeader from "@/components/layout/headers/PersonalPortfolioHeader";
import { ClientProviders } from "@/providers";
// CHANGED: Imported directly from FloatingIcon where our wrapper now lives safely
import FloatingActionsWrapper from "@/components/home/home/components/FloatingIcon"; 
import "@/assets/css/style.css";

import { generateSeo } from "@/lib/seo";
export const metadata = generateSeo({
  title: "Web Designers & Developers from Chennai for UAE Companies | Yulanto",
  description:
    "Yulanto helps UAE companies build a strong online presence with professional web designers, developers and digital solutions tailored to their goals.",
});
export default function DesignStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}