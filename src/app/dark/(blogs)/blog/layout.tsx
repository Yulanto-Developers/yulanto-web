import { MainFooter, PageHeader } from "@/components/layout";
import { ClientProviders } from "@/providers";

export default function BlogLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <ClientProviders>
            <PageHeader/>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {children}
                    <MainFooter sectionBgClass="#1C1D20" copyrightClassName="px-orange-style" />
                </div>
            </div>
        </ClientProviders>
    );
}
