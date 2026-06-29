import { BlogTopIntro, BlogMain } from "@/components/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog - Creative Portfolio Nextjs Template",
};

const page = () => {
    return (
        <main>
            <BlogTopIntro />
            <BlogMain />
        </main>
    );
};

export default page;