import { BigArrowIcon, ScrollDownArrowIcon } from "@/svg/ArrowIcons";
import { ScrollLink } from "../common/ScrollLink";
import Image from "next/image";

const ContactUsTopIntro = () => {
    return (
        <div className="tp-contact-us-ptb pt-60 p-relative">
            <div className="container container-1230">
                <div className="tp-contact-us-wrap-ptb">

                    <div className="row  align-items-center">
                        <div className="col-xl-3">
                            <span className="tp-section-subtitle text-black blink-ball">
                                How Can We Help You

                            </span>
                        </div>

                        <div className="col-xl-9">
                            <div className="px-project-title-box">

                                <h4 className="px-about-title mb-20">
                                    <span className="text-blue-about">Have a project in mind? </span> Let’s bring your ideas to life
                                </h4>
                                <p className="text-figtree text-black mt-2 font-paragraph-cls">
                                    Yulanto offers more than a
                                    mere website. it promises a digital masterpiece that enhances your online presence and
                                    drives your success to new heights.
                                </p>

                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default ContactUsTopIntro;