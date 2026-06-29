
import MinimalPortfolioFooter from "@/components/layout/footers/MinimalPortfolioFooter";
import BackgroundProvider from "@/providers/BackgroundProvider";
import { DesignStudioHeader } from "@/components/layout";
import { ClientProviders } from "@/providers";

export default function MinimalPortfolioLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <BackgroundProvider bgColor="#000" bodyClass="bf-dark">
            <ClientProviders>
                <DesignStudioHeader />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        {children}
                        <MinimalPortfolioFooter />
                    </div>
                </div>
            </ClientProviders>
        </BackgroundProvider>
    );
}
