import Link from "next/link";

const PortfolioThreeHero = () => {
    return (
        <div id="top" className="pf-3-hero-ptb pt-200">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-8">
                        <div className="pf-3-hero-content">
                            <h4 className="pf-3-hero-title">
                                recent <span>project.</span>
                            </h4>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="pf-3-hero-social-wrap mb-70">
                            <div className="pf-3-hero-social-text">
                                <span> <i>Know More</i></span>
                            </div>
                            <div className="pf-3-hero-social">
                                <Link href="#">Linkedin</Link>
                                <Link href="#">Instagram</Link>
                                <Link href="#">Dribbble</Link>
                                <Link href="#">Behance</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioThreeHero;