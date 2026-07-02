"use client";
import React from 'react';
// import { useState, useEffect } from 'react';
import PrimaryOffCanvas from "@/components/offcanvas/PrimaryOffCanvas";
import HeaderMenu from "./subComponents/HeaderMenu";
import useGlobalContext from "@/hooks/useContext";
import { SmartLink } from "@/components/common";
import Image from "next/image";
import Link from "next/link";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
      <header>
        <div
          className={`
    px-header-6-ptb
    px-header-style-black
    header-fixed
    ${sticky ? "sticky-bg" : ""}
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
                <div className="px-header-logo d-block d-xl-none">
                  <Link href="/">
                    <Image
                      width={95}
                      height={33}
                      src="/assets/img/logo/Yulanto-logo.png"
                      alt="logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-2">
                <div className="px-header-logo d-none d-xl-block">
                  <Link href="/">
                    <img
                      // width={170}
                      height={75}
                      src="/assets/img/logo/L2.png"
                      alt="logo"
                      style={{ marginLeft: "-50%" }} />
                  </Link>
                </div>
              </div>
              <div className="col-4">
                <div className="px-header-6-action d-flex justify-content-end align-items-center">
                  <div className="px-header-6-info d-none d-xl-block">
                    <Link className="px-line-lr d-flex align-items-center gap-1" href="mailto:info@yulanto.com">
                      <FontAwesomeIcon icon={faEnvelope} className="icon-color" />
                      info@yulanto.com
                    </Link>
                  </div>
                  <div className="px-header-6-btn ml-25 d-none d-xl-block">
                    <SmartLink
                      className="px-btn-grey d-flex align-items-center gap-2"
                      href="tel:+919962157250"
                    >
                      <FontAwesomeIcon icon={faPhone} />
                      +91 99621 57250
                    </SmartLink>
                  </div>
                  <div className="px-header-action">
                    <button
                      type="button"
                      onClick={toggleMainSidebar}
                      className="px-header-bar tp-offcanvas-open-btn"
                      aria-label="Open sidebar menu"
                    >
                      <FontAwesomeIcon icon={faEnvelope} />
                      {/* <span></span>
                      <span></span> */}
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
