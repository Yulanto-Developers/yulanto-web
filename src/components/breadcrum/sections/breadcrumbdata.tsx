"use client";

import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/breadcrum/sections/breadcrumb";


const data = [
    {
        path: '/company-overview',
        title: "Company Overview",
        currentPage: "Company Overview",
        backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
    }
];



export default function BreadcurmbData() {
    const pathname = usePathname();

    const page = data.find((item) => item.path == pathname)

    console.log(pathname);
    if (!page) return null;
    return (
        <>
            <Breadcrumb title={page.title}
                currentPage={page.currentPage}
                backgroundImage={page.backgroundImage} />
        </>
    );
}