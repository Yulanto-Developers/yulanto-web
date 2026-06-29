import BlogDetailsArea from "@/components/blog/layouts/BlogDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog Details - Creative Portfolio Nextjs Template",
};

const page = () => {
    return (
        <main>
            <BlogDetailsArea />
        </main>
    );
};

export default page;


