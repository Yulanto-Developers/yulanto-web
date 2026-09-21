"use client";

import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import LicenseCopyright from "@/components/license/License";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";



export default function CareersPage() {
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
                  url: "https://yulanto-web.vercel.app/license",
                },
              ]}
            />
      <Breadcrumbdata />
      <LicenseCopyright/>
    
    </main>
  );
}