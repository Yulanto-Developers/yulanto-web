import { ServiceTwoBanner, ServiceTwoBannerIntro,InnerServiceSection } from "@/components/pages/service-2/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Service 2 - Creative Portfolio Nextjs Template",
};
const page = () => {
    return (
        <main>
            <ServiceTwoBannerIntro/>
            <ServiceTwoBanner/>
            <InnerServiceSection/>
        </main>
    );
};

export default page;