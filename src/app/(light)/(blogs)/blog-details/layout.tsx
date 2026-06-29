import { MainFooter, PageHeader } from "@/components/layout";
import { ClientProviders } from "@/providers";

export default function BlogDetailsLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <ClientProviders>
            <PageHeader containerSize="container-1870" />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {children}
                    <MainFooter/>
                </div>
            </div>
        </ClientProviders>
    );
}
