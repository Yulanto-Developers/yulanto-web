import { ServiceAbout, ServiceBanner, ServiceCapsule, ServiceOfferings, ServiceTextSlider,ServiceTestimonial, ServiceBrand, ServiceStep,ServiceFaq, ServiceSocial } from "@/components/pages/service-1/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Service 1 - Creative Portfolio Nextjs Template",
};
const page = () => {
    return (
        <main>
            <ServiceBanner />
            <ServiceTextSlider />
            <ServiceAbout />
            <ServiceOfferings />
            <ServiceCapsule />
            <ServiceTestimonial/>
            <ServiceBrand/>
            <ServiceStep sectionSpacing="mb-140"/>
            <ServiceFaq/>
            <ServiceSocial/>
        </main>
    );
};

export default page;


