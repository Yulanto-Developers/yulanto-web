import { blogDt } from "@/types/custom-dt";
import Image from "next/image";
import Link from "next/link";

const BlogRelatedCard: React.FC<blogDt> = ({ image, category, title, date }) => {
    return (
        <div className="px-blog-item px-orange-style mb-40">
            <Link href="#">
                <div className="px-blog-thumb ripple-image">
                    <Image className="img-fluid" width={554} height={380} src={image} alt={title} />
                </div>
            </Link>

            <div className="px-blog-content">
                <span className="px-blog-category">{category}</span>

                <h4 className="px-blog-title">
                    <Link href="#">{title}</Link>
                </h4>

                <span className="px-blog-meta">
                    Published on {date}
                </span>
            </div>
        </div>
    );
};

export default BlogRelatedCard;