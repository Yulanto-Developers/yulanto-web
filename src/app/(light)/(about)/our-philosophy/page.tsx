import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import { Metadata } from "next";
import GradientCardDemo from "@/components/home/home/ourphilosophy/GradientCardDemo";
import { useAOS } from '@/components/hooks/useAOS';

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