import { DesignStudioHeader, MainFooter } from "@/components/layout";
import PersonalPortfolioHeader from "@/components/layout/headers/PersonalPortfolioHeader";
import { ClientProviders } from "@/providers";
import FloatingActionsWrapper from "@/components/home/home/components/FloatingIcon";
import QuoteModal from "@/components/home/home/myComponents/Pop";
import "@/assets/css/style.css";
import "@/assets/css/custome.css";
import { generateSeo } from "@/lib/seo";

export const metadata = generateSeo({
  title: "Careers at Yulanto Web Creations | Join Our Growing Team",
  description:
    "Explore career opportunities at Yulanto Web Creations and join a growing team working on web design, development, SEO and digital solutions.",
});
export default function DesignStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   
      <ClientProviders>
        <PersonalPortfolioHeader />

        <div id="smooth-wrapper" style={{ backgroundColor: "#f5f5f5" }}>
          <div id="smooth-content">
            {children}


            <MainFooter />
          </div>
        </div>

        {/* Renders perfectly outside the scroll wrapper track */}
       
      </ClientProviders>
   
  );
}