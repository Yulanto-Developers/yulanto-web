import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import { Metadata } from "next";
import {  TeamSlider,  } from "@/components/home/home/ourTeam";
import MDProfile from "@/components/home/home/ourTeam/MDProfile";

// export const metadata: Metadata = {
//     title: "Home - Creative Portfolio Nextjs Template",
// };

import { generateSeo } from "@/lib/seo";

export const metadata = generateSeo({
  title: "Meet Our Team | Website Designers & Developers in Chennai | Yulanto",
  description:
    "Meet the Yulanto team of website designers and developers creating creative, user-friendly and high-performance digital solutions for businesses.",
});

const HomePage = () => {
    return (
        <>
           <Breadcrumbdata />
            <MDProfile/>
            <TeamSlider />
        </>
    );
};

export default HomePage;