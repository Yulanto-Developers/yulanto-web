import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import { Metadata } from "next";
import { AboutCompany, TeamSlider, TimelineDemo, VideoCarousel } from "@/components/home/home/aboutcomponents";
import GalleryData from "@/components/home/home/aboutcomponents/GalleryData";
import MDProfile from "@/components/home/home/aboutcomponents/MDProfile";

export const metadata: Metadata = {
    title: "Home - Creative Portfolio Nextjs Template",
};
 const tutorialVideos = [
    {
      src: 'https://example.com/tutorial1.mp4',
      title: 'React Basics',
      type: 'video/mp4'
    },
    {
      src: 'https://example.com/tutorial2.mp4',
      title: 'TypeScript Guide',
      type: 'video/mp4'
    }
  ];
const HomePage = () => {
    return (
        <>
            <Breadcrumbdata />
            <AboutCompany />
            <MDProfile/>
            <TeamSlider />
            <GalleryData />
            <TimelineDemo /> 
             <VideoCarousel  videos={tutorialVideos}
        autoplay={true}  />
           
        </>
    );
};

export default HomePage;