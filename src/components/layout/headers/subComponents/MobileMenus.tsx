"use client";

import { lightMenu } from "@/data/MenuRenderer/menu-light";
import { darkMenu } from "@/data/MenuRenderer/menu-dark";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import { MenuItem } from "@/types/menu-dt";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

interface MobileMenusProps {
    closeSidebar?: () => void;
}

const MobileMenus: React.FC<MobileMenusProps> = ({ closeSidebar }) => {
    const [activeMenu, setActiveMenu] = useState<number | null>(null);
    const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

    const pathname = usePathname();

    // Retrieves dynamically selected header menu
    const isDark = useIsDarkRoute();
    const menuItems: MenuItem[] = isDark ? darkMenu : lightMenu;

    // ==========================================================
    // CLOSE EVERYTHING
    // ==========================================================

    const closeAllMenus = () => {
        setActiveMenu(null);
        setActiveSubMenu(null);

        // Close parent mobile sidebar
        closeSidebar?.();
    };

    // ==========================================================
    // TOGGLE MAIN MENU
    // ==========================================================

    const toggleMenu = (id: number) => {
        if (activeMenu === id) {
            setActiveMenu(null);
            setActiveSubMenu(null);
        } else {
            setActiveMenu(id);
            setActiveSubMenu(null);
        }
    };

    // ==========================================================
    // TOGGLE SUB MENU
    // ==========================================================

    const toggleSubMenu = (key: string) => {
        setActiveSubMenu((current) =>
            current === key ? null : key
        );
    };

    // ==========================================================
    // WHEN PAGE CHANGES
    // ==========================================================

    useEffect(() => {
        setActiveMenu(null);
        setActiveSubMenu(null);

        // Also close sidebar after navigation
        closeSidebar?.();
    }, [pathname]);

    // ==========================================================
    // RENDER
    // ==========================================================

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
                        {/* ==================================================
                            MAIN MENU TITLE
                        ================================================== */}

                        <a
                            href={menu.href}
                            style={{
                                color: isActive ? "#808080" : "inherit",
                            }}
                            onClick={(e) => {
                                if (hasDropdown) {
                                    e.preventDefault();
                                    toggleMenu(menu.id);
                                } else {
                                    // Normal menu item
                                    closeAllMenus();
                                }
                            }}
                        >
                            {menu.label}
                        </a>

                        {/* ==================================================
                            MAIN MENU + / -
                        ================================================== */}

                        {hasDropdown && (
                            <button
                                type="button"
                                className="tp-menu-close"
                                onClick={() => toggleMenu(menu.id)}
                                aria-label={
                                    isActive
                                        ? "Close menu"
                                        : "Open menu"
                                }
                                aria-expanded={isActive}
                            >
                                <i
                                    className={`fa-solid ${
                                        isActive
                                            ? "fa-minus"
                                            : "fa-plus"
                                    }`}
                                    aria-hidden="true"
                                />
                            </button>
                        )}

                        {/* ==================================================
                            MEGA MENU
                        ================================================== */}

                        {menu.type === "mega" && (
                            <div
                                className="tp-submenu submenu px-megamenu"
                                style={{
                                    display: isActive
                                        ? "block"
                                        : "none",
                                }}
                            >
                                <div className="row">
                                    {menu.columns?.map((col) => (
                                        <div
                                            className="col-xl-6"
                                            key={col.title}
                                        >
                                            <div className="px-megamenu-box">

                                                <div className="px-megamenu-title-wrap">
                                                    <span className="px-megamenu-title">
                                                        {col?.title}
                                                    </span>
                                                </div>

                                                {col.links && (
                                                    <ul className="tp-submenu">
                                                        {col.links.map(
                                                            (
                                                                item,
                                                                j
                                                            ) => (
                                                                <li
                                                                    key={`${item.href}-${j}`}
                                                                >
                                                                    <Link
                                                                        href={
                                                                            item.href
                                                                        }
                                                                        onClick={
                                                                            closeAllMenus
                                                                        }
                                                                    >
                                                                        {
                                                                            item.label
                                                                        }
                                                                    </Link>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* ==================================================
                            NORMAL DROPDOWN
                        ================================================== */}

                        {menu.type === "dropdown" &&
                            menu.links && (
                                <ul
                                    className="tp-submenu submenu"
                                    style={{
                                        display: isActive
                                            ? "block"
                                            : "none",
                                    }}
                                >
                                    {menu.links.map((sub, i) => {
                                        const subKey = `${menu.id}-${i}`;

                                        const isSubActive =
                                            activeSubMenu === subKey;

                                        const hasSubLinks =
                                            !!sub.subLinks?.length;

                                        return (
                                            <li
                                                key={`${sub.href}-${i}`}
                                                className={`has-dropdown ${
                                                    hasSubLinks
                                                        ? "has-sub-dropdown"
                                                        : ""
                                                } ${
                                                    isSubActive
                                                        ? "active"
                                                        : ""
                                                }`}
                                            >
                                                {/* ==================================================
                                                    SUB MENU LINK
                                                ================================================== */}

                                                <a
                                                    href={sub.href}
                                                    style={{
                                                        color: isSubActive
                                                            ? "#808080"
                                                            : "inherit",
                                                    }}
                                                    onClick={(e) => {
                                                        if (
                                                            hasSubLinks
                                                        ) {
                                                            e.preventDefault();

                                                            toggleSubMenu(
                                                                subKey
                                                            );
                                                        } else {
                                                            // IMPORTANT:
                                                            // Service child without
                                                            // another submenu
                                                            // closes sidebar.
                                                            closeAllMenus();
                                                        }
                                                    }}
                                                >
                                                    {sub.label}
                                                </a>

                                                {/* ==================================================
                                                    SUB MENU + / -
                                                ================================================== */}

                                                {hasSubLinks && (
                                                    <button
                                                        type="button"
                                                        className="tp-menu-close sub-menu-close"
                                                        onClick={() =>
                                                            toggleSubMenu(
                                                                subKey
                                                            )
                                                        }
                                                        aria-label={
                                                            isSubActive
                                                                ? "Close sub menu"
                                                                : "Open sub menu"
                                                        }
                                                        aria-expanded={
                                                            isSubActive
                                                        }
                                                    >
                                                        <i
                                                            className={`fa-solid ${
                                                                isSubActive
                                                                    ? "fa-minus"
                                                                    : "fa-plus"
                                                            }`}
                                                            aria-hidden="true"
                                                        />
                                                    </button>
                                                )}

                                                {/* ==================================================
                                                    NESTED SUBMENU
                                                ================================================== */}

                                                {hasSubLinks && (
                                                    <ul
                                                        className="tp-submenu sub-submenu"
                                                        style={{
                                                            display: isSubActive
                                                                ? "block"
                                                                : "none",
                                                        }}
                                                    >
                                                        {sub.subLinks!.map(
                                                            (
                                                                nested,
                                                                k
                                                            ) => (
                                                                <li
                                                                    key={`${nested.href}-${k}`}
                                                                >
                                                                    <Link
                                                                        href={
                                                                            nested.href
                                                                        }
                                                                        onClick={
                                                                            closeAllMenus
                                                                        }
                                                                    >
                                                                        {
                                                                            nested.label
                                                                        }
                                                                    </Link>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                    </li>
                );
            })}
        </ul>
    );
};

export default MobileMenus;