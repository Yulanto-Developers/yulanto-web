import { DesignStudioHeader, MainFooter } from "@/components/layout";
import PersonalPortfolioHeader from "@/components/layout/headers/PersonalPortfolioHeader";
import { ClientProviders } from "@/providers";
// CHANGED: Imported directly from FloatingIcon where our wrapper now lives safely
import FloatingActionsWrapper from "@/components/home/home/components/FloatingIcon"; 
import "@/assets/css/style.css";

import { generateSeo } from "@/lib/seo";
export const metadata = generateSeo({
  title: "Top Web Design Firms from Chennai for Singapore & Malaysia Companies | Yulanto",
  description:
    "Yulanto is among the top web design firms helping Singapore and Malaysia companies build fast, user-focused websites and strengthen their online presence.",
});

export default function DesignStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 return <>{children}</>;
}