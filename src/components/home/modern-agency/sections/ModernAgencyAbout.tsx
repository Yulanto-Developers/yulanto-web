import { SmartLink } from "@/components/common";
import { TextArrowIcon } from "@/svg";

const About = () => {
    return (
        <div className="px-about-4-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="px-about-4-title-box mb-55">
                            <h3 className="px-section-title ff-inter text-effect">
                                Let&apos;s create a <br />brand that defies <br />Gravity
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-xl-5 col-xl-5">
                        <div className="px-about-4-content">
                            <p>
                                Pixora is a creative  studio based in Portugal, <br />
                                Brazil, and London. We think like an  agency and produce <br />
                                like a visuals for brands & agencies.
                            </p>
                            <SmartLink className="px-about-4-link px-doubble-effect" href="/about-us">
                                <span>More about us</span>
                                <i>
                                    <TextArrowIcon />
                                    <TextArrowIcon />
                                </i>
                            </SmartLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;