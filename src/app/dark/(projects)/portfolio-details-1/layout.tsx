import { MainFooter, PageHeader } from "@/components/layout";
import { ClientProviders } from "@/providers";

export default function PortfolioDetailsLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <ClientProviders>
            <PageHeader />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {children}
                    <MainFooter />
                </div>
            </div>
        </ClientProviders>
    );
}
