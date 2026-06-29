import PersonalPortCopyright from "./subComponents/PersonalPortCopyright";
import PersonalPortTextSlider from "./subComponents/PersonalPortTextSlider";
import FooterContactForm from "@/components/form/FooterContactForm";
import { FooterSocialArrowIcon } from "@/svg/ArrowIcons";
import Link from "next/link";

const socialLinks = ["Linkedin", "Twitter", "Facebook"];

const PersonalPortfolioFooter = () => {
    return (
        <footer className="tp-section-bg">
            <div className="px-footer-3-area pt-90 pb-120">

                {/* Slider Area */}
                <PersonalPortTextSlider />

                <div className="container">
                    <div className="row">
                        <div className="offset-xl-4 col-xl-8">
                            <div className="px-footer-3-box">

                                {/* Contact Info */}
                                <div className="px-footer-3-info">
                                    <div className="px-footer-3-tel">
                                        <Link href="tel:(510)8956500">
                                            (510) 895-6500
                                        </Link>
                                    </div>
                                    <div className="px-footer-3-mail">
                                        <Link href="mailto:Hello@Pixora.com">
                                            Hello@Pixora.com
                                        </Link>
                                    </div>
                                </div>

                                {/* Contact Form */}
                                <FooterContactForm />

                                {/* Social Links */}
                                <div className="px-footer-3-social">
                                    {socialLinks.map((platform) => (
                                        <Link href="#" key={platform} style={{ marginRight: "5px" }}>
                                            {platform}
                                            <span>
                                                <FooterSocialArrowIcon />
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright */}
            <PersonalPortCopyright />
        </footer>
    );
};

export default PersonalPortfolioFooter;
