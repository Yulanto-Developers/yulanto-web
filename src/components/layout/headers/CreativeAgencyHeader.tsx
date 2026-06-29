"use client";
import PrimaryOffCanvas from "@/components/offcanvas/PrimaryOffCanvas";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import HeaderMenu from "./subComponents/HeaderMenu";
import useGlobalContext from "@/hooks/useContext";
import Image from "next/image";
import Link from "next/link";

const CreativeAgencyHeader = () => {
    const { toggleMainSidebar } = useGlobalContext();
    const isDarkTheme = useIsDarkRoute();

    // Apply theme-specific dropdown background styles (light or dark)
    const dropdownBackgroundCls = isDarkTheme
        ? "dropdown-black-bg"
        : "dropdown-white-bg";

    return (
        <>
            <header>
                <div className="px-header-area px-header-style-black header-fixed px-header-ptb">
                    <div className="container container-1870">
                        <div className="row align-items-start">
                            <div className="col-xl-6 col-lg-4 col-md-3 col-6">
                                <div className="px-header-logo pt-30">
                                    <Link href="/">
                                        <Image
                                            width={735}
                                            height={256}
                                            className="px-header-logo-anim d-none d-xl-block img-fluid"
                                            src="/assets/img/logo/logo-orange.png"
                                            alt="logo"
                                            style={{ width: "735px", height: "auto" }}
                                        />
                                        <Image width={95} height={100} className="d-xl-none img-fluid" src="/assets/img/logo/logo-orange.png" alt="logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-8 col-md-9 col-6">
                                <div className="px-header-box d-flex justify-content-end align-items-center">
                                    <div className={`px-header-menu tp-header-dropdown px-megamenu-style ${dropdownBackgroundCls} d-none d-xl-block`}>
                                        <nav className="tp-mobile-menu-active">
                                            <HeaderMenu />
                                        </nav>
                                    </div>
                                    <div className="px-header-action">
                                        <button
                                            type="button"
                                            onClick={toggleMainSidebar}
                                            className="px-header-bar tp-offcanvas-open-btn"
                                            aria-label="Open main menu"
                                            aria-expanded={false}
                                            aria-controls="primary-offcanvas"
                                        >
                                            <span aria-hidden="true"></span>
                                            <span aria-hidden="true"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Mobile Offcanvas area */}
            <PrimaryOffCanvas />
        </>
    );
};

export default CreativeAgencyHeader;