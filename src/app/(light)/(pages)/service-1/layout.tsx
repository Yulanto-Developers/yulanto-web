import { CreativeAgencyFooter, PageHeader } from "@/components/layout";
import { ClientProviders } from "@/providers";

export default function ServiceLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <ClientProviders>
            <PageHeader headerFixed={true} stickyClass="sticky-bg" logoClassName="px-logo-pt" />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {children}
                    <CreativeAgencyFooter />
                </div>
            </div>
        </ClientProviders>
    );
}
