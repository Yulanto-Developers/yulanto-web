import { PortfolioProjectDT } from '@/types/portfolio-dt';
import Image from 'next/image';
import Link from 'next/link';

const CAProjectItem: React.FC<PortfolioProjectDT> = ({ id, image, title }) => {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="px-project-5-item mb-80">
                <Link href={`/portfolio-details-1/${id}`}>
                    <div className="px-project-5-thumb ripple-image">
                        <Image width={436} height={340}
                            className="img-fluid w-100"
                            src={image}
                            alt={title}
                        />
                    </div>
                </Link>
                <div className="px-project-5-content d-flex align-items-center justify-content-center">
                    <h4 className="px-project-5-title-sm">
                        <Link className="px-line-lr" href={`/portfolio-details-1/${id}`}>
                            {title}
                        </Link>
                    </h4>
                    <span>Branding</span>
                </div>
            </div>
        </div>
    );
};

export default CAProjectItem;