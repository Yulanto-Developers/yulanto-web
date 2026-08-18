"use client";

import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/breadcrum/sections/breadcrumb";


const data = [
    {
        path: '/our-story',
        title: "Our Story",
        currentPage: "Our Story",
        backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
    },
     {
        path: '/our-team',
        title: "Meet Our Team",
        currentPage: "Meet Our Team",
        backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
    },
     {
        path: '/our-mission-vision',
        title: "Our Vision & Mission",
        currentPage: "Our Vision & Mission",
        backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
    }
    ,
     {
        path: '/our-philosophy',
        title: "Our Philosophy",
        currentPage: "Our Philosophy",
        backgroundImage: "/assets/images/breadcrumb/Company-Overview.jpg",
    },
     {
        path: '/why-choose-us',
        title: "Why Choose Us",
        currentPage: "Why Choose Us",
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