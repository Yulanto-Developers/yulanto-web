import { DesignStudioHeader, MainFooter } from "@/components/layout";
import PersonalPortfolioHeader from "@/components/layout/headers/PersonalPortfolioHeader";
import { ClientProviders } from "@/providers";
// CHANGED: Imported directly from FloatingIcon where our wrapper now lives safely
import FloatingActionsWrapper from "@/components/home/home/components/FloatingIcon";
import { QuoteProvider } from "@/components/home/home/myComponents/Content/QuoteContext";
import QuoteModal from "@/components/home/home/myComponents/Pop";
import FloatingQuoteButton from "@/components/home/home/myComponents/common/FloatingButton";
import Autopop from "@/components/home/home/myComponents/Autopop";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export default function DesignStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const newclient = new QueryClient();
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
        <FloatingActionsWrapper />
        <QuoteModal />
        <Autopop />
        <FloatingQuoteButton />
      </ClientProviders>
    </QuoteProvider>
  );
}
