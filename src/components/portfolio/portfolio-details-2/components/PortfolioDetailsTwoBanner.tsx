import Image from "next/image";

const PortfolioDetailsTwoBanner = () => {
    return (
        <div className="px-pd-4-banner-ptb px-pd-style fix pt-120">
            <div className="px-pd-4-banner-thumb-1">
                <Image className="img-fluid w-auto h-auto" data-speed=".1" src="/assets/img/project/portfolio-details-2/portfolio-details-2-thumb-1.jpg" alt="portfolio banner" width={1689} height={924} />
            </div>
        </div>
    );
};

export default PortfolioDetailsTwoBanner;