// import BreadcrumbBanner from "@/components/about/sections/breadcrumb";
import Client from "@/components/ourclients/client";
import Logoslider from "@/components/ourclients/logoslider";

export default function Page() {
  return (
    <main>
      {/* <BreadcrumbBanner title="Our Clients" currentPage="Our Clients" /> */}
      <Client />
      <Logoslider />
    </main>
  );
}