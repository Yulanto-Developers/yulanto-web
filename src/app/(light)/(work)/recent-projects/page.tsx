
import Breadcrumb from "@/components/breadcrum/sections/breadcrumb";
import { Metadata } from "next";
import breadcrumbimg from "../../../../../public/assets/images/breadcrumb/Company-Overview.jpg"
import { RecentProject } from "@/components/home/home/workComponents";
import BreadcurmbData from "@/components/breadcrum/sections/breadcrumbdata";


const page = () => {
    return (
        <>
        
            <BreadcurmbData />
            <RecentProject/>
        </>

    );

}

export default page;


