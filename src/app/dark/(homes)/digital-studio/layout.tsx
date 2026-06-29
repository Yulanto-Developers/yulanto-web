import { DigitalStudioFooter, PageHeader } from "@/components/layout";
import BackgroundProvider from "@/providers/BackgroundProvider";
import { ClientProviders } from "@/providers";

export default function DigitalStudioLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <BackgroundProvider bodyClass="bf-dark">
            <ClientProviders>
                <PageHeader containerSize="container-1750" />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        {children}
                        <DigitalStudioFooter />
                    </div>
                </div>
            </ClientProviders>
        </BackgroundProvider>
    );
}
