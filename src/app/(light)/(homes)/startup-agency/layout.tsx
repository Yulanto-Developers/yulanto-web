
import FloatingActions from "@/components/home/home/components/FloatingIcon";
import { MainFooter, StartupAgencyHeader } from "@/components/layout";
import { ClientProviders } from "@/providers";

export default function StartupAgencyLayout({ children }: {
    children: React.ReactNode;
}) {
    const handleChatOpen = () => {
        // Integrate your custom chat modal toggle logic or third-party CRM script launch triggers here
        console.log('Chat widget initialized');
    }
        return (
            <ClientProviders>
                <StartupAgencyHeader />
                <div id="smooth-wrapper" style={{ backgroundColor: "#f5f5f5" }}>
                    <div id="smooth-content">
                        {children}
                        <FloatingActions whatsappNumber="911234567890"
                            onChatClick={handleChatOpen} />
                        <MainFooter />
                    </div>
                </div>
            </ClientProviders>
        );
    }
