import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import { Metadata } from "next";
import VisionMission from "@/components/home/home/visionmission/VisionMission"
import CoreValues from "@/components/home/home/visionmission/CoreValues"

// export const metadata: Metadata = {
//   title: "Home - Creative Portfolio Nextjs Template",
// };

import { generateSeo } from "@/lib/seo";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";

export const metadata = generateSeo({
  title: "Yulanto Mission & Vision, Core Values | Web Design Chennai",
  description:
    "Discover Yulanto Web Creations' core values, mission and vision, shaping our commitment to creative web design, development and SEO Friendly website in Chennai.",
});


const HomePage = () => {
  return (
    <>
    <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://yulanto-web.vercel.app/",
          },
          {
            name: "Our Mission & Vision",
            url: "https://yulanto-web.vercel.app/our-mission-vision",
          },
        ]}
      />
      <Breadcrumbdata />
      <VisionMission />
      <CoreValues />
    </>
  );
};

export default HomePage;