"use client";
import { ArrowScrollIcon, EmailIcon, FooterSendMessageIcon } from "@/svg";
import { ScrollLink, SmartLink } from "@/components/common";
import { getCurrentYear } from "@/utils/getCurrentYear";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
    {
        id: 1,
        title: "Insights",
        image: "/assets/img/social/social-1.png",
        href: "#",
    },
    {
        id: 2,
        title: "Social",
        image: "/assets/img/social/social-2.png",
        href: "#",
    },
    {
        id: 3,
        title: "Design",
        image: "/assets/img/social/social-3.png",
        href: "#",
    },
    {
        id: 4,
        title: "Linkedin",
        image: "/assets/img/social/social-4.png",
        href: "#",
    },
];

const ModernAgencyFooter = () => {
    const isDarkTheme = useIsDarkRoute();
    const footerClasses = {
        backgroundColor: isDarkTheme ? "#1C1D20" : "#F7F7F7",
        footerTitleColor: isDarkTheme ? "" : "text-black",
    }

    return (
        <footer>
            <div className="design-footer-area pb-25">
                <div className="container container-1870">
                    <div className="design-footer-bg" style={{ backgroundColor: footerClasses.backgroundColor }}>
                        <div className="px-social-bg px-social-black-bg" style={{ backgroundColor: "#0A0A0A" }}>
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="px-social-mail">
                                        <Link className="px-line-lr" href="mailto:inquiry@pixora.com">
                                            <span>
                                                <FooterSendMessageIcon />
                                            </span>
                                            inquiry@pixora.com
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="px-social-icon text-md-end">
                                        {socialLinks.map((item) => (
                                            <Link style={{marginLeft:"4px"}} key={item.id} href={item.href}>
                                                <Image
                                                    width={52}
                                                    height={52}
                                                    src={item.image}
                                                    alt={item.title}
                                                />
                                                <span>{item.title}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="design-footer-wrap">
                            <div className="design-footer-top-wrap pb-30">
                                <div className="row align-items-end">
                                    <div className="col-lg-8">
                                        <div className="design-footer-top-text mb-20">
                                            <h4 className={`px-section-title ff-inter ${footerClasses.footerTitleColor} text-effect`}>Thinking of something big</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="design-footer-top-btn text-start text-lg-end mb-20">
                                            <SmartLink className="px-btn-black" href="/contact-us">{`Let's`} talk!</SmartLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="design-footer-middle pt-55">
                                <div className="row align-items-center">
                                    <div className="col-xl-4 col-lg-5 col-md-6">
                                        <div className="design-footer-widget design-footer-col-1 pb-60">
                                            <h4 className="design-footer-widget-title">Our Newsletter</h4>
                                            <div className="design-footer-widget-input p-relative">
                                                <input type="text" placeholder="Your email address" />
                                                <button type="submit" className="design-footer-widget-input-icon">
                                                    <EmailIcon />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-7 col-md-6">
                                        <div className="design-footer-right pb-60">
                                            <div className="row align-items-center">
                                                <div className="col-xl-4">
                                                    <div className="design-footer-widget design-footer-col-2">
                                                        <h4 className="design-footer-widget-title sm">Call us</h4>
                                                        <div className="design-footer-widget-info">
                                                            <Link className="px-line-lr" href="tel:+(213)555-8573">+(213) 555-8573</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4">
                                                    <div className="design-footer-widget design-footer-col-3">
                                                        <h4 className="design-footer-widget-title sm">Drop us a line</h4>
                                                        <div className="design-footer-widget-info">
                                                            <Link className="px-line-lr" href="mailto:inquiry@agntix.com">inquiry@agntix.com</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4">
                                                    <div className="design-footer-widget design-footer-col-4">
                                                        <h4 className="design-footer-widget-title sm">Skype</h4>
                                                        <div className="design-footer-widget-info">
                                                            <Link className="px-line-lr" href="#">pixora.agency</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="design-copyright-area pt-30 pb-10">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="design-copyright-text text-center text-md-start mb-10">
                                            <p>© {getCurrentYear()} Pixora, All rights reserved.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="design-copyright-backtoTop text-center smooth  text-md-end smooth mb-10">
                                            <ScrollLink target="#hero">
                                                Back to top
                                                <span>
                                                    <ArrowScrollIcon />
                                                </span>
                                            </ScrollLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ModernAgencyFooter;