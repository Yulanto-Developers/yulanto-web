"use client";

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
import Dock from "@/components/layout/footers/Dock";
import ShapeGrid from "@/components/home/home/myComponents/common/ShapeGrid";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

interface footerPropsDt {
    sectionBgClass?: string;
    copyrightClassName?: string;
}

const MainFooter: React.FC<footerPropsDt> = ({ sectionBgClass = "#053456", copyrightClassName = "" }) => {

    const dockItems = socialLinks.map((item) => ({
        icon: item.icon,
        label: item.label ?? "",
        onClick: () => window.open(item.href, "_blank"),
    }));

    return (
        <footer className="px-footer footer-wrapper d-flex  flex-column align-items-center"
            style={{ backgroundColor: sectionBgClass }}>
            {/* hexognal shape  movidng slide */}
            <div className="footer-shape-bg">
                <ShapeGrid
                    shape="hexagon"
                    direction="diagonal"
                    speed={0.25}
                    squareSize={28}
                    borderColor="rgba(255,255,255,0.08)"
                    hoverFillColor="rgba(255,255,255,0.15)"
                    hoverTrailAmount={0}
                />
            </div>
            {/* Top Footer */}
            <div className="px-footer-area pt-lg-50">
                <div className="container container-1550">
                    <div className="row align-items-start">

                        {/* About */}
                        <div className="col-xl-3 col-lg-4">
                            <div
                                className="px-footer-widget px-footer-col-1 pb-40 px-fade-anim"
                                data-delay=".3"
                            >
                                <div>
                                    <Image src="/assets/img/logo/logo-white.png" alt="Pixora Logo" width={200} height={90} />
                                    <h4 className="px-footer-widget-title mt-3">
                                        We create professional websites that help businesses build a strong online presence, generate leads, and grow digitally.
                                    </h4>
                                    <h4 className=" text-design">Design. Develop. Grow.</h4>
                                </div>
                                <div className="px-footer-widget-social mt-3">
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
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-xl-3 col-lg-4 col-md-6 d-flex justify-content-between flex-column">
                            <div
                                className="px-footer-widget px-footer-col-2 pb-40 px-fade-anim"
                                data-delay=".5"
                            >
                                <h4 className="px-footer-widget-title-sm pre mb-25">
                                    Legal Links
                                </h4>

                                <div className="px-footer-widget-menu">
                                    <ul>
                                        {quickLinks.map((item, index) => (
                                            <li key={`${item.label}-${index}`}>
                                                <Link href={item.href}>
                                                    <span className="d-flex align-items-center">
                                                        <FontAwesomeIcon
                                                            icon={faAnglesRight}
                                                            className="text-white"
                                                        />
                                                        {item.label}
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </div>

                        {/* Contact - Call Us */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div
                                className="px-footer-widget px-footer-col-3 px-fade-anim"
                                data-delay=".7"
                            >
                                <h4 className="px-footer-widget-title-sm pre mb-20">
                                    Call Us
                                </h4>
                                <div className="px-footer-widget-info">
                                    <Link href="mailto:info@yulanto.com" className="fw-bold font-size-18">
                                        <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                                        info@yulanto.com
                                    </Link>

                                    <Link href="tel:+919962157250" className="mt-2 fw-bold d-inline-block font-size-18">
                                        <FontAwesomeIcon icon={faPhone} className="me-2" />
                                        +91 99621 57250
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <h4 className="px-footer-widget-title-sm pre mb-20">
                                    Follow Us
                                </h4>
                                {/* Apple macOS Dock Component */}
                                <Dock
                                    items={dockItems}
                                    page='footer'
                                    panelHeight={52}
                                    baseItemSize={38}
                                    magnification={54}
                                    distance={120}
                                />
                            </div>
                        </div>

                        {/* Reach Us & Dock */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div
                                className="px-footer-widget px-footer-col-3 pb-40 mb-30 px-fade-anim"
                                data-delay=".7"
                            >
                                <h4 className="px-footer-widget-title-sm reach-mobile pre mb-20">
                                    Reach Us
                                </h4>
                                <div className="px-footer-widget-info mb-3">
                                    <Link
                                        href="https://maps.app.goo.gl/dgzUBaL7ZPhhDwA97"
                                        target="_blank" className="d-flex align-items-start"
                                    >
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 mt-1" />
                                        <span className="font-size-18">
                                            F3, #4/608, First Floor,<br />
                                            V.O.C Street, Kottivakkam,<br /> OMR,
                                            Chennai - 600 041,<br /> Tamilnadu, India
                                        </span>
                                    </Link>
                                </div>
                                <div className="px-footer-widget-info">
                                    <Link
                                        href="https://www.google.com/maps/dir/?api=1&destination=12.9724698,80.2510529"
                                        target="_blank"
                                        className="map-btn"
                                    >
                                        <span className="icon">
                                            <i className="fa-solid fa-location-arrow"></i>
                                        </span>

                                        <span className="text">Get Direction</span>
                                    </Link>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="position-abs">
                <span className="text-tenor text-white" style={{ fontSize: '18px' }}>© 2026 Yulanto Web Creations. All Rights Reserved.</span>
            </div>
            {/* Copyright */}
            <div className={`px-copyright-area ${copyrightClassName}  media-margin-cls`}>
                <div className="container-1550">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="px-copyright-content text-center">
                                <h2 className="px-copyright-big-text">
                                    Unique by Imagination
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