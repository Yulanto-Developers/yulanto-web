import { DesignStudioHeader, MainFooter } from "@/components/layout";
import PersonalPortfolioHeader from "@/components/layout/headers/PersonalPortfolioHeader";
import { ClientProviders } from "@/providers";
// CHANGED: Imported directly from FloatingIcon where our wrapper now lives safely
import FloatingActionsWrapper from "@/components/home/home/components/FloatingIcon";
import { QuoteProvider } from "@/components/home/home/myComponents/Content/QuoteContext";
import QuoteModal from "@/components/home/home/myComponents/Pop";
import FloatingQuoteButton from "@/components/home/home/myComponents/common/FloatingButton";
import "@/assets/css/style.css";
import "@/assets/css/custome.css";

import { generateSeo } from "@/lib/seo";
export const metadata = generateSeo({
  title: "Thank You for Contacting Yulanto | Chennai",
  description:
    "Thank you for contacting Yulanto Web Creations. Your enquiry has been received, and our team will contact you shortly.",
    slug:"thank-you",
});

export default function DesignStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QuoteProvider>
      <ClientProviders>
        <PersonalPortfolioHeader />

        <div id="smooth-wrapper" style={{ backgroundColor: "#f5f5f5" }}>
          <div id="smooth-content">
            {children}


            <MainFooter />
          </div>
        </div>

        {/* Renders perfectly outside the scroll wrapper track */}
        {/* <FloatingActionsWrapper />
        <QuoteModal />
        <FloatingQuoteButton /> */}
      </ClientProviders>
    </QuoteProvider>
  );
}