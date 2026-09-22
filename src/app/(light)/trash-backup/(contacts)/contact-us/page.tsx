
import { ContactUsAbout, ContactUsArea, ContactUsInfoArea, ContactUsTopIntro } from "@/components/contact/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us - Creative Portfolio Nextjs Template",
};
const page = () => {
    return (
        <main>
            <ContactUsTopIntro />
            <ContactUsArea/>
            <ContactUsAbout/>
            <ContactUsInfoArea/>
        </main>
    );
};

export default page;