import Image from "next/image";

const AboutMeHero = () => {
    return (
        <div className="am-hero-area pt-160">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="am-hero-title-box">
                            <h2 className="am-hero-title text-center">
                                About <i className="d-md-none">Me</i> <br />
                                <span className="d-flex justify-content-center">
                                    <span className="d-none d-md-block">ME</span>
                                    <span data-speed=".9" className="am-hero-img-wrap">
                                        <span className="am-hero-img-main">
                                            <Image className="img-fluid" width={640} height={740} src="/assets/img/about/about-me-1.jpg" alt="about thumb" />
                                        </span>
                                        <span className="signature d-flex justify-content-center">
                                            <Image width={361} height={196} src="/assets/img/about/about-me-sign.png" alt="sign image" />
                                        </span>
                                    </span>
                                    <span className="d-none d-md-block">ES</span>
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMeHero;