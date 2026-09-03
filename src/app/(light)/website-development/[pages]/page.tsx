import BreadcurmbData from "@/components/breadcrum/sections/breadcrumbdata";
import {DynamicWebsiteDevelopment,CustomWebsiteDevelopment,PHPWebsiteDevelopment,ReactWebsiteDevelopment } from "@/components/home/home/website-development/index";

export default async function Page({
    params,
}: {
    params: Promise<{ pages: string }>;
}) {
    const { pages } = await params;

    console.log("URL:", pages);

    return (
        <>

            {pages === "dynamic-website-development" && (
                <>
                <DynamicWebsiteDevelopment />
                </>
            )}
            {pages === "custom-website-development" && (
                <>
                <CustomWebsiteDevelopment />
                </>
            )}
            {pages === "php-website-development" && (
                <>
                <PHPWebsiteDevelopment />
                </>
            )}
             {pages === "react-website-development" && (
                <>
                <ReactWebsiteDevelopment />
                </>
            )}
        </>
    );
}