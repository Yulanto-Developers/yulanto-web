import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import { WhyChooseUs} from '@/components/home/home/whyChooseUs'
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Home - Creative Portfolio Nextjs Template",
// };

import { generateSeo } from "@/lib/seo";

export const metadata = generateSeo({
  title: "Why Choose Yulanto? | Website Designing Company in Chennai",
  description:
    "Discover why businesses choose Yulanto for quality website design, customized solutions, innovative technology, reliable support and on-time delivery.",
});


const HomePage = () => {
  return (
    <>
      <Breadcrumbdata />
      <WhyChooseUs />
    </>
  );
};

export default HomePage;