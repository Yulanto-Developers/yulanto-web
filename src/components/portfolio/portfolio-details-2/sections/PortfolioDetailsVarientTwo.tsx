import PortfolioDetailsTwoBannerTwo from "../components/PortfolioDetailsTwoBannerTwo";
import PortfolioDetailsWorkReview from "../components/PortfolioDetailsWorkReview";
import PortfolioDetailsTwoBanner from "../components/PortfolioDetailsTwoBanner";
import PortfolioDetailsTwoThumb from "../components/PortfolioDetailsTwoThumb";
import PortfolioDetailsSlider from "../components/PortfolioDetailsSlider";
import PortfolioDetailsAbout from "../components/PortfolioDetailsAbout";
import { portfolioProjects } from "@/data/portfolio-projects";
import { IdProps } from "@/types/custom-dt";
import { TextArrowIcon } from "@/svg";
import Link from "next/link";

const PortfolioDetailsVarientTwo = ({ id }: IdProps) => {
    const portfolio = portfolioProjects.find((item) => item.id === Number(id));

    return (
        <>
            <div className="px-pd-4-ptb pt-190 pb-50">
                <div className="container container-1630">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="px-pd-4-heading mb-90 tp_fade_anim" data-delay=".3">
                                <h3 className="px-pd-4-title">{portfolio?.title}</h3>
                            </div>
                            <div className="px-pd-4-heading-bottom d-flex justify-content-between tp_fade_anim" data-delay=".5">
                                <div className="px-pd-2-bottom-item mb-30">
                                    <span>Client</span>
                                    <h6>{portfolio?.client}</h6>
                                </div>
                                <div className="px-pd-2-bottom-item mb-30">
                                    <span>Expertise</span>
                                    <h6>
                                        {portfolio?.categories?.join(", ")}
                                    </h6>
                                </div>
                                <div className="px-pd-2-bottom-item mb-30">
                                    <span>Duration</span>
                                    <h6>{portfolio?.duration}</h6>
                                </div>
                                <div className="px-pd-2-bottom-item mb-30">
                                    <span>Designer</span>
                                    <h6>{portfolio?.designer}</h6>
                                </div>
                                <div className="px-pd-4-bottom-btn mb-30">
                                    <Link className="px-portfolio-details-btn" href="#">Visit Site <span>
                                        <TextArrowIcon />
                                    </span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PortfolioDetailsTwoBanner />
            <PortfolioDetailsAbout />
            <PortfolioDetailsTwoBannerTwo />
            <PortfolioDetailsWorkReview />
            <PortfolioDetailsTwoThumb />
            <PortfolioDetailsSlider />

            {/* portfolio details next prv start  */}
            <div className="px-pd-4-np-ptb pt-40 pb-120">
                <div className="container container-1230">
                    <div className="row justify-content-md-center">
                        <div className="col-lg-8">
                            <div className="px-pd-4-np-box hover-reveal-item p-relative">
                                <Link href="#" className="px-pd-4-np-content z-index-5 text-center">
                                    <span>next</span>
                                    <h4 className="px-pd-4-np-title">merit global</h4>
                                    <p>Research, UX, UI Design</p>
                                </Link>
                                <div className="tp-award-reveal-img"
                                    style={{ backgroundImage: "url(/assets/img/project/portfolio-details-2/portfolio-details-np.jpg)" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* -- portfolio details next prv end -- */}
        </>
    );
};

export default PortfolioDetailsVarientTwo;