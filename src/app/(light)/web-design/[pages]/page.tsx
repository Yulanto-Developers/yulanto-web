import BreadcurmbData from "@/components/breadcrum/sections/breadcrumbdata";
import Corporatewebistedesgin from "@/components/home/home/web-desgin/Corporate-webiste-desgin";
import Landingpagedesgin from "@/components/home/home/web-desgin/landing-page-desgin";
import Startupwebsitedesgin from "@/components/home/home/web-desgin/Startup-website-desgin";
import Uiuxdesgin from "@/components/home/home/web-desgin/ui-ux-desgin";
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
            {pages === "landing-page-desgin" && (
                <>
                    <Landingpagedesgin />
                </>
            )}
            {pages === "ui-ux-desgin" && (
                <>
                    <Uiuxdesgin />
                </>
            )}
        </>
    );
}