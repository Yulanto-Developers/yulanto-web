import BackgroundProvider from "@/providers/BackgroundProvider";
import { DesignStudioHeader } from "@/components/layout";
import { ClientProviders } from "@/providers";

export default function PortfolioMixSlicerLayout({ children }: {
    children: React.ReactNode;
}) {

    return (
        <BackgroundProvider bgImage="#f5f5f5">
            <ClientProviders>
                <DesignStudioHeader />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        {children}
                    </div>
                </div>
            </ClientProviders>
        </BackgroundProvider>
    );
}
