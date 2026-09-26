
import { MainFooter } from "@/components/layout";
import PersonalPortfolioHeader from "@/components/layout/headers/PersonalPortfolioHeader";
import { ClientProviders } from "@/providers";
import 'aos/dist/aos.css';
import AOSInit from '@/components/AOSInit/AOSInit'
import '@/assets/css/textAnimations.css';
import "@/assets/css/style.css";
import "@/assets/css/style1.css";
import "glightbox/dist/css/glightbox.css";
import { QuoteProvider } from "@/components/home/home/myComponents/Content/QuoteContext";
import FloatingActionsWrapper from "@/components/home/home/components/FloatingIcon";
import QuoteModal from "@/components/home/home/myComponents/Pop";
import FloatingQuoteButton from "@/components/home/home/myComponents/common/FloatingButton";

export default function AboutUsLayout({ children }: {

    children: React.ReactNode;
}) {
    return (
        <QuoteProvider>
            <ClientProviders>

                <PersonalPortfolioHeader />

                <div id="smooth-wrapper">
                    <div id="smooth-content">

                        <AOSInit />

                        {children}

                        <MainFooter />

                    </div>
                </div>

                <FloatingActionsWrapper />

                <QuoteModal />

                <FloatingQuoteButton />

            </ClientProviders>
        </QuoteProvider>
    );
}
