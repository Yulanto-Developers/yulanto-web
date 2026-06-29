import PersonalPortfolioHeader from "@/components/layout/headers/PersonalPortfolioHeader";
import { PersonalPortfolioFooter } from "@/components/layout";
import { ClientProviders } from "@/providers";

export default function PersonalPortfolioLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <ClientProviders>
            <PersonalPortfolioHeader />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {children}
                    <PersonalPortfolioFooter />
                </div>
            </div>
        </ClientProviders>
    );
}
