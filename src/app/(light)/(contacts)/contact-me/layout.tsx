
import { PageHeader, PersonalPortfolioFooter } from "@/components/layout";
import { ClientProviders } from "@/providers";

export default function ContactMeLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <ClientProviders>
            <PageHeader />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {children}
                    <PersonalPortfolioFooter />
                </div>
            </div>
        </ClientProviders>
    );
}
