
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
  title: "Privacy Policy | Yulanto Web Creations",
  description:
    "Learn how Yulanto Web Creations collects, uses, stores, and protects your personal information in our Privacy Policy.",
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
