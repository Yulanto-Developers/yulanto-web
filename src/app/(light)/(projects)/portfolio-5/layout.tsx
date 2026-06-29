import { PageHeader, PersonalPortfolioFooter } from "@/components/layout";
import BackgroundProvider from "@/providers/BackgroundProvider";
import { ClientProviders } from "@/providers";

export default function PortfolioFiveLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <BackgroundProvider bgColor="#f5f5f5">
            <ClientProviders>
                <PageHeader />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        {children}
                        <PersonalPortfolioFooter />
                    </div>
                </div>
            </ClientProviders>
        </BackgroundProvider>
    );
}
