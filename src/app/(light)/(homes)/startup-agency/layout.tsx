
import { MainFooter, StartupAgencyHeader } from "@/components/layout";
import { ClientProviders } from "@/providers";

export default function StartupAgencyLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <ClientProviders>
            <StartupAgencyHeader />
            <div id="smooth-wrapper" style={{ backgroundColor: "#f5f5f5" }}>
                <div id="smooth-content">
                    {children}
                    <MainFooter />
                </div>
            </div>
        </ClientProviders>
    );
}
