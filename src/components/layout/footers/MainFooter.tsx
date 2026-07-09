import { quickLinks, socialLinks } from "@/data/footer-data";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

interface footerPropsDt {
    sectionBgClass?: string;
    copyrightClassName?: string;
}

const MainFooter: React.FC<footerPropsDt> = ({ sectionBgClass = "#0A0A0A", copyrightClassName = "" }) => {
    return (
        <footer className="px-footer" style={{ backgroundColor: sectionBgClass }}>
            {/* Top Footer */}
            <div className="px-footer-area pt-85 pb-35">
                <div className="container container-1550">
                    <div className="row align-items-center">

                        {/* About */}
                        <div className="col-xl-4 col-lg-4">
                            <div
                                className="px-footer-widget px-footer-col-1 pb-40 px-fade-anim"
                                data-delay=".3"
                            >
                                <div>
                                    <Image src="/assets/img/logo/logo-white.png" alt="Pixora Logo" width={200} height={90} />
                                    {/* <h4 className="px-footer-widget-title">
                                    Helping<br />start-ups scale & grow.
                                </h4> */}
                                    <h4 className="px-footer-widget-title">
                                        Helping<br />start-ups scale & grow.
                                    </h4>
                                </div>
                                <div className="px-footer-widget-social">
                                    <a
                                        href="/pdf/company-profile.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pdf-link d-flex gap-2 align-items-center"
                                    >
                                        <FontAwesomeIcon icon={faFilePdf} className="pdf-icon" />
                                        <span className="pdf-text">Company Profile</span>
                                    </a>
                                </div>
                                {/* <div className="px-footer-widget-social">
                                    {socialLinks.map((item, index) => (
                                        <Link
                                            key={`${item.href}-${index}`}
                                            style={{ marginRight: "5px" }}
                                            href={item.href}
                                        >
                                            <span>{item.icon}</span>
                                        </Link>
                                    ))}
                                </div> */}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-xl-5 col-lg-4 col-md-6">
                            <div
                                className="px-footer-widget px-footer-col-2 pb-40 px-fade-anim"
                                data-delay=".5"
                            >
                                <h4 className="px-footer-widget-title-sm pre mb-25">
                                    Menu
                                </h4>

                                <div className="px-footer-widget-menu">
                                    <ul>
                                        {quickLinks.map((item, index) => (
                                            <li style={{ marginRight: "5px" }} key={`${item.label}-${index}`}>
                                                <Link href={item.href}>{item.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div
                                className="px-footer-widget px-footer-col-3 pb-40 mb-30 px-fade-anim"
                                data-delay=".7"
                            >
                                <h4 className="px-footer-widget-title-sm pre mb-20">
                                    Reach Us
                                </h4>
                                <div className="px-footer-widget-info">
                                    <Link
                                        href="https://maps.app.goo.gl/dgzUBaL7ZPhhDwA97"
                                        target="_blank" className="d-flex align-items-start"
                                    >
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                                        F3, #4/608, First Floor,<br /> V.O.C Street, Kottivakkam, OMR,<br />
                                        Chennai - 600 041, India
                                    </Link>
                                </div>
                                <div className="px-footer-widget-info">
                                    <Link href="mailto:info@yulanto.com">
                                        <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                                        info@yulanto.com
                                    </Link>

                                    {/* <Link href="mailto:operations@yulanto.com">
                                        <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                                        operations@yulanto.com
                                    </Link> */}

                                    <Link href="tel:+919962157250">
                                        <FontAwesomeIcon icon={faPhone} className="me-2" />
                                        +91 99621 57250
                                    </Link>
                                </div>
                                <div className="footer-social-circle">
                                    {socialLinks.map((item, index) => (
                                        <Link
                                            key={`${item.href}-${index}`}
                                            href={item.href}
                                            className="footer-social-circle__item"
                                        >
                                            {item.icon}
                                        </Link>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className={`px-copyright-area ${copyrightClassName}`}>
                <div className="container container-1550">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="px-copyright-content text-center">
                                <h2 className="px-copyright-big-text">
                                    Web <span className="text-blue-pr">Creation</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;
