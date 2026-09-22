
import { ContactArea, OfficeLocationsSection } from "@/components/contact/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact - Creative Portfolio Nextjs Template",
};
const page = () => {
    return (
        <main>
            <ContactArea />
            <OfficeLocationsSection sectionBgColor="#F7F7F7"/>
        </main>
    );
};

export default page;