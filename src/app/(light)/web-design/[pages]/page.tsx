import BreadcurmbData from "@/components/breadcrum/sections/breadcrumbdata";
import Corporatewebistedesgin from "@/components/home/home/web-desgin/Corporate-webiste-desgin";
import Startupwebsitedesgin from "@/components/home/home/web-desgin/Startup-website-desgin";
import Websiteredesign from "@/components/home/home/web-desgin/Website-redesign";

export default async function Page({
    params,
}: {
    params: Promise<{ pages: string }>;
}) {
    const { pages } = await params;

    console.log("URL:", pages);

    return (
        <>

            {pages === "startup-website-design" && (
                <>
                    <Startupwebsitedesgin />
                </>
            )}
            {pages === "corporate-website-design" && (
                <>
                    <Corporatewebistedesgin />
                </>
            )}
            {pages === "website-redesign" && (
                <>
                    <Websiteredesign />
                </>
            )}
        </>
    );
}