import Header from "@/components/contact_us/header";
import Cta from "@/components/contact_us/cta";
import GetINTouch from "@/components/contact_us/getintouch";
import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";

export default function Page() {
  return (
    <main>
      <Breadcrumbdata />
      
      
      <Header />
      <Cta />
      <GetINTouch />
    </main>
  );
}