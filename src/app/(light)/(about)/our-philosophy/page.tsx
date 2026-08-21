import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import { Metadata } from "next";
import GradientCardDemo from "@/components/home/home/ourPhilosophy/GradientCardDemo";

export const metadata: Metadata = {
  title: "Home - Creative Portfolio Nextjs Template",
};




const HomePage = () => {
  return (
    <>
      <Breadcrumbdata />
      <GradientCardDemo />
      
    </>
  );
};

export default HomePage;