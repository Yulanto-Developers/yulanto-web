import { DesignStudioHeader } from "@/components/layout";
import { ClientProviders } from "@/providers";

export default function PortfolioInteractiveLayout({ children }: {
    children: React.ReactNode;
}) {

    return (
        <ClientProviders>
            <DesignStudioHeader />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {children}
                </div>
            </div>
        </ClientProviders>
    );
}
