
import { BlogBreadcurmb, BlogStandard } from "@/components/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog Standard - Creative Portfolio Nextjs Template",
};
const page = () => {
    return (
        <main>
            <BlogBreadcurmb />
            <BlogStandard />
        </main>
    );
};

export default page;