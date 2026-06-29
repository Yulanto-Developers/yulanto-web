import { SmartLink } from "@/components/common";

const services = [
    "Digital Studio",
    "Branding and Identity",
    "Social Media Marketing",
    "SEO Optimization",
];

const scrollingWords = ["bolio", "digital", "studio", "BFOLIO", "digital"];

const MinimalPortfolioHero = () => {
    return (
        <div
            className="bf-hero-area bf-hero-spacing bg-position z-index-1 tp-image-distortion"
            data-background="/assets/img/update/hero/thumb.jpg"
        >
            <div className="container-fluid container-1650">

                {/* Top Section */}
                <div className="bf-hero-top">
                    <div className="row">

                        {/* Video */}
                        <div className="col-lg-6 col-md-6">
                            <div className="bf-hero-video mb-30 ml-150">
                                <video loop muted autoPlay playsInline>
                                    <source
                                        src="https://html.aqlova.com/videos/bfolio/video-4.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="col-lg-6 col-md-6">
                            <div className="bf-hero-right-content mb-30">
                                <ul>
                                    {services.map((service) => (
                                        <li key={service}>
                                            <SmartLink href="/service-1">
                                                <span className="explore-text" data-text={service}>
                                                    {service}
                                                </span>
                                            </SmartLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Section */}
                <div className="row align-items-end">

                    {/* Left Content */}
                    <div className="col-lg-4">
                        <div className="bf-hero-bottom-content ml-150 mb-30">
                            <p className="mb-30">
                                Elevating Brands Through <br />
                                Smart, Human - Centered <br />
                                Design
                            </p>

                            <SmartLink
                                href="/portfolio-1"
                                className="tp-btn tp-btn-xl bf-btn-red d-inline-flex align-items-center"
                            >
                                <span>
                                    <span className="text-1">Discover Work</span>
                                    <span className="text-2">Discover Work</span>
                                </span>
                            </SmartLink>
                        </div>
                    </div>

                    {/* Scrolling Words */}
                    <div className="col-lg-8">
                        <div className="bf-hero-bottom-title-wrap mb-30">
                            <div className="bf-hero-scrolling-words">
                                <ul>
                                    {scrollingWords.map((word, i) => (
                                         <li key={`${word}-${i}`}>{word}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MinimalPortfolioHero;