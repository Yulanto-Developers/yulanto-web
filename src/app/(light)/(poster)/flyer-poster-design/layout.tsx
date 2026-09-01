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
// DesignStudioLayout component
export default function DesignStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QuoteProvider>
      <ClientProviders>
        <PersonalPortfolioHeader />

        <div 
          id="smooth-wrapper" 
          style={{ backgroundColor: "#f5f5f5", overflowX: "hidden", width: "100%" }}
        >
          <div id="smooth-content" style={{ overflowX: "hidden", width: "100%" }}>
            {children}
            <MainFooter />
          </div>
        </div>

        <FloatingActionsWrapper />
        <QuoteModal />
        <FloatingQuoteButton />
      </ClientProviders>
    </QuoteProvider>
  );
}