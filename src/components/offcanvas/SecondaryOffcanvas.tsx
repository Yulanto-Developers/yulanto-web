import { DribbleIcon, FacebookIcon, TwittorIcon, YoutubeIcon } from "@/svg/SocialIcons";
import { offcanvasMenu } from "@/data/MenuRenderer/offcanvas-menu";
import useGlobalContext from "@/hooks/useContext";
import { BlogBtnArrowIcon } from "@/svg";
import { SmartLink } from "../common";
import { useState } from "react";
import Link from "next/link";

const socialLinks = [
    {
        id: "facebook",
        href: "#",
        icon: <FacebookIcon />,
    },
    {
        id: "dribbble",
        href: "#",
        icon: <DribbleIcon />,
    },
    {
        id: "twitter",
        href: "#",
        icon: <TwittorIcon />,
    },
    {
        id: "youtube",
        href: "#",
        icon: <YoutubeIcon />,
    },
];

const SecondaryOffcanvas = ({ menuOpenTemp }: { menuOpenTemp: boolean }) => {
    const { isSecondarySidebarOpen } = useGlobalContext();

    const [activeMenu, setActiveMenu] = useState<number | null>(null);

    // Toggles dropdown menu open/close state in accordion style
    const toggleMenu = (id: number) => {
        setActiveMenu(activeMenu === id ? null : id);
    };

    return (
        <div id="offcanvasMenu" className={`px-offcanvas-2-area tp-offcanvas-2-area p-relative ${isSecondarySidebarOpen ? "menu-open" : ""} ${menuOpenTemp ? "menu-open-temp" : ""}`}>
            <div className="offcanvas-bg" id="offcanvasBg"></div>
            <div className="px-offcanvas-2-wrapper offcanvas-menu">
                <div className="container-fluid">
                    <div className="row align-items-end">
                        <div className="col-lg-6">
                            <div className="px-offcanvas-2-left">
                                <div className="tp-offcanvas-menu counter-row">
                                    <nav>
                                        <ul>
                                            {offcanvasMenu.map((item) => {
                                                const hasSubmenu =
                                                    item.submenu && item.submenu.length > 0;

                                                const isOpen =
                                                    activeMenu === item.id;

                                                return (
                                                    <li
                                                        key={item.id}
                                                        className={
                                                            hasSubmenu
                                                                ? "has-dropdown"
                                                                : ""
                                                        }
                                                    >
                                                        <a href="#" onClick={() =>
                                                            toggleMenu(
                                                                item.id
                                                            )
                                                        }>
                                                            {item.title}
                                                        </a>

                                                        {hasSubmenu && (
                                                            <>
                                                                <ul
                                                                    className="tp-submenu submenu"
                                                                    style={{
                                                                        display: isOpen
                                                                            ? "block"
                                                                            : "none",
                                                                    }}
                                                                >
                                                                    {item.submenu?.map(
                                                                        (subItem) => (
                                                                            <li
                                                                                key={subItem.id}
                                                                            >
                                                                                <SmartLink
                                                                                    href={
                                                                                        subItem.link
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        subItem.title
                                                                                    }
                                                                                </SmartLink>
                                                                            </li>
                                                                        )
                                                                    )}
                                                                </ul>
                                                                <button
                                                                    type="button"
                                                                    className="tp-menu-close"
                                                                    onClick={() => toggleMenu(item.id)}
                                                                    aria-label={isOpen ? "Close submenu" : "Open submenu"}
                                                                    aria-expanded={isOpen}
                                                                >
                                                                    <i
                                                                        className={`fa-solid ${isOpen ? "fa-minus" : "fa-plus"}`}
                                                                        aria-hidden="true"
                                                                    />
                                                                </button>
                                                            </>
                                                        )}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </nav>
                                </div>
                                <div className="px-offcanvas-2-left-btn-box d-none d-lg-flex d-flex align-items-center">
                                    <div className="px-offcanvas-2-left-btn w-100">
                                        <Link className="tp-btn-yellow-border postbox-btn w-100 text-center" href="#">
                                            <span>
                                                <span className="text-1">Buy Template</span>
                                                <span className="text-2">Buy Template</span>
                                            </span>
                                            <i>
                                                <BlogBtnArrowIcon />
                                                <BlogBtnArrowIcon />
                                            </i>
                                        </Link>
                                    </div>
                                    <div className="px-offcanvas-2-left-btn w-100">
                                        <SmartLink className="tp-btn-yellow-border postbox-btn active w-100 text-center" href="/contact-us">
                                            <span>
                                                <span className="text-1">Contact us</span>
                                                <span className="text-2">Contact us</span>
                                            </span>
                                            <i>
                                                <BlogBtnArrowIcon />
                                                <BlogBtnArrowIcon />
                                            </i>
                                        </SmartLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block">
                            <div className="px-offcanvas-2-right">
                                <div className="px-offcanvas-2-social tp-offcanvas-social mb-20">
                                    <ul>
                                        {socialLinks.map(({ id, href, icon }) => (
                                            <li key={id}>
                                                <Link href={href}>{icon}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="px-offcanvas-2-video">
                                    <div className="px-hero-video">
                                        <video loop muted autoPlay playsInline>
                                            <source src="https://html.aqlova.com/videos/pixora/banner-4-1.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondaryOffcanvas;