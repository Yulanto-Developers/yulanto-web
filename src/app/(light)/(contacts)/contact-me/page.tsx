
import { ContactMeArea, ContactMeTopIntro } from "@/components/contact/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Me - Creative Portfolio Nextjs Template",
};
const page = () => {
    return (
        <main>
            <ContactMeTopIntro />
            <ContactMeArea/>
        </main>
    );
};

export default page;