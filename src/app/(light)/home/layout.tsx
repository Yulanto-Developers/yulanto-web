import { MainFooter } from "@/components/layout";
import PersonalPortfolioHeader from "@/components/layout/headers/PersonalPortfolioHeader";
import { ClientProviders } from "@/providers";
import { QuoteProvider } from "@/components/home/home/myComponents/Content/QuoteContext";
import FloatingActionsWrapper from "@/components/home/home/components/FloatingIcon";

import FloatingQuoteButton from "@/components/home/home/myComponents/common/FloatingButton";
import QuoteModal from "@/components/home/home/myComponents/Pop";

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
        <FloatingActionsWrapper />
        <QuoteModal />

        <FloatingQuoteButton />
      </ClientProviders>
    </QuoteProvider>
  );
}