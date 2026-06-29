import BackgroundProvider from "@/providers/BackgroundProvider";
import PageHeader from "@/components/layout/headers/PageHeader";
import MainFooter from "@/components/layout/footers/MainFooter";
import { ClientProviders } from "@/providers";

export default function CreativeStudioLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <BackgroundProvider bodyClass="px-hero-3-bg" bgColor="#FEFFF8" bgImage="/assets/img/shape/home-3-shape.png" >   {/* manage page background, className & image */}
            <ClientProviders>
                <PageHeader containerSize="container-1750" />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        {children}
                        <MainFooter />
                    </div>
                </div>
            </ClientProviders>
        </BackgroundProvider>
    );
}
