"use client";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import { EmailIcon, ArrowScrollIcon } from "@/svg";
import Link from "next/link";

const CreativeAgencyFooter = () => {
    const currentYear = new Date().getFullYear();
    const isDarkTheme = useIsDarkRoute();

    // Light theme background for service banner section
    const footerBackground = isDarkTheme ? "" : "#f7f7f7";

    return (
        <footer>
            <div className="design-footer-area pb-30" style={{ backgroundColor: footerBackground }}>
                <div className="container container-1550">
                    <div className="design-footer-bg pt-120 pb-20">
                        <div className="container container-1830">
                            <div className="design-footer-top-wrap pb-50">
                                <div className="row align-items-end">
                                    <div className="col-lg-8">
                                        <div className="design-footer-top-text mb-20">
                                            <h4 className="px-section-title ff-thunder fs-100 mb-0">Thinking <br /> of something big</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="design-footer-top-btn text-start text-lg-end mb-20">
                                            <SmartLink className="px-btn-black hover-orange-bg" href="/contact-us">Let&apos;s talk!</SmartLink>
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
                                                <button
                                                    type="submit"
                                                     aria-label="Subscribe to newsletter"
                                                    className="design-footer-widget-input-icon hover-bg-orange"
                                                >
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
                            <div className="design-copyright-area pt-45">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="design-copyright-text text-center text-md-start mb-10">
                                            <p>© {currentYear} Pixora, All rights reserved.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="design-copyright-backtoTop text-center smooth  text-md-end smooth mb-10">
                                            <Link href="#top">
                                                Back to top
                                                <span>
                                                    <ArrowScrollIcon />
                                                </span>
                                            </Link>
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

export default CreativeAgencyFooter;