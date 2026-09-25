
import Breadcrumb from "@/components/breadcrum/sections/breadcrumb";
import { Metadata } from "next";
import breadcrumbimg from "../../../../../public/assets/images/breadcrumb/Company-Overview.jpg"
import { RecentProject } from "@/components/home/home/workComponents";
import BreadcurmbData from "@/components/breadcrum/sections/breadcrumbdata";
import Ecommerce from "@/components/home/home/custome-ecommerce/Ecommerce";
import PortalWeb from "@/components/home/home/portal-web/PortalWeb";
export const metadata: Metadata = {
    title: "Portal Web Development",
};

const page = () => {
    return (
        <>
            <BreadcurmbData />
            <PortalWeb />

        </>

    );

}

export default page;


