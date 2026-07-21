
import Breadcrumb from "@/components/about/sections/breadcrumb";
import { Metadata } from "next";
import { AboutCompany, } from "@/components/home/home/aboutcomponents";
export const metadata: Metadata = {
    title: "About Me - Creative Portfolio Nextjs Template",
};

const page = () => {
    return(
        <>
        <Breadcrumb title="Company Overview" currentPage="Company Overview" />
        <AboutCompany/>
        </>
     
    );
 
}

export default page;