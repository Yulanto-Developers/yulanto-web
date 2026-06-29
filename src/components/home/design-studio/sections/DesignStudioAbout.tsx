import SmartLink from "@/components/common/SmartLink";
import { AboutBadgeIcon } from "@/svg/AboutBadgeIcon";
import Image from "next/image";

const About = () => {
    return (
        <div className="px-about-2-area pt-160 pb-110">
            <div className="container container-1750">
                <div className="row align-items-end">
                    <div className="col-xl-9">
                        <div className="px-about-2-title-box p-relative">
                            <h3 className="px-about-2-title"><b className="text-effect">We are</b> <i>The Creative</i> <br />
                                <em className="text-effect">
                                    <Image className="img-fluid" width={640} height={340} src="/assets/img/gift-img/title-img.gif" alt="gif image" />
                                    design
                                </em> <br />
                                <b className="p-relative text-effect">studio<span></span></b>
                            </h3>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="px-about-2-subtitle-box text-end">
                            <SmartLink className="px-btn-zikzak text-center p-relative mb-90" href="/about-us">
                                <span className="btn-text text-pos-1">
                                    About <br /> Us
                                </span>
                                <i className="zikzak-bg">
                                    <AboutBadgeIcon />
                                </i>
                            </SmartLink>
                            <span className="px-about-2-subtitle text-effect">/ FROM <br /> VIETNAM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;