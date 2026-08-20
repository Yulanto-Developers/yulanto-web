import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import { Metadata } from "next";
import VisionMission from "@/components/home/home/visionmission/VisionMission"
import CoreValues from "@/components/home/home/visionmission/CoreValues"

export const metadata: Metadata = {
  title: "Home - Creative Portfolio Nextjs Template",
};




const HomePage = () => {
  return (
    <>
      <Breadcrumbdata />
      <VisionMission />
      <CoreValues />
    </>
  );
};

export default HomePage;