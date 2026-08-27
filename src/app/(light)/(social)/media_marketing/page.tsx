import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import Header from "@/components/media/header";
import Traffic from "@/components/media/traffic";
import Social from "@/components/media/social";
import Benift from "@/components/media/benefits";
import  Card  from "@/components/media/promote";
import Faq from "@/components/media/faq"
import Last from "@/components/media/last"

export default function Page() {
  return (
    <main>
      <Breadcrumbdata />
      <Header />
      <Traffic />
      <Social />
      <Benift/>
      <Card />
       <Faq/>
       <Last/>

     

     
     
    </main>
  );
}