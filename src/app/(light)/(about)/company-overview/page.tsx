
import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import { Metadata } from "next";
import { AboutCompany, } from "@/components/home/home/aboutcomponents";
export const metadata: Metadata = {
    title: "About Me - Creative Portfolio Nextjs Template",
};

const page = () => {
    return (
        <>
            <Breadcrumbdata />
            <AboutCompany />
        </>

    );

}

export default page;