import { CreativeAgencyHeader, PersonalPortfolioFooter } from "@/components/layout";
import { ClientProviders } from "@/providers";

export default function PortfolioOneLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <ClientProviders>
            <CreativeAgencyHeader />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {children}
                    <PersonalPortfolioFooter />
                </div>
            </div>
        </ClientProviders>
    );
}
