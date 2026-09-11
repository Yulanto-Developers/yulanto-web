import Header from "@/components/contact_us/header";
import Cta from "@/components/contact_us/cta";
import GetINTouch from "@/components/contact_us/getintouch";
import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";

import { generateSeo } from "@/lib/seo";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";

export const metadata = generateSeo({
  title:
    "Web Design and development Company Near me | Contact Yulanto",
  description:
    "Contact Yulanto Web Creations for professional web design, web development, SEO and digital marketing solutions tailored to your business needs.",
});

export default function Page() {
  return (
    <main>
      <BreadcrumbSchema
                    items={[
                      {
                        name: "Home",
                        url: "https://yulanto-web.vercel.app/",
                      },
                      {
                        name: "Our Story",
                        url: "https://yulanto-web.vercel.app/tocontact",
                      },
                    ]}
                  />
      <Breadcrumbdata />
      
      
      <Header />
      <Cta />
      <GetINTouch />
    </main>
  );
}