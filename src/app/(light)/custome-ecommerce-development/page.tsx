
import Breadcrumb from "@/components/breadcrum/sections/breadcrumb";
import { Metadata } from "next";
import breadcrumbimg from "../../../../../public/assets/images/breadcrumb/Company-Overview.jpg"
import { RecentProject } from "@/components/home/home/workComponents";
import BreadcurmbData from "@/components/breadcrum/sections/breadcrumbdata";
import Ecommerce from "@/components/home/home/custome-ecommerce/Ecommerce";
export const metadata: Metadata = {
    title: "Custome Ecommerce Development",
};

const page = () => {
    return (
        <>
            <BreadcurmbData />
            <Ecommerce />

        </>

    );

}

export default page;


