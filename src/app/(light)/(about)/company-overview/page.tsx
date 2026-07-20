
import Breadcrumb from "@/components/about/sections/breadcrumb";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "About Me - Creative Portfolio Nextjs Template",
};

const page = () => {
    return(
        <Breadcrumb title="Company Overview" currentPage="Company Overview" />
    );
 
}

export default page;