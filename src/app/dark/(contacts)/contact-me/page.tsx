import ContactMeTopIntro from "@/components/contact/sections/ContactMeTopIntro";
import ContactMeForm from "@/components/contact/forms/ContactMeForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Me - Creative Portfolio Nextjs Template",
};
const page = () => {
    return (
        <main>
            <ContactMeTopIntro />
            <ContactMeForm/>
        </main>
    );
};

export default page;