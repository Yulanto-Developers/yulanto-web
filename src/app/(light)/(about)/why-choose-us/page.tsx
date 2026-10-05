import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import { WhyChooseUs} from '@/components/home/home/whyChooseUs'
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Home - Creative Portfolio Nextjs Template",
// };

import { generateSeo } from "@/lib/seo";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";
export const metadata = generateSeo({
  title: "Why Choose Yulanto? | Website Designing Company in Chennai",
  description:
    "Discover why businesses choose Yulanto for quality website design, customized solutions, innovative technology, reliable support and on-time delivery.",
    slug: "why-choose-us",  
    image: "/assets/images/website-design-company-in-chennai.jpg",
  imageAlt: "Why Choose Us | Yulanto Web Creations",
});


const HomePage = () => {
  return (
    <>
    <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://www.yulanto.com/",
          },
          {
            name: "Why Choose us",
            url: "https://www.yulanto.com/why-choose-us",
          },
        ]}
      />
      <Breadcrumbdata />
      <WhyChooseUs />
    </>
  );
};

export default HomePage;