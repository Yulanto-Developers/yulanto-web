import Image from "next/image";

const PortfolioDetailsTwoBannerTwo = () => {
    return (
        <div className="px-pd-4-color-ptb fix mb-160">
            <div className="px-pd-4-banner-thumb-2">
                <Image className="img-fluid w-auto h-auto" data-speed=".8" src="/assets/img/project/portfolio-details-2/portfolio-details-2-thumb-2.jpg" alt="portfolio banner" width={1689} height={748} />
            </div>
        </div> 
    );
};

export default PortfolioDetailsTwoBannerTwo;