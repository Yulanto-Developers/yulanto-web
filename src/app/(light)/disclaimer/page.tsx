"use client";

import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import Disclaimer from "@/components/disclaimer/Disclaimer";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";
import TermsConditions from "@/components/termsconditions/TermsConditions";



export default function CareersPage() {
  return (
    <main>
      <BreadcrumbSchema
              items={[
                {
                  name: "Home",
                  url: "https://yulanto.com/",
                },
                {
                  name: "Our Story",
                  url: "https://yulanto.com/disclaimer",
                },
              ]}
            />
      <Breadcrumbdata />
      <Disclaimer/>
     
    
    </main>
  );
}