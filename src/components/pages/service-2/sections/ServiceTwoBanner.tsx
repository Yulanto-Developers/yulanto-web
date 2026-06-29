import Image from "next/image";

const ServiceTwoBanner = () => {
    return (
        <div className="studio-hero-banner-area pb-100">
            <div className="studio-hero-banner fix mb-20">
                <Image className="img-fluid w-auto h-auto" data-speed="0.1" src="/assets/img/banner/banner-3-1.jpg" alt="banner image" width={1689} height={924} />
            </div>
            <div className="px-text-inner-studio">
                <div className="container container-1830">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="studio-hero-banner-text d-flex justify-content-start justify-content-md-between align-items-center">
                                <span>A</span>
                                <span>collective</span>
                                <span>of</span>
                                <span>the</span>
                                <span>best</span>
                                <span>independent</span>
                                <span>premium</span>
                                <span>publishers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceTwoBanner;