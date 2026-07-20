<<<<<<< HEAD

import { MainFooter, PageHeader, PersonalPortfolioFooter } from "@/components/layout";
import PersonalPortfolioHeader from "@/components/layout/headers/PersonalPortfolioHeader";
import { ClientProviders } from "@/providers";
import "../../../../public/assets/css/style.css";

export default function AboutMeLayout({ children }: {
=======
import { MainFooter, PageHeader } from "@/components/layout";
import PersonalPortfolioHeader from "@/components/layout/headers/PersonalPortfolioHeader";
import { ClientProviders } from "@/providers";

export default function AboutUsLayout({ children }: {
>>>>>>> a80227b55a041b9e01d45e52f7d81d7de66a2df2
    children: React.ReactNode;
}) {
    return (
        <ClientProviders>
            <PersonalPortfolioHeader />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {children}
                    <MainFooter />
                </div>
            </div>
        </ClientProviders>
    );
}
