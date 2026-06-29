import OfficeLocationsSection from "@/components/contact/sections/OfficeLocationsSection";
import { ContactArea } from "@/components/contact/sections";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact - Creative Portfolio Nextjs Template",
};
const page = () => {
    return (
        <main>
            <ContactArea />
            <OfficeLocationsSection sectionBgColor="#1C1D20" />
        </main>
    );
};

export default page;