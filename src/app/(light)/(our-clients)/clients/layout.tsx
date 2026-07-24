import { DesignStudioHeader, MainFooter } from "@/components/layout";
import PersonalPortfolioHeader from "@/components/layout/headers/PersonalPortfolioHeader";
import { ClientProviders } from "@/providers";
// CHANGED: Imported directly from FloatingIcon where our wrapper now lives safely
import FloatingActionsWrapper from "@/components/home/home/components/FloatingIcon"; 

export default function DesignStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
      
    </ClientProviders>
  );
}