"use client";
import PrimaryOffCanvas from '@/components/offcanvas/PrimaryOffCanvas';
import HeaderMenu from './subComponents/HeaderMenu';
import useGlobalContext from '@/hooks/useContext';
import { SmartLink } from '@/components/common';
import Image from 'next/image';
import Link from 'next/link';
import { useIsDarkRoute } from '@/hooks/useIsDarkRoute';

const PersonalPortfolioHeader = () => {
    const { toggleMainSidebar } = useGlobalContext();
    const isDarkTheme = useIsDarkRoute();

    // Apply theme-specific dropdown background styles (light or dark)
    const dropdownBackgroundCls = isDarkTheme
        ? "dropdown-black-bg"
        : "dropdown-white-bg";

    return (
        <>
            <header>
                <div className="px-header-6-ptb px-header-style-black header-transparent">
                    <div className="container container-1870">
                        <div className="row align-items-center">
                            <div className="col-5">
                                <div className={`px-header-6-menu tp-header-dropdown px-megamenu-style ${dropdownBackgroundCls} d-none d-xl-block`}>
                                    <nav className="tp-mobile-menu-active">
                                        <HeaderMenu />
                                    </nav>
                                </div>
                                <div className="px-header-logo d-block d-xl-none">
                                    <Link href="/">
                                        <Image width={95} height={33} src="/assets/img/logo/logo-orange.png" alt="logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="px-header-logo text-center d-none d-xl-block">
                                    <Link href="/">
                                        <Image width={95} height={33} src="/assets/img/logo/logo-orange.png" alt="logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="px-header-6-action d-flex justify-content-end align-items-center">
                                    <div className="px-header-6-info d-none d-xl-block">
                                        <Link className="px-line-lr" href="mailto:hello@pixora.com">Hello@Pixora.com</Link>
                                    </div>
                                    <div className="px-header-6-btn ml-25 d-none d-xl-block">
                                        <SmartLink className="px-btn-grey" href="/contact-me">
                                            Contact me
                                        </SmartLink>
                                    </div>
                                    <div className="px-header-action d-xl-none">
                                        <button
                                            type="button"
                                            onClick={toggleMainSidebar}
                                            className="px-header-bar tp-offcanvas-open-btn"
                                            aria-label="Open sidebar menu"
                                        >
                                            <span></span>
                                            <span></span>
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

export default PersonalPortfolioHeader;