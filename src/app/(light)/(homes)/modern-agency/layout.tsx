import ModernAgencyFooter from "@/components/layout/footers/ModernAgencyFooter";
import PageHeader from "@/components/layout/headers/PageHeader";
import { ClientProviders } from "@/providers";

export default function ModernAgencyLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <ClientProviders>
            <PageHeader containerSize="container-1870" />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {children}
                    <ModernAgencyFooter />
                </div>
            </div>
        </ClientProviders>
    );
}

