"use client";
import SecondaryOffcanvas from "@/components/offcanvas/SecondaryOffcanvas";
import HeaderMenu from "./subComponents/HeaderMenu";
import useGlobalContext from "@/hooks/useContext";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const DesignStudioHeader = () => {
    const { isSecondarySidebarOpen, toggleSecondarySidebar } = useGlobalContext();
    const [menuOpenTemp, setMenuOpenTemp] = useState(false);

    const handleClose = () => {
        toggleSecondarySidebar();

        setMenuOpenTemp(true);

        setTimeout(() => {
            setMenuOpenTemp(false);
        }, 2000);
    };
    return (
        <>
            <div className="px-header-2-area header-fixed pt-40">
                <div className="container container-1830">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <div className="px-header-logo">
                                <Link href="/"><Image width={110} height={39} src="/assets/img/logo/logo-red-uppercase.png" alt="logo" /></Link>
                            </div>
                            <nav className="tp-mobile-menu-active d-none">
                                <HeaderMenu />
                            </nav>
                        </div>
                        <div className="col-6">
                            <div className="px-header-2-bar text-end">
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    className={`tp-hamburger-btn ${isSecondarySidebarOpen ? "active" : ""}`}
                                    aria-label={isSecondarySidebarOpen ? "Close menu" : "Open menu"}
                                    aria-expanded={isSecondarySidebarOpen}
                                    aria-controls="secondary-offcanvas"
                                >
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Secondary Offcanvas */}
            <SecondaryOffcanvas menuOpenTemp={menuOpenTemp} />
        </>
    );
};

export default DesignStudioHeader;