
import StartupAgencyHeader from "@/components/layout/headers/StartupAgencyHeader";
import MainFooter from "@/components/layout/footers/MainFooter";
import { ClientProviders } from "@/providers";

export default function StartupAgencyLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <ClientProviders>
            <StartupAgencyHeader />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {children}
                    <MainFooter sectionBgClass="#1C1D20"/>
                </div>
            </div>
        </ClientProviders>
    );
}
