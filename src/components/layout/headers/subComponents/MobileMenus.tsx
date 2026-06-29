"use client";

import { lightMenu } from "@/data/MenuRenderer/menu-light";
import { darkMenu } from "@/data/MenuRenderer/menu-dark";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import { MenuItem } from "@/types/menu-dt";
import { useState } from "react";
import Link from "next/link";

const MobileMenus = () => {
    const [activeMenu, setActiveMenu] = useState<number | null>(null);
    // Retrieves the dynamically selected header menu (light or dark) from custom hook

    const isDark = useIsDarkRoute();
    const menuItems: MenuItem[] = isDark ? darkMenu : lightMenu;

    // Toggles dropdown menu open/close state in accordion style
    const toggleMenu = (id: number) => {
        setActiveMenu(activeMenu === id ? null : id);
    };

    return (
        <ul>
            {menuItems.map((menu) => {
                const isActive = activeMenu === menu.id;

                const hasDropdown =
                    menu.type === "mega" ||
                    (menu.type === "dropdown" && !!menu.links?.length);

                return (
                    <li
                        key={menu.id}
                        className={`has-dropdown ${isActive ? "active" : ""}`}
                    >
                        {/* MENU TITLE */}
                        <a
                            href={menu.href}
                            onClick={(e) => {
                                if (hasDropdown) {
                                    e.preventDefault();
                                    toggleMenu(menu.id);
                                }
                            }}
                        >
                            {menu.label}
                        </a>

                        {/* + / × BUTTON */}
                        {hasDropdown && (
                            <button
                                type="button"
                                className="tp-menu-close"
                                onClick={() => toggleMenu(menu.id)}
                                aria-label={isActive ? "Close menu" : "Open menu"}
                                aria-expanded={isActive}
                            >
                                <i
                                    className={`fa-solid ${isActive ? "fa-xmark" : "fa-plus"}`}
                                    aria-hidden="true"
                                />
                            </button>
                        )}

                        {/* ===== MEGA MENU ===== */}
                        {menu.type === "mega" && (
                            <div
                                className="tp-submenu submenu px-megamenu"
                                style={{ display: isActive ? "block" : "none" }}
                            >
                                <div className="row">
                                    {/* COLUMN MENU */}
                                    {menu.columns?.map((col) => (
                                        <div className="col-xl-6" key={col.title}>
                                            <div className="px-megamenu-box">
                                                <div className="px-megamenu-title-wrap">
                                                    <span className="px-megamenu-title">{col?.title}</span>
                                                </div>
                                                {/* TEXT LINKS */}
                                                {col.links && (
                                                    <ul className="tp-submenu">
                                                        {col.links.map((item, j) => (
                                                            <li key={`${item.href}-${j}`}>
                                                                <Link href={item.href}>{item.label}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* ===== SIMPLE SUBMENU ===== */}
                        {menu.type === "dropdown" && menu.links && (
                            <ul
                                className="tp-submenu submenu"
                                style={{ display: isActive ? "block" : "none" }}
                            >
                                {menu.links.map((sub, i) => (
                                    <li key={`${sub.href}-${i}`}>
                                        <Link href={sub.href}>{sub.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default MobileMenus;


