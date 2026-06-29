import { ScrollDownArrowTwoIcon } from "@/svg/ArrowIcons";
import { ScrollLink } from "@/components/common";

const PortfolioTwoHero = () => {
    return (
        <div id="top" className="px-hero-4-area px-orange-style pt-145">
            <div className="container container-1870">
                <div className="row">
                    <div className="col-xl-6 col-lg-7">
                        <div className="px-hero-4-content z-index-3">
                            <p>
                                We help leaders take <br />
                                transformational steps toward <br />
                                a <span>radically relevant</span> brand.
                            </p>
                            <div className="smooth">
                                <ScrollLink className="px-hero-4-scrolldown" target="#project">
                                    <span>
                                        <ScrollDownArrowTwoIcon />
                                    </span>
                                </ScrollLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-5">
                        <div className="px-hero-4-video-wrap d-flex justify-content-end">
                            <div className="px-hero-4-video">
                                <video loop muted autoPlay playsInline>
                                    <source src="https://html.aqlova.com/videos/pixora/banner-4-1.mp4" type="video/mp4" />
                                </video>
                                <div className="px-hero-4-video-btn d-flex justify-content-between align-items-center">
                                    <span>(Play Reel)</span>
                                    <span>00:00:32</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="px-hero-4-bigtitle text-center">
                            <h2>pixora</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioTwoHero;