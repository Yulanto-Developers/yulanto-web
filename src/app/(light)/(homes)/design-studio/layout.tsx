import { DesignStudioHeader, MainFooter } from "@/components/layout";
import { ClientProviders } from "@/providers";

export default function DesignStudioLayout({ children }: {
    children: React.ReactNode;
}) {

    return (
        <ClientProviders>
            <DesignStudioHeader />
            <div id="smooth-wrapper" style={{ backgroundColor: "#f5f5f5" }}>
                <div id="smooth-content">
                    {children}
                    <MainFooter />
                </div>
            </div>
        </ClientProviders>
    );
}
