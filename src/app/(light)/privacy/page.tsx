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
            url: "https://www.yulanto.com/",
          },
          {
            name: "Our Story",
            url: "https://www.yulanto.com/uae",
          },
        ]}
      />
      <Breadcrumbdata />
      <PrivacyPolicy />
    </main>
  );
}
