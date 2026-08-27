import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import { WhyChooseUs} from '@/components/home/home/whyChooseUs'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Creative Portfolio Nextjs Template",
};




const HomePage = () => {
  return (
    <>
      <Breadcrumbdata />
      <WhyChooseUs />
    </>
  );
};

export default HomePage;