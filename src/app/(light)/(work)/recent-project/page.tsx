
import Breadcrumb from "@/components/about/sections/breadcrumb";
import { Metadata } from "next";
import breadcrumbimg from "../../../../../public/assets/images/breadcrumb/Company-Overview.jpg"
import { RecentProject } from "@/components/home/home/workComponents";
export const metadata: Metadata = {
    title: "About Me - Creative Portfolio Nextjs Template",
};

const page = () => {
    return (
        <>
            <Breadcrumb title="Recent Project" currentPage="Company Overview" />
            <RecentProject />
        </>

    );

}

export default page;


