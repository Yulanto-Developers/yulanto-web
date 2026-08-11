"use client";
import React from 'react';
import PrimaryOffCanvas from "@/components/offcanvas/PrimaryOffCanvas";
import HeaderMenu from "./subComponents/HeaderMenu";
import useGlobalContext from "@/hooks/useContext";
import { SmartLink } from "@/components/common";
import Image from "next/image";
import Link from "next/link";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faBars, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const PersonalPortfolioHeader = () => {
  const { toggleMainSidebar } = useGlobalContext();
  const isDarkTheme = useIsDarkRoute();
  const [sticky, setSticky] = React.useState(false);
  const [showHeader, setShowHeader] = React.useState(true);

  // Apply theme-specific dropdown background styles (light or dark)
  const dropdownBackgroundCls = isDarkTheme
    ? "dropdown-black-bg"
    : "dropdown-white-bg";

  React.useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Sticky background after scrolling 100px
      setSticky(currentScrollY > 100);

      // Always show header near the top
      if (currentScrollY < 100) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down → hide
        setShowHeader(false);
      } else {
        // Scrolling up → show
        setShowHeader(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className=''>
        <div
          className={`
    px-header-6-ptb
    px-header-style-black
    header-fixed dash-bottom
    ${sticky ? "sticky-bg" : "sticky-bg"}
    ${showHeader ? "header-show" : "header-hide"}
  `}
        >
          <div className="container-fluid container-1870 pe-3">
            <div className="row align-items-center">
              <div className="col-6">
                <div
                  className={`px-header-6-menu tp-header-dropdown px-megamenu-style ${dropdownBackgroundCls} d-none d-xl-block`}
                >
                  <nav className="tp-mobile-menu-active">
                    <HeaderMenu />
                  </nav>
                </div>
                {/* mobile logo */}
                <div className="px-header-logo d-block d-xl-none cursor-pointer">
                  <Link href="/" className=''>
                    <img
                      height={65}
                      src="/assets/img/logo/L2.png"
                      alt="logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-2">
                {/* desktop logo */}
                <div className="px-header-logo d-none d-xl-block relative-cls-header">
                  <Link href="/">
                    <img
                      height={75}
                      src="/assets/img/logo/L2.png"
                      alt="logo"
                      style={{ marginLeft: "-50%" }}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-4">
                <div className="px-header-6-action d-flex align-items-center justify-content-end">
                  <div className="px-header-6-info d-none d-xl-block">
                    <Link className="px-line-lr d-flex align-items-center gap-1" href="mailto:info@yulanto.com">
                      <FontAwesomeIcon icon={faEnvelope} className="icon-color" />
                      info@yulanto.com
                    </Link>
                  </div>
                  <div className="px-header-6-btn ml-25 d-none d-xl-block relative-cls-header">
                    <SmartLink
                      className="px-btn-grey d-flex align-items-center gap-2 "
                      href="tel:+919962157250"
                    >
                      <FontAwesomeIcon icon={faPhone} />
                      +91 99621 57250
                    </SmartLink>
                  </div>
                  <div className="px-header-action relative-cls-header">
                    <button
                      type="button"
                      onClick={() => {
                        toggleMainSidebar();
                      }}
                      className="px-header-bar tp-offcanvas-open-btn d-flex align-items-center justify-content-center"
                    >
                      {/* Desktop Icon: Location Dot */}
                      <FontAwesomeIcon icon={faLocationDot} className="d-none d-xl-block chat-btn" />

                      {/* Mobile Icon: 3 Menu Bars */}
                      <FontAwesomeIcon icon={faBars} className="d-block d-xl-none" style={{ fontSize: "20px" }} />
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