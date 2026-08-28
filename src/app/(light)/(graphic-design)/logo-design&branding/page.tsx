import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import Header from "@/components/logo-design/header"
import Thelogo from "@/components/logo-design/second"
import Logport from "@/components/logo-design/logoportfolio"
import Branding from "@/components/logo-design/branding"
import LogoServicesDemo from "@/components/logo-design/services";
import { ShuffleHero } from "@/components/logo-design/shuffle-grid";



export default function Page() {
  return (
    <main>
      <Breadcrumbdata />
      <Header />
      <Thelogo/>
      <Logport />
      <Branding />
      <LogoServicesDemo />
      <ShuffleHero />
      
     
    </main>
  );
}