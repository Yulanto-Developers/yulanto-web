import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import Header from "@/components/company-profile/header";
import Second from "@/components/company-profile/hero-04";
import BrochureNeeds from "@/components/company-profile/brochure-needs";
import Design from "@/components/company-profile/design-formats";
import Services from "@/components/company-profile/design-services";
import Why from "@/components/company-profile/why-choose";
import Show from "@/components/company-profile/interactive-book-showcase"
import { GraphicDesignSection } from "@/components/company-profile/brochuredesign";
import Faq from "@/components/company-profile/faq"

export default function Page() {
  return (
    <main>
      {/* Test each component line by line to locate the undefined import */}
      <Breadcrumbdata />
      <Header />
      <Second
        primaryImage="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
        secondaryImage="https://images.unsplash.com/photo-1550585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
        animation="subtle"
      />
      <BrochureNeeds />
      <Design />
      <Services />
      <Why />
      <Show />
      <GraphicDesignSection />
      <Faq />
    </main>
  );
}