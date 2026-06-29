import BackgroundProvider from "@/providers/BackgroundProvider";
import { MainFooter, PageHeader } from "@/components/layout";
import { ClientProviders } from "@/providers";

export default function CreativeStudioLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <BackgroundProvider bodyClass="px-hero-3-bg" bgImage="/assets/img/shape/home-3-shape.png">
            <ClientProviders>
                <PageHeader containerSize="container-1750" />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        {children}
                        <MainFooter sectionBgClass="#1C1D20"/>
                    </div>
                </div>
            </ClientProviders>
        </BackgroundProvider>
    );
}
