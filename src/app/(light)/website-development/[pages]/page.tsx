import BreadcurmbData from "@/components/breadcrum/sections/breadcrumbdata";
import DynamicWebsiteDevelopment from "@/components/home/home/website-development/Dynamic-Website-Development";

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
        </>
    );
}