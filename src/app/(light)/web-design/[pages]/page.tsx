import BreadcurmbData from "@/components/breadcrum/sections/breadcrumbdata";
import Startupwebsitedesgin from "@/components/home/home/web-desgin/Startup-website-desgin";

export default async function Page({
    params,
}: {
    params: Promise<{ pages: string }>;
}) {
    const { pages } = await params;

    console.log("URL:", pages);

    return (
        <>

            {pages === "startup-webiste-design" && (
                <>
        <Startupwebsitedesgin />
        </>
            )}
        </>
    );
}