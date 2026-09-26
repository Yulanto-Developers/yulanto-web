"use client";

import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import PrivacyPolicy from "@/components/privacypolicy/PrivacyPolicy";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";



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
                  url: "https://yulanto.com/uae",
                },
              ]}
            />
      <Breadcrumbdata />
      <PrivacyPolicy/>
    
    </main>
  );
}