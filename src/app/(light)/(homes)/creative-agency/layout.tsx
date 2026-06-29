import { CreativeAgencyFooter, CreativeAgencyHeader } from "@/components/layout";
import { ClientProviders } from "@/providers";

export default function CreativeAgencyLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <ClientProviders>
            <CreativeAgencyHeader />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {children}
                    <CreativeAgencyFooter/>
                </div>
            </div>
        </ClientProviders>
    );
}
