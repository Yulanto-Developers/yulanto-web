"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {
    className?: string;
    href: string;
    onClick?: () => void;
    children: React.ReactNode;
};

export default function SmartLink({
    className,
    href,
    children,
    onClick,
}: Props) {
    const pathname = usePathname() || "";

    const isDark = pathname.startsWith("/dark");

    // External links
    if (
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("tel:") ||
        href.startsWith("mailto:")
    ) {
        return (
            <a
                href={href}
                className={className}
                onClick={onClick}
            >
                {children}
            </a>
        );
    }

    // Internal links
    const cleanHref = href.startsWith("/")
        ? href
        : `/${href}`;

    const finalHref = isDark
        ? cleanHref.startsWith("/dark")
            ? cleanHref
            : `/dark${cleanHref}`
        : cleanHref.replace(/^\/dark/, "");

    return (
        <Link
            className={className}
            href={finalHref}
            onClick={onClick}
        >
            {children}
        </Link>
    );
}