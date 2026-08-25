import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import Header from "@/components/ads/header"
import Google from "@/components/ads/google"
import Business from "@/components/ads/Business"
import Campaign from "@/components/ads/Campaign"
import Process from "@/components/ads/Process"
import Why from "@/components/ads/WhyChoose"
import Digital from "@/components/ads/digital"



export default function Page() {
  return (
    <main>
      <Breadcrumbdata />
      <Header />
      <Google />
      <Business />
      <Campaign />
      <Process />
      <Why />
      <Digital />

     
     
    </main>
  );
}