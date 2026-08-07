
import Client from "@/components/ourclients/client";
import Logoslider from "@/components/ourclients/logoslider";
import GlobalComp from "@/components/ourclients/globalcomp";
import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";

 

export default function Page() {
  return (
    <main>
     <Breadcrumbdata />
 
      <Client />
      <Logoslider />
      <GlobalComp />
    </main>
  );
}