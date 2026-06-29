"use client";

import { darkMenu } from "@/data/MenuRenderer/menu-dark";
import { lightMenu } from "@/data/MenuRenderer/menu-light";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import { MenuItem } from "@/types/menu-dt";

export default function HeaderMenu() {
    const isDark = useIsDarkRoute();
    const menu: MenuItem[] = isDark ? darkMenu : lightMenu;

    return (
        <ul>
            {menu.map((item) => (
                <li key={item.label} className={`has-dropdown ${item.isLastMenu ? 'tp-menu-last' : ''}`}>
                    <a href={item.href} style={{marginRight:"4px"}}>{item.label}</a>

                    {item.type === "mega" && (
                        <div className="tp-submenu submenu px-megamenu">
                            <div className="row">
                                {item.columns?.map((col, index) => (
                                    <div className="col-xl-6" key={`${col.title}-${index}`}>
                                        <div className="px-megamenu-box">
                                            <div className="px-megamenu-title-wrap">
                                                <span className="px-megamenu-title">{col.title}</span>
                                            </div>
                                            <ul>
                                                {col.links.map((link, index) => (
                                                    <li key={`${link.href}-${index}`}>
                                                        <a href={link.href}>{link.label}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {item.type === "dropdown" && (
                        <ul className="tp-submenu submenu">
                            {item.links?.map((link, index) => (
                                <li key={`${link.href}-${index}`}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
}
