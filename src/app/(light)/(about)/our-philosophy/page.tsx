import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import ZigzagCards from "@/components/home/home/ourphilosophy/ZigzagCards";
import  philosophyData  from "@/components/data/philosophyData"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Creative Portfolio Nextjs Template",
};




const HomePage = () => {
  return (
    <>
      <Breadcrumbdata />
      <ZigzagCards cards={philosophyData}
        pin="/assets/images/pin.png"
      />
    </>
  );
};

export default HomePage;