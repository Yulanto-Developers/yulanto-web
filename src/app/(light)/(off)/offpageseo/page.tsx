import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import OFF from "@/components/offpageseo/header"
import Why from "@/components/offpageseo/whydoyou"
import Beneift from"@/components/offpageseo/benefits"
import Back from "@/components/offpageseo/backlink"
import Faq from "@/components/offpageseo/faq"
import Grow from "@/components/offpageseo/Grow"
import Offabout from "@/components/offpageseo/OffseoAbout"



export default function Page() {
  return (
    <main>
      <Breadcrumbdata />
      <OFF />
      <Why />
      <Beneift />
      <Back />
      <Offabout />
      <Faq />
      
      <Grow />
     
    </main>
  );
}