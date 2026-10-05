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
import "@/assets/css/custome2.css";
import 'aos/dist/aos.css';
import AOSInit from '@/components/AOSInit/AOSInit'
import '@/assets/css/textAnimations.css';
export default function DesignStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QuoteProvider>
      <ClientProviders>
        <PersonalPortfolioHeader />

        <div id="smooth-wrapper" style={{ backgroundColor: "#fff" }}>
          <div id="smooth-content">
            <AOSInit />
            {children}


            <MainFooter />
          </div>
        </div>

        {/* Renders perfectly outside the scroll wrapper track */}
        <FloatingActionsWrapper />
        <QuoteModal />
        <FloatingQuoteButton />
      </ClientProviders>
    </QuoteProvider>
  );
}