
import { MainFooter } from "@/components/layout";
import PersonalPortfolioHeader from "@/components/layout/headers/PersonalPortfolioHeader";
import { ClientProviders } from "@/providers";
import 'aos/dist/aos.css'; 
import AOSInit from '@/components/AOSInit/AOSInit'
import '@/assets/css/textAnimations.css';
import "@/assets/css/style.css";
import "@/assets/css/style1.css";
import "glightbox/dist/css/glightbox.css";
import { generateSeo } from "@/lib/seo";

export const metadata = generateSeo({
  title: "License & Copyright | Yulanto Web Creations",
  description:
    "Read the License & Copyright information for Yulanto Web Creations. Learn how our website content, designs, code, and materials are protected and may be used.",
});
export default function AboutUsLayout({ children }: {

    children: React.ReactNode;
}) {
    return (
        <ClientProviders>
            <PersonalPortfolioHeader />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <AOSInit />  
                    {children}
                    <MainFooter />
                </div>
            </div>
        </ClientProviders>
    );
}
