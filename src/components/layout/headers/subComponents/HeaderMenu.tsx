"use client";

import { darkMenu } from "@/data/MenuRenderer/menu-dark";
import { lightMenu } from "@/data/MenuRenderer/menu-light";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import { MenuItem } from "@/types/menu-dt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export default function HeaderMenu() {
    const isDark = useIsDarkRoute();
    const menu: MenuItem[] = isDark ? darkMenu : lightMenu;

    return (
        <ul className="main-nav-list">
            {menu.map((item) => (
                <li key={item.label} className={`has-dropdown ${item.isLastMenu ? 'tp-menu-last' : ''}`}>
                    <a href={item.href} className="menu-link">
                        {item.label}
                        {item.type === "dropdown" && (
                            <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                        )}
                    </a>

                    {/* Split-pane side-opening dropdown */}
                    {item.type === "dropdown" && (
                        <div className="tp-submenu split-dropdown-menu">
                            {/* Left Side: Category Links */}
                            <ul className="dropdown-sidebar">
                                {item.links?.map((link, index) => {
                                    const hasSubLinks = link.subLinks && link.subLinks.length > 0;
                                    return (
                                        <li key={`${link.href}-${index}`} className="sidebar-item">
                                            <a href={link.href} className="sidebar-link">
                                                <span className="sidebar-link-content">
                                                    {/* Double Arrow Icon Rendered Before Submenu Text */}
                                                    <FontAwesomeIcon
                                                        icon={faAnglesRight}
                                                        className="submenu-icon"
                                                    />
                                                    {link.label}
                                                </span>
                                                {hasSubLinks && (
                                                    <FontAwesomeIcon icon={faChevronRight} className="sidebar-arrow" />
                                                )}
                                            </a>

                                            {/* Right Side Pane: Automatically visible when parent li is hovered */}
                                            {hasSubLinks && (
                                                <div className="dropdown-content-pane">
                                                    <h4 className="pane-title">{link.label}</h4>
                                                    <ul className="pane-links-list">
                                                        {link.subLinks?.map((subLink, subIndex) => (
                                                            <li key={`${subLink.label}-${subIndex}`}>
                                                                <a href={subLink.href} className="pane-link">
                                                                    {subLink.label}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
}