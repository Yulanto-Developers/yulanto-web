import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import Header from "@/components/WooCommerce-Development/header";
import Second from "@/components/WooCommerce-Development/second";
import Bussiness from "@/components/WooCommerce-Development/Business";
import CustomDevelopment from "@/components/WooCommerce-Development/Custom-Development";
import WooCommerceSolutions from "@/components/WooCommerce-Development/WooCommerce-solutions";
import StoreFeaturesSection from "@/components/WooCommerce-Development/Ecommerce-Features";
import Why from "@/components/WooCommerce-Development/Why-Choose";
import Faq from "@/components/WooCommerce-Development/Faq";
import Last from "@/components/WooCommerce-Development/last";


export default function Page() {
  return (
    <main>
      <Breadcrumbdata />
      <Header />
      <Second />
      <Bussiness />
      <CustomDevelopment />
      <WooCommerceSolutions />
      <StoreFeaturesSection />
      <Why  />
      <Faq />
      <Last />

     

     
     
    </main>
  );
}