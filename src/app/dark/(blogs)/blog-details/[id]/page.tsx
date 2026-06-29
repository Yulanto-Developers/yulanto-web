import BlogDetailsArea from "@/components/blog/layouts/BlogDetails";
import { PageParamsProps } from '@/types/custom-dt';
import { blogs } from "@/data/blog-data";

export async function generateMetadata(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;
    const blog = blogs.find((item) => item.id === Number(id));
    return {
        title: blog?.title ? blog.title : "Blog Details",
    };
}

export default async function BlogDetails(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;

    return (
        <BlogDetailsArea id={id}/>
    );
}
