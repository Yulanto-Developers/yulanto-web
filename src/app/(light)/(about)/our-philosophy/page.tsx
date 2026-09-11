import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import { Metadata } from "next";
import GradientCardDemo from "@/components/home/home/ourPhilosophy/GradientCardDemo";

// export const metadata: Metadata = {
//   title: "Home - Creative Portfolio Nextjs Template",
// };

import { generateSeo } from "@/lib/seo";
import BreadcrumbSchema from "@/components/seo-sechama/BreadcrumbSchema";

export const metadata = generateSeo({
  title: "Our Philosophy | Yulanto Building Trust Through Better Web Designing in Chennai",
  description:
    "Explore Yulanto's philosophy of honesty, transparency, customer satisfaction and excellence, guiding how we create meaningful website design solutions.",
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
            name: "Our Philosophy",
            url: "https://yulanto-web.vercel.app/our-philosophy",
          },
        ]}
      />
      <Breadcrumbdata />
      <GradientCardDemo />
      
    </>
  );
};

export default HomePage;