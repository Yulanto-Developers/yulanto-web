import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import { Metadata } from "next";
import { AboutCompany, TimelineSlider, VideoGrid } from "@/components/home/home/aboutcomponents";
import GalleryGrid  from "@/components/home/home/aboutcomponents/GalleryGrid";
// import "./globals.scss";


export const metadata: Metadata = {
  title: "Home - Creative Portfolio Nextjs Template",
};




const HomePage = () => {
  return (
    <>
      <Breadcrumbdata />
      <AboutCompany />
      <TimelineSlider />
      <GalleryGrid  />
      <VideoGrid columns={2} />

    </>
  );
};

export default HomePage;