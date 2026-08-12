import { BigArrowIcon, ScrollDownArrowIcon } from "@/svg/ArrowIcons";
import { ScrollLink } from "../common/ScrollLink";
import Image from "next/image";

const ContactUsTopIntro = () => {
    return (
        <div className="tp-contact-us-ptb pt-60 p-relative">
            <div className="container container-1230">
                <div className="tp-contact-us-wrap-ptb">
                    <div className="row justify-content-center">
                        <div className="col-xl-12">
                            <div className="tp-contact-us-heading tp_fade_anim" data-delay=".3">
                                <div className="tp-contact-us-title-box d-flex align-items-center mb-20">
                                    {/* <span className="tp-section-subtitle pre tp_fade_anim">  How Can We Help You ?</span>
                                    <div>
                                        <BigArrowIcon />
                                    </div> */}
                                </div>
                               
                                  <h4 className="px-about-title mb-20">
                    <span className="text-blue-about">How Can We Help You? Have a project in mind? {" "}</span> Let’s bring your ideas to life
                  </h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                       
                        <div className="col-lg-8">
                            <div className="tp-contact-us-text tp_fade_anim">
                                <p className="m-0">Yulanto offers more than a
                                mere website; it promises a digital masterpiece that enhances your online presence and
                                drives your success to new heights.</p>
                            </div>
                        </div>
                         <div className="col-lg-4">
                            <div className="tp-contact-us-img">
                                <Image src="/assets/img/tocontact/QR2.png" alt="Contact Us" width={170} height={170} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default ContactUsTopIntro;