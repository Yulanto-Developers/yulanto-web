import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import { Metadata } from "next";
import {  TeamSlider,  } from "@/components/home/home/ourTeam";
import MDProfile from "@/components/home/home/ourTeam/MDProfile";

export const metadata: Metadata = {
    title: "Home - Creative Portfolio Nextjs Template",
};

const HomePage = () => {
    return (
        <>
           {/* <Breadcrumbdata /> */}
            <MDProfile/>
            <TeamSlider />
        </>
    );
};

export default HomePage;