import { PortfolioProjectDT } from "@/types/portfolio-dt";
import Image from "next/image";
import Link from "next/link";

const PortfolioCard = ({
    id,
    title,
    image,
    categories,
    year
}: PortfolioProjectDT) => {
    return (
        <div className="px-portfolio-item px-portfolio-panel p-relative mb-30">
            <Link href={`/portfolio-details-2/${id}`}>
                <div className="px-portfolio-thumb p-relative ripple-image">
                    <Image width={1820} height={820} className="img-fluid w-100 h-100" src={image} alt={title} />
                </div>
                <div className="px-portfolio-category">
                    {categories.map((cat) => (
                        <span key={`${id}-${cat}`} style={{marginLeft:"4px"}}>{cat}</span>
                    ))}
                </div>
                <div className="px-portfolio-category portfolio-meta">
                    <span>{year}</span>
                </div>
                <div className="px-portfolio-content">
                    <h2 className="px-portfolio-title">{title}</h2>
                </div>
            </Link>
        </div>
    );
};

export default PortfolioCard;
