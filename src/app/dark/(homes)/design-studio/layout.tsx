import { DesignStudioHeader, MainFooter } from "@/components/layout";
import { ClientProviders } from "@/providers";

export default function DesignStudioLayout({ children }: {
    children: React.ReactNode;
}) {

    return (
        <ClientProviders>
            <DesignStudioHeader />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {children}
                    <MainFooter />
                </div>
            </div>
        </ClientProviders>
    );
}
